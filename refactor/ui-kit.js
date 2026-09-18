/* ═══════════════════════════════════════════════════════════════════════════
   UI-KIT R∴E∴R∴ — styles de boutons factorisés
   ───────────────────────────────────────────────────────────────────────────
   Élimine les chaînes `btn.style.cssText = '…'` recopiées dans chaque toggle
   et dans genererMenu(). Une seule table de variantes ; on n'écrit plus un
   style de bouton à la main.

   Les valeurs reproduisent EXACTEMENT les styles d'origine (styles calculés
   identiques, vérifiés à l'intégration) : pas de police imposée, mêmes
   marges, mêmes couleurs.

   Usage :
     style="${RERUI.btn('primary')}"                      // bouton de menu
     RERUI.apply(btn, actif ? 'toggle-on' : 'toggle-off', { compact: true });

   Options :
     compact : true  → padding 6px 2px, 0.75em, sans largeur imposée
                        (boutons des grilles 2 ou 3 colonnes de la régie)
     mb      : '4px' → margin-bottom (boutons pleine largeur du bloc Système)
     pad / size / block / extra : réglages fins (en-têtes de section)

   Intégration : <script src="refactor/ui-kit.js"></script> dans
   Loge_RER.html, avant l'injection de scenarios.js.
   ═══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  // Variantes : [fond, texte, bordure] — couleurs d'origine.
  var VARIANTS = {
    primary:      ['#2a2000', 'gold',    '#8b6914'], // action forte (ouverture, clôture…) ; aussi « ON » doré
    secondary:    ['#2a1a00', '#d4a84b', '#8b6914'], // action secondaire (catéchisme, réception…)
    success:      ['#1a2a1a', '#88cc88', '#4a8a4a'], // « Loge prête »
    danger:       ['#4a0000', '#ffcccc', '#900'],    // « Ranger »
    info:         ['#0d1a2a', '#6ab4e8', '#2a5a8a'], // Quiz
    section:      ['#1a1200', '#d4a84b', '#8b6914'], // en-têtes d'accordéon
    'toggle-on':  ['#0d2a0d', '#a0d4a0', '#4a8a4a'], // bascule active (vert)
    'toggle-off': ['#1a1a1a', '#666',    '#444'],    // bascule inactive (gris)
    'cate-on':    ['#2a1800', '#d4a84b', '#8b6914'], // panneau catéchisme ouvert
    'blue-off':   ['#0d1e2a', '#66b3ff', '#3a6a99'], // bijoux en mode SVG
    classique:    ['#1a1200', '#a08030', '#6b5010'], // loge en mode classique
    positions:    ['#1a1a2a', '#8888cc', '#4a4a8a'], // relevé des positions
    pause:        ['#1a1a0d', '#cccc88', '#666633'], // ⏸ Pause
    reprendre:    ['#2a1a00', '#ffaa44', '#cc7700']  // ▶ Reprendre
  };

  function styleFor(variant, opts) {
    var v = VARIANTS[variant] || VARIANTS.secondary;
    opts = opts || {};
    var compact = !!opts.compact;
    var pad   = opts.pad  || (compact ? '6px 2px' : '7px');
    var size  = opts.size || (compact ? '0.75em'  : '0.82em');
    var block = (opts.block !== undefined) ? opts.block : !compact;
    return 'padding:' + pad + '; cursor:pointer; border-radius:4px; font-size:' + size + ';' +
      (block ? ' width:100%;' : '') +
      (opts.mb ? ' margin-bottom:' + opts.mb + ';' : '') +
      (opts.extra ? ' ' + opts.extra : '') +
      ' background:' + v[0] + '; color:' + v[1] + '; border:1px solid ' + v[2] + ';';
  }

  var RERUI = {
    VARIANTS: VARIANTS,

    /** Chaîne de style CSS pour une variante donnée. */
    btn: function (variant, opts) { return styleFor(variant, opts); },

    /** Style de bascule : vert (ON) ou gris (OFF). */
    toggle: function (actif, opts) {
      return styleFor(actif ? 'toggle-on' : 'toggle-off', opts);
    },

    /** Applique une variante à un élément existant (par id ou nœud). */
    apply: function (elOrId, variant, opts) {
      var el = typeof elOrId === 'string' ? document.getElementById(elOrId) : elOrId;
      if (el) el.style.cssText = styleFor(variant, opts);
    }
  };

  global.RERUI = RERUI;
})(window);
