/* ═══════════════════════════════════════════════════════════════════════════
   ROBUSTESSE R∴E∴R∴ — images, audio, cérémonies
   ───────────────────────────────────────────────────────────────────────────
   Trois outils :
     1. chargerImage()      — change l'image d'un <image> SVG après une sonde de
                              préchargement : repli visible si le fichier manque,
                              et une requête lente ne peut pas écraser une plus
                              récente. L'appelant fournit l'URL COMPLÈTE, avec
                              son paramètre de version (?v=_VISUELS_V), qui reste
                              la règle de cache du plateau.
     2. AudioManager        — cache des objets Audio, volume, coupure, tolérance
                              aux mp3 absents et au blocage de lecture auto.
     3. protegerCeremonie() — une cérémonie qui lève une erreur n'échoue plus
                              en silence : l'incident est tracé dans le flux.

   Intégration : <script src="refactor/robustesse.js"></script> dans
   Loge_RER.html, avant l'injection de scenarios.js.
   ═══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  /* ── 1. IMAGES ───────────────────────────────────────────────────────────── */
  // chargerImage(el | 'id', 'images/tapis_loge.png?v=' + _VISUELS_V)
  function chargerImage(elOrId, src) {
    var el = typeof elOrId === 'string' ? document.getElementById(elOrId) : elOrId;
    if (!el || !src) return;
    var jeton = (el.__rerImageJeton || 0) + 1;   // dernière demande = seule gagnante
    el.__rerImageJeton = jeton;
    var sonde = new Image();
    sonde.onload = function () {
      if (el.__rerImageJeton !== jeton) return;
      el.setAttribute('href', src);
      if (el.__rerImageRepli) { el.removeAttribute('opacity'); el.__rerImageRepli = false; }
    };
    sonde.onerror = function () {
      if (el.__rerImageJeton !== jeton) return;
      console.warn('[image] introuvable :', src);
      if (!el.hasAttribute('opacity')) {          // repli discret plutôt qu'un trou
        el.setAttribute('opacity', '0.25');
        el.__rerImageRepli = true;
      }
    };
    sonde.src = src;
  }

  /* ── 2. AUDIO ────────────────────────────────────────────────────────────── */
  var AudioManager = {
    _cache: {}, _muet: false, _volume: 1,

    /** Objet Audio (mis en cache) pour un fichier ; signale un mp3 absent. */
    obtenir: function (fichier) {
      var a = this._cache[fichier];
      if (!a) {
        a = new Audio(fichier);
        a.preload = 'auto';
        a.addEventListener('error', function () { console.warn('[audio] introuvable :', fichier); });
        this._cache[fichier] = a;
      }
      return a;
    },

    precharger: function (fichiers) {
      (fichiers || []).forEach(function (f) { AudioManager.obtenir(f); });
    },

    /** Lit un fichier depuis le début ; renvoie l'objet Audio (ou null si muet). */
    jouer: function (fichier, opts) {
      if (this._muet) return null;
      opts = opts || {};
      var a = this.obtenir(fichier);
      if (a.__rerFondu) { clearInterval(a.__rerFondu); a.__rerFondu = null; }  // fondu en cours sur le même fichier
      try { a.currentTime = 0; } catch (e) {}
      a.loop   = !!opts.loop;
      a.volume = (opts.volume != null ? opts.volume : 1) * this._volume;
      var p = a.play();
      // Politique autoplay : play() peut rejeter tant qu'aucune interaction n'a eu lieu.
      if (p && p.catch) p.catch(function (e) { console.info('[audio] lecture impossible :', e && e.name); });
      return a;
    },

    /** Arrête un objet Audio, net ou en fondu (−0,05 toutes les 100 ms). */
    arreter: function (a, fondu) {
      if (!a) return;
      if (a.__rerFondu) { clearInterval(a.__rerFondu); a.__rerFondu = null; }
      if (!fondu) { try { a.pause(); } catch (e) {} return; }
      a.__rerFondu = setInterval(function () {
        if (a.volume > 0.05) {
          a.volume = Math.max(0, a.volume - 0.05);
        } else {
          try { a.pause(); } catch (e) {}
          clearInterval(a.__rerFondu); a.__rerFondu = null;
        }
      }, 100);
    },

    stop: function (fichier) {
      var a = this._cache[fichier];
      if (a) { this.arreter(a, false); try { a.currentTime = 0; } catch (e) {} }
    },

    stopTout: function () {
      Object.keys(this._cache).forEach(function (f) { AudioManager.stop(f); });
    },

    setMuet:   function (v) { this._muet = !!v; if (v) this.stopTout(); },
    setVolume: function (v) { this._volume = Math.max(0, Math.min(1, v)); }
  };

  /* ── 3. CÉRÉMONIES ───────────────────────────────────────────────────────── */
  // Enveloppe une cérémonie async. Les cérémonies s'appellent entre elles
  // (catéchisme complet → sections) : seul l'appel de plus haut niveau est
  // protégé, les appels imbriqués propagent leur erreur normalement, pour que
  // la séquence s'arrête là où elle s'arrêtait avant.
  var profondeur = 0;

  function signalerDansLeFlux(nom) {
    var flux = document.getElementById('flux-dialogue-integre');
    if (!flux) return;
    var d = document.createElement('div');
    d.setAttribute('role', 'alert');
    d.style.cssText = 'margin:10px 0; padding:8px 10px; border-left:3px solid #b83030;' +
                      ' background:#1a0d0d; color:#e0a0a0; font-size:0.82em; border-radius:3px;';
    d.textContent = '⚠ La séquence « ' + nom + ' » a été interrompue par une erreur. ' +
                    'Vous pouvez relancer cette étape ou ranger la loge.';
    flux.appendChild(d); flux.scrollTop = flux.scrollHeight;
  }

  function protegerCeremonie(fn, nom) {
    if (typeof fn !== 'function' || fn.__rerProtege) return fn;
    var enveloppe = function () {
      if (profondeur > 0) return fn.apply(this, arguments);   // appel imbriqué
      profondeur++;
      var p;
      try { p = Promise.resolve(fn.apply(this, arguments)); }
      catch (e) { p = Promise.reject(e); }
      return p.then(function (v) { profondeur--; return v; }, function (err) {
        profondeur--;
        console.error('[cérémonie] « ' + (nom || fn.name) + ' » a échoué :', err);
        // Libellé lisible : l'étape en cours (Rituel._etapeCourante), sinon le nom technique.
        var etape = (typeof Rituel !== 'undefined' && Rituel._etapeCourante) || nom || fn.name || 'étape';
        signalerDansLeFlux(etape);
      });
    };
    enveloppe.__rerProtege = true;
    enveloppe.__rerOriginal = fn;
    return enveloppe;
  }

  /** Protège les méthodes nommées d'un objet (ex. Rituel), une seule fois chacune. */
  function protegerCeremonies(objet, noms) {
    var n = 0;
    (noms || []).forEach(function (k) {
      if (objet && typeof objet[k] === 'function' && !objet[k].__rerProtege) {
        objet[k] = protegerCeremonie(objet[k], k); n++;
      }
    });
    return n;
  }

  global.chargerImage       = chargerImage;
  global.AudioManager       = AudioManager;
  global.protegerCeremonie  = protegerCeremonie;
  global.protegerCeremonies = protegerCeremonies;
})(window);
