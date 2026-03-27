// ============================================================
//  QUESTIONS DU CATÉCHISME RER
//  Extraites des Rituels RER Monaco décembre 2022
//  Format : { question, answers: [...], correct: index }
// ============================================================

const QUESTIONS = {
    apprenti: [
        // =============================================
        // PREMIÈRE SECTION
        // =============================================
        {
            question: "Êtes-vous Franc-maçon Apprenti ?",
            answers: [
                "Mes Frères et Compagnons me reconnaissent pour tel",
                "Oui, je le suis depuis mon initiation en Loge",
                "Je suis initié depuis peu et je cherche la lumière",
                "Éprouvez-moi par les signes et les attouchements"
            ],
            correct: 0
        },
        {
            question: "À quoi connaîtrai-je que vous êtes Maçon ?",
            answers: [
                "Par les signes, attouchements, mots et paroles de mon grade, et par les circonstances particulières de ma réception",
                "Par mon tablier et mes gants blancs que je porte en Loge lors des travaux, et par ma place à la colonne du Nord",
                "Par le mot de passe que je connais et que je communique au Frère Couvreur pour entrer dans le Temple",
                "Par la recommandation de mon parrain qui m'a présenté en Loge et qui répond de ma bonne conduite"
            ],
            correct: 0
        },
        {
            question: "Comment se fait le signe des Apprentis (signe en entier) ?",
            answers: [
                "On porte la main droite en équerre au col, puis on la retire horizontalement vers la droite",
                "On porte la main droite sur le cœur, puis on la laisse retomber le long du corps",
                "On lève les deux mains vers le ciel, puis on les abaisse lentement sur les côtés",
                "On pose la main gauche sur l'épaule droite, puis on la retire horizontalement"
            ],
            correct: 0
        },
        {
            question: "Quel est le signe d'ordre de l'Apprenti en Loge ?",
            answers: [
                "La main droite posée à plat sur le cœur",
                "La main droite en équerre au col",
                "Les deux mains croisées sur la poitrine",
                "La main droite levée à hauteur de l'épaule"
            ],
            correct: 1
        },
        {
            question: "Comment se donne l'attouchement de l'Apprenti ?",
            answers: [
                "Par une pression du pouce sur la première phalange de l'index de la main droite",
                "Par une triple poignée de main appuyée sur les jointures du Frère",
                "Par trois pressions successives sur le poignet droit du Frère reconnu",
                "Par un contact des coudes suivi d'une pression sur l'avant-bras droit"
            ],
            correct: 0
        },
        {
            question: "Comment se communique le mot d'Apprenti ?",
            answers: [
                "On le prononce à voix haute en Loge ouverte sous la direction du Vénérable Maître",
                "On l'écrit sur un papier que l'on remet au Second Surveillant pour vérification",
                "On le donne comme on l'a reçu, en l'épelant lettre par lettre alternativement",
                "On le chuchote à l'oreille du Frère Surveillant qui en vérifie l'exactitude"
            ],
            correct: 2
        },
        {
            question: "Quel est le mot d'Apprenti ?",
            answers: [
                "Boaz",
                "Phaleg",
                "Jakin",
                "Schibboleth"
            ],
            correct: 2
        },
        {
            question: "Que signifie le mot Jakin ?",
            answers: [
                "Dieu est ma force",
                "Le Seigneur établira",
                "Dieu m'a créé",
                "Dieu est grand"
            ],
            correct: 2
        },
        {
            question: "Quel est le nom des Apprentis, qui leur sert de mot de reconnaissance ?",
            answers: [
                "Tubalcaïn",
                "Phaleg",
                "Giblim",
                "Schibboleth"
            ],
            correct: 1
        },
        {
            question: "Que signifie le mot de reconnaissance des Apprentis ?",
            answers: [
                "C'est le nom du fondateur des bonnes et véritables loges",
                "C'est le nom de l'architecte du Temple",
                "C'est un mot hébreu signifiant « épi »",
                "C'est le nom d'un des fils de Noé"
            ],
            correct: 0
        },
        {
            question: "À quoi sert le mot de reconnaissance aux Apprentis ?",
            answers: [
                "À se reconnaître entre Frères",
                "À leur faire obtenir l'entrée de la Loge",
                "À prouver qu'ils ont été initiés",
                "À saluer le Vénérable Maître"
            ],
            correct: 1
        },
        {
            question: "Où avez-vous été reçu ?",
            answers: [
                "Dans le cabinet de réflexion, où l'on médite sur la condition humaine",
                "Entre les deux colonnes J et B, au seuil du Temple de Salomon",
                "Dans une Loge juste et parfaite, où règnent l'union, la paix et le silence",
                "Dans le Temple de Salomon, reconstruit symboliquement par les Frères"
            ],
            correct: 2
        },
        {
            question: "Qu'entendez-vous par une Loge juste et parfaite ?",
            answers: [
                "Une Loge où tous les officiers sont présents et occupent les postes qui leur sont assignés",
                "Trois la forment, cinq la composent et sept la rendent juste et parfaite",
                "Une Loge régulière reconnue par la Grande Loge et travaillant selon les rites anciens",
                "Une Loge où règne l'harmonie entre les Frères et où les travaux se déroulent dans l'ordre"
            ],
            correct: 1
        },
        {
            question: "Comment s'appelle la Loge ?",
            answers: [
                "La Loge de Salomon",
                "La Loge du Grand Architecte",
                "La Loge de Saint Jean",
                "La Loge d'Hiram"
            ],
            correct: 2
        },
        {
            question: "Pourquoi toutes les Loges portent-elles le nom de Saint Jean ?",
            answers: [
                "Parce que Saint Jean fut reconnu par les premiers Maçons comme le gardien de la lumière véritable, et que sa fête marque les solstices",
                "Pour rappeler celui qui a été élu par le Grand Architecte de l'Univers pour venir annoncer la grande lumière, et que tous les Francs-Maçons ont reconnu pour leur patron",
                "Parce que le Temple de Salomon fut consacré le jour de la Saint Jean, et que cette tradition s'est perpétuée dans toutes les Loges",
                "En mémoire de l'apôtre qui écrivit l'Apocalypse et dont les visions symboliques inspirèrent les fondateurs de l'Ordre maçonnique"
            ],
            correct: 1
        },
        {
            question: "Pourquoi les Francs-Maçons célèbrent-ils aussi la fête de Saint Jean l'Évangéliste ?",
            answers: [
                "Parce qu'il a réuni les ouvriers qui étaient dispersés",
                "Parce qu'il a écrit l'Évangile de la lumière et que ses paroles inspirent les travaux des Maçons",
                "Parce qu'il fut le dernier des apôtres et qu'il transmit les enseignements secrets aux premiers Maçons",
                "Parce qu'il a fondé la première Loge à Éphèse après la dispersion des apôtres dans le monde"
            ],
            correct: 0
        },
        {
            question: "Que représente la Loge ?",
            answers: [
                "Le monde profane que les Francs-Maçons cherchent à transformer",
                "Le cabinet de réflexion où le candidat médite avant l'initiation",
                "Le Temple de Salomon réédifié mystiquement par les Francs-Maçons",
                "La chambre du milieu où reposent les secrets des Maîtres"
            ],
            correct: 2
        },
        {
            question: "Quelle est la figure de la Loge ?",
            answers: [
                "Un cercle parfait",
                "Un triangle équilatéral",
                "Un carré long",
                "Un rectangle d'or"
            ],
            correct: 2
        },
        {
            question: "Quelle est la longueur de la Loge ?",
            answers: [
                "Du Nord au Midi",
                "De l'Orient à l'Occident",
                "D'un pilier à l'autre",
                "De la porte au trône"
            ],
            correct: 1
        },
        {
            question: "Quelle est la largeur de la Loge ?",
            answers: [
                "De l'Orient à l'Occident",
                "De la surface de la terre jusqu'au centre",
                "Du Nord au Midi",
                "D'une colonne à l'autre"
            ],
            correct: 2
        },
        {
            question: "Quelle est la profondeur de la Loge ?",
            answers: [
                "Des coudées sans nombre allant vers l'infini",
                "De la surface de la terre jusqu'au centre",
                "Sept coudées mesurées depuis le pavé mosaïque",
                "Du pavé mosaïque au plafond étoilé de la voûte"
            ],
            correct: 1
        },
        {
            question: "Quelle est la hauteur de la Loge ?",
            answers: [
                "De la surface de la terre jusqu'au centre",
                "Sept coudées",
                "Des coudées sans nombre",
                "Trois fois trois coudées"
            ],
            correct: 2
        },
        {
            question: "Que signifient les dimensions de la Loge ?",
            answers: [
                "Que la Franc-maçonnerie embrasse toute la nature, et que tous les Francs-Maçons ne forment qu'une seule et même loge",
                "Que le Temple de Salomon était le plus grand édifice du monde antique, et que les Maçons perpétuent sa mémoire sacrée",
                "Que la Maçonnerie est universelle et éternelle, répandue sur toute la surface de la terre et dans toutes les nations",
                "Que les dimensions sont symboliques et rappellent les proportions parfaites voulues par le Grand Architecte de l'Univers"
            ],
            correct: 0
        },
        {
            question: "Quels sont les fondements de la Loge ?",
            answers: [
                "La Bible, l'Équerre et le Compas, disposés sur l'autel d'Orient selon l'ordre prescrit par le rituel",
                "La Foi, l'Espérance et la Charité, trois vertus théologales qui soutiennent l'édifice spirituel du Temple",
                "Trois grandes colonnes : la Sagesse pour inventer, la Beauté pour orner et la Force pour exécuter",
                "Les trois marches de l'escalier du Temple que l'Apprenti gravit pour s'approcher de la lumière"
            ],
            correct: 2
        },
        {
            question: "Quelle est la manière de frapper des Francs-Maçons ?",
            answers: [
                "Par trois coups égaux et réguliers, frappés à intervalles constants",
                "Par trois coups, dont deux précipités et le dernier plus fort et détaché",
                "Par cinq coups rapides, dont les trois premiers suivis de deux détachés",
                "Par sept coups lents et solennels, espacés d'un silence entre chaque"
            ],
            correct: 1
        },
        {
            question: "Que signifient les deux premiers coups de la batterie des Francs-Maçons ?",
            answers: [
                "L'entrée et la sortie du Temple, marquant le passage du profane au sacré",
                "L'activité du Franc-maçon pour se mettre au travail",
                "Les deux colonnes du Temple, symboles de la Force et de la Beauté",
                "Le jour et la nuit, rappelant le cycle perpétuel des travaux"
            ],
            correct: 1
        },
        {
            question: "Que signifie le troisième coup de la batterie ?",
            answers: [
                "La fin des travaux et le moment de la clôture solennelle de la Loge",
                "L'attention qui est nécessaire au Franc-maçon pour bien conduire son travail",
                "La fermeture de la Loge et le retour des Frères au monde profane",
                "L'union des trois grades formant ensemble l'harmonie parfaite du Temple"
            ],
            correct: 1
        },
        {
            question: "Quel est le travail des Apprentis ?",
            answers: [
                "De tracer des plans sur la planche à tracer selon les instructions du Maître",
                "De tailler la pierre cubique pour lui donner sa forme parfaite et régulière",
                "De continuer celui qui leur est confié, mais non de le finir",
                "De monter les sept marches du Temple afin de s'approcher du Sanctuaire"
            ],
            correct: 2
        },
        {
            question: "Quand les Apprentis finiront-ils leur travail ?",
            answers: [
                "Quand ils seront passés Compagnons et auront acquis de nouvelles connaissances",
                "Quand il plaira au Vénérable Maître de l'accomplir",
                "Quand ils auront acquis la lumière par la pratique assidue de la vertu et du travail",
                "Après sept années de travail sur la Pierre Brute consacrées à la dégrossir"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce que la Franc-maçonnerie ?",
            answers: [
                "Une société fondée par les Templiers et transmise de génération en génération depuis les croisades",
                "Une école de sagesse et de vertu qui conduit au Temple de la vérité sous le voile des symboles",
                "Une confrérie d'architectes et de bâtisseurs œuvrant à la construction d'un temple intérieur et universel",
                "Un ordre chevaleresque hérité des croisades, perpétuant les traditions anciennes de la chevalerie"
            ],
            correct: 1
        },
        {
            question: "Quels sont les mystères de la Franc-maçonnerie ?",
            answers: [
                "Les mots, signes et attouchements transmis de grade en grade",
                "Les rituels secrets des différents grades pratiqués dans l'Ordre",
                "L'origine, la fondation et le but de l'Ordre",
                "La construction et la destruction du Temple de Salomon et sa réédification"
            ],
            correct: 2
        },
        {
            question: "Que venez-vous faire en Loge comme Apprenti ?",
            answers: [
                "Apprendre les signes et les mots de passe afin de me faire reconnaître par mes Frères en toutes circonstances",
                "Vaincre mes passions, surmonter mes préjugés et soumettre mes volontés aux lois de la Justice",
                "Observer les travaux des Compagnons et des Maîtres afin de m'instruire par leur exemple et leur sagesse",
                "Étudier les symboles et la géométrie sacrée pour comprendre les mystères de la construction du Temple"
            ],
            correct: 1
        },
        {
            question: "Comment voyagent les Apprentis ?",
            answers: [
                "Du Midi au Nord",
                "De l'Orient à l'Occident",
                "De l'Occident à l'Orient",
                "Du Nord au Midi"
            ],
            correct: 2
        },
        {
            question: "Pourquoi les Apprentis voyagent-ils de l'Occident à l'Orient ?",
            answers: [
                "Pour suivre la course du soleil",
                "Pour chercher la lumière",
                "Pour se rapprocher du Vénérable Maître",
                "Pour imiter le voyage d'Hiram"
            ],
            correct: 1
        },
        {
            question: "Les Apprentis peuvent-ils découvrir la lumière ?",
            answers: [
                "Oui, s'ils travaillent avec ardeur et persévérance sur la Pierre Brute, en suivant les conseils des Maîtres de la Loge",
                "Oui, après trois voyages accomplis autour du Temple selon les rites prescrits par le Vénérable Maître de la Loge",
                "Non, car en traversant les trois régions élémentaires, ils y trouvent des obstacles qu'ils ne sauraient vaincre",
                "Non, seuls les Maîtres le peuvent, car la lumière véritable n'est accessible qu'à ceux qui ont atteint le troisième grade"
            ],
            correct: 2
        },
        {
            question: "Comment les Apprentis peuvent-ils obtenir la lumière ?",
            answers: [
                "Par l'étude des sept arts libéraux qui ouvrent l'esprit aux vérités cachées de la nature",
                "Par un vrai désir qui leur en fait apercevoir le premier rayon dans la région orientale",
                "Par la pratique des cinq vertus enseignées dans les différents grades de la Maçonnerie",
                "Par la grâce du Grand Architecte de l'Univers qui éclaire ceux qui le cherchent sincèrement"
            ],
            correct: 1
        },
        {
            question: "Pourquoi un faible rayon de lumière est-il accordé à l'Apprenti ?",
            answers: [
                "Pour le guider dans les ténèbres du monde profane et lui montrer la voie vers la sagesse",
                "Pour lui montrer le chemin du Temple et l'encourager à persévérer dans ses travaux maçonniques",
                "Pour lui faire connaître les lois de la Justice, et lui apprendre qu'il doit s'y soumettre",
                "Pour l'encourager à persévérer dans la voie de la vertu et à poursuivre la quête de la vérité"
            ],
            correct: 2
        },
        {
            question: "Que montre-t-on à l'Apprenti à l'Occident pour augmenter son courage ?",
            answers: [
                "L'Étoile Flamboyante avec la lettre G en son centre",
                "La Clémence, qui arrête les rigueurs de la Justice",
                "La Planche à Tracer où sont figurés les emblèmes du grade",
                "Les deux colonnes J et B qui gardent l'entrée du Temple"
            ],
            correct: 1
        },
        {
            question: "Qu'apprend l'Apprenti par l'épreuve de la Clémence ?",
            answers: [
                "Que la Justice est la vertu suprême à laquelle tout Franc-Maçon doit aspirer dans chacune de ses actions et dans sa conduite envers les autres",
                "Que malgré sa faiblesse et ses erreurs, il ne doit pas désespérer s'il use de modération et d'indulgence envers les autres hommes",
                "Que la Clémence est réservée aux Maîtres qui ont acquis la sagesse suffisante pour en faire un usage éclairé et juste",
                "Que les glaives symbolisent la protection des Frères et rappellent au Maçon qu'il doit défendre la vertu contre toute atteinte"
            ],
            correct: 1
        },
        {
            question: "Sur quoi travaillent les Apprentis ?",
            answers: [
                "Sur la pierre cubique pour la polir",
                "Sur la planche à tracer",
                "Sur la pierre brute pour la dégrossir",
                "Sur le pavé mosaïque"
            ],
            correct: 2
        },
        {
            question: "Combien y a-t-il de parties dans le Temple ?",
            answers: [
                "Deux : le Porche et le Temple, séparés par un voile orné du cordon dentelé",
                "Trois : le Porche, le Temple et le Sanctuaire",
                "Quatre : le Parvis, le Porche, le Temple et le Sanctuaire, disposés d'Occident en Orient",
                "Une seule grande salle où se réunissent tous les Frères sans distinction de grade"
            ],
            correct: 1
        },
        {
            question: "Dans quelle partie du Temple avez-vous travaillé comme Apprenti ?",
            answers: [
                "Dans le Temple",
                "Dans le Sanctuaire",
                "Dans le Porche",
                "Entre les colonnes"
            ],
            correct: 2
        },
        {
            question: "Qu'avez-vous trouvé dans le Porche ?",
            answers: [
                "La pierre cubique et l'Étoile Flamboyante disposées selon les règles du Temple de Salomon",
                "Un escalier de 7 marches, que l'on monte par 3, 5 et 7, pour arriver à la porte du Temple",
                "Les trois grandes colonnes de la Sagesse, de la Force et de la Beauté, fondements du Temple",
                "Le cabinet de réflexion où le candidat médite avant d'être admis dans la Loge des Frères"
            ],
            correct: 1
        },
        {
            question: "Combien de marches de l'escalier l'Apprenti a-t-il montées ?",
            answers: [
                "Les 7 marches complètes, gravies une à une lors de la cérémonie de réception en Loge",
                "Les 5 premières, mais il a été arrêté par le Premier Surveillant avant d'atteindre le sommet",
                "Les 3 premières, mais son temps n'étant pas encore venu, on l'a fait redescendre",
                "Aucune, car l'Apprenti n'a pas encore le droit de gravir l'escalier du Temple"
            ],
            correct: 2
        },
        {
            question: "Qu'avez-vous trouvé de plus dans le Porche ?",
            answers: [
                "Le pavé mosaïque qui orne le sol du Temple et rappelle l'union des contraires",
                "La planche à tracer sur laquelle sont figurés les emblèmes du grade d'Apprenti",
                "Deux grandes colonnes à l'entrée du Temple, sur l'une desquelles était la lettre J",
                "L'autel des serments où le candidat prononce ses engagements solennels devant les Frères"
            ],
            correct: 2
        },
        {
            question: "Que signifie la lettre J sur la colonne ?",
            answers: [
                "Justice, la vertu principale du grade d'Apprenti dans l'Ordre",
                "C'est la lettre initiale du mot de mon grade",
                "Jean, le patron des Maçons dont toutes les Loges portent le nom",
                "Jérusalem, la ville sainte où fut érigé le Temple de Salomon"
            ],
            correct: 1
        },
        {
            question: "À quoi servait la colonne J ?",
            answers: [
                "À soutenir le toit du porche et marquer l'entrée sacrée du Temple",
                "À marquer l'entrée du Sanctuaire réservé aux seuls Maîtres de l'Ordre",
                "Les Apprentis s'y rassemblaient pour recevoir leur salaire",
                "Elle représentait la Force, l'une des trois vertus du Temple de Salomon"
            ],
            correct: 2
        },
        {
            question: "Avez-vous reçu votre salaire d'Apprenti ?",
            answers: [
                "Pas encore",
                "Oui, en monnaie du Temple",
                "Je suis content",
                "J'attends d'être Compagnon"
            ],
            correct: 2
        },
        // =============================================
        // DEUXIÈME SECTION
        // =============================================
        {
            question: "En quelle qualité avez-vous été introduit en Loge et reçu Franc-maçon ?",
            answers: [
                "En qualité de Profane cherchant la lumière",
                "D'abord comme Cherchant, puis reconnu Persévérant, et enfin déclaré Souffrant",
                "En qualité d'Apprenti libre et de bonnes mœurs",
                "Comme postulant recommandé par un parrain"
            ],
            correct: 1
        },
        {
            question: "Pourquoi les trois qualités de Cherchant, Persévérant et Souffrant ?",
            answers: [
                "Pour symboliser les trois parties du Temple que le candidat doit traverser avant d'accéder à la lumière et de comprendre les mystères",
                "Pour apprendre qu'il ne suffit pas de chercher et de persévérer mais qu'il faut aussi souffrir pour parvenir au terme heureux de ses recherches",
                "Pour rappeler les trois voyages du candidat autour de la Loge, durant lesquels il subit la rigueur des éléments et des épreuves",
                "Pour représenter les trois grades de la Maçonnerie que le Franc-Maçon devra gravir au cours de son cheminement spirituel"
            ],
            correct: 1
        },
        {
            question: "Comment avez-vous obtenu l'entrée de la Loge ?",
            answers: [
                "Par le mot de passe",
                "Par trois grands coups",
                "Par la recommandation du Second Surveillant",
                "Par le signe d'Apprenti"
            ],
            correct: 1
        },
        {
            question: "Que signifient les trois coups pour obtenir l'entrée de la Loge ?",
            answers: [
                "Les trois colonnes du Temple de Salomon : la Sagesse, la Force et la Beauté, fondements de tout ouvrage maçonnique",
                "Les trois grades de la Maçonnerie que le candidat devra parcourir dans son cheminement vers la lumière et la vérité",
                "Trois passages de l'Évangile : demandez, on vous donnera ; cherchez, vous trouverez ; frappez, on vous ouvrira",
                "Les trois vertus théologales de Foi, d'Espérance et de Charité que le Maçon doit pratiquer dans sa vie quotidienne"
            ],
            correct: 2
        },
        {
            question: "Comment étiez-vous habillé en entrant en Loge ?",
            answers: [
                "En habit de cérémonie, portant le tablier blanc et les gants",
                "Avec le tablier d'Apprenti noué selon les règles du grade",
                "Je n'étais ni nu ni vêtu, et j'étais dépouillé de tous métaux",
                "Les yeux bandés et pieds nus, conduit par le Second Surveillant"
            ],
            correct: 2
        },
        {
            question: "Pourquoi avez-vous été déshabillé lors de votre réception ?",
            answers: [
                "Pour m'apprendre à ne mettre aucune confiance dans les choses illusoires, et à ne pas me laisser tromper par les apparences",
                "Pour symboliser la nudité de l'homme devant Dieu, et lui rappeler qu'il ne peut rien cacher au Grand Architecte de l'Univers",
                "Pour me rappeler ma condition de mortel et l'humilité avec laquelle je dois me présenter devant les mystères de l'Ordre",
                "Pour m'humilier devant les Frères et m'enseigner que les distinctions profanes n'ont aucune valeur dans le Temple"
            ],
            correct: 0
        },
        {
            question: "Pourquoi vous a-t-on privé de vos métaux ?",
            answers: [
                "Pour rappeler la pauvreté des premiers Maçons et leur détachement des richesses matérielles du monde profane",
                "Parce que les métaux sont impurs dans le Temple de Salomon et que nul ne peut y entrer en les portant",
                "Pour m'enseigner que celui qui aime la vérité doit la préférer à toutes les choses sensibles",
                "Pour m'apprendre le détachement matériel nécessaire à celui qui entreprend le chemin de la sagesse et de la vertu"
            ],
            correct: 2
        },
        {
            question: "Que signifie le profond silence qui a régné dans la Loge après la remise du candidat aux Surveillants ?",
            answers: [
                "Le recueillement nécessaire à la prière et à la méditation sur les mystères sacrés de l'Ordre qui vont être dévoilés au candidat",
                "Le respect dû au Vénérable Maître dont l'autorité s'exerce en silence, comme la Sagesse qui gouverne le monde sans bruit",
                "Il rappelle que les matériaux du Temple de Salomon avaient été si bien préparés que l'on n'entendit le bruit d'aucun outil pour les mettre en œuvre",
                "Le silence imposé aux Apprentis qui doivent apprendre à écouter et observer avant de pouvoir prendre la parole en Loge"
            ],
            correct: 2
        },
        {
            question: "Qu'avez-vous aperçu en entrant en Loge lors de votre réception ?",
            answers: [
                "Les trois grandes lumières disposées sur l'autel d'Orient",
                "Le tapis de la Loge avec ses emblèmes mystérieux",
                "Le Vénérable Maître siégeant à l'Orient dans toute sa dignité",
                "Rien que l'esprit humain puisse comprendre, étant privé de la lumière"
            ],
            correct: 3
        },
        {
            question: "Pourquoi étiez-vous privé de la lumière lors de votre réception ?",
            answers: [
                "Pour représenter l'ignorance du profane qui n'a pas encore reçu l'enseignement des Maîtres",
                "Parce que mes passions et les ténèbres de mon âme m'empêchaient de l'apercevoir",
                "Pour m'apprendre la patience et la persévérance nécessaires à la quête de la vérité",
                "Parce que seuls les Maîtres peuvent voir la lumière dans sa plénitude et en comprendre le sens"
            ],
            correct: 1
        },
        {
            question: "Qui vous a reçu à l'entrée de la Loge ?",
            answers: [
                "Le Vénérable Maître, qui m'a accueilli à l'Orient pour m'éprouver",
                "Le Premier Surveillant, gardien de la colonne du Midi en Loge",
                "Le Frère Second Surveillant, qui m'a éprouvé par le glaive appuyé sur mon cœur",
                "Le Frère Couvreur, chargé de veiller à la sûreté du Temple"
            ],
            correct: 2
        },
        {
            question: "Que signifie le glaive sur le cœur à l'entrée de la Loge ?",
            answers: [
                "La menace de mort pour les traîtres qui oseraient révéler les secrets de l'Ordre, et la rigueur de la justice maçonnique envers les parjures",
                "Que le vrai Maçon doit toujours être prêt à sacrifier ce qu'il a de plus cher pour la justice et la vertu, et qu'il ne doit pas murmurer dans l'infortune",
                "Le pouvoir du Second Surveillant de garder l'entrée du Temple et d'en interdire l'accès à tout profane qui s'en approcherait",
                "La protection accordée au candidat par les Frères de la Loge qui veillent sur lui tout au long de son initiation sacrée"
            ],
            correct: 1
        },
        {
            question: "Combien de voyages le Second Surveillant a-t-il fait faire au candidat ?",
            answers: [
                "Un seul voyage, depuis l'Occident jusqu'à l'Orient, en passant par le Midi du Temple",
                "Cinq voyages, un pour chaque sens, afin de purifier le candidat par les éléments",
                "Sept voyages, correspondant aux sept marches de l'escalier du Temple de Salomon",
                "Trois voyages, passant par différentes routes, où il a subi la rigueur des éléments"
            ],
            correct: 3
        },
        {
            question: "Pourquoi le candidat a-t-il subi la rigueur des éléments ?",
            answers: [
                "Pour éprouver sa résistance physique et morale face aux obstacles que tout Franc-Maçon rencontre sur le chemin de la lumière",
                "Le Vénérable Maître a voulu convaincre que les éléments peuvent détruire l'être corrompu, mais qu'ils ne peuvent le régénérer",
                "Pour symboliser les saisons de l'année et les cycles de la nature auxquels l'homme est soumis dans sa quête de perfection",
                "Pour purifier le candidat de ses péchés et de ses imperfections, afin qu'il soit digne d'entrer dans le Temple sacré"
            ],
            correct: 1
        },
        {
            question: "Où le Second Surveillant a-t-il conduit le candidat après les voyages ?",
            answers: [
                "À l'Occident pour recevoir la lumière des mains du Vénérable Maître, en présence de tous les Frères assemblés",
                "Entre les deux colonnes J et B du porche du Temple, où il a donné le mot de passe aux Surveillants",
                "Au pied de l'escalier du Temple, dont il a monté et redescendu les trois premières marches, puis à l'autel de l'Orient",
                "Dans le cabinet de réflexion pour une dernière méditation sur les engagements qu'il allait prendre devant les Frères"
            ],
            correct: 2
        },
        {
            question: "Pourquoi, dans l'obscurité, le candidat a-t-il été conduit à l'Orient ?",
            answers: [
                "Pour se rapprocher de la lumière qui brille à l'Orient et que le Vénérable Maître dispense aux Frères assemblés dans le Temple",
                "Le Vénérable Maître en a donné l'ordre, voulant l'éprouver lui-même, et il n'y serait pas parvenu sans être conduit et soutenu par les deux Surveillants",
                "Parce que l'Orient est la direction sacrée d'où provient toute sagesse, et que le candidat devait s'en approcher pour être instruit",
                "Parce que le candidat l'a demandé au Second Surveillant, manifestant ainsi sa volonté de recevoir la lumière et la connaissance"
            ],
            correct: 1
        },
        {
            question: "Comment le Vénérable Maître a-t-il éprouvé le candidat à l'Orient ?",
            answers: [
                "En lui posant des questions sur le catéchisme du grade et les symboles de la Franc-maçonnerie, pour juger de son mérite",
                "En lui faisant mettre le genou droit sur l'Équerre, la main droite sur l'Évangile de Saint Jean, la pointe d'un Compas sur le cœur",
                "En lui faisant réciter un serment solennel devant les Frères, les mains posées sur la Bible ouverte à l'Évangile de Jean",
                "En lui montrant les trois grandes lumières de la Franc-maçonnerie disposées sur l'autel, afin d'éprouver sa compréhension"
            ],
            correct: 1
        },
        {
            question: "Que s'est-il passé après que le candidat a prononcé son engagement ?",
            answers: [
                "Il a reçu la lumière immédiatement des mains du Vénérable Maître",
                "Le Vénérable Maître a exigé son consentement pour subir l'épreuve du sang",
                "Il a été renvoyé à l'Occident pour y méditer sur ses engagements",
                "On lui a remis le tablier d'Apprenti et les gants blancs du grade"
            ],
            correct: 1
        },
        {
            question: "Qu'a exigé le Vénérable Maître après l'engagement du candidat ?",
            answers: [
                "Le paiement d'une cotisation",
                "La récitation du catéchisme",
                "Son consentement pour subir l'épreuve du sang",
                "Le serment de silence éternel"
            ],
            correct: 2
        },
        {
            question: "Pourquoi a-t-on exigé le consentement du candidat pour l'épreuve du sang ?",
            answers: [
                "Pour s'assurer de sa fermeté en toute occasion, et le confirmer dans l'état de Souffrant",
                "Pour vérifier sa bravoure et son courage face aux épreuves qui attendent tout Franc-Maçon",
                "Parce que le sang est sacré dans la Maçonnerie et que nul ne peut en répandre sans y consentir",
                "Pour sceller définitivement son engagement et marquer son entrée irrévocable dans l'Ordre"
            ],
            correct: 0
        },
        {
            question: "Le candidat a-t-il effectivement scellé son engagement de son sang ?",
            answers: [
                "Oui, par une goutte de sang recueillie solennellement sur la Bible ouverte à l'Évangile de Saint Jean",
                "Non, le Vénérable Maître s'est contenté de sa bonne volonté et a seulement figuré le sacrifice",
                "Oui, en signant avec son sang le registre des engagements qui est conservé dans les archives de la Loge",
                "Non, car cette pratique est interdite par les Constitutions de l'Ordre depuis les origines de la Franc-maçonnerie"
            ],
            correct: 1
        },
        {
            question: "Comment avez-vous été reçu Maçon Apprenti ?",
            answers: [
                "Par la remise du tablier et des gants blancs, symboles de l'innocence et de la pureté que le Maçon doit conserver",
                "Par l'accolade fraternelle du Vénérable Maître qui m'a reconnu comme Frère et m'a admis parmi les ouvriers du Temple",
                "Par trois coups que le Vénérable Maître a frappés sur la tête du Compas dont la pointe appuyait sur mon cœur",
                "Par le passage entre les colonnes J et B, suivi de la proclamation solennelle de mon admission dans l'Ordre"
            ],
            correct: 2
        },
        {
            question: "Qu'a-t-on fait du candidat après sa réception comme Apprenti ?",
            answers: [
                "Il a été conduit entre les colonnes J et B pour y recevoir les premiers enseignements sur les mystères de l'Ordre",
                "Il a été renvoyé à l'Occident où il a reçu un faible rayon de lumière lui découvrant la Justice et la Clémence",
                "Il a reçu son tablier et ses gants blancs des mains du Vénérable Maître comme marques distinctives de son grade",
                "Il a prêté un second serment de fidélité à l'Ordre en renouvelant ses engagements devant les Frères assemblés"
            ],
            correct: 1
        },
        {
            question: "Comment le candidat a-t-il conçu l'espérance de son avancement ?",
            answers: [
                "Par la promesse du Vénérable Maître de le faire avancer s'il se montrait digne et appliqué",
                "Par sa soumission entière aux volontés du Vénérable Maître, qui lui a mérité son indulgence",
                "Par l'intercession de son parrain qui a témoigné de sa bonne conduite et de son zèle pour l'Ordre",
                "Par l'étude assidue du catéchisme et des symboles qui forment l'instruction du grade d'Apprenti"
            ],
            correct: 1
        },
        {
            question: "Que signifie le mouvement général et le bruit confus dans la Loge avant que la lumière ne soit rendue ?",
            answers: [
                "La joie des Frères d'accueillir un nouveau membre dans la Loge et de partager avec lui les mystères de l'Ordre",
                "Les efforts qu'il faut faire pour rappeler à la lumière celui que le vice a plongé dans les ténèbres",
                "Le tumulte du monde profane dont le candidat doit s'éloigner pour trouver la paix et la sérénité du Temple",
                "La confusion des éléments avant la création du monde, rappelant le chaos originel d'où naît toute lumière"
            ],
            correct: 1
        },
        {
            question: "Qu'avez-vous aperçu lorsqu'on vous a donné la lumière ?",
            answers: [
                "Le tapis de la Loge",
                "Le Vénérable Maître à l'Orient",
                "Trois grandes lumières",
                "Les deux colonnes J et B"
            ],
            correct: 2
        },
        {
            question: "Que signifient les trois grandes lumières ?",
            answers: [
                "La Bible, l'Équerre et le Compas",
                "La Foi, l'Espérance et la Charité",
                "Le soleil, la lune, et le Vénérable Maître",
                "La Sagesse, la Force et la Beauté"
            ],
            correct: 2
        },
        {
            question: "Quel rapport y a-t-il entre le soleil, la lune et le Vénérable Maître ?",
            answers: [
                "Le VM est aussi brillant que le soleil et gouverne la Loge avec la même constance que l'astre éclaire le monde",
                "Comme le soleil éclaire le jour et la lune la nuit, le Vénérable Maître éclaire sans cesse la Loge de ses lumières",
                "Le soleil et la lune sont les bijoux du VM, ornant son sautoir comme symboles de la lumière qu'il dispense aux Frères",
                "Le VM gouverne comme le soleil gouverne les planètes, et les Surveillants obéissent comme la lune reflète sa lumière"
            ],
            correct: 1
        },
        {
            question: "Qu'avez-vous aperçu de plus après avoir reçu la lumière ?",
            answers: [
                "La Pierre cubique posée sur un socle au centre de la Loge",
                "L'Étoile Flamboyante brillant au centre du plafond",
                "Un chandelier à trois branches sur l'autel d'Orient",
                "Le Pavé Mosaïque couvrant le sol entre les deux colonnes"
            ],
            correct: 2
        },
        {
            question: "À quoi fait allusion le chandelier à trois branches ?",
            answers: [
                "Aux trois grades de la Maçonnerie : Apprenti, Compagnon et Maître, qui représentent les degrés de la connaissance maçonnique",
                "À la triple puissance qui ordonne et gouverne le monde, exprimée par le Vénérable Maître et les deux Surveillants",
                "Aux trois vertus théologales de Foi, d'Espérance et de Charité qui éclairent le chemin de tout Franc-Maçon sincère",
                "Aux trois colonnes du Temple : la Sagesse, la Force et la Beauté, fondements de l'édifice maçonnique tout entier"
            ],
            correct: 1
        },
        {
            question: "N'avez-vous rien aperçu de plus en recevant la lumière ?",
            answers: [
                "Les colonnes J et B ornées de chapiteaux sphériques portant des lys et des grenades, symboles de fécondité et de pureté",
                "Le pavé mosaïque couvrant le sol de la Loge entre les deux colonnes, formant un damier de cases blanches et noires",
                "Le tapis de la Loge formant un carré long à l'imitation du Temple de Salomon, réunissant tous les emblèmes mystérieux de la Maçonnerie",
                "L'Étoile Flamboyante brillant au centre de la Loge avec la lettre G, symbole de la Géométrie et de la connaissance"
            ],
            correct: 2
        },
        // =============================================
        // TROISIÈME SECTION
        // =============================================
        {
            question: "Pourquoi l'Apprenti répond-il « je l'espère, mais je n'en suis pas sûr » quand on lui demande d'expliquer les emblèmes ?",
            answers: [
                "Par modestie et humilité, car le Maçon doit toujours reconnaître les limites de son savoir devant les mystères de l'Ordre",
                "Parce que l'Apprenti, ne pouvant rien juger par lui-même, ne peut pas se flatter de découvrir la vérité sans le secours des Maîtres",
                "Parce qu'il n'a pas encore étudié suffisamment les catéchismes et les symboles qui lui permettraient de comprendre leur sens",
                "Parce que les emblèmes n'ont pas de signification fixe et que chaque Frère peut les interpréter selon sa propre compréhension"
            ],
            correct: 1
        },
        {
            question: "Combien y a-t-il de meubles emblématiques dans la Loge ?",
            answers: [
                "Trois : le Compas, l'Équerre et le Maillet, disposés sur l'autel",
                "Neuf : trois par grade, représentant les outils de chaque degré",
                "Six, dont trois mobiles et trois immobiles",
                "Quatre : la Pierre brute, la Pierre cubique, la Planche et le Compas"
            ],
            correct: 2
        },
        {
            question: "Quels sont les trois meubles mobiles ?",
            answers: [
                "L'Équerre, le Niveau et la Perpendiculaire",
                "Le Compas, la Truelle et le Maillet",
                "La Pierre Brute, la Pierre cubique et la Planche à tracer",
                "Le Chandelier, la Bible et l'Épée"
            ],
            correct: 1
        },
        {
            question: "À quoi sert le Compas ?",
            answers: [
                "À mesurer les angles",
                "À donner aux plans de justes proportions",
                "À tracer des cercles parfaits",
                "À vérifier l'aplomb des colonnes"
            ],
            correct: 1
        },
        {
            question: "Quel est l'usage de la Truelle pour les Francs-Maçons ?",
            answers: [
                "À cimenter les pierres du Temple et unir les matériaux entre eux",
                "À lisser la Pierre cubique afin de lui donner sa forme parfaite",
                "Les Francs-Maçons s'en servent pour élever des temples à la vertu",
                "À recouvrir les défauts des ouvrages et perfectionner l'ensemble"
            ],
            correct: 2
        },
        {
            question: "À quoi le Maillet est-il employé ?",
            answers: [
                "Uniquement à ouvrir et fermer les travaux de la Loge, servant de symbole d'autorité au Vénérable Maître et aux Surveillants qui président les cérémonies",
                "Il sert aux Apprentis pour la Pierre Brute, aux Compagnons pour les matériaux préparés, et dans les mains du VM et des Surveillants il est l'emblème de l'union et de la fermeté",
                "À frapper les trois coups de la batterie lors de l'ouverture et de la fermeture des travaux, rappelant ainsi la manière de frapper propre aux Francs-Maçons",
                "À briser la pierre brute en morceaux afin de la préparer pour le travail des Compagnons, qui la tailleront ensuite en pierre cubique selon les règles de l'art"
            ],
            correct: 1
        },
        {
            question: "Quels sont les trois meubles immobiles ?",
            answers: [
                "Le Compas, la Truelle et le Maillet",
                "L'Équerre, le Niveau et la Perpendiculaire",
                "La Pierre Brute, la Pierre cubique et la Planche à tracer",
                "La Bible, le Chandelier et l'Épée"
            ],
            correct: 2
        },
        {
            question: "À qui sont attribués les meubles immobiles ?",
            answers: [
                "Au VM, au 1er et au 2nd Surveillant, chacun recevant un meuble selon sa fonction",
                "La Pierre brute aux Apprentis, la Pierre cubique aux Compagnons, et la Planche à tracer aux Maîtres",
                "Aux trois colonnes de la Sagesse, de la Force et de la Beauté, fondements du Temple",
                "À tous les Frères sans distinction de grade, car ils symbolisent le travail commun"
            ],
            correct: 1
        },
        {
            question: "Que signifie la Pierre brute ?",
            answers: [
                "La matière première de la création, telle qu'elle existait avant que le Grand Architecte ne lui donnât forme et ordre",
                "Le fondement du Temple de Salomon sur lequel repose l'édifice tout entier, et que les ouvriers ont posé en premier",
                "Elle est le symbole vrai d'un Apprenti et du travail qu'il doit faire sur lui-même pour se rendre digne de la vraie lumière",
                "Le chaos originel d'où émergent toutes les formes, et que le Maçon doit organiser par son travail intérieur assidu"
            ],
            correct: 2
        },
        {
            question: "Pourquoi la Bible n'est-elle pas comptée parmi les meubles emblématiques ?",
            answers: [
                "Parce qu'elle est trop sacrée pour être un simple meuble, et qu'elle représente la loi divine donnée aux hommes par le Grand Architecte",
                "La Bible n'est pas un emblème, mais elle enseigne la loi qui était conservée dans le sanctuaire du Temple et que tout Franc-maçon doit méditer",
                "Parce qu'elle appartient au Vénérable Maître seul et qu'il en a la garde exclusive sur l'autel d'Orient pendant les travaux",
                "Parce qu'elle est commune à toutes les religions et qu'elle transcende les symboles particuliers propres à la Franc-maçonnerie"
            ],
            correct: 1
        },
        {
            question: "Que signifie l'épée du Vénérable Maître posée sur la Bible ?",
            answers: [
                "La justice que le VM rend dans la Loge en s'appuyant sur la loi divine et les constitutions de l'Ordre maçonnique",
                "Elle est le symbole du pouvoir confié au Vénérable Maître, lequel, étant fondé sur la loi, sert de base aux travaux des Frères",
                "La protection que le VM accorde aux Frères en veillant sur eux comme un berger veille sur son troupeau avec vigilance",
                "Le combat contre les vices et l'ignorance que le Franc-Maçon doit mener sans relâche au cours de sa vie entière"
            ],
            correct: 1
        },
        {
            question: "Combien y a-t-il de bijoux dans la Loge ?",
            answers: [
                "Six",
                "Cinq",
                "Trois",
                "Quatre"
            ],
            correct: 2
        },
        {
            question: "Quels sont les trois bijoux de la Loge ?",
            answers: [
                "Le Compas, la Truelle et le Maillet",
                "L'Équerre, le Niveau et la Perpendiculaire",
                "La Pierre Brute, la Pierre cubique et la Planche à tracer",
                "Le Soleil, la Lune et l'Étoile Flamboyante"
            ],
            correct: 1
        },
        {
            question: "À qui sont attribués les trois bijoux ?",
            answers: [
                "L'Équerre au Vénérable Maître, le Niveau au Premier Surveillant et la Perpendiculaire au Second Surveillant",
                "Le Compas au VM, l'Équerre au 1er Surveillant et le Maillet au 2nd Surveillant, chacun les portant en sautoir",
                "Aux trois Maîtres fondateurs de la Loge qui les ont reçus lors de la cérémonie de consécration du Temple",
                "À tout Frère qui les porte en sautoir lors des cérémonies officielles et des tenues solennelles de la Loge"
            ],
            correct: 0
        },
        {
            question: "Que signifie l'Équerre en tant que bijou ?",
            answers: [
                "La rectitude morale du Maçon qui doit conduire sa vie selon les principes de justice et de droiture en toutes circonstances",
                "L'emblème de la régularité et de la perfection des travaux d'une Loge, dont le Vénérable Maître doit diriger tous les plans",
                "L'instrument de mesure des angles droits qui permet de vérifier la conformité des ouvrages au plan tracé par le Maître",
                "Le signe de reconnaissance des Maîtres qui le portent en sautoir pour se distinguer des Apprentis et des Compagnons"
            ],
            correct: 1
        },
        {
            question: "Que signifie le Niveau ?",
            answers: [
                "L'égalité entre tous les Frères réunis dans la Loge, sans distinction de rang ni de fortune dans le monde profane",
                "La parfaite conformité qui doit se trouver entre les travaux des Frères et les ordres du Vénérable Maître",
                "L'horizontalité des fondations du Temple, garantissant la solidité et la stabilité de l'édifice tout entier",
                "La mesure de la progression du Maçon dans son cheminement vers la lumière et la connaissance des mystères"
            ],
            correct: 1
        },
        {
            question: "Que signifie la Perpendiculaire ?",
            answers: [
                "La verticalité des colonnes du Temple, qui s'élèvent droites vers le ciel comme le Maçon s'élève vers la vertu",
                "La droiture du cœur du Maçon qui doit toujours agir avec rectitude et sincérité dans toutes ses actions",
                "Le symbole de la solidité des ouvrages maçonniques, qui doivent être élevés exactement sur leur base",
                "L'élévation spirituelle du Frère qui progresse de grade en grade sur le chemin de la perfection morale"
            ],
            correct: 2
        },
        {
            question: "Combien y a-t-il d'ornements dans la Loge ?",
            answers: [
                "Deux : l'Étoile Flamboyante qui éclaire le centre et le Pavé Mosaïque qui orne le seuil",
                "Quatre : le Pavé Mosaïque, le cordon dentelé, l'Étoile Flamboyante et la voûte étoilée",
                "Trois : le Pavé Mosaïque, le cordon à houppes dentelées et l'Étoile flamboyante",
                "Six : trois ornements majeurs et trois ornements mineurs disposés dans le Temple"
            ],
            correct: 2
        },
        {
            question: "À quoi sert le Pavé Mosaïque ?",
            answers: [
                "À décorer le sol de la Loge et rappeler l'alternance du bien et du mal",
                "À représenter la dualité du monde, le mélange du sacré et du profane",
                "Il couvre l'entrée du souterrain du Temple entre les deux colonnes",
                "À symboliser l'union des contraires qui se retrouve dans toute la nature"
            ],
            correct: 2
        },
        {
            question: "À quoi sert le cordon à houppes dentelées ?",
            answers: [
                "À symboliser l'union fraternelle des Frères qui se tiennent ensemble par les liens de l'Ordre",
                "Il sert à décorer la partie supérieure du voile qui sépare le Temple d'avec le Sanctuaire",
                "À délimiter l'enceinte sacrée de la Loge et séparer l'espace sacré de l'espace profane du monde",
                "À représenter la chaîne d'union qui relie entre eux tous les Francs-Maçons du monde entier"
            ],
            correct: 1
        },
        {
            question: "Que représente l'Étoile flamboyante pour l'Apprenti ?",
            answers: [
                "La lumière divine",
                "Le Grand Architecte de l'Univers",
                "Il l'ignore encore, n'ayant pu la contempler",
                "La géométrie, cinquième des sciences"
            ],
            correct: 2
        },
        {
            question: "Pourquoi le soleil et la lune sont-ils représentés sur le tapis de la Loge ?",
            answers: [
                "Pour symboliser le jour et la nuit, et rappeler les cycles de la nature qui gouvernent les travaux",
                "Pour rappeler aux Francs-Maçons qu'ils doivent travailler jour et nuit à perfectionner leurs travaux",
                "Pour représenter l'Orient et l'Occident, les deux pôles entre lesquels s'étend le Temple sacré",
                "Pour honorer les astres de la création que le Grand Architecte a placés dans le firmament du ciel"
            ],
            correct: 1
        },
        {
            question: "Expliquez l'emblème du soleil sur le tapis.",
            answers: [
                "La lumière de la vérité qui brille pour tous les hommes et que le Franc-Maçon doit chercher sans relâche",
                "Il représente le Vénérable Maître qui éclaire tous les Frères de la Loge de ses lumières, comme le soleil éclaire le monde",
                "Le Grand Architecte de l'Univers qui éclaire le monde de sa sagesse et dont la lumière guide les Francs-Maçons",
                "L'Orient, siège de la sagesse, d'où provient toute lumière et vers lequel les Apprentis dirigent leurs pas"
            ],
            correct: 1
        },
        {
            question: "Expliquez l'emblème de la lune sur le tapis.",
            answers: [
                "Les ténèbres de l'ignorance qui enveloppent le profane avant son initiation, et que la lumière maçonnique vient dissiper progressivement",
                "Le monde profane qui ne reçoit qu'un reflet affaibli de la vérité, et que les Francs-Maçons cherchent à éclairer par leurs travaux",
                "Elle représente les Frères Surveillants qui, ainsi que la lune reçoit et réfléchit la lumière du soleil, reçoivent et réfléchissent celle du Vénérable Maître",
                "Le mystère de la nuit qui enveloppe les secrets de l'Ordre, et que seuls les initiés peuvent percer par la pratique de la vertu"
            ],
            correct: 2
        },
        {
            question: "Que signifie la bordure du tapis ?",
            answers: [
                "L'enceinte sacrée de la Loge qui protège les Frères du monde extérieur et délimite l'espace consacré aux travaux maçonniques",
                "Elle sert à renfermer les emblèmes mystérieux et désigne la différence extrême entre les choses sacrées et les choses profanes",
                "Les murs du Temple de Salomon qui renfermaient les trésors de sagesse et les instruments sacrés de la construction",
                "La protection des secrets maçonniques que les Frères doivent garder fidèlement dans leur cœur à tout moment de leur vie"
            ],
            correct: 1
        },
        {
            question: "Que signifient les quatre points cardinaux tracés sur le bord du tapis ?",
            answers: [
                "Les quatre éléments de la nature que le candidat a traversés lors de ses voyages et qui symbolisent les épreuves de l'initiation",
                "Les quatre vertus cardinales que le Franc-Maçon doit pratiquer : la Justice, la Tempérance, la Prudence et la Force",
                "Ils désignent l'universalité de l'Ordre répandu dans les quatre parties du monde, et l'union de toutes ces parties",
                "Les quatre saisons de l'année qui rappellent au Maçon que le temps passe et qu'il doit employer chaque heure utilement"
            ],
            correct: 2
        },
        {
            question: "Pourquoi le Temple de Salomon sert-il d'emblème aux Francs-Maçons ?",
            answers: [
                "Parce que Salomon était Franc-Maçon et qu'il fonda les premières Loges dans son Temple",
                "Pour leur rappeler qu'ils doivent bâtir dans leurs cœurs un Temple à la vertu",
                "Parce que c'est le plus beau temple jamais construit, et qu'il représente la perfection",
                "Pour honorer la mémoire de l'architecte Hiram qui donna sa vie pour garder les secrets"
            ],
            correct: 1
        },
        {
            question: "Quel âge avez-vous comme Apprenti ?",
            answers: [
                "Un an passé",
                "Cinq ans passés",
                "Trois ans passés",
                "Sept ans passés"
            ],
            correct: 2
        },
        {
            question: "Que signifie l'âge de trois ans de l'Apprenti ?",
            answers: [
                "Les trois années d'études obligatoires que l'Apprenti doit consacrer à l'instruction avant de pouvoir progresser",
                "Les trois voyages mystérieux autour du Temple, et les trois marches montées pour tâcher d'y parvenir",
                "Les trois épreuves de l'initiation que le candidat a subies lors de sa réception dans la Loge des Francs-Maçons",
                "Les trois colonnes du Temple : Sagesse, Force et Beauté, que l'Apprenti doit apprendre à connaître et à vénérer"
            ],
            correct: 1
        },
        {
            question: "Comment un Franc-maçon doit-il se distinguer des autres hommes ?",
            answers: [
                "Par ses connaissances ésotériques et ses rites secrets qui lui donnent accès aux mystères cachés de la nature et de l'Ordre",
                "Par une bienfaisance active et éclairée, une façon de penser noble et élevée, des mœurs douces et une conduite irréprochable",
                "Par sa discrétion et le secret qu'il garde sur l'Ordre, ne révélant jamais les travaux de la Loge ni les noms de ses Frères",
                "Par son rang social et sa réussite matérielle, témoignant de l'influence bénéfique de la Franc-maçonnerie sur sa vie entière"
            ],
            correct: 1
        },
        {
            question: "Quel est le symbole du Grade d'Apprenti ?",
            answers: [
                "La Pierre Brute posée sur un socle, rappelant le travail que l'Apprenti doit accomplir pour se perfectionner",
                "Une colonne brisée et tronquée par le haut, mais ferme sur sa base, avec la devise « Adhuc Stat »",
                "Le Maillet et le Ciseau croisés sur la Pierre Brute, symbolisant les outils du travail intérieur de l'Apprenti",
                "L'escalier de trois marches menant au seuil du Temple, que l'Apprenti gravit lors de sa réception en Loge"
            ],
            correct: 1
        },
        {
            question: "Que signifie le symbole de la colonne brisée avec la devise « Adhuc Stat » ?",
            answers: [
                "Que le Temple n'est pas encore achevé et que les Francs-Maçons doivent poursuivre les travaux de construction",
                "Que l'homme est dégradé, mais qu'il lui reste des moyens suffisants pour obtenir d'être rétabli dans son état originel",
                "Que la colonne J est plus ancienne que la colonne B et qu'elle porte les marques du temps et des épreuves",
                "Que la Maçonnerie résiste à travers les siècles malgré les persécutions et les obstacles qui se dressent contre elle"
            ],
            correct: 1
        },
        {
            question: "Combien y a-t-il de temps ou intervalles dans le jour maçonnique ?",
            answers: [
                "Deux : le jour consacré aux travaux de la Loge et la nuit réservée au repos des Frères",
                "Trois : le matin pour l'ouverture, midi pour les travaux et le soir pour la fermeture",
                "Quatre : de 6h à midi, de midi à 18h, de 18h à minuit, et de minuit à 6h",
                "Six intervalles égaux, chacun correspondant à une phase des travaux du Temple sacré"
            ],
            correct: 2
        },
        {
            question: "Comment désigne-t-on les intervalles du jour maçonnique dans la Loge ?",
            answers: [
                "Par ouverture et fermeture des travaux, marquées par les coups de maillet du Vénérable Maître",
                "Par midi et midi plein en commençant le travail, et par minuit et minuit plein en le finissant",
                "Par l'Orient et l'Occident, désignant le commencement et la fin des travaux de la Loge",
                "Par le lever et le coucher du soleil, suivant la course de l'astre qui éclaire le monde"
            ],
            correct: 1
        },
        {
            question: "Combien d'heures comprend chaque intervalle du jour maçonnique ?",
            answers: [
                "Trois heures exactement, correspondant aux trois grades de la Maçonnerie symbolique",
                "Sept heures symboliques, rappelant les sept marches de l'escalier du Temple de Salomon",
                "Six heures et un temps, en similitude des six années de construction du Temple et du septième temps pour la dédicace",
                "Douze heures, comme un demi-jour profane, symbolisant l'équilibre entre travail et repos"
            ],
            correct: 2
        },
        {
            question: "Pourquoi répondez-vous que c'est la douzième heure lorsqu'on se rassemble, et l'heure de convention humaine lorsqu'on sort ?",
            answers: [
                "Parce que midi est l'heure la plus sacrée du jour maçonnique et que les travaux doivent commencer à cette heure symbolique",
                "Parce que l'intervalle de la clôture à l'ouverture des travaux désigne le temps employé aux occupations profanes, pendant lequel tout travail maçonnique est suspendu",
                "Parce que la Loge travaille toujours à midi plein, symbolisant le moment où la lumière est la plus forte dans le Temple",
                "Parce que les heures profanes n'ont pas de valeur dans le Temple et que seul le temps maçonnique compte pour les Frères"
            ],
            correct: 1
        },
        {
            question: "Que doit désirer le Maçon par rapport au temps ?",
            answers: [
                "Que les travaux se terminent rapidement pour retourner aux occupations du monde profane avec sagesse",
                "Que le temps s'arrête dans le Temple afin que les Frères puissent méditer sans fin sur les mystères",
                "Le temps où il pourra sans relâche employer les heures, les jours, les mois et les années à perfectionner son travail",
                "Que le jour maçonnique dure plus longtemps pour permettre d'approfondir les mystères de l'Ordre"
            ],
            correct: 2
        }
    ],
    compagnon: [
        // =============================================
        // PREMIÈRE SECTION
        // =============================================
        {
            question: "Êtes-vous Compagnon ?",
            answers: [
                "Éprouvez-moi",
                "Oui, je le suis",
                "Mes Frères me reconnaissent pour tel",
                "J'ai fait mes voyages"
            ],
            correct: 1
        },
        {
            question: "À quoi connaîtrai-je que vous êtes Compagnon ?",
            answers: [
                "À mes nouveaux signes, attouchements, mots et paroles",
                "Par mon tablier de Compagnon",
                "Par la lettre G que je connais",
                "Par les cinq voyages que j'ai accomplis"
            ],
            correct: 0
        },
        {
            question: "Comment se fait le signe de Compagnon (signe pectoral en entier) ?",
            answers: [
                "On porte la main droite en équerre au col, puis on la retire horizontalement vers la droite",
                "On porte la main droite en équerre sur le cœur, puis on la retire horizontalement vers la droite",
                "On lève les deux mains vers le ciel en signe d'invocation au Grand Architecte de l'Univers",
                "On croise les bras sur la poitrine en signe de recueillement et de méditation silencieuse"
            ],
            correct: 1
        },
        {
            question: "Comment se donne l'attouchement du Compagnon ?",
            answers: [
                "Par une pression du pouce sur la première phalange de l'index de la main droite du Frère",
                "Par une pression du pouce entre la première et la deuxième phalange du majeur de la main droite",
                "Par une triple poignée de main accompagnée d'une pression sur le poignet du Frère reconnu",
                "Par une pression sur le poignet droit du Frère, suivie d'un attouchement sur l'avant-bras"
            ],
            correct: 1
        },
        {
            question: "Comment se communique la parole du Compagnon ?",
            answers: [
                "On la prononce à voix haute en Loge ouverte devant tous les Frères assemblés",
                "On la donne comme on l'a reçue, en l'épelant lettre par lettre alternativement",
                "On l'écrit sur un papier que l'on remet au Vénérable Maître pour vérification",
                "On la chuchote à l'oreille du Frère qui vérifie qu'elle est correctement prononcée"
            ],
            correct: 1
        },
        {
            question: "Quel est le mot du Compagnon ?",
            answers: [
                "Jakin",
                "Phaleg",
                "Boaz",
                "Schibboleth"
            ],
            correct: 2
        },
        {
            question: "Que signifie la parole Boaz ?",
            answers: [
                "Dieu m'a créé",
                "Le Seigneur est ma force",
                "Dieu est grand",
                "Le Seigneur établira"
            ],
            correct: 1
        },
        {
            question: "Quel est le nom du Compagnon qui lui sert de mot de reconnaissance ?",
            answers: [
                "Phaleg",
                "Schibboleth",
                "Giblim",
                "Tubalcaïn"
            ],
            correct: 2
        },
        {
            question: "Que signifie le mot Giblim ?",
            answers: [
                "Fils de la Veuve",
                "Expert tailleur de pierres",
                "Gardien du Temple",
                "Maître architecte"
            ],
            correct: 1
        },
        {
            question: "Pourquoi a-t-on donné le mot Giblim au Compagnon ?",
            answers: [
                "En mémoire du Maître Hiram, architecte du Temple, dont les Compagnons perpétuent le souvenir et l'œuvre",
                "Pour rappeler les cinq ordres d'architecture que le Compagnon doit étudier afin de perfectionner son art",
                "En mémoire des Giblim, habitants de Giblos, les plus habiles dans la coupe des pierres, que Salomon employa pour les fondements du Temple",
                "Parce que c'est le nom de la montagne du Temple, lieu sacré où fut élevé l'édifice voulu par Salomon"
            ],
            correct: 2
        },
        {
            question: "Quel est le signe d'Ordre en Loge de Compagnon ?",
            answers: [
                "La main droite en équerre au col",
                "La main droite en équerre sur le cœur",
                "Les deux mains croisées sur la poitrine",
                "La main droite posée sur l'épaule gauche"
            ],
            correct: 1
        },
        {
            question: "Que signifie le signe d'Ordre en Loge de Compagnon ?",
            answers: [
                "L'obéissance au Vénérable Maître et la soumission aux lois qui gouvernent les travaux de la Loge",
                "Que les Maçons doivent garder fidèlement dans leur cœur tous les secrets et mystères de l'Ordre",
                "La discrétion du Compagnon qui doit garder le silence sur les travaux et les mystères du grade",
                "Le silence imposé aux profanes, rappelant la séparation entre le monde sacré et le monde extérieur"
            ],
            correct: 1
        },
        {
            question: "Pourquoi vous êtes-vous fait recevoir Compagnon Maçon ?",
            answers: [
                "Pour connaître le mot de Maître",
                "Pour monter les marches du Temple",
                "Pour apprendre à connaître la lettre G",
                "Pour parfaire ma taille de la pierre"
            ],
            correct: 2
        },
        {
            question: "Où avez-vous vu la lettre G ?",
            answers: [
                "Sur le fronton du Temple",
                "Au centre de l'Étoile Flamboyante",
                "Sur la Pierre cubique",
                "Gravée sur la colonne B"
            ],
            correct: 1
        },
        {
            question: "Que signifie la lettre G pour le Compagnon ?",
            answers: [
                "Gloire et Grandeur du Grand Architecte",
                "Grand Architecte de l'Univers créateur",
                "Géométrie ou cinquième des sciences",
                "Gnose universelle et savoir des Maîtres"
            ],
            correct: 2
        },
        {
            question: "Où avez-vous été reçu Compagnon ?",
            answers: [
                "À l'Orient, près de l'autel du Vénérable Maître où brûlent les trois lumières",
                "À l'entrée du Temple, près de la colonne B qui est du côté du Midi",
                "Au centre de la Loge, sur le pavé mosaïque entre les deux Surveillants assemblés",
                "Dans la chambre du milieu, lieu réservé aux cérémonies de passage des grades"
            ],
            correct: 1
        },
        {
            question: "Comment êtes-vous parvenu à la Loge des Compagnons ?",
            answers: [
                "Par la porte du Nord",
                "Par l'escalier à vis",
                "Par la porte d'Occident",
                "Par la porte du Midi"
            ],
            correct: 2
        },
        {
            question: "Quel travail avez-vous fait pour être reçu Compagnon ?",
            answers: [
                "J'ai monté l'escalier du Temple",
                "J'ai tracé des plans sur la planche à tracer",
                "J'ai travaillé à polir la Pierre Brute",
                "J'ai taillé la Pierre cubique"
            ],
            correct: 2
        },
        {
            question: "Que signifie la Pierre Brute ?",
            answers: [
                "Le travail imparfait de l'Apprenti qui n'a pas encore dégrossi la matière première",
                "L'homme dans l'état d'ignorance, et le chaos dont tout est provenu",
                "La matière première de la création avant que le Grand Architecte ne lui donne forme",
                "La fondation du Temple de Salomon posée par les premiers ouvriers de l'Ordre"
            ],
            correct: 1
        },
        {
            question: "Sur quoi travaillez-vous comme Compagnon ?",
            answers: [
                "Sur la Pierre Brute",
                "Sur la Planche à Tracer",
                "Sur la Pierre cubique",
                "Sur le Pavé Mosaïque"
            ],
            correct: 2
        },
        {
            question: "Que signifie la Pierre cubique ?",
            answers: [
                "La perfection du Maître qui a achevé tous les travaux prescrits par l'Ordre et qui peut désormais enseigner aux autres",
                "La solidité des travaux des Maçons lorsqu'ils remplissent exactement les règles prescrites et les devoirs imposés par l'Ordre",
                "Le tombeau d'Hiram, construit en forme de cube parfait et décoré des symboles sacrés de la Maîtrise",
                "L'universalité de la Franc-maçonnerie répandue dans les quatre parties du monde et unie par les liens de l'Ordre"
            ],
            correct: 1
        },
        {
            question: "Comment le Maçon peut-il connaître et pratiquer les règles et devoirs de l'Ordre ?",
            answers: [
                "En étudiant les rituels et les catéchismes qui contiennent l'enseignement traditionnel de chaque grade",
                "L'univers lui en présente le tableau, et les conseils de ses Frères lui donnent les moyens de les remplir",
                "En suivant les instructions du Vénérable Maître qui transmet la sagesse acquise par les anciens",
                "En méditant la Bible posée sur l'autel d'Orient, source de toute loi et de toute vérité divine"
            ],
            correct: 1
        },
        {
            question: "Que signifient les quatre angles supérieurs de la Pierre cubique ?",
            answers: [
                "Les quatre vertus cardinales que le Franc-Maçon doit pratiquer dans sa vie quotidienne",
                "Les quatre éléments qui composent la nature et que le Maçon doit apprendre à maîtriser",
                "L'universalité de l'Ordre, et les quatre parties du monde dans lesquelles il est répandu",
                "Les quatre points cardinaux du Temple de Salomon, orientés selon les règles de l'architecture"
            ],
            correct: 2
        },
        {
            question: "Que signifient les quatre angles inférieurs de la Pierre cubique ?",
            answers: [
                "Les quatre saisons",
                "Les quatre éléments de la matière",
                "Les quatre piliers du Temple",
                "Les quatre vertus qui sont la base de l'Ordre"
            ],
            correct: 3
        },
        {
            question: "Quelles vertus le Compagnon connaît-il ?",
            answers: [
                "La Foi et l'Espérance, enseignées lors de la réception comme vertus premières",
                "La Prudence et la Force, apprises par la pratique des travaux du Temple",
                "La Justice (apprise comme Apprenti) et la Tempérance (apprise comme Compagnon)",
                "La Charité et la Sagesse, transmises par les Maîtres lors des cérémonies"
            ],
            correct: 2
        },
        {
            question: "Quelles sont les deux autres vertus que le Compagnon ne connaît pas encore ?",
            answers: [
                "La Foi et l'Espérance, réservées aux Maîtres qui ont atteint le sommet de l'escalier du Temple",
                "La Sagesse et la Force, que seuls les Maîtres peuvent enseigner dans la chambre du milieu",
                "Il l'ignore, les Compagnons n'étant pas encore assez avancés pour pouvoir les pratiquer",
                "La Charité et la Beauté, qui seront révélées lorsque le Compagnon aura accompli tous ses voyages"
            ],
            correct: 2
        },
        {
            question: "À quoi la Pierre cubique sert-elle aux Compagnons ?",
            answers: [
                "Pour tracer les plans du Temple",
                "Pour aiguiser leurs outils, et préparer ceux des Apprentis",
                "Pour mesurer les dimensions du Temple",
                "Pour polir leurs propres défauts"
            ],
            correct: 1
        },
        {
            question: "Comment avez-vous travaillé sur la Pierre cubique ?",
            answers: [
                "Par trois coups détachés, formant la batterie des Apprentis",
                "Par deux fois trois coups, qui sont la batterie de mon grade",
                "Par cinq coups réguliers, rappelant les cinq voyages mystérieux",
                "Par sept coups alternés, en mémoire des marches du Temple"
            ],
            correct: 1
        },
        {
            question: "Que signifient les deux fois trois coups de la batterie du Compagnon ?",
            answers: [
                "Les deux colonnes du Temple J et B, rappelant au Compagnon les fondements de l'Ordre et la stabilité de l'édifice",
                "La double loi imposée au Compagnon de remplir sa tâche exactement, sans aller au-delà, ni entreprendre des travaux réservés aux Maîtres",
                "Les deux voyages principaux du Compagnon, symbolisant le passage de l'ignorance à la connaissance par l'épreuve",
                "L'union des Apprentis et des Compagnons dans les travaux du Temple, réunis sous l'autorité du Vénérable Maître"
            ],
            correct: 1
        },
        {
            question: "Comment le Compagnon parviendra-t-il à tenir le juste milieu ?",
            answers: [
                "En suivant les conseils du Vénérable Maître",
                "En s'exerçant à pratiquer la vertu de son grade",
                "En étudiant les cinq ordres d'architecture",
                "En observant le travail des Maîtres"
            ],
            correct: 1
        },
        {
            question: "Quels sont les instruments symboliques des Maçons ?",
            answers: [
                "Le Maillet, le Ciseau et la Truelle",
                "La Règle, le Levier et le Fil à Plomb",
                "Le Compas, l'Équerre, le Niveau et la Perpendiculaire",
                "L'Équerre, le Compas et la Bible"
            ],
            correct: 2
        },
        {
            question: "Que signifient les instruments symboliques des Maçons ?",
            answers: [
                "La droiture de notre cœur, la justesse de notre esprit, la pureté de nos actions, et le respect envers le Grand Architecte de l'Univers",
                "Les quatre éléments de la nature que le Maçon doit apprendre à maîtriser pour parfaire son œuvre intérieure",
                "Les outils de construction du Temple de Salomon qui servirent à édifier le plus bel édifice du monde antique",
                "Les quatre vertus cardinales de Justice, Tempérance, Prudence et Force que le Franc-Maçon cultive"
            ],
            correct: 0
        },
        // =============================================
        // DEUXIÈME SECTION
        // =============================================
        {
            question: "Pouvez-vous expliquer les circonstances particulières de votre réception comme Compagnon ?",
            answers: [
                "Non, c'est un secret",
                "Oui, Vénérable Maître",
                "Je ne m'en souviens plus",
                "Seulement en partie"
            ],
            correct: 1
        },
        {
            question: "Pourquoi a-t-on interrogé le candidat sur l'instruction d'Apprenti avant de le conduire en Loge de Compagnons ?",
            answers: [
                "Pour vérifier qu'il connaissait le mot de passe et les signes de reconnaissance du premier grade de l'Ordre",
                "Pour s'assurer si, par son application et son travail, il méritait d'être avancé dans un grade plus élevé",
                "Pour respecter le protocole du rituel qui impose cette vérification avant tout changement de grade en Loge",
                "Pour l'éprouver une dernière fois en tant qu'Apprenti et s'assurer de sa fidélité aux engagements contractés"
            ],
            correct: 1
        },
        {
            question: "Pourquoi le candidat Compagnon a-t-il été conduit en Loge avec son tablier et les yeux découverts ?",
            answers: [
                "Parce qu'il était déjà Maçon, ayant été reçu Apprenti et ayant prouvé sa fidélité aux engagements de l'Ordre",
                "Pour me faire sentir que j'étais déjà sur la bonne voie, et que je devais m'appliquer à la suivre",
                "Parce que le bandeau n'est plus nécessaire après l'initiation, le candidat ayant déjà reçu la lumière en tant qu'Apprenti",
                "Pour me permettre de reconnaître mes Frères assemblés en Loge et de contempler les symboles du grade de Compagnon"
            ],
            correct: 1
        },
        {
            question: "Où le candidat Compagnon a-t-il été placé en entrant en Loge ?",
            answers: [
                "À l'Orient, devant le Vénérable Maître, pour recevoir ses instructions et ses enseignements",
                "Entre les deux Surveillants, reconnus comme Frères, guides fidèles et vrais amis",
                "Au pied de la colonne B, à la gauche du Temple, où se rassemblent les Compagnons",
                "Au centre du pavé mosaïque, face à l'Orient, en attendant les ordres du Maître"
            ],
            correct: 1
        },
        {
            question: "Qu'ont fait de vous les deux Surveillants après votre entrée en Loge ?",
            answers: [
                "Ils m'ont conduit directement à l'autel d'Orient pour y prononcer mes nouveaux engagements devant le Vénérable Maître et les Frères",
                "Le Vénérable Maître m'a permis d'entreprendre sous leur conduite les cinq voyages mystérieux autour des travaux du Temple, de l'Occident à l'Orient par le nord, ayant la pointe d'une épée nue sur le cœur",
                "Ils m'ont fait asseoir à la colonne B, place habituelle des Compagnons, pour y attendre les instructions du Vénérable Maître",
                "Ils m'ont remis le tablier de Compagnon et les gants blancs, symboles de la pureté et de l'innocence que le Maçon doit garder"
            ],
            correct: 1
        },
        {
            question: "Combien de voyages mystérieux le Compagnon devait-il accomplir ?",
            answers: [
                "Trois",
                "Sept",
                "Cinq",
                "Neuf"
            ],
            correct: 2
        },
        {
            question: "Combien de voyages le Compagnon a-t-il réellement faits lors de sa réception ?",
            answers: [
                "Cinq, accomplissant la totalité des voyages prescrits par le rituel du grade",
                "Trois, car le Vénérable Maître l'a dispensé des deux derniers, les plus dangereux",
                "Sept, un pour chaque marche de l'escalier du Temple que le Compagnon devait gravir",
                "Deux seulement, le Vénérable Maître ayant jugé suffisante cette épreuve"
            ],
            correct: 1
        },
        {
            question: "Qu'a vu le Compagnon dans les trois voyages qu'il a faits ?",
            answers: [
                "Les trois parties du Temple : le Porche, le Temple et le Sanctuaire, chacune renfermant des mystères particuliers",
                "Les trois grandes lumières de la Franc-maçonnerie : le soleil, la lune et le Vénérable Maître qui éclaire la Loge",
                "Il a éprouvé les vices des métaux, les a jetés à ses pieds hors du Temple, et a obtenu des maximes salutaires",
                "Les trois colonnes de la Sagesse, de la Force et de la Beauté, fondements de l'édifice maçonnique tout entier"
            ],
            correct: 2
        },
        {
            question: "Quels métaux le Compagnon a-t-il trouvés lors de ses trois voyages ?",
            answers: [
                "L'or, l'argent et le cuivre, les trois métaux les plus précieux du Temple",
                "Le fer, le plomb et l'étain, les trois métaux employés dans la construction",
                "L'argent au nord, l'airain au midi et le fer à l'occident",
                "L'or à l'orient, l'argent au midi et le bronze au nord du Temple sacré"
            ],
            correct: 2
        },
        {
            question: "Pourquoi n'a-t-on pas fait éprouver l'or au Compagnon ?",
            answers: [
                "Parce que l'or est trop précieux et sacré pour être manipulé par un Compagnon qui n'a pas atteint la Maîtrise",
                "Parce que l'or étant à l'orient, les Apprentis et les Compagnons ne pourraient le découvrir",
                "Parce que l'or représente la corruption du monde profane que le Maçon doit fuir et rejeter de toute son âme",
                "Parce que l'or appartient aux Maîtres seuls qui ont prouvé leur dignité par les épreuves de la Maîtrise"
            ],
            correct: 1
        },
        {
            question: "Pourquoi ne vous a-t-on pas fait connaître les autres métaux lors des voyages ?",
            answers: [
                "Parce qu'ils n'existent pas dans le Temple",
                "Parce que les deux derniers voyages étaient trop dangereux",
                "Je ne sais, ayant été dispensé des deux derniers voyages",
                "Parce que seuls les Maîtres les connaissent"
            ],
            correct: 2
        },
        {
            question: "Pourquoi l'épée nue était-elle sur le cœur du Compagnon pendant les voyages ?",
            answers: [
                "Pour représenter le sacrifice d'Hiram et rappeler au Compagnon le courage du Maître face à la mort",
                "Pour montrer le courage du Compagnon face aux épreuves et sa résolution à ne pas reculer devant le danger",
                "Pour apprendre les dangers dont il était menacé en ne suivant pas les avis de ses guides et les maximes du Vénérable Maître",
                "Pour rappeler le serment prêté lors de l'initiation et l'engagement solennel du Maçon envers l'Ordre"
            ],
            correct: 2
        },
        {
            question: "Que vous est-il arrivé après les voyages et l'épreuve de l'épée ?",
            answers: [
                "On m'a conduit directement à l'Orient pour y recevoir les instructions du grade",
                "On m'a fait retourner contre l'Occident, et on m'a mis à l'épreuve",
                "On m'a fait monter l'escalier du Temple jusqu'aux cinq premières marches",
                "On m'a donné le mot de Compagnon et les signes de reconnaissance du grade"
            ],
            correct: 1
        },
        {
            question: "En quoi consistait l'épreuve du Compagnon après les voyages ?",
            answers: [
                "En passant entre les colonnes J et B pour prouver sa connaissance des mots et signes du grade",
                "En récitant le catéchisme de l'Apprenti devant le Vénérable Maître pour prouver son instruction",
                "On lui a fait arracher le voile qui lui cachait ses propres défauts, pour lui apprendre à se connaître lui-même",
                "En traçant un plan sur la Planche à tracer pour montrer sa maîtrise de la géométrie sacrée"
            ],
            correct: 2
        },
        {
            question: "Combien de marches le Compagnon a-t-il montées lors de sa réception ?",
            answers: [
                "Trois marches, correspondant aux trois premières vertus de l'Ordre maçonnique",
                "Sept marches, gravissant la totalité de l'escalier du Temple de Salomon",
                "Les cinq premières marches, par trois et par deux pas",
                "Toutes les marches du Temple, car le Compagnon a le droit de les gravir entièrement"
            ],
            correct: 2
        },
        {
            question: "Où avez-vous été conduit ensuite par les deux Surveillants après l'épreuve ?",
            answers: [
                "À l'Orient directement, devant le Vénérable Maître, pour y recevoir les instructions du grade de Compagnon",
                "Entre les deux colonnes J et B, où j'ai reçu la lumière et les enseignements du Vénérable Maître",
                "Ils m'ont fait monter par trois et par deux pas les cinq premières marches de l'escalier, où ils m'ont arrêté avec frayeur",
                "Au pied de la colonne B, à la gauche du Temple, où les Compagnons se rassemblent pour recevoir leur salaire"
            ],
            correct: 2
        },
        {
            question: "Pourquoi le Compagnon a-t-il été arrêté aux cinq premières marches ?",
            answers: [
                "Parce qu'il n'avait pas le mot de passe nécessaire pour franchir le seuil du Sanctuaire et accéder aux mystères supérieurs",
                "Le Premier Surveillant lui a montré la Tempérance qui décorait l'extérieur du sanctuaire, et il a reconnu sa témérité, n'ayant pas encore pratiqué cette vertu",
                "Parce que les marches suivantes étaient réservées aux Maîtres qui seuls peuvent atteindre le sommet de l'escalier sacré",
                "Parce que le temps des travaux était écoulé et que la Loge devait être fermée selon les rites prescrits par le cérémonial"
            ],
            correct: 1
        },
        {
            question: "Qu'a fait le Vénérable Maître après que le Compagnon a reconnu sa témérité ?",
            answers: [
                "Il lui a accordé la lumière",
                "Il lui a ordonné de redescendre",
                "Il lui a montré l'Étoile Flamboyante",
                "Il lui a donné le mot de Compagnon"
            ],
            correct: 1
        },
        {
            question: "Pourquoi le Compagnon a-t-il été fait monter puis redescendre ?",
            answers: [
                "Pour le punir de sa témérité d'avoir voulu accéder au Sanctuaire avant d'en avoir acquis le droit par ses travaux",
                "Pour le rapprocher de la lumière, connaître s'il se soumettait à la vertu de son grade, et éprouver sa résignation",
                "Pour lui faire connaître les différentes parties du Temple et les mystères qui s'y rattachent à chaque niveau",
                "Pour symboliser les hauts et les bas de la vie humaine, et rappeler au Maçon l'inconstance de la fortune terrestre"
            ],
            correct: 1
        },
        {
            question: "Quelle récompense le Compagnon a-t-il reçue ?",
            answers: [
                "Le mot de Maître, communiqué à l'oreille par le Vénérable Maître en personne",
                "La Pierre cubique, symbole de la perfection des travaux maçonniques de l'Ordre",
                "L'Étoile flamboyante lui a été montrée dans tout son éclat, avec la lettre G au milieu",
                "Le tablier de Compagnon orné des symboles du grade et des insignes distinctifs"
            ],
            correct: 2
        },
        {
            question: "Que signifie la lettre G au milieu de l'Étoile Flamboyante, selon ce qui fut enseigné au Compagnon ?",
            answers: [
                "Grandeur et Gloire, attributs du Grand Architecte de l'Univers que tout Franc-Maçon doit vénérer",
                "Le Grand Architecte de l'Univers dont la sagesse et la puissance ont créé le monde et gouvernent les astres",
                "Géométrie, ou la cinquième des sciences à laquelle un bon Maçon doit s'appliquer préférablement",
                "Gnose, la connaissance suprême à laquelle aspirent tous les Francs-Maçons dans leur quête de la vérité"
            ],
            correct: 2
        },
        {
            question: "Qu'êtes-vous devenu après avoir reçu l'Étoile Flamboyante ?",
            answers: [
                "J'ai été renvoyé à l'Occident pour y méditer sur le sens de l'Étoile et de la lettre G",
                "On m'a conduit par trois pas maçonniques à l'autel d'Orient, où j'ai renouvelé mes premiers engagements",
                "J'ai reçu le tablier de Compagnon des mains du Vénérable Maître en signe de reconnaissance",
                "J'ai été conduit à la colonne B pour y recevoir mon salaire et les instructions du grade"
            ],
            correct: 1
        },
        {
            question: "Pourquoi le Compagnon a-t-il renouvelé ses premiers engagements ?",
            answers: [
                "Parce que les précédents n'étaient plus valables et devaient être remplacés par de nouveaux serments",
                "Pour apprendre qu'il ne suffit pas de prendre de bonnes résolutions, mais qu'il faut savoir y persister",
                "Parce que le grade de Compagnon l'exige formellement et que le rituel prescrit cette cérémonie",
                "Pour se conformer au rituel ancien transmis par les fondateurs de l'Ordre maçonnique"
            ],
            correct: 1
        },
        // =============================================
        // TROISIÈME SECTION
        // =============================================
        {
            question: "Que vous a produit votre persévérance lors de la réception ?",
            answers: [
                "Le droit de siéger à l'Orient auprès du Vénérable Maître et de participer aux conseils de la Loge",
                "La connaissance du mot de Maître que j'ai reçu du Vénérable Maître lors de la cérémonie de réception",
                "De nouveaux signes, attouchements, mots et paroles, par lesquels j'ai été reconnu Compagnon par mes Frères",
                "Le privilège de diriger les travaux de la Loge en l'absence du Vénérable Maître et des Surveillants"
            ],
            correct: 2
        },
        // =============================================
        // TROISIÈME SECTION
        // =============================================
        {
            question: "Quelle différence y a-t-il entre le tapis des Compagnons et celui des Apprentis ?",
            answers: [
                "Ils sont complètement différents dans leurs symboles et leurs proportions selon le grade",
                "Le tapis du Compagnon est plus grand et comporte davantage de symboles que celui de l'Apprenti",
                "Aucun autre, si ce n'est la lettre B sur la colonne à la gauche du Temple",
                "Le tapis du Compagnon contient l'Étoile Flamboyante avec la lettre G en son centre lumineux"
            ],
            correct: 2
        },
        {
            question: "Pourquoi l'Apprenti n'avait-il pas aperçu la lettre B sur la seconde colonne ?",
            answers: [
                "Parce qu'il était dans l'obscurité lors de sa réception et ne pouvait voir les colonnes du Temple",
                "Parce qu'il lui était défendu d'en approcher, ce qui n'est permis qu'aux Compagnons",
                "Parce que la lettre n'y était pas encore gravée et qu'elle n'apparaît qu'au grade de Compagnon",
                "Parce qu'il n'avait pas la connaissance nécessaire pour en comprendre la signification mystérieuse"
            ],
            correct: 1
        },
        {
            question: "Combien y a-t-il de colonnes à l'entrée du Temple ?",
            answers: [
                "Une seule, la colonne J, à laquelle les Apprentis se rassemblent pour recevoir leur salaire",
                "Trois, représentant la Sagesse, la Force et la Beauté, fondements de l'édifice maçonnique",
                "Deux, en tout semblables, mais distinguées par la première lettre du nom qui leur est attribué",
                "Quatre, aux quatre points cardinaux, marquant les directions sacrées du Temple de Salomon"
            ],
            correct: 2
        },
        {
            question: "Quelle était la hauteur des colonnes à l'entrée du Temple ?",
            answers: [
                "Vingt et une coudées",
                "Douze coudées",
                "Dix-huit coudées",
                "Quinze coudées"
            ],
            correct: 2
        },
        {
            question: "De quelle hauteur étaient les fûts des colonnes ?",
            answers: [
                "Dix-huit coudées",
                "Quinze coudées",
                "Douze coudées",
                "Neuf coudées"
            ],
            correct: 2
        },
        {
            question: "De quelle hauteur étaient les chapiteaux des colonnes ?",
            answers: [
                "Trois coudées",
                "Près de cinq coudées",
                "Sept coudées",
                "Deux coudées"
            ],
            correct: 1
        },
        {
            question: "Quelle était la hauteur totale des deux colonnes ?",
            answers: [
                "Trente-cinq coudées",
                "Trente coudées",
                "Vingt-cinq coudées",
                "Quarante coudées"
            ],
            correct: 0
        },
        {
            question: "Quelle était la circonférence des colonnes ?",
            answers: [
                "Six coudées",
                "Neuf coudées",
                "Douze coudées",
                "Quinze coudées"
            ],
            correct: 2
        },
        {
            question: "Quelle était l'épaisseur des colonnes ?",
            answers: [
                "Un pied",
                "Six pouces",
                "Quatre pouces",
                "Deux pouces"
            ],
            correct: 2
        },
        {
            question: "Pourquoi les colonnes n'avaient-elles que quatre pouces d'épaisseur ?",
            answers: [
                "Pour des raisons esthétiques",
                "Parce qu'elles étaient creuses",
                "Pour économiser le métal",
                "Parce qu'elles étaient en marbre fin"
            ],
            correct: 1
        },
        {
            question: "Quel était l'ornement des colonnes ?",
            answers: [
                "Des feuilles d'acacia et des roses entrelacées, symboles de la résurrection et de la pureté",
                "Des chapiteaux corinthiens ornés de volutes et de feuilles d'acanthe selon l'art antique",
                "Elles soutenaient des globes sphériques ornés de lys et de grenades",
                "Des bas-reliefs représentant les outils des Maçons et les symboles sacrés de l'Ordre"
            ],
            correct: 2
        },
        {
            question: "À quoi servaient les colonnes pendant la construction du Temple ?",
            answers: [
                "À soutenir le toit du porche et marquer l'entrée principale du Temple de Salomon",
                "À délimiter l'entrée du Temple et séparer l'espace sacré de l'espace profane",
                "Elles servaient à renfermer les outils de Géométrie et le trésor pour payer les ouvriers",
                "À marquer les points cardinaux du Temple et orienter les ouvriers dans leurs travaux"
            ],
            correct: 2
        },
        {
            question: "Pouvez-vous donner la parfaite explication des colonnes ?",
            answers: [
                "Oui, elles représentent la Force et la Beauté, deux des trois colonnes qui soutiennent l'édifice maçonnique",
                "Oui, elles symbolisent l'union des Frères dans la construction du Temple et la perpétuité de l'Ordre maçonnique",
                "Je ne le puis, parce qu'elles renferment des mystères qui me sont encore inconnus, quoiqu'ils me soient indiqués par les noms qu'elles portent en Loge",
                "Oui, elles sont les piliers de la Maçonnerie sur lesquels repose tout l'enseignement symbolique de l'Ordre"
            ],
            correct: 2
        },
        {
            question: "Quel est le symbole de la Loge des Compagnons ?",
            answers: [
                "L'Étoile Flamboyante avec la lettre G, symbole de la Géométrie et de la connaissance",
                "Le Compas ouvert sur l'Équerre, représentant la maîtrise de l'esprit sur la matière",
                "Une Pierre cubique sur laquelle est posée une Équerre avec les mots : Dirigit obliqua",
                "La colonne B surmontée d'un globe sphérique orné de lys et de grenades entrelacés"
            ],
            correct: 2
        },
        {
            question: "Que signifient le symbole et l'inscription « Dirigit obliqua » ?",
            answers: [
                "La direction de l'Occident vers l'Orient",
                "Le but et la perfection des travaux de l'Ordre",
                "La rectitude du Franc-Maçon",
                "Le chemin droit vers la lumière"
            ],
            correct: 1
        },
        {
            question: "Quel âge avez-vous comme Compagnon ?",
            answers: [
                "Trois ans",
                "Sept ans passés",
                "Cinq ans passés",
                "Neuf ans"
            ],
            correct: 2
        },
        {
            question: "Comment le Compagnon a-t-il acquis l'âge de cinq ans ?",
            answers: [
                "En passant cinq épreuves successives prescrites par le rituel du grade de Compagnon",
                "En faisant les cinq voyages mystérieux autour des ouvrages, et en montant les cinq premières marches du Temple",
                "En étudiant pendant cinq années les catéchismes et les symboles de la Franc-maçonnerie",
                "En pratiquant les cinq vertus enseignées dans les différents grades de l'Ordre maçonnique"
            ],
            correct: 1
        },
        {
            question: "Que signifie l'âge de cinq ans du Compagnon ?",
            answers: [
                "Les cinq sens du corps humain que le Compagnon apprend à maîtriser",
                "Qu'il a appris à connaître les cinq ordres d'architecture",
                "Les cinq vertus cardinales que le Compagnon doit pratiquer dans sa vie",
                "Les cinq voyages accomplis lors de la cérémonie de réception du grade"
            ],
            correct: 1
        },
        {
            question: "Quels sont les cinq ordres d'architecture ?",
            answers: [
                "Toscan, Dorique, Corinthien, Gothique, Renaissance, selon la tradition des bâtisseurs",
                "Égyptien, Grec, Romain, Byzantin, Gothique, représentant les grandes civilisations",
                "L'Ionique, le Dorique, le Corinthien, le Romain et le Composite",
                "Classique, Baroque, Rococo, Néoclassique, Art nouveau, selon l'histoire de l'art"
            ],
            correct: 2
        },
        {
            question: "Quel rapport y a-t-il entre les ordres d'architecture et les travaux mystérieux des Maçons ?",
            answers: [
                "Aucun, c'est purement symbolique et les ordres d'architecture n'ont pas de lien direct avec les travaux maçonniques",
                "Comme la connaissance des cinq ordres est nécessaire à un architecte, les Maçons doivent acquérir toutes les connaissances contribuant à la perfection de leurs travaux",
                "Les cinq ordres représentent les cinq grades que le Maçon doit parcourir dans son cheminement vers la perfection",
                "Chaque ordre correspond à un voyage du Compagnon, symbolisant les étapes de la construction du Temple intérieur"
            ],
            correct: 1
        },
        {
            question: "Avez-vous été payé de votre travail comme Compagnon ?",
            answers: [
                "Non, pas encore",
                "Oui, Vénérable Maître",
                "Je l'ignore",
                "Seulement en partie"
            ],
            correct: 1
        },
        {
            question: "Où le Compagnon a-t-il reçu son salaire ?",
            answers: [
                "À la colonne J, à la droite du Temple, où s'assemblaient les Apprentis pour recevoir leur paie",
                "À la colonne B, à la gauche du Temple, où s'assemblaient les Compagnons",
                "À l'autel d'Orient, des mains du Vénérable Maître qui distribue les récompenses méritées",
                "Dans la chambre du milieu, réservée aux Maîtres et aux cérémonies les plus solennelles"
            ],
            correct: 1
        },
        {
            question: "Combien avez-vous reçu comme salaire de Compagnon ?",
            answers: [
                "Le mot de Maître que le Vénérable Maître m'a communiqué en récompense",
                "Un salaire en monnaie du Temple distribué par le Premier Surveillant en Loge",
                "Je connais la signification de la lettre B et je suis content",
                "La planche à tracer sur laquelle sont gravés les symboles sacrés du grade"
            ],
            correct: 2
        }
    ],
    maitre: [
        // =============================================
        // PREMIÈRE SECTION
        // =============================================
        {
            question: "Êtes-vous Maître Franc-Maçon ?",
            answers: [
                "Oui, je le suis, ayant été élevé à la Maîtrise par les cinq points parfaits",
                "Mes Frères me reconnaissent pour tel et j'ai reçu les signes du grade",
                "Éprouvez-moi et vous reconnaîtrez que l'acacia m'est connu",
                "J'ai été élevé à la Maîtrise dans la chambre du milieu du Temple"
            ],
            correct: 2
        },
        {
            question: "À quoi connaîtrai-je que vous êtes Maître ?",
            answers: [
                "Par ma connaissance de l'histoire d'Hiram et des circonstances tragiques de sa mort dans le Temple",
                "À mes nouveaux signe, attouchement et mots, et aux cinq points parfaits de la Maîtrise",
                "Par mon tablier et mes gants de Maître que je porte lors des tenues et des cérémonies de la Loge",
                "Par le mot de Maître que je possède et que je communique selon les formes prescrites par le rituel"
            ],
            correct: 1
        },
        {
            question: "Comment se fait le signe de Maître (signe entier) ?",
            answers: [
                "En un seul geste de la main droite portée au col, puis retirée horizontalement vers la droite",
                "En trois temps : on porte les mains sur le visage, puis on les abaisse, puis on fait le signe de douleur",
                "En levant les deux mains vers le ciel en signe d'invocation au Grand Architecte de l'Univers",
                "En posant la main droite sur le cœur puis en la retirant horizontalement dans un geste solennel"
            ],
            correct: 1
        },
        {
            question: "Comment se donne l'attouchement du Maître ?",
            answers: [
                "Par une pression du pouce sur l'index de la main droite du Frère reconnu",
                "Par l'attouchement du pied, qui est le quatrième point de la Maîtrise",
                "Par une triple poignée de main accompagnée des cinq points de la Maîtrise",
                "Par un contact des coudes suivi d'une pression sur l'avant-bras droit"
            ],
            correct: 1
        },
        {
            question: "Comment se communique le Mot du Maître ?",
            answers: [
                "On le prononce à voix haute en Loge ouverte devant tous les Frères assemblés",
                "En Loge ouverte, c'est « M B », mais hors de la Loge, c'est « M. B. » seulement",
                "On l'écrit sur un papier que l'on brûle ensuite selon le rituel prescrit",
                "On l'épelle lettre par lettre alternativement comme le mot d'Apprenti"
            ],
            correct: 1
        },
        {
            question: "Que signifie le mot M…B… ?",
            answers: [
                "Le Maître est mort, assassiné par les traîtres",
                "Le fils de la Veuve est retourné vers sa mère",
                "Le corps est corrompu, ou la chair quitte les os",
                "La parole est perdue depuis la mort d'Hiram"
            ],
            correct: 2
        },
        {
            question: "Quel est le mot de reconnaissance pour obtenir l'entrée de la Loge de Maître ?",
            answers: [
                "Phaleg",
                "Giblim",
                "Schibboleth",
                "Tubalcaïn"
            ],
            correct: 2
        },
        {
            question: "Pourquoi les Maîtres ont-ils le mot de reconnaissance Schibboleth ?",
            answers: [
                "Parce que c'est le nom du fondateur de l'Ordre maçonnique qui établit les premières Loges dans le Temple de Salomon",
                "En mémoire de ce qu'il servit aux troupes de Galaad, sous la conduite de Jephté, à reconnaître les rebelles d'Ephraim au passage du Jourdain",
                "Parce que c'est un mot sacré du Temple de Salomon, inscrit sur les colonnes du porche et transmis aux Maîtres seuls",
                "En l'honneur du Grand Architecte de l'Univers dont la sagesse a inspiré la construction du Temple de Salomon"
            ],
            correct: 1
        },
        {
            question: "Comment le mot Schibboleth put-il servir de moyen de reconnaissance ?",
            answers: [
                "Parce que seuls les Maîtres le connaissaient et que les Compagnons n'en avaient pas reçu la communication",
                "Parce qu'il fallait le prononcer dans un ordre précis que seuls les initiés pouvaient connaître et respecter",
                "Parce que ceux de Galaad lui donnaient sa véritable prononciation tandis que ceux d'Ephraim ne pouvaient pas",
                "Parce qu'il était gravé sur une pièce de métal que les Maîtres portaient sur eux en signe de reconnaissance"
            ],
            correct: 2
        },
        {
            question: "Pourquoi l'usage du mot Schibboleth est-il conservé parmi les Maîtres ?",
            answers: [
                "Pour perpétuer la tradition du Temple de Salomon et les usages ancestraux de l'Ordre maçonnique",
                "Pour leur rappeler qu'ils doivent toujours se tenir en garde contre les faux-frères",
                "Pour honorer la mémoire de Jephté qui sauva le peuple de Galaad des rebelles d'Ephraim",
                "Pour distinguer les Maîtres des Compagnons lors de l'entrée en Loge et des cérémonies rituelles"
            ],
            correct: 1
        },
        {
            question: "Quel est le nom d'un Maître Franc-Maçon ?",
            answers: [
                "Hiram",
                "Gabaon",
                "Moria",
                "Luwton"
            ],
            correct: 1
        },
        {
            question: "Que signifie le nom Gabaon ?",
            answers: [
                "Le Temple de la lumière où les Maîtres se réunissent pour célébrer les mystères de leur grade",
                "Le sommet de la montagne sacrée d'où le Grand Architecte contemple les travaux des hommes",
                "C'est le nom d'un lieu sur la Montagne de Moria, où David avait fait élever un autel et placer l'Arche d'Alliance",
                "Le lieu de repos d'Hiram, où son corps fut transporté après avoir été retrouvé par les neuf Maîtres"
            ],
            correct: 2
        },
        {
            question: "Quel nom donne-t-on au fils d'un Maître ?",
            answers: [
                "Giblim",
                "Luwton",
                "Gabaon",
                "Phaleg"
            ],
            correct: 1
        },
        {
            question: "Que signifie le nom Luwton ?",
            answers: [
                "Fils de la Veuve",
                "Pierre angulaire",
                "Élève en architecture",
                "Héritier du Temple"
            ],
            correct: 2
        },
        {
            question: "Quel avantage a le fils d'un Maître dans l'Ordre ?",
            answers: [
                "Il est dispensé des épreuves de l'initiation et peut accéder directement au premier grade de l'Ordre",
                "Il reçoit directement le grade de Compagnon sans avoir à passer par l'apprentissage habituel en Loge",
                "Il a le privilège d'être reçu Maçon par préférence à tout autre, malgré toute distinction de rang civil et d'âge",
                "Il connaît le mot de Maître dès sa naissance et peut entrer dans toute Loge sans être éprouvé"
            ],
            correct: 2
        },
        {
            question: "En quoi consistent les cinq points parfaits de la Maîtrise ?",
            answers: [
                "Cinq mots prononcés à l'oreille du Frère, chacun correspondant à l'un des cinq sens et à l'un des cinq ordres d'architecture",
                "Le pied droit contre le pied droit, le genou contre le genou, la poitrine contre la poitrine, la main droite empoignant la main droite et la main gauche appliquée sous l'épaule gauche",
                "Cinq pas en direction de l'Orient, depuis le tombeau d'Hiram jusqu'à l'autel du Vénérable Maître, formant une double équerre",
                "Cinq coups frappés sur le tombeau d'Hiram, rappelant les cinq voyages du Compagnon et les cinq marches de l'escalier"
            ],
            correct: 1
        },
        {
            question: "Que signifient les cinq points parfaits de la Maîtrise ?",
            answers: [
                "Les cinq ordres d'architecture que le Maître doit connaître pour diriger les travaux de construction du Temple",
                "Ils rappellent aux Maçons la sincérité, la cordialité, l'union intime, et l'obligation de se secourir les uns les autres",
                "Les cinq voyages du Compagnon accomplis par le Maître et qui symbolisent les étapes de la connaissance maçonnique",
                "Les cinq sens qui mènent à la connaissance du monde et permettent au Maître de percevoir la vérité cachée"
            ],
            correct: 1
        },
        {
            question: "Les Maçons doivent-ils des secours à tous ceux qui portent ce titre ?",
            answers: [
                "Oui, sans aucune distinction de grade ni de mérite, car la fraternité maçonnique est universelle et absolue",
                "Non, seulement à ceux de leur Loge, car les liens fraternels se nouent au sein de l'atelier où l'on travaille",
                "Ils doivent à tous les secours que l'humanité réclame, mais l'instruction et les secours de l'intime fraternité uniquement à ceux qui s'en rendent dignes",
                "Seulement aux Maîtres, car ceux-ci ont prouvé leur fidélité à l'Ordre par les épreuves qu'ils ont subies"
            ],
            correct: 2
        },
        {
            question: "Quel est le signe d'Ordre en Loge de Maître ?",
            answers: [
                "Le signe guttural, hérité du grade d'Apprenti en Loge",
                "Le signe pectoral, propre au grade de Compagnon en Loge",
                "Le second temps du signe de Maître, appelé signe de douleur",
                "Le signe manuel, fait de la main droite vers l'avant"
            ],
            correct: 2
        },
        {
            question: "Combien les Maçons ont-ils de signes ?",
            answers: [
                "Trois, un par grade : le signe guttural pour l'Apprenti, le pectoral pour le Compagnon et celui de douleur pour le Maître",
                "Le nombre ne peut en être fixé, car tout équerre, niveau et perpendiculaire leur sert à en former",
                "Sept, comme les arts libéraux, chaque signe correspondant à l'une des connaissances que le Maçon doit acquérir",
                "Neuf, comme les lumières autour du tombeau d'Hiram, chaque signe rappelant l'un des Maîtres envoyés par Salomon"
            ],
            correct: 1
        },
        {
            question: "Combien de signes déterminés les Maçons ont-ils ?",
            answers: [
                "Trois : le Guttural pour les Apprentis, le Pectoral pour les Compagnons et le Manuel pour tous",
                "Quatre : le Guttural, le Pectoral, le Pédestre et le Manuel",
                "Cinq : le Guttural, le Pectoral, le Pédestre, le Manuel et le signe de détresse",
                "Sept : un signe différent pour chaque degré de l'escalier du Temple"
            ],
            correct: 1
        },
        {
            question: "À quel grade correspond le signe Guttural ?",
            answers: [
                "Compagnon",
                "Maître",
                "Apprenti",
                "Tous les grades"
            ],
            correct: 2
        },
        {
            question: "À quel grade correspond le signe Pectoral ?",
            answers: [
                "Apprenti",
                "Compagnon",
                "Maître",
                "Tous les grades"
            ],
            correct: 1
        },
        {
            question: "À quel grade correspond le signe Pédestre ?",
            answers: [
                "Apprenti",
                "Compagnon",
                "Maître",
                "Tous les grades"
            ],
            correct: 2
        },
        {
            question: "En quoi consiste la marche des Maîtres ?",
            answers: [
                "En sept pas allant de l'Occident à l'Orient, correspondant aux sept marches de l'escalier du Temple",
                "En trois pas, de l'Occident au Midi, du Midi au Nord et du Nord à l'Orient, les pieds formant une double équerre",
                "En cinq pas en ligne droite vers l'Orient, rappelant les cinq voyages mystérieux du Compagnon",
                "En neuf pas autour du tombeau d'Hiram, en mémoire des neuf Maîtres envoyés par Salomon"
            ],
            correct: 1
        },
        {
            question: "Que signifie la double équerre dans la marche des Maîtres ?",
            answers: [
                "La dualité de l'homme, partagé entre le bien et le mal, et la nécessité de choisir toujours la vertu",
                "Les deux colonnes du Temple J et B, symboles de la Force et de la Beauté qui ornent l'entrée du Temple",
                "Qu'un Maître doit être irréprochable dans ses mœurs et sa conduite et servir d'exemple à ses Frères",
                "L'équilibre entre le bien et le mal que le Maître doit maintenir dans sa conduite et dans ses jugements"
            ],
            correct: 2
        },
        {
            question: "Comment frappent les Maîtres ?",
            answers: [
                "Par sept coups, correspondant aux sept marches de l'escalier du Temple de Salomon",
                "En triplant la batterie des Apprentis, ce qui fait neuf coups, par trois fois trois",
                "Par cinq coups distincts, rappelant les cinq points parfaits de la Maîtrise",
                "Par trois coups lents et solennels, comme la batterie des Apprentis mais plus espacés"
            ],
            correct: 1
        },
        // =============================================
        // SECONDE SECTION
        // =============================================
        {
            question: "Où avez-vous été reçu Maître ?",
            answers: [
                "Dans le Temple, à l'Orient, près de l'autel du Maître",
                "Dans la chambre du milieu, séjour de regrets et de larmes",
                "Dans le Sanctuaire du Temple, devant l'arche d'Alliance",
                "Au pied de l'escalier à vis menant au Temple sacré"
            ],
            correct: 1
        },
        {
            question: "Comment êtes-vous parvenu à la chambre du milieu ?",
            answers: [
                "Par la porte d'Occident, en donnant le mot de passe aux Frères qui gardaient l'entrée",
                "Par un corridor secret menant du Temple à la chambre où repose le tombeau d'Hiram",
                "Par un escalier mystérieux en forme de vis, qui se monte par trois, cinq et sept",
                "Par les trois pas de Maître en double équerre, depuis l'Occident jusqu'à l'Orient"
            ],
            correct: 2
        },
        {
            question: "Comment êtes-vous entré dans la chambre du milieu ?",
            answers: [
                "En marchant à reculons",
                "Les yeux bandés",
                "En faisant trois pas de Maître",
                "En donnant le mot de passe"
            ],
            correct: 0
        },
        {
            question: "Pourquoi êtes-vous entré à reculons dans la chambre du milieu ?",
            answers: [
                "Par respect pour le tombeau d'Hiram qui repose en la chambre du milieu du Temple sacré",
                "Afin de ne pas être ébloui par l'éclat d'une lumière inattendue",
                "Pour symboliser l'humilité du Maître devant les mystères de la mort et de la résurrection",
                "En mémoire de la marche arrière d'Hiram lorsqu'il chercha à fuir les mauvais Compagnons"
            ],
            correct: 1
        },
        {
            question: "D'où partait la lumière dans la chambre du milieu ?",
            answers: [
                "De l'Étoile Flamboyante suspendue au centre de la voûte étoilée",
                "Des neuf bougies disposées autour du tombeau d'Hiram en forme de triangle",
                "D'une lame d'or triangulaire placée sur un tombeau",
                "Du soleil entrant par une fenêtre orientée vers l'est du Temple sacré"
            ],
            correct: 2
        },
        {
            question: "Qu'avez-vous remarqué en entrant dans la chambre du milieu ?",
            answers: [
                "Une grande lumière éblouissante émanant de l'Étoile Flamboyante au centre de la chambre",
                "Obscurité, silence et tristesse générale parmi les Frères",
                "Les cinq ordres d'architecture représentés sur les murs de la chambre du milieu du Temple",
                "Les colonnes J et B ornées de lys et de grenades, symboles de pureté et de fécondité"
            ],
            correct: 1
        },
        {
            question: "Quel est le premier objet aperçu dans la chambre du milieu ?",
            answers: [
                "Le tombeau d'Hiram, recouvert d'un drap noir orné de larmes d'argent",
                "L'Étoile Flamboyante brillant au centre de la chambre avec la lettre G",
                "Un mausolée, de forme triangulaire, placé à l'Occident",
                "La Planche à Tracer posée devant l'autel du Vénérable Maître à l'Orient"
            ],
            correct: 2
        },
        {
            question: "Qu'avez-vous remarqué de plus dans la chambre du milieu, après le mausolée ?",
            answers: [
                "L'Étoile Flamboyante avec la lettre G en son centre",
                "Le tombeau de notre Respectable Maître Hiram",
                "Les cinq ordres d'architecture représentés sur les murs",
                "La Planche à Tracer posée devant l'autel d'Orient"
            ],
            correct: 1
        },
        {
            question: "Quelles sont les dimensions du tombeau d'Hiram ?",
            answers: [
                "Cinq coudées de large, sept de haut et neuf de long, selon les proportions sacrées",
                "Trois coudées de large, cinq de haut et sept de long",
                "Une coudée de large, trois de haut et cinq de long, selon les nombres mystérieux",
                "Sept coudées de large, neuf de haut et onze de long, selon les mesures du Temple"
            ],
            correct: 1
        },
        {
            question: "À quoi font allusion les dimensions du tombeau (3, 5 et 7) ?",
            answers: [
                "Aux trois parties du Temple : le Porche, le Temple et le Sanctuaire disposés selon l'ordre sacré",
                "Aux différents âges des Maçons, qui indiquent le travail particulier de chaque classe",
                "Aux sept marches de l'escalier du Temple que le Maître gravit pour atteindre la chambre du milieu",
                "Aux vertus théologales de Foi, d'Espérance et de Charité enseignées dans les trois grades"
            ],
            correct: 1
        },
        {
            question: "Que signifient les nombres 3, 5 et 7 par rapport aux Maçons ?",
            answers: [
                "Trois voyages, cinq épreuves, sept vertus, formant le parcours complet du Maçon",
                "Il faut trois ans pour faire un Apprenti, cinq pour un Compagnon, et sept pour un Maître",
                "Trois colonnes, cinq ordres, sept arts libéraux, constituant le savoir maçonnique",
                "Trois grades, cinq sens, sept planètes, symboles de la connaissance universelle"
            ],
            correct: 1
        },
        {
            question: "Qu'avez-vous aperçu sur le tombeau d'Hiram ?",
            answers: [
                "L'Étoile Flamboyante et la lettre G, symboles de la Géométrie sacrée et de la connaissance divine",
                "Les outils du Maître : le Compas, l'Équerre et la Planche à Tracer disposés en triangle sacré",
                "Une tête de mort, une branche d'acacia, et une lame d'or triangulaire avec les lettres de l'ancien Mot de Maître",
                "Le Compas et l'Équerre entrelacés, formant le symbole universel de la Franc-maçonnerie"
            ],
            correct: 2
        },
        {
            question: "Quel était l'ancien Mot de Maître ?",
            answers: [
                "Mac Benac, le mot substitué prononcé par les Maîtres lors de la découverte",
                "Schibboleth, le mot de reconnaissance qui sert à obtenir l'entrée de la Loge",
                "Giblim, le nom donné aux tailleurs de pierres habiles employés par Salomon",
                "L'un des noms révérés du Grand Architecte de l'Univers"
            ],
            correct: 3
        },
        {
            question: "Combien de lumières y avait-il autour du tombeau ?",
            answers: [
                "Trois",
                "Sept",
                "Neuf",
                "Douze"
            ],
            correct: 2
        },
        {
            question: "Que signifient les neuf lumières autour du tombeau ?",
            answers: [
                "Les neuf grades de la Maçonnerie que le Frère peut parcourir dans son cheminement",
                "Les neuf Maîtres envoyés par Salomon à la recherche du corps d'Hiram",
                "Les neuf muses de l'Antiquité qui inspirèrent les arts libéraux enseignés aux Maçons",
                "Les neuf vertus du Maçon qu'il doit pratiquer pour atteindre la perfection de l'Ordre"
            ],
            correct: 1
        },
        {
            question: "Pourquoi les neuf lumières étaient-elles voilées ?",
            answers: [
                "Pour symboliser le deuil et la tristesse qui règnent dans la chambre du milieu depuis la mort d'Hiram",
                "Pour désigner la privation dans laquelle se trouvent les Maçons, depuis que les vrais Maîtres sont dispersés",
                "Pour rappeler l'obscurité du tombeau dans lequel le corps d'Hiram fut déposé par les mauvais Compagnons",
                "Par respect pour le mort et les mystères sacrés de la Maîtrise qui ne doivent pas être pleinement dévoilés"
            ],
            correct: 1
        },
        {
            question: "Quand cessera la privation des Maçons ?",
            answers: [
                "Quand le Temple sera reconstruit dans sa gloire première par les ouvriers fidèles",
                "Quand tous les grades seront réunis sous l'autorité d'un seul Grand Maître universel",
                "Lorsque les Maîtres étant rentrés dans le Temple, les Maçons retrouveront la Parole Perdue",
                "Quand un nouveau Maître Hiram sera élu parmi les plus dignes Frères de l'Ordre"
            ],
            correct: 2
        },
        {
            question: "Comment a-t-on traité le candidat Maître en entrant en Loge ?",
            answers: [
                "Avec tous les honneurs dus à un Frère qui va être élevé à la dignité de Maître",
                "En lui demandant le mot de passe et les signes pour vérifier sa qualité de Compagnon",
                "Comme un Compagnon suspect, mais il a prouvé son innocence",
                "En le faisant attendre à la porte du Temple pour éprouver sa patience et sa résignation"
            ],
            correct: 2
        },
        {
            question: "Combien de voyages emblématiques le candidat Maître a-t-il faits autour du tombeau ?",
            answers: [
                "Trois",
                "Cinq",
                "Sept",
                "Neuf"
            ],
            correct: 3
        },
        {
            question: "Pourquoi le candidat fait-il neuf voyages autour du tombeau ?",
            answers: [
                "En mémoire des neuf coups de la batterie des Maîtres, frappés par trois fois trois",
                "Pour lui faire connaître les différentes parties du Temple",
                "Pour symboliser les neuf mois de gestation et la renaissance symbolique du Maître",
                "Pour honorer les neuf lumières qui entourent le tombeau d'Hiram dans la chambre"
            ],
            correct: 1
        },
        {
            question: "Que vous est-il arrivé pendant les neuf voyages autour du tombeau ?",
            answers: [
                "J'ai reçu le mot de Maître et les signes de reconnaissance du grade de la Maîtrise",
                "J'ai vu trois fois la mort devant mes yeux, mais le Vénérable Maître m'a rassuré par de nouvelles maximes",
                "J'ai découvert la branche d'acacia sur le tombeau d'Hiram et j'ai compris sa signification",
                "J'ai monté les sept marches du Temple et j'ai contemplé le Sanctuaire dans toute sa gloire"
            ],
            correct: 1
        },
        {
            question: "Combien de fois le candidat Maître a-t-il vu la mort pendant ses voyages ?",
            answers: [
                "Une fois",
                "Deux fois",
                "Trois fois",
                "Sept fois"
            ],
            correct: 2
        },
        {
            question: "Quelle vertu le Vénérable Maître a-t-il averti de joindre à la tempérance du Compagnon ?",
            answers: [
                "La Force, soutien du Maçon",
                "La Charité envers les Frères",
                "La Justice en toute action",
                "La Prudence du Maître"
            ],
            correct: 3
        },
        {
            question: "Que vous est-il arrivé après les neuf voyages ?",
            answers: [
                "J'ai été conduit à l'Occident pour y recevoir les dernières instructions avant la cérémonie d'élévation",
                "J'ai monté l'escalier à vis, par trois, cinq et sept, en me faisant connaître par les signes d'Apprenti et de Compagnon",
                "J'ai reçu le tablier de Maître des mains du Vénérable Maître et les gants blancs du grade",
                "J'ai été relevé du cercueil par les cinq points parfaits de la Maîtrise et proclamé Maître"
            ],
            correct: 1
        },
        {
            question: "Pourquoi a-t-on fait donner les signes d'Apprenti et de Compagnon au candidat Maître ?",
            answers: [
                "Pour vérifier qu'il les connaissait encore et qu'il n'avait pas oublié les enseignements des grades précédents",
                "On a voulu lui rappeler ce qu'il avait été, lui faire connaître ce qu'il était, et lui faire apercevoir ce qui lui manquait encore",
                "Pour respecter le protocole du rituel qui impose cette vérification formelle avant l'élévation à la Maîtrise",
                "Pour l'éprouver une dernière fois avant la cérémonie solennelle et s'assurer de sa dignité et de son mérite"
            ],
            correct: 1
        },
        {
            question: "Qu'a-t-on fait du candidat après qu'il se soit fait connaître par les signes ?",
            answers: [
                "On l'a renvoyé à l'Occident pour une dernière méditation avant la cérémonie solennelle de la Maîtrise",
                "On l'a conduit de l'Occident à l'Orient, en passant de l'Équerre au Compas, sur le tombeau, par trois pas de Maître en double équerre",
                "On lui a remis le tablier de Maître et les gants blancs, symboles de la pureté et de l'innocence du grade",
                "On l'a fait asseoir entre les deux Surveillants pour recevoir les dernières instructions du Vénérable Maître"
            ],
            correct: 1
        },
        {
            question: "Que signifie le premier pas de Maître, vers le Midi ?",
            answers: [
                "Le devoir de chercher la Force, vertu nécessaire pour soutenir l'édifice du Temple et supporter les épreuves de la vie",
                "Que notre devoir est de chercher la Sagesse, dès que nous sommes capables de justesse dans nos idées",
                "La direction vers la lumière du soleil de midi, symbole de la plénitude de la connaissance maçonnique",
                "Le premier voyage du Compagnon vers le sud, rappelant les épreuves subies lors de la réception au second grade"
            ],
            correct: 1
        },
        {
            question: "Que signifie le second pas de Maître, vers le Nord ?",
            answers: [
                "La nécessité de poursuivre courageusement notre route et de ne jamais abandonner nos recherches, jusqu'à la fin de nos jours",
                "La direction vers les ténèbres du septentrion, où règne l'ignorance que le Maçon doit combattre",
                "Le retour aux sources de l'Ordre maçonnique et aux origines de la tradition des bâtisseurs",
                "L'exploration de l'inconnu qui attend le Maître au-delà des frontières de la connaissance"
            ],
            correct: 0
        },
        {
            question: "Que signifie le troisième pas de Maître, vers l'Orient ?",
            answers: [
                "L'arrivée devant le Vénérable Maître qui siège à l'Orient et dispense la lumière aux Frères assemblés",
                "La fin de la cérémonie de réception et le début de la vie du Maître au sein de l'Ordre maçonnique",
                "Le fruit que nous devons espérer : trouver la Sagesse du Vrai Orient, où commence l'Éternité heureuse",
                "La découverte de la Parole Perdue que les Maîtres cherchent depuis la mort d'Hiram dans le Temple"
            ],
            correct: 2
        },
        {
            question: "Que vous est-il arrivé pendant votre route de l'Occident à l'Orient ?",
            answers: [
                "J'ai vu l'Étoile Flamboyante briller au centre de la chambre du milieu",
                "J'ai reçu trois coups en passant de l'Équerre au Compas",
                "J'ai trouvé la branche d'acacia qui poussait sur la terre fraîchement remuée",
                "J'ai entendu le mot de Maître prononcé par le Vénérable Maître à l'Orient"
            ],
            correct: 1
        },
        {
            question: "Que signifient les trois coups reçus en passant de l'Équerre au Compas ?",
            answers: [
                "Les trois mauvais Compagnons qui frappèrent Hiram aux trois portes du Temple de Salomon",
                "L'ennemi qu'il faut combattre, les obstacles qu'il faut vaincre, les armes qu'il faut employer pour obtenir la récompense éternelle",
                "Les trois grades de la Maçonnerie que le Frère a parcourus depuis son initiation comme Apprenti",
                "Les trois vertus théologales de Foi, d'Espérance et de Charité que le Maître doit pratiquer"
            ],
            correct: 1
        },
        {
            question: "Qu'avez-vous fait lorsque vous êtes parvenu à l'Orient ?",
            answers: [
                "J'ai reçu le tablier de Maître des mains du Vénérable Maître en signe de reconnaissance",
                "J'ai prononcé le mot de Maître en présence de tous les Frères assemblés dans la Loge",
                "J'ai contracté les engagements de la Maîtrise et, ensuite, j'ai été reçu Maître",
                "J'ai donné l'attouchement parfait des cinq points de la Maîtrise au Vénérable Maître"
            ],
            correct: 2
        },
        {
            question: "Comment avez-vous été reçu Maître ?",
            answers: [
                "Par l'accolade fraternelle",
                "Par trois coups qui m'ont terrassé",
                "Par la remise du tablier",
                "Par les cinq points parfaits"
            ],
            correct: 1
        },
        {
            question: "Pourquoi le candidat a-t-il été terrassé par trois grands coups ?",
            answers: [
                "Pour éprouver sa résistance physique et morale face aux épreuves que tout Maître doit affronter dans sa vie",
                "Pour symboliser la mort de l'homme profane et sa renaissance comme Maître dans la lumière de l'Ordre maçonnique",
                "En mémoire de ceux que reçut Hiram, et pour apprendre à souffrir plutôt la mort que de trahir ses Frères",
                "Pour marquer le passage de Compagnon à Maître et symboliser la transformation intérieure du candidat dans le Temple"
            ],
            correct: 2
        },
        {
            question: "Combien de Compagnons formèrent le complot contre Hiram ?",
            answers: [
                "Un seul",
                "Deux",
                "Trois",
                "Sept"
            ],
            correct: 2
        },
        {
            question: "Que voulaient obtenir les trois mauvais Compagnons d'Hiram ?",
            answers: [
                "Les plans du Temple",
                "Le trésor du Temple",
                "Le Mot et la paie des Maîtres",
                "La direction des travaux"
            ],
            correct: 2
        },
        {
            question: "Comment sut-on qu'Hiram avait été tué par trois Compagnons ?",
            answers: [
                "Par un témoin oculaire qui avait assisté à la scène et qui rapporta les faits à Salomon en personne",
                "Parce que ces trois Compagnons ne comparurent pas lors de l'appel général des ouvriers ordonné par Salomon",
                "Par les traces de sang retrouvées dans le Temple et sur le chemin menant à la montagne de Moria",
                "Par la confession de l'un d'entre eux qui, pris de remords, se présenta devant Salomon pour avouer"
            ],
            correct: 1
        },
        {
            question: "Hiram a-t-il donné le mot de Maître aux mauvais Compagnons ?",
            answers: [
                "Oui, sous la contrainte des coups reçus aux trois portes du Temple, il céda finalement à leurs menaces",
                "Il leur a donné un faux mot pour les tromper et préserver le véritable secret des Maîtres du Temple",
                "Non, il aima mieux souffrir la mort que de leur donner une connaissance dont ils étaient indignes",
                "Il ne connaissait pas le mot, car seul Salomon le possédait et le communiquait aux Maîtres choisis"
            ],
            correct: 2
        },
        {
            question: "Où les mauvais Compagnons ont-ils d'abord caché le corps d'Hiram ?",
            answers: [
                "Dans le Temple, sous les dalles du pavé mosaïque où nul ne pouvait le trouver",
                "Sous des décombres, au pied de la montagne Moria, près du Temple",
                "Dans le Jourdain, emporté par les eaux du fleuve sacré qui traverse la terre d'Israël",
                "Dans le Sanctuaire, derrière le voile qui sépare le lieu saint du lieu très saint"
            ],
            correct: 1
        },
        {
            question: "Où les mauvais Compagnons ont-ils ensuite enterré Hiram ?",
            answers: [
                "Au pied de la colonne J",
                "Sous le Temple",
                "Sur la montagne Moria même",
                "Dans la vallée de Josaphat"
            ],
            correct: 2
        },
        {
            question: "Comment le corps d'Hiram fut-il découvert ?",
            answers: [
                "Par hasard, lors de travaux d'agrandissement du Temple ordonnés par Salomon aux ouvriers",
                "Grâce à la branche d'acacia qui avait poussé sur la terre fraîchement remuée de sa tombe",
                "Par les soins infatigables de neuf Maîtres envoyés par Salomon",
                "Par un berger qui passait sur la montagne de Moria et qui remarqua une terre fraîchement remuée"
            ],
            correct: 2
        },
        {
            question: "Que fit Salomon après la découverte du corps d'Hiram ?",
            answers: [
                "Il fit reconstruire le Temple en mémoire d'Hiram et ordonna que son nom fût gravé sur les colonnes du porche",
                "Il fit exhumer le corps, le transporta en grande pompe dans le Temple et plaça sur son tombeau une plaque d'or triangulaire avec le vrai Mot de Maître",
                "Il punit les trois Compagnons et les condamna à mort pour avoir trahi leur serment et assassiné le Maître",
                "Il ferma le Temple pendant sept jours de deuil et ordonna à tous les ouvriers de cesser leurs travaux"
            ],
            correct: 1
        },
        {
            question: "Quel était Hiram ?",
            answers: [
                "Le roi de Tyr qui fournit les matériaux pour la construction du Temple de Salomon",
                "Le fils de Salomon, héritier du trône et instruit dans l'art de bâtir les temples",
                "Un habile architecte et le plus célèbre ouvrier en toute chose",
                "Le Grand Prêtre du Temple, gardien des mystères sacrés et des rites anciens de l'Ordre"
            ],
            correct: 2
        },
        {
            question: "D'où venait Hiram et qui étaient ses parents ?",
            answers: [
                "Il était Jérusalémite, fils de prêtre du Temple, instruit dans l'art de bâtir dès sa jeunesse",
                "Il était Tyrien de nation, son père se nommait Ur et sa mère était une veuve de la tribu de Nephtali",
                "Il était Égyptien, fils d'architecte royal, formé aux mystères de la construction des pyramides",
                "Il était de la tribu de Juda, fils de David, héritier de la sagesse royale transmise par son père"
            ],
            correct: 1
        },
        {
            question: "Comment a-t-on fini votre réception comme Maître ?",
            answers: [
                "Par la remise du tablier et des gants de Maître, symboles distinctifs du troisième grade de la Maçonnerie",
                "Par la proclamation du Vénérable Maître qui m'a déclaré Maître Franc-Maçon devant tous les Frères assemblés",
                "Le Vénérable Maître, avec les deux Surveillants, m'a relevé du cercueil par les signe, attouchement et Mot de la Convention des Maîtres",
                "Par l'accolade de tous les Frères qui m'ont reconnu comme Maître et m'ont admis dans leur cercle fraternel"
            ],
            correct: 2
        },
        {
            question: "Qu'a remarqué le candidat Maître après avoir été relevé du cercueil ?",
            answers: [
                "Le visage du Vénérable Maître rayonnant de lumière et de bienveillance envers le nouveau Frère",
                "L'Étoile Flamboyante suspendue au centre de la chambre, brillant de tout son éclat",
                "L'obscurité avait disparu et la Loge brillait d'une nouvelle lumière",
                "La branche d'acacia qui avait fleuri sur le tombeau d'Hiram, symbole de la résurrection"
            ],
            correct: 2
        },
        {
            question: "Que signifie le changement de lumière après le relèvement du Maître ?",
            answers: [
                "La fin des épreuves que le candidat a subies au cours de la cérémonie et le début de sa nouvelle vie",
                "L'espoir de retrouver la Parole Perdue, en faisant bon usage des nouveaux signes et instructions",
                "Le lever du soleil sur le Temple, symbolisant l'aube d'un jour nouveau pour le Maître relevé",
                "La victoire de la lumière sur les ténèbres, rappelant le triomphe de la vertu sur le vice"
            ],
            correct: 1
        },
        // =============================================
        // TROISIÈME SECTION
        // =============================================
        {
            question: "Pourquoi vous êtes-vous fait recevoir Maître ?",
            answers: [
                "Pour connaître le secret d'Hiram et les circonstances de sa mort tragique dans le Temple",
                "Pour diriger une Loge et pouvoir transmettre les enseignements de l'Ordre aux Frères moins avancés",
                "Pour apprendre à connaître la véritable valeur de la lettre G aperçue dans l'Étoile Flamboyante",
                "Pour recevoir un salaire plus élevé et accéder à la chambre du milieu réservée aux Maîtres"
            ],
            correct: 2
        },
        {
            question: "Que signifie la lettre G pour le Maître ?",
            answers: [
                "Géométrie, la cinquième des sciences que le Compagnon devait apprendre en priorité",
                "Grandeur et Gloire, qui n'appartiennent qu'à Dieu, Principe de toute Lumière",
                "Gabaon, le lieu sacré où David éleva un autel au Seigneur avant la construction du Temple",
                "Gnose, la connaissance secrète transmise de Maître à Maître depuis les origines"
            ],
            correct: 1
        },
        {
            question: "Quel est le but du travail du Maître ?",
            answers: [
                "Achever la construction du Temple commencée par Salomon et poursuivie par les Francs-Maçons fidèles",
                "Former de nouveaux Apprentis en leur enseignant les premiers rudiments de l'art maçonnique sacré",
                "Parvenir à retrouver, avec le secours du Grand Architecte et l'assistance de l'Ordre, la Vraie Parole des Maîtres",
                "Perfectionner la Pierre cubique en la polissant jusqu'à ce qu'elle atteigne la forme idéale du cube"
            ],
            correct: 2
        },
        {
            question: "Le Maître connaît-il la Vraie Parole ?",
            answers: [
                "Oui, elle lui a été transmise lors de la cérémonie de son élévation à la Maîtrise par le Vénérable",
                "Non, il n'en connaît que les deux lettres indicatives : J…A, remarquées sur le tombeau",
                "Oui, mais il ne peut la prononcer que dans la chambre du milieu en présence de tous les Maîtres",
                "Non, personne ne la connaît, car elle a été perdue à jamais lors de la mort tragique d'Hiram"
            ],
            correct: 1
        },
        {
            question: "Comment la Parole a-t-elle été perdue ?",
            answers: [
                "Elle a été oubliée au fil du temps par les Maçons qui négligèrent les travaux du Temple",
                "Par la mort du Respectable Maître Hiram, qui ne permit plus aux Maîtres d'en faire usage",
                "Elle a été volée par les mauvais Compagnons qui la communiquèrent aux profanes du monde",
                "Elle a été cachée dans le Temple par Salomon lui-même pour la protéger des ennemis"
            ],
            correct: 1
        },
        {
            question: "Comment la Parole a-t-elle été changée ?",
            answers: [
                "Par décision de Salomon seul, qui imposa un nouveau mot aux Maîtres restants après la mort d'Hiram",
                "Par un vote des Maîtres en Loge, qui décidèrent à l'unanimité de remplacer l'ancien mot par un nouveau",
                "Par l'accord des Maîtres qui, ayant trouvé Hiram assassiné, convinrent de substituer la première parole prononcée entre eux en déterrant son cadavre",
                "Elle n'a jamais été changée et les Maîtres utilisent toujours le même mot depuis la fondation de l'Ordre"
            ],
            correct: 2
        },
        {
            question: "Comment voyagent les Maîtres ?",
            answers: [
                "De l'Occident à l'Orient, par le Midi uniquement, en suivant la course du soleil dans le ciel",
                "De l'Occident à l'Orient, par le Midi et le Nord, et de l'Orient sur toute la surface de la terre",
                "De l'Orient à l'Occident uniquement, pour porter la lumière aux Frères qui sont dans les ténèbres",
                "En spirale autour du Temple, passant par les trois parties : le Porche, le Temple et le Sanctuaire"
            ],
            correct: 1
        },
        {
            question: "Pourquoi les Maîtres voyagent-ils ainsi ?",
            answers: [
                "Pour chercher la lumière qui brille à l'Orient et la rapporter aux Frères de l'Occident",
                "Pour suivre le cours du soleil dans sa course quotidienne à travers le firmament du ciel",
                "Pour réunir ce qui est épars et répandre la Lumière",
                "Pour visiter les Loges du monde entier et resserrer les liens de la fraternité universelle"
            ],
            correct: 2
        },
        {
            question: "Sur quoi travaillent les Maîtres ?",
            answers: [
                "Sur la Pierre cubique, pour la polir et la perfectionner",
                "Sur la Pierre brute, pour guider le travail des Apprentis",
                "Sur la Planche à tracer, pour former leurs dessins",
                "Sur l'Étoile Flamboyante, pour en percer les mystères"
            ],
            correct: 2
        },
        {
            question: "Pourquoi les Maîtres travaillent-ils sur la Planche à tracer ?",
            answers: [
                "Pour enseigner aux Apprentis les premiers rudiments de l'art maçonnique et les guider dans leurs travaux",
                "En mémoire des plans tracés mystérieusement au roi David, de la part du Grand Architecte, pour la construction du Temple",
                "Pour concevoir de nouveaux temples à la vertu et à la sagesse, dignes du Grand Architecte de l'Univers",
                "Pour conserver les secrets de l'Ordre en les gravant sur la Planche qui sera transmise aux générations futures"
            ],
            correct: 1
        },
        {
            question: "Si vous perdiez un Maître, où le chercheriez-vous ?",
            answers: [
                "Dans la chambre du milieu",
                "Sur la montagne de Moria",
                "Entre l'Équerre et le Compas",
                "Au pied de la branche d'acacia"
            ],
            correct: 2
        },
        {
            question: "Pourquoi chercher un Maître entre l'Équerre et le Compas ?",
            answers: [
                "Parce que ce sont les outils du Maître et qu'il ne doit jamais travailler sans les avoir à ses côtés",
                "Parce que l'Équerre et le Compas étant les emblèmes de la régularité et de la sagesse, un Maître ne doit jamais s'en écarter",
                "Parce qu'ils marquent l'emplacement du tombeau d'Hiram dans la chambre du milieu du Temple sacré",
                "Parce qu'ils renferment le mot secret que le Maître utilise pour se faire reconnaître de ses Frères"
            ],
            correct: 1
        },
        {
            question: "Quelles qualités essentielles sont désignées par les trois Colonnes du Temple ?",
            answers: [
                "La Foi, l'Espérance et la Charité",
                "La Justice, la Tempérance et la Prudence",
                "La Sagesse, la Force et la Beauté",
                "L'Honneur, le Courage et la Fidélité"
            ],
            correct: 2
        },
        {
            question: "Pourquoi le Maçon doit-il désirer ces vertus désignées par les trois Colonnes ?",
            answers: [
                "Pour diriger une Loge avec sagesse et conduire les travaux selon les règles de l'art",
                "Parce qu'il doit s'appliquer à réunir en lui les proportions de ses modèles",
                "Pour obtenir un grade supérieur et accéder aux mystères réservés aux plus dignes Frères",
                "Parce que ce sont les vertus du Grand Architecte dont le Maçon doit s'inspirer en tout"
            ],
            correct: 1
        },
        {
            question: "Qui sont les modèles des trois colonnes (Sagesse, Force, Beauté) ?",
            answers: [
                "Moïse, Aaron et Josué, les trois grands chefs du peuple d'Israël qui le guidèrent vers la Terre promise",
                "Salomon (Sagesse), Hiram roi de Tyr (Force) et Hiram Abif (Beauté)",
                "David, Salomon et le Grand Prêtre, les trois dignitaires qui présidèrent au culte dans le Temple sacré",
                "Les trois Grands Maîtres fondateurs de l'Ordre maçonnique qui établirent les premières Loges du monde"
            ],
            correct: 1
        },
        {
            question: "À qui appartiennent essentiellement Sagesse, Force et Beauté ?",
            answers: [
                "Aux trois Grands Maîtres qui ont présidé à la construction du Temple de Salomon et dirigé les ouvriers",
                "À l'Ordre maçonnique qui les incarne dans ses trois colonnes et les transmet à travers les siècles",
                "À Dieu même, dont la perfection atteste la Sagesse, la Puissance et la Beauté de ses ouvrages",
                "Au Vénérable Maître de la Loge qui les représente en sa personne et les dispense aux Frères assemblés"
            ],
            correct: 2
        },
        {
            question: "Que feriez-vous si vous vous trouviez en quelque danger ?",
            answers: [
                "J'appellerais mes Frères par le mot de passe",
                "Je ferais le signe et l'exclamation de secours",
                "Je frapperais neuf coups",
                "Je montrerais mon tablier de Maître"
            ],
            correct: 1
        },
        {
            question: "Comment se fait le signe de secours du Maître ?",
            answers: [
                "En levant la main droite vers le ciel en signe d'invocation au Grand Architecte de l'Univers",
                "En croisant les bras sur la poitrine et en inclinant la tête en signe de détresse et de supplication",
                "En portant les deux mains entrelacées et renversées sur la tête, la jambe droite pliée en équerre devant la jambe gauche",
                "En frappant trois fois dans ses mains puis en levant les bras vers le ciel en implorant secours"
            ],
            correct: 2
        },
        {
            question: "Quelle est l'exclamation de secours du Maître ?",
            answers: [
                "À moi, mes Frères !",
                "Au secours, Maîtres !",
                "À Moi les Enfants de la Veuve !",
                "Lumière, Lumière, Lumière !"
            ],
            correct: 2
        },
        {
            question: "Pourquoi dit-on « les Enfants de la Veuve » ?",
            answers: [
                "Parce que Salomon était orphelin de mère et que les Maçons se reconnurent dans cette condition d'orphelins",
                "En référence à la veuve de Sarepta qui accueillit le prophète Élie et qui symbolise la charité maçonnique",
                "Parce qu'après la mort d'Hiram, les Maçons prirent soin de sa mère, qui était veuve, et se regardèrent comme ses enfants",
                "Parce que la Maçonnerie protège les veuves et les orphelins selon les devoirs prescrits par l'Ordre ancien"
            ],
            correct: 2
        },
        {
            question: "Quel âge avez-vous comme Maître ?",
            answers: [
                "Trois ans passés",
                "Cinq ans passés",
                "Sept ans passés",
                "Neuf ans passés"
            ],
            correct: 2
        },
        {
            question: "Que signifie l'âge de sept ans du Maître ?",
            answers: [
                "Les sept marches de l'escalier du Temple que le Maître a gravies lors de sa cérémonie d'élévation",
                "Le septième temps, ou année, que Salomon employa à la dédicace du Temple, pour lui donner la perfection",
                "Les sept arts libéraux que le Maître doit maîtriser pour diriger les travaux de la Loge avec sagesse",
                "Les sept vertus du Maçon qu'il doit pratiquer pour atteindre la perfection morale et spirituelle"
            ],
            correct: 1
        },
        {
            question: "Où avez-vous acquis l'âge de sept ans ?",
            answers: [
                "Dans la chambre du milieu",
                "En montant l'escalier à vis de sept marches",
                "En faisant sept voyages autour du tombeau",
                "En travaillant sept ans dans le Temple"
            ],
            correct: 1
        },
        {
            question: "À quoi fait allusion l'escalier à vis de sept marches ?",
            answers: [
                "Aux sept jours de la création du monde, rappelant l'œuvre du Grand Architecte de l'Univers",
                "Aux sept sciences ou arts libéraux, aux sept vertus, aux sept vices principaux et aux sept dons spirituels",
                "Aux sept planètes connues des anciens, dont chacune gouverne un aspect de la vie humaine",
                "Aux sept années de construction du Temple de Salomon, marquant le travail patient des ouvriers"
            ],
            correct: 1
        },
        {
            question: "Quelles sont les sept sciences ou arts libéraux ?",
            answers: [
                "Grammaire, Rhétorique, Logique, Arithmétique, Géométrie, Musique, Astronomie, telles qu'enseignées dans les universités",
                "La Poésie, la Musique, l'Art du Dessin, l'Arithmétique, la Géométrie, l'Astronomie et l'Architecture",
                "Théologie, Philosophie, Médecine, Droit, Sciences, Lettres, Arts, disciplines fondamentales de toute connaissance humaine",
                "Lecture, Écriture, Calcul, Dessin, Musique, Gymnastique, Morale, formant l'éducation complète du citoyen vertueux"
            ],
            correct: 1
        },
        {
            question: "À quoi servent la Poésie et la Musique au Maçon ?",
            answers: [
                "À embellir les cérémonies et à donner une solennité particulière aux travaux de la Loge",
                "À divertir les Frères lors des agapes et à renforcer les liens fraternels entre les membres",
                "À louer le Seigneur, afin d'obtenir son secours pour employer dignement les cinq autres sciences",
                "À attirer de nouveaux membres sensibles aux arts et à la beauté des cérémonies maçonniques"
            ],
            correct: 2
        },
        {
            question: "À quoi sert l'Art du Dessin au Maçon ?",
            answers: [
                "À décorer le Temple et à embellir l'espace sacré où les Frères se réunissent pour travailler ensemble",
                "À se former des idées justes et vraies de l'édifice merveilleux construit par le Grand Architecte de l'Univers",
                "À tracer les plans des Loges et à concevoir les proportions parfaites de l'édifice maçonnique symbolique",
                "À illustrer les catéchismes et les rituels afin de mieux transmettre les enseignements de l'Ordre"
            ],
            correct: 1
        },
        {
            question: "À quoi servent la Géométrie et l'Arithmétique au Maçon ?",
            answers: [
                "À construire des temples",
                "À calculer les proportions du Temple",
                "À exercer avec justesse toutes les autres sciences",
                "À mesurer le temps des travaux"
            ],
            correct: 2
        },
        {
            question: "Quelles sont les sept vertus du Maçon ?",
            answers: [
                "Sagesse, Force, Beauté, Justice, Tempérance, Prudence, Charité, correspondant aux sept colonnes du Temple idéal",
                "La Foi, l'Espérance et la Charité (les principales), la Justice, la Tempérance, la Prudence, et la septième encore inconnue",
                "Honneur, Fidélité, Courage, Humilité, Patience, Persévérance, Fraternité, guidant le Maçon dans toutes ses actions",
                "Obéissance, Silence, Travail, Charité, Prudence, Justice, Piété, formant les devoirs fondamentaux du Franc-Maçon"
            ],
            correct: 1
        },
        {
            question: "Pourquoi la septième vertu est-elle inconnue du Maître ?",
            answers: [
                "Parce qu'elle est réservée au Grand Architecte de l'Univers et que nul homme ne peut la posséder pleinement",
                "Parce qu'il ne pourra l'acquérir que par la pratique exacte des trois vertus enseignées dans les trois grades",
                "Parce que cette vertu n'existe pas encore et qu'elle ne sera révélée qu'à la fin des temps maçonniques",
                "Parce qu'elle est gardée secrète par le Vénérable Maître et ne sera transmise qu'aux plus dignes Frères"
            ],
            correct: 1
        },
        {
            question: "Comment le Maître a-t-il connu les trois premières vertus (Foi, Espérance, Charité), qui sont les plus parfaites ?",
            answers: [
                "Par l'enseignement direct du Vénérable Maître lors de la cérémonie d'élévation à la Maîtrise dans la chambre du milieu",
                "Par la lecture de la Bible posée sur l'autel d'Orient, source de toute vérité et de toute sagesse pour les Francs-Maçons",
                "Elles m'ont seulement été indiquées comme devant être le terme heureux de tous mes travaux, afin d'augmenter mon courage et ma bonne volonté",
                "Par la pratique des trois grades successifs, chaque cérémonie lui ayant révélé l'une de ces vertus fondamentales"
            ],
            correct: 2
        },
        {
            question: "Quels sont les sept vices principaux que le Maçon doit fuir ?",
            answers: [
                "L'orgueil, l'avarice, l'envie, la jalousie, la gourmandise, la colère et la paresse",
                "La luxure, l'avarice, la colère, l'envie, la paresse, l'orgueil et la gourmandise",
                "Le mensonge, la trahison, la lâcheté, l'ignorance, la vanité, la cruauté et l'indifférence",
                "L'impiété, l'indiscrétion, l'infidélité, l'injustice, l'intempérance, l'imprudence et l'inconstance"
            ],
            correct: 0
        },
        {
            question: "Quels sont les sept dons spirituels ?",
            answers: [
                "Sept dons mystérieux révélés uniquement aux Maîtres lors de la cérémonie d'élévation dans la chambre du milieu",
                "Les trois premiers sont désignés par les trois paliers de l'escalier du Temple, qui ont rapport aux vertus enseignées dans les trois premiers grades",
                "Sagesse, Force, Beauté, Justice, Tempérance, Prudence, Charité, disposés selon l'ordre des marches de l'escalier",
                "Sept pouvoirs accordés par le Grand Architecte à ceux qui pratiquent fidèlement les devoirs de leur grade"
            ],
            correct: 1
        },
        {
            question: "Que désigne le premier palier de l'escalier du Temple ?",
            answers: [
                "Le don de Force, que l'Apprenti reçoit en travaillant sur la Pierre Brute avec persévérance",
                "Le don d'Intelligence, que l'Apprenti peut obtenir en observant la Justice",
                "Le don de Sagesse, fruit de la méditation sur les symboles du grade et de l'enseignement reçu",
                "Le don de Piété, que le Maçon acquiert par la prière et la dévotion au Grand Architecte"
            ],
            correct: 1
        },
        {
            question: "Que désigne le deuxième palier de l'escalier ?",
            answers: [
                "Le don d'Intelligence, qui éclaire l'esprit du Maçon et lui permet de comprendre les mystères",
                "Le don de Discernement, acquis par l'étude des cinq ordres d'architecture et des arts libéraux",
                "Le don de Sagesse, fruit de la Tempérance recommandée au Compagnon",
                "Le don de Force, que le Compagnon reçoit en montant les cinq premières marches de l'escalier"
            ],
            correct: 2
        },
        {
            question: "Que désigne le troisième palier avec le pavé mosaïque ?",
            answers: [
                "Le don de Sagesse, fruit de la longue méditation sur les mystères de la Franc-maçonnerie",
                "Le don de Piété, acquis par la dévotion sincère au Grand Architecte de l'Univers",
                "Le don d'Intelligence, que la pratique assidue des vertus permet d'atteindre progressivement",
                "Le don de Discernement, que la Prudence seule peut procurer au Maître"
            ],
            correct: 3
        },
        {
            question: "Le Maître peut-il nommer les quatre autres dons spirituels ?",
            answers: [
                "Oui : la Piété, la Force, la Crainte et la Science",
                "Oui : la Charité, la Patience, l'Humilité et la Sagesse",
                "Non, les travaux de son grade n'ont pu les lui faire connaître",
                "Oui, mais il ne peut les révéler"
            ],
            correct: 2
        },
        {
            question: "Quels sont les devoirs particuliers des Maçons les uns envers les autres ?",
            answers: [
                "Se réunir régulièrement et payer leur cotisation pour entretenir les travaux de la Loge et subvenir aux besoins",
                "S'aimer sincèrement, se secourir, garder les secrets, et s'opposer à tout attentat contre les personnes",
                "Obéir au Vénérable Maître et respecter la hiérarchie de l'Ordre en toutes circonstances et en tous lieux",
                "Visiter les malades et assister aux funérailles des Frères disparus pour leur rendre un dernier hommage"
            ],
            correct: 1
        },
        {
            question: "Quel est le symbole du grade de Maître, placé devant l'autel d'Orient ?",
            answers: [
                "L'Étoile Flamboyante avec la lettre G, symbole de la Géométrie et de la connaissance divine",
                "Le Compas ouvert sur l'Équerre, représentant la maîtrise de l'esprit sur la matière et les passions",
                "Un vaisseau démâté, sans voile et sans rame, sur une mer calme, avec l'inscription « In silentio et spe, fortitudo mea »",
                "La branche d'acacia sur un tombeau, rappelant la mort et la résurrection symbolique du Maître"
            ],
            correct: 2
        },
        {
            question: "Que signifie « In silentio et spe, fortitudo mea » ?",
            answers: [
                "Dans le travail et la prière, ma victoire",
                "Ma force est dans le silence et l'espérance",
                "Par le silence et la patience, j'atteindrai la sagesse",
                "Dans l'ombre et la lumière, ma destinée"
            ],
            correct: 1
        },
        {
            question: "Que représente le vaisseau démâté sur une mer calme ?",
            answers: [
                "La Loge après la fermeture des travaux, lorsque les Frères se séparent pour retourner dans le monde profane",
                "L'image du Maçon qui a surmonté tous les périls pour trouver la vérité et qui cherche un port assuré dans l'Ordre",
                "Le voyage de l'âme vers l'au-delà, symbolisant la mort et la résurrection promise aux Maîtres fidèles",
                "La fin de la construction du Temple, achevé dans la paix après les épreuves endurées par les ouvriers"
            ],
            correct: 1
        },
        {
            question: "Que représente le mausolée à l'Occident de la Loge des Maîtres ?",
            answers: [
                "Le tombeau de Salomon, roi bâtisseur du Temple et fondateur de l'Ordre maçonnique selon la tradition",
                "Le souvenir des Compagnons disparus dont la mémoire est honorée lors des tenues de la Loge de Maîtres",
                "Une urne sépulcrale sur un tombeau triangulaire porté par neuf boules, avec une vapeur enflammée",
                "Un simple monument commémoratif érigé en l'honneur de tous les Maîtres qui ont servi l'Ordre fidèlement"
            ],
            correct: 2
        },
        {
            question: "À quoi fait allusion le mausolée avec ses inscriptions ?",
            answers: [
                "À la mort d'Hiram uniquement, rappelant le sacrifice du Maître qui préféra mourir plutôt que trahir",
                "À la construction du Temple de Salomon, dont les pierres furent taillées avec soin par les ouvriers",
                "À l'immortalité de l'âme, aux principes élémentaires et à la dissolution de la matière",
                "Aux trois grades de la Maçonnerie, chaque inscription correspondant à l'un des degrés de l'Ordre"
            ],
            correct: 2
        },
        {
            question: "Quelle est la signification générale des batteries des Apprentis, des Compagnons et des Maîtres ?",
            answers: [
                "L'ouverture, le travail et la fermeture des travaux",
                "Le commencement, la durée et la fin des choses créées",
                "La naissance, la vie et la mort",
                "La foi, l'espérance et la charité"
            ],
            correct: 1
        },
        {
            question: "Que signifie la batterie d'Apprenti, par trois coups ?",
            answers: [
                "Les trois voyages",
                "Les trois colonnes du Temple",
                "Le commencement, ou l'union des principes",
                "Les trois vertus théologales"
            ],
            correct: 2
        },
        {
            question: "Que signifie la batterie de Compagnon, par deux fois trois coups ?",
            answers: [
                "La double loi du Compagnon",
                "La durée, ou les principes mis en action",
                "Les deux colonnes du Temple",
                "Les voyages accomplis"
            ],
            correct: 1
        },
        {
            question: "Que signifie la batterie des Maîtres, par trois fois trois coups ?",
            answers: [
                "Les neuf Maîtres envoyés par Salomon",
                "La perfection du nombre neuf",
                "La fin, ou la décomposition des corps",
                "Les neuf voyages autour du tombeau"
            ],
            correct: 2
        },
        {
            question: "Que signifient les quatre-vingt-une larmes qui sont sur le tapis, autour du tombeau ?",
            answers: [
                "Les 81 ouvriers du Temple qui participèrent aux travaux de construction sous la direction d'Hiram et de Salomon",
                "Les larmes désignent le deuil général des Maîtres, leur nombre exprime les propriétés particulières du nombre neuf, qui se retrouve dans son carré",
                "Les 81 jours de recherche du corps d'Hiram par les neuf Maîtres envoyés par Salomon dans toutes les directions",
                "Le nombre de Maîtres présents à la dédicace du Temple lorsque Salomon consacra l'édifice au Grand Architecte"
            ],
            correct: 1
        },
        {
            question: "Où avez-vous travaillé comme Maître ?",
            answers: [
                "Dans le Porche",
                "Dans le Sanctuaire",
                "Dans le Temple",
                "Dans la chambre du milieu"
            ],
            correct: 2
        },
        {
            question: "Où avez-vous été payé comme Maître ?",
            answers: [
                "À la colonne B, parmi les Compagnons",
                "À la colonne J, parmi les Apprentis",
                "Au centre de la Chambre du Milieu",
                "À l'autel d'Orient, devant le Maître"
            ],
            correct: 2
        }
    ],
    maitre_ecossais: [
        {
            question: "Quel est le nom du grade qui suit celui de Maître dans le Rite Écossais Rectifié ?",
            answers: [
                "Chevalier Bienfaisant de la Cité Sainte",
                "Maître Écossais de Saint-André",
                "Rose-Croix",
                "Grand Élu"
            ],
            correct: 1
        },
        {
            question: "Quelle est la couleur symbolique du grade de Maître Écossais de Saint-André ?",
            answers: [
                "Le bleu",
                "Le rouge",
                "Le vert",
                "Le noir"
            ],
            correct: 2
        },
        {
            question: "Quel est le symbole principal du grade de Maître Écossais de Saint-André ?",
            answers: [
                "L'Étoile Flamboyante",
                "La croix de Saint-André",
                "Le compas ouvert à 90 degrés",
                "La branche d'acacia"
            ],
            correct: 1
        }
    ]
};
