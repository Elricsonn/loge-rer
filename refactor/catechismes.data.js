/* ═══════════════════════════════════════════════════════════════════════════
   CATÉCHISMES R∴E∴R∴ — tableaux de rappel en DONNÉES + moteur de rendu
   ───────────────────────────────────────────────────────────────────────────
   Remplace l'objet `_CATE_GRADE` de scenarios.js (3 chaînes HTML de ~16 Ko,
   styles inline répétés des centaines de fois) par des données pures et une
   fonction `renderCatechisme(grade)`.

   Corriger une valeur ou un libellé se fait ici, à UN endroit, sans toucher à
   la présentation. Le rendu produit exactement le même HTML que les anciennes
   chaînes (vérifié caractère par caractère lors de l'intégration) : mêmes
   couleurs, même alternance des fonds de ligne, mêmes boutons de grade.

   ⚠ Ce fichier ne concerne QUE le panneau « 📖 Catéchisme » (tableau de
   rappel). Les catéchismes DIALOGUÉS (Rituel.catechismeApprentis…, y compris
   le correctif refactor/scenarios-compagnon.corrige.js) restent dans
   scenarios.js et ne sont pas touchés.

   Chargement : <script src="refactor/catechismes.data.js"></script> dans
   Loge_RER.html, avant l'injection de scenarios.js. afficherCatechisme()
   (scenarios.js) appelle renderCatechisme() puis applique, comme avant, le
   masquage des boutons selon le grade connecté.
   ═══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  /* ── DONNÉES ────────────────────────────────────────────────────────────────
     Chaque grade : liste de sections { titre, lignes: [[libellé, valeur], …] }.
     Les sections communes aux trois grades sont définies une fois.
     Les titres sont écrits en capitales telles qu'affichées.               */

  var COLONNES = { titre: 'COLONNES', lignes: [
    ['Sagesse — VM', 'Inventer'],
    ['Beauté — 1°S', 'Orner'],
    ['Force — 2°S',  'Exécuter']
  ]};

  var BIJOUX = { titre: 'BIJOUX', lignes: [
    ['VM — Équerre',         'Régularité et perfection'],
    ['1°S — Niveau',         'Conformité aux ordres du VM'],
    ['2°S — Perpendiculaire','Solidité des ouvrages']
  ]};

  var LUMIERES = { titre: 'LUMIÈRES', lignes: [
    ['Soleil',     'Éclaire le jour'],
    ['Lune',       'Éclaire la nuit'],
    ['VM',         'Éclaire toujours'],
    ['Chandelier', 'Pensée / Volonté / Action']
  ]};

  var LOGE = { titre: 'LOGE', lignes: [
    ['Longueur',   'Orient à Occident'],
    ['Largeur',    'Nord au Midi'],
    ['Profondeur', 'Surface → centre de la Terre'],
    ['Hauteur',    'Coudées sans nombre']
  ]};

  var PARTIES = { titre: 'PARTIES', lignes: [
    ['Porche (Oulam)',      'Vestibule — Terre / Corps'],
    ['Temple (Hikal)',      'Saint lieu — Atmosphère / Âme'],
    ['Sanctuaire (Debhir)', 'Saint des Saints — Ciel / Esprit']
  ]};

  var ORNEMENTS = { titre: 'ORNEMENTS', lignes: [
    ['Pavé mosaïque',      'Orne le seuil du Temple'],
    ['Cordon à houppe',    "Orne l'intérieur du Temple"],
    ['Étoile flamboyante', 'Diffuse la lumière partout']
  ]};

  var TEMPS = { titre: 'TEMPS', lignes: [
    ['06h — 12h', 'Midi'],
    ['12h — 18h', 'Midi plein'],
    ['18h — 24h', 'Minuit'],
    ['00h — 06h', 'Minuit plein']
  ]};

  var CATECHISMES = {
    apprenti: [
      { titre: 'GRADE', lignes: [
        ['Mot du grade',       'JAKIN'],
        ['… signifie',         "Dieu m'a créé"],
        ['Nom reconnaissance', 'PHALEG'],
        ['… qui est',          'Fondateur des bonnes Loges'],
        ['Âge',                '3 ans passés'],
        ['Travail',            'Pierre brute'],
        ['… où',               'Le Porche (1re partie)'],
        ['Tableau symbole',    'Une colonne brisée'],
        ['… devise',           'ADHUC STAT'],
        ['La Loge',            '3 la forment'],
        ['Vertus',             'Justice (et Clémence)']
      ]},
      COLONNES, BIJOUX, LUMIERES, LOGE, PARTIES, ORNEMENTS,
      { titre: 'MEUBLES MOBILES', lignes: [
        ['Compas',            'Justes proportions aux plans'],
        ['Truelle',           'Élever des temples à la vertu'],
        ['Maillet',           'Travailler la pierre brute'],
        ['Épée VM sur Bible', 'Pouvoir fondé sur la loi']
      ]},
      TEMPS
    ],

    compagnon: [
      { titre: 'GRADE', lignes: [
        ['Mot du grade',       'BOAZ'],
        ['… signifie',         'Le Seigneur est ma force'],
        ['Nom reconnaissance', 'GIBELIN'],
        ['… qui est',          'Expert tailleur de pierre'],
        ['Âge',                '5 ans passés'],
        ['Travail',            'Pierre cubique'],
        ['… où',               'Le Porche (2nde partie)'],
        ['Tableau symbole',    'Pierre cubique'],
        ['… devise',           'DIRIGIT OBLIQUA'],
        ['La Loge',            '5 la composent'],
        ['Vertus',             'Tempérance']
      ]},
      COLONNES, BIJOUX, LUMIERES, LOGE, PARTIES, ORNEMENTS,
      { titre: 'MEUBLES MOBILES', lignes: [
        ['Compas',            'Justes proportions aux plans'],
        ['Truelle',           'Élever des temples à la vertu'],
        ['Maillet',           'Mettre en œuvre les plans'],
        ['Épée VM sur Bible', 'Pouvoir fondé sur la loi']
      ]},
      { titre: 'MÉTAUX', lignes: [
        ['Ionique et Dorique',   '1er ordre'],
        ['Corinthien et Romain', '2e ordre'],
        ['Composite',            '3e ordre']
      ]},
      TEMPS
    ],

    maitre: [
      { titre: 'GRADE', lignes: [
        ['Mot du grade',       'MAC BENACH'],
        ['… signifie',         'Le corps est corrompu'],
        ['Nom reconnaissance', 'GABAON'],
        ['… qui est',          "Emplacement de l'Arche d'Alliance"],
        ['Âge',                '7 ans passés'],
        ['Travail',            'Planche à tracer'],
        ['Tableau symbole',    'Vaisseau démâté'],
        ['… devise',           'IN SILENTIO ET SPE FORTITUDO MEA'],
        ['La Loge',            '7 la rendent juste et parfaite'],
        ['Vertus',             'Prudence']
      ]},
      COLONNES, BIJOUX, LUMIERES, LOGE, PARTIES, ORNEMENTS,
      { titre: 'MEUBLES MOBILES', lignes: [
        ['Compas',  'Justes proportions aux plans'],
        ['Truelle', 'Élever des temples à la vertu'],
        ['Maillet', 'VM et SS : union et fermeté']
      ]},
      { titre: 'MEUBLES IMMOBILES', lignes: [
        ['Pierre brute',      'Apprentis — Dégrossir'],
        ['Pierre cubique',    'Compagnons — Aiguiser les outils'],
        ['Planche à tracer',  'Maîtres — Tracer les dessins'],
        ['Épée VM sur Bible', 'Pouvoir fondé sur la loi']
      ]},
      TEMPS,
      { titre: "MOT D'ENTRÉE", lignes: [
        ['Loge de Maîtres', 'SHIBOLETH']
      ]}
    ]
    // Maître Écossais : pas de tableau de rappel (le panneau reste vide,
    // comme avant l'intégration).
  };

  /* ── PRÉSENTATION ───────────────────────────────────────────────────────────
     Couleurs et polices en littéraux : ce sont exactement celles des anciennes
     chaînes. Un seul endroit à modifier pour changer l'aspect du panneau.   */

  var ST = {
    table:  'width:100%; border-collapse:collapse; font-size:0.9em;',
    titre:  'padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;',
    fondA:  '#120f00',   // lignes de rang impair (fond le plus sombre)
    fondB:  '#1a1400',
    label:  'padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;',
    valeur: 'padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;',
    pied:   'padding:8px; border-top:1px solid #3a2a0a; display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; position:sticky; bottom:0; background:#12100a;',
    bouton: 'padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;'
  };

  var GRADES_SELECTEUR = [['apprenti', 'Apprenti'], ['compagnon', 'Compagnon'], ['maitre', 'Maître']];

  function selecteurGrades() {
    return '<div style="' + ST.pied + '">' + GRADES_SELECTEUR.map(function (g) {
      return '<button onclick="afficherCatechisme(\'' + g[0] + '\')" style="' + ST.bouton + '">' + g[1] + '</button>';
    }).join('') + '</div>';
  }

  /** Construit le HTML du tableau de rappel d'un grade ('' si grade inconnu). */
  function renderCatechisme(grade) {
    var sections = CATECHISMES[grade];
    if (!sections) return '';
    // Alternance des fonds : elle suit le rang de la ligne dans le tableau,
    // en-têtes de section compris (rang impair → fondA), comme à l'origine.
    var rang = 0, rows = '';
    sections.forEach(function (sec) {
      rows += '<tr><td colspan="2" style="' + ST.titre + '">─ ' + sec.titre + ' ─</td></tr>';
      rang++;
      sec.lignes.forEach(function (l) {
        var fond = (rang % 2 === 1) ? ST.fondA : ST.fondB;
        rows += '<tr style="background:' + fond + ';"><td style="' + ST.label + '">' + l[0] +
                '</td><td style="' + ST.valeur + '">' + l[1] + '</td></tr>';
        rang++;
      });
    });
    return '<div id="cate-contenu"><table style="' + ST.table + '">' + rows + '</table></div>' + selecteurGrades();
  }

  global.CATECHISMES = CATECHISMES;
  global.renderCatechisme = renderCatechisme;
})(window);
