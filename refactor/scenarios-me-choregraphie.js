/* ═══════════════════════════════════════════════════════════════════════════
   CHORÉGRAPHIE + MISE EN PLACE — RÉCEPTION MAÎTRE ÉCOSSAIS
   ───────────────────────────────────────────────────────────────────────────
   Helpers de mise en place corrigés d'après la géométrie réelle du plateau et
   le rituel. N'ajoute AUCUN dialogue (les discours du grade sont déjà fidèles).

   Deux volets :
     • déplacements (marche des 4 portes, découverte du tapis) ;
     • apparition des éléments visuels ME (4 tableaux, lame d'or, autel des
       parfums, double triangle, transparent FORCE, mobilier) — les gabarits
       SVG correspondants sont dans refactor/elements-me-svg.html, à coller dans
       <g id="elements-me"> de Loge_RER.html.

   Géométrie (orientation plateau) :
     Orient = HAUT · Occident = BAS · Nord = GAUCHE · Midi = DROITE.
   Tapis x 495→765, y 340→790 · centre (630,565).

   INTÉGRATION : voir CHANGELOG-me-choregraphie.md
     <script src="scenarios.js"></script>
     <script src="refactor/scenarios-me-choregraphie.js"></script>
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (typeof Rituel === 'undefined') {
    console.warn('[ME-chorégraphie] Rituel introuvable — charger après scenarios.js.');
    return;
  }

  var PORTE = {
    occident: { x: 630, y: 790 }, midi: { x: 765, y: 565 },
    nord:     { x: 495, y: 565 }, orient: { x: 630, y: 340 }
  };
  var FLAMBEAU_ME = {
    so: { x: 495, y: 790 }, no: { x: 495, y: 340 },
    ne: { x: 765, y: 340 }, se: { x: 765, y: 790 }
  };
  var CENTRE  = { x: 630, y: 565 };
  var COUSSIN = { x: 633, y: 242 };

  Object.assign(Rituel, {

    // ── Visibilité des éléments ME ──────────────────────────────────────────
    _montrerME: function (id, on) {
      var e = document.getElementById(id);
      if (e) e.setAttribute('visibility', on ? 'visible' : 'hidden');
    },
    /** Montre le tableau n (1..4) sur le parquet ; 0 = tous masqués. */
    _afficherTableauME: function (n) {
      for (var i = 1; i <= 4; i++) this._montrerME('tableau-me-' + i, i === n);
    },
    /** Masque tous les éléments ajoutés (à appeler à la mise en place / reset). */
    _resetElementsME: function () {
      this._afficherTableauME(0);
      ['mobilier-me', 'lame-or-me', 'autel-parfums-me',
       'double-triangle-me', 'transparent-force-me'].forEach(function (id) {
        var e = document.getElementById(id);
        if (e) e.setAttribute('visibility', 'hidden');
      }, this);
    },
    _revelerDoubleTriangleME:  function () { this._montrerME('double-triangle-me', true); },
    _revelerTransparentForceME: function () { this._montrerME('transparent-force-me', true); },

    // ── Déplacements ────────────────────────────────────────────────────────
    /** Marche des Maîtres Écossais : 4 pas sur les 4 portes (Occ→Midi→Nord→Orient),
     *  puis 3 pas d'équerre jusqu'au coussin de l'autel. */
    _marcheQuatrePortesME: async function (id) {
      var D = this.DUREE_WP;
      this.action("Marche des Maîtres Écossais : quatre pas sur les quatre portes du Temple — Occident, Midi, Nord, Orient.");
      var pas = [PORTE.occident, PORTE.midi, PORTE.nord, PORTE.orient];
      for (var i = 0; i < pas.length; i++) {
        await this.processer(id, D, pas[i]);
        if (typeof this._afficherPas === 'function') this._afficherPas(i + 1, pas[i].x, pas[i].y);
        await this.pause(700);
      }
      this.action("Puis trois pas d'équerre en avant, jusqu'au coussin de l'autel d'Orient.");
      await this.processer(id, D, { x: 630, y: 300 }, COUSSIN);
    },

    /** Allumage des quatre flambeaux aux angles du tapis, par le Nord, revenant
     *  par le Midi (SO → NO → NE → SE). */
    _allumerFlambeauxME: async function () {
      var ordre = ['so', 'no', 'ne', 'se'];
      for (var i = 0; i < ordre.length; i++) {
        var f = FLAMBEAU_ME[ordre[i]];
        if (typeof this._flammeEphemere === 'function') await this._flammeEphemere(f.x, f.y - 20, 850);
        else await this.pause(300);
      }
    },

    /** Découverte du tapis à la truelle : parcours des quatre côtés, révélation
     *  du mobilier (chandelier 7 branches, table des pains, 4 instruments). */
    _decouvrirTapisME: async function (id) {
      var D = this.DUREE_WP;
      this._afficherTableauME(0); // les tableaux sont écartés du parquet
      this.action("Découverte du tapis à la truelle : les quatre côtés successivement, le voile ramassé vers le centre.");
      await this.processer(id, D, PORTE.occident, PORTE.midi, PORTE.orient, PORTE.nord);
      this._montrerME('mobilier-me', true);
      this.action("Sont découverts le chandelier à sept branches, la table des pains de proposition, les quatre instruments maçonniques et la place de l'autel des parfums.");
      await this.processer(id, D, CENTRE);
      await this.pause(this.PAUSE_ACTION);
    },

    /** Révélation du Nom JEHOVA : la lame d'or et l'autel des parfums apparaissent,
     *  l'esprit de vin s'embrase au centre, puis les quatre flambeaux s'allument. */
    _revelationJehovaME: async function () {
      this._montrerME('autel-parfums-me', true);
      this._montrerME('lame-or-me', true);
      if (typeof this._flammeEphemere === 'function') await this._flammeEphemere(CENTRE.x, CENTRE.y, 1600);
      await this._allumerFlambeauxME();
    }
  });

  Rituel._GEO_ME = { PORTE: PORTE, FLAMBEAU_ME: FLAMBEAU_ME, CENTRE: CENTRE, COUSSIN: COUSSIN };
  console.info('[ME-chorégraphie] Helpers + mise en place ME chargés.');
})();
