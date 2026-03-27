/**
 * MOTEUR TECHNIQUE - LOGE RER
 * Gère le Drag & Drop et les Animations de mouvement
 */

const svg = document.getElementById("loge-svg");
let selectedElement = null;
let offset, transform;

// --- 1. FONCTION D'ANIMATION (Utilisée par scenarios.js) ---
// elementId : l'ID du pion (ex: "pion-mc")
// cibleX, cibleY : coordonnées d'arrivée
// duree : temps du trajet en millisecondes
async function animerVers(elementId, cibleX, cibleY, duree = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return Promise.resolve();

    return new Promise(resolve => {
        // Initialise la transformation si elle n'existe pas
        if (element.transform.baseVal.length === 0) {
            element.transform.baseVal.insertItemBefore(svg.createSVGTransform(), 0);
        }

        const transformBase = element.transform.baseVal.getItem(0);
        const startX = transformBase.matrix.e;
        const startY = transformBase.matrix.f;

        // On accumule le temps écoulé uniquement quand la cérémonie n'est pas en pause
        let elapsed = 0;
        let lastTs = null;

        function step(now) {
            const paused = typeof Rituel !== 'undefined' && Rituel._paused;

            if (paused) {
                // Figé : on remet lastTs à null pour éviter un saut au reprise
                lastTs = null;
                requestAnimationFrame(step);
                return;
            }

            if (lastTs !== null) elapsed += now - lastTs;
            lastTs = now;

            const progress = Math.min(elapsed / duree, 1);

            // Bézier simple pour un mouvement fluide (accélération/décélération)
            const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            const curX = startX + (cibleX - startX) * ease;
            const curY = startY + (cibleY - startY) * ease;

            transformBase.setTranslate(curX, curY);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(step);
    });
}

// --- 2. LOGIQUE DE DRAG & DROP (Mouvement manuel) ---

function getMousePosition(evt) {
    const CTM = svg.getScreenCTM();
    if (evt.touches) { evt = evt.touches[0]; }
    return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
    };
}

function startDrag(evt) {
    let target = evt.target;
    // Remonte au parent si on clique sur un texte ou un cercle à l'intérieur d'un groupe <g>
    while (target && target.classList && !target.classList.contains('draggable') && target !== svg) {
        target = target.parentNode;
    }
    
    if (target && target.classList && target.classList.contains('draggable')) {
        selectedElement = target;
        offset = getMousePosition(evt);
        
        const transforms = selectedElement.transform.baseVal;
        if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
            const translate = svg.createSVGTransform();
            translate.setTranslate(0, 0);
            selectedElement.transform.baseVal.insertItemBefore(translate, 0);
        }
        
        transform = transforms.getItem(0);
        offset.x -= transform.matrix.e;
        offset.y -= transform.matrix.f;
    }
}

function drag(evt) {
    if (selectedElement) {
        evt.preventDefault();
        const coord = getMousePosition(evt);
        transform.setTranslate(coord.x - offset.x, coord.y - offset.y);
    }
}

function endDrag() {
    selectedElement = null;
}

// Écouteurs d'événements
svg.addEventListener('mousedown', startDrag);
svg.addEventListener('mousemove', drag);
svg.addEventListener('mouseup', endDrag);
svg.addEventListener('mouseleave', endDrag);

// Support Tactile
svg.addEventListener('touchstart', startDrag, {passive: false});
svg.addEventListener('touchmove', drag, {passive: false});
svg.addEventListener('touchend', endDrag);