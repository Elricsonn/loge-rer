/* ═══════════════════════════════════════════════════════════════════════════
   PERSISTANCE R∴E∴R∴ — sauvegarde & reprise de session
   ───────────────────────────────────────────────────────────────────────────
   Un rafraîchissement ne perd plus tout : ce module mémorise l'essentiel dans
   localStorage et, après la connexion, propose de REPRENDRE.

   Ce qu'il enregistre :
     • le grade connecté et le grade « en loge » (conformité du temple)
     • la dernière étape lancée
     • les réglages (bulles, musique, debug, bijoux, mode de loge, taille des bulles)
     • la position et la visibilité de chaque pion, cierge et du chandelier

   Confidentialité : rien de sensible n'est stocké (ni mot de passe, ni hash) —
   uniquement l'état d'avancement local, sur le poste. La reprise n'est
   proposée qu'APRÈS une connexion réussie, pour le même grade.

   Note technique : Rituel, _musiqueActive, bijouxMode et logeMode sont des
   déclarations const/let de niveau script : elles ne sont PAS des propriétés
   de window. On les lit donc par leur nom (portée globale partagée entre
   scripts classiques), protégé par typeof.

   Branchements (Loge_RER.html / scenarios.js) :
     • fin de _activerGrade(grade) :  RERState.ouvrirSession(grade)
     • Rituel._setEtape(nom)       :  RERState.majEtape(nom)
     • toggles / taille des bulles :  RERState.majReglages()
     • fin de Rituel.resetTout()   :  RERState.effacer()   (« Ranger la loge »)
     • pagehide                    :  instantané automatique (ce module)
   ═══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var CLE = 'rer_session_v1';
  var PIONS = 'rer_pions_v1';
  var DUREE_MAX = 12 * 3600 * 1000;   // au-delà, la session est jugée périmée
  var ETAPES_NEUTRES = { '': 1, 'En attente': 1 };

  function lire(cle) {
    try { return JSON.parse(localStorage.getItem(cle) || 'null'); } catch (e) { return null; }
  }
  function ecrire(cle, val) {
    try { localStorage.setItem(cle, JSON.stringify(val)); } catch (e) { /* quota / mode privé */ }
  }

  function rituel() { return (typeof Rituel !== 'undefined') ? Rituel : null; }

  var TAILLES = { '12': 'petit', '14': 'moyen', '16': 'grand' };

  function reglagesActuels() {
    var R = rituel() || {};
    return {
      bulles:   R.BULLES_ACTIVES,
      debug:    R.DEBUG_MODE,
      musique:  (typeof _musiqueActive !== 'undefined') ? _musiqueActive : null,
      bijoux:   (typeof bijouxMode !== 'undefined') ? bijouxMode : null,
      logeMode: (typeof logeMode !== 'undefined') ? logeMode : null,
      taille:   TAILLES[global._bulleTailleNom] || null
    };
  }

  // Lit la translation courante d'un élément SVG (matrice consolidée).
  function posElement(el) {
    try {
      var t = el.transform.baseVal;
      if (!t || !t.length) return null;
      var m = t.consolidate().matrix;
      return [Math.round(m.e), Math.round(m.f)];
    } catch (e) { return null; }
  }

  var RERState = {
    /** Enregistre le grade connecté (à l'ouverture de session). */
    majGrade: function (grade) {
      var s = lire(CLE) || {};
      s.grade = grade; s.ts = Date.now();
      ecrire(CLE, s);
    },

    /** Étape lancée : on la retient (sauf « En attente »), avec réglages et pions. */
    majEtape: function (nom) {
      if (!global._gradeConnecte) return;
      var s = lire(CLE) || {};
      if (!ETAPES_NEUTRES[nom || '']) s.etape = nom;
      s.grade = global._gradeConnecte;
      s.gradeEnLoge = global._gradeEnLoge || null;
      s.reglages = reglagesActuels();
      s.ts = Date.now();
      ecrire(CLE, s);
      this.majPions();
    },

    /** Enregistre uniquement les réglages (appelé par les toggles). */
    majReglages: function () {
      if (!global._gradeConnecte) return;
      var s = lire(CLE) || {};
      s.reglages = reglagesActuels(); s.ts = Date.now();
      ecrire(CLE, s);
    },

    /** Instantané des positions et visibilités des pions présents. */
    majPions: function () {
      var carte = {};
      document.querySelectorAll('#loge-svg [id^="pion-"], #loge-svg [id^="cierge-"], #chandelier').forEach(function (el) {
        var p = posElement(el);
        if (p) carte[el.id] = [p[0], p[1], el.getAttribute('visibility')];
      });
      ecrire(PIONS, carte);
    },

    /** Replace les pions mémorisés (instantanément) et rétablit leur visibilité. */
    restaurerPions: function () {
      var carte = lire(PIONS);
      var svg = document.getElementById('loge-svg');
      if (!carte || !svg) return;
      var R = rituel();
      Object.keys(carte).forEach(function (id) {
        var c = carte[id];
        var el = document.getElementById(id);
        if (!el) return;
        // Placement direct (animerVers avec une durée 0 produirait NaN : 0/0).
        // Uniquement pour les éléments à simple translation, comme les pions.
        try {
          var t = el.transform.baseVal;
          if (t.length > 1) return;
          if (!t.length) t.insertItemBefore(svg.createSVGTransform(), 0);
          t.getItem(0).setTranslate(c[0], c[1]);
        } catch (e) { return; }
        if (c[2] === undefined) return;
        if (c[2] === null) el.removeAttribute('visibility'); else el.setAttribute('visibility', c[2]);
        if (R && R.EXIST && Object.prototype.hasOwnProperty.call(R.EXIST, id) && c[2] !== null) {
          R.EXIST[id] = (c[2] === 'hidden') ? 0 : 1;
        }
      });
    },

    /** Réapplique les réglages mémorisés via les toggles existants (best-effort). */
    restaurerReglages: function () {
      var s = lire(CLE);
      if (!s || !s.reglages) return;
      var r = s.reglages, R = rituel() || {};
      if (typeof r.bulles === 'boolean' && R.BULLES_ACTIVES !== r.bulles && typeof toggleBulles === 'function') toggleBulles();
      if (typeof r.musique === 'boolean' && typeof _musiqueActive !== 'undefined' && _musiqueActive !== r.musique &&
          typeof toggleMusique === 'function') toggleMusique();
      if (r.bijoux && typeof bijouxMode !== 'undefined' && bijouxMode !== r.bijoux && typeof toggleBijoux === 'function') toggleBijoux();
      if (r.logeMode && typeof logeMode !== 'undefined' && logeMode !== r.logeMode && typeof toggleLogeMode === 'function') toggleLogeMode();
      if (r.taille && typeof setTailleBulles === 'function') setTailleBulles(r.taille);
      if (typeof r.debug === 'boolean' && R.DEBUG_MODE !== r.debug && typeof toggleDebug === 'function') toggleDebug();
    },

    /** Session reprenable ? (même grade, étape réelle, moins de 12 h). */
    sessionReprenable: function (grade) {
      var s = lire(CLE);
      if (!s || !s.etape || ETAPES_NEUTRES[s.etape]) return null;
      if (s.grade && grade && s.grade !== grade) return null;
      if (Date.now() - (s.ts || 0) > DUREE_MAX) return null;
      return s;
    },

    /** Propose de reprendre ; renvoie true si la session a été restaurée. */
    proposerReprise: function (grade) {
      var s = this.sessionReprenable(grade || global._gradeConnecte);
      if (!s) return false;
      if (!confirm('Reprendre la session précédente ?\n\nDernière étape : « ' + s.etape + ' »\n' +
                   'Les pions seront replacés tels qu\'ils étaient.')) return false;
      if (s.gradeEnLoge && s.gradeEnLoge !== global._gradeEnLoge && typeof miseEnConformite === 'function') {
        miseEnConformite(s.gradeEnLoge);
      }
      this.restaurerReglages();
      this.restaurerPions();
      var R = rituel();
      if (R && R._setEtape) R._setEtape(s.etape);
      return true;
    },

    /** À appeler après la connexion : propose la reprise, sinon repart à neuf. */
    ouvrirSession: function (grade) {
      var repris = false;
      try { repris = this.proposerReprise(grade); } catch (e) { console.warn('[reprise] échec :', e); }
      if (!repris) this.effacer();
      this.majGrade(grade);
    },

    /** Efface la session (appelé par « Ranger la loge »). */
    effacer: function () {
      try { localStorage.removeItem(CLE); localStorage.removeItem(PIONS); } catch (e) {}
    }
  };

  // Instantané à la fermeture / au rafraîchissement : capte aussi les
  // déplacements manuels (glisser-déposer) faits depuis la dernière étape.
  global.addEventListener('pagehide', function () {
    if (!global._gradeConnecte) return;
    var s = lire(CLE);
    if (!s) return;
    s.reglages = reglagesActuels();
    s.gradeEnLoge = global._gradeEnLoge || s.gradeEnLoge || null;
    ecrire(CLE, s);            // ts inchangé : la fraîcheur reste celle de la dernière étape
    RERState.majPions();
  });

  global.RERState = RERState;
})(window);
