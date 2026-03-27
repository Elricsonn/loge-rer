/**
 * SCÉNARIOS — Rite Écossais Rectifié
 * Fichier unique — tous grades
 * Le grade connecté détermine les sections visibles
 */

// ── Constantes géographiques ──────────────────────────────────────────────────
// WP : circuit de circumambulation (sens du soleil, Occident→Nord→Orient→Midi)
// Utilisé pour : ouvertures/fermetures, circumambulations, voyages maître écossais
const WP = [
    { x: 630, y: 1130 }, // WP0 — Porte (seuil Occident)
    { x: 630, y:  830 }, // WP1 — Bas du tapis
    { x: 420, y:  720 }, // WP2 — Arc Nord-Bas
    { x: 420, y:  565 }, // WP3 — Arc Nord-Milieu
    { x: 420, y:  380 }, // WP4 — Arc Nord-Haut
    { x: 630, y:  280 }, // WP5 — Devant l'autel du VM
    { x: 840, y:  380 }, // WP6 — Arc Midi-Haut
    { x: 840, y:  565 }, // WP7 — Arc Midi-Milieu
    { x: 840, y:  720 }, // WP8 — Arc Midi-Bas
];

// PW : circuit des voyages d'épreuves (indexation 1-based, PW[0] = null)
// Passe derrière les Surveillants et le VM, à l'extérieur du circuit WP
// Utilisé pour : voyages apprenti, compagnon, maître
const PW = [
    null,                  // PW[0] — non utilisé (indexation 1-based)
    { x: 637, y:  903 },  // PW1
    { x: 498, y: 1026 },  // PW2
    { x: 303, y: 1019 },  // PW3
    { x: 319, y:  808 },  // PW4
    { x: 451, y:  159 },  // PW5 — Autel du VM (dépôt des métaux / épreuve Orient)
    { x: 632, y:   47 },  // PW6
    { x: 806, y:  149 },  // PW7
    { x: 952, y:  803 },  // PW8
    { x: 969, y: 1032 },  // PW9
    { x: 792, y: 1033 },  // PW10
];

// COULOIR : position de sortie dans les pas perdus (Introducteur + candidat)
const COULOIR = { x: 1295, y: 1190 };

// ── Accordéon ─────────────────────────────────────────────────────────────────
function toggleSection(id) {
    var allIds = ['sec-entree','sec-loge-app','sec-loge-comp','sec-loge-mai','sec-loge-me',
                  'sec-recep-app','sec-recep-comp','sec-recep-mai','sec-recep-me','sec-regle'];
    allIds.forEach(function(sid) {
        var el = document.getElementById(sid);
        var arrow = document.getElementById(sid + '-arrow');
        if (el && sid !== id) { el.style.display = 'none'; }
        if (arrow && sid !== id) { arrow.textContent = '▶'; }
    });
    var el = document.getElementById(id);
    var arrow = document.getElementById(id + '-arrow');
    if (el && arrow) {
        var ouvert = el.style.display === 'block';
        el.style.display = ouvert ? 'none' : 'block';
        arrow.textContent = ouvert ? '▶' : '▼';
    }
}

// ── Catéchisme ───────────────────────────────────────────────────────────────
const _CATE_GRADE = {
    'apprenti': `<div id="cate-contenu"><table style="width:100%; border-collapse:collapse; font-size:0.9em;"><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ GRADE ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Mot du grade</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">JAKIN</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… signifie</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Dieu m'a créé</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Nom reconnaissance</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">PHALEG</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… qui est</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Fondateur des bonnes Loges</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Âge</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">3 ans passés</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Travail</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pierre brute</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… où</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Le Porche (1re partie)</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Tableau symbole</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Une colonne brisée</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… devise</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">ADHUC STAT</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">La Loge</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">3 la forment</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Vertus</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Justice (et Clémence)</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ COLONNES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Sagesse — VM</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Inventer</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Beauté — 1°S</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orner</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Force — 2°S</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Exécuter</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ BIJOUX ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">VM — Équerre</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Régularité et perfection</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">1°S — Niveau</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Conformité aux ordres du VM</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">2°S — Perpendiculaire</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Solidité des ouvrages</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ LUMIÈRES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Soleil</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire le jour</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Lune</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire la nuit</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">VM</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire toujours</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Chandelier</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pensée / Volonté / Action</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ LOGE ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Longueur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orient à Occident</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Largeur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Nord au Midi</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Profondeur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Surface → centre de la Terre</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Hauteur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Coudées sans nombre</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ PARTIES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Porche (Oulam)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Vestibule — Terre / Corps</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Temple (Hikal)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Saint lieu — Atmosphère / Âme</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Sanctuaire (Debhir)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Saint des Saints — Ciel / Esprit</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ ORNEMENTS ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Pavé mosaïque</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orne le seuil du Temple</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Cordon à houppe</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orne l'intérieur du Temple</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Étoile flamboyante</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Diffuse la lumière partout</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ MEUBLES MOBILES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Compas</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Justes proportions aux plans</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Truelle</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Élever des temples à la vertu</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Maillet</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Travailler la pierre brute</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Épée VM sur Bible</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pouvoir fondé sur la loi</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ TEMPS ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">06h — 12h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Midi</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">12h — 18h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Midi plein</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">18h — 24h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Minuit</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">00h — 06h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Minuit plein</td></tr></table></div><div style="padding:8px; border-top:1px solid #3a2a0a; display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; position:sticky; bottom:0; background:#12100a;"><button onclick="afficherCatechisme('apprenti')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Apprenti</button><button onclick="afficherCatechisme('compagnon')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Compagnon</button><button onclick="afficherCatechisme('maitre')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Maître</button></div>`,
    'compagnon': `<div id="cate-contenu"><table style="width:100%; border-collapse:collapse; font-size:0.9em;"><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ GRADE ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Mot du grade</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">BOAZ</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… signifie</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Le Seigneur est ma force</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Nom reconnaissance</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">GIBELIN</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… qui est</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Expert tailleur de pierre</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Âge</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">5 ans passés</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Travail</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pierre cubique</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… où</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Le Porche (2nde partie)</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Tableau symbole</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pierre cubique</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… devise</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">DIRIGIT OBLIQUA</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">La Loge</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">5 la composent</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Vertus</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Tempérance</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ COLONNES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Sagesse — VM</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Inventer</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Beauté — 1°S</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orner</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Force — 2°S</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Exécuter</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ BIJOUX ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">VM — Équerre</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Régularité et perfection</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">1°S — Niveau</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Conformité aux ordres du VM</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">2°S — Perpendiculaire</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Solidité des ouvrages</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ LUMIÈRES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Soleil</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire le jour</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Lune</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire la nuit</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">VM</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire toujours</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Chandelier</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pensée / Volonté / Action</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ LOGE ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Longueur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orient à Occident</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Largeur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Nord au Midi</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Profondeur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Surface → centre de la Terre</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Hauteur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Coudées sans nombre</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ PARTIES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Porche (Oulam)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Vestibule — Terre / Corps</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Temple (Hikal)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Saint lieu — Atmosphère / Âme</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Sanctuaire (Debhir)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Saint des Saints — Ciel / Esprit</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ ORNEMENTS ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Pavé mosaïque</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orne le seuil du Temple</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Cordon à houppe</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orne l'intérieur du Temple</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Étoile flamboyante</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Diffuse la lumière partout</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ MEUBLES MOBILES ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Compas</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Justes proportions aux plans</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Truelle</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Élever des temples à la vertu</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Maillet</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Mettre en œuvre les plans</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Épée VM sur Bible</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pouvoir fondé sur la loi</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ MÉTAUX ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Ionique et Dorique</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">1er ordre</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Corinthien et Romain</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">2e ordre</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Composite</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">3e ordre</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ TEMPS ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">06h — 12h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Midi</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">12h — 18h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Midi plein</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">18h — 24h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Minuit</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">00h — 06h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Minuit plein</td></tr></table></div><div style="padding:8px; border-top:1px solid #3a2a0a; display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; position:sticky; bottom:0; background:#12100a;"><button onclick="afficherCatechisme('apprenti')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Apprenti</button><button onclick="afficherCatechisme('compagnon')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Compagnon</button><button onclick="afficherCatechisme('maitre')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Maître</button></div>`,
    'maitre': `<div id="cate-contenu"><table style="width:100%; border-collapse:collapse; font-size:0.9em;"><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ GRADE ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Mot du grade</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">MAC BENACH</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… signifie</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Le corps est corrompu</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Nom reconnaissance</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">GABAON</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… qui est</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Emplacement de l'Arche d'Alliance</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Âge</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">7 ans passés</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Travail</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Planche à tracer</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Tableau symbole</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Vaisseau démâté</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">… devise</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">IN SILENTIO ET SPE FORTITUDO MEA</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">La Loge</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">7 la rendent juste et parfaite</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Vertus</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Prudence</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ COLONNES ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Sagesse — VM</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Inventer</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Beauté — 1°S</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orner</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Force — 2°S</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Exécuter</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ BIJOUX ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">VM — Équerre</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Régularité et perfection</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">1°S — Niveau</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Conformité aux ordres du VM</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">2°S — Perpendiculaire</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Solidité des ouvrages</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ LUMIÈRES ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Soleil</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire le jour</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Lune</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire la nuit</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">VM</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Éclaire toujours</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Chandelier</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pensée / Volonté / Action</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ LOGE ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Longueur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orient à Occident</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Largeur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Nord au Midi</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Profondeur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Surface → centre de la Terre</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Hauteur</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Coudées sans nombre</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ PARTIES ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Porche (Oulam)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Vestibule — Terre / Corps</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Temple (Hikal)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Saint lieu — Atmosphère / Âme</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Sanctuaire (Debhir)</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Saint des Saints — Ciel / Esprit</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ ORNEMENTS ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Pavé mosaïque</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orne le seuil du Temple</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Cordon à houppe</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Orne l'intérieur du Temple</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Étoile flamboyante</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Diffuse la lumière partout</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ MEUBLES MOBILES ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Compas</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Justes proportions aux plans</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Truelle</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Élever des temples à la vertu</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Maillet</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">VM et SS : union et fermeté</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ MEUBLES IMMOBILES ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Pierre brute</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Apprentis — Dégrossir</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Pierre cubique</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Compagnons — Aiguiser les outils</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Planche à tracer</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Maîtres — Tracer les dessins</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Épée VM sur Bible</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Pouvoir fondé sur la loi</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ TEMPS ─</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">06h — 12h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Midi</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">12h — 18h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Midi plein</td></tr><tr style="background:#120f00;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">18h — 24h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Minuit</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">00h — 06h</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">Minuit plein</td></tr><tr><td colspan="2" style="padding:5px 5px 2px; color:#d4a84b; font-family:Cinzel,serif; font-size:0.8em; font-weight:bold; background:#1a1200; border-bottom:1px solid #3a2a0a;">─ MOT D'ENTRÉE ─</td></tr><tr style="background:#1a1400;"><td style="padding:4px 5px; color:#8b6914; font-family:Cinzel,serif; vertical-align:top; border-bottom:1px solid #1a1400; width:45%;">Loge de Maîtres</td><td style="padding:4px 5px; color:#f0e8d0; font-family:Georgia,serif; vertical-align:top; border-bottom:1px solid #1a1400;">SHIBOLETH</td></tr></table></div><div style="padding:8px; border-top:1px solid #3a2a0a; display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; position:sticky; bottom:0; background:#12100a;"><button onclick="afficherCatechisme('apprenti')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Apprenti</button><button onclick="afficherCatechisme('compagnon')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Compagnon</button><button onclick="afficherCatechisme('maitre')" style="padding:5px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; font-family:Cinzel,serif; background:#2a1800; color:#d4a84b; border:1px solid #8b6914;">Maître</button></div>`,
};

function chargerCatechisme() {
    const grade = window._gradeConnecte || 'apprenti';
    afficherCatechisme(grade);
}

function afficherCatechisme(grade) {
    const el = document.getElementById('contenu-catechisme');
    if (!el) return;
    el.innerHTML = _CATE_GRADE[grade] || '';

    // Masquer les boutons selon le grade connecté
    const g = window._gradeConnecte || 'apprenti';
    const acces = { apprenti: ['apprenti'], compagnon: ['apprenti','compagnon'], maitre: ['apprenti','compagnon','maitre'], me: ['apprenti','compagnon','maitre'] };
    const ok = acces[g] || ['apprenti'];
    ['apprenti','compagnon','maitre'].forEach(function(gr) {
        const btn = el.querySelector('button[onclick*="' + gr + '"]');
        if (!btn) return;
        if (ok.indexOf(gr) === -1) {
            btn.style.display = 'none';
        } else {
            btn.style.fontWeight = (gr === grade) ? 'bold' : 'normal';
        }
    });
}

// ── Menu de régie ─────────────────────────────────────────────────────────────
function genererMenu() {
    const grade = window._gradeConnecte || 'apprenti';
    const _fin = `.then(()=>Rituel._setEtape('En attente')).catch(()=>{})`;
    const B  = (label, fn) => `<button onclick="${fn}${_fin}" style="padding:7px; background:#2a2000; color:gold; border:1px solid #8b6914; cursor:pointer; border-radius:4px; font-size:0.82em; width:100%;">${label}</button>`;
    const BR = (label, fn) => `<button onclick="${fn}${_fin}" style="padding:7px; background:#2a1a00; color:#d4a84b; border:1px solid #8b6914; cursor:pointer; border-radius:4px; font-size:0.82em; width:100%;">${label}</button>`;
    const PS = (label)     => `<p style="color:#555; font-size:0.78em; margin:12px 0 5px 0; font-weight:bold; text-transform:uppercase; letter-spacing:1px;">${label}</p>`;
    const G1 = (inner)     => `<div style="display:grid; grid-template-columns:1fr; gap:4px;">${inner}</div>`;
    const G2 = (inner)     => `<div style="display:grid; grid-template-columns:1fr 1fr; gap:4px; margin-bottom:4px;">${inner}</div>`;
    const G3 = (inner)     => `<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; margin-bottom:4px;">${inner}</div>`;
    const PRETE = `<button onclick="Rituel.logePreteOuverture().then(()=>Rituel._setEtape('En attente')).catch(()=>{})" style="padding:7px; background:#1a2a1a; color:#88cc88; border:1px solid #4a8a4a; cursor:pointer; border-radius:4px; font-size:0.82em; width:100%;">⚡ Loge prête</button>`;

    const sec = (id, label, inner) => `
        <div style="margin-bottom:4px;">
          <button onclick="toggleSection('${id}')" style="width:100%; padding:9px 12px; cursor:pointer; border-radius:4px; font-size:0.88em; font-family:Cinzel,serif; font-weight:bold; background:#1a1200; color:#d4a84b; border:1px solid #8b6914; text-align:left; display:flex; justify-content:space-between; align-items:center;"><span>${label}</span><span id="${id}-arrow" style="font-size:0.8em;">▶</span></button>
          <div id="${id}" style="display:none; padding:6px 0 2px 0;">${inner}</div>
        </div>`;

    const LOGE_APP = G1(
        B("Ouverture — Loge d'Apprenti",  "Rituel.ouvertureTravaux()") +
        PRETE +
        BR("Catéchisme",                   "Rituel.catechismeApprentis()") +
        G3(
            BR("Sect. 1", "Rituel.catechismeApprentisSection1()") +
            BR("Sect. 2", "Rituel.catechismeApprentisSection2()") +
            BR("Sect. 3", "Rituel.catechismeApprentisSection3()")
        ) +
        BR("Instruction morale",           "Rituel.instructionMoraleApprentis()") +
        B("Clôture — Loge d'Apprenti",    "Rituel.clotureTravaux()")
    );

    const LOGE_COMP = G1(
        B("Sortie des Apprentis",              "Rituel.sortieApprentis()") +
        B("Mise en conformité",                "Rituel.miseEnConformiteCompagnon()") +
        B("Ouverture — Loge de Compagnon",     "Rituel.ouvertureCompagnon()") +
        PRETE +
        BR("Catéchisme",                       "Rituel.catechismeCompagnon()") +
        G3(
            BR("Sect. 1", "Rituel.catechismeCompagnonSection_premiere_section()") +
            BR("Sect. 2", "Rituel.catechismeCompagnonSection_deuxieme_section()") +
            BR("Sect. 3", "Rituel.catechismeCompagnonSection_troisieme_section()")
        ) +
        BR("Instruction morale",               "Rituel.instructionMoraleCompagnon()") +
        B("Clôture — Loge de Compagnon",       "Rituel.clotureCompagnon()") +
        B("Retour en conformité",              "Rituel.retourConformiteApprentis()") +
        B("Retour des Apprentis",              "Rituel.retourApprentis()")
    );

    const LOGE_MAI = G1(
        B("Sortie des Compagnons",         "Rituel.sortieCompagnons()") +
        B("Mise en conformité",            "Rituel.miseEnConformiteMaitre()") +
        B("Ouverture — Loge de Maître",    "Rituel.ouvertureMaitre()") +
        PRETE +
        BR("Catéchisme",                   "Rituel.catechismeMaitre()") +
        G3(
            BR("Sect. 1", "Rituel.catechismeMaitreSection1()") +
            BR("Sect. 2", "Rituel.catechismeMaitreSection2()") +
            BR("Sect. 3", "Rituel.catechismeMaitreSection3()")
        ) +
        BR("Instruction morale",           "Rituel.instructionMoraleMaitre()") +
        B("Clôture — Loge de Maître",      "Rituel.clotureMaitre()") +
        B("Retour en conformité",          "Rituel.retourConformiteCompagnons()") +
        B("Retour des Compagnons",         "Rituel.retourCompagnons()")
    );

    const LOGE_ME = G1(
        B("Mise en conformité",                       "Rituel.miseEnConformiteME()") +
        B("Ouverture — Loge de Maître Écossais",      "Rituel.ouvertureME()") +
        PRETE +
        BR("Catéchisme",                               "Rituel.catechismeMe()") +
        G3(
            BR("Sect. 1", "Rituel.catechismeMeSection1()") +
            BR("Sect. 2", "Rituel.catechismeMeSection2()") +
            BR("Sect. 3", "Rituel.catechismeMeSection3()")
        ) +
        BR("Instruction finale",                       "Rituel.instructionMoraleMe()") +
        B("Clôture — Loge de Maître Écossais",        "Rituel.clotureME()")
    );

    const RECEP_APP = G1(
        BR("Proclamation",            "Rituel.receptionProclamation()") +
        BR("Introduction du candidat","Rituel.receptionIntroduction()") +
        BR("Voyages",                 "Rituel.receptionVoyages()") +
        BR("Serment & Compas",         "Rituel.receptionSerment()") +
        BR("La Lumière",              "Rituel.receptionLumiere()") +
        BR("Investiture",             "Rituel.receptionInvestiture()")
    );

    const RECEP_COMP = G1(
        BR("Proclamation",             "Rituel.receptionCompagnonProclamation()") +
        BR("Introduction du candidat", "Rituel.receptionCompagnonIntroduction()") +
        BR("Voyages",                  "Rituel.receptionCompagnonVoyages()") +
        BR("Serment",                  "Rituel.receptionCompagnonSerment()") +
        BR("Réception",                "Rituel.receptionCompagnonReception()") +
        BR("La Lumière",               "Rituel.receptionCompagnonLumiere()") +
        BR("Investiture",              "Rituel.receptionCompagnonInvestiture()")
    );

    const RECEP_MAI = G1(
        BR("Proclamation",             "Rituel.receptionMaitreProclamation()") +
        BR("Introduction du candidat", "Rituel.receptionMaitreIntroduction()") +
        BR("Voyages",                  "Rituel.receptionMaitreVoyages()") +
        BR("Serment",                  "Rituel.receptionMaitreSerment()") +
        BR("Réception",                "Rituel.receptionMaitreReception()") +
        BR("Relevée",                  "Rituel.receptionMaitreLumiere()") +
        BR("Investiture",              "Rituel.receptionMaitreInvestiture()")
    );

    const REGLE = G1(
        BR("Règle complète",  "Rituel.regleApprentis()") +
        G3(
            BR("I à III",  "Rituel.regleArticlesIaIII()") +
            BR("IV à VI",  "Rituel.regleArticlesIVaVI()") +
            BR("VII à IX", "Rituel.regleArticlesVIIaIX()")
        )
    );

    const RECEP_ME = G1(
        BR("Proclamation",             "Rituel.receptionMEProclamation()") +
        BR("Introduction du candidat", "Rituel.receptionMEIntroduction()") +
        BR("Premier discours",         "Rituel.receptionMEVoyages()") +
        BR("Serment",                  "Rituel.receptionMESerment()") +
        BR("Réception et discours",    "Rituel.receptionMEReception()") +
        BR("Troisième discours",       "Rituel.receptionMELumiere()") +
        BR("Investiture",              "Rituel.receptionMEInvestiture()")
    );

    const SYSTEME = `
        ${PS('⚙ Système')}
        <div id="etape-courante" style="width:100%; margin-bottom:6px; padding:5px 8px; background:#0d1a0d; color:#7abf7a; border:1px solid #2a4a2a; border-radius:4px; font-size:0.75em; min-height:1.5em; font-style:italic;"></div>
        ${G2(
            '<button id="btn-pause" onclick="togglePause()" style="padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#1a1a0d; color:#cccc88; border:1px solid #666633;">⏸ Pause</button>' +
            '<button onclick="if(confirm(\'Ranger la loge ? La cérémonie en cours sera perdue.\')) Rituel.resetTout()" style="padding:6px 2px; background:#4a0000; color:#ffcccc; border:1px solid #900; cursor:pointer; border-radius:4px; font-size:0.75em;">⚑ Ranger</button>'
        )}
        <button id="btn-bijoux-regie" onclick="toggleBijoux()" style="width:100%; padding:7px; cursor:pointer; border-radius:4px; font-size:0.82em; margin-bottom:4px; background:#2a2000; color:gold; border:1px solid #8b6914;">✦ Bijoux : ON</button>
        <button id="btn-loge-mode" onclick="toggleLogeMode()" style="width:100%; padding:7px; cursor:pointer; border-radius:4px; font-size:0.82em; margin-bottom:4px; background:#2a2000; color:gold; border:1px solid #8b6914;">🏛 Loge : Épique</button>
        ${G2(
            '<button id="btn-bulles"  onclick="toggleBulles()"  style="padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#0d2a0d; color:#a0d4a0; border:1px solid #4a8a4a;">💬 Bulles : ON</button>' +
            '<button id="btn-musique" onclick="toggleMusique()" style="padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#0d2a0d; color:#a0d4a0; border:1px solid #4a8a4a;">🎵 Musique : ON</button>'
        )}
        ${G2(
            '<button id="btn-debug" onclick="toggleDebug()" style="padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#1a1a1a; color:#666; border:1px solid #444;">🐛 Debug : OFF</button>' +
            '<button onclick="afficherPositions()" style="padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#1a1a2a; color:#8888cc; border:1px solid #4a4a8a;">📍 Positions</button>'
        )}
        ${PS('🔤 Taille bulles')}
        ${G3(
            '<button id="btn-taille-petit"  onclick="setTailleBulles(\'petit\')"  style="padding:6px 2px; background:#1a1a1a; color:#666; border:1px solid #444; cursor:pointer; border-radius:4px; font-size:0.75em;">Petit</button>' +
            '<button id="btn-taille-moyen"  onclick="setTailleBulles(\'moyen\')"  style="padding:6px 2px; background:#2a2000; color:gold; border:1px solid #8b6914; cursor:pointer; border-radius:4px; font-size:0.75em;">Moyen</button>' +
            '<button id="btn-taille-grand"  onclick="setTailleBulles(\'grand\')"  style="padding:6px 2px; background:#1a1a1a; color:#666; border:1px solid #444; cursor:pointer; border-radius:4px; font-size:0.75em;">Grand</button>'
        )}
        <button id="btn-catechisme" onclick="toggleCatechisme()" style="width:100%; padding:7px; cursor:pointer; border-radius:4px; font-size:0.82em; margin-bottom:4px; background:#1a1a1a; color:#666; border:1px solid #444;">📖 Catéchisme : OFF</button>
        <button onclick="ouvrirQuiz()" style="width:100%; padding:7px; cursor:pointer; border-radius:4px; font-size:0.82em; margin-bottom:4px; background:#0d1a2a; color:#6ab4e8; border:1px solid #2a5a8a;">🎲 Quiz du Catéchisme</button>`;

    // Sections selon le grade
    let sections = '';
    sections += sec('sec-entree', '🚪 Entrée', G1(B("Entrée des Frères", "Rituel.entreeFreres()")));

    if (grade === 'me') {
        sections += sec('sec-loge-me',   '⚒ Loge de Maître Écossais',       LOGE_ME);
        sections += sec('sec-recep-me',  '👣 Réception — Maître Écossais',   RECEP_ME);
        sections += sec('sec-regle', '📜 Règle en 9 articles', REGLE);
    } else {
        sections += sec('sec-loge-app',  "⚒ Loge d'Apprenti",               LOGE_APP);
        sections += sec('sec-recep-app', "👣 Réception — Grade d'Apprenti",  RECEP_APP);
        if (grade === 'compagnon' || grade === 'maitre') {
            sections += sec('sec-loge-comp',  '⚒ Loge de Compagnon',              LOGE_COMP);
            sections += sec('sec-recep-comp', '👣 Réception — Grade de Compagnon', RECEP_COMP);
        }
        if (grade === 'maitre') {
            sections += sec('sec-loge-mai',  '⚒ Loge de Maître',              LOGE_MAI);
            sections += sec('sec-recep-mai', '👣 Réception — Grade de Maître', RECEP_MAI);
        }
        sections += sec('sec-regle', '📜 Règle en 9 articles', REGLE);
    }

    return `${sections}${SYSTEME}`;
}

// ─── CONSTANTES DE TIMING ────────────────────────────────────────────────────
const TIMING = {
    WP:     900,   // Durée d'un pas (waypoint) — marche solennelle
    ACTION: 1200,  // Pause respiration après une action/mouvement
    COURT:  600,   // Pause courte
    LONG:   1800,  // Pause longue / effet dramatique
};

const Rituel = {

    // ─── CIRCUIT AUTOUR DU TAPIS ──────────────────────────────────────────────
    // Sens du soleil (horaire vu de dessus) : Porte → Nord → Autel → Midi → retour
    // Index :  0        1         2        3        4          5       6        7        8
    CIRCUIT: WP, // alias vers la constante globale WP (rétrocompatibilité interne)

    // Durée entre chaque waypoint (ms) — vitesse de marche lente et solennelle
    DUREE_WP: 900,
    PAUSE_ACTION: 1200, // ms de respiration après une action() ou un mouvement

    // ─── DIALOGUES ───────────────────────────────────────────────────────────

    // Bulles activées par défaut — débrayable via le bouton dans la régie
    BULLES_ACTIVES: true,
    DEBUG_MODE: false,     // true = textes instantanés
    _paused: false,        // true = cérémonie suspendue (Pause)
    _etapeCourante: '',    // Nom de l'étape en cours (affiché dans la régie)

    _setEtape: function(nom) {
        this._etapeCourante = nom;
        // Div régie (petit affichage secondaire)
        const el = document.getElementById('etape-courante');
        if (el) el.textContent = nom ? '▶ ' + nom : '';
        // Cartouche SVG au-dessus de la loge
        const svg = document.getElementById('svg-etape-courante');
        if (svg) svg.textContent = nom || '';
    },

    // Table nom → ID de pion SVG
    // ─── Positions de loge (référence permanente) ────────────────────────────
    // Coordonnées de chaque pion à sa place en loge ouverte
    POSITIONS: {
        'pion-vm':            { x:  630, y:  120 },
        'pion-ex-maitre':      { x:  300, y:  120 },
        'pion-orateur':       { x:  960, y:  120 },
        'pion-secretaire':    { x:  300, y:  280 },
        'pion-tresorier':     { x:  960, y:  280 },
        'pion-eleemosynaire': { x:  300, y:  360 },
        'pion-econome':       { x:  960, y:  360 },
        'pion-mc':            { x:  630, y: 1000 },
        'pion-1surv':         { x:  880, y:  940 },
        'pion-2surv':         { x:  380, y:  940 },
        // Maîtres — colonne Nord
        'pion-maitre1':       { x: 197, y: 293 },
        'pion-maitre2':       { x:  197, y:  368 },
        'pion-maitre3':       { x: 195, y: 450 },
        // Maîtres — colonne Midi
        'pion-maitre4':       { x: 1060, y: 285 },
        'pion-maitre5':       { x: 1059, y:  350 },
        'pion-maitre6':       { x: 1061, y: 415 },
        // Maître 7 — colonne Midi (nouveau reçu)
        'pion-maitre7':       { x: 1059, y:  488 },
        // Compagnons — colonne Midi
        'pion-comp1':         { x: 1060, y: 559 },
        'pion-comp2':         { x: 1058, y: 640 },
        'pion-comp3':         { x: 1059, y: 716 },
        'pion-comp4':         { x: 1060, y: 787 },
        'pion-comp5':         { x: 1063, y:  861 },
        // Apprentis — colonne Nord
        'pion-appr1':         { x: 200, y: 534 },
        'pion-appr2':         { x: 200, y: 615 },
        'pion-appr3':         { x:  200, y:  715 },
        'pion-appr4':         { x: 200, y: 815 },
        'pion-appr5':         { x: 200, y: 915 },
        // Candidat — couloir
        'pion-candidat':      { x: 1360, y: 1220 },
    },

    // Place un pion à sa position de loge
    // Place tous les pions à leur position de loge
    tousEnLoge: function(duree = 800) {
        Object.entries(this.POSITIONS).forEach(([id, pos]) => {
            animerVers(id, pos.x, pos.y, duree);
        });
    },

    // ─── Système EXIST ───────────────────────────────────────────────────────
    EXIST: {
        'pion-vm': 1, 'pion-ex-maitre': 1, 'pion-1surv': 1, 'pion-2surv': 1,
        'pion-mc': 1, 'pion-orateur': 1, 'pion-secretaire': 1,
        'pion-tresorier': 1, 'pion-econome': 1, 'pion-eleemosynaire': 1,
        'pion-maitre1': 1, 'pion-maitre2': 1, 'pion-maitre3': 1,
        'pion-maitre4': 1, 'pion-maitre5': 1, 'pion-maitre6': 1,
        'pion-maitre7': 0,
        'pion-comp1': 1, 'pion-comp2': 1, 'pion-comp3': 1, 'pion-comp4': 1,
        'pion-comp5': 0,
        'pion-appr1': 1, 'pion-appr2': 1, 'pion-appr3': 1, 'pion-appr4': 1,
        'pion-appr5': 0,
        'pion-candidat': 0,
    },

    setExist: function(id, val) {
        this.EXIST[id] = val;
        if (this.DEBUG_MODE) return; // en debug, tous les pions restent visibles
        const el = document.getElementById(id);
        if (el) el.setAttribute('visibility', val ? 'visible' : 'hidden');
    },

    appliquerExist: function() {
        Object.entries(this.EXIST).forEach(([id, val]) => {
            const el = document.getElementById(id);
            if (el) el.setAttribute('visibility', val ? 'visible' : 'hidden');
        });
    },

    PION_IDS: {
        'V.M.'    : 'pion-vm',
        '1°S.'    : 'pion-1surv',
        '2°S.'    : 'pion-2surv',
        'M.d.C'   : 'pion-mc',
        'Intr'    : 'pion-maitre1',
        'F. Prép.': 'pion-maitre2',
        'Proposant': 'pion-maitre2',
        'Orateur' : 'pion-orateur',
        'Récip.'  : 'pion-candidat',
        'Cand.'   : 'pion-candidat',
        'Frère N.': 'pion-maitre4',
        'Secrét.' : 'pion-secretaire',
    },

    // Vérifie la cohérence entre POSITIONS, EXIST et PION_IDS (mode DEBUG uniquement)
    _verifierCoherence: function() {
        if (!this.DEBUG_MODE) return;
        const posKeys  = new Set(Object.keys(this.POSITIONS));
        const existKeys = new Set(Object.keys(this.EXIST));
        const pionVals  = new Set(Object.values(this.PION_IDS));
        const warn = (msg) => console.warn('[_verifierCoherence]', msg);
        posKeys.forEach(k => { if (!existKeys.has(k)) warn(`POSITIONS a "${k}" absent de EXIST`); });
        existKeys.forEach(k => { if (!posKeys.has(k) && k !== 'pion-candidat') warn(`EXIST a "${k}" absent de POSITIONS`); });
        pionVals.forEach(v => { if (!existKeys.has(v)) warn(`PION_IDS référence "${v}" absent de EXIST`); });
        console.log('[_verifierCoherence] Vérification terminée.');
    },

    // Supprime la bulle SVG courante
    _supprimerBulle: function() {
        const b = document.getElementById('bulle-dialogue');
        if (b) b.remove();
    },

    // Bulle bandeau style CNBC — toujours calculée (même invisible) pour servir de métronome
    // Retourne une Promise résolue quand le défilement est terminé
    _afficherBulle: function(nom, texte) {
        this._supprimerBulle();

        // Texte à faire défiler (calcul du timing, toujours effectué)
        const contenu = texte.replace(/\n/g, ' — ');
        const nomLargFinal = 90, txtLarg = 220;
        const vitesse = 0.10; // px/ms → ~100px/s
        const distTotale = txtLarg + 10 + contenu.length * 7.5; // estimation bulles OFF
        const dureeTotale = distTotale / vitesse; // ms

                // Si bulles désactivées : timing calculé, partagé avec _ecrireTexte
        if (!this.BULLES_ACTIVES) {
            this._derniereDureeBulle = dureeTotale;
            return new Promise(resolve => setTimeout(resolve, dureeTotale));
        }

        // Sinon : construction SVG complète
        const pionId = this.PION_IDS[nom];
        // Si pas de pion associé : bulle ancrée au centre bas du SVG
        let px, py;
        if (!pionId) {
            px = 630; py = 1050;
        } else {
            const pion = document.getElementById(pionId);
            if (!pion) return new Promise(resolve => setTimeout(resolve, dureeTotale));
            const t = pion.transform.baseVal;
            if (!t || t.length === 0) return new Promise(resolve => setTimeout(resolve, dureeTotale));
            const m = t.getItem(0).matrix;
            px = m.e; py = m.f;
        }
        const svgEl = document.getElementById('loge-svg');
        const ns    = 'http://www.w3.org/2000/svg';
        const hauteur = 34, r = 6;

        const total = nomLargFinal + txtLarg;
        const decalX = (px > 850) ? -(total + 20) : 30;
        const bx = px + decalX, by = py - hauteur / 2;

        const g = document.createElementNS(ns, 'g');
        g.setAttribute('id', 'bulle-dialogue');
        g.setAttribute('pointer-events', 'none');

        const poly = document.createElementNS(ns, 'polygon');
        const tipPts = (decalX > 0)
            ? `${bx},${py-7} ${bx-12},${py} ${bx},${py+7}`
            : `${bx+total},${py-7} ${bx+total+12},${py} ${bx+total},${py+7}`;
        poly.setAttribute('points', tipPts);
        poly.setAttribute('fill', '#1a0a00');
        poly.setAttribute('stroke', '#d4a84b');
        poly.setAttribute('stroke-width', '1.5');
        poly.setAttribute('stroke-linejoin', 'round');

        const rNom = document.createElementNS(ns, 'rect');
        rNom.setAttribute('x', bx); rNom.setAttribute('y', by);
        rNom.setAttribute('width', nomLargFinal); rNom.setAttribute('height', hauteur);
        rNom.setAttribute('rx', r); rNom.setAttribute('ry', r);
        rNom.setAttribute('fill', '#3a1f00');
        rNom.setAttribute('stroke', '#d4a84b'); rNom.setAttribute('stroke-width', '1.5');

        const rTxt = document.createElementNS(ns, 'rect');
        rTxt.setAttribute('x', bx + nomLargFinal); rTxt.setAttribute('y', by);
        rTxt.setAttribute('width', txtLarg); rTxt.setAttribute('height', hauteur);
        rTxt.setAttribute('fill', '#0e0a04');
        rTxt.setAttribute('stroke', '#d4a84b'); rTxt.setAttribute('stroke-width', '1.5');

        const sep = document.createElementNS(ns, 'line');
        sep.setAttribute('x1', bx+nomLargFinal); sep.setAttribute('y1', by+4);
        sep.setAttribute('x2', bx+nomLargFinal); sep.setAttribute('y2', by+hauteur-4);
        sep.setAttribute('stroke', '#d4a84b'); sep.setAttribute('stroke-width', '1');
        sep.setAttribute('opacity', '0.6');

        const tNom = document.createElementNS(ns, 'text');
        tNom.setAttribute('x', bx + nomLargFinal/2); tNom.setAttribute('y', by + hauteur/2 + 5);
        tNom.setAttribute('text-anchor', 'middle');
        tNom.setAttribute('font-family', 'Cinzel, serif'); tNom.setAttribute('font-size', window._bulleTailleNom || '14');
        tNom.setAttribute('fill', '#f0c060'); tNom.setAttribute('font-weight', 'bold');
        tNom.textContent = nom;

        const clipId = 'clip-bulle-' + Date.now();
        const defs = document.createElementNS(ns, 'defs');
        const clip = document.createElementNS(ns, 'clipPath');
        clip.setAttribute('id', clipId);
        const clipRect = document.createElementNS(ns, 'rect');
        clipRect.setAttribute('x', bx+nomLargFinal+6); clipRect.setAttribute('y', by);
        clipRect.setAttribute('width', txtLarg-12); clipRect.setAttribute('height', hauteur);
        clip.appendChild(clipRect); defs.appendChild(clip);

        const tScroll = document.createElementNS(ns, 'text');
        const startX = bx + nomLargFinal + txtLarg + 10;
        tScroll.setAttribute('x', startX); tScroll.setAttribute('y', by + hauteur/2 + 6);
        tScroll.setAttribute('font-family', 'Crimson Text, serif'); tScroll.setAttribute('font-size', window._bulleTailleTexte || '16');
        tScroll.setAttribute('fill', '#f0e8d0'); tScroll.setAttribute('clip-path', `url(#${clipId})`);
        tScroll.textContent = contenu;

        g.appendChild(defs); g.appendChild(poly); g.appendChild(rNom); g.appendChild(rTxt);
        g.appendChild(sep); g.appendChild(tNom); g.appendChild(tScroll);
        svgEl.appendChild(g);

        // Mesure réelle après insertion dans le DOM
        const textePixels = tScroll.getComputedTextLength();
        // Durée réelle du défilement — partagée avec _ecrireTexte via propriété temporaire
        this._derniereDureeBulle = (startX - (bx + nomLargFinal + 6 - textePixels)) / vitesse;

        // Mode debug : bulle affichée au centre instantanément puis supprimée
        if (this.DEBUG_MODE) {
            tScroll.setAttribute('x', bx + nomLargFinal + 8);
            this._derniereDureeBulle = 50;
            return new Promise(resolve => setTimeout(() => { this._supprimerBulle(); resolve(); }, 50));
        }

        // Animation + Promise résolue à la fin du défilement
        const self = this;
        return new Promise(resolve => {
            let pos = startX, dernierTs = null;
            // Le texte est sorti quand son début dépasse le bord gauche du clip
            const endX = bx + nomLargFinal + 6 - textePixels;
            const animer = (ts) => {
                if (!document.getElementById('bulle-dialogue')) { resolve(); return; }
                // Pause : on gèle le timestamp pour éviter un saut à la reprise
                if (self._paused) { dernierTs = null; requestAnimationFrame(animer); return; }
                if (!dernierTs) dernierTs = ts;
                pos -= vitesse * (ts - dernierTs);
                dernierTs = ts;
                tScroll.setAttribute('x', pos);
                if (pos > endX) {
                    requestAnimationFrame(animer);
                } else {
                    self._supprimerBulle();
                    resolve();
                }
            };
            requestAnimationFrame(animer);
        });
    },

    // Machine à écrire — vitesse calée sur la durée du défilement de la bulle
    // duree : ms totales (fourni par parler() depuis _afficherBulle)
    _ecrireTexte: function(spanEl, texte, fluxEl, duree) {
        return new Promise(resolve => {
            // Mode debug : affichage instantané
            if (this.DEBUG_MODE) {
                texte.split('').forEach(c => {
                    if (c === '\n') spanEl.appendChild(document.createElement('br'));
                    else spanEl.appendChild(document.createTextNode(c));
                });
                fluxEl.scrollTop = fluxEl.scrollHeight;
                resolve();
                return;
            }
            let i = 0;
            // Si durée connue : on répartit les caractères sur toute la durée
            // Sinon : 15 c/s par défaut
            const intervalle = duree ? duree / texte.length : 1000 / 15;
            const self = this;
            const tick = setInterval(() => {
                if (self._paused) return; // gèle la machine à écrire pendant la pause
                if (texte[i] === '\n') {
                    spanEl.appendChild(document.createElement('br'));
                } else {
                    spanEl.appendChild(document.createTextNode(texte[i]));
                }
                i++;
                fluxEl.scrollTop = fluxEl.scrollHeight;
                if (i >= texte.length) {
                    clearInterval(tick);
                    resolve();
                }
            }, intervalle);
        });
    },

    // parler() — machine à écrire + bulle en parallèle, résout quand les deux sont finis
    parler: function(nom, texte) {
        const flux = document.getElementById('flux-dialogue-integre');
        const promBulle = this._afficherBulle(nom, texte);
        if (!flux) return promBulle;
        const bloc = document.createElement('div');
        bloc.style.cssText = 'margin-bottom:12px; border-left:3px solid #d4a84b; padding-left:10px;';
        const entete = document.createElement('b');
        entete.style.cssText = 'color:#d4a84b; font-size:0.9em;';
        entete.textContent = `[${nom}]`;
        const span = document.createElement('span');
        span.style.color = '#eee';
        bloc.appendChild(entete);
        bloc.appendChild(document.createElement('br'));
        bloc.appendChild(span);
        flux.appendChild(bloc);
        flux.scrollTop = flux.scrollHeight;
        // Durée du défilement bulle (calculée par _afficherBulle, ou estimation si bulles OFF)
        const dureeDefilement = this._derniereDureeBulle || null;
        this._derniereDureeBulle = null;
        const promEcriture = this._ecrireTexte(span, texte, flux, dureeDefilement);
        // La bulle est le métronome — on attend qu'elle ait fini de défiler
        return Promise.all([promEcriture, promBulle]);
    },

    // dire() — parler() puis courte respiration après la fin du défilement
    dire: async function(nom, texte) {
        await this.parler(nom, texte);
        await this.pause(500);
    },

    // frapper() — un seul coup (locuteur isolé)
    frapper: async function(nom, texte) {
        this.action(`${nom} frappe : ${texte}`);
        await this.coup(texte);
        await this.pause(800);
    },

    // echoCoups(pattern) — séquence V.M. → 1°S. → 2°S. avec synchronisation WebAudio précise.
    // Remplace les 3 frapper() séquentiels qui accumulent les délais et désynchronisent le flux.
    echoCoups: function(pattern) {
        const self = this;
        return new Promise(resolve => {
            try {
                const ctx    = self.getAudioCtx();
                const inter  = pattern === 'OO-O' ? 1.4 : 0.5;   // secondes entre chaque coup
                const durPat = pattern === 'OO-O' ? 1.0 : 0.3;   // durée d'un coup
                const notes  = pattern === 'OO-O' ? [0, 0.25, 0.7] : [0];
                const t0 = ctx.currentTime;

                const jouerNote = (t) => {
                    notes.forEach(d => {
                        const osc = ctx.createOscillator();
                        const gain = ctx.createGain();
                        osc.connect(gain); gain.connect(ctx.destination);
                        osc.frequency.setValueAtTime(120, t + d);
                        osc.frequency.exponentialRampToValueAtTime(60, t + d + 0.15);
                        gain.gain.setValueAtTime(0.8, t + d);
                        gain.gain.exponentialRampToValueAtTime(0.001, t + d + 0.3);
                        osc.start(t + d); osc.stop(t + d + 0.3);
                    });
                };

                // Programmer les 3 coups via WebAudio (scheduling précis, insensible au JS event loop)
                jouerNote(t0);
                jouerNote(t0 + inter);
                jouerNote(t0 + inter * 2);

                // Afficher dans le flux aux mêmes instants
                self.action(`[V.M.] ${pattern}`);
                setTimeout(() => self.action(`[1°S.] ${pattern}`), inter * 1000);
                setTimeout(() => self.action(`[2°S.] ${pattern}`), inter * 2000);

                // Résoudre après la fin de la séquence + pause
                setTimeout(resolve, (inter * 2 + durPat + 0.6) * 1000);
            } catch(e) {
                console.warn("WebAudio indisponible");
                resolve();
            }
        });
    },

    // echoCoupsGroupe(pattern, n) — batterie complète : V.M.×n, puis 1°S.×n, puis 2°S.×n
    // Remplace les blocs frapper() multi-salves (ouvertures/clôtures Compagnon, Maître)
    echoCoupsGroupe: function(pattern, n) {
        const self = this;
        return new Promise(resolve => {
            try {
                const ctx = self.getAudioCtx();
                const notes    = pattern === 'OO-O' ? [0, 0.25, 0.7] : [0];
                const durPat   = notes[notes.length - 1] + 0.3;   // durée sonore d'une salve
                const gapSalve = durPat + 0.5;                     // intervalle entre salves d'une même personne
                const dureePersonne = (n - 1) * gapSalve + durPat + 0.2; // temps alloué à chaque personne
                const t0 = ctx.currentTime + 0.05;

                const jouerSalve = (t) => {
                    notes.forEach(d => {
                        const osc = ctx.createOscillator();
                        const gain = ctx.createGain();
                        osc.connect(gain); gain.connect(ctx.destination);
                        osc.frequency.setValueAtTime(120, t + d);
                        osc.frequency.exponentialRampToValueAtTime(60, t + d + 0.15);
                        gain.gain.setValueAtTime(0.8, t + d);
                        gain.gain.exponentialRampToValueAtTime(0.001, t + d + 0.3);
                        osc.start(t + d); osc.stop(t + d + 0.3);
                    });
                };

                ['V.M.', '1°S.', '2°S.'].forEach((nom, pi) => {
                    const tDebut = t0 + pi * dureePersonne;
                    for (let si = 0; si < n; si++) {
                        const tSalve = tDebut + si * gapSalve;
                        jouerSalve(tSalve);
                        setTimeout(() => self.action(`[${nom}] ${pattern}`), (tSalve - t0) * 1000);
                    }
                });

                setTimeout(resolve, (3 * dureePersonne + 0.5) * 1000);
            } catch(e) { resolve(); }
        });
    },

    // echoCoupsSurv(pattern, n) — écho des Surveillants uniquement (1°S.×n puis 2°S.×n)
    // Utilisé après que le V.M. a frappé ses salves entrelacées de paroles (grade de Maître)
    echoCoupsSurv: function(pattern, n) {
        const self = this;
        return new Promise(resolve => {
            try {
                const ctx = self.getAudioCtx();
                const notes    = pattern === 'OO-O' ? [0, 0.25, 0.7] : [0];
                const durPat   = notes[notes.length - 1] + 0.3;
                const gapSalve = durPat + 0.5;
                const dureePersonne = (n - 1) * gapSalve + durPat + 0.2;
                const t0 = ctx.currentTime + 0.05;

                const jouerSalve = (t) => {
                    notes.forEach(d => {
                        const osc = ctx.createOscillator();
                        const gain = ctx.createGain();
                        osc.connect(gain); gain.connect(ctx.destination);
                        osc.frequency.setValueAtTime(120, t + d);
                        osc.frequency.exponentialRampToValueAtTime(60, t + d + 0.15);
                        gain.gain.setValueAtTime(0.8, t + d);
                        gain.gain.exponentialRampToValueAtTime(0.001, t + d + 0.3);
                        osc.start(t + d); osc.stop(t + d + 0.3);
                    });
                };

                ['1°S.', '2°S.'].forEach((nom, pi) => {
                    const tDebut = t0 + pi * dureePersonne;
                    for (let si = 0; si < n; si++) {
                        const tSalve = tDebut + si * gapSalve;
                        jouerSalve(tSalve);
                        setTimeout(() => self.action(`[${nom}] ${pattern}`), (tSalve - t0) * 1000);
                    }
                });

                setTimeout(resolve, (2 * dureePersonne + 0.5) * 1000);
            } catch(e) { resolve(); }
        });
    },

    // frapperPorte(frappeur, repondeur, pattern)
    // repondeur = null pour un coup simple (2°S ouvre et pose une question, etc.)
    // repondeur = nom   pour un appel/réponse immédiat (frappeur puis répondeur même pattern)
    frapperPorte: async function(frappeur, repondeur, pattern) {
        const self = this;

        let offsets, durPattern;
        if (pattern === 'OO-O') {
            offsets = [0, 0.25, 0.7]; durPattern = 1.0;
        } else if (pattern === 'OO-O-O') {
            offsets = [0, 0.25, 0.7, 1.1]; durPattern = 1.4;
        } else {
            const nb = (pattern.match(/[O0]/g) || ['O']).length;
            offsets = Array.from({length: nb}, (_, i) => i * 0.8);
            durPattern = Math.max(0, nb - 1) * 0.8 + 0.4;
        }

        self.action(`[${frappeur}] frappe à la porte : ${pattern}`);

        await new Promise(resolve => {
            try {
                const ctx = self.getAudioCtx();
                const t0  = ctx.currentTime + 0.05;

                const jouerFrappe = (t) => {
                    const couche = (freqBP, Q, gainMax, release, offset) => {
                        const frames = Math.floor(ctx.sampleRate * (release + 0.01));
                        const buf = ctx.createBuffer(1, frames, ctx.sampleRate);
                        const data = buf.getChannelData(0);
                        for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
                        const src = ctx.createBufferSource();
                        src.buffer = buf;
                        const bp = ctx.createBiquadFilter();
                        bp.type = 'bandpass';
                        bp.frequency.value = freqBP;
                        bp.Q.value = Q;
                        const g = ctx.createGain();
                        const td = t + offset;
                        g.gain.setValueAtTime(gainMax, td);
                        g.gain.exponentialRampToValueAtTime(0.0001, td + release);
                        src.connect(bp); bp.connect(g); g.connect(ctx.destination);
                        src.start(td); src.stop(td + release + 0.01);
                    };
                    couche(1800, 1.2, 1.8, 0.04,  0);
                    couche(500,  0.5, 1.4, 0.18,  0);
                    couche(120,  0.3, 1.0, 0.40,  0.005);
                };

                offsets.forEach(d => jouerFrappe(t0 + d));

                if (repondeur) {
                    const t1 = t0 + durPattern + 1.2;
                    offsets.forEach(d => jouerFrappe(t1 + d));
                    setTimeout(() => self.action(`[${repondeur}] répond : ${pattern}`),
                        Math.round((t1 - ctx.currentTime) * 1000));
                    setTimeout(resolve, Math.round((t1 - ctx.currentTime + durPattern + 0.6) * 1000));
                } else {
                    setTimeout(resolve, Math.round((durPattern + 0.6) * 1000));
                }
            } catch(e) { resolve(); }
        });
        await this.pause(800);
    },

    // ─── UTILITAIRES ─────────────────────────────────────────────────────────

    // Déplace un pion le long d'une suite de waypoints.
    // API tableau (rétrocompat) : processer(id, [{x,y,d}, ...])
    // API variadique            : processer(id, duréeDéfaut, WP[1], WP[2], ...)
    //   — chaque étape peut surcharger la durée via step.d
    processer: async function(id, durOrWps, ...steps) {
        if (Array.isArray(durOrWps)) {
            for (const wp of durOrWps) {
                await animerVers(id, wp.x, wp.y, wp.d ?? this.DUREE_WP);
            }
        } else {
            const dur = durOrWps;
            for (const step of steps) {
                await animerVers(id, step.x, step.y, step.d ?? dur);
            }
        }
    },

    // Fait clignoter un élément SVG pendant `duree` ms (toutes les 300 ms)
    // Affiche un chiffre en feu qui s'envole et disparaît au-dessus de (x, y)
    _afficherPas: function(n, x, y) {
        const svgEl = document.getElementById('loge-svg');
        const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        txt.setAttribute('x', x);
        txt.setAttribute('y', y - 30);
        txt.setAttribute('text-anchor', 'middle');
        txt.setAttribute('font-family', 'Cinzel, serif');
        txt.setAttribute('font-size', '90');
        txt.setAttribute('fill', '#ff1a1a');
        txt.setAttribute('font-weight', 'bold');
        txt.setAttribute('opacity', '1');
        txt.setAttribute('pointer-events', 'none');
        txt.setAttribute('filter', 'url(#feu-ardent)');
        txt.textContent = String(n);
        svgEl.appendChild(txt);
        let startTs = null;
        const dur = 1600, rise = 100;
        function step(ts) {
            if (!startTs) startTs = ts;
            const p = Math.min((ts - startTs) / dur, 1);
            txt.setAttribute('y', (y - 30) - rise * p);
            txt.setAttribute('opacity', String(1 - p));
            if (p < 1) requestAnimationFrame(step);
            else { try { svgEl.removeChild(txt); } catch(e) {} }
        }
        requestAnimationFrame(step);
    },

    _clignoter: function(id, duree = 3000) {
        return new Promise(resolve => {
            const el = document.getElementById(id);
            if (!el) { setTimeout(resolve, duree); return; }
            let visible = true;
            const interval = setInterval(() => {
                visible = !visible;
                el.style.opacity = visible ? '1' : '0';
            }, 300);
            setTimeout(() => {
                clearInterval(interval);
                el.style.opacity = '1';
                resolve();
            }, duree);
        });
    },

    // Bascule la visibilité du bandeau (rect noir) sur le pion candidat
    _toggleBandeau: function(visible) {
        const el = document.getElementById('pion-candidat');
        if (!el) return;
        const rect = el.querySelector('rect');
        if (rect) rect.setAttribute('visibility', visible ? 'visible' : 'hidden');
    },


    // Grande flamme éphémère — cercles concentriques rouge→or qui explosent puis s'évanouissent
    // Animation par requestAnimationFrame (compatible tous navigateurs)
    _flammeEphemere: function(x, y, duree = 2000) {
        return new Promise(resolve => {
            const ns  = 'http://www.w3.org/2000/svg';
            const svg = document.getElementById('loge-svg');

            const g = document.createElementNS(ns, 'g');
            g.setAttribute('pointer-events', 'none');

            const layers = [
                { r: 90, fill: '#ff3300', op: 0.55 },
                { r: 65, fill: '#ff6600', op: 0.65 },
                { r: 42, fill: '#ff8c00', op: 0.75 },
                { r: 22, fill: '#ffd700', op: 0.90 },
            ];

            const circles = layers.map(L => {
                const c = document.createElementNS(ns, 'circle');
                c.setAttribute('cx', x);
                c.setAttribute('cy', y);
                c.setAttribute('r', '0');
                c.setAttribute('fill', L.fill);
                c.setAttribute('opacity', '0');
                g.appendChild(c);
                return { el: c, maxR: L.r, maxOp: L.op };
            });

            svg.appendChild(g);
            const t0 = performance.now();

            function step(now) {
                const p = Math.min((now - t0) / duree, 1);
                circles.forEach(c => {
                    let r, op;
                    if (p < 0.25) {
                        // Expansion rapide
                        const t = p / 0.25;
                        r = c.maxR * 1.3 * t;
                        op = c.maxOp * t;
                    } else if (p < 0.5) {
                        // Stabilisation
                        const t = (p - 0.25) / 0.25;
                        r = c.maxR * 1.3 - (c.maxR * 0.3) * t;
                        op = c.maxOp;
                    } else if (p < 0.75) {
                        // Rétraction
                        const t = (p - 0.5) / 0.25;
                        r = c.maxR * (1 - 0.6 * t);
                        op = c.maxOp * (1 - 0.7 * t);
                    } else {
                        // Disparition
                        const t = (p - 0.75) / 0.25;
                        r = c.maxR * 0.4 * (1 - t);
                        op = c.maxOp * 0.3 * (1 - t);
                    }
                    c.el.setAttribute('r', String(Math.max(0, r)));
                    c.el.setAttribute('opacity', String(Math.max(0, op)));
                });
                if (p < 1) {
                    requestAnimationFrame(step);
                } else {
                    g.remove();
                    resolve();
                }
            }
            requestAnimationFrame(step);
        });
    },

    // Cône de lumière — triangle jaune semi-transparent du 2°S vers un panneau vertu
    // Sommets : position du pion source + bords gauche/droit du panneau cible (rect 140×25)
    _coneLumiere: function(fromId, toId, duree = 3000) {
        return new Promise(resolve => {
            const ns  = 'http://www.w3.org/2000/svg';
            const svg = document.getElementById('loge-svg');
            const from = document.getElementById(fromId);
            const to   = document.getElementById(toId);
            if (!from || !to) { setTimeout(resolve, duree); return; }

            // Position courante de la source (centre du pion)
            const ft = from.transform.baseVal;
            const fx = ft.length ? ft.getItem(0).matrix.e : 0;
            const fy = ft.length ? ft.getItem(0).matrix.f : 0;

            // Position courante de la cible (panneau rect 140×25)
            const tt = to.transform.baseVal;
            const tx = tt.length ? tt.getItem(0).matrix.e : 0;
            const ty = tt.length ? tt.getItem(0).matrix.f : 0;

            // Triangle : sommet au 2°S, base = bords du panneau vertu
            const points = `${fx},${fy} ${tx},${ty} ${tx + 140},${ty + 25}`;

            const g = document.createElementNS(ns, 'g');
            g.setAttribute('pointer-events', 'none');

            const poly = document.createElementNS(ns, 'polygon');
            poly.setAttribute('points', points);
            poly.setAttribute('fill', '#ffdd44');
            poly.setAttribute('opacity', '0');
            g.appendChild(poly);

            svg.appendChild(g);

            // Fondu entrant
            let op = 0;
            const fadeIn = setInterval(() => {
                op = Math.min(op + 0.04, 0.40);
                poly.setAttribute('opacity', String(op));
                if (op >= 0.40) clearInterval(fadeIn);
            }, 30);

            // Fondu sortant avant la fin
            setTimeout(() => {
                const fadeOut = setInterval(() => {
                    op = Math.max(op - 0.04, 0);
                    poly.setAttribute('opacity', String(op));
                    if (op <= 0) { clearInterval(fadeOut); g.remove(); resolve(); }
                }, 30);
            }, duree - 400);
        });
    },

    // Anime le cortège des voyages : 2°S (tête) → Candidat → Intr. → MdC (queue)
    // PW6 est un point de passage obligatoire (au-dessus du VM) : aucun offset n'y est appliqué.
    processerCortege: async function(dur, ...waypoints) {
        const isPW6 = wp => wp.x === PW[6].x && wp.y === PW[6].y;
        const off = (wps, dx, dy) => wps.map(wp =>
            isPW6(wp) ? { x: wp.x, y: wp.y, d: wp.d }
                      : { x: wp.x + dx, y: wp.y + dy, d: wp.d }
        );
        await Promise.all([
            this.processer('pion-2surv',   dur, ...off(waypoints, -20,  0)),
            new Promise(r => setTimeout(() => this.processer('pion-candidat', dur, ...waypoints).then(r), 150)),
            new Promise(r => setTimeout(() => this.processer('pion-maitre1',  dur, ...off(waypoints,  10, 30)).then(r), 600)),
            new Promise(r => setTimeout(() => this.processer('pion-mc',       dur, ...off(waypoints, -10, 55)).then(r), 1000)),
        ]);
    },

    // ─── Positions de remise (stockage hors tenue) ────────────────────────────
    REMISE: {
        'pion-vm': { x: 1270, y:  120 },
        'pion-ex-maitre': { x: 1220, y:  180 },
        'pion-orateur': { x: 1320, y:  240 },
        'pion-secretaire': { x: 1220, y:  300 },
        'pion-tresorier': { x: 1320, y:  300 },
        'pion-eleemosynaire': { x: 1220, y:  360 },
        'pion-econome': { x: 1270, y:  420 },
        'pion-mc': { x: 1320, y:  360 },
        'pion-1surv': { x: 1320, y:  180 },
        'pion-2surv': { x: 1220, y:  240 },
        'pion-maitre1': { x: 1220, y:  520 },
        'pion-maitre2': { x: 1270, y:  520 },
        'pion-maitre3': { x: 1320, y:  520 },
        'pion-maitre4': { x: 1220, y:  580 },
        'pion-maitre5': { x: 1270, y:  580 },
        'pion-maitre6': { x: 1320, y:  580 },
        'pion-maitre7': { x: 1270, y:  640 },
        'pion-comp1': { x: 1220, y:  720 },
        'pion-comp2': { x: 1270, y:  720 },
        'pion-comp3': { x: 1320, y:  720 },
        'pion-comp4': { x: 1245, y:  780 },
        'pion-comp5': { x: 1295, y:  780 },
        'pion-appr1': { x: 1220, y:  920 },
        'pion-appr2': { x: 1270, y:  920 },
        'pion-appr3': { x: 1320, y:  920 },
        'pion-appr4': { x: 1245, y:  980 },
        'pion-appr5': { x: 1295, y:  980 },
    },

    // ─── SNAPSHOTS D'ÉTAT ───────────────────────────────────────────────────────
    // Chaque snapshot décrit l'état complet de la loge à la fin d'une étape.
    // Permet de démarrer n'importe quelle étape indépendamment.
    // Structure : { pions: { id: {x, y, exist} }, objets: { id: {x, y} },
    //              flambeaux: {sagesse, beaute, force}, obscurcir: bool,
    //              bandeau: bool, conformite: string }
    // Les pions non listés gardent leur position POSITIONS + exist par défaut.

    SNAPSHOTS: {
        // ── LOGE OUVERTE (après Entrée + Ouverture, ou "Loge prête") ──────
        'logeOuverte': {
            pions: {}, // tous à POSITIONS par défaut
            exist: { 'pion-candidat': 0, 'pion-appr5': 0, 'pion-comp5': 0, 'pion-maitre7': 0 },
            objets: {
                'chandelier': { x: 580, y: 130 },
                'cierge-1surv': { x: 880, y: 940 },
                'cierge-2surv': { x: 380, y: 940 },
                'cierge-secretaire': { x: 300, y: 280 },
                'pion-coussin': { x: 450, y: 1210 },
                'pion-justice': { x: 150, y: 1240 },
                'pion-clemence': { x: 300, y: 1240 },
                'pion-temperance': { x: 450, y: 1240 },
                'pion-prudence': { x: 600, y: 1240 },
                'pion-feu': { x: 250, y: 1210 },
                'pion-eau': { x: 200, y: 1210 },
                'pion-terre': { x: 300, y: 1210 },
                'pion-bougie': { x: 350, y: 1210 },
            },
            flambeaux: { sagesse: true, beaute: true, force: true },
            obscurcir: false,
            bandeau: true,
        },

        // ── APRÈS PROCLAMATION (loge formée, décors en place) ─────────────
        'apresReceptionProclamation': {
            pions: {
                'pion-maitre1':       { x: 1295, y: 1190 },  // couloir
                'pion-maitre2':       { x: 1295, y: 1250 },   // couloir (avec m1)
                'pion-maitre3':       { x:  467, y:  703 },
                'pion-maitre4':       { x:  796, y:  690 },
                'pion-maitre5':       { x:  795, y:  626 },
                'pion-maitre6':       { x:  794, y:  560 },
                'pion-ex-maitre':     { x:  569, y:  305 },
                'pion-orateur':       { x:  698, y:  306 },
                'pion-secretaire':    { x:  466, y:  510 },
                'pion-tresorier':     { x:  463, y:  449 },
                'pion-eleemosynaire': { x:  467, y:  576 },
                'pion-econome':       { x:  795, y:  436 },
                'pion-appr1':         { x:  402, y:  818 },
                'pion-appr2':         { x:  452, y:  820 },
                'pion-appr3':         { x:  503, y:  817 },
                'pion-appr4':         { x:  556, y:  817 },
                'pion-comp1':         { x:  870, y:  816 },
                'pion-comp2':         { x:  717, y:  816 },
                'pion-comp3':         { x:  768, y:  816 },
                'pion-comp4':         { x:  818, y:  817 },
                'pion-candidat':      { x: 1360, y: 1220 },
            },
            exist: { 'pion-candidat': 1, 'pion-appr5': 0, 'pion-comp5': 0, 'pion-maitre7': 0 },
            objets: {
                'chandelier': { x: 580, y: 130 },
                'cierge-1surv': { x: 880, y: 940 },
                'cierge-2surv': { x: 380, y: 940 },
                'cierge-secretaire': { x: 300, y: 280 },
                'pion-coussin': { x: 633, y: 242 },
                'pion-justice': { x: 670, y:  30 },
                'pion-clemence': { x: 385, y: 1110 },
                'pion-feu': { x: 250, y: 1210 },
                'pion-eau': { x: 200, y: 1210 },
                'pion-terre': { x: 300, y: 1210 },
                'pion-bougie': { x: 350, y: 1210 },
            },
            flambeaux: { sagesse: true, beaute: true, force: true },
            obscurcir: false,
            bandeau: true,
        },

        // ── APRÈS INTRODUCTION ────────────────────────────────────────────
        'apresReceptionIntroduction': {
            pions: {
                'pion-maitre1':       { x:  667, y:  903 },   // PW1.x+30 (avec candidat)
                'pion-maitre2':       { x:  197, y:  368 },   // retourné POSITIONS
                'pion-maitre3':       { x:  467, y:  703 },   // formation
                'pion-maitre4':       { x:  796, y:  690 },
                'pion-maitre5':       { x:  795, y:  626 },
                'pion-maitre6':       { x:  794, y:  560 },
                'pion-ex-maitre':     { x:  569, y:  305 },
                'pion-orateur':       { x:  698, y:  306 },
                'pion-secretaire':    { x:  466, y:  510 },
                'pion-tresorier':     { x:  463, y:  449 },
                'pion-eleemosynaire': { x:  467, y:  576 },
                'pion-econome':       { x:  795, y:  436 },
                'pion-2surv':         { x:  575, y:  903 },   // PW1.x-62
                'pion-candidat':      { x:  607, y:  903 },   // PW1.x-30
                'pion-appr1':         { x:  402, y:  818 },
                'pion-appr2':         { x:  452, y:  820 },
                'pion-appr3':         { x:  503, y:  817 },
                'pion-appr4':         { x:  556, y:  817 },
                'pion-comp1':         { x:  870, y:  816 },
                'pion-comp2':         { x:  717, y:  816 },
                'pion-comp3':         { x:  768, y:  816 },
                'pion-comp4':         { x:  818, y:  817 },
            },
            exist: { 'pion-candidat': 1, 'pion-appr5': 0, 'pion-comp5': 0, 'pion-maitre7': 0 },
            objets: {
                'chandelier': { x: 580, y: 130 },
                'cierge-1surv': { x: 880, y: 940 },
                'cierge-2surv': { x: 380, y: 940 },
                'cierge-secretaire': { x: 300, y: 280 },
                'pion-coussin': { x: 633, y: 242 },
                'pion-justice': { x: 670, y:  30 },
                'pion-clemence': { x: 385, y: 1110 },
                'pion-feu': { x: 770, y: 535 },
                'pion-eau': { x: 490, y: 535 },
                'pion-terre': { x: 630, y: 810 },
                'pion-bougie': { x: 350, y: 1210 },
            },
            flambeaux: { sagesse: true, beaute: true, force: true },
            obscurcir: false,
            bandeau: true,
        },

        // ── APRÈS VOYAGES (candidat agenouillé devant l'autel) ───────────
        'apresReceptionVoyages': {
            pions: {
                'pion-1surv':         { x:  670, y:  242 },
                'pion-2surv':         { x:  590, y:  242 },
                'pion-maitre1':       { x:  630, y:  340 },   // WP5.y+60
                'pion-candidat':      { x:  633, y:  242 },
            },
            exist: { 'pion-candidat': 1, 'pion-appr5': 0, 'pion-comp5': 0, 'pion-maitre7': 0 },
            objets: {
                'chandelier': { x: 580, y: 130 },
                'cierge-1surv': { x: 880, y: 940 },
                'cierge-2surv': { x: 380, y: 940 },
                'cierge-secretaire': { x: 300, y: 280 },
                'pion-coussin': { x: 633, y: 242 },
                'pion-justice': { x: 670, y:  30 },
                'pion-clemence': { x: 385, y: 1110 },
                'pion-feu': { x: 770, y: 535 },
                'pion-eau': { x: 490, y: 535 },
                'pion-terre': { x: 630, y: 810 },
                'pion-bougie': { x: 350, y: 1210 },
            },
            flambeaux: { sagesse: true, beaute: true, force: true },
            obscurcir: false,
            bandeau: true,
        },

        // ── APRÈS SERMENT (candidat à PW1, escorté) ──────────────────────
        'apresReceptionSerment': {
            pions: {
                'pion-1surv':         { x:  667, y:  903 },   // PW1.x+30
                'pion-2surv':         { x:  607, y:  903 },   // PW1.x-30
                'pion-maitre1':       { x:  637, y:  943 },   // PW1 +40y
                'pion-candidat':      { x:  637, y:  903 },   // PW1
            },
            exist: { 'pion-candidat': 1, 'pion-appr5': 0, 'pion-comp5': 0, 'pion-maitre7': 0 },
            objets: {
                'chandelier': { x: 580, y: 130 },
                'cierge-1surv': { x: 880, y: 940 },
                'cierge-2surv': { x: 380, y: 940 },
                'cierge-secretaire': { x: 300, y: 280 },
                'pion-coussin': { x: 633, y: 242 },
                'pion-justice': { x: 670, y:  30 },
                'pion-clemence': { x: 385, y: 1110 },
                'pion-feu': { x: 770, y: 535 },
                'pion-eau': { x: 490, y: 535 },
                'pion-terre': { x: 630, y: 810 },
                'pion-bougie': { x: 350, y: 1210 },
            },
            flambeaux: { sagesse: true, beaute: true, force: true },
            obscurcir: false,
            bandeau: true,
        },

        // ── APRÈS LUMIÈRE (appr5 visible, candidat disparu, m1 avec appr5) ─
        'apresReceptionLumiere': {
            pions: {
                'pion-1surv':         { x:  880, y:  940 },   // POSITIONS
                'pion-2surv':         { x:  380, y:  940 },   // POSITIONS
                'pion-maitre1':       { x:  637, y:  943 },   // PW1 +40y (derrière appr5)
                'pion-appr5':         { x:  637, y:  903 },   // PW1
                'pion-candidat':      { x: 1295, y: 1190 },   // couloir (invisible)
            },
            exist: { 'pion-candidat': 0, 'pion-appr5': 1, 'pion-comp5': 0, 'pion-maitre7': 0 },
            objets: {
                'chandelier': { x: 580, y: 130 },
                'cierge-1surv': { x: 880, y: 940 },
                'cierge-2surv': { x: 380, y: 940 },
                'cierge-secretaire': { x: 300, y: 280 },
                'pion-coussin': { x: 633, y: 242 },
                'pion-justice': { x: 670, y:  30 },
                'pion-clemence': { x: 385, y: 1110 },
                'pion-feu': { x: 770, y: 535 },
                'pion-eau': { x: 490, y: 535 },
                'pion-terre': { x: 630, y: 810 },
                'pion-bougie': { x: 350, y: 1210 },
            },
            flambeaux: { sagesse: true, beaute: true, force: true },
            obscurcir: false,
            bandeau: false,
        },

        // ── APRÈS INVESTITURE (nouvel apprenti assis) ────────────────────
        'apresReceptionInvestiture': {
            pions: {
                'pion-appr5':         { x:  200, y:  915 },   // POSITIONS (colonne Nord)
                'pion-candidat':      { x: 1295, y: 1190 },   // couloir (invisible)
            },
            exist: { 'pion-candidat': 0, 'pion-appr5': 1, 'pion-comp5': 0, 'pion-maitre7': 0 },
            objets: {
                'chandelier': { x: 580, y: 130 },
                'cierge-1surv': { x: 880, y: 940 },
                'cierge-2surv': { x: 380, y: 940 },
                'cierge-secretaire': { x: 300, y: 280 },
                'pion-coussin': { x: 633, y: 242 },
                'pion-justice': { x: 670, y:  30 },
                'pion-clemence': { x: 385, y: 1110 },
                'pion-feu': { x: 770, y: 535 },
                'pion-eau': { x: 490, y: 535 },
                'pion-terre': { x: 630, y: 810 },
                'pion-bougie': { x: 350, y: 1210 },
            },
            flambeaux: { sagesse: true, beaute: true, force: true },
            obscurcir: false,
            bandeau: false,
        },
    },

    // Applique instantanément un snapshot — positionne tous les pions et objets
    appliquerSnapshot: function(nom) {
        const snap = this.SNAPSHOTS[nom];
        if (!snap) { console.warn('Snapshot inconnu:', nom); return; }

        const D = 1; // instantané (1ms)

        // 1. Tous les pions à POSITIONS par défaut
        this.tousEnLoge(D);

        // 2. Appliquer les positions spécifiques du snapshot (écrasent POSITIONS)
        Object.entries(snap.pions).forEach(([id, pos]) => {
            animerVers(id, pos.x, pos.y, D);
        });

        // 3. Objets rituels
        Object.entries(snap.objets).forEach(([id, pos]) => {
            animerVers(id, pos.x, pos.y, D);
        });

        // 4. Visibilité (exist)
        Object.entries(snap.exist).forEach(([id, val]) => {
            this.setExist(id, val);
        });

        // 5. Flambeaux
        if (snap.flambeaux) {
            this.allumerFlambeau('sagesse', snap.flambeaux.sagesse);
            this.allumerFlambeau('beaute',  snap.flambeaux.beaute);
            this.allumerFlambeau('force',   snap.flambeaux.force);
        }

        // 6. Obscurcissement
        this.obscurcir(snap.obscurcir || false);

        // 7. Bandeau du candidat
        if (snap.bandeau !== undefined) this._toggleBandeau(snap.bandeau);

        // 8. Cierges et chandelier
        rallumerChandelierComplet();
        rallumerCiergesComplets();
    },

    // Retourne l'index du WP le plus proche d'une destination (WP1..WP8)
    wpPlusProche: function(dest) {
        const c = this.CIRCUIT;
        let best = 1, bestDist = Infinity;
        for (let i = 1; i <= 8; i++) {
            const d = Math.hypot(c[i].x - dest.x, c[i].y - dest.y);
            if (d < bestDist) { bestDist = d; best = i; }
        }
        return best;
    },

    // Chemin depuis une position quelconque (pas forcément WP0) vers dest
    // Trouve le WP le plus proche du départ, puis enchaîne jusqu'au WP le plus proche de dest
    cheminDepuis: function(depart, dest) {
        const c = this.CIRCUIT;
        // WP le plus proche du départ (à partir de WP1)
        let startIdx = 1, startDist = Infinity;
        for (let i = 1; i <= 8; i++) {
            const d = Math.hypot(c[i].x - depart.x, c[i].y - depart.y);
            if (d < startDist) { startDist = d; startIdx = i; }
        }
        // WP le plus proche de la destination
        const endIdx = this.wpPlusProche(dest);
        const chemin = [];
        // Si déjà sur le bon WP ou entre les deux, avancer dans le sens du soleil
        let i = startIdx;
        while (true) {
            chemin.push({ x: c[i].x, y: c[i].y, d: this.DUREE_WP });
            if (i === endIdx) break;
            i = (i % 8) + 1; // sens du soleil : 1→2→...→8→1
            if (chemin.length > 9) break; // sécurité
        }
        chemin.push({ x: dest.x, y: dest.y, d: 600 });
        return chemin;
    },

    // fileIndienne depuis une position intermédiaire (pas WP0)
    // Si m.stopIndex défini : cheminDepuis utilise stopIndex comme WP de fin
    fileIndienneDepuis: function(depart, membres, delai) {
        const _chemin = (m) => {
            if (m.stopIndex !== undefined) {
                return this.cheminDepuisVers(depart, m.stopIndex, m.dest);
            }
            return this.cheminDepuis(depart, m.dest);
        };
        membres.forEach((m, i) => {
            setTimeout(() => this.processer(m.id, _chemin(m)), i * delai);
        });
        let finMax = 0;
        membres.forEach((m, i) => {
            const duree = _chemin(m).reduce((a, wp) => a + (wp.d || this.DUREE_WP), 0);
            finMax = Math.max(finMax, i * delai + duree);
        });
        return new Promise(r => setTimeout(r, finMax));
    },

    // Chemin depuis un point quelconque jusqu'à stopIndex (sens du soleil), puis dest
    cheminDepuisVers: function(depart, stopIndex, dest) {
        const c = this.CIRCUIT;
        // Trouver le WP de départ le plus proche
        let startIdx = 1, startDist = Infinity;
        for (let i = 1; i <= 8; i++) {
            const d = Math.hypot(c[i].x - depart.x, c[i].y - depart.y);
            if (d < startDist) { startDist = d; startIdx = i; }
        }
        const chemin = [];
        let i = startIdx;
        while (true) {
            chemin.push({ x: c[i].x, y: c[i].y, d: this.DUREE_WP });
            if (i === stopIndex) break;
            i = (i % 8) + 1;
            if (chemin.length > 9) break;
        }
        if (dest) chemin.push({ x: dest.x, y: dest.y, d: 600 });
        return chemin;
    },

    // Construit le chemin depuis la Porte (WP0) jusqu'au WP le plus proche de dest,
    // puis ajoute la destination finale. stopIndex calculé auto si absent.
    cheminVers: function(stopIndex, dest) {
        const c = this.CIRCUIT;
        if (stopIndex === undefined || stopIndex === null) {
            stopIndex = dest ? this.wpPlusProche(dest) : 8;
        }
        const chemin = [];
        for (let i = 0; i <= stopIndex; i++) {
            chemin.push({ x: c[i].x, y: c[i].y, d: this.DUREE_WP });
        }
        if (dest) chemin.push({ x: dest.x, y: dest.y, d: 600 });
        return chemin;
    },

    // File indienne — stopIndex calculé automatiquement si absent
    fileIndienne: function(membres, delai) {
        membres.forEach((m, i) => {
            const si = (m.stopIndex !== undefined) ? m.stopIndex : this.wpPlusProche(m.dest);
            const chemin = this.cheminVers(si, m.dest);
            setTimeout(() => this.processer(m.id, chemin), i * delai);
        });
        let finMax = 0;
        membres.forEach((m, i) => {
            const si = (m.stopIndex !== undefined) ? m.stopIndex : this.wpPlusProche(m.dest);
            const chemin = this.cheminVers(si, m.dest);
            const duree  = chemin.reduce((a, wp) => a + (wp.d || this.DUREE_WP), 0);
            finMax = Math.max(finMax, i * delai + duree);
        });
        return new Promise(r => setTimeout(r, finMax));
    },

    // ─── PRÉPARATION ─────────────────────────────────────────────────────────
    resetTout: async function() {
        this._supprimerBulle();
        this._setEtape('');
        const flux = document.getElementById('flux-dialogue-integre');
        if (flux) flux.innerHTML = '';
        this.parler("SYSTEM", "Rangement de la Loge...");
        this.allumerFlambeau('sagesse', false);
        this.allumerFlambeau('beaute', false);
        this.allumerFlambeau('force', false);

        // Tous les pions → leur position de remise (depuis REMISE)
        const R = this.REMISE;
        Object.keys(R).forEach(id => {
            animerVers(id, R[id].x, R[id].y, 1000);
        });

        // Chandelier → remise
        animerVers("chandelier", 1200, 1240, 1000);

        // Cierges → remise
        animerVers("cierge-secretaire",  920, 1240, 1000);
        animerVers("cierge-2surv",      1040, 1240, 1000);
        animerVers("cierge-1surv",      1160, 1240, 1000);

        // Éléments de réception → positions initiales (couloir bas)
        animerVers("pion-coussin",    450, 1210, 1000);
        animerVers("pion-eau",        200, 1210, 1000);
        animerVers("pion-feu",        250, 1210, 1000);
        animerVers("pion-terre",      300, 1210, 1000);
        animerVers("pion-bougie",     350, 1210, 1000);

        // Transparents vertueux → positions initiales (visibilité selon grade)
        animerVers("pion-justice",    150, 1240, 1000);
        animerVers("pion-clemence",   300, 1240, 1000);
        animerVers("pion-temperance", 450, 1240, 1000);
        animerVers("pion-prudence",   600, 1240, 1000);

        // Pions ME → remise (hidden, mais on les replace)
        animerVers("pion-mx1",  1220, 520,  1000);
        animerVers("pion-mx2",  1320, 520,  1000);
        animerVers("pion-mx3",  1220, 600,  1000);
        animerVers("pion-mx4",  1320, 600,  1000);
        animerVers("pion-mx5",  1220, 680,  1000);
        animerVers("pion-mx6",  1320, 680,  1000);
        animerVers("pion-mx7",  1220, 760,  1000);
        animerVers("pion-mx8",  1320, 760,  1000);
        animerVers("pion-mx9",  1220, 840,  1000);
        animerVers("pion-mx10", 1320, 840,  1000);
        animerVers("pion-m",    1270, 1080, 1000);

        // Réinitialiser les flags exist
        this.EXIST['pion-appr5']    = 0;
        this.EXIST['pion-comp5']    = 0;
        this.EXIST['pion-maitre7']  = 0;
        this.EXIST['pion-candidat'] = 0;
        if (!this.DEBUG_MODE) this.appliquerExist();
        this.cacherVertus();
        rallumerChandelierComplet();
        rallumerCiergesComplets();
        ouvrirBible();

        this.parler("SYSTEM", "Loge rangée.");
    },

    // ─── ENTRÉES ─────────────────────────────────────────────────────────────

    // Apprentis : colonne Nord
    // 2ème Surv  → stopIndex 3 (arc Nord-Milieu) → bureau bas Nord  (380, 940) … mais il reste en 2
    // Apprentis  → stopIndex 2,3,3,4 → postes colonne Nord
    entreeFreres: async function() {
        this._setEtape("Entrée des Frères");
        jouerMusique('01 - Entrée.mp3');
        await this.entreeApprentis();
        await this.pause(2000);
        await this.entreeCompagnons();
        await this.pause(2000);
        await this.entreeMaitres();
        await this.pause(2000);
        await this.entreeOrient();
    },

    entreeApprentis: async function() {
        this._setEtape("Entrée des Apprentis");
        await this._attendrePause();
        await this.processer("pion-mc", this.DUREE_WP, WP[0]);
        await this.parler("M.d.C", "J'appelle les Apprentis de la Loge, les Apprentis visiteurs et le Frère Second Surveillant.");
        await this.pause();

        // Rassemblement à la porte — tous en parallèle
        const posRassemblement = [
            { id: "pion-2surv",  x: 640, y: 1130 },
            { id: "pion-appr1",  x: 600, y: 1150 },
            { id: "pion-appr2",  x: 660, y: 1150 },
            { id: "pion-appr3",  x: 620, y: 1170 },
            { id: "pion-appr4",  x: 670, y: 1170 },
            { id: "pion-appr5",  x: 630, y: 1190 },
        ];
        posRassemblement.forEach(a => {
            animerVers(a.id, a.x, a.y, 800);
        });
        await this.pause(1000);

        // File indienne — appr5 en queue (dernier reçu, s'assoit en bas)
        const membres = [
            { id: "pion-mc", stopIndex: 8, dest: { x: 630, y: 1000} },
            { id: "pion-appr1", dest: { x: 200, y: 534} },
            { id: "pion-appr2", dest: { x: 200, y: 615} },
            { id: "pion-appr3", dest: { x: 200, y: 715} },
            { id: "pion-appr4", dest: { x: 200, y: 815} },
            { id: "pion-appr5", dest: { x: 200, y: 915} },
            { id: "pion-2surv", stopIndex: 0, dest: { x: 380, y: 940} },
        ];

        await this.fileIndienne(membres, 450);
    },

    entreeCompagnons: async function() {
        this._setEtape("Entrée des Compagnons");
        await this._attendrePause();
        await this.processer("pion-mc", this.DUREE_WP, WP[0]);
        await this.parler("M.d.C", "J'appelle les Compagnons de la Loge, les Compagnons visiteurs et le Frère Premier Surveillant.");
        await this.pause();

        // Rassemblement à la porte — tous en parallèle
        const posRassemblement = [
            { id: "pion-1surv",  x: 640, y: 1130 },
            { id: "pion-comp1",  x: 600, y: 1150 },
            { id: "pion-comp2",  x: 660, y: 1150 },
            { id: "pion-comp3",  x: 620, y: 1170 },
            { id: "pion-comp4",  x: 670, y: 1170 },
            { id: "pion-comp5",  x: 630, y: 1190 },
        ];
        posRassemblement.forEach(a => {
            animerVers(a.id, a.x, a.y, 800);
        });
        await this.pause(1000);

        // File indienne — comp5 en queue
        const membres = [
            { id: "pion-mc", stopIndex: 8, dest: { x: 630, y: 1000} },
            { id: "pion-comp1", dest: { x: 1060, y: 559} },
            { id: "pion-comp2", dest: { x: 1058, y: 640} },
            { id: "pion-comp3", dest: { x: 1059, y: 716} },
            { id: "pion-comp4", dest: { x: 1060, y: 787} },
            { id: "pion-comp5", dest: { x: 1063, y: 861} },
            { id: "pion-1surv", stopIndex: 0, dest: { x: 880, y: 940} },
        ];

        await this.fileIndienne(membres, 450);
    },

    entreeMaitres: async function() {
        this._setEtape("Entrée des Maîtres");
        await this._attendrePause();
        // MdC va à la porte et appelle
        await this.processer("pion-mc", this.DUREE_WP, WP[0]);
        await this.parler("M.d.C", "J'appelle les Maîtres de la Loge, les Maîtres visiteurs et les Officiers de la Loge.");
        await this.pause();

        // Tous se rassemblent à la porte
        const appeles = ["pion-maitre1","pion-maitre2","pion-maitre3",
                         "pion-maitre4","pion-maitre5","pion-maitre6",
                         "pion-maitre7",
                         "pion-secretaire","pion-eleemosynaire",
                         "pion-orateur","pion-tresorier","pion-econome"];
        appeles.forEach((id, i) => {
            setTimeout(() => animerVers(id, 610 + (i%4)*15, 1140 + Math.floor(i/4)*20, 600), i * 150);
        });
        await this.pause(2500);

        // File : MdC en tête — tour complet
        // Maîtres 1-3 : colonne Nord, Maîtres 4-6 + Officiers : colonne Midi et postes Orient
        const membres = [
            { id: "pion-mc", stopIndex: 8, dest: { x: 630, y: 1000} },
            { id: "pion-maitre1", dest: { x: 197, y: 293} },
            { id: "pion-maitre2", dest: { x: 197, y: 368} },
            { id: "pion-maitre3", dest: { x: 195, y: 450} },
            { id: "pion-secretaire", dest: { x: 300, y: 280} },
            { id: "pion-eleemosynaire", dest: { x: 300, y: 360} },
            { id: "pion-maitre4", dest: { x: 1060, y: 285} },
            { id: "pion-orateur", dest: { x: 960, y: 120} },
            { id: "pion-tresorier", dest: { x: 960, y: 280} },
            { id: "pion-econome", dest: { x: 960, y: 360} },
            { id: "pion-maitre5", dest: { x: 1059, y: 350} },
            { id: "pion-maitre6", dest: { x: 1061, y: 415} },
            { id: "pion-maitre7", dest: { x: 1059, y: 488} },
        ];

        await this.fileIndienne(membres, 450);
    },

    entreeOrient: async function() {
        this._setEtape("Entrée de l'Orient");
        await this._attendrePause();
        const P = this.POSITIONS;

        this.action("Tout étant convenablement disposé pour commencer le travail, les deux Surveillants, précédés du Maître des Cérémonies, se rendent auprès du Vénérable Maître, tenant chacun l'épée à la main, vêtus et décorés maçonniquement.");

        // ── 1. MdC appelle les Surveillants depuis l'Occident ──────────────────
        await this.dire("M.d.C", "Frères Surveillants, je vous prie de bien vouloir m'assister.");

        // Les deux Surveillants rejoignent le MdC à l'Occident
        animerVers("pion-1surv", this.POSITIONS["pion-mc"].x, this.POSITIONS["pion-mc"].y, 800);
        await animerVers("pion-2surv", this.POSITIONS["pion-mc"].x, this.POSITIONS["pion-mc"].y, 800);
        await this.pause(400);

        // ── 2. Le cortège (MdC + 1S + 2S) va à la porte ───────────────────────
        animerVers("pion-mc",    WP[0].x, WP[0].y, 700);
        animerVers("pion-1surv", 660, 1130, 700);
        await animerVers("pion-2surv", 600, 1130, 700);
        await this.pause(400);

        // ── 3. MdC annonce au VM (dans la réserve, pré-positionné hors loge) ───
        await this.dire("M.d.C", "Vénérable Maître, la loge assemblée vous attend pour commencer ses travaux.");

        // VM et Ex-Maître (avec chandelier) entrent et rejoignent le cortège à la porte
        animerVers("pion-vm",        630, 1155, 600);
        animerVers("pion-ex-maitre",  660, 1155, 600);
        await animerVers("chandelier", 685, 1155, 600);
        await this.pause(400);

        // ── 4. Cortège avance jusqu'à PW1 (637, 903) ──────────────────────────
        // Ordre : MdC, 1er Surv, 2nd Surv, Ex-Maître + chandelier, VM
        animerVers("pion-mc",       637, 903, 900);
        animerVers("pion-1surv",    637, 903, 950);
        animerVers("pion-2surv",    637, 903, 1000);
        animerVers("pion-ex-maitre", 637, 903, 1050);
        animerVers("chandelier",    637, 903, 1050);
        await animerVers("pion-vm", 637, 903, 1100);
        await this.pause(300);

        // ── 5. MdC appelle les frères debout ───────────────────────────────────
        await this.dire("M.d.C", "Debout mes Frères, chapeau bas, pour accueillir le Vénérable Maître de la Loge et son cortège.");

        // ── 6. Les Surveillants regagnent leurs postes ─────────────────────────
        animerVers("pion-1surv", P["pion-1surv"].x, P["pion-1surv"].y, 1000);
        await animerVers("pion-2surv", P["pion-2surv"].x, P["pion-2surv"].y, 1000);

        // ── 7. Le reste du cortège avance depuis PW1, sans repasser par WP0 ────
        // MdC : WP2→3→4→5→6→7→8→place (reste du tour)
        // Ex-Maître, chandelier, VM : WP le plus proche depuis PW1
        const PW1 = { x: 637, y: 903 };
        const cortege = [
            { id: "pion-mc",        stopIndex: 8, dest: { x: P["pion-mc"].x,        y: P["pion-mc"].y        } },
            { id: "pion-ex-maitre",              dest: { x: P["pion-ex-maitre"].x,   y: P["pion-ex-maitre"].y } },
            { id: "chandelier",                  dest: { x: 580, y: 130 } },
            { id: "pion-vm",                     dest: { x: P["pion-vm"].x,          y: P["pion-vm"].y        } },
        ];
        await this.fileIndienneDepuis(PW1, cortege, 500);

        await this.pause();
        this.action("Le Vénérable Maître, debout, salue tous les frères de toutes les colonnes en se découvrant. Les frères lui rendent le salut par une profonde inclination.");
        await this.pause();
        this.action("Le Vénérable Maître se recouvre. Tous les frères l'imitent, à l'exception des Apprentis et des Compagnons.");
        arreterMusique(true);
    },

// ─── SON : COUP DE MAILLET ────────────────────────────────────────────────────
_audioCtx: null,

// Retourne le contexte audio partagé (créé une seule fois)
getAudioCtx: function() {
    if (!this._audioCtx) {
        this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this._audioCtx.state === 'suspended') {
        this._audioCtx.resume();
    }
    return this._audioCtx;
},

    // pause(ms) — attente respectant le flag _paused tout au long de la durée
    pause: function(ms) {
        const self = this;
        const duree = ms || this.PAUSE_ACTION;
        return new Promise(resolve => {
            let remaining = duree;
            const TICK = 50;
            const tick = () => {
                if (!self._paused) {
                    remaining -= TICK;
                    if (remaining <= 0) { resolve(); return; }
                }
                setTimeout(tick, TICK);
            };
            setTimeout(tick, TICK);
        });
    },

    // _attendrePause() — bloque jusqu'à ce que _paused soit false (sans délai supplémentaire)
    _attendrePause: function() {
        const self = this;
        return new Promise(resolve => {
            const check = () => {
                if (!self._paused) resolve();
                else setTimeout(check, 100);
            };
            check();
        });
    },

coup: function(nombre) {
    return new Promise(resolve => {
        try {
            const ctx = this.getAudioCtx();
            const jouer = (delai) => {
                const osc  = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.frequency.setValueAtTime(120, ctx.currentTime + delai);
                osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + delai + 0.15);
                gain.gain.setValueAtTime(0.8, ctx.currentTime + delai);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delai + 0.3);
                osc.start(ctx.currentTime + delai);
                osc.stop(ctx.currentTime + delai + 0.3);
            };
            let duree;
            // OO-O = 2 coups rapprochés + 1 coup séparé — durée totale : 0.7 + 0.3 = 1.0s
            if (nombre === 'OO-O') {
                jouer(0); jouer(0.25); jouer(0.7);
                duree = 1000;
            } else if (nombre === 'O') {
                jouer(0);
                duree = 300;
            } else {
                for (let i = 0; i < nombre; i++) jouer(i * 0.35);
                duree = (nombre - 1) * 350 + 300;
            }
            setTimeout(resolve, duree);
        } catch(e) {
            console.warn("WebAudio indisponible");
            resolve();
        }
    });
},

// Un claquement de mains — plusieurs couches de bruit pour un son reconnaissable
clap: function(delai = 0) {
    try {
        const ctx = this.getAudioCtx();
        const t = ctx.currentTime + delai;

        const couche = (freqBP, Q, gainMax, attaque, release, offsetMs) => {
            const dur = attaque + release;
            const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
            const data = buf.getChannelData(0);
            for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
            const src = ctx.createBufferSource();
            src.buffer = buf;
            const bp = ctx.createBiquadFilter();
            bp.type = 'bandpass';
            bp.frequency.value = freqBP * (1 + (Math.random() - 0.5) * 0.1);
            bp.Q.value = Q;
            const g = ctx.createGain();
            const td = t + offsetMs / 1000;
            g.gain.setValueAtTime(0, td);
            g.gain.linearRampToValueAtTime(gainMax, td + attaque);
            g.gain.exponentialRampToValueAtTime(0.0001, td + attaque + release);
            src.connect(bp); bp.connect(g); g.connect(ctx.destination);
            src.start(td); src.stop(td + dur);
        };

        // Transient aigu (claquement sec)
        couche(3500, 1.0, 0.9, 0.001, 0.03, 0);
        // Corps médium (chair)
        couche(1000, 0.6, 0.7, 0.003, 0.10, 0);
        // Grave (résonance paume)
        couche(400,  0.4, 0.5, 0.004, 0.08, 2);
        // Brillance haute (doigts)
        couche(5000, 1.2, 0.35, 0.001, 0.04, 1);

    } catch(e) { console.warn("WebAudio indisponible"); }
},

// Applaudissements maçonniques : 3 salves OO-O (synthèse WebAudio — timing précis)
applaudissements: function() {
    const self = this;
    return new Promise(resolve => {
        try {
            const ctx = self.getAudioCtx();
            const t0 = ctx.currentTime + 0.05;

            const jouerClap = (t) => {
                // Bruit blanc court + filtre passe-bande → simulation clap
                const frames = Math.floor(ctx.sampleRate * 0.12);
                const buf = ctx.createBuffer(1, frames, ctx.sampleRate);
                const data = buf.getChannelData(0);
                for (let i = 0; i < frames; i++) {
                    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.025));
                }
                const src = ctx.createBufferSource();
                src.buffer = buf;
                const bpf = ctx.createBiquadFilter();
                bpf.type = 'bandpass';
                bpf.frequency.value = 1400;
                bpf.Q.value = 0.7;
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(1.2, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
                src.connect(bpf); bpf.connect(gain); gain.connect(ctx.destination);
                src.start(t); src.stop(t + 0.2);
            };

            // 3 salves OO-O : rythme [0, 0.25, 0.7], inter-salve 0.8s (départ à 1.5s)
            [0, 1.5, 3.0].forEach(base => {
                jouerClap(t0 + base);
                jouerClap(t0 + base + 0.25);
                jouerClap(t0 + base + 0.7);
            });
            self.action('[Tous] Applaudissements maçonniques OO-O × 3');
            // Durée totale : dernier clap à 3.7s + ring 0.2s + silence 0.5s ≈ 4.4s
            setTimeout(resolve, 4400);
        } catch(e) { resolve(); }
    });
},

// Allume ou éteint un flambeau SVG
allumerFlambeau: function(id, allume) {
    const flamme = document.getElementById('flamme-' + id);
    if (flamme) flamme.setAttribute('visibility', allume ? 'visible' : 'hidden');
},

// Affiche une action symbolique (italique, couleur argentée)
action: function(texte) {
    const flux = document.getElementById('flux-dialogue-integre');
    if (flux) {
        flux.innerHTML += `
            <div style="margin-bottom:10px; padding-left:10px;">
                <i style="color:#9e9e9e; font-size:0.88em;">${texte}</i>
            </div>`;
        flux.scrollTop = flux.scrollHeight;
    }
},

// ─── OUVERTURE DES TRAVAUX ────────────────────────────────────────────────────
ouvertureTravaux: async function() {
    this._setEtape("Ouverture — Loge d'Apprenti");

    // — Dialogues des Surveillants (suite de l'entrée de l'Orient) —
    await this.dire("1°S.", "Mes frères, voici l'Orient : la lumière commence à se répandre sur nos travaux. Soyons prêts à les continuer dès que nous en recevrons l'ordre et le pouvoir du Vénérable Maître.");
    await this.dire("2°S.", "Mes frères, voici l'Orient : la lumière commence à se répandre sur nos travaux. Soyons prêts à les continuer dès que nous en recevrons l'ordre et le pouvoir du Vénérable Maître.");


    // — VM donne un coup de maillet, répété par les Surveillants —
    this.action("Le V.M. donne un coup de maillet sur l'autel, répété par les Surveillants.");
    await this.pause(1000);
    await this.echoCoups("O");
    await this.dire("V.M.", "A l'ordre, mes frères.");
    this.action("Les Frères se mettent à l'ordre du signe d'apprenti.");
    await this.pause(this.PAUSE_ACTION);

    // — VM interroge le MdC — le MdC fait le tour complet avant de répondre —
    await this.dire("V.M.", "Frère Maître des cérémonies, tous ceux qui doivent m'aider à ouvrir cette loge sont-ils placés et décorés des signes de leurs pouvoirs ?");
    this.action("Le Maître des Cérémonies fait le tour de la loge pour s'en assurer.");
    await this.processer("pion-mc", this.DUREE_WP,
        WP[1], WP[2], WP[3], WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
        { x: 630, y: 1000 }  // place MdC
    );
    await this.dire("M.d.C", "Vénérable Maître, tous les frères sont prêts pour l'ouverture des travaux, ils attendent vos ordres.");


    // — Questions au 1er Surveillant —
    await this.dire("V.M.", "Frère Premier Surveillant, quelle heure est-il ?");
    await this.dire("1°S.", "Frère Second Surveillant, quelle heure est-il ?");
    await this.dire("2°S.", "C'est la douzième heure.");
    await this.dire("1°S.", "Vénérable Maître, c'est la douzième heure.");
    await this.dire("V.M.", "Quel est le devoir en loge d'un bon maçon, et principalement d'un frère surveillant ?");
    await this.dire("1°S.", "Frère Second Surveillant, quel est le devoir en loge d'un bon maçon, et principalement d'un frère surveillant ?");
    await this.dire("2°S.", "C'est de s'assurer si la loge est bien couverte, si les profanes sont écartés, si les avenues sont gardées, et si tout est en ordre.");
    await this.dire("1°S.", "Vénérable Maître, c'est de s'assurer si la loge est bien couverte, si les profanes sont écartés, si les avenues sont gardées, et si tout est en ordre.");
    await this.dire("V.M.", "Dites donc au Frère Second Surveillant de s'acquitter à l'instant de son devoir.");
    await this.dire("1°S.", "Frère Second Surveillant, acquittez-vous à l'instant de votre devoir.");


    // — 2nd Surveillant sort vérifier les portes —
    this.action("Le Second Surveillant sort vérifier les portes et avenues.");
    await this.processer("pion-2surv", 1200, WP[0]);
    await this.pause(this.PAUSE_ACTION);
    await this.processer("pion-2surv", 1200, { x: 380, y: 940 });
    await this.dire("2°S.", "Frère Premier Surveillant, les profanes sont écartés, la loge est bien couverte, les avenues sont gardées, et tout se trouve en bon ordre.");
    await this.dire("1°S.", "Vénérable Maître, les profanes sont écartés, la loge est bien couverte, les avenues sont gardées, et tout se trouve en bon ordre.");
    await this.dire("V.M.", "Mes Frères, puisque les profanes sont écartés, que la loge est bien couverte, que les avenues sont gardées, et que tout est en ordre, entrons dans les voies qui nous sont ouvertes pour perfectionner nos travaux, et que la lumière la plus pure nous aide à les vérifier.");


    // — VM fait le tour par le Midi pour allumer les flambeaux —
    this.action("Le V.M. pose son épée sur la Bible, prend une bougie du chandelier et fait le tour par le Midi pour allumer les trois flambeaux maçonniques.");
    await this.processer("pion-vm", this.DUREE_WP, WP[6]);
    this.allumerFlambeau('sagesse', true);
    await this.processer("pion-vm", this.DUREE_WP, WP[7], WP[8]);
    this.allumerFlambeau('beaute', true);
    await this.processer("pion-vm", this.DUREE_WP, WP[1], WP[2]);
    this.allumerFlambeau('force', true);
    await this.processer("pion-vm", this.DUREE_WP, WP[3], WP[4], WP[5]);
    this.action("Le V.M. revient à sa place par le Nord.");
    animerVers("pion-vm", this.POSITIONS["pion-vm"].x, this.POSITIONS["pion-vm"].y, 800);
    await this.pause(this.PAUSE_ACTION);
    this.action("Le V.M. reprend son épée et se remet à l'ordre.");
    await this.pause(this.PAUSE_ACTION);

    // — Surveillants et Secrétaire vont aux flambeaux puis allument leurs cierges —
    this.action("Les Surveillants et le Secrétaire se rendent aux flambeaux pour allumer leurs cierges.");
    animerVers("pion-2surv",      WP[2].x, WP[2].y, this.DUREE_WP);  // 2nd Surv → flambeau Force (Nord-Bas)
    animerVers("pion-1surv",      WP[8].x, WP[8].y, this.DUREE_WP);  // 1er Surv → flambeau Beauté (Midi-Bas)
    await animerVers("pion-secretaire", WP[6].x, WP[6].y, this.DUREE_WP);  // Secrétaire → flambeau Sagesse (WP6 Midi-Haut)
    await this.pause(this.PAUSE_ACTION);

    this.action("Allumage des cierges.");
    animerVers("cierge-2surv",      WP[2].x, WP[2].y, 600);
    animerVers("cierge-1surv",      WP[8].x, WP[8].y, 600);
    await animerVers("cierge-secretaire", WP[6].x, WP[6].y, 600);
    await this.pause(this.PAUSE_ACTION);

    this.action("Retour aux plateaux.");
    animerVers("pion-2surv",      this.POSITIONS["pion-2surv"].x,      this.POSITIONS["pion-2surv"].y,      900);
    animerVers("cierge-2surv",    this.POSITIONS["pion-2surv"].x,      this.POSITIONS["pion-2surv"].y,      900);
    animerVers("pion-1surv",      this.POSITIONS["pion-1surv"].x,      this.POSITIONS["pion-1surv"].y,      900);
    animerVers("cierge-1surv",    this.POSITIONS["pion-1surv"].x,      this.POSITIONS["pion-1surv"].y,      900);
    animerVers("pion-secretaire", this.POSITIONS["pion-secretaire"].x, this.POSITIONS["pion-secretaire"].y, this.DUREE_WP);
    await animerVers("cierge-secretaire", this.POSITIONS["pion-secretaire"].x, this.POSITIONS["pion-secretaire"].y, this.DUREE_WP);
    await this.pause(this.PAUSE_ACTION);

    // — VM reprend son épée, signe d'apprenti —
    this.action("Le V.M., tenant de la main gauche son épée la pointe haute, pommeau appuyé sur l'autel, main droite au signe d'apprenti.");
    await this.frapper("V.M.", "O");

    // — Prière d'ouverture —
    this.action("Le V.M. fait à haute voix la prière d'ouverture.");
    jouerMusique('02 - Prière d\'ouverture.mp3');
    await this.dire("V.M.", "Grand Architecte de l'Univers, Être éternel et infini, qui est la bonté, la justice et la vérité même, ô toi qui par ta parole toute puissante et invincible as donné l'être à tout ce qui existe, reçois l'hommage que les frères réunis ici en ta présence, t'offrent pour eux-mêmes et pour tous les autres hommes. Bénis et dirige toi-même les travaux de l'Ordre, et les nôtres en particulier. Daigne accorder à notre zèle un succès heureux, afin que le temple que nous avons entrepris d'élever pour ta gloire, étant fondé sur la sagesse, décoré par la beauté, et soutenu par la force, qui viennent de toi, soit un séjour de paix et d'union fraternelle, un asile pour la vertu, un rempart impénétrable au vice, et le sanctuaire de la vérité ; enfin pour que nous puissions tous y trouver le vrai bonheur dont tu es l'unique source, comme tu en es le terme à jamais. Ainsi soit-il.");
    await this.dire("Les Frères", "Ainsi soit-il.");
    arreterMusique(true);

    // — Questions pour l'ouverture —
    await this.dire("V.M.", "Frère Premier Surveillant, quelle heure est-il à présent ?");
    await this.dire("1°S.", "Frère Second Surveillant, quelle heure est-il à présent ?");
    await this.dire("2°S.", "Il est midi.");
    await this.dire("1°S.", "Vénérable Maître, il est midi.");
    await this.dire("V.M.", "Où se place le Vénérable Maître de la loge ?");
    await this.dire("1°S.", "Frère Second Surveillant, où se place le Vénérable Maître de la loge ?");
    await this.dire("2°S.", "A l'Orient.");
    await this.dire("1°S.", "Vénérable Maître, à l'Orient.");
    await this.dire("V.M.", "Pourquoi ?");
    await this.dire("1°S.", "Pourquoi, Frère Second Surveillant ?");
    await this.dire("2°S.", "Comme le soleil commence son cours à l'Orient et répand la lumière dans le monde, de même aussi le Vénérable Maître se place à l'Orient pour mettre les Frères à l'ouvrage et éclairer la loge de ses lumières.");
    await this.dire("1°S.", "Vénérable Maître, comme le soleil commence son cours à l'Orient et répand la lumière dans le monde, de même aussi le Vénérable Maître se place à l'Orient pour mettre les frères à l'ouvrage et éclairer la loge de ses lumières.");
    await this.dire("V.M.", "Où se placent les Surveillants ?");
    await this.dire("1°S.", "Frère Second Surveillant, où se placent les Surveillants ?");
    await this.dire("2°S.", "A l'Occident.");
    await this.dire("1°S.", "Vénérable Maître, à l'Occident.");
    await this.dire("V.M.", "Pourquoi ?");
    await this.dire("1°S.", "Pourquoi, Frère Second Surveillant ?");
    await this.dire("2°S.", "Pour exécuter les ordres du Vénérable Maître, et veiller sur tous les ouvriers.");
    await this.dire("1°S.", "Pour exécuter les ordres du Vénérable Maître et veiller sur tous les ouvriers.");


    // — Annonce de l'ouverture —
    await this.dire("V.M.", "Mes Frères, puisqu'il est midi, puisque le Vénérable Maître est placé à l'Orient, et les Surveillants à l'Occident, avertissez les Frères que je vais ouvrir la loge.");
    await this.dire("1°S.", "Mes Frères, puisqu'il est midi, puisque le Vénérable Maître est placé à l'Orient, et les Surveillants à l'Occident, je vous annonce de la part du Vénérable Maître qu'il va ouvrir la loge.");
    await this.dire("2°S.", "Mes Frères, puisqu'il est midi, puisque le Vénérable Maître est placé à l'Orient, et les Surveillants à l'Occident, je vous annonce de la part du Vénérable Maître, qu'il va ouvrir la loge.");
    await this.dire("V.M.", "Mes chers Frères, aidez-moi tous à ouvrir la loge.");
    await this.dire("1°S.", "Mes Frères, aidons tous le Vénérable Maître à ouvrir la loge.");
    await this.dire("2°S.", "Mes Frères, aidons tous le Vénérable Maître à ouvrir la loge.");
    await this.dire("V.M.", "Unissez-vous à moi, mes Frères.");


    // — Signe et déclaration d'ouverture —
    this.action("Le V.M. et tous les Frères font deux fois le signe entier d'apprenti. Les Frères se remettent au premier temps du signe.");
    await this.pause(this.PAUSE_ACTION);
    await this.dire("V.M.", "A la gloire du Grand Architecte de l'Univers,\nAu nom de l'Ordre\nEt par le pouvoir que j'en ai reçu,\nJ'ouvre cette loge d'apprenti.");


    // — Trois coups d'ouverture —
    this.action("Le V.M. bat les trois coups d'ouverture avec son maillet.");
    await this.echoCoups("OO-O");
    await this.dire("V.M.", "Frères Surveillants, annoncez à tous les Frères que la loge est ouverte, et dites leur d'être attentifs au travail.");
    await this.dire("1°S.", "Mes Frères, la loge est ouverte, soyez attentifs au travail.");
    await this.dire("2°S.", "Mes Frères, la loge est ouverte, soyez attentifs au travail.");
    await this.dire("V.M.", "Ayez attention, mes Frères.");
    this.action("Le Vénérable Maître, et tous les Frères avec lui, répètent pour la troisième et dernière fois le signe entier d'apprenti.");

    // — Heure finale —
    await this.dire("V.M.", "Frère Premier Surveillant, quelle heure est-il enfin ?");
    await this.dire("1°S.", "Frère Second Surveillant, quelle heure est-il enfin ?");
    await this.dire("2°S.", "Il est midi plein.");
    await this.dire("1°S.", "Vénérable Maître, il est midi plein.");
    await this.dire("V.M.", "Il est donc temps de se mettre au travail. Célébrons cet heureux moment, mes chers Frères, par les applaudissements maçonniques.");

    // — Fin : VM s'assoit, bat un coup, Surveillants répètent —
    this.action("Le V.M. pose son épée nue en travers sur la Bible. Les Frères remettent leur épée au fourreau.");
    this.action("Le V.M. et tous les Frères frappent trois fois trois coups avec les deux mains, sans acclamation.");
    await this.applaudissements();
    this.action("Le V.M. s'assoit et bat un coup.");
    await this.pause(1000);
    await this.echoCoups("O");
    await this.dire("V.M.", "J'invite les Maîtres et les Compagnons à s'asseoir. Et je le permets aux Apprentis.");
    await this.dire("V.M.", "Je prescris au nom de l'Ordre le plus profond silence à tous les ouvriers.");


    this.action("L'ouverture de la loge étant ainsi finie, le V.M. expose le sujet de l'assemblée.");
},

    // ─── LOGE PRÊTE ──────────────────────────────────────────────────────────────
    // Place tous les pions dans l'état final après ouverture des travaux
    logePreteOuverture: async function() {
        this._setEtape("Loge prête — Ouverture");
        const flux = document.getElementById('flux-dialogue-integre');
        if (flux) flux.innerHTML = '';

        // Lance les animations en parallèle du message
        this.tousEnLoge(800);
        animerVers("chandelier",          580, 130, 800);
        animerVers("cierge-1surv",        this.POSITIONS["pion-1surv"].x, this.POSITIONS["pion-1surv"].y, 800);
        animerVers("cierge-2surv",        this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, 800);
        animerVers("cierge-secretaire",   this.POSITIONS["pion-secretaire"].x, this.POSITIONS["pion-secretaire"].y, 800);
        this.allumerFlambeau("sagesse", true);
        this.allumerFlambeau("beaute",  true);
        this.allumerFlambeau("force",   true);
        this.cacherVertus();

        await this.parler("SYSTEM", "Mise en place — Loge prête.");
        await this.pause(200);
        await this.parler("SYSTEM", "Loge prête.");
    },

    // ─── RÉCEPTION ───────────────────────────────────────────────────────────

// ─── SON TONNERRE ────────────────────────────────────────────────────────────
tonnerre: function() {
    return new Promise(resolve => {
        const audio = new Audio('imusic/11 - Tonnerre.mp3');
        audio.play().catch(e => console.warn("Tonnerre indisponible", e));
        setTimeout(() => { audio.pause(); audio.currentTime = 0; resolve(); }, 7000);
    });
},

// ─── OBSCURCISSEMENT ─────────────────────────────────────────────────────────
// actif=true → applique le voile ; opacity=0.46 pour voyages, 0.25 pour formation
obscurcir: function(actif, opacity = 0.46) {
    const voile = document.getElementById('voile-obscurite');
    if (voile) voile.setAttribute('opacity', actif ? String(opacity) : '0');
    // Éteindre/rallumer les halos lumineux des flammes
    // On retire l'attribut (au lieu de forcer 'visible') pour respecter la visibilité du parent
    const svg = document.getElementById('loge-svg');
    if (svg) svg.querySelectorAll('.halo-flamme').forEach(h => {
        if (actif) h.setAttribute('visibility', 'hidden');
        else       h.removeAttribute('visibility');
    });
},

// ─── FORMATION DE LA LOGE ────────────────────────────────────────────────────
// Positions de formation pour la réception (différentes des positions de loge ouverte) :
// • Apprentis + Compagnons → Occident, entre le tapis et les tables des Surveillants
// • Maîtres → deux colonnes, depuis l'Occident remontant vers l'Orient
// • Dignitaires / Officiers → restent à l'Orient (déjà en place)
formerLoge: async function() {
    this._setEtape("Former la Loge");

    const D = 1200;

    // ① Apprentis — décalés vers la gauche (colonne Nord)
    this.action("Les Apprentis se rangent à l'Occident.");
    animerVers("pion-appr1",  402, 818, D);
    animerVers("pion-appr2",  452, 820, D);
    animerVers("pion-appr3",  503, 817, D);
    animerVers("pion-appr4",  556, 817, D);
    animerVers("pion-appr5",  477, 862, D);
    await this.pause(D + 150);

    // ② Compagnons — décalés vers la droite (colonne Midi)
    this.action("Les Compagnons se placent derrière les Apprentis.");
    animerVers("pion-comp1",  870, 816, D);
    animerVers("pion-comp2",  717, 816, D);
    animerVers("pion-comp3",  768, 816, D);
    animerVers("pion-comp4",  818, 817, D);
    animerVers("pion-comp5",  793, 858, D);
    await this.pause(D + 150);

    // ③ Maîtres + Officiers (VM, MC, 1°S, 2°S, M1, candidat restent en place)
    animerVers("pion-maitre2",       467,  640, D);
    animerVers("pion-maitre3",       467,  703, D);
    animerVers("pion-maitre4",       796,  690, D);
    animerVers("pion-maitre5",       795,  626, D);
    animerVers("pion-maitre6",       794,  560, D);
    animerVers("pion-maitre7",       797,  496, D);
    animerVers("pion-ex-maitre",     569,  305, D);
    animerVers("pion-orateur",       698,  306, D);
    animerVers("pion-secretaire",    466,  510, D);
    animerVers("pion-tresorier",     463,  449, D);
    animerVers("pion-eleemosynaire", 467,  576, D);
    animerVers("pion-econome",       795,  436, D);
    await this.pause(D + 150);
},

// ─── PROCLAMATION ET INTRODUCTION (Chapitres X + XII) ───────────────────────
receptionProclamation: async function() {
    this._setEtape("Réception Apprenti — Proclamation");
    if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('logeOuverte');

    // Mise en place des décors de réception
    const T = 800;
    this.setExist('pion-candidat', 1);
    this.setExist('pion-appr5',    0);
    animerVers("pion-candidat", 1360, 1220, T);
    animerVers("pion-coussin",  633,  242,  T);
    animerVers("pion-justice",  670,   30,  T);
    animerVers("pion-clemence", 385, 1110,  T);
    await this.pause(T + 200);

    // — Chapitre X : Proclamation —
    await this.dire("V.M.", "Mes chers Frères, Monsieur N.. N.., âgé de..., né à..., domicilié ou résidant à... ; de son état... ; de religion... (le tout d'après le bulletin fait par le candidat lui-même) se présente pour être admis et reçu dans l'Ordre des Francs-Maçons au grade d'Apprenti. Il a manifesté un désir sincère d'être reçu dans l'Ordre, s'y étant déterminé par sa propre volonté et par des motifs louables. Les enquêtes prescrites par nos lois sur son caractère et ses mœurs lui ont été favorables. Nous espérons que sa réception procurera à cette loge et à l'Ordre un maçon zélé. Il a déjà obtenu de nous, par la voie ordinaire des scrutins, les consentements requis pour son admission : voici le moment de donner votre consentement définitif à sa réception. Frère Secrétaire, lisez le protocole de scrutin et d'admission de Monsieur N., N...");
    await this.dire("Secrét.", "Lecture du protocole de scrutin et d'admission de Monsieur N.. N...");
    this.action("Le Frère Secrétaire lit le protocole.");
    await this.pause(this.PAUSE_ACTION);
    await this.dire("V.M.", "Frère Préparateur, faites-nous connaître les dispositions actuelles du candidat.");
    this.action("Le Frère Préparateur remet au Vénérable Maître les réflexions écrites du candidat.");
    await this.dire("V.M.", "Frère Secrétaire, que les réflexions du candidat soient consignées dans les archives de l'Ordre, afin de servir de base à son examen pour les autres grades, si jamais il en est trouvé digne.");
    await this.dire("F. Prép.", "Vénérable Maître, le candidat a médité les trois questions préparatoires et s'est livré aux réflexions convenables à la circonstance. Ses dispositions m'ont paru sincères et son désir véritable. Cependant, malgré son désir, cet homme ne pourrait parvenir sans secours jusqu'aux portes de ce temple. Je vous conjure donc de lui envoyer un Frère instruit pour lui servir de guide.");
    await this.dire("V.M.", "Mon Frère, un guide est toujours accordé à celui qui désire sincèrement, lorsque ses titres ont été trouvés justes. L'avis de cette respectable assemblée en décidera.");
    await this.dire("V.M.", "Persistez-vous, mes chers Frères, dans le consentement que vous avez déjà donné pour la réception de Monsieur N.. N. Je vous invite à me le faire connaître dans la forme accoutumée.");
    this.action("Tous les Frères qui y consentent, c'est-à-dire tous les Frères, étendent le bras droit en avant, la main en équerre, la paume tournée contre terre. Ceux qui auraient quelque motif d'opposition se lèvent sans étendre le bras.");
    this.action("Il faudrait des motifs graves relatifs au candidat pour s'opposer si tard à sa réception. Dans ce cas, le Vénérable Maître suspendrait la loge de travail, et convoquerait dans une chambre voisine une loge de conseil, pour juger de la validité des oppositions, et prendre une délibération convenable.");
    this.action("S'il n'y a pas d'opposition, le Vénérable Maître dit :");
    await this.pause(this.PAUSE_ACTION);
    await this.dire("V.M.", "Mes Frères, puisque rien ne s'oppose à sa réception, que son désir soit satisfait. Frère N., que j'ai nommé pour diriger et introduire le candidat, allez finir sa préparation selon les lois et usages de l'Ordre. Le Frère N., qui l'a proposé, devient dès à présent son parrain ; il vous assistera dans ce travail, et vous le présenterez ensuite à la loge.");

    // Tous convergent vers WP4 (point de rendez-vous)
    animerVers("pion-maitre1", WP[4].x, WP[4].y, this.DUREE_WP);
    animerVers("pion-maitre2", WP[4].x, WP[4].y, this.DUREE_WP);
    await animerVers("pion-mc", WP[4].x, WP[4].y, this.DUREE_WP);

    // Cortège WP5→WP6→WP7→WP8→WP1(salut)→WP0 — décalage temporel 300ms entre chaque pion
    const trajet = [
        { ...WP[5], d: this.DUREE_WP },
        { ...WP[6], d: this.DUREE_WP },
        { ...WP[7], d: this.DUREE_WP },
        { ...WP[8], d: this.DUREE_WP },
        { ...WP[1], d: this.DUREE_WP }, // arrivée WP1 (entre les Surveillants)
        { ...WP[1], d: 1000 },           // pause : salut vers l'Orient
        { ...WP[0], d: this.DUREE_WP },  // WP0 — sortie
    ];
    this.processer("pion-mc",      trajet);
    setTimeout(() => this.processer("pion-maitre1", trajet), 300);
    setTimeout(() => this.processer("pion-maitre2", trajet), 600);

    // Attendre l'arrivée à WP1 (5 étapes + décalage M2), puis afficher l'action dans le flux
    await this.pause(5 * this.DUREE_WP + 600);
    this.action("Aussitôt, le Frère Introducteur et le Frère Parrain viennent se placer entre les Surveillants, et après s'être inclinés devant l'Autel d'Orient, ayant la main droite au signe d'apprenti, ils sortent pour aller remplir leurs fonctions.");

    // Attendre la fin du cortège : pause WP1 (1s) + WP0 (DUREE_WP) + décalage M2 (600ms)
    await this.pause(1000 + this.DUREE_WP + 600);

    // Introducteur et Parrain rejoignent le candidat dans le couloir
    animerVers("pion-maitre1", COULOIR.x, COULOIR.y, this.DUREE_WP);
    await animerVers("pion-maitre2", 1295, 1250, this.DUREE_WP);

    // MdC retourne à sa place
    await animerVers("pion-mc", this.POSITIONS["pion-mc"].x, this.POSITIONS["pion-mc"].y, this.DUREE_WP);

    this.action("Alors, le Vénérable Maître nomme un Frère pour éteindre la Loge — généralement le Maître de Cérémonie — ce qui doit être fait sans bruit ni confusion ; le même restant chargé de rallumer quand il en recevra l'ordre. Il est interdit à tout autre Frère de s'employer à cette fonction.");
    this.action("Pendant que le Frère Introducteur remplit ses fonctions auprès du candidat, le Vénérable Maître fait lire pour l'instruction des Frères les articles du rituel qui concernent les devoirs et fonctions du Frère proposant, la préparation et l'introduction du candidat, et les règles qui doivent être observées en loge par les Frères en général pendant la cérémonie de la réception, afin qu'étant mieux connues, elles soient aussi plus régulièrement suivies. Si le temps le permet, il fera lire aussi les Règles Maçonniques, le règlement annexé au rituel, qui concerne la police de la loge de travail et celle des banquets, ou telles choses que les circonstances rendraient plus nécessaires. Si le Frère Secrétaire avait quelque chose d'essentiel à communiquer concernant la correspondance de la loge, qui pût l'être en présence des Frères visitants, le Vénérable Maître l'inviterait à le faire. Ces lectures seront suspendues dès que le Frère Introducteur s'annoncera à la porte de la loge.");
},

// ─── INTRODUCTION DU CANDIDAT (Chapitre XII) ────────────────────────────────
receptionIntroduction: async function() {
    this._setEtape("Réception Apprenti — Introduction");
    if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('apresReceptionProclamation');

    // M1, M2 et candidat convergent vers la porte (80 sous WP0)
    animerVers("pion-maitre1",  600, 1210, this.DUREE_WP);
    animerVers("pion-maitre2",  660, 1210, this.DUREE_WP);
    await animerVers("pion-candidat", 630, 1220, this.DUREE_WP);
    await this.pause(500);

    this.action("Le Frère Introducteur conduit le candidat à pas libres vers la porte principale de la loge, où il l'annonce en le faisant frapper avec le poing trois coups également détachés : 0 - 0 - 0");

    // 3 coups à la porte (heurtoir métallique)
    await this.frapperPorte("Intr", null, "0 - 0 - 0");

    this.action("Aussitôt que le candidat a frappé, le Vénérable Maître bat un coup de maillet sur l'autel :");
    await this.pause(1000);
    await this.echoCoups("O");

    await this.dire("V.M.", "Frères Surveillants, j'ai entendu frapper, voyez qui c'est.");
    await this.dire("1°S.", "Frère Second Surveillant, voyez qui frappe ainsi.");


    this.action("Le Second Surveillant va frapper à son tour trois coups égaux : 0 - 0 - 0 contre la porte, en dedans, et de suite il l'ouvre rapidement en disant d'un ton grave et sévère.");
    animerVers("pion-2surv", WP[0].x, WP[0].y, 900);
    await this.pause(950);
    await this.frapperPorte("2°S.", null, "0 - 0 - 0");
    await this.dire("2°S.", "Qui est-ce qui frappe ainsi ?");
    await this.dire("Intr", "C'est un homme dans les ténèbres, et cherchant la lumière, qui demande à être reçu Franc-maçon.");


    this.action("Le Second Surveillant laisse entrer le frère proposant, qui apporte au Vénérable Maître les métaux et le bijou. Et, ayant refermé la porte, il répète la réponse au Premier Surveillant.");
    // MdC : WP1→2→3→4→WP5[300ms]→6→7→8→1→2→3→WP4[300ms]→5→6→7→8→1→place
    // M2  : WP1→2→3→4→PW5[300ms]→WP5→6→7→8→1→2→3→place  (300ms décalé)
    const _DS = this.DUREE_WP, _P = this.POSITIONS;
    this.processer("pion-mc", _DS,
        WP[1], WP[2], WP[3], WP[4],
        WP[5], { ...WP[5], d: 1200 }, // arrivée WP5, pause 1200ms — attend M2 qui monte à PW5
        WP[6], WP[7], WP[8], WP[1], WP[2], WP[3], WP[4],
        { ...WP[4], d: 300 }, // pause 300ms à WP4
        WP[5], WP[6], WP[7], WP[8], WP[1],
        { ..._P["pion-mc"] }
    );
    // M2 (Parrain) suit 600ms après — passe par PW5 (autel) pour déposer les métaux
    setTimeout(() => {
        this.processer("pion-maitre2", _DS,
            WP[1], WP[2], WP[3], WP[4],
            PW[5], { ...PW[5], d: 300 }, // autel VM — dépôt des métaux, pause 300ms
            WP[5], WP[6], WP[7], WP[8], WP[1], WP[2], WP[3],
            { ..._P["pion-maitre2"] }
        );
    }, 600);
    await animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, 900);
    await this.dire("2°S.", "Frère Premier Surveillant, c'est un homme dans les ténèbres, et cherchant la lumière, qui demande à être reçu Franc-maçon.");
    await this.dire("1°S.", "Vénérable Maître, c'est un homme dans les ténèbres et cherchant la lumière qui demande à être reçu Franc-maçon.");


    // Questions d'identité
    await this.dire("V.M.", "Frère Premier Surveillant, quel est son nom de baptême, son nom civil, son âge, le lieu de sa naissance et de son domicile ou résidence, et le nom de baptême de son père.");
    await this.dire("1°S.", "Frère Second Surveillant, quel est son nom de baptême, son nom civil, son âge, le lieu de sa naissance et de son domicile ou résidence, et le nom de baptême de son père.");


    this.action("Le Second Surveillant frappe par trois coups en maçon contre la porte, en dedans : OO-O, avant de l'ouvrir et fait ensuite la même question au Frère Introducteur.");
    animerVers("pion-2surv", WP[0].x, WP[0].y, 900);
    await this.pause(950);
    await this.frapperPorte("2°S.", null, "OO-O");
    await this.dire("2°S.", "Quel est son nom de baptême, son nom civil, son âge, le lieu de sa naissance et de son domicile ou résidence, et le nom de baptême de son père.");
    await this.dire("Intr", "Son nom de baptême est N., son nom civil N., son âge est de... ans, le lieu de sa naissance est.., et celui de son domicile... Le nom de baptême de son père est N...");


    this.action("Le Second Surveillant, après avoir refermé la porte, rend ces réponses au Premier Surveillant, qui les transmet au Vénérable Maître.");
    await animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, 900);
    await this.dire("2°S.", "Frère Premier Surveillant, son nom de baptême est N., son nom civil N., son âge est de... ans, le lieu de sa naissance est.., et celui de son domicile.. Le nom de baptême de son père est N...");
    await this.dire("1°S.", "Vénérable Maître, son nom de baptême est N., son nom civil N., son âge est de... ans, le lieu de sa naissance est... et celui de son domicile.. Le nom de baptême de son père est N...");


    // Questions sur la religion et engagements
    await this.dire("V.M.", "Frère Premier Surveillant, quelle est sa religion, son état civil (sa profession), et ne serait-il point lié par d'autres engagements qui ne lui permettraient pas de contracter l'obligation des maçons, ou qui y seraient incompatibles ?");
    await this.dire("1°S.", "Frère Second Surveillant, quelle est sa religion, son état civil (sa profession), et ne serait-il point lié par d'autres engagements qui ne lui permettraient pas de contracter l'obligation des maçons, ou qui y seraient incompatibles ?");
    this.action("Le Second Surveillant ouvre la porte et transmet la question au Frère Introducteur.");
    animerVers("pion-2surv", WP[0].x, WP[0].y, 900);
    await this.pause(950);
    await this.dire("2°S.", "Quelle est sa religion, son état civil (sa profession), et ne serait-il point lié par d'autres engagements qui ne lui permettraient pas de contracter l'obligation des maçons ou qui y seraient incompatibles ?");
    await this.dire("Intr", "Sa religion est...; son état civil (sa profession).; il n'est point lié par d'autres engagements qui ne lui permettraient pas de contracter l'obligation des maçons ou qui y seraient incompatibles.");
    this.action("Après avoir refermé la porte, le Second Surveillant dit :");
    await animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, 900);
    await this.dire("2°S.", "Frère Premier Surveillant, sa religion est...; son état civil (sa profession), il n'est point lié par d'autres engagements qui ne lui permettraient pas de contracter l'obligation des maçons ou qui y seraient incompatibles.");
    await this.dire("1°S.", "Vénérable Maître, sa religion est...; son état civil (sa profession), il n'est point lié par d'autres engagements qui ne lui permettraient pas de contracter l'obligation des maçons ou qui y seraient incompatibles.");


    // Dispositions et parrain
    await this.dire("V.M.", "Frère Premier Surveillant, est-il disposé à subir les épreuves indispensables, à remplir les devoirs que l'Ordre impose à ses membres, et quel est le Frère qui répond de cet homme envers l'Ordre et envers cette loge ?");
    await this.dire("1°S.", "Frère Second Surveillant, est-il disposé à subir les épreuves indispensables, à remplir les devoirs que l'Ordre impose à ses membres, et quel est le Frère qui répond de cet homme envers l'Ordre et envers cette loge ?");
    this.action("Le Second Surveillant ouvre la porte et transmet la question au Frère Introducteur.");
    animerVers("pion-2surv", WP[0].x, WP[0].y, 900);
    await this.pause(950);
    await this.dire("2°S.", "Est-il disposé à subir les épreuves indispensables, à remplir les devoirs que l'Ordre impose à ses membres, et quel est le Frère qui répond de cet homme envers l'Ordre et envers cette loge ?");
    await this.dire("Intr", "Il est disposé à subir les épreuves indispensables, à remplir les devoirs que l'Ordre impose à ses membres, et le Frère N.. répond de lui envers l'Ordre et envers cette loge.");
    this.action("Le Second Surveillant referme la porte et dit :");
    await animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, 900);
    await this.dire("2°S.", "Frère Premier Surveillant, il est disposé à subir les épreuves indispensables, à remplir les devoirs que l'Ordre impose à ses membres, et le Frère N.. répond de lui envers l'Ordre et envers cette loge.");
    await this.dire("1°S.", "Vénérable Maître, il est disposé à subir les épreuves indispensables, à remplir les devoirs que l'Ordre impose à ses membres, et le Frère N.. répond de lui envers l'Ordre et envers cette loge.");


    this.action("Cette réponse étant rendue au Vénérable Maître, il adresse ces paroles au Frère proposant :");
    await this.dire("V.M.", "Frère N.., le cherchant qui se présente à nous assure que vous répondez de lui à la loge. Vous connaissez à ce titre toute l'étendue de vos devoirs envers l'Ordre, et de vos obligations envers le candidat. Dites donc à haute voix si vous en répondez à l'Ordre et à vos Frères.");
    await this.dire("Proposant", "Oui, j'en réponds à l'Ordre et à mes Frères.");
    await this.dire("V.M.", "Mes Frères, êtes-vous contents de ce que vous venez d'entendre ? Et consentez-vous que le cherchant qui vous est annoncé soit introduit comme persévérant ?");


    await this.frapper("V.M.", "O");
    this.action("Pour le consentement, qui se donne dans la forme accoutumée.");
    await this.pause(this.PAUSE_ACTION);

    await this.dire("V.M.", "Frère N.., la loge accepte votre déclaration et votre engagement en faveur du candidat, dans la ferme persuasion qu'elle n'aura jamais lieu de s'en repentir. Elle vous a déjà agréé pour le parrain du cherchant qu'elle va reconnaître maçon, et dès ce moment vous êtes spécialement chargé de l'instruire des devoirs qui lui seront imposés dans le grade d'apprenti.");

    await this.echoCoups("O");
    await this.dire("V.M.", "Mes Frères, formez la loge.");
    this.action("Aussitôt, les Frères viennent en silence se ranger autour du tapis dans l'ordre de leur grade. Les Apprentis et les Compagnons vont se placer à l'Occident, entre le tapis et les tables des Surveillants. Ensuite les Maîtres quittent leurs places et vont se ranger sur les deux colonnes depuis l'Occident en remontant vers l'Orient. Les Dignitaires, Vénérables et autres, qui siègent à l'Orient, prendront place entre l'autel et le tapis, en face des Apprentis et des Compagnons. Le Maître des Cérémonies veille sur ce travail pour qu'il se fasse régulièrement et sans confusion.");
    await this.formerLoge();
    this.action("Dans cet intervalle, les Frères adjoints au Maître des Cérémonies vérifient et mettent à portée : les tuyaux ou cylindres creux pour envelopper les neuf lumières d'ordre, lesquelles ne doivent jamais être éteintes avant la clôture de la loge ; la terrine, dans laquelle on verse une petite quantité d'esprit de vin ; la machine pour imiter le bruit du tonnerre ; le roseau garni de l'étoupe fine qui doit être embrasée par le Second Surveillant lorsqu'on rend la lumière au candidat.");

    // Tout étant disposé : second coup, formation finale
    this.action("Tout étant disposé, le Vénérable Maître frappe encore un coup :");
    await this.pause(1000);
    await this.echoCoups("O");

    await this.dire("V.M.", "Mes Frères, la sagesse appelle ceux qui sont éloignés, afin qu'ils ne le soient plus. Frère Premier Surveillant, puisque cet homme, après avoir cherché la vérité avec ardeur, persévère dans son désir qu'il soit introduit.");
    await this.dire("1°S.", "Frère Second Surveillant, puisque cet homme, après avoir cherché la vérité avec ardeur, persévère dans son désir qu'il soit introduit.");


    // 2nd Surv frappe OO-O de l'intérieur, Intr répond du dehors
    this.action("Le Second Surveillant frappe trois coups maçonniques en dedans ; le Frère Introducteur répond du dehors.");
    animerVers("pion-2surv", WP[0].x, WP[0].y, 900);
    await this.pause(950);
    await this.frapperPorte("2°S.", "Intr", "OO-O");
    this.action("Le Second Surveillant ouvre rapidement la porte en entier et lui dit avec gravité et d'un ton modéré :");
    await this.dire("2°S.", "Mon Frère, le Vénérable Maître permet que vous introduisiez le cherchant qui persévère dans son désir.");


    // Entrée du candidat — M1 (Introducteur) à droite du candidat, candidat à gauche
    this.action("Le Frère Introducteur tenant le candidat par la main droite, entre avec lui à pas libres, et va le placer à l'Occident entre les deux Surveillants.");
    animerVers("pion-maitre1", PW[1].x + 30, PW[1].y, this.DUREE_WP); // M1 à droite
    await animerVers("pion-candidat", PW[1].x - 30, PW[1].y, this.DUREE_WP); // Récip à gauche

    // 2°S retourne à sa place
    animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, 900);

    this.action("Alors, le Premier Surveillant frappe un coup.");
    await this.frapper("1°S.", "O");
    await this.dire("Intr", "Vénérable Maître, le cherchant, privé de la lumière, m'a donné sa confiance, et je l'ai garanti de tous les dangers qui le menaçaient. Mais pour accomplir le travail difficile qu'il ose entreprendre, je vous prie de lui accorder de nouveaux secours, afin que nous puissions seconder ses efforts.");
    await this.dire("V.M.", "Mon Frère, celui qui demande avec un vrai désir obtient aisément ce qu'il souhaite. Frères Surveillants, dirigez cet homme sous les yeux de son guide. Mais auparavant qu'il soit rigoureusement éprouvé.");

    // 2°S se lève et vient se placer à gauche du candidat
    this.action("Le Second Surveillant se lève et vient se placer à la gauche du candidat.");
    animerVers("pion-2surv", PW[1].x - 62, PW[1].y, 900);
    await this.pause(950);

    // Épreuve du glaive
    this.action("Le Second Surveillant, plaçant la lame de son épée nue dans la main droite du candidat, lui dit avec fermeté :");
    await this.dire("2°S.", "Monsieur, mettez sur votre cœur la pointe de cette épée.");
    this.action("Le candidat ayant exécuté l'ordre, le Premier Surveillant dit :");
    await this.dire("1°S.", "Vénérable Maître, le cherchant a subi l'épreuve du glaive : il a reconnu qu'elle était juste, et n'a point hésité à s'y soumettre.");
    await this.dire("V.M.", "Qu'il ne murmure donc jamais lorsqu'il éprouvera des revers.");


    this.action("Alors, le Second Surveillant retire son épée, et tous les Frères observent le plus profond silence pendant une minute ou deux. Ensuite le Vénérable Maître dit au candidat d'un ton noble et ferme :");
    await this.pause(3000);

    // Grand discours du VM
    await this.dire("V.M.", "Que venez-vous chercher ici, Monsieur ?");
    await this.dire("Récip.", "Je désire recevoir la lumière.");
    await this.dire("V.M.", "Croyez-vous donc que la lumière puisse se répandre sur l'homme vicieux et corrompu ?");
    await this.dire("Récip.", "Rendez-moi digne de la recevoir.");
    await this.dire("V.M.", "Frère Second Surveillant, puisque cet homme désire sincèrement de recevoir la lumière, qu'il soit purifié dans les éléments. Disposez-les donc chacun dans sa région, et qu'il y soit soumis à toute leur rigueur.");
    this.action("Les Frères préposés pour les éléments des cérémonies vont placer au midi la cassolette à feu, au nord la cuvette d'eau froide et le linge blanc, et à l'Occident le vase garni de terre friable ou de sable.");
    // Les éléments quittent le couloir pour rejoindre leurs régions rituelles
    animerVers("pion-feu",   770, 535, 900); // Midi — sur le marqueur-feu
    animerVers("pion-eau",   490, 535, 900); // Nord — sur le marqueur-eau
    animerVers("pion-terre", 630, 810, 900); // Occident — sur le marqueur-terre
    await this.pause(1000);

    this.action("Après un moment de silence, le Vénérable Maître dit :");
    await this.dire("V.M.", "Monsieur, celui qui aime la vérité désire de la connaître ; il la cherche avec ardeur ; il persévère à la chercher. Mais ce n'est point encore assez. L'homme qui veut la découvrir doit rompre les liens qui l'enchaînent lui-même, écarter les illusions qui le trompent, vaincre courageusement les obstacles. Il faut donc non seulement que cet homme cherche, et qu'il persévère, mais il faut encore qu'il souffre. Car celui qui, ayant aperçu la vérité, se refuse aux travaux nécessaires pour l'atteindre, est plus malheureux que ceux qui ne l'ont point vue.");
    await this.dire("V.M.", "Plusieurs nous ont rendu témoignage en votre faveur un de nos Frères a répondu de vous, et celui que j'ai envoyé pour vérifier vos titres nous a certifié qu'ils sont justes, et m'a demandé un guide pour diriger vos pas. Ce guide vous a été envoyé, Monsieur. Par son secours vous avez pu frapper et vous faire ouvrir et déjà vous êtes devant nous pour être éprouvé. Il faut donc dès à présent que vous nous démontriez vous-même que vous pouvez entrer dans cette route difficile, où la force seule de votre volonté peut assurer vos progrès.");
    await this.dire("V.M.", "Mais avant de subir ces épreuves auxquelles tout homme est soumis, s'il veut obtenir le rang de maçon, vous devez en ce moment déclarer ici à haute voix si c'est avec un vrai désir de parvenir à la vérité par la pratique des vertus, que vous demandez d'être reçu Franc-maçon. Est-ce bien librement, Monsieur, que vous faites cette démarche ?");
    await this.dire("V.M.", "Voulez-vous sincèrement vous unir à nous par les lois de l'Ordre et de la fraternité ? Cette déclaration est bien plus importante que vous ne pensez. Répondez, et surtout que votre réponse soit faite avec franchise et sans contrainte.");
    await this.dire("Récip.", "Oui, librement et de ma propre volonté.");
    await this.dire("V.M.", "Mais êtes-vous également décidé à pratiquer selon votre pouvoir envers tous les hommes, qui sont aussi vos Frères, les actes d'une bienfaisance douce, consolante et universelle ? Prenez garde, Monsieur, vos réponses dans cet instant sont des engagements pour l'avenir et vous les contractez devant nous avec vous-même.");
    await this.dire("Récip.", "Oui.");
    await this.dire("V.M.", "Ainsi, vous persistez à être reçu Franc-maçon ?");
    await this.dire("Récip.", "Oui, je persiste.");
    await this.dire("V.M.", "Êtes-vous décidé à vous livrer en ce moment entre nos mains pour être reçu, et m'en donnez-vous votre parole d'honneur ?");
    await this.dire("Récip.", "Oui, je vous en donne ma parole d'honneur.");
    await this.dire("V.M.", "Eh bien, Monsieur, votre volonté sera accomplie. Puisse-t-elle contribuer un jour à vous rendre heureux.");
    this.action("Alors le Vénérable Maître, s'adressant à la loge, dit :");
    await this.dire("V.M.", "Mes Frères, vous avez entendu : il a déclaré lui-même qu'il persiste dans son désir. Consentez-vous que ce persévérant devienne souffrant ?");
    this.action("Le consentement se donne en silence de la manière accoutumée.");
    await this.pause(this.PAUSE_ACTION);
    await this.dire("V.M.", "Puisque vous y consentez, vérifions s'il cherche avec droiture, et s'il est capable de persévérer et de souffrir. Alors seulement, il pourra recevoir son salaire.");
    this.action("Au candidat :");
    await this.dire("V.M.", "Monsieur, le plus grand des dangers vous menace, et vous êtes sans lumière dans une profonde nuit. Cette clarté sans laquelle tout n'est que ténèbres ne vous a point été donnée. Cependant, vous entrez dans une route inconnue, et vous allez faire des voyages pénibles et difficiles, dans lesquels vous éprouverez la rigueur des éléments. Mais ne vous découragez point, vous avez des guides qui méritent votre confiance, et qui vous garantiront de tout péril si vous vous laissez conduire avec docilité. Ainsi, quoique vous soyez privé de la lumière, n'hésitez pas à les suivre. En vous abandonnant à eux sans réserve, vous atteindrez certainement le but de vos désirs. Ne leur résistez donc pas, et quelles que soient vos craintes dans les épreuves auxquelles vous allez être exposé, soumettez-vous toujours à leurs conseils.");
},

// ─── VOYAGES (Chapitre XIII) ─────────────────────────────────────────────────
receptionVoyages: async function() {
    this._setEtape("Réception Apprenti — Voyages");
    if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('apresReceptionIntroduction');

    // Annonce des voyages — coups OO-O × 3
    this.action("Le Vénérable Maître frappe trois coups maçonniques sur l'autel.");
    await this.echoCoups("OO-O");
    await this.dire("V.M.", "Frère Second Surveillant, puisque cet homme se confie entièrement à nous, dirigez-le vous-même, sous les yeux de son premier guide, dans les voyages pénibles et mystérieux qui lui procureront la lumière, s'il la cherche sincèrement.");
    await this.dire("V.M.", "Monsieur, je ne pourrais assez-vous le dire, et vous ne sauriez en être assez convaincu : celui qui, étant dans les ténèbres, veut se diriger lui-même et marcher sans guide, s'égare et se perd. N'oubliez donc point que dans l'état où vous êtes, vous ne pourrez-vous garantir de l'erreur qu'autant que, par une pleine confiance dans l'Ordre et une volonté inébranlable, vous emploierez vos forces à suivre ceux qui doivent vous guider dans la route que vous allez entreprendre.");
    this.action("Le Vénérable Maître frappe un seul coup d'avertissement.");
    await this.frapper("V.M.", "O");
    this.action("Et aussitôt, le Second Surveillant, mettant la lame de son épée nue dans la main droite du candidat et en appuyant la pointe contre sa poitrine, lui dit :");
    await this.dire("2°S.", "Monsieur, la pointe de cette épée appuyée sur votre cœur n'est qu'un faible emblème des dangers qui vous entourent, et dont vous êtes menacé si vous ne me suivez pas exactement et sans hésiter.");
    this.action("Ensuite, prenant avec la main droite la main gauche du candidat, il ajoute :");
    await this.dire("2°S.", "Marchons, et ne craignez rien.");


    const D = this.DUREE_WP;

    // ── PREMIER VOYAGE — sens du soleil (PW1→10), épreuve du feu au Midi ──
    this.action("Ils se font autour des Frères qui forment la loge, passant derrière le trône d'orient et derrière les places des Surveillants.");
    this.action("Le Second Surveillant conduit le candidat de l'Occident vers le Midi, puis vers l'Orient, puis vers le Nord, et retour à l'Occident.");
    await this.processerCortege(D, PW[1], PW[2], PW[3], PW[4], WP[2], WP[3], WP[4], PW[5], PW[6], PW[7], WP[6], WP[7]);

    // Passage par le Midi : feu
    this.action("En passant par le midi, le Frère Introducteur présente au candidat la cassolette à feu, et prenant ses deux mains, il les approche du feu assez près pour qu'il en ressente la chaleur sans se brûler, et lui dit :");
    await this._clignoter('pion-feu', 3000);
    await this.dire("Intr", "Le feu consume la corruption ; mais il dévore l'être corrompu.");
    await this.processerCortege(D, WP[8], PW[8], PW[9], PW[10], PW[1], WP[1]);
    this.action("Le Second Surveillant, étant arrivé à l'Occident, lui fait faire une profonde inclination vers l'Orient.");

    // VM frappe, tonnerre, première maxime
    this.action("Le Vénérable Maître frappe un seul coup.");
    await this.frapper("V.M.", "O");
    this.action("Et aussitôt le Frère préposé imite le bruit du tonnerre.");
    await this.tonnerre();
    await this.dire("V.M.", "L'homme est l'image immortelle de Dieu ; mais qui pourra la reconnaître, s'il la défigure lui-même ?");


    // Bilan 1er voyage
    this.action("Après un moment de silence, le Second Surveillant frappe un coup.");
    await this.frapper("2°S.", "O");
    await this.frapper("1°S.", "O");
    await this.frapper("V.M.", "O");
    await this.dire("V.M.", "Frère Second Surveillant, que demandez-vous ?");
    await this.dire("2°S.", "Vénérable Maître, le cherchant a fait son premier voyage. En passant par le midi, il a été rigoureusement éprouvé par le feu ; et cependant il n'a point trouvé ce qu'il désire.");
    await this.dire("V.M.", "Je le crois bien, car il est faible encore. Il n'a pas eu le courage d'entrer avec vous dans la bonne voie, il en est encore fort loin. Éprouvez-le donc de nouveau, peut-être réussira-t-il s'il persévère.");


    // ── DEUXIÈME VOYAGE ──
    this.action("Le Second Surveillant prend avec la main gauche la droite du candidat, qui de l'autre main tient la pointe de l'épée sur son cœur et dans cette attitude il lui fait faire le second voyage en sens opposé, c'est à dire : de l'Occident à l'Orient par le midi.");

    // ── DEUXIÈME VOYAGE — sens inverse (PW10→1), épreuve de l'eau au Nord ──
    await this.processerCortege(D, PW[1], PW[10], PW[9], PW[8], WP[8], WP[7], WP[6], PW[7], PW[6], PW[5], WP[4], WP[3]);

    // Passage par le Nord : eau (WP3 — Arc Nord-Milieu)
    this.action("En passant par le nord, le Frère Introducteur présente au candidat la cuvette d'eau froide, dans laquelle il lui fait plonger les mains, disant :");
    await this._clignoter('pion-eau', 3000);
    await this.dire("Intr", "C'est par la dissolution des choses impures que l'eau lave et purifie ; mais elle recèle leurs influences funestes, et les principes de la putréfaction.");
    this.action("Alors, il lui essuie les mains avec un linge blanc.");
    await this.processerCortege(D, WP[2], PW[4], PW[3], PW[2], PW[1], WP[1]);
    this.action("Le second voyage étant fini, le Second Surveillant lui fait faire une inclination vers l'Orient.");

    // VM frappe, tonnerre, deuxième maxime
    this.action("Le Vénérable Maître bat un coup sur l'autel.");
    await this.frapper("V.M.", "O");
    this.action("Le Frère préposé imite une seconde fois le bruit du tonnerre.");
    await this.tonnerre();
    await this.dire("V.M.", "Celui qui rougit de la religion, de la vertu, et de ses frères, est indigne de l'estime et de l'amitié des maçons.");


    // Bilan 2ème voyage
    this.action("Après un moment de silence, le Second Surveillant ayant frappé un coup.");
    await this.frapper("2°S.", "O");
    await this.frapper("1°S.", "O");
    await this.frapper("V.M.", "O");
    await this.dire("V.M.", "Que demandez-vous, Frère Second Surveillant ?");
    await this.dire("2°S.", "Vénérable Maître, le persévérant a fait le second voyage, et a passé avec beaucoup de peine par l'élément de l'eau dans la région du nord ; cependant, il n'a pas atteint le but de ses recherches.");
    await this.dire("V.M.", "Comment pourrait-il l'atteindre, s'il est effrayé des peines qu'il doit souffrir ?");
    await this.dire("V.M.", "Aussi n'est-il pas encore dans la bonne voie, il en est même bien loin. Éprouvez-le donc de nouveau ; s'il souffre avec patience et sans murmure, il peut espérer le succès de ses travaux.");


    // ── TROISIÈME VOYAGE ──
    this.action("Le Second Surveillant fait faire au candidat le troisième et dernier voyage par les mêmes routes qu'il a fait pour le premier de l'Occident à l'Orient par la voie du nord, et tenant également la main gauche du candidat. Arrivé à l'Occident, le Frère Introducteur lui présente le vase contenant la terre friable, et la lui fait manier et briser avec les deux mains.");

    // ── TROISIÈME VOYAGE — sens du soleil comme le premier, épreuve de la terre à l'Occident ──
    await this.processerCortege(D, PW[1], PW[2], PW[3], PW[4], WP[2], WP[3], WP[4], PW[5], PW[6], PW[7], WP[6], WP[7], WP[8], PW[8], PW[9], PW[10], PW[1], WP[1]);

    // Épreuve de la terre — arrivé à l'Occident
    await this._clignoter('pion-terre', 3000);
    await this.dire("Intr", "Le grain mis dans la terre y reçoit la vie ; mais si son germe est altéré, la terre même en accélère la putréfaction.");
    this.action("Le troisième voyage étant fini, et le candidat s'étant incliné vers l'Orient, le Vénérable Maître frappe un coup.");

    await this.frapper("V.M.", "O");
    this.action("Le tonnerre roule pour la troisième et dernière fois.");
    await this.tonnerre();
    await this.dire("V.M.", "Le maçon dont le cœur ne s'ouvre point au besoin et aux malheurs des autres hommes, est un monstre dans la société des Frères.");


    // Bilan 3ème voyage
    this.action("Le Vénérable Maître observe encore un moment de silence, ensuite il dit au candidat :");
    await this.dire("V.M.", "Réfléchissez bien, Monsieur, sur ces trois maximes que l'Ordre vient de vous présenter, elles vous serviront à l'avenir à vous juger vous-même.");
    this.action("Après un moment de silence, le Second Surveillant frappe un coup.");
    await this.frapper("2°S.", "O");
    await this.frapper("1°S.", "O");
    await this.frapper("V.M.", "O");
    await this.dire("V.M.", "Que demandez-vous, mon Frère ?");
    await this.dire("2°S.", "Le souffrant a fini le troisième voyage. Étant arrivé à l'Occident, il y a été éprouvé par l'élément terrestre ; mais il confesse son erreur et avoue devant vous qu'il n'a pas atteint le but de ses recherches ; c'est pourquoi il réclame votre assistance.");
    await this.dire("V.M.", "Puisque en traversant les trois régions élémentaires, il a éprouvé leur rigueur et qu'il n'a pu y trouver la lumière, il est sur la bonne voie.");
    await this.dire("V.M.", "Frères Surveillants, conduisez-le donc au bas de l'escalier du temple, en face de l'Orient, et vous lui en ferez monter les trois premiers degrés afin qu'il essaie, devant vous, les forces qu'il vient d'acquérir.");


    // Dispersion — retour aux places en ordre inverse de la formation
    await this.frapper("V.M.", "O");
    await this.frapper("1°S.", "O");
    await this.frapper("2°S.", "O");
    this.action("Aussitôt, tous les Frères qui formaient la Loge autour du tapis reprennent leurs places sans bruit, en défilant dans l'ordre inverse de la formation : d'abord les Officiers et les Frères de l'Orient, puis les Maîtres, les Compagnons et les Apprentis.");

    const P = this.POSITIONS;
    const D2 = 1200;
    // Vague 1 : Officiers et Frères de l'Orient
    // Les deux Surveillants encadrent le candidat (2°S à gauche, 1°S à droite)
    animerVers("pion-2surv",  590, 830, D2);
    animerVers("pion-1surv",  670, 830, D2);
    animerVers("pion-mc",            P["pion-mc"].x,            P["pion-mc"].y,            D2);
    animerVers("pion-ex-maitre",     P["pion-ex-maitre"].x,     P["pion-ex-maitre"].y,     D2);
    animerVers("pion-orateur",       P["pion-orateur"].x,       P["pion-orateur"].y,       D2);
    animerVers("pion-secretaire",    P["pion-secretaire"].x,    P["pion-secretaire"].y,    D2);
    animerVers("pion-tresorier",     P["pion-tresorier"].x,     P["pion-tresorier"].y,     D2);
    animerVers("pion-eleemosynaire", P["pion-eleemosynaire"].x, P["pion-eleemosynaire"].y, D2);
    animerVers("pion-econome",       P["pion-econome"].x,       P["pion-econome"].y,       D2);
    animerVers("pion-maitre6",       P["pion-maitre6"].x,       P["pion-maitre6"].y,       D2);
    animerVers("pion-maitre7",       P["pion-maitre7"].x,       P["pion-maitre7"].y,       D2);
    await this.pause(D2 + 200);

    // Vague 2 : Maîtres (maitre1 = Introducteur, reste auprès du candidat)
    animerVers("pion-maitre2", P["pion-maitre2"].x, P["pion-maitre2"].y, D2);
    animerVers("pion-maitre3", P["pion-maitre3"].x, P["pion-maitre3"].y, D2);
    animerVers("pion-maitre4", P["pion-maitre4"].x, P["pion-maitre4"].y, D2);
    animerVers("pion-maitre5", P["pion-maitre5"].x, P["pion-maitre5"].y, D2);
    await this.pause(D2 + 200);

    // Vague 3 : Compagnons
    animerVers("pion-comp1",   P["pion-comp1"].x,   P["pion-comp1"].y,   D2);
    animerVers("pion-comp2",   P["pion-comp2"].x,   P["pion-comp2"].y,   D2);
    animerVers("pion-comp3",   P["pion-comp3"].x,   P["pion-comp3"].y,   D2);
    animerVers("pion-comp4",   P["pion-comp4"].x,   P["pion-comp4"].y,   D2);
    animerVers("pion-comp5",   P["pion-comp5"].x,   P["pion-comp5"].y,   D2);
    await this.pause(D2 + 200);

    // Vague 4 : Apprentis
    animerVers("pion-appr1",   P["pion-appr1"].x,   P["pion-appr1"].y,   D2);
    animerVers("pion-appr2",   P["pion-appr2"].x,   P["pion-appr2"].y,   D2);
    animerVers("pion-appr3",   P["pion-appr3"].x,   P["pion-appr3"].y,   D2);
    animerVers("pion-appr4",   P["pion-appr4"].x,   P["pion-appr4"].y,   D2);
    animerVers("pion-appr5",   P["pion-appr5"].x,   P["pion-appr5"].y,   D2);
    await this.pause(D2 + 200);

    // Montée et redescente des marches du temple — 3 pas d'équerre
    this.action("Les Surveillants font placer le candidat au bas du tapis, la face tournée vers le nord, les pieds en équerre. Ils le soutiennent par les deux bras et lui font monter trois petits pas d'équerre les trois premières marches de l'escalier du temple ; puis, après l'avoir laissé reposer un instant sur le palier, ils le font redescendre à pas libres en reculant.");
    const yBase = 830, yPalier = 690, durPas = 700;
    const y1 = Math.round(yBase - (yBase - yPalier) / 3);      // ≈ 783
    const y2 = Math.round(yBase - 2 * (yBase - yPalier) / 3);  // ≈ 737
    // Pas 1
    animerVers("pion-2surv", 590, y1, durPas);
    animerVers("pion-1surv", 670, y1, durPas);
    await animerVers("pion-candidat", 630, y1, durPas);
    this._afficherPas(1, 630, y1);
    await this.pause(1000);
    // Pas 2
    animerVers("pion-2surv", 590, y2, durPas);
    animerVers("pion-1surv", 670, y2, durPas);
    await animerVers("pion-candidat", 630, y2, durPas);
    this._afficherPas(2, 630, y2);
    await this.pause(1000);
    // Pas 3 — palier
    animerVers("pion-2surv", 590, yPalier, durPas);
    animerVers("pion-1surv", 670, yPalier, durPas);
    await animerVers("pion-candidat", 630, yPalier, durPas);
    this._afficherPas(3, 630, yPalier);
    await this.pause(1000);
    // Redescente
    animerVers("pion-2surv",    590, yBase, 1500);
    animerVers("pion-1surv",    670, yBase, 1500);
    await animerVers("pion-candidat", 630, yBase, 1500);

    await this.dire("V.M.", "Monsieur, l'escalier dont vous venez de monter les trois premières marches conduit à la porte d'un temple qui est encore caché à vos regards, et dans lequel cependant, en qualité de maçon, vous devez entrer un jour si vous êtes constant dans la seule voie qui peut y conduire. Aujourd'hui même, vous n'auriez pu monter ces degrés mystérieux sans le secours des guides qui vous ont dirigé. Il est vrai qu'ils vous en ont fait aussitôt redescendre, afin que vous voyiez la nécessité de recommencer souvent votre travail pour le rendre plus parfait, et que vous appreniez à vous élever sans cesse jusqu'au palier qui termine ces trois marches, pour y contempler l'extérieur de cet édifice, et en admirer la régularité.");
    await this.dire("V.M.", "Frères Surveillants, puisque l'entrée du temple est encore refusée à cet homme, faites-le approcher de l'Orient par les trois pas maçonniques, afin d'y prononcer son engagement d'Ordre.");

    // Trois pas maçonniques vers l'Orient (Occident → Midi → Nord → Orient)
    this.action("Les Surveillants et le Frère Introducteur soutenant et soulevant pour ainsi dire le candidat par les deux bras, lui font faire trois grands pas d'équerre par-dessus le tapis, en joignant à chaque pas les deux talons l'un contre l'autre, en forme d'équerre. Pour le premier pas il doit porter le pied droit de l'Occident au midi, et apporter le talon gauche derrière le droit. Pour le second pas, il porte le pied gauche au nord, et apporte le talon droit derrière le gauche. Pour le troisième pas, il porte le pied droit à l'Orient et apporte le talon gauche derrière le droit.");
    const durPasM = 900;
    // Pas maçonnique 1 : Occident (WP1) → Midi (WP7)
    animerVers("pion-2surv",   WP[7].x - 40, WP[7].y,      durPasM);
    animerVers("pion-1surv",   WP[7].x + 40, WP[7].y,      durPasM);
    animerVers("pion-maitre1", WP[7].x,       WP[7].y + 60, durPasM);
    await animerVers("pion-candidat", WP[7].x, WP[7].y, durPasM);
    this._afficherPas(1, WP[7].x, WP[7].y);
    await this.pause(1000);
    // Pas maçonnique 2 : Midi (WP7) → Nord (WP3)
    animerVers("pion-2surv",   WP[3].x - 40, WP[3].y,      durPasM);
    animerVers("pion-1surv",   WP[3].x + 40, WP[3].y,      durPasM);
    animerVers("pion-maitre1", WP[3].x,       WP[3].y + 60, durPasM);
    await animerVers("pion-candidat", WP[3].x, WP[3].y, durPasM);
    this._afficherPas(2, WP[3].x, WP[3].y);
    await this.pause(1000);
    // Pas maçonnique 3 : Nord (WP3) → Orient (WP5)
    animerVers("pion-2surv",   WP[5].x - 40, WP[5].y,      durPasM);
    animerVers("pion-1surv",   WP[5].x + 40, WP[5].y,      durPasM);
    animerVers("pion-maitre1", WP[5].x,       WP[5].y + 60, durPasM);
    await animerVers("pion-candidat", WP[5].x, WP[5].y, durPasM);
    this._afficherPas(3, WP[5].x, WP[5].y);
    await this.pause(1000);
    // Agenouillement sur le coussin (y=242) — directement depuis WP5
    this.action("Et là, après lui avoir fait saluer l'Orient, les Surveillants le font approcher à pas libre, en le soutenant toujours par les deux bras, jusqu'au bas des marches de l'autel d'Orient.");
    animerVers("pion-2surv",   590, 242, 1200);
    animerVers("pion-1surv",   670, 242, 1200);
    animerVers("pion-maitre1", WP[5].x, WP[5].y + 60, 1200);
    await animerVers("pion-candidat", 633, 242, 1200);
},


    // ─── VERTUS ──────────────────────────────────────────────────────────────


    cacherVertus: function() {
        animerVers("pion-justice",    150, 1240, 1000);
        animerVers("pion-clemence",   300, 1240, 1000);
        animerVers("pion-temperance", 450, 1240, 1000);
        animerVers("pion-prudence",   600, 1240, 1000);
    },

    // ─── CHAPITRE XIV — CANDIDAT AU BAS DES MARCHES DE L'AUTEL ─────────────
    receptionSerment: async function() {
        this._setEtape("Réception Apprenti — Serment");
        if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('apresReceptionVoyages');

        await this.dire("V.M.", "Monsieur, le désir qui vous a animé dans vos recherches ; la persévérance dont vous nous avez donné des preuves ; et la patience que vous avez montrée dans une route pénible, en surmontant les obstacles qui vous y ont été figurés, nous assurent de la sincérité de votre cœur. Nous sommes donc prêts à récompenser une si noble fermeté en vous unissant à nous par les engagements de l'Ordre. Ces liens d'amitié et de fraternité doivent être indissolubles. Voulez-vous les contracter ?");
        await this.parler('Cand.', "Oui, je le veux.");

        await this.dire("V.M.", "Ces engagements sont de garder dans votre cœur un secret inviolable sur les emblèmes et mystères de la Franc-maçonnerie, qui pourront aujourd'hui et à l'avenir vous être confiés ; et de remplir fidèlement tous les devoirs que l'Ordre impose à ses membres, vous assurant que jamais il n'exigera rien de vous qui soit contraire à ce que vous devez à Dieu, et à Votre Souverain, à votre état civil et aux autres hommes. Bien loin de là, Monsieur, vous y serez obligé plus strictement que jamais, en qualité de maçon. Jusqu'à présent, vous avez été maître de vous retirer et quoique vous soyez privé de la lumière, nous vous déclarons que vous êtes libre encore. Car vous pouvez, en ce moment même, renoncer à votre réception dans l'Ordre. Mais bientôt, ayant prononcé vos engagements, vous n'en serez plus le maître. Reconnaissez-vous que vous êtes libre de vous retirer ?");
        await this.parler('Cand.', "Oui, je le reconnais.");

        await this.dire("V.M.", "Eh bien, dans cet état de liberté où vous reconnaissez être, persistez-vous à être reçu Franc-maçon ?");
        await this.parler('Cand.', "Oui, j'y persiste.");

        await this.dire("V.M.", "Frères Surveillants, mettez donc le souffrant dans l'état où il doit être, qu'il ait le genou droit posé sur l'équerre au bas de l'autel, et que sa main droite soit sur la Bible et l'épée.");
        this.action("L'épée nue du Vénérable Maître repose en travers sur la Bible ouverte au premier chapitre de l'Évangile de Saint Jean, l'une et l'autre étant sur l'autel. Le candidat, ayant été placé par les Surveillants selon l'ordre du Vénérable Maître, la jambe gauche relevée en équerre sur la seconde marche de l'autel.");

        await this.dire("V.M.", "Monsieur, le livre sur lequel votre main droite repose est une Bible, ouverte au premier chapitre de l'Évangile de Saint Jean. C'est sur ce livre saint que vous allez prêter votre engagement. Croyez-vous que votre main soit sur l'Évangile de Saint Jean ?");
        await this.parler('Cand.', "Oui, je le crois.");

        await this.dire("V.M.", "Pourquoi le croyez-vous ?");
        await this.parler('Cand.', "Parce que votre parole m'en assure.");

        await this.dire("V.M.", "Oui, Monsieur, c'est l'Évangile de Saint Jean, croyez-le, ma parole vous en assure. Celui qui est la vérité même a dit : Heureux ceux qui ont cru sans avoir vu. Souvenez-vous de ces choses lorsque vous méditerez ce qui dans ce Saint Évangile. C'est sur le prix que vous devez y attacher que nous fondons notre confiance pour la sincérité et la stabilité de l'engagement que vous allez contracter. La droiture de votre cœur en est la base, la religion doit en être le gage à jamais. Disposez-vous donc à le prononcer à haute voix. Mais je vais auparavant vous le faire connaître.");

        await this.dire("V.M.", "Frère Premier Surveillant, lisez la formule de l'engagement des maçons.");
        this.action("FORMULE DE L'ENGAGEMENT DES APPRENTIS — Moi, N., N., (prononçant ses noms de baptême et civil), je promets sur le Saint Évangile, en présence du Grand Architecte de l'Univers, et je m'engage sur ma parole d'honneur devant cette respectable assemblée, d'être fidèle à la sainte religion chrétienne, à mon Prince Souverain, aux lois de l'État ; d'être bienfaisant envers tous les hommes, lorsque je pourrai leur être utile ; de ne jamais révéler aucun des mystères, secrets et symboles de la Franc-maçonnerie, de quelque manière que ce puisse être, et de n'en parler à aucun homme que je n'aurais pas reconnu pour un vrai et fidèle maçon. Je promets de me soumettre aux lois de la Franc-maçonnerie, et d'obéir en ce qui concerne ces lois, à ceux qui sont chargés de leur exécution ; d'aimer tous mes frères, et de faire respecter et chérir l'Ordre, en pratiquant constamment parmi les hommes les vertus qu'il exige. Si je manque à cet engagement, que je viens de contracter par ma libre volonté et ferme détermination, je consens d'être réputé homme sans foi, sans honneur et digne du mépris de tous mes frères ; déclarant que je persiste à vouloir être admis dans l'Ordre des Francs-Maçons, et que j'en réitère la demande. Ainsi, que Dieu me soit en aide.");
        await this.pause(this.PAUSE_ACTION);
        this.action("Lorsque cette lecture est finie, le Vénérable Maître dit :");
        await this.pause(this.PAUSE_ACTION);

        await this.dire("V.M.", "Consentez-vous librement à contracter cet engagement solennel et irrévocable, et voulez-vous vous soumettre aux formalités prescrites pour y donner sanction ? Je vous le demande pour la dernière fois.");
        await this.parler('Cand.', "Oui, j'y consens librement.");

        await this.dire("V.M.", "Prenez ce compas ouvert en équerre, et posez-en la pointe avec la main gauche sur votre cœur à découvert.");


        this.action("Le Vénérable Maître bat seul un coup d'ordre.");
        await this.frapper("V.M.", "O");
        await this.dire("V.M.", "A l'Ordre, mes Frères.");
        this.action("Tous les Frères se lèvent et tirent ensemble leur épée qu'ils tiennent la pointe haute avec la main droite ; la garde devant la bouche, pour préserver le serment. Ils ôtent leur chapeau, qu'ils tiennent bas avec la main gauche. TOUS LES FRERES SE DECOUVRENT y compris le Vénérable Maître.");
        this.action("Les Surveillants restent découverts aux côtés du candidat, et le Premier Surveillant lui fait prononcer son engagement.");
        await this.pause(this.PAUSE_ACTION);

        await this.parler('Cand.', "Moi, N., N., (prononçant ses noms de baptême et civil), je promets sur le Saint Évangile, en présence du Grand Architecte de l'Univers, et je m'engage sur ma parole d'honneur devant cette respectable assemblée, d'être fidèle à la sainte religion chrétienne, à mon Prince Souverain, aux lois de l'État ; d'être bienfaisant envers tous les hommes, lorsque je pourrai leur être utile ; de ne jamais révéler aucun des mystères, secrets et symboles de la Franc-maçonnerie, de quelque manière que ce puisse être, et de n'en parler à aucun homme que je n'aurais pas reconnu pour un vrai et fidèle maçon. Je promets de me soumettre aux lois de la Franc-maçonnerie, et d'obéir en ce qui concerne ces lois, à ceux qui sont chargés de leur exécution ; d'aimer tous mes frères, et de faire respecter et chérir l'Ordre, en pratiquant constamment parmi les hommes les vertus qu'il exige. Si je manque à cet engagement, que je viens de contracter par ma libre volonté et ferme détermination, je consens d'être réputé homme sans foi, sans honneur et digne du mépris de tous mes frères ; déclarant que je persiste à vouloir être admis dans l'Ordre des Francs-Maçons, et que j'en réitère la demande. Ainsi, que Dieu me soit en aide.");

        // ─── RÉCEPTION AU COMPAS ──────────────────────────────────────────────
        this._setEtape("Réception Apprenti — Compas");

        this.action("Le candidat restant toujours à genou, le Vénérable Maître lui dit :");
        await this.dire("V.M.", "Monsieur, vous voilà engagé dans cet ordre respectable, mais il vous reste à remplir la dernière et la plus forte épreuve de votre réception. Vous avez consenti à devenir souffrant pour parvenir au but de vos recherches. Voici l'instant de prouver que votre détermination a été sincère. Vous devez sceller ici de votre sang l'engagement que vous venez de contracter. Consentez-vous qu'il soit répandu pour rendre indissolubles les liens de fraternité qui doivent vous unir à l'Ordre ? Répondez.");
        await this.parler('Cand.', "J'y consens.");
        this.action("Le Vénérable Maître dit :");

        await this.dire("V.M.", "Frère Second Surveillant, remplissez vos fonctions.");
        this.action("Le Second Surveillant prend une petite coupe de la main droite, et de la gauche un tuyau de plume ou une petite éponge contenant une liqueur rouge à l'imitation du sang. Lorsque le Vénérable Maître se prépare à frapper sur la tête du compas les trois coups pour la réception, le Second Surveillant placera la coupe un peu au-dessous du cœur et le tuyau de plume ou l'éponge près de la pointe du compas, afin d'en faire couler quelques gouttes sur la peau du candidat, principalement lorsque le Vénérable Maître aura frappé le dernier coup.");
        await this.pause(this.PAUSE_ACTION);

        await this.processer('pion-candidat', this.DUREE_WP, { x: 629, y: 241 });
        await this.processer('pion-vm', this.DUREE_WP, { x: 577, y: 186 });
        this.action("Le Vénérable Maître, soutenant d'une main la branche du compas et tenant avec l'autre son maillet, dit :");
        await this.dire("V.M.", "A la Gloire du Grand Architecte de l'Univers,\nAu nom de l'Ordre,\nEt par le pouvoir qu'il m'en a donné,\nJe vous reçois Franc-maçon apprenti.");
        this.action("En prononçant ces derniers mots, il frappe avec son maillet trois coups sur la tête du compas, dont il fait sentir légèrement la pointe sur la chair du récipiendaire au dernier des trois coups.");
        await this.pause(this.PAUSE_ACTION);

        this.action("Le Vénérable Maître fait aussitôt relever le nouveau Frère et lui dit :");

        await this.dire("V.M.", "Par cette dernière épreuve, je viens de m'assurer de votre constance et de votre fermeté dans les peines que tout homme doit subir. En consentant à cimenter votre union à l'Ordre par l'effusion de votre propre sang, vous avez rempli son attente. Il est satisfait. Car votre sang, mon Frère, n'a point été répandu. L'Ordre s'est contenté aujourd'hui du sacrifice libre que vous lui en avez fait. Travaillez à mériter un jour l'explication de l'emblème important que vous venez de nous retracer. C'est le premier souhait que je vous adresse au nom de la Fraternité qui nous unit.");

        await this.dire("V.M.", "Nous allons tous dès à présent vous donner dans nos cœurs le titre intéressant de Frère, mais n'oubliez jamais à quelles conditions vous venez de l'acquérir. « Frère secrétaire, qu'il soit écrit à jamais sur le livre de l'Ordre, que le Frère N.. N.. a été reçu apprenti Franc-maçon, après l'avoir mérité comme cherchant, comme persévérant, et comme souffrant ».");
        await this.processer('pion-vm', this.DUREE_WP, this.POSITIONS["pion-vm"]);

        await this.dire("V.M.", "Frères Surveillants, conduisez-le à l'extrémité des ouvrages, et placez-le à une distance convenable de l'entrée du temple.");
        this.action("Alors le Vénérable Maître frappe un coup.");
        await this.frapper("V.M.", "O");
        this.action("Tous les Frères rentrent leur épée au fourreau, remettent leur chapeau et s'assoient de leur propre chef.");
        this.action("Pendant cet intervalle, les Surveillants conduisent le nouveau Frère, à pas libres, vers l'Occident, passant par le nord, et là ils lui font rentrer le bras gauche dans la manche de la chemise.");
        this.processer('pion-1surv', this.DUREE_WP, { x: WP[4].x + 30, y: WP[4].y }, { x: WP[3].x + 30, y: WP[3].y }, { x: WP[2].x + 30, y: WP[2].y }, { x: PW[1].x + 30, y: PW[1].y });
        this.processer('pion-2surv', this.DUREE_WP, { x: WP[4].x - 30, y: WP[4].y }, { x: WP[3].x - 30, y: WP[3].y }, { x: WP[2].x - 30, y: WP[2].y }, { x: PW[1].x - 30, y: PW[1].y });
        this.processer('pion-candidat', this.DUREE_WP, WP[4], WP[3], WP[2], PW[1]);
        // m1 ferme la marche — décalé de 600ms derrière le cortège
        await new Promise(r => setTimeout(() => this.processer('pion-maitre1', this.DUREE_WP,
            { x: WP[4].x, y: WP[4].y + 40 }, { x: WP[3].x, y: WP[3].y + 40 },
            { x: WP[2].x, y: WP[2].y + 40 }, { x: PW[1].x, y: PW[1].y + 40 }).then(r), 600));
        await this.pause(this.PAUSE_ACTION);
    },

    // ─── CHAPITRE XV — L'APPRENTI REÇOIT LA LUMIÈRE ─────────────────────────
    receptionLumiere: async function() {
        this._setEtape("Réception Apprenti — Lumière");
        if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('apresReceptionSerment');
        const D = this.DUREE_WP;
        const P = this.PAUSE_ACTION;
        animerVers("pion-maitre1", PW[1].x, PW[1].y + 40, D);

        this.action("Le Maître des Cérémonies enveloppe les trois flambeaux du tapis avec des cylindres creux ou tuyaux. Le Frère secrétaire cache de même sa lumière, ensuite les deux Surveillants, en font autant, et après eux le Vénérable Maître place aussi des cylindres autour des trois lumières du chandelier à trois branches. Le Frère préposé rallume la terrine à l'esprit de vin. Le Second Surveillant prend le roseau garni d'étoupe. Pendant que toutes ces choses s'exécutent, les Frères doivent garder le silence.");

        // Terrine à l'esprit de vin — la petite bougie est amenée devant l'autel
        animerVers("pion-bougie", 640, 310, D);
        await this.pause(P);

        // Obscurcissement progressif — flambeaux masqués
        this.obscurcir(true);
        await this.pause(P);

        // Le 2°S. frappe un coup, repris par le 1°S. puis le V.M.
        await this.frapper("2°S.", "O");
        await this.frapper("1°S.", "O");
        await this.frapper("V.M.", "O");

        await this.dire("V.M.", "Frère Second Surveillant, que demandez-vous ?");
        await this.dire("2°S.", "Vénérable Maître, l'Apprenti est placé à l'Occident, mais il n'y peut rien entreprendre avec succès, s'il ne reçoit le premier rayon de lumière.");

        await this.dire("V.M.", "Frère Apprenti, la lumière est inaltérable. Elle n'a pas cessé un instant de briller de tout son éclat. Vous seul êtes dans l'obscurité. Désirez-vous sincèrement d'en sortir ?");
        await this.parler('Cand.', "Oui, Vénérable Maître, je le désire sincèrement.");
        await this.pause(P);

        await this.dire("V.M.", "Frère Second Surveillant, disposez-le donc à recevoir le premier rayon de lumière, et qu'il juge lui-même s'il est en état d'en soutenir la vue.");
        this.action("Alors le Second Surveillant délie le bandeau qui couvre les yeux de l'Apprenti, mais il ne l'enlève qu'après avoir entendu le coup d'ordre qui est frappé par le Vénérable Maître disant :");

        await this.frapper("V.M.", "O");
        await this.dire("V.M.", "A l'Ordre, mes Frères.");
        this.action("Le Vénérable Maître tient son épée la pointe haute, le pommeau appuyé sur l'autel. Tous les Frères, debout, tiennent la pointe de leur épée tournée contre le Nouvel Apprenti. Aussitôt, le Second Surveillant enlève tout à fait le bandeau, et montre à l'Apprenti, avec son épée, le mot JUSTICE, et les épées des Frères.");

        // Bandeau retiré — pion candidat tout blanc
        this._toggleBandeau(false);

        // Cône de lumière du 2°S. vers JUSTICE + il cite le mot
        this._coneLumiere("pion-2surv", "pion-justice", 3000);
        await this.parler('2°S.', "JUSTICE.");
        await this.pause(P);

        this.action("Les transparents de la Justice et de la Clémence, qui doivent être montrés au récipiendaire, restent allumés. Les épées sont sorties, tenues main gauche, pour la menace et la défense, et les Frères sont couverts et à l'Ordre.");
        await this.pause(P);

        await this.dire("V.M.", "Les lois de la justice sont éternelles et immuables. Celui, qui étant effrayé des sacrifices qu'elle exige, refuse de s'y soumettre, est un lâche qui se déshonore et se perd. N'hésitez donc jamais, mon Frère, et soyez juste envers tous les hommes, sans consulter vos passions, ni vos intérêts personnels. Ces armes que vous voyez tournées contre vous, ne sont qu'une faible image des remords dont vous seriez la proie, si vous aviez le malheur de manquer à la justice et à vos engagements.");
        this.action("Le Vénérable Maître frappe un coup.");
        await this.frapper("V.M.", "O");
        this.action("Et aussitôt le Second Surveillant fait tourner le candidat du côté de l'Occident et lui montre le mot CLÉMENCE.");

        // Cône de lumière du 2°S. vers CLÉMENCE + il cite le mot
        this._coneLumiere("pion-2surv", "pion-clemence", 3000);
        await this.parler('2°S.', "CLÉMENCE.");
        await this.pause(P);

        await this.dire("V.M.", "Mon Frère, si vous avez le cœur droit et sincère, ne craignez point. La clémence tempère les rigueurs de la justice en faveur de ceux qui se soumettent généreusement à ses lois. Usez donc de modération pour les autres hommes, lorsqu'ils seront rendus coupables envers vous.");
        this.action("Alors, le Second Surveillant, laissant un court intervalle, dit à l'Apprenti :");
        await this.dire("2°S.", "Mon Frère, si vous aperceviez dans cette loge un de vos ennemis, seriez-vous prêt à lui pardonner ?");
        await this.parler('Cand.', "Oui, je serais prêt à lui pardonner.");
        this.action("Le Premier Surveillant frappe un coup.");
        await this.frapper("1°S.", "O");
        this.action("Le Second Surveillant fait retourner le candidat face à l'Orient. Au même instant, le Premier Surveillant dit :");
        await this.dire("1°S.", "Vénérable Maître, l'Apprenti a subi l'épreuve de la Justice et de la Clémence.");
        await this.dire("V.M.", "Son travail est donc bien avancé.");
        await this.dire("V.M.", "Mon Frère, votre franchise et votre fermeté nous assurent de la disposition de votre âme. Mais ce faible rayon de lumière doit vous faire reconnaître que vous n'avez pas encore assez de force pour soutenir tout son éclat. Il ne vous a été accordé que pour vous faire entrevoir les dangers qui vous environnent et les secours qui vous sont offerts.");
        await this.dire("V.M.", "Frère Second Surveillant, faites rentrer l'Apprenti dans l'obscurité totale dont vous l'avez tiré, afin qu'il sente mieux le prix des moindres rayons de cette lumière, et qu'il travaille à l'obtenir.");
        this.action("Le Second Surveillant remet le bandeau sur les yeux de l'Apprenti, et le Vénérable Maître dit après un instant de repos :");

        // Bandeau remis — rectangle noir visible
        this._toggleBandeau(true);

        await this.dire("V.M.", "Celui qui perd la lumière commence à perdre la vie, et la vérité s'éloigne de lui.");

        // ── Restauration de la lumière ──────────────────────────────────────
        this.action("Le Vénérable Maître enlève les cylindres qui cachent les trois lumières d'orient, et aussitôt après, les Frères Surveillants et le Frère secrétaire en font de même de leurs lumières. Le Maître des Cérémonies dépouille ensuite celles du tapis, et couvre la terrine à l'esprit de vin pour en étouffer la flamme. Alors, le Frère préposé rallume l'éclairage de la loge. Le Second Surveillant prend le roseau garni d'étoupe. Pendant que toutes ces choses s'exécutent, les Frères doivent garder le silence.");

        // Terrine couverte — la petite bougie retourne au couloir
        animerVers("pion-bougie", 350, 1210, D);
        await this.pause(P);

        // Lever le voile progressivement
        this.obscurcir(false);

        // Premier coup pour la lumière
        this.action("Lorsque l'illumination est déjà avancée, le Vénérable Maître frappe le premier coup pour la lumière.");
        await this.frapper("V.M.", "O");
        this.action("Tous les Frères suspendent leurs mouvements. Le plus profond silence doit succéder au bruit confus.");
        await this.pause(P);

        await this.dire("V.M.", "Mes Frères, il est bien difficile de rendre la lumière à celui qui l'a méprisée.");
        this.action("Après un court intervalle, les Frères préposés continuent l'illumination de la loge, sans parler mais de même sans se gêner pour le bruit que leur travail exige. Lorsque tout est prêt, et chacun dans l'ordre à sa place, le Vénérable Maître dit :");
        await this.pause(P);

        await this.dire("V.M.", "Frère Apprenti, le crime plonge dans les ténèbres, la vertu seule rend l'homme à la lumière. Vous sentez-vous capable de soutenir son éclat ?");
        await this.parler('Cand.', "Oui, Vénérable Maître.");
        await this.pause(P);

        await this.dire("V.M.", "Frère Premier Surveillant, mettez-le donc en état de la recevoir.");
        this.action("Le Frère Premier Surveillant détache le bandeau sans l'enlever ni découvrir les yeux de l'Apprenti.");
        await this.pause(P);

        // Le 2°S. se positionne sur la bissectrice PW1–PW4, roseau d'étoupe prêt
        const bisX = Math.round((PW[1].x + PW[4].x) / 2);  // ≈ 478
        const bisY = Math.round((PW[1].y + PW[4].y) / 2);  // ≈ 856
        animerVers("pion-2surv", bisX, bisY, 900);

        await this.dire("V.M.", "Que celui qui a été éprouvé par les ténèbres soit rendu à la lumière.");
        this.action("Et tout de suite, il frappe le second coup pour la lumière.");
        await this.frapper("V.M.", "O");
        this.action("Aussitôt, tous les Frères et le Vénérable Maître se lèvent pour le retour de la lumière, tenant l'épée la pointe élevée, main gauche.");
        this.action("En même temps, le Frère Premier Surveillant enlève le bandeau, et le Frère Second Surveillant embrase l'étoupe du roseau, disant à haute voix :");

        // Bandeau retiré définitivement
        this._toggleBandeau(false);

        // Grande flamme éphémère entre le 2°S. et le candidat
        const flX = Math.round((bisX + PW[1].x) / 2);  // ≈ 558
        const flY = Math.round((bisY + PW[1].y) / 2);  // ≈ 880
        this._flammeEphemere(flX, flY, 2000);
        await this.dire("2°S.", "Sic transit gloria mundi.");
        await this.pause(1500);

        // Le 2°S. retourne à son poste
        animerVers("pion-2surv", PW[1].x - 30, PW[1].y, 900);

        await this.dire("V.M.", "Mes Frères, que la joie règne désormais parmi nous. Le fils de la lumière s'était égaré dans les ténèbres, il a été rappelé, il a été ramené, ses yeux ont été ouverts et les ténèbres se sont dissipées.");
        await this.dire("V.M.", "Frère Apprenti, n'oubliez jamais l'emblème important que vous venez de retracer et songez que le moment doit arriver où toutes les illusions disparaissent plus vite que l'éclair. Aimez donc exclusivement la vérité, la justice, si vous voulez acquérir un bonheur solide et durable. C'est ce qui vous rendra vraiment libre ; c'est ce qui vous fera avancer dans la carrière que vous venez d'entreprendre.");
        await this.dire("V.M.", "Vous avez aperçu d'abord les épées des Frères tournées contre vous, parce que l'Ordre ne s'était pas encore assuré de vos véritables dispositions. Vous voyez à présent les mêmes armes tirées pour votre défense, afin de vous convaincre que jamais l'Ordre ne vous abandonnera, si vous conservez inviolablement dans votre cœur l'amour de la vérité, de la sagesse et de vos Frères.");

        this.action("Après un moment de repos, le Vénérable Maître bat le troisième coup pour la lumière.");
        await this.frapper("V.M.", "O");
        this.action("Aussitôt, tous les Frères remettent leur épée dans le fourreau et s'assoient. Le Vénérable Maître pose la sienne sur l'autel et dit :");

        // Les Surveillants retournent à leur pupitre
        animerVers("pion-1surv", this.POSITIONS["pion-1surv"].x, this.POSITIONS["pion-1surv"].y, D);
        animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, D);

        await this.dire("V.M.", "Frère Introducteur puisqu'en quittant ses décorations profanes, notre nouveau Frère avait reconnu devant vous que la sagesse est la seule parure qui distingue vraiment les hommes, allez lui faire reprendre des vêtements qui, bien loin de servir à leur orgueil, ne devraient être pour eux que le signe de leur besoin.");
        this.action("Le Frère Introducteur le conduit dans le vestibule pour le faire s'habiller. Le Maître des Cérémonies les devance. Ensuite, il le ramène dans la loge en frappant à la porte en Apprenti.");

        // Pré-positionner appr5 (invisible) sur le candidat pour la sortie
        animerVers("pion-appr5", PW[1].x, PW[1].y, 1);

        // Sortie : MdC devance vers la porte et y reste, candidat + m1 suivent vers le couloir
        animerVers("pion-mc",        WP[0].x, WP[0].y, D);
        animerVers("pion-candidat",  WP[0].x, WP[0].y, D);
        await animerVers("pion-maitre1", WP[0].x, WP[0].y + 40, D);
        // MdC reste à la porte — candidat et m1 continuent vers le couloir
        animerVers("pion-candidat",  COULOIR.x,      COULOIR.y, D);
        animerVers("pion-appr5",     COULOIR.x,      COULOIR.y, D);
        await animerVers("pion-maitre1", COULOIR.x,  COULOIR.y + 40, D);

        // Bascule : candidat disparaît, appr5 apparaît dans le couloir
        this.setExist('pion-candidat', 0);
        this.setExist('pion-appr5', 1);

        // MdC retourne à sa place (il était resté à la porte)
        animerVers("pion-mc", this.POSITIONS["pion-mc"].x, this.POSITIONS["pion-mc"].y, D);

        await this.pause(3000);

        // ── Retour en Apprenti ──────────────────────────────────────────────

        // m1 et appr5 reviennent du couloir vers la porte
        animerVers("pion-appr5",   WP[0].x, WP[0].y + 80, D);
        await animerVers("pion-maitre1", WP[0].x, WP[0].y + 120, D);

        // OO-O sur la porte (bruitage métallique)
        await this.frapperPorte("Intr", null, "OO-O");
        await this.dire("2°S.", "Frère Premier Surveillant, on frappe à la porte en Apprenti.");
        await this.dire("1°S.", "Vénérable Maître, on frappe à la porte en Apprenti.");
        await this.dire("V.M.", "Frères Surveillants, voyez qui frappe.");
        await this.dire("1°S.", "Frère Second Surveillant, voyez qui frappe.");

        // 2°S. va à la porte, frappe en retour, ouvre et demande
        this.action("Le Second Surveillant va frapper à la porte, de l'intérieur en Apprenti.");
        animerVers("pion-2surv", WP[0].x, WP[0].y, 900);
        await this.pause(950);
        await this.frapperPorte("2°S.", null, "OO-O");
        this.action("Puis il ouvre la porte et demande :");
        await this.dire("2°S.", "Qui frappe ?");
        await this.dire("Intr", "C'est le nouvel Apprenti, qui demande d'être admis parmi les Frères de sa classe, afin d'apprendre le travail qu'il doit faire pour mériter l'approbation du Vénérable Maître.");

        // 2°S. referme la porte et retourne à son pupitre pour rapporter
        this.action("Le Second Surveillant, après avoir refermé la porte, dit :");
        await animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, 900);
        await this.dire("2°S.", "Frère Premier Surveillant, c'est le nouvel Apprenti qui demande d'être admis parmi les Frères de sa classe, afin d'apprendre le travail qu'il doit faire pour mériter l'approbation du Vénérable Maître.");
        await this.dire("1°S.", "Vénérable Maître, c'est le nouvel Apprenti qui demande d'être admis parmi les Frères de sa classe, afin d'apprendre le travail qu'il doit faire pour mériter l'approbation du Vénérable Maître.");
        await this.dire("V.M.", "Que le nouvel Apprenti soit donc introduit, mais qu'il reste à l'Occident sous la garde des Surveillants du temple.");
        await this.dire("1°S.", "Frère Second Surveillant, faites introduire le nouvel Apprenti, mais qu'il reste à l'Occident sous notre garde.");

        // 2°S. retourne à la porte pour recevoir le nouvel Apprenti et l'Introducteur
        this.action("Cet ordre est exécuté par le Second Surveillant qui, ayant reçu l'Apprenti des mains du Frère Introducteur va le placer à l'Occident entre lui et le Premier Surveillant, au-dessous du transparent de la Clémence.");
        animerVers("pion-2surv", WP[0].x, WP[0].y, 900);
        await this.pause(950);

        // Le 2°S. amène le nouvel Apprenti + l'Introducteur à l'Occident (PW1)
        // m1 reste un pas derrière appr5 — il ne retourne PAS à sa place
        animerVers("pion-2surv",   PW[1].x - 30, PW[1].y, D);
        animerVers("pion-appr5",   PW[1].x, PW[1].y, D);
        await animerVers("pion-maitre1", PW[1].x, PW[1].y + 40, D);

        // 2°S. retourne à son pupitre
        animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, D);

        // Le MdC fait le tour complet et retourne à sa place
        await this.processer('pion-mc', D,
            WP[1], WP[2], WP[3], WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
            this.POSITIONS["pion-mc"]
        );
    },

    // ─── CHAPITRE XVI — VÊTEMENTS, MOTS, SIGNES ET ATTOUCHEMENTS ────────────
    receptionInvestiture: async function() {
        this._setEtape("Réception Apprenti — Investiture");
        if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('apresReceptionLumiere');

        this.action("Le Second Surveillant bat un coup.");
        await this.frapper("2°S.", "O");
        await this.frapper("1°S.", "O");
        await this.frapper("V.M.", "O");
        await this.dire("V.M.", "Frères surveillants, que demandez-vous ?");
        await this.dire("1°S.", "Vénérable Maître, le nouvel Apprenti désire d'être revêtu de l'habillement des maçons.");
        await this.dire("V.M.", "Qu'il soit donc conduit à l'Orient par les trois pas d'équerre des Apprentis et par la voie du nord.");
        this.action("Le Second Surveillant lui fait faire les trois pas d'Apprenti en partant du pied gauche le long du tapis auquel il fait face. Ensuite il le conduit à pas libre vers le côté droit de l'autel. Le Maître des Cérémonies vient se placer à côté du Frère Apprenti, et le Second Surveillant va reprendre sa place, mais le Frère Introducteur reste auprès du récipiendaire jusqu'à ce qu'il ait travaillé sur la pierre brute.");

        const D = this.DUREE_WP;
        const durPas = 700;

        // Cortège vers WP2 : 2°S en tête, appr5, m1, MdC en queue
        animerVers("pion-2surv",   WP[2].x - 30, WP[2].y, D);
        animerVers("pion-appr5",   WP[2].x,      WP[2].y, D);
        animerVers("pion-maitre1", WP[2].x + 30, WP[2].y + 40, D);
        await animerVers("pion-mc", WP[2].x - 30, WP[2].y + 40, D);

        // Mise en place pour les 3 pas : 2°S à droite de l'apprenti, m1 et MdC un pas derrière
        animerVers("pion-2surv",   WP[2].x + 30, WP[2].y, 400);
        animerVers("pion-maitre1", WP[2].x + 30, WP[2].y + 40, 400);
        await animerVers("pion-mc", WP[2].x - 30, WP[2].y + 40, 400);
        await this.pause(500);

        // 3 petits pas en ligne droite vers le Nord (l'apprenti ne dépasse pas WP4)
        const stepH = Math.round((WP[2].y - WP[4].y) / 3);  // ≈ 113px par pas
        for (let i = 1; i <= 3; i++) {
            const y = WP[2].y - i * stepH;
            animerVers("pion-appr5",   WP[2].x,      y, durPas);
            animerVers("pion-2surv",   WP[2].x + 30, y, durPas);
            animerVers("pion-maitre1", WP[2].x + 30, y + 40, durPas);
            await animerVers("pion-mc", WP[2].x - 30, y + 40, durPas);
            this._afficherPas(i, WP[2].x, y);
            await this.pause(800);
        }

        // Cortège à pas libres vers PW5 (côté droit de l'autel) : même ordre
        animerVers("pion-2surv",   PW[5].x - 30, PW[5].y, D);
        animerVers("pion-appr5",   PW[5].x,      PW[5].y, D);
        animerVers("pion-maitre1", PW[5].x + 30, PW[5].y + 40, D);
        await animerVers("pion-mc", PW[5].x - 30, PW[5].y + 40, D);

        // Le 2°S. retourne à son pupitre par le circuit solaire
        this.processer('pion-2surv', D,
            WP[5], WP[6], WP[7], WP[8], WP[1],
            this.POSITIONS["pion-2surv"]
        );
        // L'Apprenti se rapproche du VM ; m1 et MdC restent en retrait
        await animerVers("pion-appr5", 580, 160, D);
        await this.pause(500);

        this.action("Le Vénérable Maître le revêt du tablier de peau blanche en lui disant :");
        await this.dire("V.M.", "Recevez de mes mains l'habit de l'Ordre le plus ancien et le plus respectable qui fût jamais. Sa blancheur vous indique la pureté qui est le but de nos travaux, et que nous cherchons à recouvrer. L'on ne peut y parvenir que par la justice, la droiture du cœur et l'innocence des mœurs. Ne paraissez donc jamais en loge sans être décoré de ce tablier blanc.");
        this.action("Lorsque le tablier est attaché, à quoi l'Apprenti est aidé par le Maître des Cérémonies, le Vénérable Maître ajoute :");
        await this.dire("V.M.", "Frère Apprenti, la partie supérieure du tablier doit être relevée et fixée sur votre poitrine. C'est ainsi que le portent les Frères de votre grade.");
        this.action("En lui donnant les gants blancs d'homme, il lui dit :");
        await this.dire("V.M.", "La loge vous donne ces gants blancs. Leur couleur vous annonce que vos mains ne doivent jamais se prostituer à des actes contraires à vos devoirs et à la dignité de votre âme.");
        this.action("En lui donnant les gants blancs de femme :");
        await this.dire("V.M.", "Nos lois et la bienséance ne nous permettent pas d'admettre les femmes dans nos assemblées. Mais nous nous faisons un devoir d'honorer en elles la modestie et la vertu. C'est donc pour vous avertir du respect que tout homme doit à celles qui en sont dignes, que la loge vous présente ces gants de femme. Recevez-les au nom de l'Ordre, pour celle que vous estimerez le plus.");
        this.action("En lui rendant son épée :");
        await this.dire("V.M.", "Je vous rends votre épée. Ne vous en servez désormais que pour le salut de la patrie et de vos Frères, et pour la défense de la religion.");
        this.action("En lui rendant son chapeau :");
        await this.dire("V.M.", "Je vous rends aussi votre chapeau. Mais vous ne devez pas vous en couvrir en loge sans la permission du Vénérable Maître. De même, vous ne devez pas vous asseoir avant qu'il vous le permette, afin que vous ne perdiez pas de vue votre infériorité dans l'Ordre, et que vous soyez toujours prêt à obéir à vos supérieurs.");
        this.action("En lui rendant ses bijoux et métaux :");
        await this.dire("V.M.", "Je vous rends vos bijoux et vos métaux. La loge est satisfaite du désintéressement dont vous lui avez donné la preuve, en les abandonnant à celui qu'elle avait chargé de vous en dépouiller. Gardez-vous, mon Frère, des vices dont ils sont souvent la cause.");
        this.action("En lui confiant les signes caractéristiques :");
        await this.dire("V.M.", "Nous avons dans chaque grade des signes, attouchements et mots caractéristiques pour nous reconnaître les uns et les autres, et nous distinguer d'entre les profanes. Retenez bien ceux du grade d'Apprenti, que je vais vous donner.");
        this.action("Il lui donne le signe d'ordre du grade — on porte la main droite en équerre au col — puis le signe en entier des Apprentis.");
        this.action("Il lui donne ensuite l'attouchement d'Apprenti, qui se fait en pressant avec le pouce de la main droite par trois fois la première phalange du doigt index de la main droite.");
        this.action("Il lui donne le mot du grade, JAKIN — qui signifie « Dieu m'a créé » — en lui apprenant à l'épeler lettre à lettre (J-A-K-I-N) et ensuite par syllabes.");
        this.action("Il lui donne enfin le nom de reconnaissance PHALEG — le fondateur des bonnes et véritables Loges — en disant :");
        await this.dire("V.M.", "Ce mot sera désormais votre nom caractéristique en loge comme Apprenti.");
        await this.dire("V.M.", "Par ce grade, vous venez d'acquérir dans l'Ordre l'âge de trois ans accomplis. Méritez par votre zèle et par vos vertus l'âge auquel vous devez aspirer.");
        this.action("Enfin, il l'embrasse en lui donnant le baiser fraternel, qui se fait en trois temps, sur les deux joues, la droite et la gauche. Le baiser au front se fait UNIQUEMENT SI LE VÉNÉRABLE EST CBCS.");

        // Présentation aux Frères
        await this.dire("V.M.", "Frère Maître des Cérémonies, faites reconnaître notre nouveau Frère par les deux Frères Surveillants, par les Officiers de la loge, par le Frère Préparateur par son parrain, et aussi par le cher Frère ex-maître (s'il est présent). Vous le présenterez ensuite aux Respectables Frères qui sont à l'Orient, afin qu'il reçoive d'eux le baiser fraternel.");
        this.action("Si l'assemblée n'est pas trop nombreuse, le Vénérable Maître donne l'ordre de le présenter aussi à tous les Frères qui la composent.");
        this.action("Le baiser fraternel se fait joue droite, joue gauche et joue droite. Le baiser au front est uniquement donné par les Frères de l'Ordre Intérieur au grade de CBCS.");

        // Procession MdC (tête) → appr5 (milieu) → m1 (queue)
        // Tour solaire avec halte à chaque WP pour la reconnaissance.
        // L'Apprenti s'écarte pour saluer ; MdC et m1 restent sur la trajectoire.
        // Offsets : MdC en avance (-30 sur l'axe de marche), m1 en retrait (+30).
        // Sur Midi (descente, y croissant) : avance = y-30, retrait = y+30
        // Sur Nord (montée, y décroissant) : avance = y+30, retrait = y-30
        // Sur Orient/Occident (horizontal) : offset en x
        const PP = this.POSITIONS;
        const halte = 1200;
        const DEC_A = 300;  // décalage appr5 derrière MdC
        const DEC_M = 600;  // décalage m1 derrière appr5

        // Fonction locale : déplacer le cortège vers un WP
        // sens: 'midi' (descente, y croissant), 'nord' (montée, y décroissant), 'ew' (est-ouest)
        // MdC en tête (avance dans le sens de la marche), m1 en queue (retrait)
        const allerWP = async (wp, sens) => {
            let mcX = wp.x, mcY = wp.y, m1X = wp.x, m1Y = wp.y;
            if (sens === 'midi')      { mcY += 30; m1Y -= 30; }  // descente : avance = y+, retrait = y-
            else if (sens === 'nord') { mcY -= 30; m1Y += 30; }  // montée : avance = y-, retrait = y+
            else                      { mcX -= 30; m1X += 30; }
            animerVers("pion-mc", mcX, mcY, D);
            setTimeout(() => animerVers("pion-appr5", wp.x, wp.y, D), DEC_A);
            await new Promise(r => setTimeout(() =>
                animerVers("pion-maitre1", m1X, m1Y, D).then(r), DEC_M));
        };

        // Fonction locale : l'Apprenti s'écarte pour saluer, puis revient
        const saluer = async (x, y, texte) => {
            this.action(texte);
            await animerVers("pion-appr5", x, y, 600);
            await this.pause(halte);
        };

        // ── WP6 (Midi-Haut, descente) : Trésorier, Économe, Orateur ──
        await allerWP(WP[6], 'midi');
        await saluer(PP["pion-tresorier"].x - 40, PP["pion-tresorier"].y,
            "L'Apprenti se présente au Frère Trésorier, au Frère Économe et au Frère Orateur.");

        // ── WP8 (Midi-Bas) → WP1 (Occident) : 1°S ──
        await allerWP(WP[7], 'midi');
        await allerWP(WP[8], 'midi');
        await allerWP(WP[1], 'ew');
        await saluer(PP["pion-1surv"].x - 40, PP["pion-1surv"].y,
            "L'Apprenti se présente au Frère Premier Surveillant.");

        // ── WP2 (Nord-Bas, montée) : 2°S ──
        await allerWP(WP[2], 'nord');
        await saluer(PP["pion-2surv"].x + 40, PP["pion-2surv"].y,
            "L'Apprenti se présente au Frère Second Surveillant.");

        // ── WP4 (Nord-Haut, montée) : Éléemosynaire, Secrétaire, Préparateur, ex-Maître ──
        await allerWP(WP[3], 'nord');
        await allerWP(WP[4], 'nord');
        await saluer(PP["pion-ex-maitre"].x + 40, PP["pion-ex-maitre"].y,
            "L'Apprenti se présente au Frère Secrétaire, au Frère Éléemosynaire, au Frère Préparateur et au cher Frère ex-Maître.");

        // ── Retour à l'Orient (WP5) : le MdC le reconnaît et le ramène au VM ──
        await allerWP(WP[5], 'ew');
        this.action("Après que l'Apprenti ait été reconnu, le Maître des Cérémonies le reconnaît lui-même, et le ramène au Vénérable Maître, auquel il répète les signes, attouchements et mots, en les donnant lui-même au Vénérable Maître tels qu'il les a reçus.");
        animerVers("pion-mc",      580, 190, D);
        await animerVers("pion-appr5", 580, 160, D);

        await this.dire("V.M.", "Frère Apprenti, vous venez de vous engager à exercer la bienfaisance envers tous les hommes, et principalement envers les indigents. Allez donc vous présenter au Frère Éléemosynaire pour exercer comme maçon, le premier acte de cette vertu, en mettant dans le tronc des aumônes ce que vous jugerez à propos.");
        // Le MdC conduit l'Apprenti vers l'Éléemosynaire (colonne Nord)
        animerVers("pion-mc",    this.POSITIONS["pion-eleemosynaire"].x + 40, this.POSITIONS["pion-eleemosynaire"].y, D);
        await animerVers("pion-appr5", this.POSITIONS["pion-eleemosynaire"].x + 80, this.POSITIONS["pion-eleemosynaire"].y, D);
        this.action("Le nouveau reçu ayant mis dans le tronc, le Vénérable Maître lui dit :");
        await this.pause(this.PAUSE_ACTION);

        await this.dire("V.M.", "Mon Frère, comme Apprenti vous devez travailler sur la pierre brute. Allez vers le Frère Second Surveillant, qui vous aidera dans cette œuvre importante.");

        // Le MdC conduit le cortège vers le 2°S. par le sens solaire
        this.processer('pion-mc', D,
            WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
            { x: PP["pion-2surv"].x + 40, y: PP["pion-2surv"].y }
        );
        new Promise(r => setTimeout(() =>
            this.processer('pion-appr5', D,
                WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
                { x: PP["pion-2surv"].x + 80, y: PP["pion-2surv"].y }
            ).then(r), 400
        ));
        await new Promise(r => setTimeout(() =>
            this.processer('pion-maitre1', D,
                WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
                { x: PP["pion-2surv"].x + 120, y: PP["pion-2surv"].y }
            ).then(r), 800
        ));

        // Le 2°S. se lève et conduit le groupe vers la pierre brute (WP2)
        this.action("Le Second Surveillant se lève et conduit le nouvel Apprenti près de la pierre brute représentée au tapis.");
        animerVers("pion-2surv",   WP[2].x,       WP[2].y, D);       // 2°S en WP2
        animerVers("pion-appr5",   WP[2].x + 40,  WP[2].y, D);       // Apprenti à sa droite
        animerVers("pion-maitre1", WP[2].x + 70,  WP[2].y + 40, D);  // m1 un pas derrière
        await animerVers("pion-mc", WP[2].x + 30,  WP[2].y + 40, D); // MdC un pas derrière

        this.action("Le Second Surveillant enseigne au nouveau Frère la manière de frapper les trois coups maçonniques : OO-O, en les frappant lui-même avec son maillet sur la pierre brute ; ce qu'il fait répéter par l'Apprenti.");
        await this.frapper("2°S.", "OO-O");
        await this.frapper("Cand.", "OO-O");
        await this.pause(this.PAUSE_ACTION);

        // Le Frère Introducteur reprend sa place, seul par le chemin le plus court
        this.action("Alors, le Frère Introducteur va reprendre sa place dans la loge, seul par le chemin le plus court.");
        await animerVers("pion-maitre1", PP["pion-maitre1"].x, PP["pion-maitre1"].y, D);

        // Le 2°S. retourne à son pupitre par le circuit solaire
        this.processer('pion-2surv', D,
            WP[3], WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
            PP["pion-2surv"]
        );

        await this.dire("V.M.", "Frère Apprenti, cette pierre brute sur laquelle vous venez de frapper est un emblème vrai de vous-même. Travaillez donc sans relâche à la dégrossir pour pouvoir ensuite la polir puisque c'est le seul moyen qui vous reste de découvrir la belle forme dont elle est susceptible, et sans laquelle elle serait rejetée de la construction du temple que nous élevons au Grand Architecte de l'Univers.");
        await this.dire("V.M.", "Allez maintenant, mon Frère, vous placer entre les deux surveillants. Vous y écouterez attentivement les instructions sur votre grade. C'est par votre assiduité aux travaux que vous parviendrez à graver dans votre âme vos devoirs comme Apprenti. Car vous ne parviendrez jamais à un grade plus élevé sans avoir perfectionné votre travail dans le grade que vous venez de recevoir.");
        this.action("Le Maître des Cérémonies va placer l'Apprenti entre les deux Surveillants au bas du tapis, près du transparent de la Clémence.");

        // Le MdC conduit l'Apprenti par le sens solaire jusqu'entre les Surveillants (PW1)
        this.processer('pion-mc', D,
            WP[3], WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
            { x: PW[1].x - 40, y: PW[1].y }
        );
        await new Promise(r => setTimeout(() =>
            this.processer('pion-appr5', D,
                WP[3], WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
                PW[1]
            ).then(r), 400
        ));
        // Le MdC retourne à sa place en terminant le tour
        await this.processer('pion-mc', D, WP[1], PP["pion-mc"]);

        // Le MdC conduit l'Apprenti à sa place sur la colonne du Nord
        this.action("Le Maître des Cérémonies conduit le Frère Apprenti à la place qu'il doit occuper désormais en loge, au bout de la colonne du Nord après les anciens Apprentis.");
        this.processer('pion-mc', D,
            WP[2], { x: PP["pion-appr5"].x + 40, y: PP["pion-appr5"].y }
        );
        await new Promise(r => setTimeout(() =>
            this.processer('pion-appr5', D,
                WP[2], PP["pion-appr5"]
            ).then(r), 400
        ));
        // Le MdC retourne à sa place par le circuit solaire
        await this.processer('pion-mc', D,
            WP[2], WP[3], WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
            PP["pion-mc"]
        );

        this.action("Le Vénérable Maître fait lire l'instruction morale du grade par le Frère Orateur.");
        this.action("Le Vénérable Maître fera ensuite l'instruction historique du grade, par demandes et réponses, avec les deux surveillants.");
    },

    // ── CATÉCHISME — GRADE D'APPRENTI ────────────────────────────────────────
    catechismeApprentis: async function() {
        this._setEtape("Catéchisme d'Apprenti");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Mes Frères, nous allons procéder à l'instruction par demandes et réponses du grade d'Apprenti.");
        await this.pause(P);
        await this.catechismeApprentisSection1();
        await this.catechismeApprentisSection2();
        await this.catechismeApprentisSection3();
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "L'instruction par demandes et réponses est terminée. Je remercie les Frères Surveillants.");
    },

    catechismeApprentisSection1: async function() {
        this._setEtape("Catéchisme Apprenti — Sect. I");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Première section du catéchisme d'Apprenti.");
        await this.pause(P);

        await this.parler('V.M.', "Êtes-vous Franc-maçon Apprenti ?");
        await this.parler('1°S.', "Mes Frères et Compagnons me reconnaissent pour tel.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi connaîtrai-je que vous êtes Maçon ?");
        await this.parler('2°S.', "Par les signes, attouchements, mots et paroles de mon grade, et par les circonstances particulières de ma réception.");
        await this.pause(200);
        await this.parler('V.M.', "Quel est le signe des Apprentis ?");
        await this.parler('1°S.', "(on donne le signe en entier).");
        await this.pause(200);
        await this.parler('V.M.', "Quel est le signe d'ordre en Loge ?");
        await this.parler('2°S.', "(on porte la main droite en équerre au col).");
        await this.pause(200);
        await this.parler('V.M.', "Quel est l'attouchement ?");
        await this.parler('1°S.', "(on le donne).");
        await this.pause(200);
        await this.parler('V.M.', "Quel est le mot d'Apprenti ?");
        await this.parler('2°S.', "Je vous le donnerai comme je l'ai reçu.");
        await this.pause(200);
        await this.parler('V.M.', "Donnez-moi la première lettre, je vous donnerai la seconde.");
        await this.parler('1°S.', "(on épelle le mot J-A-K-I-N).");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie ce mot ?");
        await this.parler('2°S.', "Dieu m'a créé.");
        await this.pause(200);
        await this.parler('V.M.', "Quel est le nom des Apprentis, qui leur sert de mot de reconnaissance ?");
        await this.parler('1°S.', "PHALEG.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie ce mot ?");
        await this.parler('2°S.', "C'est le nom du fondateur des bonnes et véritables loges.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi sert ce mot aux Apprentis ?");
        await this.parler('1°S.', "A leur faire obtenir l'entrée de la Loge.");
        await this.pause(200);
        await this.parler('V.M.', "Où avez-vous été reçu ?");
        await this.parler('2°S.', "Dans une Loge juste et parfaite, où règnent l'union, la paix et le silence.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'entendez-vous par une Loge juste et parfaite ?");
        await this.parler('1°S.', "Trois la forment, cinq la composent et sept la rendent juste et parfaite.");
        await this.pause(200);
        await this.parler('V.M.', "Comment s'appelle la Loge ?");
        await this.parler('2°S.', "La Loge de Saint Jean, et toutes les loges portent le même nom.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Pour rappeler à notre mémoire celui qui a été élu par le Grand Architecte de l'Univers pour venir annoncer la grande lumière, et que tous les Francs-Maçons ont reconnu pour leur patron.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi les Francs-Maçons célèbrent-ils aussi la fête de Saint Jean l'Évangéliste ?");
        await this.parler('2°S.', "Parce qu'il a réuni les ouvriers qui étaient dispersés.");
        await this.pause(200);
        await this.parler('V.M.', "Que représente la Loge ?");
        await this.parler('1°S.', "Le Temple de Salomon réédifié mystiquement par les Francs-Maçons.");
        await this.pause(200);
        await this.parler('V.M.', "Quelle est la figure de la Loge ?");
        await this.parler('2°S.', "Un carré long.");
        await this.pause(200);
        await this.parler('V.M.', "Quelle est sa longueur ?");
        await this.parler('1°S.', "De l'Orient à l'Occident.");
        await this.pause(200);
        await this.parler('V.M.', "Quelle est sa largeur ?");
        await this.parler('2°S.', "Du Nord au Midi.");
        await this.pause(200);
        await this.parler('V.M.', "Quelle est sa profondeur ?");
        await this.parler('1°S.', "De la surface de la terre jusqu'au centre.");
        await this.pause(200);
        await this.parler('V.M.', "Quelle est sa hauteur ?");
        await this.parler('2°S.', "Des coudées sans nombre.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'entendez-vous par là ?");
        await this.parler('1°S.', "Que la Franc-maçonnerie embrasse toute la nature, et que tous les Francs-Maçons répandus sur la surface de la terre ne forment tous ensemble qu'une seule et même loge.");
        await this.pause(200);
        await this.parler('V.M.', "Quels sont ses fondements ?");
        await this.parler('2°S.', "Trois grandes colonnes, qui sont la Sagesse pour inventer la Beauté pour orner et la Force pour exécuter.");
        await this.pause(200);
        await this.parler('V.M.', "Quelle est la manière de frapper des Francs-Maçons ?");
        await this.parler('1°S.', "Par trois coups, dont deux précipités et le dernier plus fort et détaché.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient-ils ?");
        await this.parler('2°S.', "Les deux premiers signifient l'activité du Franc-maçon pour se mettre au travail, et le troisième désigne l'attention qui lui est nécessaire pour le bien conduire.");
        await this.pause(200);
        await this.parler('V.M.', "Quel est le travail des Apprentis ?");
        await this.parler('1°S.', "De continuer celui qui leur est confié, mais non de le finir.");
        await this.pause(200);
        await this.parler('V.M.', "Quand le finiront-ils ?");
        await this.parler('2°S.', "Quand il plaira au Vénérable Maître de l'accomplir.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'est-ce que la Franc-maçonnerie ?");
        await this.parler('1°S.', "C'est une école de sagesse et de vertu qui conduit au Temple de la vérité sous le voile des symboles, ceux qui l'aiment et qui la désirent.");
        await this.pause(200);
        await this.parler('V.M.', "Quels sont ses mystères ?");
        await this.parler('2°S.', "L'origine, la fondation et le but de l'Ordre.");
        await this.pause(200);
        await this.parler('V.M.', "Que venez-vous faire en Loge comme Apprenti ?");
        await this.parler('1°S.', "Je viens apprendre à vaincre mes passions, à surmonter mes préjugés et à soumettre mes volontés aux lois de la Justice pour faire de nouveaux progrès dans la Franc-maçonnerie.");
        await this.pause(200);
        await this.parler('V.M.', "Comment voyagent les Apprentis ?");
        await this.parler('2°S.', "De l'Occident à l'Orient.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Pour chercher la lumière.");
        await this.pause(200);
        await this.parler('V.M.', "Les Apprentis peuvent-ils découvrir la lumière ?");
        await this.parler('2°S.', "Non, Vénérable Maître, car en traversant les trois régions élémentaires, ils y trouvent des obstacles qu'ils ne sauraient vaincre.");
        await this.pause(200);
        await this.parler('V.M.', "Comment peuvent-ils donc l'obtenir ?");
        await this.parler('1°S.', "Par un vrai désir qui leur en fait apercevoir le premier rayon dans la région orientale.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi ce faible rayon est-il accordé à l'Apprenti ?");
        await this.parler('2°S.', "Pour lui faire connaître les lois de la Justice, et lui apprendre qu'il doit s'y soumettre.");
        await this.pause(200);
        await this.parler('V.M.', "Est-ce là, mon Frère, le seul fruit de ses travaux ?");
        await this.parler('1°S.', "Afin d'augmenter son courage, on lui montre à l'Occident la Clémence, qui arrête les rigueurs de la Justice, lesquelles sont représentées par les glaives dont la pointe est tournée contre lui.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'apprend-il par cette épreuve ?");
        await this.parler('2°S.', "Que malgré sa faiblesse et ses erreurs, il ne doit pas désespérer d'atteindre le but de ses désirs si, en renonçant lui-même à la vengeance, il use de modération et d'indulgence envers les autres hommes.");
        await this.pause(200);
        await this.parler('V.M.', "Sur quoi travaillent les Apprentis ?");
        await this.parler('1°S.', "Sur la pierre brute pour la dégrossir.");
        await this.pause(200);
        await this.parler('V.M.', "Combien y a-t-il de parties dans le Temple ?");
        await this.parler('2°S.', "Trois, savoir le Porche, le Temple et le Sanctuaire.");
        await this.pause(200);
        await this.parler('V.M.', "Dans quelle partie avez-vous travaillé comme Apprenti ?");
        await this.parler('1°S.', "Dans le porche.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'avez-vous trouvé dans le Porche ?");
        await this.parler('2°S.', "Un escalier de 7 marches, que l'on monte par 3, 5 et 7, pour arriver à la porte du Temple.");
        await this.pause(200);
        await this.parler('V.M.', "Avez-vous monté cet escalier ?");
        await this.parler('1°S.', "J'en ai monté les 3 premières marches, mais mon temps n'étant pas encore venu, on m'a fait redescendre.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'y avez-vous trouvé de plus ?");
        await this.parler('2°S.', "Deux grandes colonnes à l'entrée du Temple, sur l'une desquelles était la lettre J.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie cette lettre ?");
        await this.parler('1°S.', "C'est la lettre initiale du mot de mon grade.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi servait cette colonne ?");
        await this.parler('2°S.', "Les Apprentis s'y rassemblaient pour recevoir leur salaire.");
        await this.pause(200);
        await this.parler('V.M.', "Avez-vous reçu le vôtre ?");
        await this.parler('1°S.', "Je suis content.");
        await this.pause(200);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se termine la première section.");
    },

    catechismeApprentisSection2: async function() {
        this._setEtape("Catéchisme Apprenti — Sect. II");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Deuxième section du catéchisme d'Apprenti.");
        await this.pause(P);
        await this.pause(P);

        await this.parler('V.M.', "En quelle qualité avez-vous été introduit en Loge et reçu Franc-maçon ?");
        await this.parler('1°S.', "J'y ai été introduit d'abord comme Cherchant. Après avoir confirmé mes bons désirs et ma ferme résolution, j'ai été reconnu Persévérant, Et lorsque je me suis livré aux épreuves, j'ai été déclaré Souffrant.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi cela ?");
        await this.parler('2°S.', "Pour m'apprendre qu'il ne suffit pas au vrai Maçon de chercher et de persévérer mais qu'il faut aussi qu'il sache souffrir pour parvenir au terme heureux de ses recherches.");
        await this.pause(200);
        await this.parler('V.M.', "Comment avez-vous obtenu l'entrée de la Loge ?");
        await this.parler('1°S.', "Par trois grands coups.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient ces trois coups ?");
        await this.parler('2°S.', "Trois passages de l'Évangile, qui sont : demandez, on vous donnera; cherchez, vous trouverez; frappez, on vous ouvrira.");
        await this.pause(200);
        await this.parler('V.M.', "Comment étiez-vous habillé en entrant en Loge ?");
        await this.parler('1°S.', "Je n'étais mi nu ni vêtu, et j'étais dépouillé de tous métaux.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi avez-vous été déshabillé ?");
        await this.parler('2°S.', "Pour m'apprendre à ne mettre aucune confiance dans les choses illusoires, et à ne pas me laisser tromper par les apparences.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi vous a-t-on privé de vos métaux ?");
        await this.parler('1°S.', "Pour m'enseigner que celui qui aime la vérité doit la préférer à toutes les choses sensibles.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie le profond silence qui a régné dans la Loge après que vous avez été remis entre les mains des Surveillants ?");
        await this.parler('2°S.', "Il m'a rappelé que les matériaux qui furent employés à la construction du Temple de Salomon avaient été si bien préparés que l'on n'entendit le bruit d'aucun outil pour les mettre en œuvre.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'avez-vous aperçu en entrant en Loge ?");
        await this.parler('1°S.', "Rien que l'esprit humain puisse comprendre, étant privé de la lumière.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi étiez-vous privé de la lumière ?");
        await this.parler('2°S.', "Parce que mes passions et les ténèbres de mon âme m'empêchaient de l'apercevoir.");
        await this.pause(200);
        await this.parler('V.M.', "Qui est ce qui vous a reçu à l'entrée de la Loge ?");
        await this.parler('1°S.', "Le Frère Second Surveillant, qui m'a ensuite été donné pour guide, après m'avoir éprouvé par le glaive appuyé sur mon cœur.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie ce glaive sur le cœur ?");
        await this.parler('2°S.', "Que le vrai Maçon doit toujours être prêt à sacrifier ce qu'il a de plus cher pour la justice et la vertu, et qu'il ne doit pas murmurer dans l'infortune.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'est-ce que le Second Surveillant a fait de vous ?");
        await this.parler('1°S.', "Il m'a fait faire trois voyages, passant par différentes routes, où j'ai subi la rigueur des éléments.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi avez-vous subi la rigueur des éléments ?");
        await this.parler('2°S.', "Le Vénérable Maître a voulu me convaincre que les éléments peuvent détruire l'être corrompu, mais qu'ils ne peuvent le régénérer ; et ensuite il a daigné me rassurer par des maximes salutaires.");
        await this.pause(200);
        await this.parler('V.M.', "où le Second Surveillant vous a-t-il conduit ensuite ?");
        await this.parler('1°S.', "Au pied de l'escalier du Temple, dont il m'a fait monter et redescendre les trois premières marches, et il m'a conduit de là à l'autel de l'Orient.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi, dans l'obscurité où vous vous trouviez, avez-vous été conduit à l'Orient ?");
        await this.parler('2°S.', "C'est le Vénérable Maître qui en a donné l'ordre, voulant m'éprouver lui-même. Cependant, je n'aurais pas eu la force d'y parvenir si je n'avais pas été conduit et soutenu par les deux Frères Surveillants.");
        await this.pause(200);
        await this.parler('V.M.', "Comment le Vénérable Maître vous a-t-il éprouvé ?");
        await this.parler('1°S.', "Il m'a fait mettre le genou droit sur l'Équerre, la main droite sur l'Évangile de Saint Jean, tenant de la gauche la pointe d'un Compas sur le cœur et dans cette attitude j'ai prononcé mon engagement à la manière des Maçons.");
        await this.pause(200);
        await this.parler('V.M.', "Que vous est-il arrivé ensuite ?");
        await this.parler('2°S.', "Le Vénérable Maître a exigé mon consentement pour subir l'épreuve du sang.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi a-t-on exigé de vous ce consentement ?");
        await this.parler('1°S.', "Pour s'assurer de ma fermeté en toute occasion, et me confirmer par mon aveu dans l'état de Souffrant.");
        await this.pause(200);
        await this.parler('V.M.', "Avez-vous effectivement scellé votre engagement de votre sang ?");
        await this.parler('2°S.', "Non, le Vénérable Maître s'est contenté de ma bonne volonté et a seulement figuré le sacrifice auquel j'avais consenti moi-même.");
        await this.pause(200);
        await this.parler('V.M.', "Comment avez-vous donc été reçu Maçon Apprenti ?");
        await this.parler('1°S.', "Par trois coups que le Vénérable Maître a frappés sur la tête du Compas dont la pointe appuyait sur mon cœur.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'a-t-on fait de vous après cela ?");
        await this.parler('2°S.', "J'ai été renvoyé à l'Occident. J'y ai reçu d'abord un faible rayon de lumière qui, en me découvrant la Justice et la Clémence, m'a fait espérer mon avancement dans l'Ordre.");
        await this.pause(200);
        await this.parler('V.M.', "Comment avez-vous pu concevoir cette espérance ?");
        await this.parler('1°S.', "Par ma soumission entière aux volontés du Vénérable Maître, qui m'a mérité son indulgence, et ensuite la lumière m'a été rendue dans tout son éclat.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie le mouvement général qui s'est fait dans la Loge avant que la lumière ne vous ait été rendue, et le bruit confus dont il était accompagné ?");
        await this.parler('2°S.', "Les efforts qu'il faut faire pour rappeler à la lumière celui que le vice a plongé dans les ténèbres.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'avez-vous aperçu lorsqu'on vous a donné la lumière ?");
        await this.parler('1°S.', "Trois grandes lumières.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient ces trois lumières ?");
        await this.parler('2°S.', "Le soleil, la lune, et le Vénérable Maître.");
        await this.pause(200);
        await this.parler('V.M.', "Quel rapport y a-t-il du soleil et de la lune avec le Vénérable Maître ?");
        await this.parler('1°S.', "Comme le soleil éclaire le monde pendant le jour et la lune pendant la nuit, de même aussi le Vénérable Maître éclaire sans cesse la Loge de ses lumières.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'avez-vous aperçu encore ?");
        await this.parler('2°S.', "Un chandelier à trois branches sur l'autel d'Orient.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi fait-il allusion ?");
        await this.parler('1°S.', "A la triple puissance qui ordonne et gouverne le monde, et qui est exprimée dans la Loge par le Vénérable Maître et les deux Surveillants.");
        await this.pause(200);
        await this.parler('V.M.', "N'avez-vous rien aperçu de plus ?");
        await this.parler('2°S.', "Le tapis de la Loge formant un carré long à l'imitation du Temple de Salomon, et réunissant tous les emblèmes mystérieux de la Maçonnerie.");
        await this.pause(200);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se termine la deuxième section.");
    },

    catechismeApprentisSection3: async function() {
        this._setEtape("Catéchisme Apprenti — Sect. III");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Troisième section du catéchisme d'Apprenti.");
        await this.pause(P);

        await this.parler('V.M.', "Pouvez-vous me donner l'explication des emblèmes mystérieux, meubles, bijoux et ornements dont se servent les Francs-Maçons ?");
        await this.parler('1°S.', "Je l'espère, mais je n'en suis pas sûr.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi répondez-vous ainsi ?");
        await this.parler('2°S.', "Parce que l'Apprenti, ne pouvant rien juger par lui-même, ne peut pas se flatter de découvrir la vérité sans le secours des Maîtres.");
        await this.pause(200);
        await this.parler('V.M.', "Combien y a-t-il de meubles emblématiques ?");
        await this.parler('1°S.', "Six, dont trois sont mobiles et trois immobiles.");
        await this.pause(200);
        await this.parler('V.M.', "Nommez les trois premiers.");
        await this.parler('2°S.', "Le Compas, la Truelle et le Maillet.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi sert le Compas ?");
        await this.parler('1°S.', "A donner aux plans de justes proportions.");
        await this.pause(200);
        await this.parler('V.M.', "Quel est l'usage de la Truelle ?");
        await this.parler('2°S.', "Les Francs-Maçons s'en servent pour élever des temples à la vertu.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi le Maillet est-il employé ?");
        await this.parler('1°S.', "Il sert aux Apprentis à travailler sur la Pierre Brute, aux Compagnons pour mettre en œuvre les matériaux déjà préparés, et dans les mains du Vénérable Maître et des Surveillants, il est l'emblème de l'union et de la fermeté qui doit diriger les travaux des ouvriers.");
        await this.pause(200);
        await this.parler('V.M.', "Quels sont les meubles immobiles ?");
        await this.parler('2°S.', "La Pierre Brute, la Pierre cubique, et la Planche à tracer.");
        await this.pause(200);
        await this.parler('V.M.', "A qui sont-ils attribués ?");
        await this.parler('1°S.', "La Pierre brute est attribuée aux Apprentis pour la dégrossir la Pierre cubique aux Compagnons pour aiguiser leurs outils, et la Planche à tracer aux Maîtres pour tracer leurs dessins.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie la Pierre brute ?");
        await this.parler('2°S.', "Elle est le symbole vrai d'un Apprenti et du travail qu'il doit faire sur lui-même pour se rendre digne de la vraie lumière.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi n'y comprenez-vous pas la Bible ?");
        await this.parler('1°S.', "La Bible n'est pas un emblème, mais elle nous enseigne la loi qui était conservée dans le sanctuaire du Temple et que tout Franc-maçon doit méditer.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie l'épée du Vénérable Maître qui était posée sur la Bible ?");
        await this.parler('2°S.', "Elle est le symbole du pouvoir qui est confié au Vénérable Maître, lequel, étant fondé sur la loi, sert de base aux travaux des Frères.");
        await this.pause(200);
        await this.parler('V.M.', "Combien y a-t-il de bijoux dans la Loge ?");
        await this.parler('1°S.', "Il y en a trois.");
        await this.pause(200);
        await this.parler('V.M.', "Quels sont-ils ?");
        await this.parler('2°S.', "L'Équerre, le Niveau et la Perpendiculaire.");
        await this.pause(200);
        await this.parler('V.M.', "A qui sont attribués ces trois bijoux ?");
        await this.parler('1°S.', "L'Équerre au Vénérable Maître, le Niveau au Premier Surveillant et la Perpendiculaire au Second Surveillant.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie l'Équerre ?");
        await this.parler('2°S.', "Elle est l'emblème de la régularité et de la perfection des travaux d'une Loge, dont le Vénérable Maître doit diriger tous les plans.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie le Niveau ?");
        await this.parler('1°S.', "Il désigne la parfaite conformité qui doit se trouver entre les travaux des Frères et les ordres du Vénérable Maître : le Frère Premier Surveillant en est décoré comme inspecteur des ouvrages, chargé de les vérifier et de rectifier les ouvriers.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie la perpendiculaire ?");
        await this.parler('2°S.', "Elle est le symbole de la solidité des ouvrages maçonniques, qui doivent être élevés exactement sur leur base. Le Frère Second Surveillant en est décoré parce qu'il est chargé de maintenir dans la Loge l'observance des lois et préceptes de l'Ordre.");
        await this.pause(200);
        await this.parler('V.M.', "Combien y a-t-il d'ornements dans la Loge ?");
        await this.parler('1°S.', "Il y en a trois, savoir le Pavé Mosaïque qui orne le seuil de la porte du Temple, le cordon à houppes dentelées qui en orne l'intérieur et l'Étoile flamboyante qui en éclaire le centre, d'où elle répand sa lumière dans toutes les parties.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi sert le Pavé Mosaïque ?");
        await this.parler('2°S.', "Il couvre l'entrée du souterrain du Temple entre les deux colonnes.");
        await this.pause(200);
        await this.parler('V.M.', "A quoi sert le cordon à houppes dentelées ?");
        await this.parler('1°S.', "Il sert à décorer la partie supérieure du voile qui sépare le Temple d'avec le sanctuaire.");
        await this.pause(200);
        await this.parler('V.M.', "Que représente l'Étoile flamboyante ?");
        await this.parler('2°S.', "Je l'ignore encore, n'ayant pu la contempler.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi le soleil et la lune sont-ils représentés sur le tapis de la Loge ?");
        await this.parler('1°S.', "Pour rappeler aux Francs-Maçons qu'ils doivent travailler jour et nuit à perfectionner leurs travaux.");
        await this.pause(200);
        await this.parler('V.M.', "Expliquez-moi l'emblème du soleil ?");
        await this.parler('2°S.', "Il représente le Vénérable Maître qui éclaire tous les Frères de la Loge de ses lumières, comme le soleil éclaire le monde.");
        await this.pause(200);
        await this.parler('V.M.', "Expliquez-moi l'emblème de la lune ?");
        await this.parler('1°S.', "Elle représente les Frères Surveillants qui, ainsi que la lune reçoit et réfléchit la lumière du soleil, reçoivent et réfléchissent celle du Vénérable Maître sur les Frères de la Loge.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie la bordure du tapis ?");
        await this.parler('2°S.', "Elle sert à renfermer les emblèmes mystérieux des Francs-Maçons, et désigne la différence extrême qui est entre les choses sacrées et les choses profanes.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient les quatre points cardinaux tracés sur le bord du tapis ?");
        await this.parler('1°S.', "Ils désignent l'universalité de l'Ordre répandu dans les quatre parties du monde, et l'union de toutes ces parties.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi le Temple de Salomon sert-il d'emblème aux Francs-Maçons ?");
        await this.parler('2°S.', "Pour leur rappeler qu'ils doivent bâtir dans leurs cœurs un Temple à la vertu et tâcher de le rendre aussi parfait que celui qui fut élevé par Salomon à la gloire du Grand Architecte de l'Univers.");
        await this.pause(200);
        await this.parler('V.M.', "Quel âge avez-vous comme Apprenti ?");
        await this.parler('1°S.', "Trois ans passés.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'entendez-vous par là ?");
        await this.parler('2°S.', "Les trois voyages mystérieux que j'ai faits autour du Temple, et les trois marches que j'ai montées pour tâcher d'y parvenir.");
        await this.pause(200);
        await this.parler('V.M.', "Comment un Franc-maçon doit-il se distinguer des autres hommes ?");
        await this.parler('1°S.', "Par une bienfaisance active et éclairée, par une façon de penser noble et élevée, par des mœurs douces et par une conduite irréprochable.");
        await this.pause(200);
        await this.parler('V.M.', "Quel est le symbole du Grade d'Apprenti ?");
        await this.parler('2°S.', "Une colonne brisée et tronquée par le haut, mais ferme sur sa base, avec cette devise « Adhuc Stat ».");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie cet emblème avec sa devise ?");
        await this.parler('1°S.', "Que l'homme est dégradé, mais qu'il lui reste des moyens suffisants pour obtenir d'être rétabli dans son état originel, et que le Maçon doit apprendre à les employer.");
        await this.pause(200);
        await this.parler('V.M.', "Combien y a-t-il de temps ou intervalles dans le jour maçonnique ?");
        await this.parler('2°S.', "Il y en a quatre, qui sont : depuis six heures du matin où commence la journée jusqu'à midi ; depuis midi jusqu'à six heures du soir ; depuis six heures du soir jusqu'à minuit ; et depuis minuit jusqu'à six heures du matin.");
        await this.pause(200);
        await this.parler('V.M.', "Comment désigne-t-on ces quatre intervalles dans la Loge ?");
        await this.parler('1°S.', "Par midi et midi plein en commençant le travail, et par minuit et minuit plein en le finissant.");
        await this.pause(200);
        await this.parler('V.M.', "Combien comprenez-vous d'heures dans chaque intervalle ?");
        await this.parler('2°S.', "Il y a six heures et un temps, en similitude des six années qui furent employées pour la construction du Temple, et du septième temps ou année qui fut employée par Salomon pour en faire la dédicace, et aussi des sept jours de la semaine dont le septième est consacré au Seigneur.");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi répondez-vous que c'est la douzième heure lorsqu'on se rassemble dans la Loge, et pourquoi donnez-vous l'heure de convention humaine lorsqu'on en sort ?");
        await this.parler('1°S.', "Parce que l'intervalle de la clôture à l'ouverture des travaux désigne le temps qui est employé aux occupations profanes, pendant lequel tout travail maçonnique est suspendu.");
        await this.pause(200);
        await this.parler('V.M.', "Qu'entendez-vous par là ?");
        await this.parler('2°S.', "Que le Maçon doit désirer le temps où il pourra sans relâche employer les heures, les jours, les mois et les années à perfectionner son travail.");
        await this.pause(200);
        await this.parler('V.M.', "Mes Frères, le temps fuit et s'efface à nos yeux, mais il est toujours en présence du Grand Architecte de l'Univers ; devant lui tous les instants seront à jamais marqués par nos actions, Employons donc dès à présent avec sagesse ceux qui nous sont accordés pour faire le bien, Ne les consumons pas en vain dans l'oisiveté ou dans des occupations frivoles et ne nous écartons jamais envers nos Frères ni envers les autres hommes des lois de la justice et de la charité");
        await this.pause(200);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se termine la troisième section.");
    },

    // ── INSTRUCTION MORALE — GRADE D'APPRENTI ─────────────────────────────────
    instructionMoraleApprentis: async function() {
        this._setEtape("Instruction Morale — Apprenti");
        const P = this.PAUSE_ACTION;

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Orateur, la Loge vous demande de donner lecture de l'instruction morale du grade.");
        await this.pause(P);

        this.action("Instruction morale du grade d'Apprenti Franc-Maçon — avec l'explication du cérémonial de réception.");
        await this.parler('Orateur', "Mon Cher Frère,");
        await this.pause(300);

        await this.parler('Orateur', "Votre réception dans notre Ordre est un des événements les plus importants de votre vie. Confondu, il n'y a qu'un moment dans la foule des mortels qui végètent sur la surface de la terre, vous venez d'en être séparé. Dès aujourd'hui vous formez avec nous une classe distincte d'hommes voués, par goût et par devoir à l'exercice des vertus et à l'étude des connaissances qui y conduisent. Vous voyez la lumière, mon Cher Frère, mais elle ne paraît luire que pour vous reprocher votre ignorance. Vous avez été soumis à des épreuves et à des cérémonies dont la signification vous est inconnue, et vous voyez devant vous des emblèmes et des hiéroglyphes dont le sens vous est encore caché. Le voile qui couvre nos mystères ne pourra être levé devant vous qu'à mesure que votre intelligence le percevra, le premier instant de votre entrée dans l'Ordre ne peut y suffire. Leur développement parfait sera donc un jour la récompense de votre zèle, de vos vertus et de votre persévérance.");
        await this.pause(300);
        await this.parler('Orateur', "Cependant, chargé aujourd'hui par la Respectable Loge du soin de vous instruire sur les principales circonstances de votre réception, je vous dois les explications qui conviennent à votre grade. Écoutez-les donc attentivement : elles sont faites pour élever votre esprit, nourrir votre cœur et exercer longtemps votre intelligence.");
        await this.pause(300);
        await this.parler('Orateur', "On a commencé par vous conduire dans un endroit sombre, écarté et solitaire, où vous vous êtes trouvé également séparé de ceux que vous veniez de quitter et de ceux vers qui vous portiez vos désirs. On a voulu vous enseigner par-là que c'est dans le silence, la retraite et le calme des sens, que le sage se dépouille des passions, des préjugés, et qu'il fait des pas assurés dans le sentier de la vertu et de la vérité.");
        await this.pause(300);
        await this.parler('Orateur', "L'image de la mort vous y a été offerte pour vous apprendre que, pour bien vivre, l'homme doit penser souvent à l'instant où il quittera cette vie.");
        await this.pause(300);
        await this.parler('Orateur', "Les trois questions qui vous y ont été proposées à méditer, tendaient à vous faire entrevoir ce que doit être un vrai Maçon, ainsi que la base de tous ses devoirs. Et le Vénérable Maître vous a de nouveau présenté les mêmes objets dans les trois maximes que vous en avez reçues dans le cours de vos voyages.");
        await this.pause(300);
        await this.parler('Orateur', "Les précautions qu'on a prises dans votre préparation pour s'assurer de vos vrais motifs et de vos dispositions vous prouvent l'excellence de l'Ordre et la sublimité de ses travaux, qui exigent la circonspection la plus scrupuleuse dans le choix des membres admis à participer à ses mystères.");
        await this.pause(300);
        await this.parler('Orateur', "On vous a demandé votre épée, symbole de la force, pour vous apprendre, en vous la rendant, le seul vrai et légitime usage que vous devez en faire comme Maçon.");
        await this.pause(300);
        await this.parler('Orateur', "On vous a ôté le chapeau, symbole de la supériorité, pour vous préparer à la docilité que vous devrez à ceux qui seront chargés de vous instruire et de vous diriger.");
        await this.pause(300);
        await this.parler('Orateur', "Toutes les jouissances figurées par les bijoux et les métaux sont sujettes aux vicissitudes de la fortune, et souvent exposent l'homme à des privations pénibles. On vous en a dépouillé pour vous faire sentir les dangers d'y être trop attaché, et pour vous apprendre qu'il faut vous replier sur vous-même pour vous procurer des jouissances plus vraies et plus durables.");
        await this.pause(300);
        await this.parler('Orateur', "On vous a dépouillé de vos vêtements, et vous êtes entré en Loge ni nu ni vêtu. On vous a appris par-là que, malgré les différences extérieures les hommes, provenant de la même source, naissent tous égaux, et qu'ils n'acquièrent entre eux de distinction réelle que celle que donnent le mérite et la vertu. Mais si le Maçon éclairé a le droit d'apprécier une telle distinction, il est aussi de son devoir de respecter partout les différences d'état et de rang déterminées ou permises par la divine Providence.");
        await this.pause(300);
        await this.parler('Orateur', "Enfin, on vous a bandé les yeux. Dans cet état d'obscurité on vous a conduit à la porte de la Loge, vous y avez été annoncé par trois coups pour un Cherchant, et ces trois coups vous en ont procuré l'entrée.");
        await this.pause(300);
        await this.parler('Orateur', "Vous sentiez en effet votre ignorance sur nos mystères. On s'était assuré que vous désiriez sincèrement en sortir dans l'espérance de vous améliorer parmi nous, et qu'inquiet de votre état, vous cherchiez la route la plus prompte et la plus sûre pour découvrir la lumière. Mais une vaine curiosité pouvait vous distraire, une fausse lumière pouvait vous égarer : on vous a réduit à vous laisser guider par ceux à qui vous livriez votre confiance, et vous en avez reçu le prix. Les trois coups vous ont appris qu'avec des désirs purs et ardents on ne demande pas, on ne cherche pas, on ne frappe pas en vain, et l'entrée de la Loge vous a été ouverte. Continuez donc à demander à chercher et à frapper avec de tels sentiments, c'est le seul moyen d'arriver au terme heureux de vos espérances.");
        await this.pause(300);
        await this.parler('Orateur', "Introduit en Loge en qualité de Persévérant, vous avez été livré entre les mains d'un guide qui vous était inconnu. Mais il connaissait vos désirs, et son devoir était de les seconder le Vénérable Maître lui en a donné l'ordre, et vous a excité à prendre en lui, la plus entière confiance. Pouviez-vous la lui refuser ? Vous étiez dans les ténèbres, et vous ne pouviez en sortir que par son Secours.");
        await this.pause(300);
        await this.parler('Orateur', "Le Vénérable Maître, après s'être assuré de la sincérité de vos désirs, de la fermeté de vos résolutions, et du consentement de la Loge, vous a livré aux épreuves antiques qu'il était indispensable de vous faire subir et sans lesquelles vous ne pouviez pas être reçu. Ces épreuves vous ont été figurées par trois voyages mystérieux que l'on vous a fait faire par diverses routes dans l'obscurité autour de la Loge, ayant la pointe d'une épée nue sur le cœur. Mais vous n'auriez pu les faire sans un guide sûr et fidèle pour diriger votre marche : ce guide vous a été donné, il ne vous abandonnera jamais si vous ne le fuyez vous-même. Le Second Surveillant a été chargé de vous retracer sensiblement ses fonctions dans le cours de vos voyages. Mais avant de les commencer vous avez été déclaré Souffrant.");
        await this.pause(300);
        await this.parler('Orateur', "Mon Cher Frère, il n'est point rare de voir les hommes désirer, chercher et persévérer dans leurs désirs. La curiosité seule peut en être souvent le mobile, tous les hommes veulent savoir et connaître, et la plupart d'entre eux se font illusion sur les motifs de leurs recherches ; ils se flattent de la faire passer de même dans l'esprit de ceux dont le secours leur serait nécessaire. Mais un œil exercé ne s'y trompe pas, on reste sourd à leurs demandes, et ils restent entourés de muets tant que l'on ne voit pas en eux le signe caractéristique de la sincérité et de la pureté de leurs désirs. Mais il est bien plus rare de les voir consentir volontairement à souffrir pour trouver à faire tous les sacrifices de l'amour-propre, des préjugés et des privations pénibles que l'amour de la vérité suggère et qu'elle exige. C'est cependant là le seul caractère du vrai désir et de la persévérance ; voilà pourquoi, mon cher Frère, on vous a déclaré Souffrant.");
        await this.pause(300);
        await this.parler('Orateur', "Ces trois états de Cherchant, de Persévérant et de Souffrant sont tellement liés dans l'homme de désir qu'on a cru devoir vous les rappeler ensemble en vous les retraçant par chacun de vos voyages. Les trois voyages dans l'obscurité vous ont figuré la carrière pénible que l'homme doit parcourir les travaux immenses qu'il a à faire sur son esprit et sur son cœur et l'état de privation où il se trouve lorsqu'il est abandonné à ses propres lumières. L'épée sur le cœur désigne le danger des illusions auxquelles il est exposé pendant sa course passagère, illusions qu'il ne peut repousser qu'en veillant et en épurant sans cesse ses désirs. Les ténèbres qui vous environnaient vous désignent aussi celles qui couvraient toutes choses dans le principe de leur formation. Enfin le guide inconnu qui vous a été donné pour faire cette route vous figure ce rayon de lumière qui est inné dans l'homme, par lequel seul il sent l'amour de la vérité et peut parvenir jusqu'à son Temple.");
        await this.pause(300);
        await this.parler('Orateur', "Destiné à entrer dans ce Temple, on vous en a fait monter les trois premières marches. Mais, votre temps n'étant pas encore venu, la porte est restée fermée ; on vous a fait redescendre. Le Vénérable Maître vous a invité à ne pas vous décourager par les obstacles. Cependant, par cette première tentative, vous avez acquis l'âge de trois ans, premier nombre mystérieux de l'Ordre.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez été conduit par trois pas d'équerre à l'Orient, et là, après avoir été interpellé trois fois de déclarer si c'était bien par un pur et libre effet de votre volonté que vous demandiez à être reçu, le genou droit sur l'Équerre et la pointe du Compas sur le cœur vous avez solennellement pris à témoin le Grand Architecte de l'Univers de vos engagements.");
        await this.pause(300);
        await this.parler('Orateur', "Les trois pas maçonniques qui vous ont porté à l'Orient vous annoncent ce que vous devez à l'auteur de toutes choses, à vos Frères et à vous-même. L'Équerre vous désigne que si vous remplissez avec exactitude et régularité tous ces devoirs, vous devez espérer de parvenir à la lumière du vrai Orient.");
        await this.pause(300);
        await this.parler('Orateur', "L'interpellation qui vous a été faite vous apprend que si l'homme a perdu la lumière par l'abus de sa liberté, il peut la recouvrer par une volonté ferme et inébranlable dans la pratique du bien. Le Compas sur le cœur est l'emblème de la vigilance avec laquelle vous devez réprimer vos passions et régler vos désirs. Et votre engagement vous lie irrévocablement à tout ce que vous avez promis à Dieu et à vos Frères.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez prononcé cet engagement tenant la main droite sur l'Évangile et sur l'épée du Vénérable Maître qui était posée dessus. L'Évangile est la loi du Maçon, qu'il doit sans cesse méditer et suivre. L'épée qui était posée par-dessus signifie la force de la Foi en la parole de la vérité, sans laquelle la loi seule ne saurait conduire le Maçon à la vraie lumière.");
        await this.pause(300);
        await this.parler('Orateur', "Je dois vous prévenir ici qu'une sage précaution, dictée par la prudence, a fait changé dans une assemblée générale de l'Ordre l'ancienne formule du serment maçonnique usitée jusqu'alors, et qu'à cette époque on y a substitué celle de l'engagement que vous avez prononcé. Cependant, comme l'ancienne formule pourrait avoir quelque rapport aux mystères de l'Ordre, le Convent Général, en l'abolissant pour la pratique, arrêta néanmoins qu'elle serait conservée dans l'instruction que vous recevez maintenant. Il est donc de mon devoir de vous en donner lecture.");
        await this.pause(300);
        await this.parler('Orateur', "Ancienne formule du serment des Apprentis Maçons : « Moi, N.N, je jure et promets sur le Saint Évangile, en face de Dieu tout-puissant, Grand Architecte de l'Univers, et devant cette respectable assemblée de Francs-Maçons, de ne jamais révéler par aucun écrit, gravure, imprimerie ou paroles, dans quelque langue ou caractère que ce soit, et de ne pas donner occasion qu'il soit révélé par quel qu'autre, aucun des mystères qui vont m'être confiés aujourd'hui ou qui pourront l'être à l'avenir concernant la Franc-maçonnerie. »");
        await this.pause(300);
        await this.parler('Orateur', "« Je promets de même de ne pas me faire connaître pour Maçon à qui que ce soit que je n'aurai pas reconnu pour tel et appartenant à une vraie et parfaite Loge, après m'en être assuré par les recherches les plus sûres et l'avoir éprouvé par les signes et moyens usités, comme aussi de ne jamais entrer ni fréquenter aucune Loge dont l'authenticité ne serait pas reconnue à toute épreuve. »");
        await this.pause(300);
        await this.parler('Orateur', "« Et si jamais je venais à manquer à mon présent engagement, je consens dès à présent d'avoir la tête coupée, le cœur arraché ainsi que la langue et les entrailles, mon corps brûlé et mes cendres jetées au vent, afin qu'il ne reste plus aucune mémoire de moi parmi les hommes ni parmi les Francs-Maçons. Ainsi que Dieu me soit en aide. »");
        await this.pause(300);
        await this.parler('Orateur', "Je reviens à l'explication des cérémonies de votre réception. On a exigé votre consentement pour sceller de votre sang votre engagement, mais le Vénérable Maître s'est contenté de votre bonne volonté, et votre sang n'a point été versé.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez été reçu Franc-maçon par trois coups de maillet sur le Compas dont la pointe était posée sur votre cœur. Le sang vous rappelle que ce fut par l'effusion du sang que l'alliance du Seigneur fut formée avec Abraham, père du peuple choisi ; que ce fut par le sang que la loi donnée à Moïse sur le Sinaï fut pratiquée dans le Temple ; que c'est enfin par le sang que la loi de grâce a été établie et propagée. Les trois coups sur le cœur vous désignent l'union presque inconcevable qui est en vous de l'esprit, de l'âme et du corps, qui est le grand mystère de l'homme et du Maçon, figuré par le Temple de Salomon.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez été ensuite renvoyé à l'Occident pour y recevoir la lumière, mais le premier rayon a été si faible qu'à peine avez-vous pu distinguer les objets. Il a suffi cependant pour vous faire apercevoir les épées qui étaient tournées contre vous. Mon Cher Frère, ces épées désignent les dangers infinis qui environnent l'homme dans sa sombre demeure, et qu'il n'aperçoit que lorsqu'il commence à se connaître.");
        await this.pause(300);
        await this.parler('Orateur', "Le faible rayon de lumière que vous avez reçu est une des plus importantes leçons que l'Ordre puisse vous donner. Vous sortiez d'une profonde obscurité, qui vous retraçait les ténèbres dans lesquelles est plongé l'homme qui ne s'est pas encore étudié, et qui croit néanmoins tout connaître. Vous désiriez la lumière, mais vos yeux étaient trop faibles pour la contempler dans son éclat. On a dû vous y préparer par d'utiles précautions. Accoutumez-vous de bonne heure, mon Cher Frère, à penser que, quoiqu'elle soit faite pour éclairer tous les hommes, cependant tous les yeux ne sont pas également disposés à la recevoir. Les préjugés forment souvent une barrière impénétrable à sa clarté. Sa force est victorieuse lorsqu'elle se déploie, mais il faut provoquer cette force par des désirs bien épurés, et malheureusement plusieurs Maçons prennent leur curiosité pour un vrai désir et se croient dignes de tout. Évitez cet écueil, il pourrait vous devenir funeste en vous faisant négliger les qualités essentielles que vous devez soigneusement acquérir. Évitez surtout de vous ériger en juge de votre propre mérite. Travaillez seulement comme Apprenti à mériter tout ce qui pourrait vous être utile, et reposez-vous sur le soin des Maîtres, dont le devoir sera d'aller au-devant de vous lorsqu'ils vous rencontreront sur la route qui conduit vers eux. On vous a replongé dans l'obscurité, on vous a ensuite rendu la lumière dans tout son éclat, et dès lors vous avez vu distinctement tous les Frères armés pour votre défense, et tous les autres objets que la Loge pouvait vous offrir.");
        await this.pause(300);
        await this.parler('Orateur', "On vous a appris par là que, toute faible qu'est la lumière que l'homme apporte en naissant, s'il la néglige il peut la perdre en entier et tomber dans de plus épaisses ténèbres, mais aussi qu'il peut l'accroître beaucoup par le bon usage qu'il en fait, et qu'il doit même espérer de découvrir par elle la vérité, malgré les nuages épais qui la cachent aux yeux du vulgaire. C'est alors qu'ouvrant les yeux à un nouveau jour il voit avec admiration et étonnement la multitude des secours que la bonté divine a établis autour de lui pour le diriger et pour le défendre.");
        await this.pause(300);
        await this.parler('Orateur', "La flamme qui a brûlé devant vous et qui est passée comme un éclair vous apprend que celui qui s'enorgueillit de ses talents et de ses découvertes peut en perdre bientôt tous les avantages, et que les honneurs et la gloire de ce monde s'échappent devant lui comme une ombre, ne laissant dans son cœur que des regrets.");
        await this.pause(300);
        await this.parler('Orateur', "Les Surveillants vous ont reconduit à l'Orient, et vous y avez reçu des mains du Vénérable Maître l'habit caractéristique des Maçons, et les signes, l'attouchement et le mot de votre grade pour vous faire reconnaître.");
        await this.pause(300);
        await this.parler('Orateur', "L'Orient maçonnique signifie la source et le principe de la lumière que cherche le Maçon. Elle vous a été représentée par le chandelier à trois branches qui brûlait sur l'autel d'Orient comme étant l'emblème de la triple puissance du Grand Architecte de l'Univers. Cette lumière est le premier vêtement de l'âme, l'habit qu'on vous a donné n'en est que la figure et sa blancheur en désigne la pureté. Le signe qu'on vous a donné, séparant la tête d'avec le buste, vous rappelle la supériorité originelle de l'homme sur tous les animaux ; gardez-vous donc d'assimiler sa nature à la leur.");
        await this.pause(300);
        await this.parler('Orateur', "L'attouchement est le signe de l'union fraternelle que vous avez formée avec tous les membres de l'Ordre, et le mot que vous avez reçu vous rappelle le principe créateur de toutes choses.");
        await this.pause(300);
        await this.parler('Orateur', "On vous a reconduit à l'Occident pour vous faire reconnaître en votre nouvelle qualité par les Frères Surveillants et votre Proposant, et ils ont scellé cette reconnaissance d'un baiser fraternel. Mais, mon Cher Frère, si dans l'un vous avez retrouvé celui qui avait été votre premier conseil, vous avez dû reconnaître parmi les autres celui que le Vénérable Maître vous avait donné pour guide dans vos plus pressants besoins, et certainement il a un droit particulier à votre reconnaissance. Je laisse à votre spéculation le soin d'expliquer tout ce qu'il y a d'important pour vous dans cet emblème.");
        await this.pause(300);
        await this.parler('Orateur', "Enfin le Vénérable Maître a chargé ce guide fidèle de vous apprendre à travailler sur la Pierre Brute et, dirigé par lui, vous avez essayé vos forces dans ce travail par la batterie de votre grade. Cette Pierre brute est l'emblème de l'Apprenti Maçon qui, sortant du tumulte des sociétés profanes, commence à se connaître, à sentir son ignorance, et reconnaît le pressant besoin de travailler sérieusement à améliorer tout son être. La batterie de trois coups inégaux par laquelle vous avez commencé ce travail vous indique les moyens de le faire avec fruit. Les deux premiers coups précipités désignent la loi de nature qui fut donnée à l'homme pour le diriger dans le premier âge du monde et la loi écrite qui fut donnée à Moïse sur le mont Sinaï pour le second âge. Mais le dernier coup détaché vous indique la perfection de la loi de grâce pour le troisième, et la force qui résulte pour le chrétien de la réunion de toutes et de l'accomplissement des deux premières.");
        await this.pause(300);
        await this.parler('Orateur', "Le tapis que vous voyez devant vous représente le Temple Fameux qui fut élevé à Jérusalem par le Roi Salomon à la gloire du Grand Architecte de l'Univers. Il est le type fondamental de la Franc-maçonnerie et l'objet continuel des profondes méditations des Maçons. Vous ne sauriez donc trop vous attacher à étudier le sens de tous les symboles qu'il vous offre.");
        await this.pause(300);
        await this.parler('Orateur', "Je n'entrerai point dans le détail de leur explication, elle vous sera donnée par l'instruction particulière qui s'y rapporte, et que vous allez entendre.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez amplement reçu, mon Cher Frère, matière à réflexion. Travaillez donc par vous-même à pénétrer le sens de nos mystères, mais défiez-vous d'une curiosité indiscrète qui ne pourrait que vous égarer. Méditez souvent les questions et les maximes qui vous ont été présentées aujourd'hui, ne négligez point les secours qui vous sont offerts pour assurer vos pas dans la carrière que vous venez de commencer. Choisissez vos modèles, et consultez souvent ceux qui vous auront paru les plus dignes de votre choix d'après ces principes.");
        await this.pause(300);
        await this.parler('Orateur', "Je ne doute pas, mon Cher Frère, qu'en suivant cette voie vous ne bénissiez un jour le moment où on a ouvert vos yeux à la lumière.");
        await this.pause(300);

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Je remercie le Frère Orateur. Mes Frères, méditez ces enseignements.");
    },


    // ── RÈGLE EN 9 ARTICLES — GRADE D'APPRENTI ──────────────────────────────
    regleApprentis: async function() {
        this._setEtape("Règle — Apprenti");
        const P = this.PAUSE_ACTION;

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Orateur, la Loge vous demande de donner lecture de la Règle Maçonnique.");
        await this.pause(P);

        this.action("À la Gloire du Grand Architecte de l'Univers.");
        this.action("Prologue.");
        await this.parler('Orateur', "O TOI qui viens d'être initié aux leçons de la sagesse ! Fils de la vertu et de l'amitié ! Prête à nos accents une oreille attentive, et que ton âme s'ouvre aux préceptes mâles de la vérité ! nous t'enseignerons le chemin qui mène à la vie heureuse ; nous t'apprendrons à plaire à ton Auteur et à développer, avec énergie et succès, tous les moyens que la Providence te confia pour te rendre utile aux hommes et goûter les charmes de la bienfaisance.");
        await this.pause(P);

        this.action("Article I — Devoirs envers Dieu et la Religion.");
        await this.parler('Orateur', "TON premier hommage appartient à la divinité. Adore l'Etre plein de majesté qui créa l'univers par un acte de sa volonté, qui le conserve par un effet de son action continue, qui remplit ton cœur, mais que ton esprit borné ne peut concevoir, ni définir. Plains le triste délire de celui qui ferme ses yeux à la lumière et se promène dans les ténèbres épaisses du hasard : que ton cœur, attendri et reconnaissant des bienfaits paternels de ton Dieu, rejette avec mépris ces vains sophismes, qui prouvent la dégradation de l'esprit humain lorsqu'il s'éloigne de sa source. Elève souvent ton âme au-dessus des êtres matériels qui t'environnent et jette un regard plein de désir dans les régions supérieures, qui sont ton héritage et ta vraie patrie. Fais à ce dieu le sacrifice de ta volonté et de tes désirs, rends-toi digne de ses influences vivifiantes, remplis les lois qu'il voulut que tu accomplisses comme homme dans ta carrière terrestre. Plaire à ton Dieu, voilà ton bonheur ; être réuni à jamais à Lui, voilà toute ton ambition, la boussole de tes actions.");
        await this.pause(300);
        await this.parler('Orateur', "MAIS comment oserais-tu soutenir ses regards, être fragile ! qui transgresse à chaque instant ses lois et offense sa sainteté, si sa bonté paternelle ne t'eût ménagé un Réparateur infini ? Abandonné aux égarements de ta raison, où trouverais-tu la certitude d'un avenir consolant ? Livré à la justice de ton Dieu, où serait ton refuge ? Rends donc grâce à ton Rédempteur ; prosterne-toi devant le Verbe incarné et bénis la Providence qui te fit naître parmi les chrétiens. Professe en tous lieux la divine Religion de Christ et ne rougis jamais de lui appartenir. L'Evangile est la base de nos obligations ; si tu n'y croyais pas, tu cesserais d'être maçon. Annonce dans toutes tes actions une piété éclairée et active, sans hypocrisie, sans fanatisme ; le Christianisme ne se borne pas à des vérités de spéculation : pratique tous les devoirs moraux qu'il enseigne et tu seras heureux ; tes contemporains te béniront et tu paraîtras sans trouble devant le trône de l'Eternel.");
        await this.pause(300);
        await this.parler('Orateur', "SURTOUT, pénètre-toi de ce principe de charité et d'amour, base de cette sainte religion : plains l'erreur sans la haïr et sans la persécuter ; laisse à Dieu seul le soin de juger, et contente-toi d'aimer et de tolérer. Maçons ! Enfants d'un même Dieu, réunis par une croyance commune entre notre divin Sauveur, que ce lien d'amour nous unisse étroitement et fasse disparaître tout préjugé contraire à notre concorde fraternelle.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article II — Immortalité de l'Âme.");
        await this.parler('Orateur', "HOMME ! Roi du monde ! Chef-d'œuvre de la création lorsque Dieu l'anima de son souffle ! Médite ta sublime destination. Tout ce qui végète autour de toi et n'a qu'une vie animale, périt avec le temps et est soumis à ton empire ; ton âme immortelle, seule, émanée du sein de la Divinité, survit aux choses matérielles et ne périra point. Voilà ton vrai titre de noblesse ; sens vivement ton bonheur, mais sans orgueil ; il perdit ta race et te replongerait dans l'abîme. Être dégradé ! malgré ta grandeur primitive et relative, qu'es-tu devant l'Eternel ? Adore-le dans la poussière et sépare avec soin ce principe céleste et indestructible des alliages étrangers ; cultive ton âme immortelle et perfectible, et rends la susceptible d'être réunie à la source pure du bien, lorsqu'elle sera dégagée des vapeurs grossières de la matière. C'est ainsi que tu seras libre au milieu des fers, heureux au sein même du malheur, inébranlable au plus fort des orages et que tu mourras sans frayeur.");
        await this.pause(300);
        await this.parler('Orateur', "MAÇON ! si jamais tu pouvais douter de la nature immortelle de ton âme et de ta haute destination, l'initiation serait sans fruit pour toi ; tu cesserais d'être le fils adoptif de la sagesse et tu serais confondu dans la foule des êtres matériels et profanes qui tâtonnent dans les ténèbres.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article III — Devoirs envers le Souverain et la Patrie.");
        await this.parler('Orateur', "L'ETRE suprême confia d'une manière plus positive ses pouvoirs sur la terre au Souverain ; respecte et chéris son autorité légitime sur le coin de la terre que tu habites ; ton premier hommage appartient à Dieu ; le second à la Patrie. L'HOMME errant dans les bois, sans culture et fuyant ses semblables, serait peu propre à remplir les vues de la Providence, et à saisir toute la masse du bonheur qui lui est réservée. Son être s'agrandit au milieu de ses semblables ; son esprit se fortifie par le choc des opinions ; mais une fois réuni en société, il aurait à combattre sans cesse l'intérêt personnel et les passions désordonnées, et l'innocence bientôt succomberait sous sa force ou sous la ruse. Il fallut donc des lois pour le guider et des chefs pour les maintenir.");
        await this.pause(300);
        await this.parler('Orateur', "HOMME sensible ! tu révères tes parents ; honore de même les pères de l'Etat et prie pour leur conservation ; ils sont les représentants de la Divinité sur cette terre. S'ils s'égarent, ils en répondront au Juge des Rois ; mais ton propre sentiment peut te tromper et jamais ne te dispenser d'obéir. Si tu manquais à ce devoir sacré, si ton cœur ne tressaillait plus au doux nom de Patrie et de ton Souverain, le maçon te repousserait de son sein comme réfractaire à l'ordre public, comme indigne de participer aux avantages d'une association qui mérité la confiance et l'estime des gouvernements, puisqu'un de ses principaux mobiles est le patriotisme et que, jalouse de former les meilleurs citoyens, elle exige que ses enfants remplissent, avec le plus de distinction et par les motifs les plus épurés, tous les devoirs de leur état civil. Le guerrier le plus courageux, le juge le plus intègre, le maître le plus doux, le serviteur le plus fidèle, le père le plus tendre, l'époux le plus constant, le fils le plus soumis doit être le maçon, puisque les obligations ordinaires et communes du citoyen ont été sanctifiées et renforcées par les cœurs libres et volontaires du maçon et qu'en les négligeant il joindrait à la faiblesse l'hypocrisie et le parjure.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article IV — Devoirs envers l'Humanité en général.");
        await this.parler('Orateur', "MAIS si le cercle patriotique qui t'ouvre une carrière si féconde et si satisfaisante ne remplit pas encore toute ton activité ; si ton cœur sensible veut franchir les bornes des empires et embraser avec ce feu électrique de l'humanité tous les hommes, toutes les nations ; si, remontant à la source commune, tu te plais à chérir tendrement tous ceux qui ont les mêmes organes, le même besoin d'aimer, le même désir d'être utile et une âme immortelle comme toi, viens alors dans nos temples offrir tes hommages à la sainte humanité ; l'univers est la patrie du maçon et rien de ce qui regarde l'homme ne lui est étranger.");
        await this.pause(300);
        await this.parler('Orateur', "VOIS avec respect cet édifice majestueux, destiné à resserrer les liens trop relâchés de la morale ; chéris une association générale d'âmes vertueuses, capables de s'exalter, répandue dans tous les pays, où la raison et les lumières ont pénétré, réunie sous la bannière sainte de l'humanité, régie par des lois simples et uniformes. Sens enfin le but sublime de notre saint Ordre ; consacre ton activité et toute ta vie à la bienfaisance ; ennoblis, épure et fortifie cette généreuse résolution en travaillant sans relâche à ta perfection, te réunissant plus intimement à la Divinité.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article V — Bienfaisance.");
        await this.parler('Orateur', "CREE à l'image de Dieu qui a daigné se communiquer aux hommes et répandre sur eux le bonheur ; rapproche-toi de ce modèle infini par une volonté constante de verser sans cesse sur les autres hommes toute la masse de bonheur qui est en ton pouvoir ; tout ce que l'esprit peut concevoir de bien est le patrimoine du maçon.");
        await this.pause(300);
        await this.parler('Orateur', "VOIS la misère impuissante de l'enfance, elle réclame ton appui ; considère l'inexpérience funeste de la jeunesse, elle sollicite tes conseils ; mets ta félicité à la préserver des erreurs et des séductions qui la menacent ; excite en elle les étincelles du feu sacré du génie, aide la à les développer pour le bonheur du monde.");
        await this.pause(300);
        await this.parler('Orateur', "TOUT être qui souffre ou gémit a des droits sacrés sur toi ; garde-toi de les méconnaître, n'attends point que le cri perçant de la misère te sollicite ; préviens et rassure l'infortuné timide ; n'empoisonne pas, par l'ostentation de tes dons, les sources d'eau vive où le malheureux doit se désaltérer ; ne cherche pas la récompense de ta bienfaisance dans les vains applaudissements de la multitude ; le maçon la trouve dans le suffrage tranquille de sa conscience et dans le sourire fortifiant de la Divinité, sous les yeux de laquelle il est sans cesse placé.");
        await this.pause(300);
        await this.parler('Orateur', "SI la Providence libérale t'a accordé quelque superflu, garde-toi d'en faire un usage frivole et criminel ; elle voulut que, par un mouvement libre et spontané de ton âme généreuse, tu rendisses moins sensible la distribution inégale des biens, qui entrait dans ses plans ; jouis de cette belle prérogative. Que jamais l'avarice, la plus sordide des passions, n'avilisse ton caractère, et que ton cœur se soulève aux calculs froids et arides qu'elle suggère. Si jamais il venait à se dessécher à son souffle triste et intéressé, fuis nos ateliers de charité ; ils seraient sans attrait pour toi et nous ne pourrions plus reconnaître en toi l'ancienne image de la Divinité.");
        await this.pause(300);
        await this.parler('Orateur', "QUE ta bienfaisance soit éclairée par la religion, la sagesse et la prudence ; ton cœur voudrait embrasser les besoins de l'humanité, mais ton esprit doit choisir les plus pressants et les plus importants Instruits, conseille, protège, donne, soulage tour à tour ; ne crois jamais avoir assez fait et ne te repose de tes œuvres que pour montrer une nouvelle énergie. En te livrant ainsi aux élans de cette passion sublime, une source intarissable de jouissances s'apprête pour toi : tu auras sur cette terre l'avant-goût de la félicité céleste, ton âme s'agrandira et tous les instants de ta vie seront remplis.");
        await this.pause(300);
        await this.parler('Orateur', "LORSQU'ENFIN tu sens les bornes de ta nature finie, et que ne pouvant suffire seul au bien que tu voudrais faire, ton âme s'attriste, viens dans nos temples ; vois le faisceau sacré de bienfaits qui nous unit et concourant efficacement, selon toutes tes facultés, aux plans et aux établissements utiles que l'association maçonnique te présente et qu'elle réalise, félicite-toi d'être citoyen de ce meilleur monde ; goûte les doux fruits de nos forces combinées et concentrées sur un même objet ; alors tes ressources se multiplieront, tu aideras à faire mille heureux au lieu d'un, et ton cœur sera couronné.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article VI — Autres devoirs moraux envers les hommes.");
        await this.parler('Orateur', "AIME ton prochain autant que toi-même et ne lui fais jamais ce que tu ne voudrais pas qu'on te fit. Sers-toi du don sublime de la parole, signe extérieur de ta domination sur la nature, pour aller au-devant des besoins d'autrui et pour exciter dans tous les cœurs le feu sacré de la vertu. Sois affable et officieux, édifie par ton exemple ; partage la félicité d'autrui sans jalousie. Ne permets jamais à l'envie de s'élever un instant dans ton sein, elle troublerait la source pure de ton bonheur et ton âme serait en proie à la plus triste des furies.");
        await this.pause(300);
        await this.parler('Orateur', "PARDONNE à ton ennemi ; ne t'en venge que par tes bienfaits ; ce sacrifice généreux, dont nous devons le sublime précepte à la religion, te procurera les plaisirs les plus purs et les plus délicieux; tu redeviendras l'image de la Divinité qui pardonne avec une bonté céleste les offenses de l'homme, et le comble de grâces malgré son ingratitude. Rappelle-toi donc toujours que c'est là le triomphe le plus beau, que la raison puisse obtenir sur l'instinct, et que le maçon oublie les injures, mais jamais les bienfaits.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article VII — Perfection morale de soi-même.");
        await this.parler('Orateur', "EN te dévouant ainsi au bien d'autrui, n'oublie point ta propre perfection et ne néglige pas de satisfaire les besoins de ton âme immortelle. Descends souvent dans ton cœur, pour en sonder les replis les plus cachés. La connaissance de soi-même est le grand pivot des préceptes maçonniques. Ton âme est la pierre brute qu'il faut dégrossir ; offre à la Divinité l'hommage de tes affections réglées, de tes passions vaincues.");
        await this.pause(300);
        await this.parler('Orateur', "QUE des mœurs chastes et sévères soient tes compagnes inséparables et te rendent respectable aux yeux des profanes ; que ton âme soit pure, droite, vraie et humble. L'orgueil est l'ennemi le plus dangereux de l'homme, il l'entretient dans une confiance illusoire de ses forces. Ne considère point le terme où tu es venu, il ralentirait ta course ; fixe celui où tu dois arriver ; la courte durée de ton passage te laisse à peine l'espoir d'y atteindre : ôte à ton amour-propre l'aliment dangereux de la comparaison avec ceux qui sont derrière toi ; sens plutôt l'aiguillon d'une émulation vertueuse, en voyant des modèles plus accomplis devant toi.");
        await this.pause(300);
        await this.parler('Orateur', "QUE jamais ta bouche n'altère les pensées secrètes de ton cœur, qu'elle en soit toujours l'organe vrai et fidèle ; un maçon qui se dépouillerait de la candeur pour prendre le masque de l'hypocrisie et de l'artifice, serait indigne d'habiter avec nous et, semant la méfiance et la discorde dans nos paisibles temples, il en deviendrait bientôt l'horreur et le fléau.");
        await this.pause(300);
        await this.parler('Orateur', "QUE l'idée sublime de la toute présence de Dieu te fortifie, te soutienne ; renouvelle chaque matin le cœur de devenir meilleur ; veille et prie ; et lorsque sur le soir ton cœur satisfait te rappelle une bonne action ou quelque victoire remportée sur toi-même, alors seulement repose tranquillement dans le sein de la Providence et reprends de nouvelles forces.");
        await this.pause(300);
        await this.parler('Orateur', "ETUDIE enfin le sens des hiéroglyphes et des emblèmes que l'Ordre te présente. La Nature même voile la plupart de ses secrets ; elle veut être observée, comparée et surprise souvent dans ses effets. De toutes les sciences dont le vaste champ présente les résultats les plus heureux à l'industrie de l'homme et à l'avantage de la société, celle qui t'enseignera les rapports entre Dieu, l'univers et toi, comblera les désirs de ton âme céleste et t'apprendra à mieux remplir tes devoirs.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article VIII — Devoirs envers les Frères.");
        await this.parler('Orateur', "DANS la foule immense des êtres dont cet univers est peuplé, tu as choisi, par un cœur libre, les maçons pour tes frères. N'oublie donc jamais que tout maçon, de quelque communion chrétienne, pays ou condition qu'il soit, en te présentant sa main droite, symbole de la franchise fraternelle, a des droits sacrés sur ton assistance et sur ton amitié. Fidèle au vœu de la nature, qui fut l'égalité, le maçon rétablit dans ses temples les droits originaires de la famille humaine ; il ne sacrifie jamais aux préjugés populaires et le niveau sacré assimile ici tous les états. Respecte dans la société civile les distances établies ou tolérées par la Providence souvent l'orgueil les imagina ; il y en aurait à les fonder et à vouloir les méconnaître. Mais garde-toi, surtout, d'établir parmi nous des distinctions factices que nous désavouons ; laisse tes dignités et tes décorations profanes à la porte et n'entre qu'avec l'escorte de tes vertus. Quel que soit ton rang dans le monde, cède le pas dans nos Loges au plus vertueux, au plus éclairé.");
        await this.pause(300);
        await this.parler('Orateur', "NE rougis jamais en public d'un homme obscur, mais honnête que dans nos asiles tu embrassas comme frère quelques instants auparavant ; l'Ordre rougirait de toi à son tour et te renverrai, avec ton orgueil, pour l'étaler sur les théâtres profanes du monde. SI ton frère est en danger, vole à son secours et ne crains pas d'exposer pour lui ta vie. S'il est dans le besoin, verse sur lui tes trésors et réjouis-toi d'en pouvoir faire un emploi aussi satisfaisant ; tu as juré d'exercer la bienfaisance envers les hommes en général, tu la dois de préférence à ton frère qui gémit. S'il est dans l'erreur et qu'il s'égare, viens à lui avec les lumières du sentiment, de la raison, de la persuasion. Ramène à la vertu des êtres qui chancellent, et relève ceux qui sont tombés.");
        await this.pause(300);
        await this.parler('Orateur', "SI ton cœur ulcéré par des offenses vraies ou imaginaires nourrissait quelque inimitié secrète contre un de tes frères, dissipe à l'instant le nuage qui s'élève ; appelle à ton secours quelque arbitre désintéressé ; réclame sa médiation fraternelle ; mais ne passe jamais le seuil du temple avant d'avoir déposé tout sentiment de haine et de vengeance. Tu invoquerais en vain le nom de l'Eternel, pour qu'il daignât habiter dans nos temples, s'ils ne sont purifiés par les vertus des frères et sanctifiés par leur concorde.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article IX — Devoirs envers l'Ordre.");
        await this.parler('Orateur', "LORSQU'ENFIN tu fus admis à la participation des avantages qui résultent de l'Association maçonnique, tu lui abandonnas, en échange tacitement, une partie de ta liberté naturelle ; accomplis donc strictement les obligations morales qu'elle t'impose, conforme-toi à ses sages règlements et respecte ceux que la confiance publique a désignés pour être les gardiens des lois et les interprètes du vœu général. Ta volonté dans l'Ordre est soumise à celle de la loi et des supérieurs ; tu serais un mauvais frère si tu méconnaissais jamais cette subordination nécessaire dans toute société et la nôtre serait forcée de t'exclure de son sein.");
        await this.pause(300);
        await this.parler('Orateur', "IL est surtout une loi dont tu as promis, à la face des cieux, la scrupuleuse observance : c'est celle du secret, le plus inviolable, sur nos rituels, cérémonies, signes et la forme de notre association. Garde-toi de croire que cet engagement est moins sacré que les serments que tu juras dans la société civile. Tu fus libre en le prononçant, mais tu ne l'es plus de rompre le secret qui te lie. L'Eternel, que tu invoquas comme témoin, l'a ratifié : crains les peines attachées au parjure ; tu n'échapperais jamais au supplice de ton cœur et tu perdrais l'estime et la confiance d'une société nombreuse, qui aurait droit de te déclarer sans foi et sans honneur.");
        await this.pause(300);
        await this.pause(P);

        this.action("Conclusion.");
        await this.parler('Orateur', "SI les leçons que l'Ordre t'adresse, pour te faciliter le chemin de la vérité et du bonheur, se gravent profondément dans ton âme docile et ouverte aux impressions de la vertu ; si les maximes salutaires, qui marqueront pour ainsi dire chaque pas que tu feras dans la carrière maçonnique, deviennent tes propres principes et la règle invariable de tes actions ; ô mon frère, quelle sera notre joie ! tu accompliras ta sublime destinée, tu recouvreras cette ressemblance divine qui fut le partage de l'homme dans son état d'innocence, qui est le but du christianisme et dont l'Initiation maçonnique fait son objet principal ; tu redeviendras la créature chérie du Ciel : ses bénédictions fécondes s'arrêteront sur toi ; et méritant le titre glorieux de sacre, toujours libre, heureux et constant, tu marcheras sur cette terre l'égal des rois, le bienfaiteur des hommes et le modèle de tes frères.");
        await this.pause(P);

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se terminent les neuf articles de la Règle Maçonnique. Méditez-les, mes Frères, ils sont la boussole de nos actions.");
    },

    // ── Règle — Articles I à III (Prologue + Art. I + Art. II + Art. III) ──
    regleArticlesIaIII: async function() {
        this._setEtape("Règle — Art. I à III");
        const P = this.PAUSE_ACTION;

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Orateur, la Loge vous demande de donner lecture des articles I à III de la Règle Maçonnique.");
        await this.pause(P);

        this.action("À la Gloire du Grand Architecte de l'Univers.");
        this.action("Prologue.");
        await this.parler('Orateur', "O TOI qui viens d'être initié aux leçons de la sagesse ! Fils de la vertu et de l'amitié ! Prête à nos accents une oreille attentive, et que ton âme s'ouvre aux préceptes mâles de la vérité ! nous t'enseignerons le chemin qui mène à la vie heureuse ; nous t'apprendrons à plaire à ton Auteur et à développer, avec énergie et succès, tous les moyens que la Providence te confia pour te rendre utile aux hommes et goûter les charmes de la bienfaisance.");
        await this.pause(P);

        this.action("Article I — Devoirs envers Dieu et la Religion.");
        await this.parler('Orateur', "TON premier hommage appartient à la divinité. Adore l'Etre plein de majesté qui créa l'univers par un acte de sa volonté, qui le conserve par un effet de son action continue, qui remplit ton cœur, mais que ton esprit borné ne peut concevoir, ni définir. Plains le triste délire de celui qui ferme ses yeux à la lumière et se promène dans les ténèbres épaisses du hasard : que ton cœur, attendri et reconnaissant des bienfaits paternels de ton Dieu, rejette avec mépris ces vains sophismes, qui prouvent la dégradation de l'esprit humain lorsqu'il s'éloigne de sa source. Elève souvent ton âme au-dessus des êtres matériels qui t'environnent et jette un regard plein de désir dans les régions supérieures, qui sont ton héritage et ta vraie patrie. Fais à ce dieu le sacrifice de ta volonté et de tes désirs, rends-toi digne de ses influences vivifiantes, remplis les lois qu'il voulut que tu accomplisses comme homme dans ta carrière terrestre. Plaire à ton Dieu, voilà ton bonheur ; être réuni à jamais à Lui, voilà toute ton ambition, la boussole de tes actions.");
        await this.pause(300);
        await this.parler('Orateur', "MAIS comment oserais-tu soutenir ses regards, être fragile ! qui transgresse à chaque instant ses lois et offense sa sainteté, si sa bonté paternelle ne t'eût ménagé un Réparateur infini ? Abandonné aux égarements de ta raison, où trouverais-tu la certitude d'un avenir consolant ? Livré à la justice de ton Dieu, où serait ton refuge ? Rends donc grâce à ton Rédempteur ; prosterne-toi devant le Verbe incarné et bénis la Providence qui te fit naître parmi les chrétiens. Professe en tous lieux la divine Religion de Christ et ne rougis jamais de lui appartenir. L'Evangile est la base de nos obligations ; si tu n'y croyais pas, tu cesserais d'être maçon. Annonce dans toutes tes actions une piété éclairée et active, sans hypocrisie, sans fanatisme ; le Christianisme ne se borne pas à des vérités de spéculation : pratique tous les devoirs moraux qu'il enseigne et tu seras heureux ; tes contemporains te béniront et tu paraîtras sans trouble devant le trône de l'Eternel.");
        await this.pause(300);
        await this.parler('Orateur', "SURTOUT, pénètre-toi de ce principe de charité et d'amour, base de cette sainte religion : plains l'erreur sans la haïr et sans la persécuter ; laisse à Dieu seul le soin de juger, et contente-toi d'aimer et de tolérer. Maçons ! Enfants d'un même Dieu, réunis par une croyance commune entre notre divin Sauveur, que ce lien d'amour nous unisse étroitement et fasse disparaître tout préjugé contraire à notre concorde fraternelle.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article II — Immortalité de l'Âme.");
        await this.parler('Orateur', "HOMME ! Roi du monde ! Chef-d'œuvre de la création lorsque Dieu l'anima de son souffle ! Médite ta sublime destination. Tout ce qui végète autour de toi et n'a qu'une vie animale, périt avec le temps et est soumis à ton empire ; ton âme immortelle, seule, émanée du sein de la Divinité, survit aux choses matérielles et ne périra point. Voilà ton vrai titre de noblesse ; sens vivement ton bonheur, mais sans orgueil ; il perdit ta race et te replongerait dans l'abîme. Être dégradé ! malgré ta grandeur primitive et relative, qu'es-tu devant l'Eternel ? Adore-le dans la poussière et sépare avec soin ce principe céleste et indestructible des alliages étrangers ; cultive ton âme immortelle et perfectible, et rends la susceptible d'être réunie à la source pure du bien, lorsqu'elle sera dégagée des vapeurs grossières de la matière. C'est ainsi que tu seras libre au milieu des fers, heureux au sein même du malheur, inébranlable au plus fort des orages et que tu mourras sans frayeur.");
        await this.pause(300);
        await this.parler('Orateur', "MAÇON ! si jamais tu pouvais douter de la nature immortelle de ton âme et de ta haute destination, l'initiation serait sans fruit pour toi ; tu cesserais d'être le fils adoptif de la sagesse et tu serais confondu dans la foule des êtres matériels et profanes qui tâtonnent dans les ténèbres.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article III — Devoirs envers le Souverain et la Patrie.");
        await this.parler('Orateur', "L'ETRE suprême confia d'une manière plus positive ses pouvoirs sur la terre au Souverain ; respecte et chéris son autorité légitime sur le coin de la terre que tu habites ; ton premier hommage appartient à Dieu ; le second à la Patrie. L'HOMME errant dans les bois, sans culture et fuyant ses semblables, serait peu propre à remplir les vues de la Providence, et à saisir toute la masse du bonheur qui lui est réservée. Son être s'agrandit au milieu de ses semblables ; son esprit se fortifie par le choc des opinions ; mais une fois réuni en société, il aurait à combattre sans cesse l'intérêt personnel et les passions désordonnées, et l'innocence bientôt succomberait sous sa force ou sous la ruse. Il fallut donc des lois pour le guider et des chefs pour les maintenir.");
        await this.pause(300);
        await this.parler('Orateur', "HOMME sensible ! tu révères tes parents ; honore de même les pères de l'Etat et prie pour leur conservation ; ils sont les représentants de la Divinité sur cette terre. S'ils s'égarent, ils en répondront au Juge des Rois ; mais ton propre sentiment peut te tromper et jamais ne te dispenser d'obéir. Si tu manquais à ce devoir sacré, si ton cœur ne tressaillait plus au doux nom de Patrie et de ton Souverain, le maçon te repousserait de son sein comme réfractaire à l'ordre public, comme indigne de participer aux avantages d'une association qui mérité la confiance et l'estime des gouvernements, puisqu'un de ses principaux mobiles est le patriotisme et que, jalouse de former les meilleurs citoyens, elle exige que ses enfants remplissent, avec le plus de distinction et par les motifs les plus épurés, tous les devoirs de leur état civil. Le guerrier le plus courageux, le juge le plus intègre, le maître le plus doux, le serviteur le plus fidèle, le père le plus tendre, l'époux le plus constant, le fils le plus soumis doit être le maçon, puisque les obligations ordinaires et communes du citoyen ont été sanctifiées et renforcées par les cœurs libres et volontaires du maçon et qu'en les négligeant il joindrait à la faiblesse l'hypocrisie et le parjure.");
        await this.pause(300);
        await this.pause(P);

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se terminent les articles I à III de la Règle Maçonnique.");
    },

    // ── Règle — Articles IV à VI ────────────────────────────────────────────
    regleArticlesIVaVI: async function() {
        this._setEtape("Règle — Art. IV à VI");
        const P = this.PAUSE_ACTION;

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Orateur, la Loge vous demande de donner lecture des articles IV à VI de la Règle Maçonnique.");
        await this.pause(P);

        this.action("Article IV — Devoirs envers l'Humanité en général.");
        await this.parler('Orateur', "MAIS si le cercle patriotique qui t'ouvre une carrière si féconde et si satisfaisante ne remplit pas encore toute ton activité ; si ton cœur sensible veut franchir les bornes des empires et embraser avec ce feu électrique de l'humanité tous les hommes, toutes les nations ; si, remontant à la source commune, tu te plais à chérir tendrement tous ceux qui ont les mêmes organes, le même besoin d'aimer, le même désir d'être utile et une âme immortelle comme toi, viens alors dans nos temples offrir tes hommages à la sainte humanité ; l'univers est la patrie du maçon et rien de ce qui regarde l'homme ne lui est étranger.");
        await this.pause(300);
        await this.parler('Orateur', "VOIS avec respect cet édifice majestueux, destiné à resserrer les liens trop relâchés de la morale ; chéris une association générale d'âmes vertueuses, capables de s'exalter, répandue dans tous les pays, où la raison et les lumières ont pénétré, réunie sous la bannière sainte de l'humanité, régie par des lois simples et uniformes. Sens enfin le but sublime de notre saint Ordre ; consacre ton activité et toute ta vie à la bienfaisance ; ennoblis, épure et fortifie cette généreuse résolution en travaillant sans relâche à ta perfection, te réunissant plus intimement à la Divinité.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article V — Bienfaisance.");
        await this.parler('Orateur', "CREE à l'image de Dieu qui a daigné se communiquer aux hommes et répandre sur eux le bonheur ; rapproche-toi de ce modèle infini par une volonté constante de verser sans cesse sur les autres hommes toute la masse de bonheur qui est en ton pouvoir ; tout ce que l'esprit peut concevoir de bien est le patrimoine du maçon.");
        await this.pause(300);
        await this.parler('Orateur', "VOIS la misère impuissante de l'enfance, elle réclame ton appui ; considère l'inexpérience funeste de la jeunesse, elle sollicite tes conseils ; mets ta félicité à la préserver des erreurs et des séductions qui la menacent ; excite en elle les étincelles du feu sacré du génie, aide la à les développer pour le bonheur du monde.");
        await this.pause(300);
        await this.parler('Orateur', "TOUT être qui souffre ou gémit a des droits sacrés sur toi ; garde-toi de les méconnaître, n'attends point que le cri perçant de la misère te sollicite ; préviens et rassure l'infortuné timide ; n'empoisonne pas, par l'ostentation de tes dons, les sources d'eau vive où le malheureux doit se désaltérer ; ne cherche pas la récompense de ta bienfaisance dans les vains applaudissements de la multitude ; le maçon la trouve dans le suffrage tranquille de sa conscience et dans le sourire fortifiant de la Divinité, sous les yeux de laquelle il est sans cesse placé.");
        await this.pause(300);
        await this.parler('Orateur', "SI la Providence libérale t'a accordé quelque superflu, garde-toi d'en faire un usage frivole et criminel ; elle voulut que, par un mouvement libre et spontané de ton âme généreuse, tu rendisses moins sensible la distribution inégale des biens, qui entrait dans ses plans ; jouis de cette belle prérogative. Que jamais l'avarice, la plus sordide des passions, n'avilisse ton caractère, et que ton cœur se soulève aux calculs froids et arides qu'elle suggère. Si jamais il venait à se dessécher à son souffle triste et intéressé, fuis nos ateliers de charité ; ils seraient sans attrait pour toi et nous ne pourrions plus reconnaître en toi l'ancienne image de la Divinité.");
        await this.pause(300);
        await this.parler('Orateur', "QUE ta bienfaisance soit éclairée par la religion, la sagesse et la prudence ; ton cœur voudrait embrasser les besoins de l'humanité, mais ton esprit doit choisir les plus pressants et les plus importants Instruits, conseille, protège, donne, soulage tour à tour ; ne crois jamais avoir assez fait et ne te repose de tes œuvres que pour montrer une nouvelle énergie. En te livrant ainsi aux élans de cette passion sublime, une source intarissable de jouissances s'apprête pour toi : tu auras sur cette terre l'avant-goût de la félicité céleste, ton âme s'agrandira et tous les instants de ta vie seront remplis.");
        await this.pause(300);
        await this.parler('Orateur', "LORSQU'ENFIN tu sens les bornes de ta nature finie, et que ne pouvant suffire seul au bien que tu voudrais faire, ton âme s'attriste, viens dans nos temples ; vois le faisceau sacré de bienfaits qui nous unit et concourant efficacement, selon toutes tes facultés, aux plans et aux établissements utiles que l'association maçonnique te présente et qu'elle réalise, félicite-toi d'être citoyen de ce meilleur monde ; goûte les doux fruits de nos forces combinées et concentrées sur un même objet ; alors tes ressources se multiplieront, tu aideras à faire mille heureux au lieu d'un, et ton cœur sera couronné.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article VI — Autres devoirs moraux envers les hommes.");
        await this.parler('Orateur', "AIME ton prochain autant que toi-même et ne lui fais jamais ce que tu ne voudrais pas qu'on te fit. Sers-toi du don sublime de la parole, signe extérieur de ta domination sur la nature, pour aller au-devant des besoins d'autrui et pour exciter dans tous les cœurs le feu sacré de la vertu. Sois affable et officieux, édifie par ton exemple ; partage la félicité d'autrui sans jalousie. Ne permets jamais à l'envie de s'élever un instant dans ton sein, elle troublerait la source pure de ton bonheur et ton âme serait en proie à la plus triste des furies.");
        await this.pause(300);
        await this.parler('Orateur', "PARDONNE à ton ennemi, et ne te venge de lui que par des bienfaits ; c'est par là que tu remplis un des préceptes les plus sublimes de la Religion, et que tu recouvreras en même temps quelques-uns des vestiges de ta grandeur primitive. Maçon ! c'est ainsi que tu procureras le paradis sur la terre, que tu méritera l'amour de tes concitoyens et que tu trouveras dans leur affection le plus beau salaire de tes travaux.");
        await this.pause(300);
        await this.pause(P);

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se terminent les articles IV à VI de la Règle Maçonnique.");
    },

    // ── Règle — Articles VII à IX (+ Conclusion) ────────────────────────────
    regleArticlesVIIaIX: async function() {
        this._setEtape("Règle — Art. VII à IX");
        const P = this.PAUSE_ACTION;

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Orateur, la Loge vous demande de donner lecture des articles VII à IX de la Règle Maçonnique.");
        await this.pause(P);

        this.action("Article VII — Perfection morale de soi-même.");
        await this.parler('Orateur', "EN te dévouant ainsi au bien d'autrui, n'oublie point ta propre perfection et ne néglige pas de satisfaire les besoins de ton âme immortelle. Descends souvent dans ton cœur, pour en sonder les replis les plus cachés. La connaissance de soi-même est le grand pivot des préceptes maçonniques. Ton âme est la pierre brute qu'il faut dégrossir ; offre à la Divinité l'hommage de tes affections réglées, de tes passions vaincues.");
        await this.pause(300);
        await this.parler('Orateur', "QUE des mœurs chastes et sévères soient tes compagnes inséparables et te rendent respectable aux yeux des profanes ; que ton âme soit pure, droite, vraie et humble. L'orgueil est l'ennemi le plus dangereux de l'homme, il l'entretient dans une confiance illusoire de ses forces. Ne considère point le terme où tu es venu, il ralentirait ta course ; fixe celui où tu dois arriver ; la courte durée de ton passage te laisse à peine l'espoir d'y atteindre : ôte à ton amour-propre l'aliment dangereux de la comparaison avec ceux qui sont derrière toi ; sens plutôt l'aiguillon d'une émulation vertueuse, en voyant des modèles plus accomplis devant toi.");
        await this.pause(300);
        await this.parler('Orateur', "QUE jamais ta bouche n'altère les pensées secrètes de ton cœur, qu'elle en soit toujours l'organe vrai et fidèle ; un maçon qui se dépouillerait de la candeur pour prendre le masque de l'hypocrisie et de l'artifice, serait indigne d'habiter avec nous et, semant la méfiance et la discorde dans nos paisibles temples, il en deviendrait bientôt l'horreur et le fléau.");
        await this.pause(300);
        await this.parler('Orateur', "QUE l'idée sublime de la toute présence de Dieu te fortifie, te soutienne ; renouvelle chaque matin le cœur de devenir meilleur ; veille et prie ; et lorsque sur le soir ton cœur satisfait te rappelle une bonne action ou quelque victoire remportée sur toi-même, alors seulement repose tranquillement dans le sein de la Providence et reprends de nouvelles forces.");
        await this.pause(300);
        await this.parler('Orateur', "ETUDIE enfin le sens des hiéroglyphes et des emblèmes que l'Ordre te présente. La Nature même voile la plupart de ses secrets ; elle veut être observée, comparée et surprise souvent dans ses effets. De toutes les sciences dont le vaste champ présente les résultats les plus heureux à l'industrie de l'homme et à l'avantage de la société, celle qui t'enseignera les rapports entre Dieu, l'univers et toi, comblera les désirs de ton âme céleste et t'apprendra à mieux remplir tes devoirs.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article VIII — Devoirs envers les Frères.");
        await this.parler('Orateur', "DANS la foule immense des êtres dont cet univers est peuplé, tu as choisi, par un cœur libre, les maçons pour tes frères. N'oublie donc jamais que tout maçon, de quelque communion chrétienne, pays ou condition qu'il soit, en te présentant sa main droite, symbole de la franchise fraternelle, a des droits sacrés sur ton assistance et sur ton amitié. Fidèle au vœu de la nature, qui fut l'égalité, le maçon rétablit dans ses temples les droits originaires de la famille humaine ; il ne sacrifie jamais aux préjugés populaires et le niveau sacré assimile ici tous les états. Respecte dans la société civile les distances établies ou tolérées par la Providence souvent l'orgueil les imagina ; il y en aurait à les fonder et à vouloir les méconnaître. Mais garde-toi, surtout, d'établir parmi nous des distinctions factices que nous désavouons ; laisse tes dignités et tes décorations profanes à la porte et n'entre qu'avec l'escorte de tes vertus. Quel que soit ton rang dans le monde, cède le pas dans nos Loges au plus vertueux, au plus éclairé.");
        await this.pause(300);
        await this.parler('Orateur', "NE rougis jamais en public d'un homme obscur, mais honnête que dans nos asiles tu embrassas comme frère quelques instants auparavant ; l'Ordre rougirait de toi à son tour et te renverrai, avec ton orgueil, pour l'étaler sur les théâtres profanes du monde. SI ton frère est en danger, vole à son secours et ne crains pas d'exposer pour lui ta vie. S'il est dans le besoin, verse sur lui tes trésors et réjouis-toi d'en pouvoir faire un emploi aussi satisfaisant ; tu as juré d'exercer la bienfaisance envers les hommes en général, tu la dois de préférence à ton frère qui gémit. S'il est dans l'erreur et qu'il s'égare, viens à lui avec les lumières du sentiment, de la raison, de la persuasion. Ramène à la vertu des êtres qui chancellent, et relève ceux qui sont tombés.");
        await this.pause(300);
        await this.parler('Orateur', "SI ton cœur ulcéré par des offenses vraies ou imaginaires nourrissait quelque inimitié secrète contre un de tes frères, dissipe à l'instant le nuage qui s'élève ; appelle à ton secours quelque arbitre désintéressé ; réclame sa médiation fraternelle ; mais ne passe jamais le seuil du temple avant d'avoir déposé tout sentiment de haine et de vengeance. Tu invoquerais en vain le nom de l'Eternel, pour qu'il daignât habiter dans nos temples, s'ils ne sont purifiés par les vertus des frères et sanctifiés par leur concorde.");
        await this.pause(300);
        await this.pause(P);

        this.action("Article IX — Devoirs envers l'Ordre.");
        await this.parler('Orateur', "LORSQU'ENFIN tu fus admis à la participation des avantages qui résultent de l'Association maçonnique, tu lui abandonnas, en échange tacitement, une partie de ta liberté naturelle ; accomplis donc strictement les obligations morales qu'elle t'impose, conforme-toi à ses sages règlements et respecte ceux que la confiance publique a désignés pour être les gardiens des lois et les interprètes du vœu général. Ta volonté dans l'Ordre est soumise à celle de la loi et des supérieurs ; tu serais un mauvais frère si tu méconnaissais jamais cette subordination nécessaire dans toute société et la nôtre serait forcée de t'exclure de son sein.");
        await this.pause(300);
        await this.parler('Orateur', "IL est surtout une loi dont tu as promis, à la face des cieux, la scrupuleuse observance : c'est celle du secret, le plus inviolable, sur nos rituels, cérémonies, signes et la forme de notre association. Garde-toi de croire que cet engagement est moins sacré que les serments que tu juras dans la société civile. Tu fus libre en le prononçant, mais tu ne l'es plus de rompre le secret qui te lie. L'Eternel, que tu invoquas comme témoin, l'a ratifié : crains les peines attachées au parjure ; tu n'échapperais jamais au supplice de ton cœur et tu perdrais l'estime et la confiance d'une société nombreuse, qui aurait droit de te déclarer sans foi et sans honneur.");
        await this.pause(300);
        await this.pause(P);

        this.action("Conclusion.");
        await this.parler('Orateur', "SI les leçons que l'Ordre t'adresse, pour te faciliter le chemin de la vérité et du bonheur, se gravent profondément dans ton âme docile et ouverte aux impressions de la vertu ; si les maximes salutaires, qui marqueront pour ainsi dire chaque pas que tu feras dans la carrière maçonnique, deviennent tes propres principes et la règle invariable de tes actions ; ô mon frère, quelle sera notre joie ! tu accompliras ta sublime destinée, tu recouvreras cette ressemblance divine qui fut le partage de l'homme dans son état d'innocence, qui est le but du christianisme et dont l'Initiation maçonnique fait son objet principal ; tu redeviendras la créature chérie du Ciel : ses bénédictions fécondes s'arrêteront sur toi ; et méritant le titre glorieux de sacre, toujours libre, heureux et constant, tu marcheras sur cette terre l'égal des rois, le bienfaiteur des hommes et le modèle de tes frères.");
        await this.pause(P);

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se terminent les neuf articles de la Règle Maçonnique. Méditez-les, mes Frères, ils sont la boussole de nos actions.");
    },


    // ─── CHAPITRE XVII — CLÔTURE DE LA LOGE D'APPRENTI ─────────────────────
    clotureTravaux: async function() {
        this._setEtape("Clôture — Loge d'Apprenti");

        await this.dire("V.M.", "Frères Surveillants, vérifiez sur vos colonnes si les ouvriers ont fini leur travail et demandez-leur s'ils n'ont rien à proposer pour le bien de l'Ordre en général ou pour cette loge en particulier.");
        await this.dire("1°S.", "Mes Frères, chacun de vous a-t-il achevé son travail, et n'avez-vous rien à proposer pour le bien de l'Ordre en général ou pour cette loge en particulier ?");
        await this.dire("2°S.", "Mes Frères, chacun de vous a-t-il achevé son travail, et n'avez-vous rien à proposer pour le bien de l'Ordre en général ou pour cette loge en particulier ?");
        this.action("Si des Frères avaient quelque proposition à faire, ils doivent se tenir debout, à leur place, la main au signe du grade et la tête découverte, sans rien dire, et ils restent ainsi jusqu'à ce qu'ils aient été interrogés à leur tour et rang.");
        // — Frère visiteur de la colonne du midi demande la parole —
        await this.dire("1°S.", "Vénérable Maître, le Frère N.. de la colonne du midi, demande la permission de parler.");
        await this.dire("V.M.", "Frère N.., vous avez la parole.");
        await this.dire("Frère N.", "Vénérable Maître, je vous présente les sincères et fraternelles salutations de ma Loge et de son Vénérable Maître en chair. J'ai passé une excellente soirée en votre compagnie, vous avez fait un travail remarquable, aidé par vos officiers, et je reviendrai vous visiter.");
        await this.dire("V.M.", "Je vous remercie mon Bien Aimé Frère, vous êtes toujours le bienvenu.");

        await this.dire("1°S.", "Vénérable Maître, tout est fini sur la colonne du midi.");
        await this.dire("2°S.", "Vénérable Maître, tout est fini sur la colonne du nord.");
        jouerMusique('03 - Aumone.mp3');
        await this.dire("V.M.", "Mes Frères, puisque tout est fini sur les deux colonnes, et que votre travail de ce jour est achevé, vous recevrez la récompense qui vous est due. Frère Éléemosynaire, veuillez présenter le tronc des aumônes à tous les Frères.");
        this.action("Le Frère Éléemosynaire, accompagné du Maître des Cérémonies, présente le tronc des aumônes à tous les Frères. Le tour commence par le Vénérable Maître, les Dignitaires sur sa gauche, l'Orateur et le reste de la Loge dans le sens des aiguilles d'une montre, pour se terminer par le Trésorier qui est à la droite du Vénérable Maître. L'offrande, relative à la Bienfaisance, se fait main gauche gantée.");

        // ── Utilitaires cortège ───────────────────────────────────────────────
        // Même principe que fileIndienne : MdC part, Éléemosynaire suit avec
        // un léger délai (DELAI_CORTEGE ms) — file indienne à deux.
        // Le MdC attend à chaque WP que l'Éléemosynaire arrive (processer séquentiel).
        const DELAI_CORTEGE = 300; // ms d'écart entre les deux pions

        // Déplace le cortège sur une liste de WP — MdC en tête, Éléemosynaire suit
        const cortege = (wps) => {
            this.processer("pion-mc", wps); // MdC part immédiatement
            return new Promise(r => {
                setTimeout(() => {
                    this.processer("pion-eleemosynaire", wps).then(r);
                }, DELAI_CORTEGE);
            });
        };

        // Éléemosynaire visite un point depuis le dernier WP puis y revient (MdC attend)
        const visiter = async (wpX, wpY, vx, vy) => {
            await this.processer("pion-eleemosynaire", this.DUREE_WP,
                { x: vx, y: vy }, { x: wpX, y: wpY }
            );
        };

        // ── MdC remonte chercher l'Éléemosynaire par le Nord (sens horaire depuis WP1)
        // Depuis (630,1000) → WP1 → WP2 → WP3 → WP4 où se trouve l'Éléemosynaire
        await this.processer("pion-mc", this.DUREE_WP, WP[1], WP[2], WP[3], WP[4]);
        // Cortège repart ensemble de WP4 vers WP5 puis le tour horaire complet
        await cortege([
            { ...WP[5], d: this.DUREE_WP }, // WP5
        ]);

        // ── WP5 Orient : VM + Ex-Maître ───────────────────────────────────────
        await visiter(WP[5].x, WP[5].y, 480, 130);

        // ── WP6 Arc Midi-Haut ─────────────────────────────────────────────────
        await cortege([{ ...WP[6], d: this.DUREE_WP }]);
        await visiter(WP[6].x, WP[6].y, 960, 150);  // Orateur
        await visiter(WP[6].x, WP[6].y, 960, 320);  // Trésorier + Économe

        // ── WP7 Arc Midi-Milieu : Maîtres Midi ───────────────────────────────
        await cortege([{ ...WP[7], d: this.DUREE_WP }]);
        await visiter(WP[7].x, WP[7].y, 1000, 565);

        // ── WP8 Arc Midi-Bas : Compagnons Midi ───────────────────────────────
        await cortege([{ ...WP[8], d: this.DUREE_WP }]);
        await visiter(WP[8].x, WP[8].y, 1000, 660);

        // ── WP1 Bas tapis : 1°S. ─────────────────────────────────────────────
        await cortege([{ ...WP[1], d: this.DUREE_WP }]);
        await visiter(WP[1].x, WP[1].y, 800, 900);

        // ── WP2 Arc Nord-Bas : 2°S. + Apprentis ──────────────────────────────
        await cortege([{ ...WP[2], d: this.DUREE_WP }]);
        await visiter(WP[2].x, WP[2].y, 330, 870);

        // ── WP3 Arc Nord-Milieu : Maîtres Nord ───────────────────────────────
        await cortege([{ ...WP[3], d: this.DUREE_WP }]);
        await visiter(WP[3].x, WP[3].y, 280, 565);

        // ── WP4 Arc Nord-Haut : Secrétaire — dernier Frère ───────────────────
        await cortege([{ ...WP[4], d: this.DUREE_WP }]);
        await visiter(WP[4].x, WP[4].y, 310, 290);

        // ── Cortège WP4→WP5→WP6 — MdC en tête, s'arrête au WP6 ─────────────
        await cortege([
            { ...WP[5], d: this.DUREE_WP }, // WP5
            { ...WP[6], d: this.DUREE_WP }, // WP6
        ]);
        // Éléemosynaire remet le tronc au Trésorier puis revient au WP6
        await visiter(WP[6].x, WP[6].y, 960, 290);
        await this.pause(this.PAUSE_ACTION);

        // ── Cortège retour WP6→WP7→WP8→WP1→WP2→WP3→WP4 ─────────────────────
        await cortege([
            { ...WP[7], d: this.DUREE_WP }, // WP7
            { ...WP[8], d: this.DUREE_WP }, // WP8
            { ...WP[1], d: this.DUREE_WP }, // WP1
            { ...WP[2], d: this.DUREE_WP }, // WP2
            { ...WP[3], d: this.DUREE_WP }, // WP3
            { ...WP[4], d: this.DUREE_WP }, // WP4 — arrêt
        ]);

        // ── Séparation : Éléemosynaire rejoint sa place, MdC continue seul ────
        animerVers("pion-eleemosynaire", this.POSITIONS["pion-eleemosynaire"].x, this.POSITIONS["pion-eleemosynaire"].y, this.DUREE_WP);
        await this.processer("pion-mc", this.DUREE_WP,
            WP[5], WP[6], WP[7], WP[8], WP[1],
            { x: 630, y: 1000 }  // sa place
        );
        await this.pause(this.PAUSE_ACTION);
        arreterMusique(true);

        this.action("Le Frère secrétaire prend note sur le protocole du produit de la quête du jour.");

        await this.dire("V.M.", "Le point suivant de l'Ordre du Jour appelle la lecture du protocole de l'Assemblée de ce jour.");
        await this.dire("V.M.", "Frère Secrétaire veuillez donner lecture du protocole de l'Assemblée de ce jour.");
        this.action("Le Vénérable Maître fait lire par le Frère secrétaire le protocole du jour pour être signé après la clôture de la loge par les principaux Officiers et par le Frère nouveau reçu.");
        await this.dire("Secrét.", "Vénérable Maître, voici le protocole de notre Assemblée de ce jour. Ainsi est rédigé le protocole de ce jour.");
        await this.dire("V.M.", "Je vous remercie, Frère Secrétaire. Ce protocole sera signé après la clôture par les principaux Officiers et par notre nouveau Frère. Y a-t-il des observations sur ce protocole ?");
        await this.dire("V.M.", "Aucune observation. Le protocole est adopté.");
        this.action("La lecture du protocole étant finie, le Vénérable Maître frappe un coup.");
        await this.pause(1000);
        await this.echoCoups("O");
        await this.dire("V.M.", "A l'ordre, mes Frères.");
        this.action("Il tient son épée la pointe haute, le pommeau sur l'autel, comme à l'ouverture, et aussitôt les Frères tirent la leur qu'ils tiennent la pointe contre terre en se mettant au signe d'apprenti.");
        this.action("Le Vénérable Maître fait les questions suivantes, qui passent du Premier Surveillant au Second Surveillant, ainsi qu'il a été dit pour l'ouverture ; les réponses passant du second Surveillant au premier Surveillant et du premier Surveillant au Vénérable Maître :");

        await this.dire("V.M.", "Frère Premier Surveillant, quelle heure est-il ?");
        await this.dire("1°S.", "Frère Second Surveillant, quelle heure est-il ?");
        await this.dire("2°S.", "Il est minuit.");
        await this.dire("1°S.", "Vénérable Maître, il est minuit.");
        await this.dire("V.M.", "Où est placé le Vénérable Maître dans la loge ?");
        await this.dire("1°S.", "Frère Second Surveillant, où est placé le Vénérable Maître dans la loge ?");
        await this.dire("2°S.", "A l'Orient.");
        await this.dire("1°S.", "Vénérable Maître, à l'Orient.");
        await this.dire("V.M.", "Pourquoi ?");
        await this.dire("1°S.", "Pourquoi, Frère Second Surveillant ?");
        await this.dire("2°S.", "Pour gouverner la loge.");
        await this.dire("1°S.", "Vénérable Maître, pour gouverner la loge.");
        await this.dire("V.M.", "Où sont placés les deux Surveillants ?");
        await this.dire("1°S.", "Frère Second Surveillant, où sont placés les deux Surveillants ?");
        await this.dire("2°S.", "A l'Occident.");
        await this.dire("1°S.", "Vénérable Maître, à l'Occident.");
        await this.dire("V.M.", "Pourquoi ?");
        await this.dire("1°S.", "Pourquoi, Frère Second Surveillant ?");
        await this.dire("2°S.", "Comme le soleil termine sa carrière à l'Occident, de même les Surveillants s'y tiennent pour fermer la loge, payer les ouvriers et les renvoyer contents.");
        await this.dire("1°S.", "Vénérable Maître, comme le soleil termine sa carrière à l'Occident, de même les Surveillants s'y tiennent pour fermer la loge, payer les ouvriers et les renvoyer contents.");
        await this.dire("V.M.", "Puisqu'il est minuit, et puisque le Vénérable Maître est placé à l'Orient et les Surveillants à l'Occident, avertissez les Frères que je vais fermer la loge.");
        await this.dire("1°S.", "Mes Frères, puisqu'il est minuit, et puisque le Vénérable Maître est placé à l'Orient et les Surveillants à l'Occident, je vous annonce de la part du Vénérable Maître, qu'il va fermer la loge.");
        await this.dire("2°S.", "Mes Frères, puisqu'il est minuit, et puisque le Vénérable Maître est placé à l'Orient et les Surveillants à l'Occident, je vous annonce de la part du Vénérable Maître, qu'il va fermer la loge.");
        await this.dire("V.M.", "Mes Frères, avant de nous séparer formons la Chaîne d'Union Fraternelle et tous ensemble rendons hommage au Grand Architecte de l'Univers, qui préside à nos Travaux.");


        // Chaîne d'Union — formation autour du tapis
        this.action("Le Vénérable Maître descend et va se placer entre l'autel et le tapis. Tous les Frères viennent se ranger autour du tapis, bras croisés, tenant la main de leurs voisins.");
        this.action("Tous les Frères étant rangés autour du tapis, ils forment ensemble une chaîne, chacun ayant les bras croisés et tenant la main des frères qu'il a à sa droite et à sa gauche. Le Vénérable Maître fait passer à voix basse les mots de reconnaissance du Régime Rectifié.");
        jouerMusique('04 - Prière de clôture.mp3');

        // Formation de la chaîne — ellipse régulière autour du tapis, 27 places
        // Ellipse : cx=630, cy=530, rx=310, ry=420 — sens du soleil depuis l'Orient
        const D = 1000;

        animerVers("pion-vm",              630, 110, D); // Orient
        animerVers("pion-orateur",         701, 121, D);
        animerVers("pion-tresorier",       769, 155, D);
        animerVers("pion-econome",         829, 208, D);
        animerVers("pion-maitre4",         879, 279, D);
        animerVers("pion-maitre5",         915, 364, D);
        animerVers("pion-maitre6",         935, 457, D);
        animerVers("pion-maitre7",         939, 554, D);
        animerVers("pion-comp1",           927, 650, D);
        animerVers("pion-comp2",           898, 740, D);
        animerVers("pion-comp3",           855, 818, D);
        animerVers("pion-comp4",           800, 881, D);
        animerVers("pion-comp5",           736, 925, D);
        animerVers("pion-1surv",           666, 947, D); // Occident
        animerVers("pion-2surv",           594, 947, D);
        animerVers("pion-mc",              524, 925, D);
        animerVers("pion-appr1",           460, 881, D);
        animerVers("pion-appr2",           405, 818, D);
        animerVers("pion-appr3",           362, 740, D);
        animerVers("pion-appr4",           333, 650, D);
        animerVers("pion-appr5",           321, 554, D);
        animerVers("pion-maitre3",         325, 457, D);
        animerVers("pion-maitre1",         345, 364, D);
        animerVers("pion-maitre2",         381, 279, D);
        animerVers("pion-secretaire",      431, 208, D);
        animerVers("pion-eleemosynaire",   491, 155, D);
        await animerVers("pion-ex-maitre", 559, 121, D); // Orient
        await this.pause(400);

        this.action("La chaîne étant complète et unie, le Vénérable Maître fait à haute voix la prière suivante :");
        await this.dire("V.M.", "Architecte suprême de l'Univers, source unique de tout bien et de toute perfection, ô toi qui as toujours voulu et opéré pour le bonheur de l'homme et de toutes tes créatures, nous te rendons grâce de tes bienfaits paternels, et nous te conjurons tous ensemble de nous les accorder suivant tes desseins sur nous et selon nos propres besoins. Répands sur nous et sur tous nos frères ta céleste lumière ; fortifie dans nos cœurs l'amour de nos devoirs, afin que nous les observions fidèlement. Puissent nos assemblées être toujours affermies dans leur union par le désir de te plaire et de nous rendre utiles à nos semblables. Qu'elles soient à jamais le séjour de la paix et de la vertu, et que la chaîne d'une amitié parfaite et fraternelle soit désormais si forte entre nous que rien ne puisse jamais l'altérer. Ainsi soit-il.");
        await this.dire("Les Frères", "Ainsi soit-il.");
        arreterMusique(true);
        this.action("La prière étant finie, la chaîne cesse, et tous les frères retournent à leurs places dans le même ordre qu'ils les ont quittées.");

        // Retour aux places
        this.tousEnLoge(1000);
        await this.pause(1200);

        await this.dire("V.M.", "Mes chers Frères, aidez moi tous à fermer la loge.");
        await this.dire("1°S.", "Mes Frères, aidons tous le Vénérable Maître à fermer la loge.");
        await this.dire("2°S.", "Mes Frères, aidons tous le Vénérable Maître à fermer la loge.");
        await this.dire("V.M.", "Unissez-vous à moi, mes Frères.");
        this.action("Et aussitôt, ils donnent tous ensemble, deux fois de suite, le signe entier d'Apprenti. Les Frères se remettent sur-le-champ au premier temps du signe, à l'exception du Vénérable Maître qui tient avec la main droite son maillet, et avec la main gauche son épée la pointe haute.");
        await this.dire("V.M.", "A la Gloire du Grand Architecte de l'Univers,\nAu nom de l'Ordre,\nEt par le pouvoir que j'en ai reçu,\nJe ferme cette loge d'apprenti.");
        this.action("Il bat aussitôt avec son maillet les trois coups de clôture.");
        await this.frapper("V.M.", "OO-O");
        this.action("Lesquels sont répétés par les deux Surveillants en silence.");
        await this.frapper("1°S.", "OO-O");
        await this.frapper("2°S.", "OO-O");
        await this.dire("V.M.", "Frères Surveillants, annoncez à tous les Frères que la loge est fermée.");
        await this.dire("1°S.", "Mes Frères, la loge est fermée.");
        await this.dire("2°S.", "Mes Frères, la loge est fermée.");
        await this.dire("V.M.", "Ayez attention, mes Frères.");
        this.action("Le Vénérable Maître, en finissant ces mots, répète, et tous les Frères avec lui, pour la troisième et dernière fois, le signe entier d'Apprenti.");

        await this.dire("V.M.", "Frères Surveillants, quelle heure est-il à présent ?");
        await this.dire("1°S.", "Frère Second Surveillant, quelle heure est-il à présent ?");
        await this.dire("2°S.", "Il est minuit plein.");
        await this.dire("1°S.", "Vénérable Maître, il est minuit plein.");


        // ── Extinction des flambeaux — VM descend par le Midi, un flambeau à la fois
        this.action("Le Vénérable Maître va éteindre les trois flambeaux maçonniques qui sont autour du tapis.");

        // — Flambeau de la Sagesse (WP6, Midi-haut) — cierge Secrétaire simultané
        await this.processer("pion-vm", this.DUREE_WP, WP[6]);
        await this.dire("V.M.", "Que la lumière qui nous a éclairés...");
        this.allumerFlambeau('sagesse', false);
        eteindreCierge('secretaire');

        // — Flambeau de la Beauté (WP8, Midi-bas) — cierge 1°S. simultané
        await this.processer("pion-vm", this.DUREE_WP, WP[7], WP[8]);
        await this.dire("V.M.", "... dans nos travaux ...");
        this.allumerFlambeau('beaute', false);
        eteindreCierge('1surv');

        // — Flambeau de la Force (WP2, Nord-bas) — cierge 2°S. simultané
        await this.processer("pion-vm", this.DUREE_WP, WP[1], WP[2]);
        await this.dire("V.M.", "... ne reste point exposée au regard des profanes.");
        this.allumerFlambeau('force', false);
        eteindreCierge('2surv');

        // — VM retourne à l'autel via WP3→WP4→WP5 (sens horaire, repart de WP2)
        this.action("Le Vénérable Maître retourne à sa place, et en éteignant les bougies du chandelier à trois branches, il dit :");
        await this.processer("pion-vm", this.DUREE_WP,
            WP[3], WP[4], WP[5],
            { x: 630, y: 120, d: 600 }  // place VM
        );
        // Bougies du chandelier : gauche → droite → centre pendant la phrase
        setTimeout(() => eteindreBougieChandelier('gauche'),  2000);
        setTimeout(() => eteindreBougieChandelier('droite'),  5000);
        setTimeout(() => eteindreBougieChandelier('centre'),  7500);
        await this.dire("V.M.", "Mes Frères, lorsque pour perfectionner votre travail, vous chercherez la lumière qui vous est nécessaire, souvenez-vous qu'elle se tient à l'Orient et que c'est là seulement que vous pouvez la trouver.");
        this.action("Le Vénérable Maître ferme la Bible qui est sur l'autel, ensuite il dit :");
        fermerBible();

        await this.dire("V.M.", "Frères Surveillants, quelle heure est-il enfin ?");
        await this.dire("1°S.", "Frère Second Surveillant, quelle heure est-il enfin ?");
        await this.dire("2°S.", "Il est (telle heure).");
        await this.dire("1°S.", "Vénérable Maître, il est (telle heure).");
        this.action("Ils nomment l'heure solaire du moment — l'heure profane légale.");

        await this.dire("V.M.", "Mes chers Frères, allez donc en paix jouir du repos que le travail vous a mérité, et portez parmi les autres hommes les vertus dont vous avez promis de donner l'exemple. Mais avant de nous séparer donnons tous ensemble le signe d'allégresse et d'union fraternelle.");
        this.action("Le Vénérable Maître, et tous les Frères avec lui, font avec les deux mains les applaudissements maçonniques par trois fois trois coups, comme à l'ouverture et sans aucune acclamation.");
        arreterMusique(false); // arrêt sec avant les applaudissements
        await this.applaudissements();
        await this.dire("V.M.", "Je vous invite tous à un banquet frugal et fraternel, venez y goûter dans une société de Frères, les charmes de l'égalité.");
        this.action("Alors, le Vénérable Maître donne le salut à tous les frères qui le lui rendent par une profonde inclination, et chacun va quitter ses vêtements et ornements maçonniques.");

        // ── Sortie en cortège ─────────────────────────────────────────────────
        this.action("Le Maître des Cérémonies monte à l'Orient chercher le Vénérable Maître. Le cortège s'ébranle, les Frères suivent. Les Surveillants ferment la marche.");
        jouerMusique('05 - sortie.mp3');

        const self = this;
        const DS = self.DUREE_WP;
        const WP0 = self.CIRCUIT[0]; // porte (630,1130)

        // Destinations dans le couloir — y entre 1200 et 1260, x entre 80 et 1180
        const positionsOccupees = [];
        const nextDest = () => {
            let x, y, tries = 0;
            do {
                x = 80  + Math.floor(Math.random() * 1101);
                y = 1200 + Math.floor(Math.random() * 61);
                tries++;
            } while (tries < 30 && positionsOccupees.some(p => Math.abs(p.x - x) < 50 && Math.abs(p.y - y) < 40));
            positionsOccupees.push({ x, y });
            return { x, y };
        };

        // Lance un pion vers la sortie depuis sa position de loge via le circuit
        const sortir = (id, delaiMs) => {
            const dest = nextDest();
            const chemin = self.cheminDepuis(self.POSITIONS[id], WP0);
            chemin.push({ x: dest.x, y: dest.y, d: 600 });
            setTimeout(() => self.processer(id, chemin), delaiMs);
        };

        // ── Phase 1 : MdC monte seul à WP5 — personne ne bouge ───────────────
        // MdC (630,1000) → WP1→2→3→4→5 : 5 WP
        const DUREE_MONTEE = 5 * DS;
        await this.processer("pion-mc", DS, WP[1], WP[2], WP[3], WP[4], WP[5]);

        // ── Phase 2 : VM et ex-Maître rejoignent le MdC en WP5 ───────────────
        await Promise.all([
            animerVers("pion-vm",       WP[5].x, WP[5].y, DS),
            animerVers("pion-ex-maitre", WP[5].x, WP[5].y, DS),
        ]);
        await this.pause(300);

        // ── Phase 3 : Le cortège s'ébranle depuis WP5 ────────────────────────
        // MdC → VM → ex-Maître, 350ms d'écart
        const DECAL = 350;
        const cheminDepuisWP5 = [
            { ...WP[6], d: DS }, // WP6
            { ...WP[7], d: DS }, // WP7
            { ...WP[8], d: DS }, // WP8
            { ...WP[1], d: DS }, // WP1
            { ...WP[0], d: DS }, // WP0
        ];
        const cortegeVM = ['pion-mc', 'pion-vm', 'pion-ex-maitre'];
        cortegeVM.forEach((id, i) => {
            const dest = nextDest();
            const chemin = [...cheminDepuisWP5, { x: dest.x, y: dest.y, d: 600 }];
            setTimeout(() => self.processer(id, chemin), i * DECAL);
        });

        // ── Phase 4 : Dès que le cortège part, tous les autres s'ébranlent ───
        // Tous sauf VM, ex-Maître, MdC et Surveillants
        const autresFreres = [
            // Dignitaires Orient
            'pion-orateur', 'pion-tresorier', 'pion-econome',
            'pion-secretaire', 'pion-eleemosynaire',
            // Maîtres Nord
            'pion-maitre1', 'pion-maitre2', 'pion-maitre3',
            // Apprentis
            'pion-appr1', 'pion-appr2', 'pion-appr3', 'pion-appr4', 'pion-appr5',
        ];
        autresFreres.forEach((id, i) => sortir(id, 500 + i * 150));

        // Colonne Midi — part avec un léger décalage
        const colonneMidi = [
            'pion-maitre4', 'pion-maitre5', 'pion-maitre6', 'pion-maitre7',
            'pion-comp1', 'pion-comp2', 'pion-comp3', 'pion-comp4', 'pion-comp5',
        ];
        const delaiMidi = 1600;
        colonneMidi.forEach((id, i) => sortir(id, delaiMidi + i * 150));

        // ── Phase 5 : Surveillants — attendent la fin, sortent directement ───
        const nbTous = autresFreres.length + colonneMidi.length;
        const delaiSurv = delaiMidi + (colonneMidi.length - 1) * 150 + 8 * DS + 600 - 2000;
        ['pion-1surv', 'pion-2surv'].forEach((id, i) => {
            const dest = nextDest();
            setTimeout(() => self.processer(id, [
                { x: WP0.x, y: WP0.y, d: DS },
                { x: dest.x, y: dest.y, d: 600 },
            ]), delaiSurv + i * DECAL);
        });

        // Attente totale
        await this.pause(delaiSurv + DECAL + DS + 600);
        arreterMusique(true);
    },


    // ── GRADE COMPAGNON ─────────────────────────────────────────────────────
    sortieApprentis: async function() {
        this._setEtape("Sortie des Apprentis");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        this.action("Le Maître des Cérémonies remonte la colonne du Nord pour raccompagner les Apprentis à la porte.");

        // Positions des apprentis sur la colonne Nord (du plus proche au plus éloigné de la porte)
        const apprentis = ['pion-appr1','pion-appr2','pion-appr3','pion-appr4',
                           'pion-appr5'];
        const posApprentis = {
            'pion-appr5': { x: 200, y: 915 },
            'pion-appr1': { x: 200, y: 534 },
            'pion-appr2': { x: 200, y: 615 },
            'pion-appr3': { x: 200, y: 715 },
            'pion-appr4': { x: 200, y: 815 },
        };
        // Position initiale du MdC (loge prête)
        const mcPos = positionPion('pion-mc');

        // MdC descend vers appr1 (le plus bas = plus proche de la porte)
        await this.processer('pion-mc', [
            { x: 200, y: mcPos ? mcPos.y : 600, d: D },
            { x: 200, y: 700, d: D },
        ]);
        await this.pause(P);

        // File indienne : MdC remonte la colonne en collectant les apprentis
        // appr1 suit le MdC, puis appr2, etc.
        // On anime simultanément avec décalages
        const DECAL = 400; // ms entre chaque pion

        // MdC remonte vers appr4 (en passant par appr1→2→3→4)
        const cheminMC = [
            { x: 200, y: 600, d: D },
            { x: 200, y: 500, d: D },
            { x: 200, y: 400, d: D },
            { x: 200, y: 300, d: D }, // demi-tour en haut
        ];

        // Lancer le MdC
        this.processer('pion-mc', cheminMC);

        // Chaque apprenti suit avec décalage croissant
        for (let i = 0; i < apprentis.length; i++) {
            await this.pause(DECAL);
            const chemin = [];
            // Remonte jusqu'au niveau de appr4 puis suit
            const startY = posApprentis[apprentis[i]].y;
            if (startY > 400) chemin.push({ x: 200, y: startY - 100, d: D });
            chemin.push({ x: 200, y: 300, d: D });
            this.processer(apprentis[i], chemin);
        }

        // Attendre que tout le monde soit en haut
        await this.pause(D * 4 + DECAL * apprentis.length);

        // Descente en file vers la porte
        this.action("Le cortège descend vers la porte.");
        const cheminDescente = [
            { x: 200, y: 500, d: D },
            { x: 200, y: 700, d: D },
            { x: 200, y: 900, d: D },
            { x: 420, y: 1130, d: D },
            { ...WP[0], d: D },
        ];

        this.processer('pion-mc', cheminDescente);
        for (let i = 0; i < apprentis.length; i++) {
            await this.pause(DECAL);
            this.processer(apprentis[i], cheminDescente);
        }

        await this.pause(D * 5 + DECAL * (apprentis.length + 1));

        // Les apprentis se rangent dans la réserve
        const reserveY = [920, 920, 920, 980];
        const reserveX = [1220, 1270, 1320, 1220];
        for (let i = 0; i < apprentis.length; i++) {
            animerVers(apprentis[i], reserveX[i], reserveY[i], 800);
        }

        // MdC revient à sa place
        await this.pause(600);
        await this.processer('pion-mc', D, { x: 630, y: 900 }, { x: 630, y: 1000 });

        this.action("Les Apprentis ont quitté la Loge. Le Maître des Cérémonies est revenu à sa place.");
    },

    retourApprentis: async function() {
        this._setEtape("Retour des Apprentis");
        const D = this.DUREE_WP;

        this.action("Le Maître des Cérémonies va chercher les Apprentis dans le couloir pour les reconduire à leurs places.");

        const apprentis = ['pion-appr1','pion-appr2','pion-appr3','pion-appr4',
                           'pion-appr5'];
        const DECAL = 400;

        // MdC sort vers WP0
        await this.processer('pion-mc', D, { x: 630, y: 900 }, WP[0]);

        // Les apprentis descendent du couloir vers WP0
        for (let i = 0; i < apprentis.length; i++) {
            animerVers(apprentis[i], WP[0].x, WP[0].y, 600);
        }
        await this.pause(800);

        // Entrée en file indienne — même logique que entreeApprentis
        // MdC entre en premier, remonte colonne Nord
        const cheminEntree = [
            { x: 630, y: 900, d: D },
            { ...WP[2], d: D },
            { ...WP[3], d: D },
            { ...WP[4], d: D },
        ];
        this.processer('pion-mc', cheminEntree);

        // Apprentis suivent avec décalage
        const posFinales = [
            { x: 200, y: 700 },
            { x: 200, y: 600 },
            { x: 200, y: 500 },
            { x: 200, y: 400 },
        ];
        for (let i = 0; i < apprentis.length; i++) {
            await this.pause(DECAL);
            const chemin = [
                { x: 630, y: 900,  d: D },
                { ...WP[2], d: D },
                { ...WP[3], d: D },
                { x: posFinales[i].x, y: posFinales[i].y, d: D },
            ];
            this.processer(apprentis[i], chemin);
        }

        await this.pause(D * 4 + DECAL * (apprentis.length + 1));

        // MdC revient à sa place
        await this.processer('pion-mc', D,
            WP[3], WP[2], { x: 630, y: 900 }, { x: 630, y: 1000 }
        );

        this.action("Les Apprentis sont revenus à leurs places sur la colonne du Nord.");
    },

    miseEnConformiteCompagnon: async function() {
        this._setEtape("Mise en conformité — Compagnon");
        window._gradeEnLoge = 'compagnon';
        this.action("Mise en conformité de la Loge de Compagnon : tapis, tableau du grade (DIRIGIT OBLIQUA), étoile flamboyante, miroir.");
        miseEnConformite('compagnon');
        // Vertus du grade : Justice, Clémence (Apprenti) + Tempérance (Compagnon)
        animerVers("pion-justice",    500, 750, 800);
        animerVers("pion-clemence",   580, 750, 800);
        animerVers("pion-temperance", 660, 750, 800);
        await this.pause(this.PAUSE_ACTION);
    },

    retourConformiteApprentis: async function() {
        this._setEtape("Retour conformité — Apprenti");
        window._gradeEnLoge = 'apprenti';
        this.action("Retour en conformité de la Loge d'Apprenti : tapis, tableau du grade (ADHUC STAT), extinction de l'étoile flamboyante.");
        miseEnConformite('apprenti');
        await this.pause(this.PAUSE_ACTION);
    },

    ouvertureCompagnon: async function() {
        this._setEtape("Ouverture — Loge de Compagnon");
        const P = this.PAUSE_ACTION;

        // Le VM frappe un coup, appelle à l'ordre
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "À l'ordre, mes Frères.");
        await this.pause(P);

        // Tous les Frères se mettent au signe de Compagnon
        this.action("Tous les Frères portent la main droite au signe de Compagnon.");
        await this.pause(P);

        // Le VM allume l'étoile flamboyante en trois temps
        this.action("Le V.M. prend du feu au chandelier et allume l'étoile flamboyante.");
        await this.parler('V.M.', "1) Que cette étoile flamboyante répande sa lumière d'orient en occident, au nord et au midi.");
        await this.pause(600);
        await this.parler('V.M.', "2) Qu'elle serve de guide à ceux qui cherchent avec un cœur droit.");
        await this.pause(600);
        await this.parler('V.M.', "3) Mais que les profanes ne puissent jamais l'apercevoir.");
        // Allumer l'étoile flamboyante (image — à connecter quand le fichier sera livré)
        allumerEtoileFlamboyante();
        await this.pause(P);

        // Coup + annonces
        await this.frapper('V.M.', 'O');
        await this.frapper('1°S.', 'O');
        await this.parler('V.M.', "Frère Premier Surveillant, annoncez que je vais ouvrir la Loge des Compagnons.");
        await this.parler('1°S.', "Frère Second Surveillant, annoncez aux Frères que le Vénérable Maître va ouvrir la Loge des Compagnons.");
        await this.parler('2°S.', "Mes Frères, de la part du Vénérable Maître, je vous annonce qu'il va ouvrir la Loge des Compagnons.");
        await this.pause(P);

        // Questions rituelles
        await this.parler('V.M.', "Frère Premier Surveillant, quel est le motif qui nous rassemble ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est le motif qui nous rassemble ?");
        await this.parler('2°S.', "Celui de chercher à se connaître soi-même, pour faire de nouveaux progrès dans la Franc-Maçonnerie.");
        await this.parler('1°S.', "Vénérable Maître, c'est celui de chercher à se connaître soi-même, pour faire de nouveaux progrès dans la Franc-Maçonnerie.");
        await this.pause(P);

        await this.parler('V.M.', "Comment pourrons-nous y parvenir ?");
        await this.parler('1°S.', "Frère Second Surveillant, comment pourrons-nous y parvenir ?");
        await this.parler('2°S.', "Avec un vrai désir, du courage et de l'intelligence.");
        await this.parler('1°S.', "Vénérable Maître, avec un vrai désir, du courage et de l'intelligence.");
        await this.pause(P);

        await this.parler('V.M.', "Pourquoi cette connaissance nous est-elle nécessaire ?");
        await this.parler('1°S.', "Frère Second Surveillant, pourquoi cette connaissance nous est-elle nécessaire ?");
        await this.parler('2°S.', "Pour nous garantir de l'erreur, nous apprendre à remplir nos devoirs, et nous rendre dignes de servir de guides à nos Frères.");
        await this.parler('1°S.', "Vénérable Maître, pour nous garantir de l'erreur, nous apprendre à remplir nos devoirs, et nous rendre dignes de servir de guides à nos Frères.");
        await this.pause(P);

        await this.parler('V.M.', "Où sont tracées les règles de nos devoirs ?");
        await this.parler('1°S.', "Frère Second Surveillant, où sont tracées les règles de nos devoirs ?");
        await this.parler('2°S.', "Elles sont empreintes dans nos cœurs ; la raison nous en instruit, la religion les perfectionne, et la tempérance nous aide à les remplir.");
        await this.parler('1°S.', "Vénérable Maître, elles sont empreintes dans nos cœurs ; la raison nous en instruit, la religion les perfectionne, et la tempérance nous aide à les remplir.");
        await this.pause(P);

        await this.parler('V.M.', "Mes Frères, que les leçons et l'exemple des maîtres nous enseignent donc à pratiquer cette vertu. Aidez-moi tous à ouvrir la Loge des Compagnons.");
        await this.parler('1°S.', "Mes Frères, aidons tous le Vénérable Maître à ouvrir la Loge des Compagnons.");
        await this.parler('2°S.', "Mes Frères, aidons tous le Vénérable Maître à ouvrir la Loge des Compagnons.");
        await this.pause(P);

        // Signes + ouverture
        await this.parler('V.M.', "Unissez-vous à moi, mes Frères.");
        this.action("Le V.M. et tous les Frères font deux fois de suite le signe entier de Compagnon, et se remettent au premier temps.");
        await this.pause(P);

        await this.parler('V.M.', "À la gloire du Grand Architecte de l'Univers, au nom de l'Ordre, et par le pouvoir que j'en ai reçu, j'ouvre cette Loge de Compagnons.");

        // Coups d'ouverture OO-O OO-O (batterie double)
        await this.pause(500);
        await this.echoCoupsGroupe('OO-O', 2);
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, annoncez à tous les Frères que la Loge des Compagnons est ouverte, et dites-leur d'être attentifs au travail.");
        await this.parler('1°S.', "Mes Frères, de la part du Vénérable Maître, la Loge des Compagnons est ouverte, soyez attentifs au travail.");
        await this.parler('2°S.', "Mes Frères, de la part du Vénérable Maître, la Loge des Compagnons est ouverte, soyez attentifs au travail.");
        await this.pause(P);

        await this.parler('V.M.', "Ayez attention, mes Frères.");
        this.action("Le V.M. et tous les Frères font une troisième fois le signe entier de Compagnon.");
        await this.pause(P);

        this.action("Le V.M. pose son épée sur la Bible et s'assoit.");
        await this.parler('V.M.', "J'invite tous les Frères à s'asseoir. Je prescris au nom de l'Ordre le plus profond silence à tous les ouvriers.");
        this.action("Les Frères remettent l'épée au fourreau et s'assoient.");
    },

    clotureCompagnon: async function() {
        this._setEtape("Clôture — Loge de Compagnon");
        const P = this.PAUSE_ACTION;

        // Coup + à l'ordre
        await this.echoCoups('O');
        this.action("Le V.M. se lève, tenant son épée la pointe haute. Tous les Frères se lèvent, tirent leurs épées la pointe contre terre, au signe de Compagnon.");
        await this.parler('V.M.', "À l'Ordre, mes Frères.");
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, puisque le travail des Compagnons est fini, avertissez les Frères que je vais fermer la Loge des Compagnons.");
        await this.parler('1°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître qu'il va fermer la Loge des Compagnons.");
        await this.parler('2°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître qu'il va fermer la Loge des Compagnons.");
        await this.pause(P);

        await this.parler('V.M.', "Mes Frères, aidez-moi tous à fermer la Loge des Compagnons.");
        await this.parler('1°S.', "Mes Frères, aidons tous le Vénérable Maître à fermer la Loge des Compagnons.");
        await this.parler('2°S.', "Mes Frères, aidons tous le Vénérable Maître à fermer la Loge des Compagnons.");
        await this.pause(P);

        await this.parler('V.M.', "Unissez-vous à moi, mes Frères.");
        this.action("Le V.M. et tous les Frères donnent deux fois de suite le signe entier de Compagnon. Tous se remettent au premier temps du signe, sauf le V.M. qui prend son maillet.");
        await this.parler('V.M.', "À la gloire du Grand Architecte de l'Univers, au nom de l'Ordre, et par le pouvoir que j'en ai reçu, je ferme cette Loge de Compagnons.");

        // Coups de clôture OO-O OO-O (batterie double)
        await this.pause(500);
        await this.echoCoupsGroupe('OO-O', 2);
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, annoncez à tous les Frères que la Loge des Compagnons est fermée.");
        await this.parler('1°S.', "Mes Frères, la Loge des Compagnons est fermée.");
        await this.parler('2°S.', "Mes Frères, la Loge des Compagnons est fermée.");
        await this.pause(P);

        await this.parler('V.M.', "Ayez attention, mes Frères.");
        this.action("Le V.M. et tous les Frères font une troisième fois le signe entier de Compagnon.");
        await this.pause(P);

        // Extinction de l'étoile flamboyante
        this.action("Le V.M. éteint les lampions de l'Étoile Flamboyante.");
        eteindrEtoileFlamboyante();
        await this.pause(P);

        // Retour en conformité Apprenti
        this.action("Retour en conformité de la Loge d'Apprenti : tapis, tableau du grade.");
        miseEnConformite('apprenti');
    },

    catechismeCompagnon: async function() {
        this._setEtape("Catéchisme de Compagnon");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Mes Frères, nous allons procéder à l'instruction par demandes et réponses du grade de Compagnon.");
        await this.pause(P);
        await this.catechismeCompagnonSection_premiere_section();
        await this.catechismeCompagnonSection_deuxieme_section();
        await this.catechismeCompagnonSection_troisieme_section();
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "L'instruction par demandes et réponses est terminée. Je remercie les Frères Surveillants.");
    },

    catechismeCompagnonSection_premiere_section: async function() {
        this._setEtape("Catéchisme Compagnon — Sect. I");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Première section du catéchisme de Compagnon.");
        await this.pause(P);

        await this.parler('V.M.', "Êtes-vous Compagnon ?");
        await this.parler('1°S.', "Oui, je le suis");
        await this.pause(200);
        await this.parler('V.M.', "A quoi le connaîtrai-je ?");
        await this.parler('2°S.', "A mes nouveaux signes, attouchements, mots et paroles");
        await this.pause(200);
        await this.parler('V.M.', "Donnez-moi le signe de Compagnon");
        this.action("(on donne le signe pectoral en entier)");
        await this.pause(200);
        await this.parler('V.M.', "Donnez-moi l'attouchement");
        this.action("(On le donne)");
        await this.pause(200);
        await this.parler('V.M.', "Donnez-moi la parole");
        await this.parler('1°S.', "Je vous la donnerai comme je l'ai reçue");
        await this.pause(200);
        await this.parler('V.M.', "Donnez-moi la première lettre, je vous donnerai la seconde");
        this.action("(On épelle le mot B)");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie cette parole ?");
        await this.parler('1°S.', "Le Seigneur est ma force (1)");
        await this.pause(200);
        await this.parler('V.M.', "Quel est le nom du Compagnon qui lui sert de mot de reconnaissance ?");
        await this.parler('2°S.', "G");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie ce mot ?");
        await this.parler('1°S.', "Expert tailleur de pierres");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi vous a-t-on donné ce mot ?");
        await this.parler('2°S.', "En mémoire des Gibloïtes, ou habitants de Giblos, qui étaient les plus habiles dans la coupe des pierres, et que Salomon employa pour tailler celles qui devaient être employées dans les fondements du Temple.");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie ce signe ?");
        await this.parler('1°S.', "Que les Maçons doivent garder fidèlement dans leur cœur tous les secrets et mystères de l'Ordre");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi vous êtes-vous fait recevoir Compagnon Maçon ?");
        await this.parler('2°S.', "Pour apprendre à connaître la lettre G.");
        await this.pause(200);
        await this.parler('V.M.', "Où l'avez-vous vue ?");
        await this.parler('1°S.', "Au centre de l'Étoile Flamboyante");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie-t-elle ?");
        await this.parler('2°S.', "Géométrie ou cinquième des sciences");
        await this.pause(200);
        await this.parler('V.M.', "Où avez-vous été reçu Compagnon ?");
        await this.parler('1°S.', "A l'entrée du Temple, près de la colonne B qui est du côté du Midi.");
        await this.pause(200);
        await this.parler('V.M.', "Comment y êtes-vous parvenu ?");
        await this.parler('2°S.', "Par la porte d'occident");
        await this.pause(200);
        await this.parler('V.M.', "Quel travail avez-vous fait pour être reçu ? R. J'ai travaillé à");
        await this.parler('1°S.', "polir la Pierre Brute");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie-t-elle ?");
        await this.parler('2°S.', "L'homme dans l'état d'ignorance, et le chaos dont tout est provenu");
        await this.pause(200);
        await this.parler('V.M.', "Sur quoi avez-vous travaillé comme Compagnon ? R. Sur la Pierre");
        await this.parler('1°S.', "cubique");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie-t-elle ?");
        await this.parler('2°S.', "La solidité des travaux des Maçons lorsqu'ils remplissent exactement les règles qui leur sont prescrites et les devoirs que l'Ordre leur impose");
        await this.pause(200);
        await this.parler('V.M.', "Comment le Maçon peut-il connaître et pratiquer ces règles et ces");
        await this.parler('1°S.', "L'univers lui en présente le tableau, et les conseils de ses Frères lui donnent les moyens de les remplir,");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient les quatre angles supérieurs de la Pierre cubique ?");
        await this.parler('2°S.', "L'universalité de l'Ordre, et les quatre parties du monde dans lesquelles il est répandu");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient les quatre angles inférieurs ?");
        await this.parler('1°S.', "Les quatre vertus qui sont la base de l'Ordre");
        await this.pause(200);
        await this.parler('V.M.', "Compagnon, connaissez-vous ces quatre vertus ?");
        await this.parler('2°S.', "Je l'ignore, les Compagnons n'étant pas encore assez avancés pour pouvoir les pratiquer");
        await this.pause(200);
        await this.parler('V.M.', "A quoi la Pierre cubique sert-elle aux Compagnons ?");
        await this.parler('1°S.', "Pour aiguiser leurs outils, et préparer ceux des Apprentis");
        await this.pause(200);
        await this.parler('V.M.', "Comment avez-vous travaillé sur la Pierre cubique ?");
        await this.parler('2°S.', "Par deux fois trois coups, qui sont la batterie de mon grade");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient les deux fois trois coups ?");
        await this.parler('1°S.', "La double loi imposée au Compagnon de remplir sa tâche exactement, sans aller au-delà, ni entreprendre des travaux réservés aux Maîtres");
        await this.pause(200);
        await this.parler('V.M.', "Comment parviendra-t-il à tenir ce juste milieu ?");
        await this.parler('2°S.', "En s'exerçant à pratiquer la vertu de son grade");
        await this.pause(200);
        await this.parler('V.M.', "Quels sont les instruments symboliques des Maçons ? R. Le Compas,");
        await this.parler('1°S.', "l'Équerre, le Niveau et la Perpendiculaire");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient-ils ?");
        await this.parler('2°S.', "La droiture de notre cœur, la justesse de notre esprit, la pureté de nos actions, et le respect que nous devons au Grand Architecte de l'Univers");
        await this.pause(200);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se termine la première section.");
    },

    catechismeCompagnonSection_deuxieme_section: async function() {
        this._setEtape("Catéchisme Compagnon — Sect. II");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Deuxième section du catéchisme de Compagnon.");
        await this.pause(P);

        await this.parler('V.M.', "Pouvez-vous m'expliquer les circonstances particulières de votre");
        await this.parler('1°S.', "Oui, Vénérable Maître");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi vous a-t-on interrogée sur l'instruction du grade");
        await this.parler('2°S.', "Pour s'assurer si, par mon application et mon travail, je méritais d'être avancé dans un grade plus élevé");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi avez-vous été conduit en Loge avec votre tablier, et les");
        await this.parler('1°S.', "Pour me faire sentir que j'étais déjà sur la bonne voie, et que je devais m'appliquer à la suivre");
        await this.pause(200);
        await this.parler('V.M.', "Où avez-vous été placé en entrant en Loge ?");
        await this.parler('2°S.', "Entre les deux Surveillants, que j'ai reconnus pour mes Frères, guides fidèles et vrais amis");
        await this.pause(200);
        await this.parler('V.M.', "Qu'ont-ils fait de vous ?");
        await this.parler('1°S.', "Non, le Vénérable Maître, craignant ma faiblesse et voulant récompenser ma confiance, m'a dispensé des deux derniers, qui étaient les plus dangereux");
        await this.pause(200);
        await this.parler('V.M.', "Qu'avez-vous vu dans les trois voyages que vous avez faits ?");
        await this.parler('2°S.', "Dans mon premier voyage j'ai trouvé l'argent au nord ; dans le second, . l'airain au midi; et dans le troisième, le fer à l'occident");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi ne vous a-t-on pas fait éprouver l'or, qui est le premier");
        await this.parler('1°S.', "et le plus pur de tous les métaux ? R. Parce que l'or étant à l'orient, les Apprentis et les Compagnons ne pourraient le découvrir");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi ne vous a-t-on pas fait connaître les autres métaux ?");
        await this.parler('2°S.', "Je ne sais, ayant été dispensé des deux derniers voyages");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi l'épée nue sur le cœur ?");
        await this.parler('1°S.', "On m'a fait retourner contre l'occident, et on m'a mis à l'épreuve");
        await this.pause(200);
        await this.parler('V.M.', "En quoi consistait cette épreuve ?");
        await this.parler('2°S.', "On m'a fait arracher le voile qui me cachait mes propres défauts, pour m'apprendre à me connaître moi-même.");
        await this.pause(200);
        await this.parler('V.M.', "Où avez-vous été conduit ensuite par les deux Surveillants ?");
        await this.parler('1°S.', "Le Vénérable Maître lui a ordonné de me faire redescendre");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi vous a-t-il fait monter et ensuite redescendre ?");
        await this.parler('2°S.', "L'Étoile flamboyante m'a été montrée dans tout son éclat, avec la lettre G au milieu");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie cette lettre ?");
        await this.parler('1°S.', "On m'a conduit par trois pas maçonniques à l'autel d'Orient, où j'ai renouvelé mes premiers engagements");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi ce renouvellement ?");
        await this.parler('2°S.', "Pour m'apprendre qu'il ne suffit pas de prendre de bonnes résolutions, mais qu'il faut savoir y persister");
        await this.pause(200);
        await this.parler('V.M.', "Que vous a produit votre persévérance ?");
        await this.parler('1°S.', "De nouveaux signes, attouchements, mots et paroles, par lesquels j'ai été ensuite reconnu Compagnon par mes Frères.");
        await this.pause(200);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se termine la deuxième section.");
    },

    catechismeCompagnonSection_troisieme_section: async function() {
        this._setEtape("Catéchisme Compagnon — Sect. III");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Troisième section du catéchisme de Compagnon.");
        await this.pause(P);

        await this.parler('V.M.', "Quelle différence y a-t-il entre le tapis des Compagnons et celui");
        await this.parler('1°S.', "Deux, en tout semblables, mais cependant distinguées par la première lettre du nom qui leur est attribué");
        await this.pause(200);
        await this.parler('V.M.', "Quelle était leur hauteur ?");
        await this.parler('2°S.', "Dix-huit coudées");
        await this.pause(200);
        await this.parler('V.M.', "De quelle hauteur étaient les fûts de ces colonnes ?");
        await this.parler('1°S.', "Douze coudées");
        await this.pause(200);
        await this.parler('V.M.', "De quelle hauteur les chapiteaux ?");
        await this.parler('2°S.', "Près de cinq coudées");
        await this.pause(200);
        await this.parler('V.M.', "Quelle était leur hauteur totale ?");
        await this.parler('1°S.', "Trente-cinq coudées (2)");
        await this.pause(200);
        await this.parler('V.M.', "Quelle était leur épaisseur ?");
        await this.parler('2°S.', "Quatre pouces");
        await this.pause(200);
        await this.parler('V.M.', "Pourquoi seulement cette épaisseur ? R. Parce qu'elles étaient");
        await this.parler('1°S.', "creuses");
        await this.pause(200);
        await this.parler('V.M.', "Quel était leur ornement ?");
        await this.parler('2°S.', "Elles soutenaient des globes sphériques ornés de lys et de grenades");
        await this.pause(200);
        await this.parler('V.M.', "Quel était leur usage pendant la construction du Temple ?");
        await this.parler('1°S.', "Elles servaient à renfermer les outils de Géométrie et le trésor pour payer les ouvriers suivant leur classe");
        await this.pause(200);
        await this.parler('V.M.', "Pouvez-vous m'en donner la parfaite explication ?");
        await this.parler('2°S.', "Une Pierre cubique sur laquelle est posée une Équerre avec des mots : Dirigit obliqua");
        await this.pause(200);
        await this.parler('V.M.', "Que signifient ce symbole et l'inscription ?");
        await this.parler('1°S.', "Le but et la perfection des travaux de l'Ordre");
        await this.pause(200);
        await this.parler('V.M.', "Quel âge avez-vous comme Compagnon ?");
        await this.parler('2°S.', "Cinq ans passés");
        await this.pause(200);
        await this.parler('V.M.', "Comment avez-vous acquis cet âge ?");
        await this.parler('1°S.', "En faisant les cinq voyages mystérieux autour des ouvrages, et en montant les cinq premières marches du Temple");
        await this.pause(200);
        await this.parler('V.M.', "Que signifie cet âge ?");
        await this.parler('2°S.', "Que j'ai appris à connaître les cinq ordres d'architecture");
        await this.pause(200);
        await this.parler('V.M.', "Quels sont-ils ?");
        await this.parler('1°S.', "L'Ionique, le Dorique, le Corinthien, le Romain et le Composite");
        await this.pause(200);
        await this.parler('V.M.', "Quels rapports y a-t-il entre les ordres d'architecture et les");
        await this.parler('2°S.', "Comme la connaissance des cinq ordres d'architecture est nécessaire à un architecte pour exercer son art, de même aussi les Maçons doivent ne pas négliger d'acquérir aucune des connaissances qui peuvent contribuer à la perfection de leurs travaux");
        await this.pause(200);
        await this.parler('V.M.', "Avez-vous été payé de votre travail ?");
        await this.parler('1°S.', "Oui, Vénérable Maître");
        await this.pause(200);
        await this.parler('V.M.', "Où avez-vous reçu votre salaire ?");
        await this.parler('2°S.', "A la colonne B, à la gauche du Temple (1), où s'assemblaient les Compagnons pour y recevoir le leur");
        await this.pause(200);
        await this.parler('V.M.', "Combien avez-vous reçu ?");
        await this.parler('1°S.', "Je connais la signification de la lettre B et je suis content.");
        await this.pause(200);
        await this.parler('V.M.', "Mes Frères, apprenons à nous bien connaître, travaillons sans relâche à polir la Pierre brute, venons souvent contempler l'Étoile flamboyante, puisque c'est le moyen de parvenir un jour à connaître les mystères qui nous sont encore voilés.");
        await this.pause(200);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "L'instruction par demandes et réponses est terminée. Je remercie les Frères Surveillants.");
    },

    // ── INSTRUCTION MORALE — GRADE DE COMPAGNON ────────────────────────────────
    instructionMoraleCompagnon: async function() {
        this._setEtape("Instruction Morale — Compagnon");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Orateur, la Loge vous demande de donner lecture de l'instruction morale du grade.");
        await this.pause(P);
        this.action("Instruction morale du grade de Compagnon.");
        await this.parler('Orateur', "Mon Cher Frère,");
        await this.pause(300);
        await this.parler('Orateur', "Vous venez aujourd'hui, mon Cher Frère, de faire le second pas dans la carrière maçonnique. Celui-ci, quoique plus simple en apparence que le premier, n'en est pas moins important, et il vous impose de nouveaux devoirs bien essentiels. Il vous offre aussi de nouveaux emblèmes à méditer, qui ne peuvent encore vous être clairement expliqués. Votre aptitude à ce travail déterminera vos progrès. Écoutez, en attendant, les explications de votre réception, elles vous aideront et vous faciliteront le nouveau travail qui vous est imposé.");
        await this.pause(300);
        await this.parler('Orateur', "Avant d'être présenté à la Loge, vous avez été livré à vos réflexions et à la solitude, pour vous apprendre que le Maçon doit peser mûrement toutes ses démarches, et se rendre un compte exact de ses motifs avant de se livrer à aucune, pour se mettre en état d'en rendre compte au Juge Suprême de toutes ses actions.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez été ensuite introduit en Loge comme un homme déjà éprouvé, et satisfait des secours que l'Ordre lui avait procurés. On vous en a accordé l'entrée pour vous fortifier dans les bonnes dispositions et dans la confiance dont vous paraissiez rempli.");
        await this.pause(300);
        await this.parler('Orateur', "Placé entre les deux Surveillants, à l'occident, vous y avez retrouvé en eux les guides et amis fidèles qui vous avaient préservé des dangers de vos premières épreuves, et qui étaient encore également disposés à vous diriger dans la route qui vous restait à suivre.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez été assujetti à cinq voyages mystérieux autour du Temple, pour vous apprendre que, lorsqu'on s'est une fois engagé dans le chemin de la vertu, il faut le suivre sans se décourager par les obstacles que l'on peut y rencontrer encore. La persévérance les diminue, et la force pour les vaincre augmente en proportion de la confiance.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez fait les voyages avec les yeux découverts, ce qui vous désigne que lorsque le Maçon a une fois ouvert les siens à la lumière par un effort de sa propre volonté et de sa confiance, elle ne l'abandonne pas, tant qu'il conserve de l'attrait pour elle.");
        await this.pause(300);
        await this.parler('Orateur', "Vous l'avez reçue dans votre premier grade, mais vous étiez encore trop peu affermi dans les vertus maçonniques.");
        await this.pause(300);
        await this.parler('Orateur', "Vos connaissances étaient trop imparfaites pour pouvoir être sans danger votre propre guide. Il fallait vous garantir de la présomption, et des préjugés dont les illusions chéries égarent l'âme des mortels, et vous mettre en état de méditer avec fruit les nouvelles maximes que l'Ordre vous destinait dans ce grade. Voilà pourquoi on vous a remis sous la conduite des Frères Surveillants.");
        await this.pause(300);
        await this.parler('Orateur', "L'unique objet de votre premier grade a été de vous exciter vivement à travailler à l'amélioration de votre être. L'objet de celui-ci a été de vous procurer de nouveaux moyens d'y réussir et de vous préparer à en mériter la récompense. Mais le plus sûr de ces moyens, c'est d'apprendre, par une étude sévère et approfondie, à se connaître soi-même.");
        await this.pause(300);
        await this.parler('Orateur', "Comment en effet pourriez-vous parvenir à faire des progrès assurés dans la recherche de la vérité, si vous n'étudiez votre propre nature, vos rapports avec les autres êtres, vos passions et vos défauts ? C'est pour vous faire sentir la nécessité absolue de se connaître soi-même, si recommandée par les philosophes les plus célèbres, qu'on vous a présenté un miroir, comme emblème de celui dans lequel vous devez apprendre à vous connaître tel que vous êtes, pour devenir tel que vous devez être.");
        await this.pause(300);
        await this.parler('Orateur', "Dans votre premier grade, vous aviez monté les trois premières marches du Temple. Dans celui-ci vous en avez monté cinq. Et, quoique vous n'ayez pas pu encore parvenir au dernier palier, ce succès est cependant un grand motif d'encouragement à la persévérance. Ne vous rebutez donc pas par les obstacles qui vous restent à surmonter pour parvenir à contempler de plus près l'Étoile flamboyante qui en éclaire le centre. Elle a déjà commencé à se montrer à vous, vous avez pu y discerner la lettre G qu'elle renferme.");
        await this.pause(300);
        await this.parler('Orateur', "Osez la prendre pour votre guide, et sa lumière ne vous trompera pas.");
        await this.pause(300);
        await this.parler('Orateur', "Avant de vous introduire, on vous avait scrupuleusement examiné, et on vous avait demandé si vos Maîtres étaient contents de votre travail, pour vous faire connaître que l'Ordre n'accorde de nouvelles faveurs qu'à ceux qui prouvent avoir bien profité des conseils et instructions qu'il leur a donnés, et qui, par leur docilité envers leurs supérieurs, ont mérité leur bienveillance. Mais on a exigé aussi de vous un nouvel engagement et la confirmation des précédents, pour vous faire sentir que, sans une persévérance à toute épreuve dans la pratique des devoirs et des préceptes que vous avez promis volontairement d'observer, vous ne devez espérer aucun succès.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez reçu de nouveaux signe, attouchement et mots caractéristiques pour vous faire reconnaître. Le signe sur le cœur vous rappelle l'attention avec laquelle le Compagnon doit veiller sur les désirs de son cœur pour réprimer ses passions, et la tendre amitié que vous devez à vos Frères. L'attouchement sur le second doigt signifie la double union que vous venez de former avec eux, et le mot vous explique la lettre B que vous voyez sur la colonne à la gauche du Temple, près de laquelle les Compagnons reçoivent leur salaire. Pratiquez fidèlement ce qui vous est exprimé par ce mot, qui signifie : le Seigneur est ma force, et vous pourrez dire avec raison qu'ayant reçu votre salaire, vous êtes content.");
        await this.pause(300);
        await this.parler('Orateur', "Comme Apprenti vous aviez travaillé à la Pierre brute, et ce travail vous avait été expressément recommandé comme indispensable. Pour vous exciter à le faire avec fruit, on ne vous avait pas laissé ignorer que cette pierre est l'emblème de l'homme qui, depuis son enfance, devenu l'esclave des passions et des préjugés, est comme brut et enseveli dans les ténèbres de l'ignorance, jusqu'à ce qu'une force active secondée de celle de sa propre volonté, vienne l'aider à développer en lui le germe précieux qui est enfermé dans son âme.");
        await this.pause(300);
        await this.parler('Orateur', "Comme Compagnon, vous avez été admis à travailler sur la Pierre cubique polie. Celle-ci est l'emblème de l'homme qui, commençant à se connaître, travaille avec fruit sous la direction de ses Maîtres à acquérir la perfection dont son être est susceptible. Le guide que la Loge vous a donné pour vous conduire de la Pierre brute à la Pierre cubique polie, et qui vous a appris à la travailler, figure cette force active et bienfaisante qui préside à votre éducation et favorise vos efforts. Ne rendez donc pas ses soins inutiles, et employez souvent l'Équerre, le Niveau, et la perpendiculaire pour faire disparaître entièrement la Pierre brute ; et que vos Frères ne voient plus en vous qu'une Pierre polie, digne d'entrer dans la construction du Temple auquel vous travaillez avec eux. Venez donc souvent vous ranger sous la colonne de votre grade ; rendez-y les Maîtres témoins de vos progrès ; qu'ils vous voient pratiquer constamment toutes les vertus qui vous sont désignées par les sept marches qui conduisent au Temple, et fuir sans relâche les vices qui vous en interdiraient à jamais l'entrée. Vous vous assurerez par-là, la récompense de vos travaux.");
        await this.pause(300);
        await this.parler('Orateur', "C'est à regret, mon cher Frère, que nous vous laissons encore bien des choses à désirer. Mais si vous avez été attentif aux explications qui vous ont été données et aux maximes qui vous ont été enseignées, vous devez sentir, et on ne vous l'a pas laissé ignorer, que notre devoir est de vous aider dans votre travail, mais non pas de le faire.");
        await this.pause(300);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Je remercie le Frère Orateur. Mes Frères, méditez ces enseignements.");
    },

    receptionCompagnonProclamation: async function() {
        this._setEtape("Réception Compagnon — Proclamation");
        if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('logeOuverte');
        const P = this.PAUSE_ACTION;

        await this.parler('V.M.', "Mes Chers Frères, le Frère Apprenti N.. N.., professant la religion chrétienne, désire de faire de nouveaux progrès dans la Franc-Maçonnerie, et d'être reçu dans la classe des Frères Compagnons de l'Ordre. Il a fini son temps ; la Loge a consenti à son avancement par un scrutin régulier, ainsi que la lecture du protocole va vous le confirmer. Voici le moment de donner votre consentement définitif à sa réception.");
        await this.parler('V.M.', "Frère Secrétaire, lisez le protocole de scrutin et d'admission du Frère N.. N.. pour le grade de Compagnon.");
        this.action("Le Frère Secrétaire lit le protocole de scrutin.");
        await this.pause(P * 2);

        await this.parler('V.M.', "Frère Préparateur, faites-nous connaître les dispositions actuelles du Frère Apprenti.");
        this.action("Le Frère Préparateur fait son rapport.");
        await this.pause(P);
        await this.parler('Prép.', "Je vous conjure, Vénérable Maître, d'accorder au Frère Apprenti un conseil éclairé, courageux et impartial, qui lui apprenne à se connaître lui-même, pour se garantir de la présomption et de l'orgueil.");
        await this.parler('V.M.', "Mon Frère, celui qui ne cherche à se connaître qu'avec la volonté ferme et sincère de corriger ses vices et de pratiquer le bien, ne manque jamais de moyens pour se voir lui-même tel qu'il est. J'accorderai cependant un guide à ce Frère, si la Loge le trouve digne de participer à nos travaux.");
        await this.pause(P);

        await this.parler('V.M.', "Mes Chers Frères, si vous jugez le Frère Apprenti N.. N.. digne d'être reçu au grade de Compagnon, je vous invite à me le faire connaître à l'instant dans la forme accoutumée. Persistez-vous donc dans le consentement que vous avez donné en sa faveur ?");
        this.action("Signe de consentement : bras droit en avant, main en équerre, paume tournée contre terre. Les Frères opposants se lèvent sans étendre le bras.");
        await this.pause(P);

        await this.parler('V.M.', "Puisque rien ne s'y oppose, l'Apprenti sera élevé au grade de Compagnon. Frère N.., que j'ai nommé pour diriger et introduire le candidat, allez finir sa préparation selon les lois et usages de l'Ordre. Le Frère N.., son parrain, vous assistera dans ce travail, et vous le présenterez ensuite à la Loge.");
        this.action("L'Introducteur et le parrain s'inclinent devant l'autel d'Orient, main droite au signe de Compagnon, et sortent.");

        // Introducteur et maitre1 (parrain) sortent
        await this.processer('pion-maitre1', this.DUREE_WP, WP[1], WP[0]);

        this.action("Pendant l'absence du Frère Introducteur, le V.M. fait lire les articles du rituel concernant les devoirs du Frère Proposant et les règles à observer pendant la cérémonie.");
        await this.pause(P * 3);
    },

    receptionCompagnonIntroduction: async function() {
        this._setEtape("Réception Compagnon — Introduction");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Batterie à la porte
        this.action("Le Frère Introducteur annonce le candidat à la porte par la batterie d'Apprenti.");
        await this.frapperPorte('Intr', null, 'OO-O');
        await this.parler('2°S.', "Frère Premier Surveillant, on frappe à la porte de la Loge en Apprenti.");
        await this.parler('1°S.', "Vénérable Maître, on frappe à la porte de la Loge en Apprenti.");
        await this.parler('V.M.', "Frère Premier Surveillant, dites au Frère Second Surveillant de voir qui c'est.");
        await this.parler('1°S.', "Frère Second Surveillant, voyez qui c'est.");
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.parler('2°S.', "Qui est-ce qui a frappé en Apprenti ?");
        await this.parler('Intr', "C'est un Apprenti qui demande à être reçu Compagnon.");
        await this.parler('2°S.', "Frère Premier Surveillant, c'est un Apprenti qui demande à être reçu Compagnon.");
        await this.parler('1°S.', "Vénérable Maître, c'est un Apprenti qui demande à être reçu Compagnon.");
        await this.pause(P);

        // Questions d'identité
        await this.parler('V.M.', "Frère Premier Surveillant, quel est son nom de baptême, son nom et son état civil, son âge, le lieu de son domicile, et sa religion ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est son nom de baptême, son nom et son état civil, son âge, le lieu de son domicile, et sa religion ?");
        await this.parler('2°S.', "Quel est son nom de baptême, son nom et son état civil, son âge, le lieu de son domicile, et sa religion ?");
        await this.parler('Cand.', "Je m'appelle N.. N.., mon état civil est..., je suis âgé de..., je suis domicilié à..., et je professe la religion chrétienne.");
        await this.parler('2°S.', "Frère Premier Surveillant, il s'appelle N.. N.., son état civil est..., il est âgé de..., il est domicilié à..., et il professe la religion chrétienne.");
        await this.parler('1°S.', "Vénérable Maître, il s'appelle N.. N.., son état civil est..., il est âgé de..., il est domicilié à..., et il professe la religion chrétienne.");
        await this.pause(P);

        // Questions d'Ordre
        await this.parler('V.M.', "Frère Premier Surveillant, quel est son nom et son âge d'Ordre ? Où a-t-il travaillé, et sur quelle partie a-t-il fait son travail ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est son nom et son âge d'Ordre ? Où a-t-il travaillé, et sur quelle partie a-t-il fait son travail ?");
        await this.parler('2°S.', "Quel est son nom et son âge d'Ordre ? Où a-t-il travaillé, et sur quelle partie a-t-il fait son travail ?");
        await this.parler('Cand.', "Mon nom est P... ; j'ai trois ans passés ; j'ai travaillé dans le porche du temple à dégrossir la pierre brute.");
        await this.parler('2°S.', "Frère Premier Surveillant, son nom est P... ; il a trois ans passés ; il a travaillé dans le porche du temple à dégrossir la pierre brute.");
        await this.parler('1°S.', "Vénérable Maître, son nom est P... ; il a trois ans passés ; il a travaillé dans le porche du temple à dégrossir la pierre brute.");
        await this.pause(P);

        // Questions sur le temps et le garant
        await this.parler('V.M.', "Frère Premier Surveillant, a-t-il fini son temps, ses maîtres sont-ils satisfaits, et qui est-ce qui répond de lui dans la Loge ?");
        await this.parler('1°S.', "Frère Second Surveillant, a-t-il fini son temps, ses maîtres sont-ils satisfaits, et qui est-ce qui répond de lui dans la Loge ?");
        await this.parler('2°S.', "A-t-il fini son temps, ses maîtres sont-ils satisfaits, et qui est-ce qui répond de lui dans la Loge ?");
        await this.parler('Cand.', "J'ai fini mon temps, mes maîtres sont satisfaits, et le Frère N.. répond de moi dans la Loge.");
        await this.parler('2°S.', "Frère Premier Surveillant, il a fini son temps, ses maîtres sont satisfaits, et le Frère N.. répond de lui dans la Loge.");
        await this.parler('1°S.', "Vénérable Maître, il a fini son temps, ses maîtres sont satisfaits, et le Frère N.. répond de lui dans la Loge.");
        await this.pause(P);

        // Interpellation du garant
        await this.parler('V.M.', "Frère N.., le Frère Apprenti qui se présente pour être reçu Compagnon assure que vous répondez de lui à la Loge. Vous connaissez à ce titre toute l'étendue de vos devoirs envers l'Ordre et de vos obligations envers le candidat. Dites donc à haute voix si vous en répondez à l'Ordre et à vos Frères.");
        this.action("Le Frère proposant répond affirmativement.");
        await this.pause(P);

        // Dernier consentement + introduction
        await this.parler('V.M.', "Mes Frères, consentez-vous que le Frère Apprenti N.. N.. soit introduit pour être reçu Compagnon ? Je vous le demande pour la dernière fois.");
        await this.frapper('V.M.', 'O');
        this.action("Signe de consentement donné.");
        await this.echoCoups('O');

        this.action("Tous les Frères se rangent en silence autour du tapis. Le MdC fait descendre le voile sur l'étoile flamboyante.");
        await this.pause(P);

        // Frères se rangent autour du tapis (positions circuit)
        await this.fileIndienne([
            { id: 'pion-maitre2', dest: WP[2] },
            { id: 'pion-maitre3', dest: WP[3] },
            { id: 'pion-maitre4', dest: WP[4] },
            { id: 'pion-comp1',   dest: WP[6] },
            { id: 'pion-comp2',   dest: WP[7] },
            { id: 'pion-comp3',   dest: WP[8] },
        ]);
        await this.pause(D);

        await this.echoCoups('O');
        await this.parler('V.M.', "Frère Premier Surveillant, puisque le Frère Apprenti persévère dans le désir de faire de nouveaux progrès dans l'Ordre, qu'il soit introduit.");
        await this.parler('1°S.', "Frère Second Surveillant, puisque le Frère Apprenti persévère dans le désir de faire de nouveaux progrès dans l'Ordre, qu'il soit introduit.");
        await this.frapperPorte('2°S.', 'Intr', 'OO-O');
        await this.parler('2°S.', "Mon Frère, le Vénérable Maître permet que vous introduisiez dans la Loge des Compagnons ce Frère Apprenti qui persévère dans ses travaux.");

        // Entrée du candidat à l'Occident — l'Introducteur entre avec lui
        this.action("L'Introducteur tient le candidat par la main droite et entre à pas libres. Il le place à l'Occident entre les deux Surveillants.");
        animerVers("pion-maitre1", 630, 900, D);
        await this.processer('pion-candidat', D, { x: 630, y: 900 }, WP[1]);
        animerVers("pion-maitre1", WP[1].x, WP[1].y + 40, D);
        await this.pause(P);

        this.action("L'Introducteur fait faire au candidat le signe d'Apprenti et saluer l'Orient.");
        await this.parler('Intr', "Mon Frère, pour répondre à votre confiance, je vous ai conduit selon vos désirs dans un lieu dont vous n'auriez pu approcher sans guide. Mais il vous faut ici de nouveaux secours pour les travaux que vous allez entreprendre, et je supplie le Vénérable Maître de vous les accorder.");
        await this.pause(P);

        // Dialogue VM / candidat
        await this.parler('V.M.', "Frère Apprenti, que demandez-vous ?");
        await this.parler('Cand.', "Je prie la Respectable Loge de m'admettre au nombre des Compagnons de l'Ordre.");
        await this.parler('V.M.', "Quel est le vrai motif de votre demande ?");
        await this.parler('Cand.', "Le désir d'augmenter mes connaissances, et d'acquérir de plus grandes forces pour remplir tous mes devoirs.");
        await this.parler('V.M.', "Êtes-vous donc bien persuadé que vous pouvez devenir plus fort et meilleur parmi nous ?");
        await this.pause(P);

        await this.parler('V.M.', "Frère Apprenti, lorsque vous fûtes présenté pour la première fois à la Loge, vous y fûtes annoncé comme un cherchant. Votre constance dans ce travail et votre bonne conduite dans notre Ordre respectable vous font reconnaître aujourd'hui pour un vrai persévérant. C'est à ce titre que les portes de la Loge des Compagnons viennent de vous être ouvertes.");
        await this.parler('V.M.', "Le désir que vous avez témoigné d'y acquérir de nouvelles connaissances pour augmenter vos forces a déterminé la Loge à consentir à votre avancement. Devenez donc de plus en plus digne de la faveur qu'elle vous accorde. C'est le seul moyen de lui en marquer votre reconnaissance, et c'est aussi la principale preuve qu'elle en exige de vous.");
        await this.parler('V.M.', "Dans votre réception au grade d'Apprenti, vous fîtes plusieurs voyages emblématiques. Mais, étant alors dans les ténèbres, votre propre intérêt suffisait pour vous engager à suivre fidèlement les guides qui vous avaient été donnés. Aussi n'exigea-t-on de vous qu'une confiance sincère, et la sécurité qui en est inséparable. En ce moment, vous allez faire de nouveaux voyages. Mais vous ne serez pas privé de la lumière, comme vous l'étiez alors, et vous devrez faire preuve devant nous, non seulement d'une confiance entière dans vos guides, mais encore d'une docilité sans réserve.");
        await this.parler('V.M.', "Ces voyages sont très difficiles et, quoique la voie vous en soit ouverte, vous vous égareriez infailliblement si vous vous conduisiez par vous-même. Sachez donc devenir humble et renoncer à votre propre sens, quelque éclairé que vous vous croyiez, et laissez-vous guider par ceux qui sont plus instruits que vous, si vous voulez arriver heureusement au terme. C'est ainsi, mon Frère, que vous mériterez de connaître le véritable but de ces emblèmes.");
    },

    receptionCompagnonVoyages: async function() {
        this._setEtape("Réception Compagnon — Voyages");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Coup + ordre du VM
        await this.echoCoups('O');
        await this.parler('V.M.', "Frère Second Surveillant, le Frère Apprenti persévère dans son désir parce qu'il ignore encore les obstacles qu'il lui faut vaincre et les sacrifices qu'il doit faire. Qu'il lui soit donc permis d'entreprendre les cinq voyages emblématiques autour de nos ouvrages mystérieux, afin qu'il s'éprouve lui-même, et guidez-le dans ce travail.");
        await this.pause(P);

        // PREMIER VOYAGE — sens du soleil (PW1→10)
        this.action("PREMIER VOYAGE — Le 2°S. prend la main droite du candidat. Épée nue sur le cœur. Tour de loge du côté Midi vers le Nord.");
        await this.processerCortege(D, PW[1],PW[2],PW[3],PW[4],PW[5],PW[6],PW[7],PW[8],PW[9],PW[10]);

        // Arrêt au Nord — présentation de l'argent
        await this.pause(P);
        await this.parler('Intr', "L'argent a divisé les hommes et séparé les Frères.");
        this.action("Le candidat jette l'argent à ses pieds.");

        // Retour à l'Occident
        await this.processerCortege(D, WP[0], WP[1]);
        this.action("Le candidat salue profondément l'Orient.");
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Apprenti, l'insensé voyage toute sa vie sans savoir où il va, ni d'où il vient, ni ce qu'il doit faire. Mais le sage se rend compte de tous ses pas, parce qu'il en connaît l'importance et le terme.");
        await this.parler('V.M.', "Frère Second Surveillant, faites-lui faire le second voyage.");
        await this.pause(P);

        // SECOND VOYAGE — sens inverse (PW10→1)
        this.action("SECOND VOYAGE — Sens inverse. Tour de loge du côté Nord vers le Midi.");
        await this.processerCortege(D, PW[10],PW[9],PW[8],PW[7],PW[6],PW[5],PW[4],PW[3],PW[2],PW[1]);

        // Arrêt au Midi — présentation du cuivre
        await this.pause(P);
        await this.parler('Intr', "Mon Frère, ce métal est l'emblème de l'orgueil qui, par son alliage impur, dégrade les plus grandes vertus.");
        this.action("Le candidat jette l'airain à ses pieds.");

        // Retour à l'Occident
        await this.processerCortege(D, WP[0], WP[1]);
        this.action("Le candidat salue profondément l'Orient.");
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "L'homme est naturellement bon, juste et compatissant. Pourquoi est-il si souvent en contradiction avec lui-même ? Étudiez-en sérieusement la cause, Frère Apprenti, elle est bien importante à découvrir.");
        await this.parler('V.M.', "Frère Second Surveillant, faites-lui faire le troisième voyage.");
        await this.pause(P);

        // TROISIÈME VOYAGE — sens du soleil
        this.action("TROISIÈME VOYAGE — Sens du soleil, comme le premier.");
        await this.processerCortege(D, PW[1],PW[2],PW[3],PW[4],PW[5],PW[6],PW[7],PW[8],PW[9],PW[10]);

        // Arrêt au Nord — présentation du fer
        await this.pause(P);
        await this.parler('Intr', "Frère Apprenti, le plus dur des métaux est détruit par la rouille, lorsqu'il est abandonné à lui-même.");
        this.action("Le candidat jette le fer à ses pieds. Il se tourne vers l'Orient et salue profondément.");
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Celui qui, étant une fois entré dans le chemin de la vertu et de la vérité, n'a pas le courage d'y persévérer, est cent fois plus à plaindre qu'il n'était auparavant.");
        await this.pause(P);

        // Retour à l'Occident après le 3e voyage
        await this.processerCortege(D, WP[0], WP[1]);

        // Bilan des voyages
        await this.parler('V.M.', "Frère Second Surveillant, où en est le travail de l'Apprenti ?");
        await this.parler('2°S.', "Vénérable Maître, il a fait les trois premiers voyages, et il a vaincu les obstacles des métaux après en avoir aperçu les dangers.");
        await this.parler('V.M.', "Frère Second Surveillant, l'Apprenti devait faire cinq voyages pour parvenir au grade de Compagnon, mais en suivant vos conseils avec docilité dans les trois qu'il a déjà faits, il nous a suffisamment prouvé la défiance qu'il a de lui-même ; je le dispense donc des deux derniers voyages.");
        await this.pause(P);

        await this.parler('V.M.', "Frère Apprenti, avez-vous bien entendu les trois nouvelles maximes que je viens de vous donner au nom de l'Ordre ?");
        await this.parler('V.M.', "Méditez-les donc souvent, afin qu'elles vous soient profitables selon les vues de l'Ordre, et pour mériter la faveur qu'il vous accorde aujourd'hui. Le promettez-vous ?");
        await this.parler('V.M.', "J'accepte votre promesse ; soyez-y fidèle, et ne vous flattez d'aucun succès dans l'Ordre, si vous négligez de la remplir.");
        await this.frapper('V.M.', 'O');

        // Tous reprennent leurs places
        this.action("Tous les Frères reprennent leurs places en silence. Le 2°S. enlève l'épée de la poitrine du candidat.");
        this.action("Le Maître des Cérémonies allume les deux bougies du miroir.");

        // Dispersion — ordre inverse de la formation
        {
            const PP = this.POSITIONS;
            const D2 = 1200;
            // Vague 1 : MdC retourne, Surveillants encadrent le candidat
            animerVers("pion-2surv",  590, 830, D2);
            animerVers("pion-1surv",  670, 830, D2);
            animerVers("pion-mc", PP["pion-mc"].x, PP["pion-mc"].y, D2);
            await this.pause(D2 + 200);
            // Vague 2 : Maîtres en formation (m1 = Introducteur retourne à sa place)
            animerVers("pion-maitre1", PP["pion-maitre1"].x, PP["pion-maitre1"].y, D2);
            animerVers("pion-maitre2", PP["pion-maitre2"].x, PP["pion-maitre2"].y, D2);
            animerVers("pion-maitre3", PP["pion-maitre3"].x, PP["pion-maitre3"].y, D2);
            animerVers("pion-maitre4", PP["pion-maitre4"].x, PP["pion-maitre4"].y, D2);
            await this.pause(D2 + 200);
            // Vague 3 : Compagnons en formation
            animerVers("pion-comp1", PP["pion-comp1"].x, PP["pion-comp1"].y, D2);
            animerVers("pion-comp2", PP["pion-comp2"].x, PP["pion-comp2"].y, D2);
            animerVers("pion-comp3", PP["pion-comp3"].x, PP["pion-comp3"].y, D2);
            await this.pause(D2 + 200);
        }

        // LEÇON EMBLÉMATIQUE — miroir
        await this.pause(P);
        await this.parler('V.M.', "Frère Apprenti, la pierre sur laquelle vous avez dû travailler était brute et informe. Les maîtres même n'en pouvaient connaître ni les défauts, ni la beauté. Sous l'inspection des chefs, vous fûtes chargé de la nettoyer et de la dégrossir, afin qu'ils pussent l'estimer à sa véritable valeur et en déterminer l'emploi.");
        await this.parler('V.M.', "Mais l'Apprenti se fait toujours illusion à lui-même ; il s'applaudit ordinairement de ses moindres essais, et il admire son ouvrage quoiqu'il soit encore très irrégulier et rempli de défauts. Frères Surveillants, conduisez le Frère Apprenti à l'emblème des Compagnons, afin qu'il y apprenne ce qu'il doit faire.");

        // Conduite au miroir
        this.action("Les deux Surveillants conduisent le candidat devant le miroir.");
        await this.processer('pion-candidat', D, { x: 458, y: 1060 });
        await this.parler('1°S.', "Mon Frère, lisez attentivement ces mots, c'est pour vous qu'ils sont écrits.");
        this.action("Le Premier Surveillant tire le rideau. La glace du miroir est découverte.");
        await this.parler('1°S.', "Voyez-vous donc tel que vous êtes.");
        await this.pause(P * 2);

        // Retour à l'Occident
        await this.frapper('V.M.', 'O');
        this.action("Les Surveillants ramènent en silence le candidat à l'Occident du tapis, face à l'Orient.");
        await this.processer('pion-candidat', D, WP[1]);
        this.action("Le Maître des Cérémonies éteint les deux bougies du miroir.");
        await this.pause(P);

        await this.parler('V.M.', "Frère Apprenti, donnez dès à présent toute votre attention au conseil que vous venez de recevoir. Pénétrez courageusement dans les replis de votre cœur, sondez jusque dans le fond de votre âme pour y trouver la connaissance de vous-même. Ce travail est pénible, il est vrai ; mais il donne la clé de tous les mystères, et conduit au vrai bonheur.");
        await this.parler('V.M.', "Arrachez donc le voile, mon Frère, afin de vous voir tel que vous êtes. Mais que vos difformités ne vous effraient point ; et ne perdez pas de vue que d'un bloc informe et sans beauté, l'artiste peut faire une image exacte de l'être le plus accompli qui soit dans la nature.");
        await this.parler('V.M.', "Frères Surveillants, conduisez l'Apprenti devant la porte du temple, au bas de l'escalier. Que, guidé par vous, il essaie de nouveau ses forces pour y monter, et pour contempler de plus près la régularité et la beauté de cet édifice qui doit à jamais servir de modèle à ses travaux.");
        await this.pause(P);

        // L'escalier du temple — 5 marches (3 + 2)
        this.action("Le candidat est placé au bas de l'escalier, pieds en équerre.");
        {
            const yBase = 830, stepH = Math.round((yBase - 690) / 3); // ≈ 47px / marche
            const durPas = 700, cX = 630;
            // Marches 1-3 → palier 3
            for (let i = 1; i <= 3; i++) {
                const y = yBase - i * stepH;
                await Promise.all([
                    animerVers("pion-candidat", cX,       y, durPas),
                    animerVers("pion-2surv",    cX - 40,  y, durPas),
                    animerVers("pion-1surv",    cX + 40,  y, durPas),
                ]);
                this._afficherPas(i, cX, y);
                await this.pause(1000);
            }
            this.action("Signe entier d'Apprenti au palier 3.");
            await this.pause(P);
            // Marches 4-5 → palier 5
            for (let i = 4; i <= 5; i++) {
                const y = yBase - i * stepH;
                await Promise.all([
                    animerVers("pion-candidat", cX,       y, durPas),
                    animerVers("pion-2surv",    cX - 40,  y, durPas),
                    animerVers("pion-1surv",    cX + 40,  y, durPas),
                ]);
                this._afficherPas(i, cX, y);
                await this.pause(1000);
            }
            this.action("Le Premier Surveillant lui montre le mot TEMPÉRANCE — palier 5.");

            await this.parler('V.M.', "Comment celui qui n'a pas encore réglé ses pensées, ses paroles et ses actions par la tempérance, ose-t-il s'approcher du temple de la justice, puisqu'elle serait toujours contraire à ses penchants désordonnés ?");
            await this.parler('V.M.', "Mes Frères, c'est par la tempérance que l'homme s'abstient de tout ce qui peut le corrompre et l'éloigner de la vérité.");
            await this.frapper('V.M.', 'O');
            await this.parler('V.M.', "Frères Surveillants, que demandez-vous ?");
            await this.parler('1°S.', "Vénérable Maître, le Frère Apprenti est parvenu à monter les cinq premières marches de l'escalier du temple, mais n'ayant pas le signe caractéristique, il n'a pu monter plus haut.");
            await this.parler('V.M.', "Faites-le redescendre, son temps n'est pas venu, son travail n'est pas encore assez parfait, et l'entrée du temple ne lui est pas encore permise. Mais pour l'encourager, faites-lui connaître l'Étoile flamboyante dont la lumière doit désormais le diriger, et vous le présenterez ensuite à l'autel d'orient par la marche des Compagnons.");

            // Redescente
            await Promise.all([
                animerVers("pion-candidat", cX,       yBase, 1500),
                animerVers("pion-2surv",    cX - 40,  yBase, 1500),
                animerVers("pion-1surv",    cX + 40,  yBase, 1500),
            ]);
        }

        // Dévoilement de l'étoile flamboyante
        this.action("On dévoile l'Étoile flamboyante au-dessus de l'autel d'Orient.");
        allumerEtoileFlamboyante();
        await this.parler('1°S.', "Contemplez cette Étoile flamboyante à cinq pointes ; apprenez à la connaître, et qu'elle soit dès à présent votre unique guide.");

        // Trois pas maçonniques d'Apprenti par-dessus le tapis : WP1→WP7→WP3→WP5
        this.action("Le candidat fait les trois pas maçonniques d'Apprenti par-dessus le tapis. Les Surveillants le conduisent à l'autel d'Orient.");
        {
            const durPasM = 900;
            // Pas 1 : WP1 → WP7
            await Promise.all([
                animerVers("pion-candidat", WP[7].x,       WP[7].y,      durPasM),
                animerVers("pion-2surv",    WP[7].x - 40,  WP[7].y,      durPasM),
                animerVers("pion-1surv",    WP[7].x + 40,  WP[7].y,      durPasM),
            ]);
            this._afficherPas(1, WP[7].x, WP[7].y);
            await this.pause(1000);
            // Pas 2 : WP7 → WP3
            await Promise.all([
                animerVers("pion-candidat", WP[3].x,       WP[3].y,      durPasM),
                animerVers("pion-2surv",    WP[3].x - 40,  WP[3].y,      durPasM),
                animerVers("pion-1surv",    WP[3].x + 40,  WP[3].y,      durPasM),
            ]);
            this._afficherPas(2, WP[3].x, WP[3].y);
            await this.pause(1000);
            // Pas 3 : WP3 → WP5
            await Promise.all([
                animerVers("pion-candidat", WP[5].x,       WP[5].y,      durPasM),
                animerVers("pion-2surv",    WP[5].x - 40,  WP[5].y,      durPasM),
                animerVers("pion-1surv",    WP[5].x + 40,  WP[5].y,      durPasM),
            ]);
            this._afficherPas(3, WP[5].x, WP[5].y);
            await this.pause(1000);
            // Agenouillement au coussin
            await Promise.all([
                animerVers("pion-candidat", 633,  242, 1200),
                animerVers("pion-2surv",    590,  242, 1200),
                animerVers("pion-1surv",    670,  242, 1200),
            ]);
        }
        await this.pause(P);

        await this.parler('V.M.', "Mon Frère, comme Apprenti, vous montâtes les trois premières marches de l'escalier du temple, et vous acquîtes l'âge de trois ans. Aujourd'hui, vous montant plus ferme dans les vertus maçonniques, vous avez pu monter deux marches de plus. Mais, n'ayant pas le signe caractéristique qui pouvait vous élever jusqu'au plus haut degré de cet escalier mystérieux, vous avez été arrêté au nombre 5. C'est là qu'on vous a fait connaître la vertu sans laquelle l'homme ne peut aimer la justice, ni se soumettre à ses lois, et vous avez acquis l'âge de cinq ans.");
        await this.parler('V.M.', "Que sa clarté vous aide donc à en découvrir les défauts, et que vos maîtres s'aperçoivent que vous vous efforcez de les rectifier. C'est ainsi, mon Frère, que vous mériterez de voir enfin ouvrir devant vous les portes de ce temple. Mais souvenez-vous que si vous n'avez pas un vrai désir, du courage et de l'intelligence, vous ne pourrez vaincre les obstacles. Êtes-vous bien décidé à employer ces puissants moyens ?");
        await this.parler('V.M.', "Vous êtes donc disposé à renouveler vos premiers engagements, et à contracter celui des Compagnons ?");
        await this.parler('V.M.', "Frères Surveillants, faites-le placer comme il doit l'être pour prononcer l'engagement de ce grade.");
        this.action("Les deux Surveillants font mettre le candidat à genoux sur le coussin, genou droit sur l'équerre, genou gauche relevé. Main droite sur l'Évangile et l'épée du V.M. Le V.M. lui met le compas ouvert dans la main gauche, pointe sur le cœur.");
    },

    receptionCompagnonSerment: async function() {
        this._setEtape("Réception Compagnon — Serment");
        const P = this.PAUSE_ACTION;

        await this.parler('V.M.', "Vous étiez dans l'obscurité, quoique parfaitement libre, lorsque vous prononçâtes votre premier engagement maçonnique. Aujourd'hui, vous avez marché dans la lumière, et vous avez pu entrevoir quel est le but de nos travaux. Dites-nous si vous persistez librement dans la volonté de renouveler les engagements que vous avez déjà prêtés, et d'en contracter de plus étendus.");
        await this.pause(P);

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "À l'ordre, mes Frères.");
        this.action("Tous les Frères se lèvent, tirent l'épée la pointe haute, chapeau bas.");
        await this.pause(P);

        this.action("Le Premier Surveillant présente au candidat la feuille de l'engagement.");
        await this.parler('Cand.', "Moi, N.. N.., je promets en présence du Grand Architecte de l'Univers, et je m'engage sur ma parole d'honneur devant cette respectable assemblée, de ne point révéler aux profanes, ni même à aucun Apprenti, les mystères et secrets particuliers au grade de Compagnon ; de les tenir inviolablement cachés dans mon cœur, envers tous ceux que je n'aurai pas reconnus pour vrais et légitimes Compagnons Francs-Maçons, et je renouvelle de cœur et de bouche tous les engagements que j'ai contractés en entrant dans l'Ordre. Ainsi, que Dieu me soit en aide.");
        await this.pause(P);
    },

    receptionCompagnonReception: async function() {
        this._setEtape("Réception Compagnon — Réception");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        await this.parler('V.M.', "À la gloire du Grand Architecte de l'Univers ; au nom de l'Ordre ; et par le pouvoir que j'en ai reçu ; je vous reçois Compagnon Franc-Maçon.");
        this.action("Le V.M. bat sur la tête du compas OO-O OO-O.");
        await this.frapper('V.M.', 'OO-O');
        await this.frapper('V.M.', 'OO-O');
        await this.pause(P);

        await this.parler('V.M.', "Frère secrétaire, qu'il soit écrit sur le livre de l'Ordre que le Frère N.. N.. a été reçu Compagnon, et que son nom soit désormais parmi ceux des Frères de ce grade.");
        this.action("Les deux Surveillants font relever le nouveau reçu.");
        await this.pause(P);

        await this.parler('V.M.', "Frère Compagnon, vous avez jusqu'à présent travaillé pour dégrossir les matériaux destinés à la construction du temple. Vous devez maintenant vous employer sans relâche à les perfectionner pour les mettre en œuvre. Préparez donc sans délai les outils qui vous seront nécessaires. Votre intelligence en déterminera le choix ; mais c'est votre cœur seul qui doit en diriger l'usage. Venez maintenant recevoir les signes et les marques distinctives de votre grade.");
        await this.frapper('V.M.', 'O');
        this.action("Tous les Frères remettent leur épée au fourreau, se couvrent et s'assoient. Les Surveillants reprennent leurs places. Le MdC fait avancer le nouveau reçu vers le V.M., au côté droit de l'autel.");

        // Les Surveillants retournent à leur pupitre
        animerVers("pion-1surv", this.POSITIONS["pion-1surv"].x, this.POSITIONS["pion-1surv"].y, D);
        animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, D);

        // Candidat avance vers le VM
        await this.processer('pion-candidat', D, { x: 680, y: 280 });
        await this.pause(P);
    },

    receptionCompagnonLumiere: async function() {
        this._setEtape("Réception Compagnon — Lumière");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        await this.parler('V.M.', "Votre tablier sera désormais attaché avec ce ruban bleu. L'Ordre, en vous décorant de cette couleur qui vous rapproche de la classe des Maîtres, vous invite à redoubler de zèle et d'exactitude, afin de vous rendre digne d'y parvenir.");
        await this.parler('V.M.', "Je vous rends votre épée. Qu'elle soit désormais le signe de votre vigilance à repousser loin de vous tout désir injuste ou dangereux.");
        await this.parler('V.M.', "Je vous rends votre chapeau. Cependant, il vous est encore interdit, mon Frère, de vous en servir en loge, votre front devant toujours être à découvert pour les Maîtres chargés de veiller sur vos travaux.");
        await this.pause(P);

        this.action("Le V.M. communique au nouveau Compagnon le signe, l'attouchement, le mot du grade BOAZ et la parole de reconnaissance GIBELIN.");
        await this.pause(P);

        await this.parler('V.M.', "En cette qualité, vous venez d'acquérir dans l'Ordre l'âge de cinq ans. Méritez par votre zèle et par vos vertus de parvenir à celui auquel vous devez aspirer.");
        this.action("Le V.M. lui donne le baiser fraternel en trois temps : joue droite, joue gauche, front.");
        await this.pause(P);

        await this.parler('V.M.', "Mon Frère, comme Compagnon vous devez travailler sur la pierre cubique. Allez vers le Frère Premier Surveillant, qui vous apprendra à faire ce travail par la batterie de votre grade.");

        // MdC conduit le candidat vers le 1°S.
        await this.processer('pion-candidat', D, WP[1], { x: 880, y: 830 });
        await this.parler('1°S.', "OO-O OO-O");
        this.action("Le 1°S. frappe six coups sur la pierre cubique, puis remet le maillet au nouveau reçu qui frappe de même.");
        await this.frapper('1°S.', 'OO-O');
        await this.frapper('Cand.', 'OO-O');
        await this.pause(P);

        // MdC ramène le candidat entre les deux Surveillants
        await this.processer('pion-candidat', D, WP[1]);
        await this.pause(P);

        await this.parler('V.M.', "Frère Compagnon, cette pierre cubique polie sur laquelle vous venez de frapper, doit vous servir de modèle dans le travail qui vous reste à faire sur la pierre brute. Ce n'est que par votre constance à la polir que vous ferez disparaître en elle toutes les irrégularités qu'on y voit encore. Reconnaissez donc ici, Mon cher Frère, l'emblème de ce que vous devez faire sur vous-même, et n'abandonnez point cette entreprise avant qu'elle soit tout à fait accomplie.");
        await this.parler('V.M.', "Nul homme, mon Cher Frère, ne fait des progrès vers le bien sans la connaissance de lui-même. Celui qui ne se connaît pas encore n'a aucune idée juste de son origine et de sa destination. Il est sans but, sans règle, et n'agit que par l'impulsion dominante des habitudes et des passions dont il est l'esclave.");
        await this.parler('V.M.', "Évitez cet écueil, mon Cher Frère. Que votre œil pénétrant découvre les motifs de vos penchants et de vos désirs. Si vous reconnaissez que vous êtes loin de la route, gardez-vous d'errer plus longtemps dans ce vaste désert, et n'oubliez pas qu'il vous faut un asile avant la fin du jour. Mais si la nuit, mon Frère, venait à vous surprendre, ne vous découragez pas, et cherchez au-dessus de vous cette Étoile flamboyante qui pourra seule diriger votre marche et vous ramener près de vos Frères dans les avenues de ce temple.");
        await this.pause(P);
    },

    receptionCompagnonInvestiture: async function() {
        this._setEtape("Réception Compagnon — Investiture");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        await this.parler('V.M.', "Frère Maître des Cérémonies, pour que ce Compagnon puisse se faire reconnaître en cette qualité par ses Frères, présentez-le d'abord aux Officiers de la Loge et à son parrain. Vous le conduirez ensuite vers les Respectables Frères qui sont à l'orient, afin qu'il reçoive d'eux le baiser fraternel.");
        this.action("Le MdC conduit le nouveau Compagnon auprès des Officiers, de l'ex-Maître et du parrain qui le reconnaissent par les signes, attouchements, mots du grade et baiser fraternel.");
        await this.pause(P * 2);

        await this.parler('V.M.', "L'Ordre, vous le savez, mon Frère, doit son secours aux indigents. Allez donc vous présenter au Frère Éléemosynaire, et vous mettrez dans le tronc des aumônes ce que vous jugerez à propos.");
        this.action("Le nouveau Compagnon dépose son offrande dans le tronc des aumônes.");
        await this.pause(P);

        await this.parler('V.M.', "Mon Frère, placez-vous entre les deux Surveillants, pour y entendre les explications et instructions du grade que vous venez de recevoir. Écoutez-les attentivement, et méditez-les sans cesse, si vous voulez sincèrement faire des progrès dans l'Ordre.");
        this.action("Le MdC fait asseoir le nouveau Compagnon entre les deux Surveillants. Le V.M. fait lire l'instruction morale et historique du grade.");
        await this.pause(P * 2);

        this.action("Lorsque les instructions sont finies, le MdC conduit le Frère Compagnon à la place qu'il doit occuper désormais en loge : au bout de la colonne du Midi, après les anciens Compagnons.");

        // Candidat rejoint la colonne du Midi
        await this.processer('pion-candidat', D, WP[8], { x: 1060, y: 720 });
    },

    // ── GRADE MAÎTRE ─────────────────────────────────────────────────────────
    sortieCompagnons: async function() {
        this._setEtape("Sortie des Compagnons");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        this.action("Le Maître des Cérémonies remonte la colonne du Midi pour raccompagner les Compagnons à la porte.");

        const compagnons = ['pion-comp1','pion-comp2','pion-comp3','pion-comp4',
                             'pion-comp5'];
        const DECAL = 400;

        // MdC va vers comp1 (le plus bas = plus proche de la porte, côté Midi)
        await this.processer('pion-mc', D, { x: 1060, y: 1015 });
        await this.pause(P);

        // File indienne : MdC remonte la colonne du Midi
        const cheminMC = [
            { x: 1060, y: 815, d: D },
            { x: 1060, y: 615, d: D },
            { x: 1060, y: 415, d: D },
            { x: 1060, y: 215, d: D },
        ];
        this.processer('pion-mc', cheminMC);

        for (let i = 0; i < compagnons.length; i++) {
            await this.pause(DECAL);
            this.processer(compagnons[i], D * 2, { x: 1060, y: 215 });
        }

        await this.pause(D * 4 + DECAL * compagnons.length);

        // Descente vers la porte côté Midi
        this.action("Le cortège descend vers la porte côté Midi.");
        const cheminDescente = [
            { ...WP[6], d: D },
            { ...WP[7], d: D },
            { ...WP[8], d: D },
            { ...WP[0], d: D },
        ];
        this.processer('pion-mc', cheminDescente);
        for (let i = 0; i < compagnons.length; i++) {
            await this.pause(DECAL);
            this.processer(compagnons[i], cheminDescente);
        }

        await this.pause(D * 4 + DECAL * (compagnons.length + 1));

        // Compagnons dans la réserve
        const rx = [1220, 1270, 1320, 1220];
        const ry = [720,  720,  720,  780];
        for (let i = 0; i < compagnons.length; i++) {
            animerVers(compagnons[i], rx[i], ry[i], 800);
        }

        // MdC revient
        await this.pause(600);
        await this.processer('pion-mc', D, { x: 630, y: 900 }, { x: 630, y: 1000 });
        this.action("Les Compagnons ont quitté la Loge.");
    },

    retourCompagnons: async function() {
        this._setEtape("Retour des Compagnons");
        const D = this.DUREE_WP;

        this.action("Le Maître des Cérémonies va chercher les Compagnons pour les reconduire à leurs places.");
        const compagnons = ['pion-comp1','pion-comp2','pion-comp3','pion-comp4',
                             'pion-comp5'];
        const DECAL = 400;

        await this.processer('pion-mc', D, { x: 630, y: 900 }, WP[0]);

        for (let i = 0; i < compagnons.length; i++) {
            animerVers(compagnons[i], WP[0].x, WP[0].y, 600);
        }
        await this.pause(800);

        // Entrée côté Midi
        const posFinales = [
            { x: 1060, y: 700 },
            { x: 1060, y: 600 },
            { x: 1060, y: 500 },
            { x: 1060, y: 400 },
        ];
        const cheminEntree = [
            { x: 630, y: 900, d: D },
            { ...WP[8], d: D },
            { ...WP[7], d: D },
            { ...WP[6], d: D },
        ];
        this.processer('pion-mc', cheminEntree);
        for (let i = 0; i < compagnons.length; i++) {
            await this.pause(DECAL);
            this.processer(compagnons[i], [
                ...cheminEntree,
                { x: posFinales[i].x, y: posFinales[i].y, d: D },
            ]);
        }

        await this.pause(D * 4 + DECAL * (compagnons.length + 1));

        await this.processer('pion-mc', D, WP[7], { x: 630, y: 900 }, { x: 630, y: 1000 });
        this.action("Les Compagnons sont revenus à leurs places sur la colonne du Midi.");
    },

    miseEnConformiteMaitre: async function() {
        this._setEtape("Mise en conformité — Maître");
        window._gradeEnLoge = 'maitre';
        this.action("Mise en conformité de la Loge de Maître : tapis, tableau du grade, chandeliers funèbres, cercueil, mausolée.");
        miseEnConformite('maitre');
        // Vertus du grade : Justice, Clémence, Tempérance + Prudence (Maître)
        animerVers("pion-justice",    500, 750, 800);
        animerVers("pion-clemence",   580, 750, 800);
        animerVers("pion-temperance", 660, 750, 800);
        animerVers("pion-prudence",   740, 750, 800);
        await this.pause(this.PAUSE_ACTION);
    },

    retourConformiteCompagnons: async function() {
        this._setEtape("Retour conformité — Compagnons");
        window._gradeEnLoge = 'compagnon';
        this.action("Retour en conformité de la Loge de Compagnon.");
        miseEnConformite('compagnon');
        await this.pause(this.PAUSE_ACTION);
    },

    ouvertureMaitre: async function() {
        this._setEtape("Ouverture — Loge de Maître");
        const P = this.PAUSE_ACTION;

        // ─ Étape 1 : ouverture au signe de Compagnon (simplifiée) ─
        this.action("Ouverture de la Loge au signe de Compagnon.");
        await this.echoCoups('O');
        await this.parler('V.M.', "Frère Premier Surveillant, annoncez que je vais ouvrir la loge au signe de Compagnon.");
        await this.parler('1°S.', "Mes Frères, je vous annonce de la part du Vénérable Maître qu'il va ouvrir la loge au signe de Compagnon.");
        await this.parler('2°S.', "Mes Frères, je vous annonce de la part du Vénérable Maître qu'il va ouvrir la loge au signe de Compagnon.");
        await this.parler('V.M.', "Mes Frères, aidez-moi tous à ouvrir la loge au signe de Compagnon.");
        await this.parler('1°S.', "Mes Frères, aidons tous le Vénérable Maître à ouvrir la loge au signe de Compagnon.");
        await this.parler('2°S.', "Mes Frères, aidons tous le Vénérable Maître à ouvrir la loge au signe de Compagnon.");
        await this.parler('V.M.', "Unissez-vous à moi, mes Frères.");
        this.action("Le V.M. et tous les Frères font deux fois le signe entier de Compagnon, et rapportent la main droite au premier temps du signe.");
        await this.parler('V.M.', "À la gloire du Grand Architecte de l'Univers, au nom de l'Ordre, et par le pouvoir que j'en ai reçu, j'ouvre cette loge au signe de Compagnon.");
        await this.echoCoupsGroupe('OO-O', 2);
        await this.parler('V.M.', "Frères Surveillants, annoncez aux Frères que la loge est ouverte au signe de Compagnon.");
        await this.parler('1°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître que la loge est ouverte au signe de Compagnon.");
        await this.parler('2°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître que la loge est ouverte au signe de Compagnon.");
        await this.parler('V.M.', "Ayez attention, mes Frères.");
        this.action("Le V.M. et tous les Frères font une troisième fois le signe entier de Compagnon. Note : on n'allume pas l'Étoile Flamboyante.");
        await this.pause(P);

        // ─ Étape 2 : ouverture et illumination de la Loge de Maître ─
        this.action("Le V.M. prend du feu au chandelier à trois branches et allume par le Midi les six bougies restantes aux trois grands chandeliers du tapis. Il revient à sa place par le Nord.");
        // Allumer les chandeliers du grade de Maître
        allumerChandeliersMaitre();
        await this.pause(P);

        await this.echoCoups('O');
        await this.parler('V.M.', "Frère Premier Surveillant, quel est le motif qui nous rassemble pour la loge de Maître ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est le motif qui nous rassemble pour la loge de Maître ?");
        await this.parler('2°S.', "C'est le désir d'apprendre à tracer avec de justes proportions des plans pour la construction du Temple maçonnique.");
        await this.parler('1°S.', "Vénérable Maître, c'est le désir d'apprendre à tracer avec de justes proportions des plans pour la construction du Temple maçonnique.");
        await this.pause(P);

        await this.parler('V.M.', "Comment y parviendrons-nous ?");
        await this.parler('1°S.', "Frère Second Surveillant, comment y parviendrons-nous ?");
        await this.parler('2°S.', "Par le secours du Grand Architecte de l'Univers, et par la connaissance de J., de B., et de la lettre G qui est au centre de l'Étoile flamboyante.");
        await this.parler('1°S.', "Vénérable Maître, par le secours du Grand Architecte de l'Univers, et par la connaissance de J., de B., et de la lettre G qui est au centre de l'Étoile flamboyante.");
        await this.pause(P);

        await this.parler('V.M.', "Comment pourrons-nous acquérir cette connaissance ?");
        await this.parler('1°S.', "Frère Second Surveillant, comment pourrons-nous acquérir cette connaissance ?");
        await this.parler('2°S.', "Par l'étude approfondie de nous-mêmes et de la nature, en détestant le vice et pratiquant la vertu.");
        await this.parler('1°S.', "Vénérable Maître, par l'étude approfondie de nous-mêmes et de la nature, en détestant le vice et pratiquant la vertu.");
        await this.pause(P);

        await this.parler('V.M.', "Frère Premier Surveillant, puisqu'un but si noble nous rassemble, faites annoncer aux Frères que je vais ouvrir la loge de Maître.");
        await this.parler('1°S.', "Frère Second Surveillant, annoncez aux Frères que le Vénérable Maître va ouvrir la loge de Maître.");
        await this.parler('2°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître qu'il va ouvrir la loge de Maître.");
        await this.parler('V.M.', "Mes Frères, aidez-moi tous à ouvrir la loge de Maître.");
        await this.parler('1°S.', "Mes Frères, aidons tous le Vénérable Maître à ouvrir la loge de Maître.");
        await this.parler('2°S.', "Mes Frères, aidons tous le Vénérable Maître à ouvrir la loge de Maître.");
        await this.parler('V.M.', "Unissez-vous à moi, mes Frères.");
        this.action("Le V.M. et tous les Frères donnent deux fois de suite le signe entier du grade de Maître. Les Frères se remettent au second temps du signe — signe d'Ordre en loge.");
        await this.pause(P);

        // Batterie OO-O × 3 en trois salves
        await this.parler('V.M.', "J'ouvre donc la loge de Maître.");
        await this.pause(300);
        await this.parler('V.M.', "À la gloire du Grand Architecte de l'Univers,");
        await this.frapper('V.M.', 'OO-O');
        await this.parler('V.M.', "Au nom de l'Ordre,");
        await this.frapper('V.M.', 'OO-O');
        await this.parler('V.M.', "Et par le pouvoir que j'en ai reçu, j'ouvre cette Loge de Maître !");
        await this.frapper('V.M.', 'OO-O');

        // Surveillants répètent les 3 × 3
        await this.echoCoupsSurv('OO-O', 3);
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, annoncez aux Frères que la loge de Maître est ouverte.");
        await this.parler('1°S.', "Mes Frères, je vous annonce de la part du Vénérable Maître que la loge de Maître est ouverte.");
        await this.parler('2°S.', "Mes Frères, je vous annonce de la part du Vénérable Maître que la loge de Maître est ouverte.");
        await this.parler('V.M.', "Ayez attention, mes Frères.");
        this.action("Le V.M. et tous les Frères donnent pour la troisième fois le signe entier du grade.");
        await this.pause(P);

        this.action("Le V.M. pose son épée nue sur la Bible ouverte au premier chapitre de l'Évangile de Saint Jean. Tous les Frères remettent la leur dans le fourreau.");
        await this.parler('V.M.', "J'invite les Frères à s'asseoir, et je prescris au nom de l'Ordre le plus profond silence à tous les ouvriers.");
        this.action("On ne fait en loge de Maître aucun applaudissement ni acclamation.");
    },

    clotureMaitre: async function() {
        this._setEtape("Clôture — Loge de Maître");
        const P = this.PAUSE_ACTION;

        // ─ Clôture au signe de Maître ─
        await this.echoCoups('O');
        this.action("Le V.M. se lève, épée la pointe haute. Tous les Frères se lèvent, épées la pointe contre terre, au signe de Maître.");
        await this.parler('V.M.', "À l'Ordre, mes Frères.");
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, puisque le travail des Maîtres est fini, avertissez les Frères que je vais fermer la loge de Maître.");
        await this.parler('1°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître qu'il va fermer la loge de Maître.");
        await this.parler('2°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître qu'il va fermer la loge de Maître.");
        await this.parler('V.M.', "Mes Frères, aidez-moi tous à fermer la loge de Maître.");
        await this.parler('1°S.', "Mes Frères, aidons tous le Vénérable Maître à fermer la loge de Maître.");
        await this.parler('2°S.', "Mes Frères, aidons tous le Vénérable Maître à fermer la loge de Maître.");
        await this.parler('V.M.', "Unissez-vous à moi, mes Frères.");
        this.action("Le V.M. et tous les Frères donnent deux fois le signe entier de Maître. Tous se remettent au second temps, sauf le V.M. qui prend son maillet.");
        await this.pause(P);

        // Batterie OO-O × 3 en trois salves
        await this.parler('V.M.', "À la gloire du Grand Architecte de l'Univers,");
        await this.frapper('V.M.', 'OO-O');
        await this.parler('V.M.', "Au nom de l'Ordre,");
        await this.frapper('V.M.', 'OO-O');
        await this.parler('V.M.', "Et par le pouvoir que j'en ai reçu, je ferme la loge de Maître.");
        await this.frapper('V.M.', 'OO-O');
        await this.echoCoupsSurv('OO-O', 3);
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, annoncez à tous les Frères que la loge de Maître est fermée.");
        await this.parler('1°S.', "Mes Frères, la loge de Maître est fermée.");
        await this.parler('2°S.', "Mes Frères, la loge de Maître est fermée.");
        await this.parler('V.M.', "Ayez attention, mes Frères.");
        this.action("Le V.M. et tous les Frères font une troisième fois le signe entier de Maître.");
        await this.pause(P);

        this.action("Le V.M. va éteindre deux lumières à chacun des trois chandeliers du tapis. Il revient à sa place.");
        await this.pause(P);

        // ─ Clôture au signe de Compagnon ─
        await this.echoCoups('O');
        this.action("Le V.M. et tous les Frères portent la main droite en équerre sur le cœur — signe d'Ordre de Compagnon.");
        await this.parler('V.M.', "À l'Ordre, mes Frères.");
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, avertissez les Frères que je vais fermer la loge au signe de Compagnon.");
        await this.parler('1°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître qu'il va fermer la loge au signe de Compagnon.");
        await this.parler('2°S.', "Mes Frères, je vous avertis de la part du Vénérable Maître qu'il va fermer la loge au signe de Compagnon.");
        await this.parler('V.M.', "Mes Frères, aidez-moi tous à fermer la loge des Compagnons.");
        await this.parler('1°S.', "Mes Frères, aidons tous le Vénérable Maître à fermer la loge des Compagnons.");
        await this.parler('2°S.', "Mes Frères, aidons tous le Vénérable Maître à fermer la loge des Compagnons.");
        await this.parler('V.M.', "Unissez-vous à moi, mes Frères.");
        this.action("Le V.M. et tous les Frères donnent deux fois le signe entier de Compagnon. Tous se remettent au premier temps, sauf le V.M. qui prend son maillet.");
        await this.pause(P);

        await this.parler('V.M.', "À la gloire du Grand Architecte de l'Univers, au nom de l'Ordre, et par le pouvoir que j'en ai reçu, je ferme cette loge de Compagnons.");
        await this.echoCoupsGroupe('OO-O', 2);
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, annoncez à tous les Frères que la loge des Compagnons est fermée.");
        await this.parler('1°S.', "Mes Frères, la loge des Compagnons est fermée.");
        await this.parler('2°S.', "Mes Frères, la loge des Compagnons est fermée.");
        await this.parler('V.M.', "Ayez attention, mes Frères.");
        this.action("Le V.M. et tous les Frères font une troisième fois le signe entier de Compagnon. Note : l'extinction de l'Étoile Flamboyante n'a pas lieu dans ce grade.");
        await this.pause(P);

        // Retour en conformité Compagnon puis clôture Apprenti sera lancée manuellement
        this.action("La clôture de la Loge d'Apprenti se poursuit selon le rituel du premier grade.");
    },

    catechismeMaitre: async function() {
        this._setEtape("Catéchisme de Maître");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Mes Frères, nous allons procéder à l'instruction par demandes et réponses du grade de Maître.");
        await this.pause(P);
        await this.catechismeMaitreSection1();
        await this.catechismeMaitreSection2();
        await this.catechismeMaitreSection3();
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "L'instruction par demandes et réponses est terminée. Je remercie les Frères Surveillants.");
    },

    catechismeMaitreSection1: async function() {
        this._setEtape("Catéchisme Maître — Sect. I");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Première section du catéchisme de Maître.");
        await this.pause(P);
        await this.parler('V.M.', "Êtes-vous Maître Franc-Maçon ?");
        await this.parler('1°S.', "Éprouvez-moi et vous reconnaîtrez que l'acacia m'est connu");
        await this.pause(P);
        await this.parler('V.M.', "A quoi connaîtrai-je que vous êtes Maître ?");
        await this.parler('1°S.', "A mes nouveaux signe, attouchement et mots, et aux cinq points parfaits de la Maîtrise.");
        await this.pause(P);
        await this.parler('V.M.', "Donnez-moi le signe.");
        await this.parler('2°S.', "(on donne le signe entier du grade, en trois temps)");
        await this.pause(P);
        await this.parler('V.M.', "Donnez-moi l'attouchement");
        await this.parler('2°S.', "(on donne l'attouchement du p...t, qui est le quatrième point de maîtrise)");
        await this.pause(P);
        await this.parler('V.M.', "Donnez-moi le Mot du Maître");
        await this.parler('1°S.', "En loge ouverte, c'est \"M B\", mais hors de la Loge, c'est \"M. B.\" seulement");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie ce mot ?");
        await this.parler('1°S.', "\"Le corps est corrompu\" ou \"la chair quitte les os\"");
        await this.pause(P);
        await this.parler('V.M.', "Quel est le mot de reconnaissance pour obtenir l'entrée de la Loge ?");
        await this.parler('1°S.', "Shibboleth.");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi les Maîtres ont-ils ce mot ?");
        await this.parler('1°S.', "En mémoire de ce qu'il servit aux troupes de Galaad, qui étaient sous la conduite de Jephté, à reconnaître, après leur victoire, les rebelles d'Ephraim, au passage du Jourdain.");
        await this.pause(P);
        await this.parler('V.M.', "Comment put-il leur servir de moyen de reconnaissance ?");
        await this.parler('1°S.', "Parce que ceux de Galaad lui donnaient sa véritable prononciation tandis que ceux d'Ephraim ne purent prononcer que \"Si...t\".");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi l'usage de ce mot est-il conservé parmi les Maîtres ?");
        await this.parler('1°S.', "Pour leur rappeler qu'ils doivent toujours se tenir en garde contre les faux-frères.");
        await this.pause(P);
        await this.parler('V.M.', "Quel est le nom d'un Maître Franc-Maçon ?");
        await this.parler('1°S.', "\"G...N\".");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie ce nom ?");
        await this.parler('1°S.', "C'est le nom d'un lieu, sur la Montagne de Moria, où David avait fait élever un autel et placer l'Arche d'Alliance, avant la construction du Temple.");
        await this.pause(P);
        await this.parler('V.M.', "Quel nom donnez-vous au fils d'un Maître ?");
        await this.parler('1°S.', "\"Luwton\", qui signifie élève en architecture.");
        await this.pause(P);
        await this.parler('V.M.', "Quel avantage a, dans l'Ordre, le fils d'un Maître ?");
        await this.parler('1°S.', "Il a le privilège d'être reçu Maçon par préférence à tout autre qui n'aurait pas le même titre, malgré toute distinction de rang civil et d'âge.");
        await this.pause(P);
        await this.parler('V.M.', "Quels sont les cinq points parfaits de la Maîtrise ?");
        await this.parler('1°S.', "Le p...d d...t contre le p...d d...t, le g...u contre le g...u, la p...e contre la p...e, la m...n d...e e...t la m...n d...e et la m...n g...e étendue et appliquée au-dessous de l'é...e g...e, ce qui forme l'attouchement parfait de la Maîtrise en Loge");
        await this.pause(P);
        await this.parler('V.M.', "Que signifient les cinq points de cet attouchement ?");
        await this.parler('1°S.', "Ils rappellent aux Maçons la sincérité, la cordialité, l'union intime, qui doit régner entre eux et l'obligation de se secourir les uns les autres, de tout leur pouvoir.");
        await this.pause(P);
        await this.parler('V.M.', "Les Maçons doivent-ils des secours à tous ceux qui ont ce titre ?");
        await this.parler('1°S.', "Ils doivent à tous, sans distinction, ainsi qu'aux autres hommes, les secours que l'humanité réclame, mais ils ne doivent l'instruction et les secours de l'intime fraternité qu'à ceux qui, par leurs travaux, se rendent dignes d'être avoués par l'Ordre.");
        await this.pause(P);
        await this.parler('V.M.', "Quel est le signe d'Ordre dont on fait usage en Loge de Maître ?");
        await this.parler('1°S.', "C'est le second temps du signe de Maître, appelé signe de douleur");
        await this.pause(P);
        await this.parler('V.M.', "Combien les Maçons ont-ils de signes ?");
        await this.parler('1°S.', "Le nombre ne peut en être fixé, car tout équerre, niveau et perpendiculaire leur sert à en former");
        await this.pause(P);
        await this.parler('V.M.', "Dites-moi combien ils ont de signes déterminés");
        await this.parler('1°S.', "Ils en ont quatre, savoir : le Guttural, pour les Apprentis, le Pectoral, pour les Compagnons, le Pédestre, pour les Maîtres et le Manuel, qui sert aux Apprentis, aux Compagnons et aux Maîtres, mais sous différentes formes");
        await this.pause(P);
        await this.parler('V.M.', "En quoi consiste la marche des Maîtres ?");
        await this.parler('1°S.', "Elle consiste en trois pas, allant de l'occident au midi, du midi au nord et du nord à l'orient, les deux pieds devant former ensemble, à chaque pas, une double équerre.");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie la double équerre, par laquelle chacun de ces pas se termine aux quatre points cardinaux ?");
        await this.parler('1°S.', "Elle annonce qu'un Maître doit être irréprochable dans ses mœurs et sa conduite et qu'il doit toujours servir d'exemple à ses Frères");
        await this.pause(P);
        await this.parler('V.M.', "Comment frappent les Maîtres ?");
        await this.parler('1°S.', "En triplant la batterie des Apprentis, ce qui fait neuf coups, par trois fois trois");
        await this.pause(P);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se termine la première section.");
    },

    catechismeMaitreSection2: async function() {
        this._setEtape("Catéchisme Maître — Sect. II");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Deuxième section du catéchisme de Maître.");
        await this.pause(P);
        await this.parler('V.M.', "Où avez-vous été reçu Maître ?");
        await this.parler('1°S.', "Dans la chambre du milieu, séjour de regrets et de larmes");
        await this.pause(P);
        await this.parler('V.M.', "Comment y êtes-vous parvenu ?");
        await this.parler('1°S.', "Par un escalier mystérieux en forme de vis, qui se monte par t..., c..., et a...");
        await this.pause(P);
        await this.parler('V.M.', "Comment y êtes-vous entré ?");
        await this.parler('1°S.', "En marchant à reculons");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Afin de ne pas être ébloui par l'éclat d'une lumière inattendue");
        await this.pause(P);
        await this.parler('V.M.', "D'où partait-elle ?");
        await this.parler('1°S.', "D'une lame d'or triangulaire, qui était placée sur un tombeau");
        await this.pause(P);
        await this.parler('V.M.', "Qu'avez-vous remarqué en entrant ?");
        await this.parler('1°S.', "Obscurité, silence et tristesse générale parmi les Frères.");
        await this.pause(P);
        await this.parler('V.M.', "Quel est le premier objet que vous avez aperçu ?");
        await this.parler('1°S.', "Un mausolée, de forme triangulaire, qui était placé à l'occident");
        await this.pause(P);
        await this.parler('V.M.', "Qu'avez-vous remarqué de plus ?");
        await this.parler('1°S.', "Le tombeau de notre Respectable Maître Hiram");
        await this.pause(P);
        await this.parler('V.M.', "Quelles sont ses dimensions ?");
        await this.parler('1°S.', "Trois coudées de large, cinq de haut, et sept de long");
        await this.pause(P);
        await this.parler('V.M.', "A quoi font allusion ces trois nombres ?");
        await this.parler('1°S.', "Aux différents âges des Maçons, qui indiquent le travail particulier de chaque classe");
        await this.pause(P);
        await this.parler('V.M.', "Qu'entendez-vous par là ?");
        await this.parler('1°S.', "Qu'il faut trois ans pour faire un Apprenti, cinq pour un Compagnon, et sept pour un Maître");
        await this.pause(P);
        await this.parler('V.M.', "Qu'avez-vous aperçu sur le tombeau ?");
        await this.parler('1°S.', "Une tête de mort, une branche d'épine, nommée acacia, et une lame d'or triangulaire, sur laquelle étaient gravées les lettres indicatives de l'ancien Mot de Maître");
        await this.pause(P);
        await this.parler('V.M.', "Quel était l'ancien Mot de Maître ?");
        await this.parler('1°S.', "L'un des noms révérés du Grand Architecte de l'Univers");
        await this.pause(P);
        await this.parler('V.M.', "Qu'avez-vous vu autour du tombeau ?");
        await this.parler('1°S.', "Neuf lumières, qui étaient voilées, ce qui plongeait la Loge dans l'obscurité");
        await this.pause(P);
        await this.parler('V.M.', "Que signifient-elles ?");
        await this.parler('1°S.', "Les neuf Maîtres, qui furent envoyés par Salomon, à la recherche du corps de notre Respectable Maître Hiram.");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi étaient-elles voilées ?");
        await this.parler('1°S.', "Pour désigner la privation dans laquelle se trouvent les Maçons, depuis que les vrais Maîtres sont dispersés");
        await this.pause(P);
        await this.parler('V.M.', "Quand cessera cette privation ?");
        await this.parler('1°S.', "Lorsque ces Maîtres étant rentrés dans le Temple, les Maçons retrouveront, par leur secours, la Parole Perdue.");
        await this.pause(P);
        await this.parler('V.M.', "Comment vous a-t-on traité en entrant en Loge ?");
        await this.parler('1°S.', "Comme un Compagnon suspect, mais j'ai prouvé mon innocence et le Vénérable Maître m'a rendu son amitié");
        await this.pause(P);
        await this.parler('V.M.', "Qu'a-t-on fait alors ?");
        await this.parler('1°S.', "On m'a fait faire neuf voyages emblématiques autour du tombeau");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Pour me faire connaître les différentes parties du Temple");
        await this.pause(P);
        await this.parler('V.M.', "Que vous est-il arrivé pendant ces voyages ?");
        await this.parler('1°S.', "J'ai vu trois fois la mort devant mes yeux, mais le Vénérable Maître m'a rassuré par de nouvelles maximes, qui m'ont appris à voyager utilement.");
        await this.pause(P);
        await this.parler('V.M.', "Quel fruit avez-vous retiré de ces voyages mystérieux et de votre docilité à suivre le guide que le Vénérable Maître vous avait donné ?");
        await this.parler('1°S.', "Le Vénérable Maître m'a averti que pour élever un édifice solide et durable, il fallait joindre à la tempérance du Compagnon la prudence du Maître.");
        await this.pause(P);
        await this.parler('V.M.', "Que vous est-il arrivé ensuite ?");
        await this.parler('1°S.', "J'ai monté l'escalier à vis, par trois, cinq et sept, en me faisant connaître par les signes d'Apprenti et de Compagnon.");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi vous a-t-on fait donner les signes d'Apprenti et de Compagnon, et pourquoi vous a-t-on arrêté ensuite à la porte du Temple ?");
        await this.parler('1°S.', "On a voulu me rappeler ce que j'avais été, me faire connaître ce que j'étais, et me faire apercevoir ce qui me manquait encore");
        await this.pause(P);
        await this.parler('V.M.', "Qu'a-t-on fait de vous alors ?");
        await this.parler('1°S.', "On m'a conduit de l'occident à l'orient, en passant de l'Équerre au Compas, sur le tombeau, par trois pas de Maître en double équerre, au midi, au nord et à l'Orient");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie le premier pas, vers le midi ?");
        await this.parler('1°S.', "Que notre devoir est de chercher la Sagesse, dès que nous sommes capables de justesse dans nos idées et susceptibles de recevoir l'instruction");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie le second pas, vers le nord ?");
        await this.parler('1°S.', "La nécessité de poursuivre courageusement notre route et de ne jamais abandonner nos recherches, jusqu'à la fin de nos jours");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie le troisième pas, vers l'Orient ?");
        await this.parler('1°S.', "Le fruit que nous devons espérer de ces recherches et d'une conduite régulière, qui est de trouver la Sagesse du Vrai Orient, où commence l'Éternité heureuse.");
        await this.pause(P);
        await this.parler('V.M.', "Que vous est-il arrivé pendant votre route ?");
        await this.parler('1°S.', "J'ai reçu trois coups en passant de l'Équerre au Compas.");
        await this.pause(P);
        await this.parler('V.M.', "Que signifient-ils ?");
        await this.parler('1°S.', "L'ennemi, qu'il faut combattre, les obstacles qu'il faut vaincre, les armes qu'il faut employer pour obtenir la récompense éternelle.");
        await this.pause(P);
        await this.parler('V.M.', "Qu'avez-vous fait, lorsque vous êtes parvenu à l'Orient ?");
        await this.parler('1°S.', "J'ai contracté les engagements de la Maîtrise et, ensuite, j'ai été reçu Maître");
        await this.pause(P);
        await this.parler('V.M.', "Comment avez-vous été reçu Maître ?");
        await this.parler('1°S.', "Par trois coups qui m'ont terrassé.");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi vous a-t-on donné ces trois grands coups ?");
        await this.parler('1°S.', "En mémoire de ceux que reçut notre Respectable Maître Hiram, et pour m'apprendre, par son exemple, à souffrir plutôt la mort, que de manquer à mes devoirs et de trahir mes Frères.");
        await this.pause(P);
        await this.parler('V.M.', "De qui le Maître Hiram reçut-il les trois coups qui lui donnèrent la mort ?");
        await this.parler('1°S.', "De trois Compagnons, qui avaient formé le complot de se procurer par cette violence, le Mot et la paie des Maîtres");
        await this.pause(P);
        await this.parler('V.M.', "Comment sut-on qu'il avait été tué par trois Compagnons ?");
        await this.parler('1°S.', "Parce que ces trois Compagnons ne comparurent pas lors de l'appel général des ouvriers qui fut fait par ordre de Salomon");
        await this.pause(P);
        await this.parler('V.M.', "Obtinrent-ils du Maître Hiram le mot de Maître ?");
        await this.parler('1°S.', "Non. Le Maître Hiram aima mieux souffrir la mort que de leur donner une connaissance dont ils étaient indignes.");
        await this.pause(P);
        await this.parler('V.M.', "Que firent-ils de son corps après sa mort ?");
        await this.parler('1°S.', "Ils le cachèrent sous des décombres, au pied d'une montagne, nommée \"Moria\" près du Temple, et, lorsqu'il fit nuit, ils le transportèrent sur la montagne même, où ils l'enterrèrent.");
        await this.pause(P);
        await this.parler('V.M.', "Comment fut-il découvert ?");
        await this.parler('1°S.', "Par les soins infatigables de neuf Maîtres, qui furent envoyés par Salomon pour en faire la recherche, et qui, ayant trouvé le cadavre, allèrent lui en rendre compte.");
        await this.pause(P);
        await this.parler('V.M.', "Que fit ensuite Salomon ?");
        await this.parler('1°S.', "Il fit exhumer le corps par les Maîtres, qui le transportèrent en grande pompe dans le Temple. Il fit placer sur son tombeau une plaque d'or, de forme triangulaire, sur laquelle était gravé le vrai et ancien Mot de Maître, en reconnaissance de son zèle et de sa fidélité");
        await this.pause(P);
        await this.parler('V.M.', "Quel était notre Maître Hiram ?");
        await this.parler('1°S.', "Il était habile architecte et le plus célèbre ouvrier en toute chose");
        await this.pause(P);
        await this.parler('V.M.', "Dans quelle contrée naquit Hiram ?");
        await this.parler('1°S.', "Il était Tyrien de nation, son père se nommait \"Ur\" et sa mère était une veuve de la tribu de Nephtali.");
        await this.pause(P);
        await this.parler('V.M.', "Comment a-t-on fini votre réception ?");
        await this.parler('1°S.', "Le Vénérable Maître, avec les deux Surveillants, m'a relevé du cercueil par les signe, attouchement et Mot de la Convention des Maîtres");
        await this.pause(P);
        await this.parler('V.M.', "Qu'avez-vous remarqué alors ?");
        await this.parler('1°S.', "L'obscurité avait disparu et la loge brillait d'une nouvelle lumière");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie ce changement ?");
        await this.parler('1°S.', "L'espoir de retrouver la Parole Perdue, si je sais faire un bon usage des nouveaux signes et instructions qui m'ont été donnés");
        await this.pause(P);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Ainsi se termine la deuxième section.");
    },

    catechismeMaitreSection3: async function() {
        this._setEtape("Catéchisme Maître — Sect. III");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        this.action("Troisième section du catéchisme de Maître.");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi vous êtes-vous fait recevoir Maître ?");
        await this.parler('1°S.', "Pour apprendre à connaître la véritable valeur de la lettre \"G\" que j'avais aperçue dans l'Étoile Flamboyante.");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie cette lettre ?");
        await this.parler('1°S.', "Grandeur et Gloire, qui n'appartiennent qu'à Dieu, Principe de toute Lumière");
        await this.pause(P);
        await this.parler('V.M.', "Quel est le but de votre travail ?");
        await this.parler('1°S.', "Celui de parvenir à retrouver, avec le secours du Grand Architecte de l'Univers et l'assistance de l'Ordre, la Vraie Parole des Maîtres, qui est perdue, pour en faire un digne usage");
        await this.pause(P);
        await this.parler('V.M.', "Ne la connaissez-vous donc point ?");
        await this.parler('1°S.', "J'en connais seulement les deux lettres indicatives : \"J...A\", que j'ai remarqué sur le tombeau");
        await this.pause(P);
        await this.parler('V.M.', "Comment a-t-elle été perdue ?");
        await this.parler('1°S.', "Par la mort du Respectable Maître Hiram, laquelle ne permit plus aux Maîtres d'en faire usage.");
        await this.pause(P);
        await this.parler('V.M.', "Comment a-t-elle été changée ?");
        await this.parler('1°S.', "Par l'accord des Maîtres qui allèrent à la recherche du Maître Hiram, et qui, l'ayant trouvé assassiné, convinrent d'y substituer la première parole qu'ils prononceraient entre eux, en déterrant son cadavre, et c'est ainsi qu'ils remplacèrent l'ancien mot par \"M...B...\".");
        await this.pause(P);
        await this.parler('V.M.', "Comment voyagent les Maîtres ?");
        await this.parler('1°S.', "De l'occident à l'orient, par le midi et le nord, et de l'orient sur toute la surface de la terre");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Pour réunir ce qui est épars et répandre la Lumière");
        await this.pause(P);
        await this.parler('V.M.', "Sur quoi travaillent les Maîtres ?");
        await this.parler('1°S.', "Sur la Planche à tracer, pour former leurs dessins");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "En mémoire des plans qui furent tracés mystérieusement au roi David, de la part du Grand Architecte de l'Univers, pour la construction du Temple, et qui furent mis en exécution par Salomon");
        await this.pause(P);
        await this.parler('V.M.', "Si vous perdiez un Maître, où le chercheriez-vous ?");
        await this.parler('1°S.', "Entre l'Équerre et le Compas");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Parce que l'Équerre et le Compas étant les emblèmes de la régularité et de la sagesse, un Maître ne doit jamais s'en écarter");
        await this.pause(P);
        await this.parler('V.M.', "Quelles sont donc les vertus et qualités essentielles que doit désirer un vrai Maçon ?");
        await this.parler('1°S.', "Celles qui sont désignées par les trois Colonnes qui soutiennent le Temple mystique des Maçons, savoir : la Sagesse, la Force, et la Beauté qui les a ornées");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Parce qu'il doit s'appliquer à réunir en lui les proportions de ses modèles");
        await this.pause(P);
        await this.parler('V.M.', "Quels sont ses modèles ?");
        await this.parler('1°S.', "Salomon, qui reçut de Dieu le don de la Sagesse, Hiram, Roi de Tyr, modèle de Force, qui fournit à Salomon les bois et les matériaux nécessaires pour la construction du Temple ; et Hiram Abif, modèle de Beauté, qui dessina et exécuta les ornements qui devaient l'embellir.");
        await this.pause(P);
        await this.parler('V.M.', "A qui appartiennent essentiellement ces trois attributs : Sagesse, Force et Beauté ?");
        await this.parler('1°S.', "A Dieu même. La perfection de ses ouvrages atteste la Sagesse qui en a conçu les plans, la Puissance qui les a exécutés, et la Beauté qui les a embellis");
        await this.pause(P);
        await this.parler('V.M.', "Que feriez-vous si vous vous trouviez en quelque danger ?");
        await this.parler('1°S.', "Je ferais le signe et l'exclamation de secours");
        await this.pause(P);
        await this.parler('V.M.', "Comment se fait le signe ?");
        await this.parler('1°S.', "En portant les d...x m...s e...s et R...s sur la t...e et la j...e d...e p...e en é...e, d...e la j...e g...e, et en criant, dans cette attitude : \"A Moi les Enfants de la Veuve\" cette exclamation ne devant, néanmoins, être employée qu'à défaut de pouvoir faire apercevoir le signe et dans un grand péril");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi dites-vous : \"Les Enfants de la Veuve\" ?");
        await this.parler('1°S.', "Parce qu'après la mort de notre Respectable Maître les Maçons prirent soin de sa mère, qui était veuve, et se regardèrent comme ses enfants, le Maître Hiram les ayant regardés comme ses Frères.");
        await this.pause(P);
        await this.parler('V.M.', "Quel âge avez-vous ?");
        await this.parler('1°S.', "Sept ans passés");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie cet âge ?");
        await this.parler('1°S.', "Le septième temps, ou année, que Salomon employa à la dédicace du Temple, pour lui donner la perfection");
        await this.pause(P);
        await this.parler('V.M.', "Où avez-vous acquis cet âge ?");
        await this.parler('1°S.', "En montant l'escalier à vis de sept marches");
        await this.pause(P);
        await this.parler('V.M.', "A quoi fait allusion cet escalier ?");
        await this.parler('1°S.', "Aux sept sciences, ou arts libéraux, qu'un bon Maçon doit étudier, aux sept vertus qu'il doit pratiquer, aux sept vices principaux, qu'il doit fuir, et aux sept dons spirituels, qu'il doit demander à Dieu");
        await this.pause(P);
        await this.parler('V.M.', "Quelles sont les sept sciences, ou arts libéraux ?");
        await this.parler('1°S.', "La Poésie, la Musique, l'Art du Dessin, l'Arithmétique, la Géométrie, l'Astronomie et l'Architecture");
        await this.pause(P);
        await this.parler('V.M.', "A quoi lui servent la Poésie et la Musique ?");
        await this.parler('1°S.', "A louer le Seigneur, afin d'obtenir son secours pour employer dignement les cinq autres");
        await this.pause(P);
        await this.parler('V.M.', "Quel avantage tire-t-il de l'Art du Dessin ?");
        await this.parler('1°S.', "De se former des idées justes et vraies de l'édifice merveilleux, construit par le Grand Architecte de l'Univers");
        await this.pause(P);
        await this.parler('V.M.', "A quoi lui servent la Géométrie et l'Arithmétique ?");
        await this.parler('1°S.', "A exercer avec justesse toutes les autres sciences");
        await this.pause(P);
        await this.parler('V.M.', "Quelles sont les sept vertus du Maçon ?");
        await this.parler('1°S.', "La Foi, l'Espérance et la Charité, qui sont les principales ; la Justice, la Tempérance, la Prudence ; la septième m'est encore inconnue");
        await this.pause(P);
        await this.parler('V.M.', "Pourquoi ?");
        await this.parler('1°S.', "Parce que je ne pourrai l'acquérir que par la pratique exacte des trois vertus qui m'ont été enseignées dans nos grades");
        await this.pause(P);
        await this.parler('V.M.', "Comment avez-vous donc connu les trois premières, qui sont les plus parfaites ?");
        await this.parler('1°S.', "Elles m'ont seulement été indiquées comme devant être le terme heureux de tous mes travaux, afin d'augmenter mon courage et ma bonne volonté");
        await this.pause(P);
        await this.parler('V.M.', "Quels sont les sept vices principaux qu'il doit fuir ?");
        await this.parler('1°S.', "L'orgueil, l'avarice, l'envie, la jalousie, la gourmandise, la colère et la paresse");
        await this.pause(P);
        await this.parler('V.M.', "Quels sont les sept dons spirituels ?");
        await this.parler('1°S.', "Les trois premiers sont désignés par les trois paliers de l'escalier du Temple, qui ont aussi rapport aux vertus qui m'ont été enseignées dans les trois premiers grades");
        await this.pause(P);
        await this.parler('V.M.', "Expliquez-moi cela");
        await this.parler('1°S.', "Le premier palier désigne le don d'Intelligence que l'Apprenti peut obtenir en observant la justice ; le second palier figure le don de sagesse, fruit de la tempérance recommandée au Compagnon ; le troisième palier où est le pavé mosaïque désigne le don de discernement que la prudence seule peut procurer au Maître.");
        await this.pause(P);
        await this.parler('V.M.', "Nommez-moi les quatre autres dons spirituels ?");
        await this.parler('1°S.', "Les travaux de mon grade n'ont pu me les faire connaître");
        await this.pause(P);
        await this.parler('V.M.', "Quels sont les devoirs particuliers des Maçons, les uns envers les autres ?");
        await this.parler('1°S.', "Ils doivent s'aimer sincèrement, se secourir de tout leur pouvoir, garder fidèlement les secrets qu'ils se sont confiés, s'opposer à tout attentat ou séduction contre les personnes du sexe, bien moins encore s'oublier jusqu'à s'en rendre coupables eux-mêmes.");
        await this.pause(P);
        await this.parler('V.M.', "Quel est le symbole du grade de Maître, qui est placé devant l'autel d'Orient ?");
        await this.parler('1°S.', "C'est un vaisseau démâté, sans voile et sans rame, tranquille, sur une mer calme avec ces mots pour inscription : \"IN SILENTIO ET SPE, FORTITUDO MEA\", \"MA FORCE EST DANS LE SILENCE ET L'ESPÉRANCE\".");
        await this.pause(P);
        await this.parler('V.M.', "Comment expliquez-vous ce symbole ?");
        await this.parler('1°S.', "Ce vaisseau, sur une mer calme et tranquille, après l'orage, est l'image du Maçon qui a surmonté tous les périls pour trouver la vérité et qui, se reposant sur la droiture de son cœur, cherche avec confiance un port assuré dans l'Ordre, contre les dangers de l'erreur");
        await this.pause(P);
        await this.parler('V.M.', "Que représente le mausolée, qui est dans la loge des Maîtres, à l'occident ?");
        await this.parler('1°S.', "Une urne sépulcrale, placée sur un tombeau de forme triangulaire qui est porté par neuf petites boules, placées de trois en trois aux trois angles, sur une base de même forme ayant trois degrés ; une vapeur enflammée s'élève et sort de l'urne, avec ces mots, sur une des faces du tombeau : \"TERNARIO FORMATUS, NOVENARIO DISSOLVITUR\" et ceux-ci, vers le haut de l'urne : \"DEPONENS ALIENA ASCENDIT UNUS\"");
        await this.pause(P);
        await this.parler('V.M.', "A quoi fait allusion ce mausolée, avec ces inscriptions ?");
        await this.parler('1°S.', "A l'immortalité de l'âme, aux principes élémentaires et à la dissolution de la matière");
        await this.pause(P);
        await this.parler('V.M.', "Quelle est la signification générale des batteries des Apprentis, des Compagnons et des Maîtres ?");
        await this.parler('1°S.', "Le commencement, la durée et la fin des choses créées.");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie la batterie d'Apprenti, par trois coups ?");
        await this.parler('1°S.', "Le commencement, ou l'union des principes");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie celle de Compagnon, par deux fois trois coups ?");
        await this.parler('1°S.', "La durée, ou les principes mis en action");
        await this.pause(P);
        await this.parler('V.M.', "Que signifie celle des Maîtres, par trois fois trois coups ?");
        await this.parler('1°S.', "La fin, ou la décomposition des corps");
        await this.pause(P);
        await this.parler('V.M.', "Que signifient les quatre-vingt-une larmes, qui sont sur le tapis, autour du tombeau ?");
        await this.parler('1°S.', "Les larmes désignent le deuil général des Maîtres, leur nombre exprime les propriétés particulières du nombre neuf, qui se retrouve dans son carré");
        await this.pause(P);
        await this.parler('V.M.', "Où avez-vous travaillé ?");
        await this.parler('1°S.', "Dans le Temple");
        await this.pause(P);
        await this.parler('V.M.', "Où avez-vous été payé ?");
        await this.parler('1°S.', "Au centre de la Chambre du Milieu");
        await this.pause(P);
        await this.parler('V.M.', "Mes Frères ! Étudions les sciences qui peuvent nous être utiles, pour faire de nouveaux progrès ; pratiquons les vertus, qui nous sont recommandées ; fuyons les vices, qui nuiraient à notre avancement ; efforçons-nous enfin de mériter les dons précieux, que nous devons tous désirer et demander.");
        await this.pause(P);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "L'instruction par demandes et réponses est terminée. Je remercie les Frères Surveillants.");
    },

    instructionMoraleMaitre: async function() {
        this._setEtape("Instruction Morale — Maître");
        const P = this.PAUSE_ACTION;
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Frère Orateur, la Loge vous demande de donner lecture de l'instruction morale du grade.");
        await this.pause(P);
        this.action("Instruction morale et explication du grade de Maître Franc-Maçon.");
        await this.parler('Orateur', "Mon Cher Frère,");
        await this.pause(300);
        await this.parler('Orateur', "Si vous avez été attentif aux cérémonies de votre réception, aux récits qui vous ont été faits et aux décorations de la loge, vous avez pu remarquer des choses toutes nouvelles qui, peut-être, paraissent se contredire. Cependant, ces contradictions ne sont qu'apparentes, vous en conviendrez un jour. Elles sont fondées sur la diversité d'objets que l'Ordre vous présente à la fois dans les trois grades fondamentaux que vous avez reçus et principalement dans ce dernier, lesquels, malgré leurs rapports, sont essentiellement distincts et différents; ils se rapportent au général et au particulier, à la nature universelle et à l'homme moral, qui sont liés l'un à l'autre par le même centre qui est l'auteur de l'un et de l'autre; c'est ce qu'on a en vue depuis le premier pas que vous avez fait dans nos Loges; tous les symboles, tous les emblèmes, toutes les allégories qui vous ont été présentés, ont eu ce double but.");
        await this.pause(300);
        await this.parler('Orateur', "Nous convenons avec vous que ce mélange rend votre tâche plus pénible, mais rien ne s'acquiert, dans cette carrière, sans travail, et c'est déjà vous rendre un grand service que de vous apprendre qu'il ne faut pas confondre tout et qu'il faut séparer ce qui doit être distinct.");
        await this.pause(300);
        await this.parler('Orateur', "Nous ne pouvons vous donner que les explications relatives à votre grade ; mettez-les à profit et vous remplirez le vœu de la loge, qui me charge de ce soin.");
        await this.pause(300);
        await this.parler('Orateur', "Le Temple de Salomon, à Jérusalem, est la base invariable de toute la Franc-Maçonnerie; vous retrouverez la même doctrine, sous différentes formes, dans tous les grades. Cet édifice a toujours eu un rang distingué parmi les merveilles du monde terrestre; méditez donc quelle fut sa destination, les plans sur lesquels il fut élevé, la main qui les traça, la sagesse de celui qui les fit exécuter, les rares talents de celui qui en dirigea la construction, ses dimensions, ses divisions, ses ornements, enfin les grandes révolutions qu'il a subies; peut-être y trouverez-vous de grands rapports avec vous-même, peut-être en trouverez-vous aussi de grands avec la nature entière et avec son Auteur.");
        await this.pause(300);
        await this.parler('Orateur', "Les Saintes Écritures vous instruisent assez du rare savoir de notre Respectable Maître Hiram Abif, de ce sublime ouvrier qui mérite d'être l'ami intime du plus sage des rois, qui étonna par l'assemblage de ses talents et qui sera à jamais célèbre par ses succès; elles se taisent à la vérité sur sa mort et sur les circonstances dont on vous a fait le récit; mais leur silence même vous force d'étudier l'emblème; et, soit que cette histoire soit vraie, ou qu'elle ne vous présente qu'une ingénieuse allégorie, elle vous offre, pour le moral et pour le physique, d'importantes vérités à découvrir, si vous avez le courage de vous en occuper.");
        await this.pause(300);
        await this.parler('Orateur', "Le lugubre appareil qui a frappé vos regards, en entrant dans la loge, et le cercueil placé au milieu du tapis qui représente l'intérieur du Temple, se rapportent aux cérémonies dont vous avez été l'objet et vous rappellent, en même temps, la mort et la fin de toutes les choses élémentaires, après leur durée passagère.");
        await this.pause(300);
        await this.parler('Orateur', "Vous êtes entré en Loge, comme Compagnon, accusé d'être complice d'un grand crime; mon Cher Frère, jetez un œil attentif sur l'homme; voyez s'il est dans son état de première nature et osez dire, si vous pouvez, qu'il n'a pas été coupable.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez été placé à l'occident, le dos tourné à l'Orient, triste image de l'homme qui voit venir son couchant, sans s'interroger pour savoir d'où il vient, ni où il va. Cet emblème a été soutenu dans le cours de vos voyages mystérieux, pendant lesquels le Vénérable Maître vous a exhorté à penser à la mort, puisque vous êtes près de votre tombeau ; pensez-y donc efficacement et ne méprisez pas les avertissements de la nature et de celui qui veille sur vous.");
        await this.pause(300);
        await this.parler('Orateur', "On vous a montré le tombeau qui vous attendait et vous y avez vu les tristes restes de celui qui a vécu. Ce tombeau est l'emblème de la matière universelle, qui doit finir dans son tout comme dans ses parties, et à laquelle un nouveau règne, plus lumineux, doit succéder.");
        await this.pause(300);
        await this.parler('Orateur', "Le mausolée placé à l'occident vous a offert un spectacle plus consolant, en vous apprenant à distinguer ce qui doit périr d'avec ce qui est indestructible, et les maximes que vous avez reçues dans vos voyages vous ont appris ce que doit faire celui qui a eu le bonheur de connaître et de sentir cette distinction.");
        await this.pause(300);
        await this.parler('Orateur', "Comme Apprenti, vous aviez monté trois marches de l'escalier mystérieux ; comme Compagnon, vous en aviez monté cinq ; comme Maître, vous venez d'en monter sept et vous avez acquis l'âge distinctif de votre grade; mais, mon Frère, craignez aujourd'hui de redescendre et d'altérer le nombre de perfection dont vous venez d'être décoré; cet escalier vous a mis à la porte du Temple. Il vous avait été fermé, lors de vos premières tentatives, mais aujourd'hui, l'entrée vous a été ouverte, pour vous apprendre qu'un désir pur, un exercice intelligent, un courage ferme et persévérant parviennent à dissiper tout obstacle.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez fait trois pas sur le tombeau, entre l'équerre et le compas, pour aller à l'Orient. Naître, Mourir et Renaître pour l'Éternité où sera le vrai Orient, c'est là notre sort actuel et notre destination ; ce ne sera que notre troisième pas qui décidera si notre voyage était pour la vie ou pour la mort. Marchons toujours dans la justice, et notre dernier pas nous mettra dans un port assuré.");
        await this.pause(300);
        await this.parler('Orateur', "On vous a fait prêter un nouvel engagement et renouveler les anciens. Mon Cher Frère ! Comptez souvent avec vous-même, pensez souvent à vos devoirs et renouvelez, au fond de votre cœur, les engagements qui vous lient envers l'Être Suprême, envers vos Frères et envers vous-même. C'est le vrai moyen de les tenir et d'avoir toujours l'âme calme et tranquille.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez reçu trois coups mortels, et vous avez été renversé dans le tombeau. Ces trois coups désignent les dangers des trois passions dominantes de l'homme et qui lui sont le plus funestes : l'envie, qui empoisonne toute jouissance et cherche à détruire celle du prochain ; l'avarice, qui nous rend souvent injustes et presque toujours insensibles aux malheurs d'autrui ; et l'orgueil, qui s'irrite de tout et ne pardonne rien. Vous avez été comme enseveli dans le tombeau, pour vous apprendre que l'homme livré au vice est comme mort dans la société, qui gémit de ses erreurs.");
        await this.pause(300);
        await this.parler('Orateur', "Vous avez été relevé par le Vénérable Maître, assisté de ses Surveillants, qui avaient été vos guides; mais il a fallu trois fortes secousses pour vous en retirer. On vous a appris par-là que, si le pire des maux est de languir dans la mort du vice, l'homme peut, avec du courage, de la bonne volonté et le secours des bons conseils, dompter les passions qui le dominent et acquérir une nouvelle vie; c'est alors qu'il devient véritablement un Maître, utile par l'instruction et par l'exemple; c'est alors qu'il peut faire usage de la planche à tracer, en offrant des plans sûrs et lumineux à ses semblables.");
        await this.pause(300);
        await this.parler('Orateur', "Cela vous désigne aussi les dangers de l'indolence, la faiblesse de l'Apprenti et du Compagnon, puisqu'il a fallu toute la force du Maître pour vous arracher au tombeau et vous rendre à la vie. C'est cette nouvelle vie que l'homme le plus corrompu peut acquérir par de fermes et constantes résolutions, qui le rendent à la vertu, qui vous a été désignée, mon Cher Frère, lorsque le Vénérable Maître vous a relevé du tombeau. C'est pour la caractériser qu'il vous a donné de nouveaux signe, mots et attouchement. Alors la Lumière a succédé aux ténèbres, la Loge a brillé d'un nouvel éclat et tous les Maîtres, témoins de vos nouveaux serments, se sont empressés de vous reconnaître pour leur Frère.");
        await this.pause(300);
        await this.parler('Orateur', "Ces explications doivent vous suffire, mon Cher Frère, pour vous faire connaître que la Franc-Maçonnerie n'a d'autre but que de rendre les hommes meilleurs et plus utiles à leurs semblables.");
        await this.pause(300);
        await this.parler('Orateur', "En voilà assez pour vous donner d'elle, en général, et de votre nouveau grade en particulier, une opinion qui puisse vous diriger heureusement dans la carrière qui vous reste à parcourir.");
        await this.pause(300);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Je remercie le Frère Orateur. Mes Frères, méditez ces enseignements.");
    },

    receptionMaitreProclamation: async function() {
        this._setEtape("Réception Maître — Proclamation");
        if (confirm('Mise en place de la scène ?')) this.appliquerSnapshot('logeOuverte');
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        await this.parler('V.M.', "Mes Chers Frères, le Frère Compagnon N.. N.., professant la religion chrétienne, désire de faire des nouveaux progrès dans la Franc-Maçonnerie, et d'être reçu dans la classe des Maîtres. Il a fini son temps (ou bien : son mérite personnel lui a fait obtenir la dispense d'une partie du temps prescrit) ; la loge a consenti à son avancement par un scrutin régulier, ainsi que la lecture du protocole va vous le confirmer. Voici le moment de donner votre consentement définitif à sa réception.");
        await this.parler('V.M.', "Frère secrétaire, lisez le protocole de scrutin et d'admission au grade de Maître du Frère N.. N..");
        this.action("Le Frère Secrétaire lit le protocole de scrutin.");
        await this.pause(P * 2);

        await this.parler('V.M.', "Frère N.. N.., qui avez été chargé de l'examen et de la préparation du candidat, faites-nous connaître quelles sont ses dispositions.");
        this.action("Le Frère Préparateur fait son rapport.");
        await this.pause(P);
        await this.parler('Prép.', "Vénérable Maître, le candidat m'a paru digne d'être reçu Maître Franc-Maçon.");
        await this.pause(P);

        await this.parler('V.M.', "Mes Frères, si vous jugez le Frère Compagnon N.. N.. digne d'être reçu au grade de Maître, je vous invite à me le faire connaître à l'instant dans la forme accoutumée. Persistez-vous donc dans le consentement que vous avez donné à sa réception ?");
        await this.frapper('V.M.', 'O');
        this.action("Signe de consentement : bras droit en avant, main en équerre, paume contre terre.");
        await this.pause(P);

        await this.parler('V.M.', "Puisqu'aucun de vous ne s'oppose à sa réception, je vais y faire procéder.");
        await this.parler('V.M.', "Frère N.. N.., que j'ai choisi pour l'introduction du candidat, allez finir sa préparation selon les lois et usages de l'Ordre. Le Frère N.. N.., son parrain, vous assistera dans vos fonctions et vous présenterez ensuite le Compagnon à la loge.");
        this.action("L'Introducteur et le Parrain s'inclinent devant l'autel d'Orient, main droite au signe d'Ordre de Maître, et sortent.");

        // L'Introducteur (maitre1) sort
        await this.processer('pion-maitre1', D, WP[1], WP[0]);

        this.action("Le V.M. désigne le Maître qui sera couché dans le tombeau, les Frères pour éteindre les bougies, et les six Maîtres qui feront la garde du tombeau avec les Surveillants et le MdC.");
        this.action("Le V.M. fait lire les articles du rituel concernant les devoirs du Proposant et les règles à observer pendant la cérémonie.");
        await this.pause(P * 3);
    },

    receptionMaitreIntroduction: async function() {
        this._setEtape("Réception Maître — Introduction");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Dialogue de préparation (Introducteur avec le candidat, hors loge)
        this.action("L'Introducteur, épée nue à la main, se rend avec le Parrain auprès du candidat et l'aborde d'un air grave et sérieux.");
        await this.parler('Intr', "Frère Compagnon, le rapport qui vient d'être fait à la loge de vos progrès, et surtout le désir que vous avez témoigné de vous perfectionner encore parmi les Maîtres, l'a déterminée à m'envoyer vers vous pour s'assurer de nouveau si vous persistiez dans ce noble dessein. Voulez-vous donc subir les épreuves par lesquelles tout Compagnon, avant d'être reçu Maître, doit démontrer son innocence, son courage, et la sincérité de son désir ?");
        await this.pause(P);
        await this.parler('Intr', "Mon Frère, celui qui n'a pas laissé pénétrer le vice dans son cœur se soumet sans crainte aux plus fortes épreuves, parce qu'il en doit sortir plus pur et plus vertueux. Mais l'homme dont l'âme est corrompue y publie sa honte et n'y trouve que l'humiliation ou le tourment des remords.");
        await this.parler('Intr', "Puisque vous ne craignez pas d'être éprouvé pour obtenir le rang de Maître, préparez-vous à ce travail en renonçant dès à présent et sans réserve à des choses dans lesquelles l'homme met trop souvent sa confiance.");
        this.action("L'Introducteur demande au candidat son chapeau et son épée. Le Parrain les porte dans la loge.");
        await this.parler('Intr', "Que votre front paraisse à découvert en présence de vos juges, et qu'il ne vous reste pour vous défendre devant eux, que votre innocence et vos vertus.");
        this.action("L'Introducteur fait revêtir au candidat son tablier de Compagnon, les attaches par derrière.");
        await this.parler('Intr', "Mon Frère, voici l'instant où vous devez être introduit dans la loge des Maîtres. La tristesse règne dans leur assemblée, car un grand crime a été commis par des compagnons, et les coupables n'ont pas été découverts. Si vous n'avez rien à vous reprocher, venez courageusement avec moi, ayez la fermeté d'un homme juste et le calme de l'innocence. Mais que la candeur soit sur vos lèvres et la sincérité dans votre cœur, si vous voulez sortir glorieusement des épreuves que vous devez nécessairement subir. Ne craignez-vous rien, mon Frère, et voulez-vous me suivre ?");
        await this.pause(P);

        // Batterie à la porte en Compagnon
        this.action("L'Introducteur annonce le candidat à la porte par la batterie de Compagnon.");
        await this.frapperPorte('Intr', null, 'OO-O');
        await this.frapperPorte('Intr', null, 'OO-O');
        await this.parler('2°S.', "Frère Premier Surveillant, on a frappé à la porte de la loge en Compagnon.");
        await this.parler('1°S.', "Vénérable Maître, on a frappé à la porte de la loge en Compagnon.");
        await this.parler('V.M.', "Frère Premier Surveillant, dites au Frère Second Surveillant de voir qui c'est.");
        await this.parler('1°S.', "Frère Second Surveillant, voyez qui c'est.");
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.parler('2°S.', "Qui est-ce qui a frappé ainsi ?");
        await this.parler('Intr', "C'est un Frère Franc-Maçon Compagnon qui demande d'être reçu Maître.");
        await this.parler('2°S.', "Frère Premier Surveillant, c'est un Frère Franc-Maçon Compagnon qui demande d'être reçu Maître.");
        await this.parler('1°S.', "Vénérable Maître, c'est un Frère Franc-Maçon Compagnon qui demande d'être reçu Maître.");
        await this.pause(P);

        // Questions d'identité
        await this.parler('V.M.', "Frère Premier Surveillant, quel est son nom de baptême, son nom civil, son âge, le lieu de son domicile, et sa religion ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est son nom de baptême, son nom civil, son âge, le lieu de son domicile, et sa religion ?");
        await this.parler('2°S.', "Quel est son nom de baptême, son nom civil, son âge, le lieu de son domicile, et sa religion ?");
        await this.parler('Cand.', "Je m'appelle N.. N.., je suis âgé de..., je fais résidence à..., et je professe la religion chrétienne.");
        await this.parler('2°S.', "Frère Premier Surveillant, il s'appelle N.. N.., il est âgé de..., il fait sa résidence à..., et il professe la religion chrétienne.");
        await this.parler('1°S.', "Vénérable Maître, il s'appelle N.. N.., il est âgé de..., il fait résidence à..., et il professe la religion chrétienne.");
        await this.pause(P);

        // Questions d'Ordre
        await this.parler('V.M.', "Frère Premier Surveillant, quel est son nom et son âge d'Ordre ? Où a-t-il travaillé, et dans quelle partie a-t-il fait son travail ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est son nom et son âge d'Ordre ? Où a-t-il travaillé, et dans quelle partie a-t-il fait son travail ?");
        await this.parler('2°S.', "Frère Introducteur, quel est son nom et son âge d'Ordre ? Où a-t-il travaillé, et dans quelle partie a-t-il fait son travail ?");
        await this.parler('Intr', "Son nom est G...N ; il a cinq ans passés ; il a travaillé dans la seconde division du porche ; il a poli la pierre brute et préparé ses outils.");
        await this.parler('2°S.', "Frère Premier Surveillant, son nom est G...N ; il a cinq ans passés ; il a travaillé dans la seconde division du porche ; il a poli la pierre brute et préparé ses outils.");
        await this.parler('1°S.', "Vénérable Maître, son nom est G...N ; il a cinq ans passés ; il a travaillé dans la seconde division du porche ; il a poli la pierre brute et préparé ses outils.");
        await this.pause(P);

        // Questions sur le temps, le garant
        await this.parler('V.M.', "Frère Premier Surveillant, a-t-il fait son temps ? Ses maîtres sont-ils contents de lui ? Est-il disposé à subir ses dernières épreuves ? Et qui est-ce qui répond de lui dans la loge ?");
        await this.parler('1°S.', "Frère Second Surveillant, a-t-il fait son temps ? Ses maîtres sont-ils contents de lui ? Est-il disposé à subir ses dernières épreuves ? Et qui est-ce qui répond de lui dans la loge ?");
        await this.parler('2°S.', "Frère Introducteur, a-t-il fait son temps ? Ses maîtres sont-ils contents de lui ? Est-il disposé à subir ses dernières épreuves ? Et qui est-ce qui répond de lui dans la loge ?");
        await this.parler('Intr', "Il a fait son temps ; ses maîtres sont contents de lui ; il est disposé à subir ses dernières épreuves ; et le Frère N..N.. répond de lui.");
        await this.parler('2°S.', "Frère Premier Surveillant, il a fait son temps ; ses maîtres sont contents de lui ; il est disposé à subir ses dernières épreuves ; et le Frère N..N.. répond de lui.");
        await this.parler('1°S.', "Vénérable Maître, il a fait son temps ; ses maîtres sont contents de lui ; il est disposé à subir ses dernières épreuves ; et le Frère N..N.. répond de lui.");
        await this.pause(P);

        // Garant
        await this.parler('V.M.', "Frère N..N.., le Compagnon qui se présente pour être reçu Maître assure que vous répondez de lui à la loge. Vous connaissez à ce titre toute l'étendue des devoirs que l'Ordre vous impose, et de vos obligations envers le candidat. Dites donc à haute voix si vous répondez de lui à l'Ordre et à vos Frères.");
        this.action("Le Frère répondant répond affirmativement.");
        await this.pause(P);

        // Dernier consentement
        await this.parler('V.M.', "Mes Frères, le Frère N..N.. nous est garant du Frère N..N.., Compagnon. Consentez-vous qu'il soit introduit pour être reçu Maître Franc-Maçon ? Je vous le demande pour la dernière fois.");
        await this.frapper('V.M.', 'O');
        this.action("Signe de consentement donné.");
        await this.echoCoups('O');

        // Mise en place — obscurcissement
        this.action("Les Frères se rangent en silence autour du tapis. Le Maître désigné est couché dans le tombeau et recouvert du tapis noir. Les bougies de l'appartement sont éteintes. Les neuf flambeaux sont enveloppés de cylindres. Les deux terrines d'esprit de vin sont allumées.");
        await this.pause(P * 2);

        await this.echoCoups('O');
        await this.parler('V.M.', "Frère Premier Surveillant, puisque le Frère Compagnon est décidé à subir les épreuves nécessaires, qu'il soit introduit.");
        await this.parler('1°S.', "Frère Second Surveillant, puisque le Frère Compagnon est décidé à subir les épreuves nécessaires, qu'il soit introduit.");
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.frapperPorte('Intr',  null, 'OO-O');
        await this.frapperPorte('Intr',  null, 'OO-O');
        await this.parler('2°S.', "Le Vénérable Maître vous ordonne d'introduire dans la loge ce Frère Compagnon.");

        // Entrée à reculons — candidat placé à l'Occident, l'Introducteur entre avec lui
        this.action("L'Introducteur fait entrer le candidat à reculons, dos tourné à l'Orient. Il le place à l'Occident entre les deux Surveillants, face au mausolée.");
        animerVers("pion-maitre1", 630, 900, D);
        await this.processer('pion-candidat', D, { x: 630, y: 900 }, WP[1]);
        animerVers("pion-maitre1", WP[1].x, WP[1].y + 40, D);
        await this.pause(P);

        await this.parler('Intr', "Mon Frère, armez-vous de courage et de confiance.");
        this.action("Les deux Surveillants se placent devant le candidat et lui arrachent son tablier.");
        await this.parler('2°S.', "Êtes-vous digne de porter cet habit ?");
        await this.pause(P);

        await this.echoCoups('O');
        await this.parler('V.M.', "Compagnon, on vous a accusé d'un grand crime. En seriez-vous coupable ? Soyez sincère : l'aveu et le repentir sont les seuls moyens d'obtenir grâce. Votre conscience ne vous reproche-t-elle rien ? Répondez.");
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, éprouvez le Compagnon. Montrez-lui la preuve du crime et examinez-le sévèrement.");
        this.action("Le 2°S. fait tourner le candidat. Le 1°S. lui montre le cercueil.");
        await this.parler('1°S.', "Compagnon, voilà la preuve du crime.");
        await this.pause(P);
        await this.parler('1°S.', "Vénérable Maître, le Compagnon paraît ému de ce triste spectacle, mais rien n'annonce qu'il soit coupable.");
        await this.pause(P);

        await this.parler('V.M.', "Compagnon, tout vous montre ici notre juste douleur. Nous avons perdu notre Respectable Maître par la perfidie des compagnons. Vous êtes accusé d'en être complice. N'avez-vous aucune connaissance de cet horrible complot ? Répondez.");
        await this.pause(P);
        await this.parler('V.M.', "Mon Frère, la parole d'un Maçon est sacrée. Aussi, je reçois la vôtre, et dès ce moment vous n'êtes plus coupable à nos yeux. Mais ne soyez pas surpris des soupçons que nous avions conçus contre vous. Depuis notre malheur, que nous ne pouvons attribuer qu'à des compagnons, tous ceux de votre grade nous sont devenus suspects, et vous êtes personnellement accusé. Mais votre noble franchise vous rend aujourd'hui notre confiance. Pour vous en convaincre, nous sommes prêts à vous associer à nos travaux, et à vous révéler les mystères qui nous rassemblent en ce lieu d'horreur. Cependant, mon Frère, vous devez être encore éprouvé.");
        await this.parler('V.M.', "Méditez donc sérieusement les choses qui vous seront enseignées dans ce grade. Et, par votre fermeté, par votre docilité, par votre intelligence, méritez la faveur que l'Ordre veut vous faire.");
    },

    receptionMaitreVoyages: async function() {
        this._setEtape("Réception Maître — Voyages");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Batterie OO-O × 3
        await this.echoCoupsGroupe('OO-O', 3);
        await this.parler('V.M.', "Frère Second Surveillant, que le Compagnon fasse avec vous, autour de ces tristes restes, les neuf voyages emblématiques, lesquels pourront se terminer en trois, s'il se laisse guider par vos conseils.");
        await this.pause(P);

        // PREMIER VOYAGE — sens du soleil (PW1→10, Midi→Nord)
        this.action("PREMIER VOYAGE — Le 2°S. prend la main gauche du candidat. Il porte la pointe de l'épée du Surveillant sur son cœur. Tour par le Midi vers le Nord, dos tourné au cercueil.");
        await this.processerCortege(D, PW[1],PW[2],PW[3],PW[4],PW[5],PW[6],PW[7],PW[8],PW[9],PW[10]);

        // Arrêt devant la tête de mort d'Orient
        await this.pause(P);
        await this.parler('2°S.', "Mon Frère, regardez ce tableau !");
        this.action("Le 2°S. lui fait lire l'inscription : PENSEZ DONC À LA MORT.");
        this.action("Retour à l'Occident. Le candidat salue l'Orient.");
        await this.processerCortege(D, WP[0], WP[1]);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Celui qui voyage dans une terre étrangère n'est jamais plus près de s'égarer que lorsqu'il renvoie son guide, croyant savoir le chemin.");
        await this.parler('V.M.', "Frère Second Surveillant, faites-lui faire le second voyage.");
        await this.pause(P);

        // SECOND VOYAGE — même circuit (PW1→10)
        this.action("SECOND VOYAGE — Même circuit, dos tourné au cercueil.");
        await this.processerCortege(D, PW[1],PW[2],PW[3],PW[4],PW[5],PW[6],PW[7],PW[8],PW[9],PW[10]);
        await this.pause(P);
        await this.parler('2°S.', "Ici-bas, la vie est près de la mort, et l'homme a toujours le pied sur le bord du tombeau.");
        await this.processerCortege(D, WP[0], WP[1]);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Heureux celui qui, s'étant bien étudié lui-même, a pu connaître ses défauts, apercevoir son ignorance, et sentir qu'il a besoin de secours ; car il a déjà fait le premier pas vers la lumière.");
        await this.parler('V.M.', "Frère Second Surveillant, faites-lui faire le troisième voyage.");
        await this.pause(P);

        // TROISIÈME VOYAGE (PW1→10)
        this.action("TROISIÈME VOYAGE.");
        await this.processerCortege(D, PW[1],PW[2],PW[3],PW[4],PW[5],PW[6],PW[7],PW[8],PW[9],PW[10]);
        await this.pause(P);
        await this.parler('2°S.', "Mon Frère, l'homme ne vit que pour la mort, et sans la mort il ne peut parvenir à la vie.");
        await this.processerCortege(D, WP[0], WP[1]);
        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "Chercher avec un cœur droit, demander avec résignation et discernement, et frapper avec confiance et persévérance, telle est la clé de la science du sage.");
        await this.pause(P);

        // Bilan — Prudence
        await this.parler('V.M.', "Frère Second Surveillant, le Compagnon a-t-il découvert dans ses voyages la vertu qui distingue les Maîtres ?");
        await this.parler('2°S.', "Non, Vénérable Maître, mais il a été docile à mes conseils, m'ayant donné toute sa confiance.");
        await this.parler('V.M.', "Puisqu'il a su, comme Compagnon, se défier de ses forces, montrez-lui la vertu si nécessaire aux Maîtres pour se conduire eux-mêmes, et pour diriger les Compagnons et les Apprentis.");
        this.action("Le 2°S. montre au Compagnon le transparent de la PRUDENCE.");
        await this.parler('V.M.', "Mon Frère, la tempérance et l'amour de la justice ne suffisent pas au Maçon. La prudence lui est encore nécessaire, pour agir et pour régler ses propres vertus. C'est par elle qu'il sait discerner le but auquel il doit tendre, et qu'il découvre les moyens d'y parvenir.");
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, il est temps de conduire le Compagnon vers l'emblème du Maître.");
        this.action("Les Surveillants conduisent le candidat face au mausolée.");
        await this.processer('pion-candidat', D, { x: 630, y: 920 });
        await this.parler('1°S.', "Mon Frère, considérez attentivement cet emblème. C'est l'Ordre qui vous le donne pour modèle.");
        await this.pause(P);
        await this.parler('V.M.', "Tout homme, par sa naissance, est devenu victime de la mort. Mais le sage voit approcher sans effroi l'instant qui le dépouillera de ce qui lui est étranger pour le rendre à lui-même.");
        await this.frapper('V.M.', 'O');
        this.action("Les deux Surveillants font retourner le candidat face à l'Orient.");
        await this.pause(P);

        await this.parler('V.M.', "Frère Compagnon, avez-vous bien entendu les maximes que l'Ordre vient de vous présenter ?");
        await this.parler('V.M.', "Mais il ne suffit pas, mon Frère, de connaître ce qui peut nous rendre vertueux, il faut encore avoir sur nous-mêmes assez d'empire pour vaincre nos passions. Êtes-vous bien déterminé à pratiquer ces choses ? Répondez.");
        await this.parler('V.M.', "Soyez constant, mon Frère, dans cette résolution salutaire. Et surtout, ne l'oubliez jamais lorsque vos désirs seront contraires à vos devoirs.");
        await this.pause(P);

        await this.parler('V.M.', "Compagnon, vous étiez condamné à faire neuf voyages. Mais votre innocence, le courage que vous m'avez montré, et votre confiance dans l'Ordre dans les trois voyages que vous venez de faire, vous ont obtenu grâce et conduit à la porte du Temple.");
        await this.frapper('V.M.', 'O');
        this.action("Tous les Frères reprennent leurs places en silence. Six Maîtres restent autour du tapis : trois côté Midi, trois côté Nord.");

        // Dispersion : officiers + Surveillants encadrent, 6 Maîtres se positionnent au tapis
        {
            const PP = this.POSITIONS;
            const D2 = 1200;
            animerVers("pion-2surv",         590, 830, D2);
            animerVers("pion-1surv",         670, 830, D2);
            animerVers("pion-mc",            PP["pion-mc"].x,            PP["pion-mc"].y,            D2);
            animerVers("pion-ex-maitre",     PP["pion-ex-maitre"].x,     PP["pion-ex-maitre"].y,     D2);
            animerVers("pion-orateur",       PP["pion-orateur"].x,       PP["pion-orateur"].y,       D2);
            animerVers("pion-secretaire",    PP["pion-secretaire"].x,    PP["pion-secretaire"].y,    D2);
            animerVers("pion-tresorier",     PP["pion-tresorier"].x,     PP["pion-tresorier"].y,     D2);
            animerVers("pion-eleemosynaire", PP["pion-eleemosynaire"].x, PP["pion-eleemosynaire"].y, D2);
            animerVers("pion-econome",       PP["pion-econome"].x,       PP["pion-econome"].y,       D2);
            // Introducteur retourne à sa place
            animerVers("pion-maitre1", PP["pion-maitre1"].x, PP["pion-maitre1"].y, D2);
            // 6 Maîtres prennent position autour du tapis
            animerVers("pion-maitre2", WP[2].x, WP[2].y, D2); // Nord-Bas
            animerVers("pion-maitre3", WP[3].x, WP[3].y, D2); // Nord-Milieu
            animerVers("pion-maitre4", WP[4].x, WP[4].y, D2); // Nord-Haut
            animerVers("pion-maitre5", WP[8].x, WP[8].y, D2); // Midi-Bas
            animerVers("pion-maitre6", WP[7].x, WP[7].y, D2); // Midi-Milieu
            animerVers("pion-maitre7", WP[6].x, WP[6].y, D2); // Midi-Haut
            await this.pause(D2 + 200);
        }

        await this.pause(P);

        // Discours du VM avant l'escalier
        await this.parler('V.M.', "Frère Compagnon, les épreuves par lesquelles vous venez de passer, les conseils que vous avez reçus, les règles et les maximes qui vous ont été enseignées, n'ont eu d'autre motif que celui de vous rendre digne d'entrer dans le temple dont les portes sont prêtes à s'ouvrir devant vous.");
        await this.parler('V.M.', "Vous nous paraissez être tel que nous le désirons, mais nous ne pouvons lire dans le fond de votre âme, et souvent les dehors de l'homme sont trompeurs. Prenez-y garde : la lumière qui brille dans ce temple éclaire tout, et aucun homme ne peut se soustraire à la puissance de son action.");
        await this.parler('V.M.', "Le Maître, mon Frère, n'instruit pas seulement par les paroles. C'est par la force de l'exemple qu'il doit guider les apprentis et les compagnons. Vous sentez-vous donc capable de diriger ainsi vos Frères ? Répondez.");
        await this.pause(P);
        await this.parler('V.M.', "Lorsque vous vous présentâtes pour la première fois à l'Ordre, on vous admit pour un cherchant. Au second grade, vous fûtes reconnu pour persévérant dans la recherche de la vérité. Voulez-vous aujourd'hui devenir souffrant dans l'espoir de la découvrir ? Et aurez-vous le courage de vous exposer même à la mort pour sa défense ? Consultez vos forces et répondez.");
        await this.pause(P);

        // Escalier
        await this.echoCoups('O');
        await this.parler('V.M.', "Frères Surveillants, puisqu'il est ferme dans ses résolutions et déterminé à tout souffrir pour trouver la lumière, faites-lui monter les sept marches du temple, mais soutenez-le et ne l'abandonnez pas, afin qu'il puisse parvenir jusqu'à la chambre du milieu.");
        // Escalier du temple — 7 marches (3 + 2 + 2)
        {
            const yBase = 830, stepH = Math.round((yBase - 690) / 3); // ≈ 47px / marche
            const durPas = 700, cX = 630;
            // Marches 1-3 → palier 3
            for (let i = 1; i <= 3; i++) {
                const y = yBase - i * stepH;
                await Promise.all([
                    animerVers("pion-candidat", cX,       y, durPas),
                    animerVers("pion-2surv",    cX - 40,  y, durPas),
                    animerVers("pion-1surv",    cX + 40,  y, durPas),
                ]);
                this._afficherPas(i, cX, y);
                await this.pause(1000);
            }
            this.action("Signe d'Apprenti au palier 3.");
            await this.pause(P);
            // Marches 4-5 → palier 5
            for (let i = 4; i <= 5; i++) {
                const y = yBase - i * stepH;
                await Promise.all([
                    animerVers("pion-candidat", cX,       y, durPas),
                    animerVers("pion-2surv",    cX - 40,  y, durPas),
                    animerVers("pion-1surv",    cX + 40,  y, durPas),
                ]);
                this._afficherPas(i, cX, y);
                await this.pause(1000);
            }
            this.action("Signe de Compagnon au palier 5.");
            await this.pause(P);
            // Marches 6-7 → palier 7
            for (let i = 6; i <= 7; i++) {
                const y = yBase - i * stepH;
                await Promise.all([
                    animerVers("pion-candidat", cX,       y, durPas),
                    animerVers("pion-2surv",    cX - 40,  y, durPas),
                    animerVers("pion-1surv",    cX + 40,  y, durPas),
                ]);
                this._afficherPas(i, cX, y);
                await this.pause(1000);
            }
        }
        await this.parler('1°S.', "Vénérable Maître, le Frère Compagnon a monté les sept degrés du temple ; il est parvenu jusqu'au pavé mosaïque, mais il lui manque le signe de Maître.");
        await this.parler('V.M.', "Faites-le passer dans la chambre du milieu par les trois pas de Maître. Vous le conduirez ensuite à l'Orient pour y prendre ses engagements. C'est là qu'il recevra le caractère et les signes qui lui sont nécessaires.");

        // Trois pas de Maître par-dessus le cercueil : WP7 → WP3 → WP5
        this.action("Les deux Surveillants lui font faire les trois pas de Maître par-dessus le cercueil.");
        {
            const durPasM = 900;
            // Pas 1
            await Promise.all([
                animerVers("pion-candidat", WP[7].x,       WP[7].y, durPasM),
                animerVers("pion-2surv",    WP[7].x - 40,  WP[7].y, durPasM),
                animerVers("pion-1surv",    WP[7].x + 40,  WP[7].y, durPasM),
            ]);
            this._afficherPas(1, WP[7].x, WP[7].y);
            await this.pause(1000);
            // Pas 2
            await Promise.all([
                animerVers("pion-candidat", WP[3].x,       WP[3].y, durPasM),
                animerVers("pion-2surv",    WP[3].x - 40,  WP[3].y, durPasM),
                animerVers("pion-1surv",    WP[3].x + 40,  WP[3].y, durPasM),
            ]);
            this._afficherPas(2, WP[3].x, WP[3].y);
            await this.pause(1000);
            // Pas 3 → WP5
            await Promise.all([
                animerVers("pion-candidat", WP[5].x,       WP[5].y, durPasM),
                animerVers("pion-2surv",    WP[5].x - 40,  WP[5].y, durPasM),
                animerVers("pion-1surv",    WP[5].x + 40,  WP[5].y, durPasM),
            ]);
            this._afficherPas(3, WP[5].x, WP[5].y);
            await this.pause(1000);
            // Agenouillement au coussin
            await Promise.all([
                animerVers("pion-candidat", 633,  242, 1200),
                animerVers("pion-2surv",    590,  242, 1200),
                animerVers("pion-1surv",    670,  242, 1200),
            ]);
        }
        await this.pause(P);

        await this.parler('V.M.', "Frère Compagnon, voulez-vous prendre les engagements des Maîtres, sans lesquels vous ne pourriez être admis à la connaissance des mystères de ce grade ?");
        await this.parler('V.M.', "Frères Surveillants, faites-le donc placer dans la posture convenable et accoutumée pour y prononcer son engagement.");
        this.action("Les Surveillants lui font mettre le genou droit sur le coussin, la main droite sur l'Évangile et l'épée. Le V.M. lui fait tenir le compas ouvert, pointe sur le cœur.");
    },

    receptionMaitreSerment: async function() {
        this._setEtape("Réception Maître — Serment");
        const P = this.PAUSE_ACTION;

        await this.frapper('V.M.', 'O');
        await this.parler('V.M.', "À l'ordre, mes Frères.");
        this.action("Tous les Frères se lèvent, tirent l'épée la pointe haute, chapeau bas.");
        await this.pause(P);

        this.action("Le 1°S. présente la feuille de l'engagement au candidat.");
        await this.parler('Cand.', "Moi, N.. N.., je promets, en présence du Grand Architecte de l'Univers, et m'engage sur ma parole d'honneur devant cette respectable assemblée, de ne révéler à aucun Compagnon ni Apprenti, ni à aucun homme que je n'aurais pas reconnu pour vrai et légitime Maître, aucun des mystères qui m'ont été confiés, ou qui pourront l'être à l'avenir, sans y être légitimement autorisé par mes chefs et selon les lois de l'Ordre. Je promets de remplir exactement tous les devoirs d'un vrai Maître Franc-Maçon, et de respecter les lois de la religion chrétienne et celles de l'état ; de remplir les devoirs de la fraternité et de l'amitié ; d'édifier de tout mon pouvoir mes Frères par une bonne conduite tant dans la société civile que dans l'Ordre ; renouvelant de cœur et de bouche tous les engagements que j'ai déjà pris. Ainsi que Dieu me soit en aide.");
        await this.pause(P);

        this.action("Les Surveillants relèvent le candidat.");
        await this.frapper('V.M.', 'O');
        this.action("Tous les Frères remettent l'épée dans le fourreau et se couvrent, sans s'asseoir — ils restent debout jusqu'à l'élévation du candidat.");
        await this.pause(P);

        this.action("Le MdC éteint les flammes et place la terrine d'Orient de manière que le V.M. puisse se mettre auprès du tombeau.");
        await this.parler('V.M.', "L'engagement que vous venez de prendre et la confiance que vous avez méritée éloignent toutes réserves. Prêtez attention au récit que je vais vous faire. En vous instruisant du légitime sujet de notre douleur, il vous retracera la règle de votre conduite dans le grade que vous allez recevoir.");
        await this.parler('V.M.', "Frères Surveillants, placez le candidat au pied du cercueil, afin qu'il y soit reçu Maître, et vous, mes Frères, qui entourez ce monument où sont renfermés les tristes restes de ce que nous avions de plus cher, disposez tout pour la célébration de nos mystères.");
        await this.pause(P);
    },

    receptionMaitreReception: async function() {
        this._setEtape("Réception Maître — Réception");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Candidat au pied du cercueil
        await this.processer('pion-candidat', D, { x: 630, y: 650 });

        // Mise dans le cercueil
        this.action("Les Surveillants font reculer le candidat jusqu'au bas du cercueil. Le Maître couché dans le tombeau se relève en silence. Le V.M. descend, maillet en main, accompagné du porteur de lanterne.");
        await this.pause(P);

        await this.parler('V.M.', "Au nom de l'Ordre");
        this.action("Le V.M. lui porte un coup de maillet sur l'épaule droite.");
        await this.pause(600);
        await this.parler('V.M.', "Du consentement de cette Respectable Loge,");
        this.action("Deuxième coup de maillet sur l'épaule gauche.");
        await this.pause(600);
        await this.parler('V.M.', "Et par le pouvoir que j'en ai reçu. Je vous reçois Maître Franc-Maçon !");
        this.action("Troisième coup de maillet sur le front. Les trois coups forment un triangle sur la partie supérieure du corps.");
        await this.pause(P);

        this.action("Les deux Surveillants renversent le candidat sur le petit matelas noir. Ils lui mettent la main droite sur le cœur au signe de Compagnon et la jambe droite relevée en équerre. Ils le couvrent du linge blanc ensanglanté, puis du tapis noir croisé de blanc.");
        this.action("Le Frère Introducteur se place à l'Occident, épée nue à la main.");
        animerVers("pion-maitre1", WP[1].x, WP[1].y, D);
        await this.pause(P);

        // Batterie OO-O × 3
        await this.echoCoupsGroupe('OO-O', 3);
        this.action("Les deux Surveillants, le MdC et les six Maîtres présentent la pointe de leur épée nue au corps du candidat — neuf épées au total. Profond silence. Attitude de recueillement et d'affliction.");
        await this.pause(P);

        // Reconnaissance des Maîtres
        await this.parler('V.M.', "Frères Maîtres, qui avez été préposés à la garde du cercueil, reconnaissons-nous.");
        this.action("Les six Maîtres se réunissent aux deux Surveillants et au V.M. Ils forment une chaîne autour du cercueil, bras croisés. Le V.M. fait circuler les deux lettres J.A. gravées sur la lame d'or triangulaire, de maître en maître.");
        await this.parler('V.M.', "Mes Frères, conservons précieusement le souvenir de ces deux lettres. Peut-être nous aideront-elles un jour à retrouver la parole perdue.");
        this.action("Le V.M. rompt la chaîne. Les Maîtres reprennent leurs épées pointées vers le candidat. Le V.M. s'éloigne d'un pas vers l'autel.");
        await this.frapper('V.M.', 'O');
        await this.pause(P);

        // Récit historique
        await this.parler('V.M.', "Que tous les ouvriers du temple soient dans le deuil et la douleur, puisqu'ils ont perdu leur Maître conducteur Hiram, et que sans lui ils ne peuvent accomplir l'édifice qu'ils devaient élever ensemble à la gloire du Grand Architecte de l'Univers. Qu'ils ne cessent de répandre des larmes, car la parole de Maître leur a été enlevée, la parole qu'Hiram avait reçue, sans laquelle il ne peut y avoir d'harmonie dans nos travaux.");
        await this.parler('V.M.', "Mes Frères, combien la cause de notre tristesse est déplorable ! Depuis ce malheur, rien n'est stable pour nous. Quelles vicissitudes ! Quelle obscurité ! Où sont les plans de ce temple que nous devions élever ? Quel est celui d'entre nous qui a été doué d'intelligence pour concevoir l'ensemble et les rapports ? Hiram seul en connaissait la beauté, lui seul pouvait nous diriger dans la construction du sanctuaire et de l'autel. Mais il n'est plus, et nous n'avons d'espoir que dans notre courage et dans notre persévérance. Que le Compagnon, qui dans ce moment lugubre, n'a pas craint de se présenter pour être reçu parmi les Maîtres, prête une oreille attentive au récit que je vais faire de nos malheurs. Puisse-t-il servir à son instruction, et le rendre digne de nous suivre dans nos recherches. Et vous, mes Frères, ayez toujours devant les yeux les moindres circonstances d'un événement si funeste.");
        await this.pause(P);

        // Récit historique complet
        await this.parler('V.M.', "Le temps étant venu où Salomon devait élever un temple à la gloire du Grand Architecte de l'Univers sur les plans, tracés par une main céleste, qui avaient été remis à David, son père, il fut aidé dans cette grande entreprise par Hiram, roi de Tyr. Ce prince lui fournit en abondance les matériaux les plus riches, et lui procura un grand nombre d'excellents ouvriers. Mais il lui fit un don bien plus précieux en lui envoyant Hiram Abif, syrien de nation, l'architecte le plus célèbre de l'univers, le plus habile dans tous les ouvrages de l'art. Salomon, étant doué de la plus haute sagesse, reconnut le prix des talents et des lumières d'Hiram, il lui donna sa confiance, et l'établit chef de tous les ouvriers.");
        await this.parler('V.M.', "Hiram Abif les sépara d'abord en trois classes, afin que chacun pût recevoir une paye proportionnée à son mérite et à ses talents. Il donna à chaque classe des signes, attouchements et mots différents. Les premiers, ou les apprentis, étaient appelés à la colonne J. où il leur donnait leur salaire ; les compagnons, à la colonne B. Mais il introduisit les maîtres dans la chambre du milieu, pour y être payés selon leur grade. Un ordre si bien établi devait assurer à chacun sa juste récompense. Mais l'orgueil, l'envie et la cupidité traînent à leur suite le désordre, la confusion, et le crime.");
        await this.parler('V.M.', "Trois compagnons perfides conçurent le détestable projet de forcer Hiram Abif à leur donner le mot de maître pour s'en procurer la paye. Dans ce dessein, ils se placèrent à trois différentes portes du temple, à l'heure où, après que les ouvriers s'étaient retirés, il avait coutume d'aller seul vérifier les travaux.");
        await this.parler('V.M.', "Hiram, étant entré par la porte d'Occident, et voulant se retirer par celle du Midi, y trouva un de ces compagnons, qui lui demanda le mot de maître en le menaçant de le tuer s'il résistait à sa demande. Et, sur son refus, ce scélérat lui donna un grand coup de marteau sur l'épaule gauche.");
        await this.parler('V.M.', "Hiram chercha son salut dans la fuite et, voulant s'échapper par la porte du Nord, il y trouva le second assassin, qui lui fit la même demande. Et, sur son refus, ce monstre lui porta un grand coup de massue sur l'épaule droite, dont il fut presque terrassé.");
        await this.parler('V.M.', "Cependant, il eut encore la force de s'enfuir vers la porte d'Orient. Mais il y trouva le troisième compagnon, qui le voyant déjà affaibli par les coups qu'il avait reçus, lui demanda impérieusement le mot de maître. Hiram ne put se dissimuler l'extrémité du danger où il se trouvait en le refusant, mais il préféra son devoir à la conservation de sa vie. Le compagnon, irrité, lui porta un grand coup de maillet sur le front, qui le fit tomber mort.");
        await this.parler('V.M.', "Ces furieux, s'étant réunis, résolurent d'enterrer son cadavre, espérant que leur crime resterait ignoré. Mais comme il était encore jour, ils le cachèrent d'abord sous un monceau de pierres, et ils profitèrent ensuite des ténèbres de la nuit pour le porter sur un lieu élevé aux environs du temple, où ils l'enterrèrent.");
        await this.parler('V.M.', "Après que sept jours se furent écoulés, Salomon, inquiet sur le sort du maître Hiram, ordonna à neuf maîtres de le chercher dans tous les ateliers, et dans l'enceinte qu'il avait tracée pour la construction du temple. Les neuf maîtres se partagèrent en trois bandes. Trois d'entre eux sortirent par la porte du Midi, trois par la porte du Nord, trois autres enfin par la porte d'Orient. Dans leurs recherches, ils appelèrent en vain le maître Hiram. Mais ceux qui s'étaient dirigés du côté de l'Orient, attirés par l'éclat d'une lumière extraordinaire qui partait d'un lieu fort élevé, firent les plus grands efforts pour y parvenir. Là, accablés de fatigue et de lassitude, ils s'assirent, et aperçurent une éminence qui leur fit connaître que la terre avait été nouvellement remuée en cet endroit. Ils se mirent à fouiller, et trouvèrent un cadavre, qu'ils reconnurent, à la lame d'or triangulaire dont il était encore décoré, pour le corps de notre Respectable maître Hiram.");
        await this.parler('V.M.', "Alors, ils jetèrent des cris de douleur, et se firent entendre par les deux autres bandes de maîtres. Ceux-ci accoururent et, s'étant réunis, ils vérifièrent ensemble que ce cadavre était le corps du maître Hiram, et qu'il avait été assassiné. Mais ils ne purent soupçonner de ce meurtre abominable que quelques méchants compagnons, qui auraient voulu lui arracher le mot de maître pour en avoir la paye. Dans la crainte qu'ils eurent qu'il n'eût été forcé de le leur dévoiler, ils convinrent de ne plus employer l'ancien mot, et d'y substituer la première parole qu'ils prononceraient entre eux, en exhumant le cadavre d'Hiram. Après cet accord, ils plantèrent sur cette éminence une branche d'épine nommée acacia, pour reconnaître le lieu où ils l'avaient découvert, et ils se rendirent auprès du roi Salomon, afin de lui apprendre cette triste nouvelle.");
        await this.parler('V.M.', "Le roi, pour témoigner la tendre amitié qu'il avait pour Hiram Abif, ordonna à ces neuf maîtres d'exhumer son corps, et de le transporter dans le temple, et voulut pour honorer sa mémoire qu'ils fussent accompagnés par tous les autres maîtres.");
        await this.parler('V.M.', "L'un d'eux le prit par le doigt index, mais la peau se détacha de l'os et lui resta dans la main. Un autre le prit par le doigt du milieu, mais la chair lui resta aussi dans la main. Enfin, un troisième essaya de l'élever, en le prenant par le poignet ; mais, ainsi qu'il était arrivé aux deux premiers, la chair lui resta dans la main. Alors, il s'écria : M... B... ; ce qui signifie : le corps est corrompu, ou : la chair quitte les os, et il se mit en devoir d'exhumer le cadavre. Les huit autres Maîtres se réunirent à lui pour l'élever, en présence de tous les autres maîtres et selon les ordres du roi. Ils portèrent le corps d'Hiram dans le temple avec grande pompe, étant décorés des marques de leur grade, avec des gants blancs, afin de témoigner qu'ils étaient innocents du sang d'Hiram.");
        await this.parler('V.M.', "Le roi Salomon lui fit faire des obsèques magnifiques et, pour honorer son zèle et sa fermeté, il fit placer sur le tombeau la lame d'or triangulaire où était gravée la parole des maîtres, et il en confia la garde à ses plus intimes favoris.");
        await this.parler('V.M.', "Salomon ayant approuvé la résolution qui avait été prise par les neuf maîtres, de ne plus employer le mot de leur grade, et d'y substituer le premier mot qu'ils auraient prononcé en déterrant le cadavre, tous les maîtres se rangèrent en cercle autour du tombeau pour exécuter ce projet. Alors, le maître qui avait relevé le corps d'Hiram donna le mot M... B... à celui qui était sur sa droite pour le faire passer de maître en maître jusqu'à ce qu'il fût connu de tous, et ce mot leur est resté depuis pour se reconnaître entre eux.");
        await this.pause(P);
    },

    receptionMaitreLumiere: async function() {
        this._setEtape("Réception Maître — Lumière");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Recherche du corps
        await this.echoCoups('O');
        this.action("Le MdC enlève les cylindres des flambeaux. Les bougies de l'appartement sont rallumées. Tout s'exécute sans bruit.");
        await this.pause(P);

        await this.echoCoupsGroupe('OO-O', 3);

        await this.parler('V.M.', "Frère Premier Surveillant, qu'est devenu notre respectable Maître Hiram ?");
        await this.parler('1°S.', "Il a été assassiné. Tout nous le confirme, et nous ne pouvons plus douter qu'il soit mort.");
        await this.parler('V.M.', "Allons donc à la recherche de son corps, et ne négligeons rien pour le découvrir, afin de lui rendre les honneurs que nous lui devons. Frère Second Surveillant, prenez avec vous deux Maîtres de votre colonne, et commencez vos recherches par le Nord.");
        await this.pause(P);

        // 2°S. fait le tour par le Nord avec 2 Maîtres
        this.action("Le 2°S. suivi de deux Maîtres fait le tour par le Nord.");
        await this.processer('pion-2surv', D,
            WP[2], WP[3], WP[4], WP[5], WP[6], WP[7], WP[8], WP[1],
            this.POSITIONS["pion-2surv"]
        );
        await this.parler('2°S.', "Vénérable Maître, nos recherches ont été vaines : nous n'avons rien trouvé !");
        await this.pause(P);

        await this.parler('V.M.', "Frère Premier Surveillant, prenez aussi deux Maîtres de votre colonne, et continuez les recherches par le Midi.");
        this.action("Le 1°S. suivi de deux Maîtres fait le tour par le Midi.");
        await this.processer('pion-1surv', D,
            WP[8], WP[7], WP[6], WP[5], WP[4], WP[3], WP[2], WP[1],
            this.POSITIONS["pion-1surv"]
        );
        await this.parler('1°S.', "Vénérable Maître, nos recherches ont été vaines : nous n'avons rien trouvé.");
        await this.pause(P);

        await this.parler('V.M.', "Frères Premier et Second Surveillants, unissez-vous à moi pour cette importante recherche, et allons ensemble par l'Orient. J'espère que nous serons plus heureux.");
        this.action("Les deux Surveillants rejoignent le V.M. à l'Orient par le côté Nord. Le V.M. suivi des deux Surveillants fait le tour entier par le Midi.");
        await this.processer('pion-vm', D,
            WP[6], WP[7], WP[8], WP[1], WP[2], WP[3], WP[4], WP[5]
        );
        await this.pause(P);

        this.action("Le V.M. s'arrête au pied du cercueil où une branche d'acacia a été placée.");
        await this.processer('pion-vm', D, { x: 630, y: 650 });
        await this.parler('V.M.', "Mes Frères, la terre paraît ici nouvellement remuée. La lumière qui s'y fait remarquer m'est un indice que nous y trouverons le corps de notre respectable maître Hiram. Mais tout nous annonce la violence et la perfidie. Marquons cette place avec une branche d'acacia.");
        this.action("Le V.M. ramasse la branche d'acacia et la pose sur le tapis qui couvre le candidat.");
        await this.parler('V.M.', "Avant de fouiller cette terre, convenons ensemble de ne plus nous servir de l'ancienne parole de Maître, et d'y substituer un nouveau mot, pour tromper la cupidité des assassins. Mais auparavant, réunissons-nous avec les autres bandes qui ont cherché par le nord et par le midi pour les instruire de notre découverte.");
        await this.pause(P);

        // Relevée du candidat
        this.action("Le 1°S. se place à droite du V.M., le 2°S. à sa gauche. Les six autres Maîtres restent autour du tombeau. Le V.M. aidé des Surveillants enlève le tapis noir et le linge ensanglanté. Ils font tous le signe d'horreur.");
        await this.pause(P);

        this.action("Le 2°S. prend le candidat par le doigt index — il le laisse aller en prononçant la lettre J. Le 1°S. le prend par le doigt du milieu — il le laisse aller en prononçant la lettre B.");
        await this.parler('2°S.', "J.");
        await this.pause(400);
        await this.parler('1°S.', "B.");
        await this.pause(P);

        this.action("Le V.M. prend le candidat par le poignet, passe sa main gauche sous l'épaule gauche, genou contre genou, pied contre pied. Aidé des Surveillants, il le relève entièrement.");
        await this.parler('V.M.', "Il recevra la vie dans le sein de la mort.");
        await this.pause(P);

        // Candidat relevé
        await this.processer('pion-candidat', D, { x: 630, y: 565 }, WP[5]);

        this.action("Le V.M. lui donne le mot de Maître : M. à l'oreille droite, B. à l'oreille gauche.");
        await this.pause(P);

        await this.processer('pion-vm', D, { x: 630, y: 120 });
        await this.frapper('V.M.', 'O');
        this.action("Le V.M. retourne à sa place ainsi que les Surveillants et les six Maîtres. Le MdC se place à côté du candidat.");

        // Surveillants retournent à leur pupitre
        animerVers("pion-1surv", this.POSITIONS["pion-1surv"].x, this.POSITIONS["pion-1surv"].y, D);
        animerVers("pion-2surv", this.POSITIONS["pion-2surv"].x, this.POSITIONS["pion-2surv"].y, D);
        // 6 Maîtres retournent à leurs places
        const PP = this.POSITIONS;
        animerVers("pion-maitre2", PP["pion-maitre2"].x, PP["pion-maitre2"].y, D);
        animerVers("pion-maitre3", PP["pion-maitre3"].x, PP["pion-maitre3"].y, D);
        animerVers("pion-maitre4", PP["pion-maitre4"].x, PP["pion-maitre4"].y, D);
        animerVers("pion-maitre5", PP["pion-maitre5"].x, PP["pion-maitre5"].y, D);
        animerVers("pion-maitre6", PP["pion-maitre6"].x, PP["pion-maitre6"].y, D);
        animerVers("pion-maitre7", PP["pion-maitre7"].x, PP["pion-maitre7"].y, D);

        await this.parler('V.M.', "Mes Frères, que notre joie soit grande en ce jour. Celui qui était semblable aux morts a renoncé aux vices qui pouvaient le corrompre, et il a reçu une nouvelle vie.");
    },

    receptionMaitreInvestiture: async function() {
        this._setEtape("Réception Maître — Investiture");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Moment de silence
        this.action("La Loge reste un moment dans un profond silence.");
        await this.pause(P * 2);

        await this.parler('V.M.', "Mon Frère, ne perdez jamais de vue ces sublimes emblèmes. Ils vous intéressent bien plus que vous ne pensez. Faites-en parmi les Maîtres le sujet continuel de vos méditations, et si vous ne pouvez encore en pénétrer le sens caché, sachez profiter de ce qu'ils présentent d'instructif et de moral.");
        await this.parler('V.M.', "Dans le récit qui vous a été fait de l'assassinat d'Hiram, vous avez vu trois Compagnons entreprendre d'arracher par violence ce qui ne pouvait être que le prix du travail et de la vertu, et commettre un horrible assassinat pour satisfaire leur aveugle cupidité. C'est ainsi, mon Frère, que les passions portent aux plus grands excès ceux qui se soumettent à leur empire. Mais vous y avez vu un Maître plein de sagesse, célèbre par ses talents et par ses lumières, se livrer à une mort certaine plutôt que de conserver la vie au prix du dépôt qui lui avait été confié. Tel est le devoir du vrai Maçon. Il n'est rien qu'il ne doive sacrifier à la fidélité, à la discrétion, et à la vertu.");
        await this.parler('V.M.', "Frère Maître des Cérémonies, faites approcher de moi le Frère nouveau reçu Maître, afin qu'il reçoive les marques et les signes caractéristiques de son grade.");
        this.action("Les Frères s'assoient. Le MdC conduit le nouveau reçu sur la seconde marche de l'autel d'Orient, au côté droit du V.M.");

        await this.processer('pion-candidat', D, { x: 680, y: 280 });
        await this.pause(P);

        // Tablier
        await this.parler('V.M.', "Mon Cher Frère, en qualité de Maître, vous devez porter désormais le tablier blanc doublé de bleu avec le pectoral rabattu.");
        this.action("Le MdC attache le tablier.");
        await this.parler('V.M.', "Lorsque vous reçûtes le grade d'Apprenti, la couleur blanche du tablier vous annonça ce que vous deviez faire. Elle vous indiqua que pour devenir vraiment Maçon, il fallait acquérir cette candeur, cette droiture d'intention, sans lesquelles la vertu ne saurait exister. Mais dans le grade que vous venez de recevoir, cette même couleur est le témoignage de ce que vous devez avoir fait, puisqu'elle présente le symbole de la perfection, et de cette constance inébranlable dans le bien qui caractérise en effet un véritable Maître. La couleur bleue qui entoure le tablier blanc vous démontre qu'il n'y a pas de vertu solide et durable, si elle n'est soutenue par la religion, qui seule peut attirer sur nous les faveurs célestes.");
        await this.pause(P);

        // Épée et chapeau
        await this.parler('V.M.', "Mon Frère, je vous rends votre épée. C'est l'emblème parfait du pouvoir que tout Maître doit exercer contre le vice pour faire régner la religion et la vertu.");
        await this.parler('V.M.', "Je vous rends aussi votre chapeau. Qu'il soit sur votre front le symbole de l'esprit de justice, de tempérance et de prudence qui doit accompagner les Maîtres dans toutes leurs démarches. Désormais, vous en serez toujours couvert en loge, afin d'annoncer la supériorité que ce grade vous donne sur les Apprentis et les Compagnons. Lorsque vos travaux et votre attachement aux lois maçonniques vous auront élevé à quelque poste du gouvernement de l'Ordre, réunissez la douceur à la fermeté. Que votre autorité soit juste et fraternelle, et que votre soumission entière à la Règle et à vos chefs serve d'exemple à vos inférieurs.");
        await this.parler('V.M.', "Dans le grade d'Apprenti, l'Ordre vous enseigna que la justice devait être la première règle de vos actions. Dans celui de Compagnon, la tempérance vous fut recommandée pour vous aider à vaincre vos passions déréglées. Mais vous avez appris aujourd'hui que sans la prudence du Maître vous ne pouvez éviter les obstacles qui s'opposent à votre avancement dans la vertu.");
        await this.pause(P);

        await this.parler('V.M.', "Par le grade de Maître, vous avez acquis l'âge de sept ans, qui est le troisième nombre mystérieux et le plus parfait de la Franc-Maçonnerie. Ne le dégradez jamais en vous, mon Cher Frère. C'est le seul moyen de découvrir un jour sa véritable valeur.");
        await this.pause(P);

        // Signes, attouchements, mots
        await this.parler('V.M.', "Vous avez été relevé du tombeau par les signe, attouchement et mot de Maître. C'est par les mêmes moyens que vous devez vous faire reconnaître des Frères de ce grade. Je vais donc les répéter devant vous en y joignant les instructions nécessaires, afin que vous puissiez les retenir, et conserver ainsi le caractère que vous venez de recevoir.");
        this.action("Le V.M. enseigne le signe en trois temps : 1) Main droite en équerre sur la poitrine. 2) Main relevée horizontalement, pouce sur le creux de la poitrine — signe d'Ordre ordinaire. 3) Main droite en équerre renversée sur le front, pouce en bas, paume vers le ciel, tête détournée à droite et penchée sur l'épaule droite — signe d'horreur.");
        this.action("L'attouchement se fait pied droit contre pied droit, genou contre genou, poitrine contre poitrine, main droite dans main droite, doigts écartés, main gauche appuyée derrière l'épaule gauche. Le mot se donne dans cette position.");
        this.action("Hors de la loge, l'attouchement se réduit au quatrième temps : pouce passé entre pouce et index, saisissant le poignet avec les trois doigts du milieu courbés, entourant la partie inférieure de la main avec le petit doigt courbé.");
        await this.pause(P);

        await this.parler('V.M.', "Le mot du grade de Maître est MAC BENACH, qui signifie 'le corps est corrompu' ou 'la chair quitte les os'. Ce mot se donne en s'embrassant, la première syllabe à l'oreille droite et les deux dernières à l'oreille gauche. Mais il ne se donne jamais entier qu'en loge. Hors de la loge, on ne le donne que par les deux lettres M.B., l'un donne la première lettre et l'autre la seconde.");
        this.action("Le V.M. donne en effet les signe, attouchement et mot au récipiendaire.");
        await this.pause(P);

        await this.parler('V.M.', "Mon Cher Frère, votre nom de Maçon dans la loge en qualité de Maître sera désormais GABAON, qui signifie 'élevé'. Le mot de reconnaissance sera SHIBOLETH. Ce dernier vous servira pour vous procurer l'entrée des loges régulières. Mais n'en faites usage qu'avec prudence et circonspection, ainsi que de tous les autres mots et signes qui vous ont été enseignés, et prenez garde de ne pas vous laisser surprendre par de faux frères.");
        this.action("Le V.M. donne le baiser fraternel en trois temps : joue droite, joue gauche, joue droite.");
        await this.pause(P);

        // Planche à tracer
        await this.parler('V.M.', "Mon Frère, l'âge que vous venez d'acquérir vous donne le droit de travailler sur la planche à tracer. C'est là que vous devez étudier les plans les plus convenables pour la perfection de l'ouvrage et pour la direction des ouvriers. Allez-vous présenter au Frère Premier Surveillant, il vous fera essayer ce nouveau travail par la batterie de votre grade.");

        // Candidat vers le 1°S.
        await this.processer('pion-candidat', D, WP[1], this.POSITIONS["pion-1surv"]);
        await this.frapper('1°S.', 'OO-O');
        await this.frapper('1°S.', 'OO-O');
        await this.frapper('1°S.', 'OO-O');
        await this.frapper('Cand.', 'OO-O');
        await this.frapper('Cand.', 'OO-O');
        await this.frapper('Cand.', 'OO-O');
        await this.pause(P);

        // MdC ramène le candidat entre les Surveillants
        await this.processer('pion-candidat', D, WP[1]);
        await this.parler('M.d.C', "Vénérable Maître, le Frère nouveau Maître a commencé son travail sur la planche à tracer.");
        await this.parler('V.M.', "Faites-le reconnaître par les officiers de la loge et par ceux qui ont dirigé son travail. Vous le présenterez ensuite aux respectables Frères qui sont à l'Orient, afin qu'il reçoive d'eux le baiser fraternel.");
        this.action("Le MdC présente le nouveau Maître aux Officiers, à l'ex-Maître, au Frère Préparateur et au Frère Introducteur qui le reconnaissent par les signes, attouchements et mots du grade, et par le baiser fraternel.");
        // L'Introducteur s'avance pour la reconnaissance
        await animerVers("pion-maitre1", WP[5].x + 60, WP[5].y, D);
        await this.pause(P * 2);
        // L'Introducteur retourne à sa place
        animerVers("pion-maitre1", this.POSITIONS["pion-maitre1"].x, this.POSITIONS["pion-maitre1"].y, D);

        await this.parler('V.M.', "Vous connaissez, mon Frère, les obligations des Maçons envers les indigents. Vous devez aujourd'hui une offrande particulière en leur faveur. Allez-vous présenter au Frère Éléemosynaire, pour mettre dans le tronc des aumônes ce que vous jugerez à propos.");
        this.action("Le nouveau Maître fait son offrande.");
        await this.pause(P);

        await this.parler('V.M.', "Allez maintenant vous placer entre les deux Surveillants, pour y entendre les instructions et explications de votre nouveau grade. Elles méritent toute votre attention.");
        this.action("Le MdC fait asseoir le nouveau Maître au bas du tableau et se place à ses côtés pour lui montrer les emblèmes.");

        // Candidat rejoint la colonne du Nord côté Maîtres
        await this.processer('pion-candidat', D, WP[3], { x: 200, y: 500 });
        await this.pause(P);

        // Tronc des aumônes (tour complet avec l'Éléemosynaire)
        this.action("L'Éléemosynaire présente le tronc des aumônes à tous les Frères. Le secrétaire note le produit sur le protocole.");
        await this.pause(P);

        await this.parler('V.M.', "Frères Surveillants, informez-vous chacun sur votre colonne si les Frères n'ont rien à proposer pour le bien de l'Ordre en général, ou pour cette loge en particulier.");
        await this.parler('1°S.', "Mes Frères, de la part du Vénérable Maître, n'avez-vous rien à proposer pour le bien de l'Ordre en général, ou pour cette loge en particulier ?");
        await this.parler('2°S.', "Mes Frères, de la part du Vénérable Maître, n'avez-vous rien à proposer pour le bien de l'Ordre en général, ou pour cette loge en particulier ?");
        await this.pause(P);

        await this.parler('V.M.', "Frère Secrétaire, lisez le protocole du jour.");
        this.action("Le Frère Secrétaire lit le protocole du jour.");
        await this.pause(P * 2);
    },

    // ── GRADE MAÎTRE ÉCOSSAIS ───────────────────────────────────────────────
    miseEnConformiteME: async function() {
        this._setEtape("Mise en conformité — M.É.");
        window._gradeEnLoge = 'me';
        this.action("Mise en conformité de la Loge de Maître Écossais.");
        miseEnConformite('me');
        // Masquer pions M/C/A, afficher pions MX
        ['pion-maitre1','pion-maitre2','pion-maitre3','pion-maitre4','pion-maitre5','pion-maitre6','pion-maitre7',
         'pion-comp1','pion-comp2','pion-comp3','pion-comp4','pion-comp5',
         'pion-appr1','pion-appr2','pion-appr3','pion-appr4','pion-appr5'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.setAttribute('visibility','hidden');
        });
        for (let i = 1; i <= 10; i++) {
            const el = document.getElementById(`pion-mx${i}`);
            if (el) el.setAttribute('visibility','visible');
        }
        const pm = document.getElementById('pion-m');
        if (pm) pm.setAttribute('visibility','visible');
        await this.pause(this.PAUSE_ACTION);
    },

    ouvertureME: async function() {
        this._setEtape("Ouverture — Loge de Maître Écossais");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Entrée du Député Maître précédé du MdC et des Surveillants
        this.action("Le Maître des Cérémonies se rend auprès du Député Maître.");
        await this.parler('M.d.C', "Respectable Député Maître, la Loge assemblée vous attend pour commencer ses travaux.");
        await this.pause(P);
        this.action("Le Maître des Cérémonies ouvre la porte de la Loge.");
        await this.parler('M.d.C', "Debout, mes Frères, voici le Respectable Député Maître !");
        this.action("Le Député Maître, précédé du MdC et des Surveillants, immédiatement précédé du chandelier à trois branches, entre en Loge et gagne sa place. Il se découvre, salue les Frères d'une inclination face à l'Occident. Les Frères lui rendent ce salut. Il se recouvre.");
        await this.pause(P);

        // Coup + à l'ordre + signe
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "À l'ordre, mes Frères.");
        this.action("Le Député Maître pose son épée étendue sur le livre de l'Évangile. Tous les Frères tirent leur épée, la tiennent de la main gauche pointe contre terre. De la main droite ils se mettent au signe du grade : main droite en équerre au-dessus des yeux, pouce allongé vers l'oreille droite, comme pour se garantir de l'éclat d'une grande lumière.");
        await this.pause(P);

        await this.parler('D.M.', "Mes Frères ! Que la lumière la plus pure éclaire nos travaux !");
        this.action("Le Député Maître prend une bougie du chandelier à trois branches et allume en silence les quatre flambeaux autour du tapis, partant par le Nord et revenant par le Midi. Les deux Surveillants vont allumer leurs bougies aux flambeaux d'Occident.");
        await this.pause(P);

        // Questions des Surveillants
        await this.parler('D.M.', "Frères Surveillants, quel est le devoir des Surveillants ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est le devoir des Surveillants ?");
        await this.parler('2°S.', "C'est de veiller à la sûreté des Frères, afin que leurs travaux ne soient pas troublés.");
        await this.parler('1°S.', "Respectable Député Maître, c'est de veiller à la sûreté des Frères, afin que leurs travaux ne soient pas troublés.");
        await this.parler('D.M.', "Veillez-y donc, Frère Premier Surveillant, et invitez le Frère Second Surveillant à s'assurer que nos travaux sont en sûreté.");
        await this.parler('1°S.', "Frère Second Surveillant, veillez-y donc de même et assurez-vous que nos travaux sont en sûreté.");
        this.action("Le Second Surveillant place des gardes et revient à sa place.");
        await this.parler('2°S.', "Frère Premier Surveillant, les profanes sont écartés ; les Frères sont en sûreté et leurs travaux à l'abri de toute surprise.");
        await this.parler('1°S.', "Respectable Député Maître, les profanes sont écartés ; les Frères sont en sûreté et leurs travaux à l'abri de toute surprise.");
        await this.pause(P);

        // Heure
        await this.parler('D.M.', "Frères Surveillants, quelle heure est-il ?");
        await this.parler('1°S.', "Frère Second Surveillant, quelle heure est-il ?");
        await this.parler('2°S.', "Le point du jour, Frère Premier Surveillant.");
        await this.parler('1°S.', "Le point du jour, Respectable Député Maître.");
        await this.parler('D.M.', "Il est donc temps de nous mettre à l'ouvrage ; mais auparavant, invoquons le secours de l'Être Suprême afin qu'il daigne protéger nos travaux.");
        await this.pause(P);

        // Prière d'ouverture
        this.action("Le Député Maître se découvre, prend son épée de la main gauche, pointe haute, et fait la prière d'ouverture.");
        await this.parler('D.M.', "Grand Architecte de l'Univers, Être Éternel et Infini, qui es la Justice, la Bonté et la Vérité mêmes ! Ô Toi qui, par Ta Parole toute-puissante et invincible, as donné l'être à tout ce qui existe ; reçois l'hommage que les Frères réunis ici en Ta Présence, T'offrent pour eux-mêmes et pour tous les autres hommes. Bénis et dirige Toi-même les travaux de l'Ordre et les nôtres en particulier ; daigne accorder à notre zèle un succès heureux, afin que le Temple que nous avons entrepris de reconstruire pour Ta Gloire, étant fondé sur la Sagesse, décoré par la Beauté et soutenu par la Force, qui viennent de Toi, soit un séjour de paix et d'union fraternelle, un asile pour la vertu, un rempart impénétrable au vice et le sanctuaire de la Vérité ; enfin pour que nous puissions tous y trouver le vrai bonheur, dont Tu es l'unique source, comme Tu en es le terme, à jamais. Amen.");
        this.action("Tous se recouvrent.");
        await this.pause(P);

        // Annonce ouverture
        await this.parler('D.M.', "Frères Surveillants, avertissez les Frères, sur les deux colonnes, que je vais ouvrir la Loge Écossaise !");
        await this.parler('1°S.', "Mes Frères, je vous avertis de la part du Respectable Député Maître qu'il va ouvrir la Loge Écossaise.");
        await this.parler('2°S.', "Mes Frères, je vous avertis de la part du Respectable Député Maître qu'il va ouvrir la Loge Écossaise.");
        await this.pause(P);

        // Ouverture — batterie OO-O-O
        await this.parler('D.M.', "Au nom du Grand Architecte de l'Univers, au nom de l'Ordre, au nom des Supérieurs des Loges réunies et rectifiées, et par le pouvoir que j'ai reçu du Directoire Écossais National, j'ouvre la Loge des Maîtres Écossais de Saint-André.");
        await this.frapper('D.M.', 'OO-O-O');
        await this.frapper('1°S.', 'OO-O-O');
        await this.parler('1°S.', "Mes Frères, la Loge des Maîtres Écossais de Saint-André est ouverte.");
        await this.frapper('2°S.', 'OO-O-O');
        await this.parler('2°S.', "Mes Frères, la Loge de Maîtres Écossais de Saint-André est ouverte.");
        await this.pause(P);

        this.action("Le Député Maître repose son épée sur l'Évangile et s'assoit.");
        await this.parler('D.M.', "Mes Frères, prenez séance.");
        await this.pause(P);

        // Questions sur le motif
        await this.parler('D.M.', "Frère Premier Surveillant, quel est le motif qui nous rassemble ?");
        await this.parler('1°S.', "Frère Second Surveillant, quel est le motif qui nous rassemble ?");
        await this.parler('2°S.', "C'est le désir de travailler à l'ouvrage commencé et de le conduire à sa perfection par la pratique des vertus dont elle dépend, et en augmentant le nombre des ouvriers, lorsqu'il s'en présente qui sont dignes de coopérer à un si noble dessein.");
        await this.parler('1°S.', "Respectable Député Maître, c'est le désir de travailler à l'ouvrage commencé et de le conduire à sa perfection par la pratique des vertus dont elle dépend, et en augmentant le nombre des ouvriers, lorsqu'il s'en présente qui sont dignes de coopérer à un si noble dessein.");
        await this.pause(P);

        // Annonce de la réception
        await this.parler('D.M.', "Mes Frères, le Frère N..., Maître Franc-Maçon, se présente pour recevoir la récompense de ses travaux avec le consentement de l'autorité supérieure. Il a travaillé sur la planche à tracer et a préparé les plans pour coopérer avec nous à la réédification du Temple. Vous avez donné votre consentement pour sa réception, y persistez-vous ?");
        this.action("Tous les Frères gardent le silence — consentement tacite. Le Député Maître fait vérifier le consentement du Directoire Écossais Provincial.");
        await this.pause(P);

        await this.parler('D.M.', "Frère N..., avez-vous, comme parrain, conduit le candidat dans la chambre de réflexion, et persistez-vous à nous prier de l'admettre dans notre sein ?");
        this.action("Le Frère parrain fait son rapport.");
        await this.parler('D.M.', "Frère préparateur, qui avez été chargé de l'examen du candidat, vous êtes-vous acquitté de cette importante fonction, et pouvez-vous nous faire connaître ses dispositions actuelles ?");
        this.action("Le Frère préparateur fait son rapport.");
        await this.pause(P);

        await this.parler('D.M.', "Mes Frères, vous avez déjà donné votre consentement à la réception du Frère N..., y persistez-vous après ce que vous venez d'entendre ?");
        await this.frapper('D.M.', 'O');
        this.action("Consentement donné.");
        await this.pause(P);

        await this.parler('D.M.', "Frère Maître des Cérémonies, rendez-vous, accompagné du Frère Parrain, auprès du candidat, pour achever sa préparation suivant les lois de l'Ordre. Ensuite vous le présenterez à la Loge.");
        this.action("Le MdC et le Frère Parrain s'inclinent à l'Orient et se rendent dans la Chambre de Préparation.");
    },

    clotureME: async function() {
        this._setEtape("Clôture — Loge de Maître Écossais");
        const P = this.PAUSE_ACTION;

        // Tour des colonnes
        await this.parler('D.M.', "Frères Surveillants, informez-vous, chacun sur votre colonne, si quelque Frère a quelque chose à proposer pour le bien de l'Ordre en général ou pour cette Loge de Maîtres Écossais de Saint-André en particulier.");
        await this.parler('1°S.', "Frères, qui êtes sur la colonne du Midi ! Avez-vous quelque chose à proposer pour le bien de l'Ordre en général ou pour cette Loge de Maîtres Écossais de Saint-André en particulier ?");
        await this.parler('2°S.', "Frères, qui êtes sur la colonne du Nord ! Avez-vous quelque chose à proposer pour le bien de l'Ordre en général ou pour cette Loge de Maîtres Écossais de Saint-André en particulier ?");
        await this.pause(P);

        await this.parler('2°S.', "Frère Premier Surveillant ! Tout est fini sur la colonne du Nord.");
        await this.parler('1°S.', "Respectable Député Maître ! Tout est fini sur les deux colonnes.");
        await this.pause(P);

        // Aumônes + heure
        await this.parler('D.M.', "Mes Frères, puisque tout est fini sur les deux colonnes et que votre travail de ce jour est achevé, vous recevrez la récompense qui vous est due. Frère Éléemosynaire, veuillez présenter le tronc des aumônes à tous les Frères.");
        this.action("Circulation du tronc des aumônes.");
        await this.pause(P);

        await this.parler('D.M.', "Frères Surveillants, quelle heure est-il ?");
        await this.parler('1°S.', "Frère Second Surveillant, quelle heure est-il ?");
        await this.parler('2°S.', "La fin du jour, Frère Premier Surveillant.");
        await this.parler('1°S.', "La fin du jour, Respectable Député Maître.");
        await this.parler('D.M.', "Est-il donc temps de terminer nos travaux ?");
        await this.parler('1°S.', "Frère Second Surveillant, est-il donc temps de terminer nos travaux ?");
        await this.parler('2°S.', "Oui, Frère Premier Surveillant. Le Temple est réédifié et les ouvriers ont besoin de repos.");
        await this.parler('1°S.', "Oui, Respectable Député Maître, le Temple est réédifié et les ouvriers ont besoin de repos.");
        await this.pause(P);

        // Chaîne d'union + prière de clôture
        await this.frapper('D.M.', 'O');
        this.action("Le Député Maître se lève ainsi que tous les Frères. Ils portent la main droite au signe du grade et tiennent de la main gauche leur épée pointe haute.");
        await this.parler('D.M.', "À l'ordre, mes Frères !");
        await this.pause(P);

        await this.parler('D.M.', "Mes Frères, rendons grâce à l'Être Suprême des faveurs signalées qu'il nous a accordées. Efforçons-nous, chaque jour, de mériter de plus en plus sa protection. Avant de nous séparer, formons la chaîne d'union fraternelle et, tous ensemble, rendons hommage au Grand Architecte de l'Univers, qui préside à nos travaux. Unissez-vous à moi.");
        this.action("Le Député Maître pose son épée sur l'Évangile, se dégante, se découvre et descend à l'Orient du tapis pour former la chaîne d'union.");

        // Chaîne d'union — même séquence que l'Apprenti
        await this.pause(P);

        // Prière de clôture
        await this.parler('D.M.', "Architecte Suprême de l'Univers ! Source unique de tout bien et de toute perfection ! Ô Toi qui as toujours voulu et opéré pour le bonheur de l'homme et de toutes Tes créatures ; nous Te rendons grâce de Tes bienfaits paternels et nous Te conjurons tous ensemble de les accorder sans cesse à chacun de nous, selon Tes vues et suivant ses besoins. Répands sur nous et sur tous nos Frères Ta céleste Lumière. Fortifie dans nos cœurs l'amour de la vérité et de tous nos devoirs, afin que nous les observions fidèlement. Puissent nos assemblées être toujours affermies dans leur union par le désir de Te plaire et de nous rendre utiles à nos semblables. Qu'elles soient à jamais le séjour de la paix et de la vertu, et que la chaîne d'une amitié parfaite et fraternelle soit désormais si forte entre nous, que rien ne puisse jamais l'altérer. Ainsi soit-il.");
        this.action("Le Député Maître regagne sa place, se recouvre, imité par tous les Frères, et reprend son épée.");
        await this.pause(P);

        // Annonce fermeture
        await this.parler('D.M.', "Frères Surveillants, avertissez les Frères que je vais fermer la Loge.");
        await this.parler('1°S.', "Mes Frères, je vous annonce de la part de notre Respectable Député Maître qu'il va fermer la Loge.");
        await this.parler('2°S.', "Mes Frères, je vous annonce de la part de notre Respectable Député Maître qu'il va fermer la Loge.");
        await this.pause(P);

        // Batterie de clôture OO-O-O
        await this.parler('D.M.', "Au nom du Grand Architecte de l'Univers, au nom de l'Ordre, au nom des Supérieurs des Loges réunies et rectifiées, et par le pouvoir que j'ai reçu du Directoire Écossais National, je ferme la Loge de Maîtres Écossais de Saint-André.");
        await this.frapper('D.M.', 'OO-O-O');
        await this.frapper('1°S.', 'OO-O-O');
        await this.parler('1°S.', "Mes Frères, la Loge des Maîtres Écossais de Saint-André est fermée.");
        await this.frapper('2°S.', 'OO-O-O');
        await this.parler('2°S.', "Mes Frères, la Loge des Maîtres Écossais de Saint André est fermée.");
        this.action("Le Député Maître rengaine son épée, imité par tous les Frères.");
        await this.pause(P);

        // Extinction des lumières
        await this.parler('D.M.', "Que la Lumière qui nous a éclairé dans nos travaux ne reste point exposée aux regards des profanes.");
        this.action("Le Député Maître va éteindre les bougies autour du tapis.");
        await this.parler('D.M.', "Mes Frères, lorsque pour perfectionner votre travail, vous chercherez la lumière qui vous est nécessaire, souvenez-vous qu'elle se tient à l'orient, et que c'est là seulement que vous pouvez la trouver.");
        this.action("Le Député Maître éteint les trois lumières du chandelier à trois branches.");
        await this.pause(P);

        // Applaudissements 4×4
        this.action("Le Député Maître et tous les Frères font les applaudissements ordinaires par quatre fois quatre coups, sans aucune acclamation.");
        await this.applaudissementsME();
        this.action("Les deux Surveillants éteignent les autres lumières d'ordre.");
        await this.pause(P);

        await this.parler('D.M.', "Je vous invite tous à un banquet frugal et fraternel. Venez-y goûter dans une société de Frères les charmes de l'égalité.");
        this.action("Le Député Maître salue les Frères comme à l'ouverture. Le MdC va chercher à l'Orient le Député Maître et les Dignitaires et les précède dans leur sortie.");

        // Retour en conformité
        miseEnConformite('apprenti');
    },

    applaudissementsME: function() {
        const self = this;
        return new Promise(resolve => {
            try {
                const ctx = self.getAudioCtx();
                const t0 = ctx.currentTime + 0.05;

                const jouerClap = (t) => {
                    const frames = Math.floor(ctx.sampleRate * 0.12);
                    const buf = ctx.createBuffer(1, frames, ctx.sampleRate);
                    const data = buf.getChannelData(0);
                    for (let i = 0; i < frames; i++) {
                        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.025));
                    }
                    const src = ctx.createBufferSource();
                    src.buffer = buf;
                    const bpf = ctx.createBiquadFilter();
                    bpf.type = 'bandpass';
                    bpf.frequency.value = 1400;
                    bpf.Q.value = 0.7;
                    const gain = ctx.createGain();
                    gain.gain.setValueAtTime(1.2, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
                    src.connect(bpf); bpf.connect(gain); gain.connect(ctx.destination);
                    src.start(t); src.stop(t + 0.2);
                };

                // 4 salves OO-O-O : rythme [0, 0.15, 0.4, 0.65], inter-salve 1.1s
                [0, 1.1, 2.2, 3.3].forEach(base => {
                    jouerClap(t0 + base);
                    jouerClap(t0 + base + 0.15);
                    jouerClap(t0 + base + 0.4);
                    jouerClap(t0 + base + 0.65);
                });
                self.action('[Tous] Applaudissements Maître Écossais OO-O-O × 4');
                // Durée totale : dernier clap à 3.95s + ring 0.2s + silence 0.5s ≈ 4.65s
                setTimeout(resolve, 4650);
            } catch(e) { resolve(); }
        });
    },

    catechismeMe: async function() {
        this._setEtape("Catéchisme de M.É.");
        const P = this.PAUSE_ACTION;
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Mes Frères, nous allons procéder à l'instruction par demandes et réponses du grade.");
        await this.pause(P);
        await this.parler('D.M.', "Etes-vous Maître Ecossais ?");
        await this.parler('1°S.', "Oui, je le suis, j'ai vu la gloire du Temple rétablie.");
        await this.pause(P);
        await this.parler('D.M.', "Comment me ferez-vous connaître que vous l'êtes ?");
        await this.parler('1°S.', "Par mon zèle et ma persévérance pour le bien de l'Ordre et de mes Frères.");
        await this.pause(P);
        await this.parler('D.M.', "Où avez-vous été reçu ?");
        await this.parler('1°S.', "D'abord sur les ruines du premier Temple, et ensuite devant la porte du Sanctuaire.");
        await this.pause(P);
        await this.parler('D.M.', "Comment êtes-vous entré dans ce lieu ?");
        await this.parler('1°S.', "Plongé dans la douleur et avec toutes les marques de la servitude.");
        await this.pause(P);
        await this.parler('D.M.', "Etes-vous resté longtemps en cet état ?");
        await this.parler('1°S.', "Non, parce que j'ai appris que la réédification du Temple était commencée. On m'a fait la grâce de m'admettre parmi les ouvriers, et j'ai eu le bonheur de concourir à la perfection de l'ouvrage.");
        await this.pause(P);
        await this.parler('D.M.', "Quel a été le résultat de votre travail ?");
        await this.parler('1°S.', "Il m'a procuré les signes de l'ancienne splendeur du Temple.");
        await this.pause(P);
        await this.parler('D.M.', "Quels sont ces signes ?");
        await this.parler('1°S.', "Le Mot sacré des Maîtres retrouvé, ainsi que le feu sacré du Temple qui avait été caché lors de sa destruction, et une étoile flamboyante à six pointes.");
        await this.pause(P);
        await this.parler('D.M.', "Que représente cette étoile ?");
        await this.parler('1°S.', "Un double triangle, entouré d'une circonférence, ayant au centre, sur un fond de couleur rouge, la lettre initiale du mot du grade, au milieu des quatre instruments maçonniques.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le mot du grade de Maître Ecossais ?");
        await this.parler('1°S.', "Hiram, qui est le père et le modèle des Maçons et surtout des Maîtres Ecossais.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi Hiram est-il le mot des Maîtres Ecossais ?");
        await this.parler('1°S.', "Pour leur rappeler sans cesse la fermeté, la discrétion et toutes les vertus dont il a donné l'exemple.");
        await this.pause(P);
        await this.parler('D.M.', "Comment s'appelle un Maître Ecossais ?");
        await this.parler('1°S.', "Notuma.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifie ce nom ?");
        await this.parler('1°S.', "J'ignore encore son application ; mais je sais qu'il rappelle, sous le voile de l'anagramme, l'un des principaux conservateurs des Rites Ecossais.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi, lorsque vous avez demandé l'entrée de la Loge Ecossaise, avez-vous dit que vous veniez des îles de l'Ecosse ?");
        await this.parler('1°S.', "Parce que c'est en effet dans cette contrée que les Maçons, persécutés dans quelques autres, ont trouvé longtemps un asile où ils ont médité paisiblement les principes et les rites fondamentaux de l'institution maçonnique, avant de se répandre en France, en Angleterre et d'autres pays européens.");
        await this.pause(P);
        await this.parler('D.M.', "Qu'avez-vous vu dans la Loge ?");
        await this.parler('1°S.', "D'abord les ruines du Temple détruit par les Assyriens, et je l'ai vu ensuite rebâti par Zorobabel.");
        await this.pause(P);
        await this.parler('D.M.', "Comment avez-vous coopéré à sa reconstruction ?");
        await this.parler('1°S.', "Armé de l'épée d'une main pour me défendre, et de l'autre main d'une truelle pour réédifier.");
        await this.pause(P);
        await this.parler('D.M.', "Comment êtes-vous parvenu au Sanctuaire ?");
        await this.parler('1°S.', "Par quatre pas sur les quatre portes du Temple.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifient ces quatre pas ?");
        await this.parler('1°S.', "L'universalité de l'Ordre des Maçons répandus dans les quatre parties du monde, désignées par les quatre portes du Temple, et par les quatre flambeaux qui en éclairent les extrémités.");
        await this.pause(P);
        await this.parler('D.M.', "Comment l'autel d'Orient est-il éclairé ?");
        await this.parler('1°S.', "Par trois lumières qui sont toujours les mêmes dans tous les grades.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi ce nombre est-il invariable ?");
        await this.parler('1°S.', "Parce que le Député Maître est pour la Loge comme le Grand Architecte pour l'univers, qu'il gouverne par sa pensée, par sa volonté et par son action, qui sont désignées dans la Loge par le Respectable Député Maître et les deux Surveillants.");
        await this.pause(P);
        await this.parler('D.M.', "D'où partait cette grande lumière que vous avez vue ?");
        await this.parler('1°S.', "D'une lame d'or triangulaire que j'ai retrouvée, sur laquelle était gravé le Saint Nom de Dieu qui jetait un grand éclat, et d'un double triangle lumineux formant une étoile flamboyante à six pointes qui m'a été montrée à l'Orient.");
        await this.pause(P);
        await this.parler('D.M.', "Que représente ce double triangle lumineux ?");
        await this.parler('1°S.', "Il exprime la double nature de Celui qui est la vraie Lumière du monde, et de l'homme qui est son image, et le cercle qui l'entoure est l'emblème de son éternité.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi le portez-vous sur votre poitrine, suspendu par un cordon ?");
        await this.parler('1°S.', "J'en ai été décoré pour me rappeler que j'ai été reçu dans l'Ordre comme chrétien, et que celui qui ne conforme pas sa conduite et ses discours à sa croyance, est l'être le plus inconséquent.");
        await this.pause(P);
        await this.parler('D.M.', "Combien avez-vous vu de tableaux sur le parquet dans votre réception ?");
        await this.parler('1°S.', "J'en ai vu quatre.");
        await this.pause(P);
        await this.parler('D.M.', "Pourriez-vous me les expliquer ?");
        await this.parler('1°S.', "Je crois que je pourrai le faire.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le premier.");
        await this.parler('1°S.', "Le premier, ne présentant que des ruines du temple détruit, désigne la décadence de l'Ordre, trop souvent avili par des coups que lui ont portés de faux Frères ; mais ses fondements conservés annoncent qu'ils n'ont pu le détruire parce qu'il est fondé sur des bases fermes et invariables.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le second.");
        await this.parler('1°S.', "Le second, représentant le Temple et le Sanctuaire rétablis, désigne la renaissance de l'Ordre, ramené à ses lois primitives et purgé des faux Frères qui le déshonoraient.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le troisième.");
        await this.parler('1°S.', "Celui-ci, représentant notre Respectable Maître Hiram sortant glorieusement du tombeau, entouré des vertus qui lui procurent la couronne de l'immortalité, rappelle le juste triomphant des persécutions, et l'état auquel doivent aspirer tous les imitateurs de son courage et de ses vertus.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le quatrième.");
        await this.parler('1°S.', "Ce dernier représente l'enceinte de la Nouvelle Jérusalem céleste, décrite par saint Jean l'Evangéliste, second patron de l'Ordre des Maçons, et l'Agneau immolé et triomphant, arborant l'étendard de sa victoire sur le sommet de la Nouvelle Sion.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le but de ce dernier tableau ?");
        await this.parler('1°S.', "C'est d'établir aux yeux des Maçons, dans ce grade, les rapports qui unissent l'Ancienne Loi, figurée par le temple de Salomon, avec la Nouvelle Loi du christianisme sous laquelle nous vivons, et le passage de l'une à l'autre.");
        await this.pause(P);
        await this.parler('D.M.', "N'avez-vous rien vu de plus sur ce tableau ?");
        await this.parler('1°S.', "J'y ai vu, dans la partie inférieure, saint André, étendu sur l'instrument de son martyre et entouré des signes emblématiques des trois vertus principales du chrétien.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi saint André est-il figuré sur ce tableau ?");
        await this.parler('1°S.', "Parce qu'étant alors disciple de saint Jean Baptiste, prophète de l'Ancienne Loi qui annonçait la Nouvelle, il quitta son premier Maître pour suivre désormais Jésus-Christ, et figura ainsi le passage de l'Ancienne Loi à la Nouvelle. C'est pourquoi les Maîtres Ecossais l'ont adopté pour leur patron particulier.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi les Maçons du quatrième grade sont-ils dénommés Maîtres Ecossais ?");
        await this.parler('1°S.', "Parce que c'est dans une partie déserte d'Ecosse qu'ont été conservés, et de là répandus ailleurs, les rites Ecossais.");
        await this.pause(P);
        await this.parler('D.M.', "Quelle est la vertu particulière du quatrième grade ?");
        await this.parler('1°S.', "C'est la Force. Cette force de volonté sans laquelle le Maçon manque souvent du courage nécessaire pour pratiquer constamment les trois autres vertus.");
        await this.pause(P);
        await this.parler('D.M.', "Quelles sont donc les vertus spécialement enseignées et recommandées aux Maçons ?");
        await this.parler('1°S.', "La Justice dont le Maçon ne doit jamais s'écarter ; la Tempérance dans ses pensées, ses paroles et ses actions ; la Prudence qui doit le diriger dans toutes ses actions ; et la Force qui lui aide à les pratiquer.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le symbole et la devise de Maître Ecossais ?");
        await this.parler('1°S.', "Un lion, sous un ciel orageux, abrité sous un rocher, jouant tranquillement avec des instruments de mathématiques. Et ces deux mots pour devise : MELIORA PRAESUMO.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifient ce symbole et cette devise ?");
        await this.parler('1°S.', "On m'a invité à les méditer, sans me les expliquer encore ni l'un, ni l'autre.");
        await this.pause(P);
        await this.parler('D.M.', "Quel âge avez-vous comme Maître Ecossais ?");
        await this.parler('1°S.', "J'ai seize ans, ou quatre fois quatre ans, figurés par les seize lumières qui éclairent les quatre parties de la Loge.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi dans chaque grade y a-t-il toujours un nombre fixé et déterminé de lumières pour l'illumination d'Ordre ?");
        await this.parler('1°S.', "Parce que les nombres employés dans ces grades ont une valeur intellectuelle désignative de choses qui restent encore voilées.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifient les vingt-cinq lumières, déterminées par l'illumination d'Ordre de la Loge Ecossaise ?");
        await this.parler('1°S.', "Le nombre de Vingt-cinq caractérise ici l'action spirituelle qui préside invisiblement les travaux maçonniques, lorsqu'ils sont réguliers et bien dirigés, ainsi que nous l'avons demandé dans la prière d'ouverture.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le signe des Maîtres Ecossais ?");
        await this.parler('1°S.', "(On le donne comme il est décrit dans le rituel).");
        await this.pause(P);
        await this.parler('D.M.', "Quel est leur attouchement ?");
        await this.parler('1°S.', "(On le donne de même).");
        await this.pause(P);
        await this.parler('D.M.', "Quelle heure est-il ?");
        await this.parler('1°S.', "L'heure de cesser le travail, l'ouvrage étant accompli.");
        await this.pause(P);
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "L'instruction par demandes et réponses est terminée.");
    },

    // ── Catéchisme ME — Section 1 ────────────────────────────────────────────
    catechismeMeSection1: async function() {
        this._setEtape("Catéchisme M.É. — Sect. I");
        const P = this.PAUSE_ACTION;
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Mes Frères, nous allons procéder à la première section de l'instruction par demandes et réponses.");
        await this.pause(P);
        await this.parler('D.M.', "Etes-vous Maître Ecossais ?");
        await this.parler('1°S.', "Oui, je le suis, j'ai vu la gloire du Temple rétablie.");
        await this.pause(P);
        await this.parler('D.M.', "Comment me ferez-vous connaître que vous l'êtes ?");
        await this.parler('1°S.', "Par mon zèle et ma persévérance pour le bien de l'Ordre et de mes Frères.");
        await this.pause(P);
        await this.parler('D.M.', "Où avez-vous été reçu ?");
        await this.parler('1°S.', "D'abord sur les ruines du premier Temple, et ensuite devant la porte du Sanctuaire.");
        await this.pause(P);
        await this.parler('D.M.', "Comment êtes-vous entré dans ce lieu ?");
        await this.parler('1°S.', "Plongé dans la douleur et avec toutes les marques de la servitude.");
        await this.pause(P);
        await this.parler('D.M.', "Etes-vous resté longtemps en cet état ?");
        await this.parler('1°S.', "Non, parce que j'ai appris que la réédification du Temple était commencée. On m'a fait la grâce de m'admettre parmi les ouvriers, et j'ai eu le bonheur de concourir à la perfection de l'ouvrage.");
        await this.pause(P);
        await this.parler('D.M.', "Quel a été le résultat de votre travail ?");
        await this.parler('1°S.', "Il m'a procuré les signes de l'ancienne splendeur du Temple.");
        await this.pause(P);
        await this.parler('D.M.', "Quels sont ces signes ?");
        await this.parler('1°S.', "Le Mot sacré des Maîtres retrouvé, ainsi que le feu sacré du Temple qui avait été caché lors de sa destruction, et une étoile flamboyante à six pointes.");
        await this.pause(P);
        await this.parler('D.M.', "Que représente cette étoile ?");
        await this.parler('1°S.', "Un double triangle, entouré d'une circonférence, ayant au centre, sur un fond de couleur rouge, la lettre initiale du mot du grade, au milieu des quatre instruments maçonniques.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le mot du grade de Maître Ecossais ?");
        await this.parler('1°S.', "Hiram, qui est le père et le modèle des Maçons et surtout des Maîtres Ecossais.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi Hiram est-il le mot des Maîtres Ecossais ?");
        await this.parler('1°S.', "Pour leur rappeler sans cesse la fermeté, la discrétion et toutes les vertus dont il a donné l'exemple.");
        await this.pause(P);
        await this.parler('D.M.', "Comment s'appelle un Maître Ecossais ?");
        await this.parler('1°S.', "Notuma.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifie ce nom ?");
        await this.parler('1°S.', "J'ignore encore son application ; mais je sais qu'il rappelle, sous le voile de l'anagramme, l'un des principaux conservateurs des Rites Ecossais.");
        await this.pause(P);
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Ainsi se termine la première section de l'instruction par demandes et réponses.");
    },

    // ── Catéchisme ME — Section 2 ────────────────────────────────────────────
    catechismeMeSection2: async function() {
        this._setEtape("Catéchisme M.É. — Sect. II");
        const P = this.PAUSE_ACTION;
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Mes Frères, nous allons procéder à la deuxième section de l'instruction par demandes et réponses.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi, lorsque vous avez demandé l'entrée de la Loge Ecossaise, avez-vous dit que vous veniez des îles de l'Ecosse ?");
        await this.parler('1°S.', "Parce que c'est en effet dans cette contrée que les Maçons, persécutés dans quelques autres, ont trouvé longtemps un asile où ils ont médité paisiblement les principes et les rites fondamentaux de l'institution maçonnique, avant de se répandre en France, en Angleterre et d'autres pays européens.");
        await this.pause(P);
        await this.parler('D.M.', "Qu'avez-vous vu dans la Loge ?");
        await this.parler('1°S.', "D'abord les ruines du Temple détruit par les Assyriens, et je l'ai vu ensuite rebâti par Zorobabel.");
        await this.pause(P);
        await this.parler('D.M.', "Comment avez-vous coopéré à sa reconstruction ?");
        await this.parler('1°S.', "Armé de l'épée d'une main pour me défendre, et de l'autre main d'une truelle pour réédifier.");
        await this.pause(P);
        await this.parler('D.M.', "Comment êtes-vous parvenu au Sanctuaire ?");
        await this.parler('1°S.', "Par quatre pas sur les quatre portes du Temple.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifient ces quatre pas ?");
        await this.parler('1°S.', "L'universalité de l'Ordre des Maçons répandus dans les quatre parties du monde, désignées par les quatre portes du Temple, et par les quatre flambeaux qui en éclairent les extrémités.");
        await this.pause(P);
        await this.parler('D.M.', "Comment l'autel d'Orient est-il éclairé ?");
        await this.parler('1°S.', "Par trois lumières qui sont toujours les mêmes dans tous les grades.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi ce nombre est-il invariable ?");
        await this.parler('1°S.', "Parce que le Député Maître est pour la Loge comme le Grand Architecte pour l'univers, qu'il gouverne par sa pensée, par sa volonté et par son action, qui sont désignées dans la Loge par le Respectable Député Maître et les deux Surveillants.");
        await this.pause(P);
        await this.parler('D.M.', "D'où partait cette grande lumière que vous avez vue ?");
        await this.parler('1°S.', "D'une lame d'or triangulaire que j'ai retrouvée, sur laquelle était gravé le Saint Nom de Dieu qui jetait un grand éclat, et d'un double triangle lumineux formant une étoile flamboyante à six pointes qui m'a été montrée à l'Orient.");
        await this.pause(P);
        await this.parler('D.M.', "Que représente ce double triangle lumineux ?");
        await this.parler('1°S.', "Il exprime la double nature de Celui qui est la vraie Lumière du monde, et de l'homme qui est son image, et le cercle qui l'entoure est l'emblème de son éternité.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi le portez-vous sur votre poitrine, suspendu par un cordon ?");
        await this.parler('1°S.', "J'en ai été décoré pour me rappeler que j'ai été reçu dans l'Ordre comme chrétien, et que celui qui ne conforme pas sa conduite et ses discours à sa croyance, est l'être le plus inconséquent.");
        await this.pause(P);
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Ainsi se termine la deuxième section de l'instruction par demandes et réponses.");
    },

    // ── Catéchisme ME — Section 3 ────────────────────────────────────────────
    catechismeMeSection3: async function() {
        this._setEtape("Catéchisme M.É. — Sect. III");
        const P = this.PAUSE_ACTION;
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Mes Frères, nous allons procéder à la troisième section de l'instruction par demandes et réponses.");
        await this.pause(P);
        await this.parler('D.M.', "Combien avez-vous vu de tableaux sur le parquet dans votre réception ?");
        await this.parler('1°S.', "J'en ai vu quatre.");
        await this.pause(P);
        await this.parler('D.M.', "Pourriez-vous me les expliquer ?");
        await this.parler('1°S.', "Je crois que je pourrai le faire.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le premier.");
        await this.parler('1°S.', "Le premier, ne présentant que des ruines du temple détruit, désigne la décadence de l'Ordre, trop souvent avili par des coups que lui ont portés de faux Frères ; mais ses fondements conservés annoncent qu'ils n'ont pu le détruire parce qu'il est fondé sur des bases fermes et invariables.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le second.");
        await this.parler('1°S.', "Le second, représentant le Temple et le Sanctuaire rétablis, désigne la renaissance de l'Ordre, ramené à ses lois primitives et purgé des faux Frères qui le déshonoraient.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le troisième.");
        await this.parler('1°S.', "Celui-ci, représentant notre Respectable Maître Hiram sortant glorieusement du tombeau, entouré des vertus qui lui procurent la couronne de l'immortalité, rappelle le juste triomphant des persécutions, et l'état auquel doivent aspirer tous les imitateurs de son courage et de ses vertus.");
        await this.pause(P);
        await this.parler('D.M.', "Expliquez-moi le quatrième.");
        await this.parler('1°S.', "Ce dernier représente l'enceinte de la Nouvelle Jérusalem céleste, décrite par saint Jean l'Evangéliste, second patron de l'Ordre des Maçons, et l'Agneau immolé et triomphant, arborant l'étendard de sa victoire sur le sommet de la Nouvelle Sion.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le but de ce dernier tableau ?");
        await this.parler('1°S.', "C'est d'établir aux yeux des Maçons, dans ce grade, les rapports qui unissent l'Ancienne Loi, figurée par le temple de Salomon, avec la Nouvelle Loi du christianisme sous laquelle nous vivons, et le passage de l'une à l'autre.");
        await this.pause(P);
        await this.parler('D.M.', "N'avez-vous rien vu de plus sur ce tableau ?");
        await this.parler('1°S.', "J'y ai vu, dans la partie inférieure, saint André, étendu sur l'instrument de son martyre et entouré des signes emblématiques des trois vertus principales du chrétien.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi saint André est-il figuré sur ce tableau ?");
        await this.parler('1°S.', "Parce qu'étant alors disciple de saint Jean Baptiste, prophète de l'Ancienne Loi qui annonçait la Nouvelle, il quitta son premier Maître pour suivre désormais Jésus-Christ, et figura ainsi le passage de l'Ancienne Loi à la Nouvelle. C'est pourquoi les Maîtres Ecossais l'ont adopté pour leur patron particulier.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi les Maçons du quatrième grade sont-ils dénommés Maîtres Ecossais ?");
        await this.parler('1°S.', "Parce que c'est dans une partie déserte d'Ecosse qu'ont été conservés, et de là répandus ailleurs, les rites Ecossais.");
        await this.pause(P);
        await this.parler('D.M.', "Quelle est la vertu particulière du quatrième grade ?");
        await this.parler('1°S.', "C'est la Force. Cette force de volonté sans laquelle le Maçon manque souvent du courage nécessaire pour pratiquer constamment les trois autres vertus.");
        await this.pause(P);
        await this.parler('D.M.', "Quelles sont donc les vertus spécialement enseignées et recommandées aux Maçons ?");
        await this.parler('1°S.', "La Justice dont le Maçon ne doit jamais s'écarter ; la Tempérance dans ses pensées, ses paroles et ses actions ; la Prudence qui doit le diriger dans toutes ses actions ; et la Force qui lui aide à les pratiquer.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le symbole et la devise de Maître Ecossais ?");
        await this.parler('1°S.', "Un lion, sous un ciel orageux, abrité sous un rocher, jouant tranquillement avec des instruments de mathématiques. Et ces deux mots pour devise : MELIORA PRAESUMO.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifient ce symbole et cette devise ?");
        await this.parler('1°S.', "On m'a invité à les méditer, sans me les expliquer encore ni l'un, ni l'autre.");
        await this.pause(P);
        await this.parler('D.M.', "Quel âge avez-vous comme Maître Ecossais ?");
        await this.parler('1°S.', "J'ai seize ans, ou quatre fois quatre ans, figurés par les seize lumières qui éclairent les quatre parties de la Loge.");
        await this.pause(P);
        await this.parler('D.M.', "Pourquoi dans chaque grade y a-t-il toujours un nombre fixé et déterminé de lumières pour l'illumination d'Ordre ?");
        await this.parler('1°S.', "Parce que les nombres employés dans ces grades ont une valeur intellectuelle désignative de choses qui restent encore voilées.");
        await this.pause(P);
        await this.parler('D.M.', "Que signifient les vingt-cinq lumières, déterminées par l'illumination d'Ordre de la Loge Ecossaise ?");
        await this.parler('1°S.', "Le nombre de Vingt-cinq caractérise ici l'action spirituelle qui préside invisiblement les travaux maçonniques, lorsqu'ils sont réguliers et bien dirigés, ainsi que nous l'avons demandé dans la prière d'ouverture.");
        await this.pause(P);
        await this.parler('D.M.', "Quel est le signe des Maîtres Ecossais ?");
        await this.parler('1°S.', "(On le donne comme il est décrit dans le rituel).");
        await this.pause(P);
        await this.parler('D.M.', "Quel est leur attouchement ?");
        await this.parler('1°S.', "(On le donne de même).");
        await this.pause(P);
        await this.parler('D.M.', "Quelle heure est-il ?");
        await this.parler('1°S.', "L'heure de cesser le travail, l'ouvrage étant accompli.");
        await this.pause(P);
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "L'instruction par demandes et réponses est terminée.");
    },

    instructionMoraleMe: async function() {
        this._setEtape("Instruction Morale — M.É.");
        const P = this.PAUSE_ACTION;
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Frère Orateur, la Loge vous demande de donner lecture de l'instruction finale du grade.");
        await this.pause(P);
        this.action("Instruction finale du grade de Maître Écossais.");
        await this.parler('D.M.', "Le Député Maître : Mon cher Frère,");
        await this.pause(300);
        await this.parler('D.M.', "Vous avez vivement désiré le grade que vous venez de recevoir, qui est le dernier de ceux auxquels vous aviez quelques droits de prétendre depuis votre admission dans l'Ordre maçonnique, puisque son existence vous avait été annoncée depuis longtemps, en vous invitant à travailler sans relâche à vous en rendre digne. L'objet de cette instruction est de vous en faire sentir toute l'importance.");
        await this.pause(300);
        await this.parler('D.M.', "D'après ce que vous avez vu dans les trois grades précédents, vous vous attendiez sans doute, dans celui-ci, à quelques nouvelles scènes, propres à réveiller votre attention et à faire naître en vous de nouvelles réflexions. Mais, quelque grande que soit votre pénétration, vous n'aviez pas pu présumer, ni le nombre, ni la diversité des objets qui viennent de vous être présentés. Ils méritent tous de votre part de profondes méditations.");
        await this.pause(300);
        await this.parler('D.M.', "Les trois premiers grades vous ont présenté, sous le voile des symboles, des emblèmes, des allégories, un tableau raccourci du passé, du présent et de l'avenir. A l'aide des avis, des conseils et des maximes que vous avez reçus, vous avez pu apercevoir, sans de grands efforts, que l'homme moral et intellectuel en est le principal ou, pour mieux dire, l'unique objet. Assujetti pour un temps, par l'effet nécessaire de sa dégradation originelle, à l'enveloppe matérielle dont il sent tout le poids, exposé au choc des éléments qui actionnent violemment sur sa nature physique et à toutes les influences qui provoquent sans cesse ses passions et font éclore en lui tant de vices, il a besoin qu'on lui rappelle quels dangers, quels secours l'environnent, quelles sont les causes des souffrances auxquelles il est journellement en proie, et quelles espérances lui donne la noblesse de son origine.");
        await this.pause(300);
        await this.parler('D.M.', "La Franc-Maçonnerie bien méditée vous présente toutes ces utiles instructions. Elle vous rappelle sans cesse et par toutes sortes de moyens, à votre propre nature essentielle. Elle cherche constamment à saisir les occasions de vous faire connaître l'origine de l'homme, sa destination primitive, sa chute, les maux qui en sont la suite, et les ressources que lui a ménagées la bonté divine pour en triompher.");
        await this.pause(300);
        await this.parler('D.M.', "Explication des trois premiers grades");
        await this.pause(300);
        await this.parler('D.M.', "Jetons un coup d'œil rapide sur les principales circonstances de vos grades précédents, et vous resterez convaincu des grandes vérités qu'ils vous ont retracées.");
        await this.pause(300);
        await this.parler('D.M.', "Dans le premier grade d'apprenti, après avoir subi l'épreuve des éléments matériels, figuratifs de ceux dans lesquels l'homme actuel est incorporisé, vous avez bientôt reconnu que vous étiez tombé sous le fléau de l'inexorable Justice. Mais on vous exhorta à réclamer la Clémence qui en tempère les rigueurs ; et, pour en assurer sur vous les effets salutaires, on vous fit sentir la nécessité d'en user vous-même envers vos semblables.");
        await this.pause(300);
        await this.parler('D.M.', "Dans cet état d'obscurité, d'ignorance et d'imperfection, on vous montra la pierre brute comme l'emblème le plus vrai de vous-même. On vous fit sentir la nécessité de travailler sans relâche à la dégrossir, à la polir, et à recommencer souvent ce travail dur et difficile, si vous vouliez un jour en recueillir le prix. Et on ne vous dissimula pas que cette tâche vous est imposée pour toute la durée de votre vie.");
        await this.pause(300);
        await this.parler('D.M.', "Dans le second grade, entaché des mêmes imperfections, vous vous montriez plein d'une folle présomption ; vous vous applaudissiez des petits succès de vos premiers efforts, comme s'ils eussent été considérables. Pour vous désabuser, on vous présenta devant l'emblème important des compagnons, pour y apprendre à vous connaître vraiment tel que vous êtes, en tout ce qui constitue essentiellement votre être moral et intellectuel. Vous comprîtes sans effort que ce miroir qui réfléchissait fidèlement vos traits naturels, n'était que la figure d'une étude bien plus importante et plus approfondie que vous aviez à faire sur vous-même. Vous dûtes apprendre par là qu'il fallait fouiller au fond de votre cœur, sans complaisance et sans illusion, pour y découvrir vos défauts, peut-être aussi des vices qui pour l'ordinaire sont bien mieux connus des autres que de nous-mêmes, et pour vérifier, par un sévère examen, les progrès que vous pouviez avoir faits jusque-là dans votre travail sur la pierre brute, et ceux qui vous restaient encore à faire. On ne vous dissimula pas que, pour parvenir à cette connaissance si nécessaire de soi-même, il fallait un grand désir, beaucoup de courage, et les efforts soutenus de l'intelligence.");
        await this.pause(300);
        await this.parler('D.M.', "Mais, pour vous faciliter ce travail pénible, on vous recommanda de cultiver soigneusement la vertu de Tempérance, de cette tempérance universelle qui embrasse l'homme physique, l'homme moral et l'homme intellectuel, qui embrasse toutes ses pensées, toutes ses paroles, toutes ses actions, en un mot tout son être. Ce fut alors que l'Etoile flamboyante se présenta à vos regards, pour vous diriger dans l'emploi des moyens que vous aviez à prendre, pour acquérir et perfectionner en vous cette vertu, et pour soutenir vos efforts, d'abord chancelants, pour apprendre à la pratiquer.");
        await this.pause(300);
        await this.parler('D.M.', "Considérez, mon cher Frère, quel est l'avantage et la supériorité sur ses semblables de l'homme qui a su se rendre maître de ses pensées, de ses paroles et de ses actions ; vous concevrez alors le prix et l'importance de cette tempérance universelle qui vous a été si fort recommandée.");
        await this.pause(300);
        await this.parler('D.M.', "Le troisième grade, en vous présentant un cadavre, figuré sous vos yeux, vous a rappelé la fin de l'homme physique et de toutes les choses temporelles, comme le premier grade vous en avait annoncé le commencement et le second leur durée. Les nombres, consacrés à ce grade, répétés et multipliés sous différentes formes, ne changent jamais de valeur et n'en peuvent donner aucune autre. Ils vous démontrent l'inertie totale et la nullité absolue de la matière, lorsqu'elle est séparée du principe de vie qui la faisait exister. Ils vous apprennent en même temps à bien distinguer ce qui, par sa nature, est périssable dans l'homme et dans toutes choses, d'avec ce qui est indestructible, et à ne jamais le confondre. Le monument funéraire qui avait frappé vos regards en entrant dans ce lieu de deuil et de douleur, vous avait déjà donné cette importante leçon, et vous avait appris que l'homme, à la fin de son voyage dans la région terrestre, se dépouille de tout ce qui est étranger à sa vraie nature. Mais la flamme qui s'élevait au-dessus de ce monument vous avait appris en même temps que sa nature essentielle est impérissable et lui survit, et qu'elle est destinée à remonter à sa source primitive, si elle l'a mérité.");
        await this.pause(300);
        await this.parler('D.M.', "Ce grade est encore destiné à donner à ceux qui y sont appelés, une grande leçon d'un autre genre. Etendu dans le cercueil comme n'existant plus, mais y conservant cependant tous les principes de la vie, vous avez figuré l'homme vicieux et corrompu qui paraît entièrement mort à la vertu, qui, oubliant ce qu'il est, ce qu'il se doit à lui-même et aux autres, et tous ses rapports sociaux, se livre inconsidérément à tous ses penchants déréglés et aux passions les plus avilissantes, qui ne montre plus qu'un être entièrement perdu pour la société qui gémit de sa perte dans le deuil et dans la tristesse. Cependant il reste toujours capable de sortir de cet état funeste, tant qu'il n'a pas éteint au fond de son âme le germe de bien qui l'unit encore à son principe. Il peut toujours, soit par l'effet des bons conseils, des bons exemples qui l'environnent, soit par l'énergie de ses propres résolutions, sortir de cette profonde léthargie et renaître à la vertu. C'est alors que le secours puissant du Maître vient seconder ses premiers efforts. Rappelez-vous ici ceux que le Vénérable Maître, qui figurait cette puissance protectrice, a fait pour vous tirer de cet état funeste, et avec quel tendre empressement il vous a arraché du tombeau et rendu à la vie. Alors vous avez retrouvé vos Frères, la joie a succédé au deuil, à la tristesse, et la lumière aux ténèbres. Le nombre de matière morte qui vous caractérisait s'est dissipé et, en acquérant un nouvel âge, vous avez acquis le nombre de la vie.");
        await this.pause(300);
        await this.parler('D.M.', "La prudence, cette vertu favorite du Maître, aussi nécessaire à l'homme qui veut rentrer dans la bonne route dont il a eu le malheur de s'écarter, qu'à celui qui veut se garantir des dangers dont il sait qu'il est sans cesse environné, vous avait été annoncée, dès le commencement de votre réception, comme un secours toujours présent dans vos besoins, si vous saviez vous l'approprier. Elle vous avait donné ses conseils, que sans doute vous n'avez pas oubliés. Mais en terminant votre réception, et avant de vous abandonner à vos propres forces, elle s'est présentée elle-même à vos regards et s'est offerte à vous comme un guide sûr, pour vous diriger dans toutes vos actions et vous conduire au terme heureux de vos espérances.");
        await this.pause(300);
        await this.parler('D.M.', "Comme nous avons beaucoup de choses à vous dire sur le grade que vous venez de recevoir, nous ne pouvons pas poursuivre plus longtemps l'analyse des grades précédents. Gravez profondément dans votre esprit et dans votre cœur les explications lumineuses qui viennent de vous être données, afin qu'elles deviennent désormais la règle invariable de votre conduite.");
        await this.pause(300);
        await this.parler('D.M.', "Explication du quatrième grade");
        await this.pause(300);
        await this.parler('D.M.', "Le quatrième grade, dont nous allons nous occuper, complète et termine votre initiation maçonnique dans les classes des symboles. Dans celui-ci, l'Ordre vous présente les mêmes vérités avec de nouveaux développements, sous des formes et allégories différentes, qui tendent toutes au même but ; et cela ne saurait être autrement, puisque c'est toujours l'histoire de l'homme en général, celle de son état passé, présent et futur, de ses rapports directs avec son Créateur, avec ses semblables et avec tout ce qui l'environne dans l'univers créé, qu'il vous présente dans celui-ci, ainsi que dans les précédents, comme l'unique objet de la Franc-Maçonnerie primitive. Ces formes, ces allégories, ne sont tant variées que pour imprimer plus profondément dans votre esprit les vérités importantes qu'elles voilent. Mais comme, en se multipliant sous vos yeux, elles vous apportent toujours quelques nouvelles lumières, elles vous imposent aussi de nouveaux devoirs. Vous devez donc à chaque pas redoubler d'attention pour les connaître, et d'exactitude pour les remplir.");
        await this.pause(300);
        await this.parler('D.M.', "L'Ordre a mis aujourd'hui sous vos yeux différents tableaux qui se rapportent tous au but général qu'il se propose. Mais ils s'appliquent en même temps à des faits particuliers, et à diverses époques qu'il ne faut pas confondre. Les faits historiques vous ont été suffisamment développés dans les explications que vous avez reçues successivement sur chacun de ces tableaux : ainsi nous ne les répéterons pas. C'est donc sous d'autres points de vue, plus importants pour votre instruction, que nous allons les rappeler ici.");
        await this.pause(300);
        await this.parler('D.M.', "Explication des trois premiers tableaux");
        await this.pause(300);
        await this.parler('D.M.', "Vous avez reconnu, dans tous vos grades précédents, que la Franc-Maçonnerie symbolique a pour base fondamentale le Temple célèbre qui, sous l'ancienne Loi donnée par Dieu même à Moïse, fut élevé à Jérusalem par le roi Salomon, fils de David, roi prophète, qui en avait reçu les plans de Dieu même. Vous avez dû juger par-là de la pureté d'origine et de l'antiquité des vrais principes maçonniques. Où trouver des titres plus légitimes à votre confiance ? Vous reconnaîtrez peut-être, avec le temps, que le choix de ce type fondamental ne fut point arbitraire, et que ce Temple mémorable fut et sera toujours, tant par lui-même que par les grandes et étonnantes révolutions qu'il a éprouvées, le type général de l'histoire de l'homme et de l'univers.");
        await this.pause(300);
        await this.parler('D.M.', "L'homme a été créé libre ; c'est-à-dire avec la faculté d'agir selon sa pure et sainte volonté qui l'unissait à son Créateur. L'abus qu'il fit de sa liberté la lui fit perdre, car aussitôt il devint l'esclave de ses désirs déréglés, de ses penchants désordonnés, de ses passions, et de tous les vices qu'elles engendrent. L'orgueil fut son crime, et il le transmit avec sa seconde vie, périssable, à toute sa postérité. Ce vice originel est devenu le plus grand fléau du genre humain, la première cause des querelles particulières et générales et de tous les désordres qui, dans tous les temps, ont agité et dévasté la terre. Vice honteux, que l'homme déteste et couvre de mépris dans son semblable ; qui provoque toute son indignation quand il en voit et surtout s'il en ressent les moindres explosions. Et cependant il a la folie, la bassesse de le caresser dans lui-même, presque toujours de s'efforcer de le justifier, et quelquefois même d'oser s'en glorifier ! Mais la Souveraine Justice le poursuit et tôt ou tard l'humilie.");
        await this.pause(300);
        await this.parler('D.M.', "C'est cette dégradation de l'homme, ce sont l'abus de sa liberté, le châtiment qu'il en a reçu, l'esclavage dans lequel il est tombé et les suites funestes de son orgueil qui vous ont été représentés aujourd'hui dans le premier tableau, par le saccagement et la destruction du premier Temple de Jérusalem : image sensible de l'humiliante métamorphose qu'ils occasionnèrent dans la première forme corporelle de l'homme. Vous avez été introduit dans la Loge Ecossaise enchaîné et comme esclave de vos ennemis. Mais le renoncement que, sur l'interpellation du Maître, vous avez fait à vos passions, à vos vices, dont ces chaînes étaient l'emblème, la promesse que vous avez faite de travailler désormais courageusement avec vos Frères à la réédification du Temple démoli, les ont fait tomber de vos mains et vous ont rendu à la liberté. Employez donc, à l'exemple des Israélites convertis, toutes vos forces pour les déraciner de plus en plus en vous et pour vous soustraire à leurs dangereuses atteintes : c'est le plus sûr moyen de recouvrer votre liberté primitive, et alors tous vos pas vous rapprocheront d'elle.");
        await this.pause(300);
        await this.parler('D.M.', "L'homme primitif, poursuivi par la Justice, mais repentant et gémissant de ses égarements, confessa son crime et par un aveu sincère, il obtint de la Clémence divine de puissants secours pour lui-même, qu'il transmit à ses descendants. Il fit de nouvelles promesses, et il reçut à son tour de son Créateur celle des récompenses qui deviendraient le prix de sa fidélité. L'histoire du peuple hébreu, vraie dans toutes ses parties, n'est que la répétition à grands traits de celle de l'homme primitif et général ; et celle-ci est à son tour le grand type de tous les grands événements passés et à venir. Ne perdez jamais de vue, mon cher Frère, ce trait de lumière qui vient de vous frapper ici. Si vous savez le conserver, il agrandira souvent vos idées.");
        await this.pause(300);
        await this.parler('D.M.', "De même les Israélites, réduits à une dure captivité, en punition de l'abandon qu'ils avaient fait de la Loi divine, de leur idolâtrie et de tous leurs crimes, se livrant enfin à un sincère repentir, obtinrent de la bonté divine leur pardon et leur retour à Jérusalem. Ils furent néanmoins pendant longtemps inquiétés et arrêtés dans leurs travaux par leurs faux frères, devenus leurs ennemis. Mais Cyrus fut l'agent choisi et prédit, qui leur fournit le moyen de rebâtir le Saint Temple sur ses anciens fondements. La parole et le feu sacrés retrouvés, et l'embrasement miraculeux de l'holocauste sur l'autel, furent les signes visibles de leur réconciliation et de l'accomplissement des promesses accordées à leur repentir. Ce sont ces choses que vous venez de nous retracer dans la seconde partie de votre réception, et qui vous ont été figurées dans le second tableau. Mais c'est à votre intelligence à faire les rapprochements qui doivent résulter naturellement de ces faits. C'est à vous à démêler, par votre propre travail, leurs rapports avec l'homme général et avec vous-même. Nous devons nous borner ici à vous les indiquer.");
        await this.pause(300);
        await this.parler('D.M.', "Le troisième tableau vous a présenté de nouveaux objets qui sont la suite des précédents et tendent toujours au même but, car c'est toujours de l'homme général qu'il s'agit. Vous aviez vu, dans le troisième grade, le père et le modèle des Maçons, le Maître Hiram, ce célèbre et incomparable architecte des travaux du temple, doué d'intelligence et de savoir, directeur général de toutes les classes des ouvriers, favori et ami intime du roi Salomon qui se dirigeait en tout par ses conseils et par ses lumières ; vous l'aviez vu attaqué, poursuivi, assassiné par des scélérats jaloux et vindicatifs qui avaient voulu lui arracher le mot distinctif des Maîtres pour en usurper le salaire ; vous l'aviez vu résister à leurs menaces et préférer une mort certaine mais glorieuse à la lâcheté dont ces scélérats l'avaient présumé capable ; vous aviez vu enfin la mort du juste persécuté qui fait le sacrifice de sa vie plutôt que de trahir son devoir et sa destination.");
        await this.pause(300);
        await this.parler('D.M.', "Mais vous aviez pu aussi présumer sans effort qu'il s'agissait dans cette attaque de lui arracher des choses bien plus importantes que de simples mots conventionnels qu'il aurait pu si facilement remplacer, aussitôt après, pour tromper l'espérance de ses assassins.");
        await this.pause(300);
        await this.parler('D.M.', "Vous le voyez maintenant sortant de son tombeau et ressuscitant glorieusement, entouré des vertus qu'il a si héroïquement pratiquées et qui le conduisent à l'heureuse immortalité. C'est ici l'accomplissement des promesses faites à l'homme de bien qui a remporté la victoire sur ses penchants désordonnés et triomphé de lui-même. C'est le dernier terme de sa glorieuse destination. Dans le même grade, vous aviez vu, comme nous vous l'avons fait déjà remarquer, l'homme corrompu, plongé dans le tombeau du vice et retiré de cet état par les efforts du Maître qui l'a rendu à la vertu, restant cependant encore exposé à de dangereux combats. Mais ici vous voyez le juste, victorieux, ressuscitant avec son cortège pour l'Eternité. Nous laissons encore ici à votre intelligence le soin de faire des rapprochements qui vous seront d'autant plus utiles qu'ils deviendront le fruit de votre propre travail.");
        await this.pause(300);
        await this.parler('D.M.', "Explication du quatrième tableau");
        await this.pause(300);
        await this.parler('D.M.', "Il nous reste, mon cher Frère, à vous expliquer le quatrième et dernier tableau qui devient, en ce moment, le plus important de tous par les objets nouveaux et infiniment essentiels qu'il a mis sous vos yeux.");
        await this.pause(300);
        await this.parler('D.M.', "Ici la scène change entièrement. Les symboles cessent, comme on vous l'avait annoncé, et vous laissent dans le portique d'un nouveau Temple où vous aurez à commencer une nouvelle carrière. L'Ordre vous montre aujourd'hui sans mystère, quoiqu'encore sous le voile léger d'une allégorie qui s'explique bien facilement, le but et le terme général de ses travaux. Tout ce que vous avez vu jusqu'à présent dans nos Loges a eu pour base unique l'Ancien Testament, et pour type général le Temple célèbre de Salomon à Jérusalem, qui fut et sera toujours un emblème universel.");
        await this.pause(300);
        await this.parler('D.M.', "Mais ici vous voyez une enceinte de murailles, percée de douze portes, telle que l'enceinte de la nouvelle Jérusalem est décrite par saint Jean l'Evangéliste. Vous voyez au milieu de cette enceinte la montagne de la nouvelle Sion, et sur son sommet l'Agneau de Dieu triomphant, avec l'étendard de la toute-puissance qu'il a acquise par son immolation volontaire et réparatrice. Ce tableau allégorique, dont l'explication est si facile, figure pour les Maçons le passage de l'Ancienne Loi qui a cessé, à la Nouvelle Loi apportée aux hommes par le Christ et qu'il a volontairement scellée de son sang, pour la rendre à jamais ineffaçable et universelle.");
        await this.pause(300);
        await this.parler('D.M.', "La croix de saint André que vous voyez au bas du même tableau figure aussi le passage maçonnique de l'Ancien au Nouveau Testament, confirmé par l'apôtre saint André qui, d'abord disciple de saint Jean Baptiste, né et prêchant sous l'Ancienne Loi, pour préparer les cœurs à la Nouvelle, abandonna son premier Maître pour suivre sans partage Jésus-Christ, et scella ensuite de son sang son amour et sa foi pour son vrai Maître. C'est cette circonstance particulière qui a fait adopter pour ce grade, dans l'intérieur de nos Loges, la dénomination de Maître Ecossais de Saint-André.");
        await this.pause(300);
        await this.parler('D.M.', "C'est pourquoi, depuis bien des siècles, depuis l'époque incertaine où les descendants des anciens initiés du Temple de Jérusalem, ayant été éclairés par la lumière de l'Evangile, purent, avec son secours, perfectionner leurs connaissances et leurs travaux, tous les engagements maçonniques, dans toutes les parties du monde où l'institution s'est successivement répandue, sont contractés sur l'Evangile et spécialement sur le premier chapitre de celui de saint Jean, dans lequel ce disciple bien aimé, éclairé par une divine lumière, a établi avec tant de sublimité la divinité du Verbe incarné.");
        await this.pause(300);
        await this.parler('D.M.', "C'est sur ce Livre saint que depuis votre premier pas dans l'Ordre vous avez contracté tous les vôtres.");
        await this.pause(300);
        await this.parler('D.M.', "On a voulu par-là vous apprendre que la doctrine, la morale, et toutes les vérités voilées sous les symboles maçonniques, sont de tous les temps, de tous les âges, de tous les lieux, et aussi anciennes que le monde, dont l'ère de sa création est si fidèlement conservée dans nos actes ; mais qu'elles ont été propagées et perfectionnées par la Nouvelle Loi de grâce et de vraie lumière sous laquelle nous vivons. Ce que l'instruction du grade d'Apprenti vous avait déjà enseigné.");
        await this.pause(300);
        await this.parler('D.M.', "L'Ordre et la religion chrétienne");
        await this.pause(300);
        await this.parler('D.M.', "Malgré tous ces rapports de l'institution primitive avec la religion, les lois maçonniques interdisent expressément dans les Loges toutes discussions sur les matières de religion, de politique, et de toutes sciences profanes.");
        await this.pause(300);
        await this.parler('D.M.', "Cette règle est infiniment sage et doit être bien conservée, car nos Loges sont partout des écoles de morale religieuse, sociale et patriotique, où l'on apprend à exercer la bienfaisance dans toute son étendue, et ne sont point des écoles de théologie, de politique, ni d'autres objets profanes. D'un autre côté, vu la diversité des opinions humaines dans tous les genres, ces lois ont dû interdire toutes discussions qui pourraient tendre à troubler la paix, l'union et la concorde fraternelle. En supposant même que le terme final de l'institution maçonnique pût donner à ceux qui l'atteignent des lumières suffisantes pour résoudre précisément les questions et discussions religieuses qui auraient pu s'élever entre les Frères s'il leur était permis de s'y livrer, où serait, dans les Loges symboliques, le tribunal assez éclairé pour apprécier leurs décisions et les faire respecter ? Ainsi donc, nous le répétons, les lois qui interdisent expressément toutes discussions sur ces matières sont infiniment sages et doivent être rigoureusement observées.");
        await this.pause(300);
        await this.parler('D.M.', "Cependant, malgré ces sages réserves, l'Ordre n'a jamais voulu vous laisser penser qu'il fut indifférent en matière de religion. Il vous a souvent prouvé le contraire car, lorsque vous vous êtes présenté pour y être admis, par la première des trois questions préparatoires qui vous furent proposées, il vous fit demander ce que vous pensiez de la religion chrétienne, dont vous aviez déclaré faire profession.");
        await this.pause(300);
        await this.parler('D.M.', "L'Ordre, mon cher Frère, est essentiellement tolérant et ne veut que des déclarations libres. Il considère comme frères tous les Maçons qui portent le nom de chrétien et qui ne le déshonorent pas, à quelque communion chrétienne qu'ils appartiennent.");
        await this.pause(300);
        await this.parler('D.M.', "Mais, dès lors, on vous annonça que cette question importante, ainsi que les deux autres qui y étaient jointes, vous seraient souvent présentées. Elles l'ont été en effet. Mais chaque fois on vous a laissé l'entière liberté de dire franchement votre pensée sur ce sujet. Vous n'avez jamais été contesté. On s'est toujours borné à vous applaudir, à vous encourager, quand on a trouvé dans vos réponses une croyance conforme à celle de l'Ordre, ou à vous donner des conseils fraternels, si on a reconnu que vous en eussiez encore besoin. On a constamment suivi cette marche avec vous, parce que toute opinion contrainte, ou complaisamment adoptée, n'est jamais solide ni profitable et son instabilité se décèle tôt ou tard.");
        await this.pause(300);
        await this.parler('D.M.', "Mais en même temps vous avez été prévenu qu'il viendrait un moment où vous seriez tenu de vous expliquer nettement, précisément, et de faire connaître sans détour, sans ambiguïté, vos véritables opinions religieuses, et on ne vous a pas dissimulé que vos progrès ultérieurs dépendraient toujours de leur conformité avec celles de l'Ordre.");
        await this.pause(300);
        await this.parler('D.M.', "Tout vous indique aujourd'hui que le moment qui vous a été annoncé est proche, et que vous devez vous préparer sans délai, au cas que vous n'y soyez pas déjà tout prêt, à édifier sur ce point vos Frères par une déclaration qui remplisse leur attente, si vous voulez que la porte du nouveau Temple s'ouvre un jour devant vous.");
        await this.pause(300);
        await this.parler('D.M.', "Les tableaux mis sous vos yeux, les explications que vous en avez faites, et les instructions que vous recevez depuis longtemps, vous font assez connaître pourquoi les juifs, les mahométans, et tous ceux qui ne professent pas la religion chrétienne, ne sont point admissibles dans nos Loges. Car il est évident que l'admission d'hommes, tant recommandables soient-ils d'ailleurs, mais qui ne peuvent donner pour la validité de leurs engagements dans l'Ordre la seule garantie qu'il exige partout depuis un temps immémorial, serait une contradiction inconcevable dans ses principes et sa doctrine ; ils vous expliquent assez pourquoi elles rejettent pareillement de leur sein ceux qui se mentent habituellement à eux-mêmes et à leurs Frères, en déclarant ici qu'ils professent une religion à laquelle ils se glorifient ailleurs de ne pas croire. Si un usage contraire s'est introduit dans quelques Loges, c'est un abus, c'est une sorte de scandale, qui ne peuvent être attribués qu'à l'ignorance absolue des principes fondamentaux de l'institution maçonnique.");
        await this.pause(300);
        await this.parler('D.M.', "Ceux de nos Frères qui ont été chargés de votre préparation pour chacun des grades précédents, vous ont toujours dit que de votre croyance religieuse, considérée comme le premier garant des vertus maçonniques, dépendraient vos progrès ultérieurs dans l'Ordre. Ce qu'ils vous ont dit alors privément, nous vous le disons aujourd'hui tout haut et sans mystère, parce que le moment est venu de le dire. Oui, l'Ordre est chrétien ; il doit l'être, et il ne peut admettre dans son sein que des chrétiens ou des hommes bien disposés à le devenir de bonne foi, à profiter des conseils fraternels par lesquels il peut les conduire à ce terme. Ainsi, mon cher Frère, persévérez dans les sentiments que vous nous avez fait connaître jusqu'ici, vos succès ne seront plus douteux.");
        await this.pause(300);
        await this.parler('D.M.', "Vous êtes appelé, mon cher Frère, par le grade que vous venez de recevoir, à coopérer plus qu'auparavant par vos avis et vos suffrages, à la prospérité de la Loge Rectifiée dont vous faites partie. Ecartez-en, autant qu'il dépendra de vous, quand vous serez consulté, ces hommes inutiles à l'Ordre et si souvent dangereux. La prospérité d'une Loge ne dépendra jamais du grand nombre de ses membres mais du bon choix qu'elle en aura fait, et de leur attachement inviolable aux principes fondamentaux de l'institution. Qu'une lâche complaisance ne vous fasse donc point accorder votre suffrage pour l'admission ni pour l'avancement de celui qui se présentera lorsque, dans votre conscience, vous ne l'en jugerez pas digne. Mais que le fanatisme qui gâte et corrompt tout ce qu'il touche, ni d'injustes préventions qui surprennent et égarent souvent l'homme le plus équitable, n'influent jamais sur vos déterminations, et que la charité fraternelle soit toujours le principe de celles que vous prendrez.");
        await this.pause(300);
        await this.parler('D.M.', "Soyez donc indulgent pour celui qui est encore dans l'erreur, mais qui aime la vérité et la cherche de bonne foi. Les conseils, les maximes de l'Ordre, les emblèmes, les symboles mêmes, et plus encore les bons exemples des Frères, seront pour lui un langage éloquent qui les lui rendra profitables. Vous goûterez alors le plaisir pur de lui avoir rendu le plus important service. Mais que celui qui est subjugué par l'esprit d'indépendance et par les penchants déréglés de son cœur, qui, par ton, par habitude, par imitation, par légèreté, fronde les vérités religieuses, ou n'en parle qu'avec indifférence ou mépris, ne souille jamais par sa présence le Temple que les Maçons élèvent à la vertu et à la vérité. Et n'ayez jamais à vous reprocher d'avoir consenti à cette profanation.");
        await this.pause(300);
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "Ainsi se termine l'instruction finale du grade de Maître Écossais. Mes Frères, méditez ces enseignements.");
    },

    receptionMEProclamation: async function() {
        this._setEtape("Réception M.É. — Proclamation");
        // La proclamation est intégrée dans ouvertureME (motif + parrain + préparateur)
        this.action("La proclamation a été faite lors de l'ouverture de la Loge Écossaise. Le MdC se rend auprès du candidat.");
        await this.pause(this.PAUSE_ACTION);
    },

    receptionMEIntroduction: async function() {
        this._setEtape("Réception M.É. — Introduction");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Le MdC met les chaînes au candidat et l'annonce à la porte
        await this.parler('M.d.C', "Mon Frère, vous allez retracer dans votre réception des époques mémorables aux Maçons. Mais vous devez avant tout me remettre votre épée et votre chapeau, et consentir que je vous passe cette chaîne aux bras.");
        this.action("Le MdC lui passe aux deux poignets une chaîne de fer blanc à anneaux triangulaires.");
        this.action("Le Frère Parrain porte l'épée et le chapeau du candidat dans la Loge. Le MdC revêt le candidat du tablier de Maître et le conduit à la porte.");
        await this.pause(P);

        // Batterie Maître (3 × OO-O) à la porte
        this.action("Le MdC annonce le candidat par la batterie de Maître, trois fois trois.");
        await this.frapperPorte('M.d.C', null, 'OO-O');
        await this.frapperPorte('M.d.C', null, 'OO-O');
        await this.frapperPorte('M.d.C', null, 'OO-O');
        await this.parler('2°S.', "Frère Premier Surveillant, on a frappé à la porte de la Loge en Maître Maçon !");
        await this.parler('1°S.', "Respectable Député Maître, on a frappé à la porte de la Loge en Maître Maçon !");
        await this.parler('D.M.', "Frères Surveillants, voyez qui a frappé, et rendez m'en compte.");
        await this.parler('1°S.', "Voyez qui a frappé, Frère Second Surveillant.");
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.frapperPorte('M.d.C', null, 'OO-O');
        await this.frapperPorte('2°S.', 'M.d.C', 'OO-O');
        await this.frapperPorte('2°S.', null, 'OO-O');
        await this.parler('2°S.', "Qui est-ce qui a frappé et que demandez-vous ?");
        await this.parler('M.d.C', "C'est un Maître Maçon qui s'est échappé de la captivité et qui, venant des îles de l'Écosse, demande d'être réuni à ses Frères.");
        await this.parler('2°S.', "Frère Premier Surveillant, c'est un Maître Maçon qui s'est échappé de la captivité et qui, venant des îles de l'Écosse, demande d'être réuni à ses Frères.");
        await this.parler('1°S.', "Respectable Député Maître, c'est un Maître Maçon qui s'est échappé de la captivité et qui, venant des îles de l'Écosse, demande d'être réuni à ses Frères.");
        await this.pause(P);

        // Questions d'Ordre
        await this.parler('D.M.', "Demandez-lui son nom, son âge et à quoi il a travaillé.");
        await this.parler('1°S.', "Frère Second Surveillant, demandez-lui son nom, son âge et à quoi il a travaillé.");
        await this.parler('2°S.', "Quel est son nom, son âge et à quoi a-t-il travaillé ?");
        await this.parler('M.d.C', "Son nom est GABAON. Il a sept ans passés et il a travaillé sur la planche à tracer pour préparer les plans de reconstruction.");
        await this.parler('2°S.', "Frère Premier Surveillant, son nom est GABAON. Il a sept ans passés et il a travaillé sur la planche à tracer pour préparer les plans de reconstruction.");
        await this.parler('1°S.', "Respectable Député Maître, son nom est GABAON. Il a sept ans passés et il a travaillé sur la planche à tracer pour préparer les plans de reconstruction.");
        await this.pause(P);

        await this.parler('D.M.', "Frère Premier Surveillant, faites-lui demander s'il veut concourir, avec ses Frères, à la perfection de l'ouvrage commencé, et s'il veut y travailler avec zèle et persévérance.");
        await this.parler('1°S.', "Frère Second Surveillant, demandez-lui s'il veut concourir, avec ses Frères, à la perfection de l'ouvrage commencé et y travailler avec zèle et persévérance.");
        await this.parler('2°S.', "Veut-il concourir, avec ses Frères, à la perfection de l'ouvrage commencé et y travailler avec zèle et persévérance ?");
        await this.parler('M.d.C', "Il désire ardemment d'aider ses Frères dans tous leurs travaux.");
        await this.parler('2°S.', "Frère Premier Surveillant, il désire ardemment d'aider ses Frères dans tous leurs travaux.");
        await this.parler('1°S.', "Respectable Député Maître, il désire ardemment d'aider ses Frères dans tous leurs travaux.");
        await this.pause(P);

        await this.parler('D.M.', "Frères Surveillants, faites donc entrer ce Frère Maçon, afin que nous éprouvions s'il a autant de courage que de bonne volonté.");
        await this.parler('1°S.', "Frère Second Surveillant, faites donc entrer ce Frère Maçon, afin que nous éprouvions s'il a autant de courage que de bonne volonté.");

        // Entrée du candidat — 3 pas d'équerre avec les 3 signes
        this.action("Le 2°S. ouvre la porte. Le MdC introduit le candidat par trois pas d'équerre : au 1er il fait le signe d'Apprenti, au 2e celui de Compagnon, au 3e celui de Maître. Il reste au signe de Maître.");
        await this.processer('pion-m', D, { x: 630, y: 900 }, WP[1]);

        this.action("Le MdC place le candidat à l'Occident entre les deux Surveillants, lui fait incliner devant le Député Maître et lui montre le premier tableau avec la pointe de son épée.");
        await this.parler('M.d.C', "Considérez attentivement les débris de ce Temple majestueux, qui fut l'une des merveilles du monde.");
        this.action("On laisse le candidat à ses réflexions pendant quelques instants.");
        await this.pause(P * 2);
    },

    receptionMEVoyages: async function() {
        this._setEtape("Réception M.É. — Voyages");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Premier discours du Député Maître — explication du 1er tableau
        await this.parler('D.M.', "Il n'y a rien de stable dans le monde. Tout passe comme une fumée. Les monuments les plus solides, les établissements les plus utiles, les plus respectables, et toutes les grandeurs humaines sont soumises à cette loi. La vertu seule est impérissable ; elle seule rend le vrai Maçon inébranlable dans les revers et supérieur à tous les événements de la vie.");
        await this.parler('D.M.', "Dans les grandes révolutions, l'homme vulgaire ne voit et ne cherche que les causes apparentes, qui les ont préparées et produites ; mais le sage porte sa vue au-delà de cette sphère sensible. Il sait qu'il y a au-dessus de lui une Cause intelligente, active, éternelle et toute-puissante qui, dans le conseil secret de sa justice et de sa providence, dispose et dirige les événements pour l'accomplissement de ses desseins, et qui se sert des causes physiques comme d'aveugles ministres de sa volonté. Elle tend toujours à son but par les moyens les plus utiles et les plus sages, mais si les vertus, devenues trop rares parmi les hommes, ne peuvent les conduire au terme qu'elle se propose, elle sait employer leurs vices mêmes et leurs passions pour l'accomplir.");
        await this.parler('D.M.', "Jetez les yeux, mon Frère, sur le tableau qui est devant vous ; il vous confirmera cette importante leçon ; vous y verrez les ruines de ce Temple célèbre que Salomon fit élever à Jérusalem ; que la Gloire du Seigneur vint habiter, et qui fit aussi celle de la nation entière, tant qu'elle resta fidèle aux lois, aux préceptes et aux commandements divins qu'elle avait reçus par le ministère de ceux qui avaient été chargés de la gouverner et de l'instruire.");
        await this.parler('D.M.', "Mais ce peuple, si privilégié, étant devenu rebelle ; ayant méconnu la main toute-puissante qui le soutenait ; ayant méprisé les lois qu'il en avait reçues et s'étant oublié jusqu'à profaner son encens par un culte impie envers des dieux étrangers et pervers ; il mérita d'être puni par la perte de ses brillantes prérogatives qui le distinguaient de tous les autres peuples, et d'être abandonné à lui-même. L'orgueil s'empara de lui ; la confusion se mit dans ses conseils. Dans son aveuglement extrême, il se suscita de puissants ennemis qu'il méprisa d'abord, et provoqua lui-même, par son orgueil, les forces qui devaient le détruire.");
        await this.parler('D.M.', "Nabuchodonosor, roi d'Assyrie, croyant ne satisfaire que son ambition et sa cupidité, devint le ministre secret de la justice divine irritée contre une nation ingrate et pervertie ; il donna ordre à ses généraux d'assiéger Jérusalem et son Temple. La ville fut prise et saccagée ; le Temple fut détruit ; le MOT Sacré, qui avait fait jusque-là toute la FORCE de cette nation, fut perdu ; les trésors du Temple, qui avaient excité la cupidité de Nabuchodonosor, furent emportés à Babylone et profanés. Le roi, les prêtres et le peuple furent chargés de chaînes, et emmenés captifs chez le vainqueur, où le plus grand nombre périt, accablé de souffrances et de misères. Le reste de la nation se dispersa et alla gémir de ses malheurs chez d'autres peuples.");
        await this.parler('D.M.', "Voilà, mon cher Frère, un récit fidèle qui vous explique le terrible événement figuré dans le tableau qui est sous vos yeux. Mais ce Temple, si violemment détruit, fut réédifié ; et vous venez aujourd'hui au milieu de nous, comme vinrent autrefois à Jérusalem les Maçons dispersés de l'ancien Temple, attiré par le désir de coopérer à sa reconstruction.");
        await this.parler('D.M.', "Voulez-vous donc bien sincèrement, mon cher Frère, travailler avec nous à celui que nous élevons à la vertu et à la bienfaisance ? Les grades par lesquels vous avez passé vous ont appris ce que l'Ordre des Francs-Maçons exige de vous. Ces grades, les conseils que vous y avez reçus et les exhortations qui vous ont été faites, vous ont fait sentir l'absolue nécessité de purger votre âme des vices, des passions et des préjugés mondains qui obscurcissent l'intelligence et privent l'âme de toute l'énergie qui lui est nécessaire pour avancer dans la carrière de la vertu.");
        await this.parler('D.M.', "Ces grades ont été en même temps pour nous autant de moyens d'éprouver votre zèle, votre persévérance, et votre amour pour la vertu et pour la vérité. Nous vous avons jugé digne des faveurs de l'Ordre et des récompenses qu'il laisse à notre disposition ; mais vous-même, mon cher Frère, vous qui pouvez mieux que nous lire dans votre intérieur, êtes-vous assez satisfait de vos progrès dans cette carrière pour oser la suivre avec assurance ? Toutes les instructions que vous avez reçues jusqu'ici ont-elles fait sur vous une impression assez forte, assez durable, pour vous garantir des dangers, toujours renaissants, auxquels vous serez indubitablement exposé pendant le cours de votre vie ? Prenez-y garde, mon cher Frère ! Vous pourriez nous tromper ; mais vous ne pouvez tromper Celui qui lit au fond de votre cœur. L'homme vulgaire n'a que trop souvent la vertu sur les lèvres ; mais le vrai Maçon la porte dans son cœur. Examinez-vous donc sérieusement, et répondez avec franchise : êtes-vous assez satisfait de vos progrès dans cette carrière pour oser la suivre avec assurance ?");
        await this.pause(P);

        await this.parler('D.M.', "Mon Frère, si vous avez reconnu le danger des passions qui agitent sans cesse le cœur de l'homme, qui l'assujettissent à leur empire lorsqu'il devrait les dominer, et celui des vices avilissants qu'elles font si souvent éclore en lui ; si vous avez aussi reconnu la nécessité de les réprimer de bonne heure, afin qu'elles ne vous maîtrisent jamais, vous avez déjà fait un grand pas, non encore dans la perfection à laquelle vous devez atteindre, mais du moins dans la route qui y conduit. Prenez donc courage ; et puisque vous avez pris la ferme résolution de pratiquer tout ce qui peut vous rendre meilleur et plus utile à vos semblables, par vos exemples autant que par vos conseils, venez-en prendre l'engagement solennel entre mes mains. Mais n'oubliez pas que l'engagement des Maçons ne peut avoir de prix pour nous qu'autant qu'il est contracté volontairement et avec une entière liberté.");
        await this.parler('D.M.', "Frère Second Surveillant, ce Frère a été introduit ici avec les signes de la servitude, comme étant encore esclave des passions et des vices qui dégradent l'humanité. Ôtez-lui donc ses chaînes, qui en sont l'emblème, puisqu'il vient de renoncer, en notre présence, à leur empire, par sa propre et libre volonté, et amenez-le à l'Orient, par la marche des Maîtres Écossais.");
        await this.pause(P);

        // Les pas de la marche ME — 4 pas sur les 4 portes
        this.action("Le 2°S. ôte les chaînes du candidat et les dépose au bas du tableau. Le 1°S. lui fait faire les 4 pas de la marche ME : pied gauche sur la porte d'Occident, pied droit sur la porte du Midi, pied gauche sur la porte du Nord, pied droit sur la porte d'Orient. Puis 3 pas d'équerre vers l'autel.");
        await this.processer('pion-m', D,
            { x: 495, y: 565 }, // porte Occident
            { x: 630, y: 790 }, // porte Midi
            { x: 630, y: 340 }, // porte Nord
            { x: 765, y: 565 }, // porte Orient
            { x: 630, y: 400 },
            WP[5]               // autel
        );
        await this.pause(P);
    },

    receptionMESerment: async function() {
        this._setEtape("Réception M.É. — Serment");
        const P = this.PAUSE_ACTION;

        // Engagement
        await this.frapper('D.M.', 'O');
        await this.parler('D.M.', "À l'ordre, mes Frères.");
        this.action("Tous les Frères se découvrent, prennent leur épée dans la main droite, pointe haute, la garde à hauteur de la bouche.");
        await this.pause(P);

        await this.parler('Cand.', "Moi, N..., je promets sur le Saint Évangile, devant Dieu et en présence de mes Frères, d'être fidèle à la Religion Sainte que j'ai déclaré professer en entrant dans l'Ordre, à ma patrie et aux lois de l'État ; et de ne jamais participer à rien qui leur serait contraire. Je promets de ne rien révéler, ni communiquer, concernant la Maçonnerie Écossaise, à qui que ce soit qui n'aurait pas été reconnu par mes Chefs pour Maître Écossais légitimement reçu ; d'observer fidèlement les lois, règles et instructions de l'Ordre et d'être soumis en ce qui les concerne à tous ceux qui sont chargés de leur exécution. Je promets aussi d'aimer tous mes Frères et de faire respecter l'Ordre de tout mon pouvoir, en pratiquant constamment les vertus dont il impose le devoir à tous ses membres ; d'être bienfaisant ; de me rendre utile aux hommes, autant qu'il dépendra de moi, et de ne rien négliger pour mon avancement dans l'amour du bien, de la justice et de la vérité. Si je manque à cet engagement, que je contracte librement et volontairement, ainsi qu'à aucun de ceux que j'ai précédemment contractés dans l'Ordre et dans lesquels je persiste, je me soumets à être réputé homme sans foi, sans honneur et digne du mépris de tous mes Frères. Que le Grand Architecte de l'Univers me soit en aide pour m'en préserver.");
        await this.pause(P);

        // Réception
        this.action("Le Député Maître, tenant de la main droite son maillet et soutenant de la main gauche la pointe d'un compas ouvert posé sur le cœur du candidat, dit :");
        await this.parler('D.M.', "Au nom du Grand Architecte de l'Univers, au nom de l'Ordre, au nom des Supérieurs des Loges réunies et rectifiées, et par le pouvoir que j'ai reçu du Directoire Écossais National, je vous reçois Maître Écossais de Saint-André.");
        this.action("Il frappe quatre coups OO-O-O sur la tête du compas.");
        await this.frapper('D.M.', 'OO-O-O');
        this.action("Il fait relever le candidat.");
        await this.pause(P);
    },

    receptionMEReception: async function() {
        this._setEtape("Réception M.É. — Réception");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        await this.parler('D.M.', "Mon Frère, vous voilà solennellement engagé à remplir vos nouveaux devoirs, plus strictement obligé que vous ne l'étiez à remplir les engagements que vous avez déjà contractés et plus intimement lié à l'Ordre Maçonnique. Vous vous êtes dévoué à travailler avec vos Frères à la réédification du Saint Temple ; mais vous serez exposé à bien des attaques et à beaucoup de dangers dans ce travail. Armez-vous donc de courage.");
        await this.parler('D.M.', "Je vous arme aussi de cette épée, dont vous vous servirez pour votre défense et pour celle de vos Frères, tandis que vous vous servirez, de l'autre main, de la truelle que je vous confie pour le travail auquel vous vous êtes engagé ; mais prenez garde de ne jamais abuser de l'une ni de l'autre et de vous souiller par aucune chose qui serait injuste devant le Juge Suprême de toutes vos pensées et de toutes vos actions.");
        await this.parler('D.M.', "Allez, maintenant, mériter par d'utiles travaux de porter dignement l'auguste titre dont vous venez d'être revêtu. Je vous remets entre les mains des Frères Surveillants, qui vous guideront dans ceux que vous avez à faire ici.");
        await this.frapper('D.M.', 'O');
        this.action("Tous les Frères abaissent la pointe de leur épée contre terre et se recouvrent.");
        await this.parler('D.M.', "Prenez séance, mes Frères.");
        await this.pause(P);

        // Les Surveillants conduisent le candidat à l'Occident
        await this.processer('pion-m', D, WP[1]);
        await this.parler('1°S.', "Respectable Député Maître, le Frère Écossais est à l'Occident et y attend vos ordres.");
        await this.parler('D.M.', "Frère Écossais ! Le travail que vous allez entreprendre est pénible et difficile. Souvent il rend téméraire celui qui s'y livre inconsidérément. Frère Premier Surveillant ! Faites connaître à ce nouveau Frère la vertu qui lui manque, celle du Maître Écossais, afin qu'il apprenne à en faire un bon usage.");
        this.action("On découvre le transparent portant le mot FORCE.");
        await this.parler('1°S.', "Mon Frère, voilà la vertu que vous désirez d'acquérir ; ne la considérez pas en vain.");
        await this.pause(P);
        await this.parler('1°S.', "Respectable Député Maître, le nouveau Frère connaît la vertu particulière de son grade.");
        await this.parler('D.M.', "Mon Frère, celui qui aime la JUSTICE, qui observe les règles de la TEMPÉRANCE et suit les conseils de la PRUDENCE, est certainement dans la bonne voie ; mais il lui manque encore la FORCE, cette force de volonté qui le fait persévérer dans ses bonnes résolutions et lui assure le fruit de ses travaux. Si vos intentions sont pures, tournez vos regards vers le Vrai Orient, et demandez avec confiance à Celui qui peut seul vous la donner, cette force nécessaire.");
        await this.parler('D.M.', "Frères Surveillants, dirigez ce nouveau Frère dans le travail qui lui reste à faire.");
        await this.pause(P);

        // Découverte du tapis avec la truelle — 4 côtés
        this.action("Le candidat, aidé des Surveillants, tient l'épée de la main gauche et découvre avec la truelle (main droite) les quatre côtés du tapis successivement, ramassant le voile au milieu. Il découvre le chandelier à sept branches, la table des pains de proposition, les quatre instruments maçonniques, et la place de l'autel des parfums.");
        await this.pause(P);
        await this.parler('1°S.', "Respectable Député Maître, le Frère Écossais a déjà découvert le chandelier à sept branches, la table des pains de proposition et les quatre instruments maçonniques sans lesquels toute construction serait irrégulière ; il a aussi rétabli la place destinée à recevoir l'autel des parfums.");
        await this.parler('D.M.', "Frères Surveillants, aidez-lui à relever l'autel même, pour qu'il y offre son parfum.");
        this.action("Le candidat va prendre l'autel d'or à l'angle sud-est du tableau, le découvre et le pose dans le carré désigné sur le tapis. Il prend le vase d'esprit de vin et en remplit la cavité de l'autel.");
        await this.pause(P);
        await this.parler('1°S.', "Respectable Député Maître, le Frère Écossais a rétabli l'autel des parfums et l'a placé devant l'Arche d'Alliance.");
        await this.parler('D.M.', "Faites-lui continuer son travail, jusqu'à ce qu'il l'ait accompli.");
        this.action("Le candidat achève de découvrir le tapis avec sa truelle et trouve au milieu la lame d'or triangulaire. Le 1°S. lui fait enlever la lame avec sa truelle.");
        await this.parler('1°S.', "Respectable Député Maître, voilà la récompense de ce Frère ! Il a trouvé la lame d'or du Temple, sur laquelle on peut lire le Nom Sacré.");
        await this.parler('D.M.', "Mon Frère, l'heureuse découverte que vous venez de faire est, pour vous comme pour nous, du plus précieux augure. Prononcez avec confiance ce NOM, qui fut jadis la Gloire du Temple et fit le bonheur de la nation.");
        this.action("Le candidat prononce à haute voix le Nom JEHOVA gravé sur la lame triangulaire. Aussitôt le 2°S. enflamme l'esprit de vin sur l'autel. Le MdC allume les quatre flambeaux à quatre lumières.");
        await this.pause(P);

        await this.parler('D.M.', "Mes Frères, nos maux sont finis, et nos succès sont désormais assurés par ce signe des faveurs célestes qui se répandent sur nous. Soyons donc fermes et inébranlables dans la pratique des vertus qui nous en assureront aussi la durée.");
        await this.parler('D.M.', "Et vous, mon Frère, venez recevoir la récompense de votre travail et les marques distinctives de votre grade.");
        this.action("Prenez séance, mes Frères. Le 1°S. conduit le candidat au pied de l'autel vers le Député Maître.");
        await this.processer('pion-m', D, { x: 680, y: 280 });
        await this.pause(P);

        // Second discours — récit historique
        await this.parler('D.M.', "Mon Frère, vous venez de nous retracer une époque à jamais mémorable pour les ouvriers du second Temple de Jérusalem et pour leurs successeurs. Redoublez d'attention pour ce que j'ai encore à vous apprendre, et tâchez d'en faire de justes applications.");
        await this.parler('D.M.', "Le Suprême Architecte de l'Univers avait voulu punir l'orgueil et les désordres sans cesse renaissants de la nation, qui s'était rendue bien plus coupable envers Lui qu'envers celle dont le roi s'était fait le ministre des vengeances divines. Il avait voulu la châtier, mais non pas la perdre entièrement. Le feu sacré qui avait brillé dans le Temple avait été caché, mais non pas éteint. Cette nation conserva toujours, même dans sa plus grande humiliation, le caractère indélébile qui la distinguait de toutes les autres. Pendant sa servitude, elle reconnut la main qui l'avait frappée. Elle médita avec plus de fruit que par le passé ses propres lois, ses règles et ses cérémonies. Dès lors, son aveuglement cessa ; elle reconnut la vraie cause de tous ses malheurs. La Bonté divine, qui veillait sans cesse sur elle, lui avait conservé des prêtres éclairés et des prophètes qui l'excitèrent à mériter la fin de ses maux par un sincère repentir. Elle prit enfin des résolutions salutaires pour l'avenir et, après soixante-dix ans de servitude, elle recouvra sa liberté.");
        await this.parler('D.M.', "Zorobabel, issu de la race des Princes de la nation, eut le courage de se mettre à la tête du peuple et de revenir avec lui à Jérusalem pour y rebâtir le Temple détruit par les Assyriens. Il fut inquiété dans sa route par de nombreux ennemis et, arrivé à Jérusalem, il en trouva de bien plus dangereux encore. Il choisit, pour le seconder dans son entreprise, ceux dont le zèle et le courage étaient à toute épreuve ; il leur mit à la main la truelle et l'épée, afin qu'ils pussent bâtir avec l'une et se défendre avec l'autre contre les violentes et fréquentes attaques qu'ils éprouvaient.");
        await this.parler('D.M.', "Plusieurs de ceux qui étaient dispersés chez les peuples voisins, instruits par la renommée de cette reconstruction, vinrent s'offrir pour y travailler ; mais ce ne fut qu'après avoir été rigoureusement éprouvés qu'on leur confia la truelle et l'épée. Après bien des fatigues, les ouvriers, animés par l'exemple de leurs chefs, parvinrent enfin à rétablir le Temple sur ses anciens fondements. Mais celui-ci différait trop du premier, pour que les sentiments qu'il excitait ne fussent pas, aussi, différents. Les vieillards, qui avaient vu la gloire, les richesses et la magnificence de l'ancien, répandaient des larmes d'amertume sur celui-ci, tandis que le peuple renouvelé se réjouissait de sa beauté. Mais l'Arbitre Souverain des destinées des hommes, qui veillait sur les uns et sur les autres, consola les premiers et confirma la joie des seconds par un événement miraculeux, qui leur prouva qu'ils avaient tous trouvé grâce devant Lui, et qu'Il voulait bien encore habiter au milieu d'eux.");
        await this.parler('D.M.', "Et, en effet, le nouveau Temple étant achevé, l'autel des holocaustes et celui des parfums ayant été relevés, et le peuple ayant été instruit de la Loi par Esdras l'un de ses docteurs, Néhémie disposa tout pour en faire la dédicace solennelle. Le peuple, animé d'une sainte ferveur, se réjouissait d'un si beau jour, sans oser espérer ce qui devait le rendre si mémorable, lorsque Néhémie, qui savait que le feu sacré avait été caché par Jérémie lors de la destruction du Temple, et que le Mot Sacré qui lui donnait sa vertu avait été aussi conservé parmi les enfants des prêtres, Néhémie, dis-je, envoya chercher ce feu par les prêtres mêmes. On ne trouva plus, dans le puits qui le recelait, qu'une eau bourbeuse et épaisse ; mais, plein de confiance, il la fit puiser et la répandit sur l'autel. Aussitôt, elle s'embrasa et consuma l'holocauste, en présence de tout le peuple, qui se livra à la joie la plus pure en voyant cet événement qui relevait la gloire et toutes les espérances de la nation.");
        await this.parler('D.M.', "Je n'ajouterai point de réflexions à ce récit ; je laisse libre cours aux vôtres, mon cher Frère ! Mais ne perdez jamais de vue que, soit pour l'homme qui s'est souillé par de coupables excès, soit pour celui qui les a effacés par un sincère repentir ou qui ne s'est jamais écarté des voies de la justice, le crime reçoit tôt ou tard sa punition et la vertu, sa récompense. Venez recevoir de mes mains le tablier et les signes particuliers de votre grade.");
        await this.pause(P);
    },

    receptionMELumiere: async function() {
        this._setEtape("Réception M.É. — Lumière");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Tablier et instruction
        await this.parler('D.M.', "La couleur blanche de ce tablier est le symbole de la candeur et de la pureté de mœurs qui doivent caractériser le Maçon dans toutes les actions de sa vie. La couleur verte dont il est doublé et la couleur rouge dont il est mêlé, vous seront bientôt expliquées.");
        this.action("Le Député Maître enseigne au nouveau Maître Écossais le signe : main droite à plat en équerre sur le front, au-dessus des yeux, pouce allongé vers l'oreille droite, comme si l'on voulait se garantir de l'éclat d'une grande lumière.");
        this.action("L'attouchement en 4 temps : 1) main droite à la garde de l'épée. 2) Serrer mutuellement la main droite. 3) Porter la même main au coude, serrer par 3 secousses. 4) Revenir au poignet, serrer à la manière des Maîtres.");
        await this.parler('D.M.', "Le mot du grade est HIRAM. Le nom particulier du Maître Écossais est NOTUMA. Son âge est de 16 ans.");
        await this.pause(P);

        // Conduite à l'Occident — troisième discours
        this.action("Le Député Maître fait conduire le candidat à l'Occident.");
        await this.processer('pion-m', D, WP[1]);
        await this.pause(P);

        await this.parler('D.M.', "Mon cher Frère, depuis que vous êtes entré dans l'Ordre, on vous présente à chaque pas des emblèmes et des allégories, pour exercer votre intelligence et pour vous préparer à leurs développements, qui doivent être votre propre ouvrage. Voici le dernier qu'on vous offrira ; mais il est important pour vous d'étudier le vrai sens qu'il vous présente. Quelque grande que soit votre pénétration, elle pourrait être en défaut. Prenez-y garde : là où les rapports sont multipliés, on est fort exposé à manquer de les saisir. Et en se livrant trop à un seul, on peut manquer le but de ses recherches.");
        await this.parler('D.M.', "Le Temple de Jérusalem est le grand type général de la Franc-Maçonnerie, qui s'est renouvelée sous divers noms, sous diverses formes et à différentes époques. Les Francs-Maçons tirent leur origine de ce Temple même. Les révolutions qui lui sont survenues vous retracent celles qui se rapportent à l'homme même et celles qu'a éprouvées, en différents temps, l'Ordre des Maçons, le plus ancien et le plus respectable qui fut jamais. C'est sous ce dernier rapport historique, et le plus moderne, que nous allons poursuivre en ce moment votre instruction.");
        await this.parler('D.M.', "Pour peu que vous ayez réfléchi sur les causes morales qui ont occasionné les révolutions du type même, vous aurez aussi connu celles qui ont dû en produire dans l'Ordre Maçonnique et qui pourraient encore en causer la ruine. Nous distinguerons donc ici son origine antique et fondamentale, dont les développements sont réservés à d'autres temps, des époques plus modernes, quoique très anciennes, où, sous la dénomination conventionnelle de Franc-Maçonnerie, et sous le voile des emblèmes et des allégories, il a été beaucoup plus propagé et s'est trouvé par-là exposé à de plus grandes et à de plus fréquentes révolutions. Suivons-en le parallèle ; il mérite toute votre attention.");
        await this.parler('D.M.', "La Franc-Maçonnerie, instituée par les chefs des ouvriers du Temple élevé par Salomon, détruit par les Assyriens et reconstruit par Zorobabel, ne présente que des principes solides, des règles sûres et une morale épurée, qui tendent tous à rendre l'homme meilleur et plus utile à ses semblables, à lui faire connaître tous ses devoirs et à l'élever jusqu'à l'Auteur de son existence. Tant qu'elle fut pratiquée sur cette base, l'Ordre dut être et fut florissant, et tous ses membres furent honorés. Tel fut son premier état, figuré par le Temple de Jérusalem, qui fut, sous Salomon, dans sa plus grande splendeur et fit la gloire de toute la nation.");
        await this.parler('D.M.', "Mais, dès que le relâchement fut introduit dans l'Ordre Maçonnique, dès qu'on se permit d'y admettre des sujets peu disposés à suivre ses principes fondamentaux, ses règles, sa morale, ses pratiques, on négligea les vertus qu'il prescrit et on y introduisit les vices, qui avaient été jusque-là relégués dans les sociétés profanes. Dès lors, on y vit un mélange d'hommes respectables par leur savoir, par leur piété, par leur bienfaisance, confondus avec d'autres qui, n'ayant que l'apparence de la vertu, avec la folle arrogance du vice, portèrent une atteinte mortelle à la réputation dont avait joui jusque-là cet Ordre respectable.");
        await this.parler('D.M.', "En cet état, l'envie, la cupidité, la calomnie, lui suscitèrent de puissants ennemis ; ses cérémonies et ses pratiques mystérieuses devinrent suspectes et servirent de prétextes aux imputations les plus graves, à des injustices et à des persécutions qu'il a souvent éprouvées. L'unité des principes qui l'avaient fait respecter jusqu'alors avait disparu. L'orgueil, si naturel à l'homme qui a perdu de vue tout ce qui pourrait l'humilier, l'orgueil d'appartenir à un corps qui avait excité pendant longtemps l'admiration des peuples qui le connaissaient, fut la cause de tous ses maux. Les vices qui naissent de ce premier rejaillirent sur l'Ordre entier ; il fut persécuté et perdit tout son éclat. C'est là le second état de l'Ordre, encore trop souvent renouvelé par l'indigne conduite des intrus qui le déshonorent, état qui vous est aujourd'hui représenté par le bouleversement et le saccagement du Temple de Jérusalem.");
        await this.parler('D.M.', "Mais, comme dans cette douloureuse révolution du Temple ses fondements furent encore conservés, de même aussi les vrais Maçons qui ont conservé, comme Esdras, le Livre Saint de la Loi, pour la méditer avec fruit, qui ont su que le Feu sacré n'était pas éteint et pouvait se ranimer encore, cédant pour un temps au torrent des circonstances, ont gardé soigneusement le dépôt précieux qui leur était transmis. Lorsqu'ils ont vu les Maçons égarés se repentir, à l'exemple des Israélites, de leurs fautes, et gémir sous les abus qui s'étaient introduits presque partout, alors ils ont fait reparaître dans tout leur éclat ces règles primitives, conservées dans leur pureté fondamentale. Avant de les publier et pour ne point les exposer à de nouvelles profanations, nouveaux Esdras, ils ont fait sentir au peuple Maçon la nécessité de se réformer, de purger les Loges et leurs travaux des innovations que le second état de l'Ordre avait introduites, des abus et des systèmes nuls, faux ou dangereux, qui ne tendaient qu'à défigurer de plus en plus le saint but fondamental de l'institution.");
        await this.parler('D.M.', "Alors, le Temple a été réédifié ; le Mot sacré a été retrouvé et la Franc-Maçonnerie a repris un nouveau lustre, qu'elle conservera tant que les Maçons ne perdront pas de vue les principes invariables sur lesquels elle est fondée. C'est cet état actuel de l'Ordre dans la Franc-Maçonnerie Rectifiée qui vous a été représenté par la troisième époque du Temple de Jérusalem, rebâti par Zorobabel ; c'est aussi cette classe d'ouvriers désabusés et réformés, dont vous avez demandé d'augmenter le nombre. Après nous être assurés, autant qu'il dépendait de nous, de vos vraies dispositions, nous nous sommes empressés de satisfaire vos désirs ; mais n'oubliez jamais, mon cher Frère, à quelles conditions vous l'avez obtenu.");
        this.action("Le Maître des Cérémonies dévoile le double triangle flamboyant et remplace le deuxième tableau par le troisième.");
        await this.pause(P);

        // Explication du 3e tableau — Hiram sortant du tombeau
        await this.parler('D.M.', "Il nous reste à vous faire connaître aussi les rapports particuliers du Maître Hiram avec l'Ordre Maçonnique. Le Maître Hiram, cet ouvrier sublime, doué, selon les Saintes Écritures, d'intelligence et d'un rare savoir, surnommé Abif, qui, selon les interprètes, signifie 'envoyé de Dieu' ; cet homme, révéré par Hiram, roi de Tyr, comme son père, estimé, chéri, honoré par Salomon, qui se guida en tout par ses conseils, fut le conducteur en chef de tous les ouvriers, dont il coordonna les classes, et présida à la dédicace du Temple, comme il avait présidé à sa construction. Il est tout à la fois le père et le modèle des vrais Maçons, et en même temps le type particulier de l'Ordre Maçonnique et des trois états dont nous venons de vous présenter l'image.");
        await this.parler('D.M.', "L'histoire de sa mort et de son assassinat par trois compagnons est une fiction ingénieuse, que favorise à cet égard le silence des Saintes Écritures. Elle voile cependant de grandes vérités pour le Maçon qui veut s'instruire. Chaque circonstance de sa vie et du funeste événement que les Maçons célèbrent dans leurs travaux, font connaître les vertus qu'ils doivent pratiquer. Sa sortie glorieuse du tombeau, que l'on retrace devant vous en ce moment, vous en fait connaître la récompense.");
        await this.parler('D.M.', "Hiram vivant, respecté, chéri et dirigeant cette grande entreprise par ses talents et ses lumières, représente l'Ordre dans son état primitif, lorsqu'il n'était encore connu que par ses bienfaits et par la juste admiration qu'il excitait. Hiram allant assidûment au Temple pour y faire sa prière, après la retraite des ouvriers, enseigne aux Maçons qu'en cette qualité, ils doivent encore plus que les autres un pur hommage à l'Être Suprême.");
        await this.parler('D.M.', "Hiram assassiné par trois compagnons, qui veulent lui arracher le Mot de Maître pour en usurper la paie, nous fait connaître le danger des passions violentes, qui peuvent nous porter aux plus grands désordres, si on ne les réprime d'abord ; et en même temps l'injustice de ceux qui, sans prendre la peine de faire sur eux-mêmes le travail nécessaire, voudraient arracher aux autres leurs découvertes et s'en approprier les fruits. Le refus d'Hiram nous apprend que la justice et la discrétion doivent être les vertus favorites des Maçons. Enfin, sa mort tragique vous indique le second état de l'Ordre, succombant par la mauvaise conduite de ses membres, désignés par trois compagnons sous les traits de l'envie, de la cupidité et de la calomnie.");
        await this.parler('D.M.', "Mais ce père des Maçons vous est aujourd'hui représenté ressuscitant, et vous figure le troisième état de l'Ordre. Vous le voyez dégagé de ses linceuls funéraires, et sortant glorieusement de son tombeau ; vous le voyez rappelé à une nouvelle vie, entouré des vertus qu'il a constamment pratiquées et qui lui assurent l'immortalité, à laquelle doivent aussi aspirer tous ceux de ses enfants qui sauront l'imiter. Ces vertus maçonniques, mon cher Frère, sont celles que l'Ordre vous a fait connaître dans les grades que vous avez reçus : l'amour constant de la JUSTICE, une exacte TEMPÉRANCE dans vos désirs, dans vos paroles et vos actions, une sage habitude d'observer fidèlement les lois et les conseils de la PRUDENCE, l'usage raisonnable que vous devez faire de la FORCE, qui vous est donnée pour l'accomplissement des desseins dont la Divine Providence vous a confié l'exécution ; la religion, la discrétion et la bienfaisance, sont des devoirs maçonniques que ces quatre vertus vous aideront à remplir.");
        await this.pause(P);

        // Bijou et cordon — puis 4e tableau
        this.action("Le Député Maître fait conduire le candidat à l'Orient et lui remet le bijou et le cordon.");
        await this.processer('pion-m', D, WP[5]);
        await this.parler('D.M.', "Recevez de mes mains, mon cher Frère, le bijou caractéristique de votre grade, suspendu au bas de ce cordon vert liseré rouge. Ce bijou, que vous porterez désormais sur votre poitrine, vous rappellera ce que vous devez à l'Auteur de votre existence, à vous-même, à l'Ordre et à vos Frères. Au revers est une figure qui vous rappelle Saint André ; vous en recevrez bientôt l'explication. La couleur verte du cordon, symbole de l'espérance, vous indique que vous pouvez espérer de nouveaux secours de l'Ordre, si vous êtes fidèle à ses lois et à vos promesses. La couleur rouge dont il est rebordé vous désigne la condition essentielle qui vous est imposée d'un amour sincère pour vos Frères et d'une bienfaisance éclairée, active et universelle pour tous les hommes.");
        await this.parler('D.M.', "Jetez maintenant les yeux sur ce tableau. Vous y voyez un lion, sous un ciel chargé de nuages et d'éclairs, se reposant sous l'abri d'un rocher et jouant tranquillement avec des instruments de mathématiques, et ces deux mots pour devise : MELIORA PRAESUMO, qui signifient : 'J'entrevois de plus grandes choses'. Réfléchissez souvent sur ce symbole, afin que, par votre fidélité à remplir tous vos engagements, vous méritiez de reconnaître un jour que ce n'est pas en vain que vous aviez présumé de plus grandes choses.");
        await this.pause(P);

        // Le Député Maître rend le chapeau + 4e tableau
        this.action("Le Député Maître rend son chapeau au candidat. Les Surveillants le ramènent à l'Occident en face du dernier tableau.");
        await this.processer('pion-m', D, WP[1]);
        await this.parler('D.M.', "Mon cher Frère, le tableau qui est devant vous est le dernier qui vous sera offert ; il vous présente des objets nouveaux, auxquels vous devez tout votre respect. Les symboles ont disparu, comme on vous l'avait annoncé. C'est la vérité même qui s'offre à vos regards, quoiqu'encore légèrement voilée sous des formes allégoriques.");
        await this.parler('D.M.', "Vous y voyez un carré parfait, qui figure l'enceinte et les douze portes de la Nouvelle Jérusalem ; au milieu de cette enceinte, une montagne qui figure la Nouvelle Sion Céleste et, sur son sommet, l'Agneau triomphant, désigné par les lettres A.D. — Agnus Dei. Au bas du même tableau, vous voyez aussi une figure de Saint André, sur la croix qui caractérise ce patron spécial de la classe à laquelle vous appartenez aujourd'hui.");
        await this.parler('D.M.', "Je vous laisse ici, mon cher Frère, à vos propres réflexions. Asseyez-vous entre les Surveillants et prêtez une grande attention à la dernière instruction qui va vous être donnée. Elle terminera votre réception et en même temps votre initiation maçonnique.");
        this.action("Le Député Maître fait lire par le Frère Orateur l'instruction générale et finale du grade.");
        await this.pause(P * 3);
    },

    receptionMEInvestiture: async function() {
        this._setEtape("Réception M.É. — Investiture");
        const P = this.PAUSE_ACTION;
        const D = this.DUREE_WP;

        // Tronc des aumônes
        await this.parler('D.M.', "L'Ordre, vous le savez, mon Frère, doit son secours aux indigents. Allez vous présenter au Frère Éléemosynaire et mettez dans le tronc des aumônes ce que vous jugerez à propos.");
        this.action("Le candidat fait son offrande.");
        await this.pause(P);

        // Présentation aux Frères
        await this.parler('D.M.', "Frère Maître des Cérémonies, présentez ce Frère aux Officiers de la Loge pour qu'il en reçoive le baiser fraternel et soit reconnu.");
        this.action("Le MdC présente le nouveau Maître Écossais aux Officiers, à l'ex-Maître et aux Frères.");
        await this.pause(P * 2);

        // Placement définitif
        await this.parler('D.M.', "Allez maintenant prendre votre place dans notre Loge, mon Frère. Méditez sans cesse les instructions et les symboles qui vous ont été donnés ce jour.");
        await this.processer('pion-m', D, WP[6], { x: 1060, y: 380 });
        await this.pause(P);

        // Tour des colonnes et protocole
        await this.parler('D.M.', "Frères Surveillants, informez-vous, chacun sur votre colonne, si les Frères n'ont rien à proposer pour le bien de l'Ordre en général, ou pour cette loge en particulier.");
        await this.parler('1°S.', "Mes Frères, de la part du Respectable Député Maître, n'avez-vous rien à proposer pour le bien de l'Ordre en général, ou pour cette loge en particulier ?");
        await this.parler('2°S.', "Mes Frères, de la part du Respectable Député Maître, n'avez-vous rien à proposer pour le bien de l'Ordre en général, ou pour cette loge en particulier ?");
        await this.pause(P);
        await this.parler('D.M.', "Frère Secrétaire, lisez le protocole du jour.");
        this.action("Le Frère Secrétaire lit le protocole du jour.");
        await this.pause(P * 2);
    },

};


// ─── UTILITAIRES DEBUG ───────────────────────────────────────────────────────
function positionPion(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    const t = el.transform.baseVal;
    if (!t || t.length === 0) return null;
    const m = t.getItem(0).matrix;
    return { x: Math.round(m.e), y: Math.round(m.f) };
}

function positionsTous() {
    const ids = [
        'pion-vm','pion-ex-maitre','pion-orateur','pion-secretaire',
        'pion-tresorier','pion-eleemosynaire','pion-econome','pion-mc',
        'pion-1surv','pion-2surv',
        'pion-maitre1','pion-maitre2','pion-maitre3',
        'pion-maitre4','pion-maitre5','pion-maitre6','pion-maitre7',
        'pion-comp1','pion-comp2','pion-comp3','pion-comp4','pion-comp5',
        'pion-appr1','pion-appr2','pion-appr3','pion-appr4','pion-appr5',
        'pion-candidat'
    ];
    const result = {};
    ids.forEach(id => { result[id] = positionPion(id); });
    console.table(result);
    return result;
}

// ─── MUSIQUE ─────────────────────────────────────────────────────────────────
let _musiqueActive = true;
let _musiqueAudio = null;

function jouerMusique(fichier) {
    if (!_musiqueActive) return;
    if (_musiqueAudio) {
        _musiqueAudio.pause();
        _musiqueAudio.src = '';
        _musiqueAudio = null;
    }
    _musiqueAudio = new Audio('imusic/' + fichier);
    _musiqueAudio.volume = 0.6;
    _musiqueAudio.loop = false;
    _musiqueAudio.play().catch(() => {});
}

function arreterMusique(fondu = false) {
    if (!_musiqueAudio) return;
    if (!fondu) {
        _musiqueAudio.pause();
        _musiqueAudio = null;
        return;
    }
    const audio = _musiqueAudio;
    const tick = setInterval(() => {
        if (audio.volume > 0.05) {
            audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
            audio.pause();
            clearInterval(tick);
        }
    }, 100);
    _musiqueAudio = null;
}

function toggleMusique() {
    _musiqueActive = !_musiqueActive;
    const btn = document.getElementById('btn-musique');
    if (btn) {
        btn.textContent = '🎵 Musique : ' + (_musiqueActive ? 'ON' : 'OFF');
        btn.style.cssText = _musiqueActive
            ? 'padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#0d2a0d; color:#a0d4a0; border:1px solid #4a8a4a;'
            : 'padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#1a1a1a; color:#666; border:1px solid #444;';
    }
    if (!_musiqueActive) arreterMusique(true);
}

// ─── PAUSE / REPRENDRE ───────────────────────────────────────────────────────
function togglePause() {
    Rituel._paused = !Rituel._paused;
    const btn = document.getElementById('btn-pause');
    if (btn) {
        if (Rituel._paused) {
            btn.textContent = '▶ Reprendre';
            btn.style.cssText = 'padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#2a1a00; color:#ffaa44; border:1px solid #cc7700;';
        } else {
            btn.textContent = '⏸ Pause';
            btn.style.cssText = 'padding:6px 2px; cursor:pointer; border-radius:4px; font-size:0.75em; background:#1a1a0d; color:#cccc88; border:1px solid #666633;';
        }
    }
}

// ─── TAILLE DES BULLES ────────────────────────────────────────────────────────
function setTailleBulles(taille) {
    const tailles = { petit: ['12','14'], moyen: ['14','16'], grand: ['16','18'] };
    const [nom, texte] = tailles[taille];
    window._bulleTailleNom   = nom;
    window._bulleTailleTexte = texte;
    ['btn-taille-petit','btn-taille-moyen','btn-taille-grand'].forEach(id => {
        const b = document.getElementById(id);
        if (b) { b.style.background = '#1a1a1a'; b.style.color = '#666'; b.style.borderColor = '#444'; }
    });
    const btn = document.getElementById('btn-taille-' + taille);
    if (btn) { btn.style.background = '#2a2000'; btn.style.color = 'gold'; btn.style.borderColor = '#8b6914'; }
}
window._bulleTailleNom   = '14';
window._bulleTailleTexte = '16';

// ─── HALOS LUMINEUX SUR TOUTES LES FLAMMES ───────────────────────────────────
// Ajoute dynamiquement un halo en dégradé radial (centre lumineux → transparent)
// devant chaque flamme du plan SVG. Rayon = 3× la taille de la flamme.
// Classe .halo-flamme pour pouvoir les éteindre/rallumer avec obscurcir().
// Le pion-bougie a déjà son halo en dur dans le HTML.
(function ajouterHalosFlammes() {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.getElementById('loge-svg');
    if (!svg) return;

    // Créer le gradient radial partagé dans <defs>
    let defs = svg.querySelector('defs');
    if (!defs) { defs = document.createElementNS(ns, 'defs'); svg.prepend(defs); }

    const grad = document.createElementNS(ns, 'radialGradient');
    grad.setAttribute('id', 'grad-halo-flamme');
    grad.setAttribute('cx', '50%');
    grad.setAttribute('cy', '50%');
    grad.setAttribute('r', '50%');
    const stops = [
        { offset: '0%',   color: '#fff8e0', opacity: '0.9' },
        { offset: '15%',  color: '#ffcc00', opacity: '0.7' },
        { offset: '40%',  color: '#ff8800', opacity: '0.35' },
        { offset: '70%',  color: '#ff6600', opacity: '0.12' },
        { offset: '100%', color: '#ff4400', opacity: '0' },
    ];
    stops.forEach(s => {
        const stop = document.createElementNS(ns, 'stop');
        stop.setAttribute('offset', s.offset);
        stop.setAttribute('stop-color', s.color);
        stop.setAttribute('stop-opacity', s.opacity);
        grad.appendChild(stop);
    });
    defs.appendChild(grad);

    svg.querySelectorAll('ellipse[fill="url(#grad-flamme)"]').forEach(flame => {
        const cx = parseFloat(flame.getAttribute('cx')) || 0;
        const cy = parseFloat(flame.getAttribute('cy')) || 0;
        const ry = parseFloat(flame.getAttribute('ry')) || 4;

        const r = 180;

        const halo = document.createElementNS(ns, 'circle');
        halo.setAttribute('class', 'halo-flamme');
        halo.setAttribute('cx', String(cx));
        halo.setAttribute('cy', String(cy));
        halo.setAttribute('r', String(r));
        halo.setAttribute('fill', 'url(#grad-halo-flamme)');
        halo.setAttribute('opacity', '0');
        halo.setAttribute('pointer-events', 'none');

        // Pulsation d'opacité — durées randomisées
        const durO = (1.5 + Math.random() * 1.0).toFixed(2);
        const aO = document.createElementNS(ns, 'animate');
        aO.setAttribute('attributeName', 'opacity');
        aO.setAttribute('values', '0.5;0.85;0.45;0.80;0.5');
        aO.setAttribute('dur', durO + 's');
        aO.setAttribute('repeatCount', 'indefinite');
        halo.appendChild(aO);

        // Pulsation de rayon
        const durR = (1.8 + Math.random() * 1.0).toFixed(2);
        const dr = Math.max(3, Math.round(r * 0.25));
        const aR = document.createElementNS(ns, 'animate');
        aR.setAttribute('attributeName', 'r');
        aR.setAttribute('values', `${r};${r+dr};${r-2};${r+dr-1};${r}`);
        aR.setAttribute('dur', durR + 's');
        aR.setAttribute('repeatCount', 'indefinite');
        halo.appendChild(aR);

        // Insérer le halo juste avant la flamme dans son groupe parent
        flame.parentNode.insertBefore(halo, flame);
    });
})();
