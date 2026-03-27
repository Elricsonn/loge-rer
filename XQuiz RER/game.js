// ============================================================
//  XQuiz RER — Moteur de jeu
//
//  Marches 0-2 : Apprenti
//  Marche 3    : passage Compagnon
//  Marches 3-4 : Compagnon
//  Marche 5    : passage Maître
//  Marches 5-6 : Maître
//  Marche 7    : Section secrète (3 questions du grade max)
//               Q1 = QCM avec timer
//               Q2 = Texte à trou
//               Q3 = Question ouverte + auto-évaluation
//
//  Le grade des questions est plafonné au grade de connexion.
//  Ex : un Apprenti monte les 7 marches mais toutes les
//  questions restent de niveau Apprenti.
// ============================================================

(function () {
    'use strict';

    // --- Mode debug : toggle via bouton discret ---
    var DEBUG = false;

    // --- Grade connecté (plafond des questions) ---
    // Hiérarchie : apprenti < compagnon < maitre < me
    var GRADE_HIERARCHY = ['apprenti', 'compagnon', 'maitre', 'me'];

    function detectConnectedGrade() {
        // 1. Variable globale posée par la Loge (fusion)
        if (window._gradeConnecte) return window._gradeConnecte;
        // 2. Paramètre URL ?grade=
        var params = new URLSearchParams(window.location.search);
        var g = params.get('grade');
        if (g && GRADE_HIERARCHY.indexOf(g) !== -1) return g;
        // 3. Par défaut : accès complet (me)
        return 'me';
    }

    var connectedGrade = detectConnectedGrade();

    function gradeLevel(grade) {
        var idx = GRADE_HIERARCHY.indexOf(grade);
        return idx >= 0 ? idx : GRADE_HIERARCHY.length - 1;
    }

    // Plafonne un grade de question au grade connecté
    function capGrade(questionGrade) {
        if (gradeLevel(questionGrade) <= gradeLevel(connectedGrade)) return questionGrade;
        return connectedGrade;
    }

    // Grade des questions pour la section secrète
    function getSecretQuestionGrade() {
        // ME → maitre_ecossais, sinon le grade connecté
        if (connectedGrade === 'me') return 'maitre_ecossais';
        return connectedGrade;
    }

    // --- État du jeu ---
    let currentStep = 0;
    let score = 0;
    let questionPool = [];
    let currentQuestion = null;
    let secretQuestions = [];
    let secretIndex = 0;
    let inSecretSection = false;
    let cardState = 'ready';

    // Joker & tentatives
    let hasJoker = true;
    let secretAttempts = 0;

    // Timer (Q1 secrète)
    let timerInterval = null;
    let timerSeconds = 0;
    const SECRET_TIMER = 30; // secondes

    // Statistiques de la partie
    let gameStartTime = null;
    let stats = { apprenti: { ok: 0, ko: 0 }, compagnon: { ok: 0, ko: 0 }, maitre: { ok: 0, ko: 0 }, secret: { ok: 0, ko: 0 } };
    let missedQuestions = [];

    // Mode révision
    let reviewMode = false;
    let reviewPool = [];

    // --- Paliers de sécurité ---
    const CHECKPOINTS = [0, 3, 5];

    function getGradeForStep(step) {
        var natural;
        if (step < 3) natural = 'apprenti';
        else if (step < 5) natural = 'compagnon';
        else natural = 'maitre';
        return capGrade(natural);
    }

    function getGradeName(grade) {
        return { apprenti: 'Apprenti', compagnon: 'Compagnon', maitre: 'Maître', maitre_ecossais: 'Maître Écossais' }[grade];
    }

    function getLastCheckpoint(step) {
        let result = 0;
        for (const cp of CHECKPOINTS) {
            if (cp < step) result = cp;
        }
        return result;
    }

    // --- Positions des marches sur l'image (en %) ---
    const STEP_ZONES = {
        0: { top: 88,   height: 3, left: 25, width: 50 },
        1: { top: 85,   height: 3, left: 25, width: 50 },
        2: { top: 79.5, height: 3, left: 27, width: 46 },
        3: { top: 75.5, height: 3, left: 27, width: 46 },
        4: { top: 71.5, height: 3, left: 28, width: 44 },
        5: { top: 67.5, height: 3, left: 28, width: 44 },
        6: { top: 63.5, height: 3, left: 29, width: 42 },
        7: { top: 59.5, height: 3, left: 29, width: 42 }
    };

    // --- Éléments DOM ---
    var screenGame = document.getElementById('screen-game');
    var stepLightEls = document.querySelectorAll('.step-light');
    var screenVictory = document.getElementById('screen-victory');
    var progressDots = document.querySelectorAll('.progress-dot');
    var gradeTitle = document.getElementById('grade-title');
    var currentStepEl = document.getElementById('current-step');
    var scoreEl = document.getElementById('score');
    var card = document.getElementById('card');
    var cardContainer = document.getElementById('card-container');
    var cardCategory = document.getElementById('card-category');
    var cardQuestion = document.getElementById('card-question');
    var cardAnswers = document.getElementById('card-answers');
    var cardInstruction = document.querySelector('.card-instruction');
    var finalScoreEl = document.getElementById('final-score');
    var btnRestart = document.getElementById('btn-restart');
    var cardBack = document.getElementById('card-back');
    var feedbackSlot = document.getElementById('feedback-slot');
    var cardTimer = document.getElementById('card-timer');
    var cardInputZone = document.getElementById('card-input-zone');
    var inputAnswer = document.getElementById('input-answer');
    var btnValidate = document.getElementById('btn-validate');
    var cardSelfEval = document.getElementById('card-self-eval');
    var selfEvalReveal = document.getElementById('self-eval-reveal');
    var btnEvalYes = document.getElementById('btn-eval-yes');
    var btnEvalNo = document.getElementById('btn-eval-no');
    var secretOverlay = document.getElementById('secret-overlay');
    var secretSymbol = document.getElementById('secret-symbol');
    var secretText = document.getElementById('secret-text');
    var jokerDisplay = document.getElementById('joker-display');
    var attemptsDisplay = document.getElementById('attempts-display');
    var cartoucheSecretInfo = document.getElementById('cartouche-secret-info');
    var btnReview = document.getElementById('btn-review');

    // Dashboard
    var dashTime = document.getElementById('dash-time');
    var dashApprenti = document.getElementById('dash-apprenti');
    var dashCompagnon = document.getElementById('dash-compagnon');
    var dashMaitre = document.getElementById('dash-maitre');
    var dashSecret = document.getElementById('dash-secret');
    var missedList = document.getElementById('missed-list');
    var missedQuestionsEl = document.getElementById('missed-questions');

    // --- Utilitaires ---
    function shuffleArray(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
        return arr;
    }

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
        screen.classList.add('active');
    }

    function refillPool() {
        var grade = getGradeForStep(currentStep);
        questionPool = shuffleArray([].concat(QUESTIONS[grade]));
    }

    // --- Charger les tentatives depuis localStorage ---
    function loadAttempts() {
        var stored = localStorage.getItem('xquiz_secret_attempts');
        secretAttempts = stored ? parseInt(stored, 10) : 0;
    }

    function saveAttempts() {
        localStorage.setItem('xquiz_secret_attempts', secretAttempts);
    }

    // --- Charger/sauvegarder les erreurs pour le mode révision ---
    function loadMissed() {
        try {
            var stored = localStorage.getItem('xquiz_missed');
            return stored ? JSON.parse(stored) : [];
        } catch (e) { return []; }
    }

    function saveMissed() {
        localStorage.setItem('xquiz_missed', JSON.stringify(missedQuestions));
    }

    // =========================================================
    //  TRANSITION CINÉMATIQUE — Section Secrète
    // =========================================================
    // =========================================================
    //  TRANSITION PASSAGE DE GRADE — lettres de feu
    // =========================================================
    var gradeOverlay = document.getElementById('grade-overlay');
    var gradeFireText = document.getElementById('grade-fire-text');

    function playGradeTransition(gradeName, callback) {
        gradeFireText.textContent = gradeName.toUpperCase();
        gradeOverlay.classList.add('active');

        // Après l'animation (durée = 2.5s), nettoyer
        setTimeout(function () {
            gradeOverlay.classList.remove('active');
            if (callback) callback();
        }, 2500);
    }

    // =========================================================
    //  TRANSITION SECTION SECRÈTE
    // =========================================================
    function typeText(el, text, speed, callback) {
        var i = 0;
        el.textContent = '';
        var interval = setInterval(function () {
            if (i < text.length) {
                el.textContent += text[i];
                i++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, speed);
    }

    function playSecretTransition(callback) {
        secretOverlay.classList.add('active');
        secretSymbol.textContent = '';
        secretSymbol.className = 'secret-symbol';
        secretText.textContent = '';

        // Phase 1 : noir total, silence (1.5s)
        setTimeout(function () {

            // Phase 2 : lueur lointaine — petit point doré qui grandit
            secretSymbol.textContent = '✦';
            secretSymbol.classList.add('appear', 'phase-spark');

            setTimeout(function () {

                // Phase 3 : le symbole se révèle — delta rayonnant
                secretSymbol.textContent = '△';
                secretSymbol.classList.remove('phase-spark');
                secretSymbol.classList.add('phase-reveal');

                setTimeout(function () {

                    // Phase 4 : première ligne
                    typeText(secretText, 'Vous avez gravi les sept marches du Temple.', 45, function () {

                        setTimeout(function () {
                            // Phase 5 : le symbole pulse plus fort
                            secretSymbol.classList.add('phase-radiant');

                            // Ajouter la seconde ligne
                            var line2 = document.createElement('p');
                            line2.className = 'secret-text secret-text-2';
                            secretText.parentNode.appendChild(line2);

                            typeText(line2, 'L\'Épreuve Ultime commence.', 55, function () {

                                setTimeout(function () {
                                    // Phase 6 : troisième ligne — l'appel
                                    var line3 = document.createElement('p');
                                    line3.className = 'secret-text secret-text-3';
                                    secretText.parentNode.appendChild(line3);

                                    typeText(line3, 'Êtes-vous digne de la Lumière ?', 60, function () {

                                        // Phase 7 : pause épique puis disparition
                                        setTimeout(function () {
                                            secretOverlay.classList.add('fade-out');
                                            document.body.classList.add('secret-ambiance');
                                            setTimeout(function () {
                                                secretOverlay.classList.remove('active', 'fade-out');
                                                secretSymbol.className = 'secret-symbol';
                                                // Nettoyer les lignes ajoutées
                                                var extras = secretOverlay.querySelectorAll('.secret-text-2, .secret-text-3');
                                                extras.forEach(function(el) { el.remove(); });
                                                if (callback) callback();
                                            }, 1200);
                                        }, 2000);
                                    });
                                }, 800);
                            });
                        }, 1000);
                    });
                }, 1200);
            }, 1200);
        }, 1500);
    }

    // =========================================================
    //  TIMER (Question secrète 1)
    // =========================================================
    function startTimer() {
        timerSeconds = SECRET_TIMER;
        cardTimer.style.display = 'block';
        cardTimer.textContent = timerSeconds;
        cardTimer.classList.remove('timer-danger');

        timerInterval = setInterval(function () {
            timerSeconds--;
            cardTimer.textContent = timerSeconds;
            if (timerSeconds <= 10) cardTimer.classList.add('timer-danger');
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                // Temps écoulé = mauvaise réponse
                handleSecretTimeout();
            }
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        cardTimer.style.display = 'none';
        cardTimer.classList.remove('timer-danger');
    }

    function handleSecretTimeout() {
        cardState = 'answered';
        document.querySelectorAll('.btn-answer').forEach(function(b) {
            b.classList.add('disabled');
            if (b.dataset.correct === 'true') b.classList.add('reveal');
        });
        handleSecretWrong();
    }

    // =========================================================
    //  DÉMARRAGE DU JEU
    // =========================================================
    function startGame() {
        currentStep = 0;
        score = 0;
        inSecretSection = false;
        secretIndex = 0;
        cardState = 'ready';
        hasJoker = true;
        reviewMode = false;
        gameStartTime = Date.now();
        stats = { apprenti: { ok: 0, ko: 0 }, compagnon: { ok: 0, ko: 0 }, maitre: { ok: 0, ko: 0 }, secret: { ok: 0, ko: 0 } };
        missedQuestions = [];

        loadAttempts();
        var secretGrade = getSecretQuestionGrade();
        secretQuestions = shuffleArray([].concat(QUESTIONS[secretGrade])).slice(0, 3);

        document.body.classList.remove('secret-ambiance');
        refillPool();
        updateUI();
        showScreen(screenGame);
        prepareNewCard();
    }

    // --- Mode révision ---
    function startReview() {
        var saved = loadMissed();
        if (saved.length === 0) return;

        currentStep = 0;
        score = 0;
        inSecretSection = false;
        secretIndex = 0;
        cardState = 'ready';
        hasJoker = false;
        reviewMode = true;
        gameStartTime = Date.now();
        stats = { apprenti: { ok: 0, ko: 0 }, compagnon: { ok: 0, ko: 0 }, maitre: { ok: 0, ko: 0 }, secret: { ok: 0, ko: 0 } };
        missedQuestions = [];

        reviewPool = shuffleArray(saved);
        document.body.classList.remove('secret-ambiance');
        updateUI();
        showScreen(screenGame);
        prepareNewCard();
    }

    // =========================================================
    //  MISE À JOUR UI
    // =========================================================
    function updateUI() {
        if (inSecretSection) {
            var secretGradeName = getGradeName(getSecretQuestionGrade());
            gradeTitle.textContent = secretGradeName;
            cardCategory.textContent = 'Section Secrète';
            cardBack.classList.add('secret');
            cartoucheSecretInfo.style.display = 'block';
            jokerDisplay.textContent = hasJoker ? '★' : '—';
            jokerDisplay.className = 'cartouche-value' + (hasJoker ? ' joker-active' : '');
            attemptsDisplay.textContent = secretAttempts;
        } else {
            var grade = getGradeForStep(currentStep);
            gradeTitle.textContent = reviewMode ? 'Révision' : getGradeName(grade);
            cardBack.classList.remove('secret');
            cartoucheSecretInfo.style.display = 'none';
        }

        currentStepEl.textContent = currentStep;
        scoreEl.textContent = score;

        progressDots.forEach(function(dot) {
            var step = parseInt(dot.dataset.step);
            dot.classList.remove('reached', 'active');
            if (step < currentStep) dot.classList.add('reached');
            else if (step === currentStep) dot.classList.add('active');
        });

        updateStepLights();
    }

    // --- Lumières des marches ---
    function positionStepLights() {
        stepLightEls.forEach(function(light) {
            var step = parseInt(light.dataset.step);
            var zone = STEP_ZONES[step];
            if (!zone) return;
            light.style.left = zone.left + '%';
            light.style.top = zone.top + '%';
            light.style.width = zone.width + '%';
            light.style.height = zone.height + '%';
        });
    }

    function updateStepLights() {
        stepLightEls.forEach(function(light) {
            var step = parseInt(light.dataset.step);
            light.classList.remove('lit', 'current', 'passed');

            if (step === currentStep) {
                light.classList.add('lit', 'current');
                light.style.background = 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.5) 0%, rgba(255, 180, 0, 0.25) 50%, transparent 80%)';
                light.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.4), inset 0 0 15px rgba(255, 215, 0, 0.2)';
            } else if (step < currentStep) {
                light.classList.add('lit', 'passed');
                light.style.background = 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.25) 0%, rgba(255, 180, 0, 0.1) 50%, transparent 80%)';
                light.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.15)';
            } else {
                light.style.background = 'none';
                light.style.boxShadow = 'none';
            }
        });
        positionStepLights();
    }

    // =========================================================
    //  PRÉPARER UNE NOUVELLE CARTE
    // =========================================================
    function prepareNewCard() {
        cardState = 'ready';
        card.classList.remove('flipped');
        feedbackSlot.innerHTML = '';
        stopTimer();
        cardAnswers.style.display = '';
        cardInputZone.style.display = 'none';
        cardSelfEval.style.display = 'none';
        inputAnswer.value = '';
        inputAnswer.disabled = false;
        btnValidate.disabled = false;
        // Nettoyer les éventuels éléments de révélation ajoutés dynamiquement
        var oldReveals = cardInputZone.querySelectorAll('.fill-reveal');
        oldReveals.forEach(function(el) { el.remove(); });
        if (cardInstruction) cardInstruction.textContent = 'Tirez une carte';

        if (reviewMode) {
            // Mode révision : piocher dans le pool de révision
            if (reviewPool.length === 0) {
                endGame();
                return;
            }
            currentQuestion = reviewPool.pop();
            cardCategory.textContent = 'Révision';
            setupQCM();
        } else if (inSecretSection) {
            currentQuestion = secretQuestions[secretIndex];
            if (secretIndex === 0) {
                // Q1 : QCM avec timer
                cardCategory.textContent = 'Section Secrète — Épreuve 1/3';
                setupQCM();
            } else if (secretIndex === 1) {
                // Q2 : Texte à trou
                cardCategory.textContent = 'Section Secrète — Épreuve 2/3';
                setupFillBlank();
            } else {
                // Q3 : Question ouverte + auto-évaluation
                cardCategory.textContent = 'Section Secrète — Épreuve 3/3';
                setupOpenQuestion();
            }
        } else {
            var grade = getGradeForStep(currentStep);
            if (questionPool.length === 0) {
                questionPool = shuffleArray([].concat(QUESTIONS[grade]));
            }
            currentQuestion = questionPool.pop();
            cardCategory.textContent = 'Catéchisme — ' + getGradeName(grade);
            setupQCM();
        }
    }

    // --- Type QCM classique ---
    function setupQCM() {
        cardQuestion.textContent = currentQuestion.question;
        cardAnswers.innerHTML = '';
        cardAnswers.style.display = '';
        cardInputZone.style.display = 'none';
        cardSelfEval.style.display = 'none';

        var correctAnswer = currentQuestion.answers[currentQuestion.correct];
        var shuffledAnswers = shuffleArray([].concat(currentQuestion.answers));

        shuffledAnswers.forEach(function(answer) {
            var btn = document.createElement('button');
            btn.className = 'btn-answer';
            var isCorrectAnswer = (answer === correctAnswer);
            btn.textContent = (DEBUG && isCorrectAnswer ? '✓ ' : '') + answer;
            btn.dataset.correct = isCorrectAnswer ? 'true' : 'false';
            if (DEBUG && isCorrectAnswer) btn.classList.add('debug-hint');
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                handleAnswer(btn);
            });
            cardAnswers.appendChild(btn);
        });
    }

    // --- Type texte à trou (Q2 secrète) ---
    function setupFillBlank() {
        var correctAnswer = currentQuestion.answers[currentQuestion.correct];
        // Afficher la question avec un blanc à la place de la réponse
        cardQuestion.textContent = currentQuestion.question;
        cardAnswers.style.display = 'none';
        cardInputZone.style.display = 'flex';
        cardSelfEval.style.display = 'none';
        var correctAnswer = currentQuestion.answers[currentQuestion.correct];
        inputAnswer.value = DEBUG ? correctAnswer : '';
        inputAnswer.placeholder = 'Tapez votre réponse…';
    }

    // --- Type question ouverte (Q3 secrète) ---
    function setupOpenQuestion() {
        cardQuestion.textContent = currentQuestion.question;
        if (DEBUG) {
            cardQuestion.textContent += '\n[DEBUG: ' + currentQuestion.answers[currentQuestion.correct] + ']';
        }
        cardAnswers.style.display = 'none';
        cardInputZone.style.display = 'flex';
        cardSelfEval.style.display = 'none';
        inputAnswer.value = '';
        inputAnswer.placeholder = 'Réfléchissez, puis validez…';
    }

    // =========================================================
    //  CLIC SUR LA PIOCHE
    // =========================================================
    function handlePiocheClick() {
        if (cardState === 'ready') {
            cardState = 'question';
            card.classList.add('flipped');
            // Démarrer le timer pour Q1 secrète
            if (inSecretSection && secretIndex === 0 && !reviewMode) {
                startTimer();
            }
            // Focus l'input si nécessaire
            if (inSecretSection && secretIndex >= 1 && !reviewMode) {
                setTimeout(function() { inputAnswer.focus(); }, 600);
            }
        } else if (cardState === 'answered') {
            prepareNewCard();
        }
    }

    // =========================================================
    //  GESTION DES RÉPONSES
    // =========================================================

    // Récupérer la catégorie stat en cours
    function getCurrentStatKey() {
        if (inSecretSection) return 'secret';
        return getGradeForStep(currentStep);
    }

    // --- Mauvaise réponse en section secrète ---
    function handleSecretWrong() {
        stats.secret.ko++;
        missedQuestions.push({
            question: currentQuestion.question,
            correctAnswer: currentQuestion.answers[currentQuestion.correct],
            grade: getSecretQuestionGrade()
        });

        if (hasJoker) {
            // Utiliser le joker
            hasJoker = false;
            updateUI();
            showFeedback(false, 'Mauvaise réponse… Votre étoile de protection vous sauve ! Continuez.', true);
            secretIndex++;
            if (secretIndex >= 3) {
                showFeedback(true, 'Votre joker vous a sauvé ! Victoire !', false);
                setTimeout(function() { endGame(); }, 2500);
            }
        } else {
            // Pas de joker → retour marche 5
            inSecretSection = false;
            currentStep = 5;
            document.body.classList.remove('secret-ambiance');
            refillPool();
            updateUI();
            showFeedback(false, 'Mauvaise réponse… Retour à la marche 5.', true);
        }
    }

    // --- Bonne réponse en section secrète ---
    function handleSecretCorrect() {
        stats.secret.ok++;
        score += 20;
        secretIndex++;

        if (secretIndex >= 3) {
            showFeedback(true, 'Bonne réponse ! Vous avez percé les secrets.', false);
            setTimeout(function() { endGame(); }, 2500);
            return;
        }
        showFeedback(true, 'Bonne réponse ! Épreuve ' + (secretIndex + 1) + '/3.', true);
        updateUI();
    }

    // --- Réponse QCM ---
    function handleAnswer(btn) {
        if (cardState !== 'question') return;
        cardState = 'answered';
        stopTimer();

        var isCorrect = btn.dataset.correct === 'true';

        document.querySelectorAll('.btn-answer').forEach(function(b) {
            b.classList.add('disabled');
            if (b.dataset.correct === 'true') b.classList.add('reveal');
        });

        if (inSecretSection && !reviewMode) {
            if (isCorrect) {
                btn.classList.add('correct');
                handleSecretCorrect();
            } else {
                btn.classList.add('wrong');
                handleSecretWrong();
            }
            return;
        }

        // --- Jeu normal ou révision ---
        var statKey = getCurrentStatKey();

        if (isCorrect) {
            btn.classList.add('correct');
            stats[statKey].ok++;

            if (!reviewMode) {
                var previousGrade = getGradeForStep(currentStep);
                currentStep = Math.min(currentStep + 1, 7);
                score += 10;
                var newGrade = getGradeForStep(currentStep);

                if (currentStep >= 7) {
                    // Atteint marche 7 → transition cinématique puis section secrète
                    showFeedback(true, 'Marche 7 !', false);
                    inSecretSection = true;
                    secretIndex = 0;
                    secretAttempts++;
                    saveAttempts();
                    var sGrade = getSecretQuestionGrade();
                    secretQuestions = shuffleArray([].concat(QUESTIONS[sGrade])).slice(0, 3);
                    hasJoker = true;
                    updateUI();

                    setTimeout(function() {
                        playSecretTransition(function() {
                            prepareNewCard();
                        });
                    }, 1000);
                    return;
                } else if (newGrade !== previousGrade) {
                    refillPool();
                    updateUI();
                    playGradeTransition(getGradeName(newGrade), function() {
                        showFeedback(true, 'Marche ' + currentStep + ' ! Passage au grade de ' + getGradeName(newGrade) + '.', true);
                    });
                    return;
                } else {
                    showFeedback(true, 'Bonne réponse ! Marche ' + currentStep + '.', true);
                }
            } else {
                score += 10;
                showFeedback(true, 'Bonne réponse !', true);
            }
        } else {
            btn.classList.add('wrong');
            stats[statKey].ko++;
            missedQuestions.push({
                question: currentQuestion.question,
                correctAnswer: currentQuestion.answers[currentQuestion.correct],
                grade: statKey
            });

            if (!reviewMode) {
                var fallback = getLastCheckpoint(currentStep);
                if (fallback < currentStep) {
                    var oldGrade = getGradeForStep(currentStep);
                    currentStep = fallback;
                    var fbGrade = getGradeForStep(currentStep);
                    if (fbGrade !== oldGrade) refillPool();
                    showFeedback(false, 'Mauvaise réponse… Retour marche ' + fallback + '.', true);
                } else {
                    showFeedback(false, 'Mauvaise réponse… Marche ' + currentStep + '.', true);
                }
            } else {
                showFeedback(false, 'Mauvaise réponse.', true);
            }
        }

        updateUI();
    }

    // --- Réponse texte à trou (Q2 secrète) ---
    function handleFillBlank() {
        if (cardState !== 'question') return;
        cardState = 'answered';

        var userAnswer = inputAnswer.value.trim().toLowerCase();
        var correctAnswer = currentQuestion.answers[currentQuestion.correct];
        var correctLower = correctAnswer.toLowerCase();

        // Comparaison souple : contient la bonne réponse
        var isCorrect = userAnswer.length > 0 && (
            correctLower === userAnswer ||
            correctLower.includes(userAnswer) ||
            userAnswer.includes(correctLower)
        );

        // Afficher la bonne réponse
        inputAnswer.disabled = true;
        btnValidate.disabled = true;

        var revealDiv = document.createElement('div');
        revealDiv.className = 'fill-reveal ' + (isCorrect ? 'correct' : 'wrong');
        revealDiv.textContent = 'Réponse : ' + correctAnswer;
        cardInputZone.appendChild(revealDiv);

        if (isCorrect) {
            handleSecretCorrect();
        } else {
            handleSecretWrong();
        }
    }

    // --- Réponse question ouverte (Q3 secrète) ---
    function handleOpenValidate() {
        if (cardState !== 'question') return;
        cardState = 'self-eval';

        // Révéler la bonne réponse et demander auto-évaluation
        var correctAnswer = currentQuestion.answers[currentQuestion.correct];
        selfEvalReveal.textContent = 'Réponse attendue : ' + correctAnswer;
        cardInputZone.style.display = 'none';
        cardSelfEval.style.display = 'flex';
    }

    function handleSelfEval(honest) {
        if (cardState !== 'self-eval') return;
        cardState = 'answered';
        cardSelfEval.style.display = 'none';

        if (honest) {
            handleSecretCorrect();
        } else {
            handleSecretWrong();
        }
    }

    // =========================================================
    //  FIN DE PARTIE — TABLEAU DE BORD
    // =========================================================
    function endGame() {
        // Calculer le temps
        var elapsed = Math.floor((Date.now() - gameStartTime) / 1000);
        var minutes = Math.floor(elapsed / 60);
        var seconds = elapsed % 60;

        finalScoreEl.textContent = score;
        dashTime.textContent = minutes + ' min ' + (seconds < 10 ? '0' : '') + seconds + ' s';

        function formatStat(s) {
            var total = s.ok + s.ko;
            if (total === 0) return '—';
            return s.ok + '/' + total + ' (' + Math.round(s.ok / total * 100) + '%)';
        }
        dashApprenti.textContent = formatStat(stats.apprenti);
        dashCompagnon.textContent = formatStat(stats.compagnon);
        dashMaitre.textContent = formatStat(stats.maitre);
        dashSecret.textContent = formatStat(stats.secret);

        // Questions manquées
        missedList.innerHTML = '';
        if (missedQuestions.length > 0) {
            missedQuestionsEl.style.display = 'block';
            missedQuestions.forEach(function(mq) {
                var item = document.createElement('div');
                item.className = 'missed-item';
                item.innerHTML = '<span class="missed-q">' + escapeHtml(mq.question) + '</span>' +
                    '<span class="missed-a">→ ' + escapeHtml(mq.correctAnswer) + '</span>';
                missedList.appendChild(item);
            });
            // Sauvegarder pour le mode révision
            saveMissed();
            btnReview.style.display = 'inline-block';
        } else {
            missedQuestionsEl.style.display = 'none';
            btnReview.style.display = 'none';
        }

        // Vérifier s'il y a des erreurs précédentes pour le bouton révision
        var previousMissed = loadMissed();
        if (previousMissed.length > 0) {
            btnReview.style.display = 'inline-block';
        }

        showScreen(screenVictory);
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // =========================================================
    //  FEEDBACK
    // =========================================================
    function showFeedback(correct, message, showHint) {
        feedbackSlot.innerHTML = '';
        var div = document.createElement('div');
        div.className = 'feedback-message ' + (correct ? 'correct' : 'wrong');
        div.textContent = message;

        if (showHint) {
            var hint = document.createElement('div');
            hint.className = 'feedback-hint';
            hint.textContent = '▸ Cliquez sur la pioche pour continuer';
            div.appendChild(hint);
        }

        feedbackSlot.appendChild(div);
    }

    // =========================================================
    //  ÉVÉNEMENTS
    // =========================================================
    cardContainer.addEventListener('click', handlePiocheClick);

    btnValidate.addEventListener('click', function(e) {
        e.stopPropagation();
        if (inSecretSection && secretIndex === 1) {
            handleFillBlank();
        } else if (inSecretSection && secretIndex === 2) {
            handleOpenValidate();
        }
    });

    inputAnswer.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.stopPropagation();
            btnValidate.click();
        }
    });

    inputAnswer.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    btnEvalYes.addEventListener('click', function(e) {
        e.stopPropagation();
        handleSelfEval(true);
    });

    btnEvalNo.addEventListener('click', function(e) {
        e.stopPropagation();
        handleSelfEval(false);
    });

    var btnDebug = document.getElementById('btn-debug');
    btnDebug.addEventListener('click', function() {
        DEBUG = !DEBUG;
        btnDebug.classList.toggle('active', DEBUG);
        // Re-afficher la carte en cours avec/sans indices
        if (cardState === 'ready') prepareNewCard();
    });

    btnRestart.addEventListener('click', function() {
        startGame();
    });

    btnReview.addEventListener('click', function() {
        startReview();
    });

    window.addEventListener('resize', function() {
        positionStepLights();
    });

    // --- Démarrage ---
    startGame();

})();
