/* ═══════════════════════════════════════════════════════════════════════════
   PIONS R∴E∴R∴ — génération par données (déduplication)
   ───────────────────────────────────────────────────────────────────────────
   27 pions de rang quasi identiques étaient écrits à la main dans le SVG :
     • 7 Maîtres (bleu, « M »)           • 5 Compagnons (blanc, liseré bleu, « C »)
     • 5 Apprentis (blanc, liseré gris, « A »)
     • 10 MX + 1 M (vert, liseré rouge — Maître Écossais)
   Ils sont maintenant produits à partir de la table RANGS : changer l'aspect
   d'un rang = modifier une ligne.

   ⚠ Les 10 Officiers (VM, Surveillants, Orateur…) gardent leur SVG dédié
   (bijou propre à chaque office) : ils ne passent pas par ce générateur.

   Le balisage produit est identique à l'ancien (mêmes id, classe `draggable`,
   transform, visibility, mêmes enfants et attributs, même ordre). Les pions
   sont insérés À LA PLACE du repère <g id="couche-pions-generes"> puis le
   repère est retiré : l'arbre SVG et l'ordre de rendu restent ceux d'avant.

   Intégration (Loge_RER.html) :
     <script src="refactor/pions-data.js"></script>
     <script>insererPionsSVG('couche-pions-generes');</script>
   juste après le </svg>, avant moteur.js et avant l'injection de scenarios.js.
   ═══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  // Positions initiales (réserve) — reprises à l'identique du HTML d'origine.
  // Elles doivent rester cohérentes avec Rituel.REMISE et resetTout().
  var RANGS = {
    maitre: {
      lettre: 'M', taille: 20, fill: '#66b3ff', shine: 'shine-bleu-clair',
      stroke: null, texteFill: '#d4a84b', ombre: false,
      pos: [[1220,520],[1270,520],[1320,520],[1220,580],[1270,580],[1320,580],[1270,640]],
      masques: [7]                       // pion-maitre7 caché (nouveau reçu)
    },
    comp: {
      lettre: 'C', taille: 20, fill: '#ffffff', shine: 'shine-blanc',
      stroke: '#66b3ff', strokeW: 3, texteFill: null, ombre: false,
      pos: [[1220,720],[1270,720],[1320,720],[1245,780],[1295,780]],
      masques: [5]                       // pion-comp5 caché (nouveau reçu)
    },
    appr: {
      lettre: 'A', taille: 20, fill: '#ffffff', shine: 'shine-blanc',
      stroke: '#cccccc', strokeW: 1, texteFill: null, ombre: false,
      pos: [[1220,920],[1270,920],[1320,920],[1245,980],[1295,980]],
      masques: [5]                       // pion-appr5 caché (nouveau reçu)
    },
    mx: {
      lettre: 'MX', taille: 14, fill: '#2d7a2d', shine: 'shine-vert-me',
      stroke: '#cc2200', strokeW: 2.5, texteFill: '#f0f0f0', ombre: true,
      pos: [[1220,520],[1320,520],[1220,600],[1320,600],[1220,680],[1320,680],
            [1220,760],[1320,760],[1220,840],[1320,840]],
      masques: 'tous'                    // tous cachés (visibles au grade ME)
    }
  };

  // Pion « M » unique du grade Maître Écossais (reçu), caché par défaut.
  var PION_M = { lettre: 'M', taille: 18, fill: '#2d7a2d', shine: 'shine-vert-me',
                 stroke: '#cc2200', strokeW: 2.5, texteFill: '#f0f0f0', ombre: true };

  function pion(id, cfg, x, y, cache) {
    var s = '<g id="' + id + '" class="draggable" transform="translate(' + x + ', ' + y + ')"' +
            (cache ? ' visibility="hidden"' : '') + '>';
    if (cfg.ombre) s += '<ellipse cx="2" cy="6" rx="26" ry="7" fill="#000" opacity="0.25"/>';
    s += '<circle r="26" fill="' + cfg.fill + '"/>';
    s += '<circle r="26" fill="url(#' + cfg.shine + ')"/>';
    if (cfg.stroke) s += '<circle r="23" fill="none" stroke="' + cfg.stroke +
                         '" stroke-width="' + cfg.strokeW + '"/>';
    // Sans texteFill, la lettre garde le noir par défaut du SVG (pas d'attribut fill).
    s += '<text y="8" text-anchor="middle" font-family="Cinzel" font-size="' + cfg.taille + '"' +
         (cfg.texteFill ? ' fill="' + cfg.texteFill + '"' : '') +
         ' font-weight="700">' + cfg.lettre + '</text>';
    return s + '</g>';
  }

  /** Markup SVG de tous les pions de rang (Maîtres, Comp., Appr., MX + M), dans l'ordre d'origine. */
  function genererPionsSVG() {
    var out = '';
    Object.keys(RANGS).forEach(function (prefixe) {
      var cfg = RANGS[prefixe];
      cfg.pos.forEach(function (p, i) {
        var n = i + 1;
        var cache = cfg.masques === 'tous' || (Array.isArray(cfg.masques) && cfg.masques.indexOf(n) >= 0);
        out += pion('pion-' + prefixe + n, cfg, p[0], p[1], cache);
      });
    });
    out += pion('pion-m', PION_M, 1270, 1080, true);
    return out;
  }

  /** Remplace le repère <g id="…"> par les pions générés (même parent, même position). */
  function insererPionsSVG(idRepere) {
    var repere = document.getElementById(idRepere);
    if (!repere) { console.error('[pions] repère introuvable : #' + idRepere); return; }
    repere.insertAdjacentHTML('beforebegin', genererPionsSVG());
    repere.parentNode.removeChild(repere);
  }

  global.RANGS_PIONS = RANGS;
  global.genererPionsSVG = genererPionsSVG;
  global.insererPionsSVG = insererPionsSVG;
})(window);
