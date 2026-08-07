/* ═══════════════════════════════════════════════════════════════════════════
   CORRECTIF — CATÉCHISME DU GRADE DE COMPAGNON
   ───────────────────────────────────────────────────────────────────────────
   Fichier correctif NON destructif : il réassigne sur l'objet `Rituel` les
   méthodes du catéchisme de Compagnon, corrigées d'après la source officielle
   (Rituel de Compagnon — Monaco déc. 2022, Appendice II « Instruction par
   demandes et réponses »).

   POURQUOI : le code d'origine des trois sections était désaligné —
     • Section I  : la Q « connaissez-vous ces quatre vertus ? » avait perdu sa
                    vraie réponse (Justice + Tempérance) et récupéré à tort le
                    « Je l'ignore… » qui répond à « Quelles sont les deux autres
                    vertus ? » (question absente). Q « signe de l'Ordre en Loge »
                    manquante.
     • Section II : décalée d'un cran (réponses attribuées à la mauvaise
                    question) et plusieurs questions tronquées en plein milieu.
     • Section III: les deux premières Q/R manquaient, « circonférence : douze
                    coudées » était absente, et « parfaite explication /
                    symbole » étaient fusionnées.

   Le reste de la partie Compagnon (ouverture, clôture, réception : voyages,
   miroir, escalier/TEMPÉRANCE, serment, réception sur le compas, BOAZ/GIBELIN)
   a été vérifié FIDÈLE au rituel — voir CHANGELOG-compagnon.md pour deux notes
   mineures de chorégraphie.

   INTÉGRATION :
     Charger APRÈS scenarios.js, dans Loge_RER.html :
       <script src="scenarios.js"></script>
       <script src="refactor/scenarios-compagnon.corrige.js"></script>
     (Ou, à terme, remplacer les 4 méthodes correspondantes directement dans
      scenarios.js par celles ci-dessous.)
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (typeof Rituel === 'undefined') {
    console.warn('[correctif-compagnon] Rituel introuvable — charger après scenarios.js.');
    return;
  }

  /* ── DONNÉES — verbatim de l'Appendice II ─────────────────────────────────
     Chaque échange : ['V', question]  →  Vénérable Maître
                       ['R', réponse]   →  réponse (Surveillants, en alternance)
                       ['A', didascalie]→  geste (signe, attouchement…), non parlé */

  var SECTION_I = [
    ['V', "Êtes-vous Compagnon ?"],
    ['R', "Oui, je le suis."],
    ['V', "À quoi le connaîtrai-je ?"],
    ['R', "À mes nouveaux signes, attouchements, mots et paroles."],
    ['V', "Donnez-moi le signe de Compagnon."],
    ['A', "On donne le signe pectoral en entier."],
    ['V', "Donnez-moi l'attouchement."],
    ['A', "On le donne."],
    ['V', "Donnez-moi la parole."],
    ['R', "Je vous la donnerai comme je l'ai reçue."],
    ['V', "Donnez-moi la première lettre, je vous donnerai la seconde."],
    ['A', "On épelle le mot B."],
    ['V', "Que signifie cette parole ?"],
    ['R', "Le Seigneur est ma force."],
    ['V', "Quel est le nom du Compagnon qui lui sert de mot de reconnaissance ?"],
    ['R', "G."],
    ['V', "Que signifie ce mot ?"],
    ['R', "Expert tailleur de pierres."],
    ['V', "Pourquoi vous a-t-on donné ce mot ?"],
    ['R', "En mémoire des Gibloïtes, ou habitants de Giblos, qui étaient les plus habiles dans la coupe des pierres, et que Salomon employa pour tailler celles qui devaient être employées dans les fondements du Temple."],
    ['V', "Quel est le signe de l'Ordre en Loge ?"],
    ['R', "La main droite en équerre sur le cœur."],
    ['V', "Que signifie ce signe ?"],
    ['R', "Que les Maçons doivent garder fidèlement dans leur cœur tous les secrets et mystères de l'Ordre."],
    ['V', "Pourquoi vous êtes-vous fait recevoir Compagnon Maçon ?"],
    ['R', "Pour apprendre à connaître la lettre G."],
    ['V', "Où l'avez-vous vue ?"],
    ['R', "Au centre de l'Étoile Flamboyante."],
    ['V', "Que signifie-t-elle ?"],
    ['R', "Géométrie, ou cinquième des sciences."],
    ['V', "Où avez-vous été reçu Compagnon ?"],
    ['R', "À l'entrée du Temple, près de la colonne B qui est du côté du Midi."],
    ['V', "Comment y êtes-vous parvenu ?"],
    ['R', "Par la porte d'occident."],
    ['V', "Quel travail avez-vous fait pour être reçu ?"],
    ['R', "J'ai travaillé à polir la Pierre Brute."],
    ['V', "Que signifie-t-elle ?"],
    ['R', "L'homme dans l'état d'ignorance, et le chaos dont tout est provenu."],
    ['V', "Sur quoi avez-vous travaillé comme Compagnon ?"],
    ['R', "Sur la Pierre cubique."],
    ['V', "Que signifie-t-elle ?"],
    ['R', "La solidité des travaux des Maçons lorsqu'ils remplissent exactement les règles qui leur sont prescrites et les devoirs que l'Ordre leur impose."],
    ['V', "Comment le Maçon peut-il connaître et pratiquer ces règles et ces devoirs ?"],
    ['R', "L'univers lui en présente le tableau, et les conseils de ses Frères lui donnent les moyens de les remplir."],
    ['V', "Que signifient les quatre angles supérieurs de la Pierre cubique ?"],
    ['R', "L'universalité de l'Ordre, et les quatre parties du monde dans lesquelles il est répandu."],
    ['V', "Que signifient les quatre angles inférieurs ?"],
    ['R', "Les quatre vertus qui sont la base de l'Ordre."],
    ['V', "Compagnon, connaissez-vous ces quatre vertus ?"],
    ['R', "Comme Apprenti, j'ai reconnu qu'un vrai Maçon ne doit jamais s'écarter de la Justice, et comme Compagnon j'ai appris que sans la Tempérance il n'est point d'homme juste."],
    ['V', "Quelles sont les deux autres vertus ?"],
    ['R', "Je l'ignore, les Compagnons n'étant pas encore assez avancés pour pouvoir les pratiquer."],
    ['V', "À quoi la Pierre cubique sert-elle aux Compagnons ?"],
    ['R', "Pour aiguiser leurs outils, et préparer ceux des Apprentis."],
    ['V', "Comment avez-vous travaillé sur la Pierre cubique ?"],
    ['R', "Par deux fois trois coups, qui sont la batterie de mon grade."],
    ['V', "Que signifient les deux fois trois coups ?"],
    ['R', "La double loi imposée au Compagnon de remplir sa tâche exactement, sans aller au-delà, ni entreprendre des travaux réservés aux Maîtres."],
    ['V', "Comment parviendra-t-il à tenir ce juste milieu ?"],
    ['R', "En s'exerçant à pratiquer la vertu de son grade."],
    ['V', "Quels sont les instruments symboliques des Maçons ?"],
    ['R', "Le Compas, l'Équerre, le Niveau et la Perpendiculaire."],
    ['V', "Que signifient-ils ?"],
    ['R', "La droiture de notre cœur, la justesse de notre esprit, la pureté de nos actions, et le respect que nous devons au Grand Architecte de l'Univers."]
  ];

  var SECTION_II = [
    ['V', "Pouvez-vous m'expliquer les circonstances particulières de votre réception ?"],
    ['R', "Oui, Vénérable Maître."],
    ['V', "Pourquoi vous a-t-on interrogé sur l'instruction du grade d'Apprenti avant de vous conduire à la Loge des Compagnons ?"],
    ['R', "Pour s'assurer si, par mon application et mon travail, je méritais d'être avancé dans un grade plus élevé."],
    ['V', "Pourquoi avez-vous été conduit en Loge avec votre tablier, et les yeux découverts ?"],
    ['R', "Pour me faire sentir que j'étais déjà sur la bonne voie, et que je devais m'appliquer à la suivre."],
    ['V', "Où avez-vous été placé en entrant en Loge ?"],
    ['R', "Entre les deux Surveillants, que j'ai reconnus pour mes Frères, guides fidèles et vrais amis."],
    ['V', "Qu'ont-ils fait de vous ?"],
    ['R', "Le Vénérable Maître m'a permis d'entreprendre sous leur conduite les cinq voyages mystérieux autour des travaux du Temple, de l'Occident à l'Orient par le nord, ayant la pointe d'une épée nue sur le cœur."],
    ['V', "Avez-vous fait ces cinq voyages ?"],
    ['R', "Non, le Vénérable Maître, craignant ma faiblesse et voulant récompenser ma confiance, m'a dispensé des deux derniers, qui étaient les plus dangereux."],
    ['V', "Qu'avez-vous vu dans les trois voyages que vous avez faits ?"],
    ['R', "J'ai éprouvé les vices des métaux ; mais, docile aux conseils de mon guide, je les ai jetés à mes pieds hors de l'enceinte du Temple, et j'ai obtenu des maximes salutaires."],
    ['V', "Quels étaient ces métaux ?"],
    ['R', "Dans mon premier voyage j'ai trouvé l'argent au nord ; dans le second, l'airain au midi ; et dans le troisième, le fer à l'occident."],
    ['V', "Pourquoi ne vous a-t-on pas fait éprouver l'or, qui est le premier et le plus pur de tous les métaux ?"],
    ['R', "Parce que l'or étant à l'orient, les Apprentis et les Compagnons ne pourraient le découvrir."],
    ['V', "Pourquoi ne vous a-t-on pas fait connaître les autres métaux ?"],
    ['R', "Je ne sais, ayant été dispensé des deux derniers voyages."],
    ['V', "Pourquoi l'épée nue sur le cœur ?"],
    ['R', "Pour m'apprendre les dangers dont j'étais menacé en ne suivant pas les avis de mes guides et les maximes du Vénérable Maître."],
    ['V', "Que vous est-il arrivé ensuite ?"],
    ['R', "On m'a fait retourner contre l'occident, et on m'a mis à l'épreuve."],
    ['V', "En quoi consistait cette épreuve ?"],
    ['R', "On m'a fait arracher le voile qui me cachait mes propres défauts, pour m'apprendre à me connaître moi-même."],
    ['V', "Où avez-vous été conduit ensuite par les deux Surveillants ?"],
    ['R', "Ils m'ont fait monter par trois et par deux pas les cinq premières marches de l'escalier, où ils m'ont arrêté avec frayeur, voyant que j'étais indigne d'approcher des portes du Temple."],
    ['V', "Pourquoi étiez-vous indigne d'en approcher ?"],
    ['R', "Le Premier Surveillant m'a montré la Tempérance, qui décorait l'extérieur du sanctuaire, et j'ai reconnu aussitôt ma témérité, n'ayant pas encore pratiqué cette vertu."],
    ['V', "Qu'a-t-il donc fait de vous ?"],
    ['R', "Le Vénérable Maître lui a ordonné de me faire redescendre."],
    ['V', "Pourquoi vous a-t-il fait monter et ensuite redescendre ?"],
    ['R', "Pour me rapprocher de la lumière, connaître si je me soumettais courageusement à la vertu des Compagnons, et éprouver ensuite ma résignation."],
    ['V', "Quelle récompense avez-vous reçue ?"],
    ['R', "L'Étoile flamboyante m'a été montrée dans tout son éclat, avec la lettre G au milieu."],
    ['V', "Que signifie cette lettre ?"],
    ['R', "J'en connais peu la valeur, mais on m'a enseigné qu'elle signifiait Géométrie, ou la cinquième des sciences à laquelle un bon Maçon doit s'appliquer préférablement."],
    ['V', "Qu'êtes-vous devenu ensuite ?"],
    ['R', "On m'a conduit par trois pas maçonniques à l'autel d'Orient, où j'ai renouvelé mes premiers engagements."],
    ['V', "Pourquoi ce renouvellement ?"],
    ['R', "Pour m'apprendre qu'il ne suffit pas de prendre de bonnes résolutions, mais qu'il faut savoir y persister."],
    ['V', "Que vous a produit votre persévérance ?"],
    ['R', "De nouveaux signes, attouchements, mots et paroles, par lesquels j'ai été ensuite reconnu Compagnon par mes Frères."]
  ];

  var SECTION_III = [
    ['V', "Quelle différence y a-t-il entre le tapis des Compagnons et celui des Apprentis ?"],
    ['R', "Aucune autre, si ce n'est la lettre B sur la colonne à la gauche du Temple."],
    ['V', "Pourquoi n'aviez-vous pas aperçu plus tôt cette lettre sur la seconde colonne ?"],
    ['R', "Parce qu'il m'était défendu d'en approcher, ce qui n'est permis qu'aux Compagnons et non aux Apprentis, qui ne doivent pas chercher à connaître les choses qui sont au-dessus de leur grade."],
    ['V', "Combien y a-t-il de colonnes à l'entrée du Temple ?"],
    ['R', "Deux, en tout semblables, mais cependant distinguées par la première lettre du nom qui leur est attribué."],
    ['V', "Quelle était leur hauteur ?"],
    ['R', "Dix-huit coudées."],
    ['V', "De quelle hauteur étaient les fûts de ces colonnes ?"],
    ['R', "Douze coudées."],
    ['V', "De quelle hauteur les chapiteaux ?"],
    ['R', "Près de cinq coudées."],
    ['V', "Quelle était leur hauteur totale ?"],
    ['R', "Trente-cinq coudées."],
    ['V', "Quelle était leur circonférence ?"],
    ['R', "Douze coudées."],
    ['V', "Quelle était leur épaisseur ?"],
    ['R', "Quatre pouces."],
    ['V', "Pourquoi seulement cette épaisseur ?"],
    ['R', "Parce qu'elles étaient creuses."],
    ['V', "Quel était leur ornement ?"],
    ['R', "Elles soutenaient des globes sphériques ornés de lys et de grenades."],
    ['V', "Quel était leur usage pendant la construction du Temple ?"],
    ['R', "Elles servaient à renfermer les outils de Géométrie et le trésor pour payer les ouvriers suivant leur classe."],
    ['V', "Pouvez-vous m'en donner la parfaite explication ?"],
    ['R', "Je ne le puis, parce qu'elles renferment des mystères qui me sont encore inconnus, quoiqu'ils me soient indiqués par les noms qu'elles portent en Loge."],
    ['V', "Quel est le symbole de la Loge des Compagnons ?"],
    ['R', "Une Pierre cubique sur laquelle est posée une Équerre avec ces mots : Dirigit obliqua."],
    ['V', "Que signifient ce symbole et l'inscription ?"],
    ['R', "Le but et la perfection des travaux de l'Ordre."],
    ['V', "Quel âge avez-vous comme Compagnon ?"],
    ['R', "Cinq ans passés."],
    ['V', "Comment avez-vous acquis cet âge ?"],
    ['R', "En faisant les cinq voyages mystérieux autour des ouvrages, et en montant les cinq premières marches du Temple."],
    ['V', "Que signifie cet âge ?"],
    ['R', "Que j'ai appris à connaître les cinq ordres d'architecture."],
    ['V', "Quels sont-ils ?"],
    ['R', "L'Ionique, le Dorique, le Corinthien, le Romain et le Composite."],
    ['V', "Quels rapports y a-t-il entre les ordres d'architecture et les travaux mystérieux des Maçons ?"],
    ['R', "Comme la connaissance des cinq ordres d'architecture est nécessaire à un architecte pour exercer son art, de même aussi les Maçons ne doivent négliger d'acquérir aucune des connaissances qui peuvent contribuer à la perfection de leurs travaux."],
    ['V', "Avez-vous été payé de votre travail ?"],
    ['R', "Oui, Vénérable Maître."],
    ['V', "Où avez-vous reçu votre salaire ?"],
    ['R', "À la colonne B, à la gauche du Temple, où s'assemblaient les Compagnons pour y recevoir le leur."],
    ['V', "Combien avez-vous reçu ?"],
    ['R', "Je connais la signification de la lettre B et je suis content."]
  ];

  /* ── RÉCITATEUR — suit la convention (frapper, parler, action, pause) ────────
     Le Vénérable Maître pose les questions ; les réponses alternent 1°S / 2°S,
     comme dans le code d'origine. Les gestes passent par this.action(). */
  async function reciter(titre, echanges) {
    await this.frapper('V.M.', 'O');
    this.action(titre);
    await this.pause(this.PAUSE_ACTION);
    var surv = 0;
    for (var i = 0; i < echanges.length; i++) {
      var type = echanges[i][0], txt = echanges[i][1];
      if (type === 'V')      await this.parler('V.M.', txt);
      else if (type === 'A') this.action('(' + txt + ')');
      else { await this.parler(surv % 2 === 0 ? '1°S.' : '2°S.', txt); surv++; }
      await this.pause(200);
    }
  }

  Object.assign(Rituel, {
    catechismeCompagnonSection_premiere_section: async function () {
      this._setEtape("Catéchisme Compagnon — Sect. I");
      await reciter.call(this, "Première section du catéchisme de Compagnon.", SECTION_I);
      await this.frapper('V.M.', 'O');
      await this.parler('V.M.', "Ainsi se termine la première section.");
    },

    catechismeCompagnonSection_deuxieme_section: async function () {
      this._setEtape("Catéchisme Compagnon — Sect. II");
      await reciter.call(this, "Deuxième section du catéchisme de Compagnon.", SECTION_II);
      await this.frapper('V.M.', 'O');
      await this.parler('V.M.', "Ainsi se termine la deuxième section.");
    },

    catechismeCompagnonSection_troisieme_section: async function () {
      this._setEtape("Catéchisme Compagnon — Sect. III");
      await reciter.call(this, "Troisième section du catéchisme de Compagnon.", SECTION_III);
      await this.parler('V.M.', "Mes Frères, apprenons à nous bien connaître, travaillons sans relâche à polir la Pierre brute, venons souvent contempler l'Étoile flamboyante, puisque c'est le moyen de parvenir un jour à connaître les mystères qui nous sont encore voilés.");
      await this.frapper('V.M.', 'O');
      await this.parler('V.M.', "L'instruction par demandes et réponses est terminée. Je remercie les Frères Surveillants.");
    },

    // Enchaîne les trois sections. La clôture (coup + remerciement aux
    // Surveillants) est reprise telle quelle de scenarios.js : elle manquait
    // dans la première version de ce correctif, qui l'aurait donc supprimée.
    catechismeCompagnon: async function () {
      this._setEtape("Catéchisme de Compagnon");
      await this.frapper('V.M.', 'O');
      await this.parler('V.M.', "Mes Frères, nous allons procéder à l'instruction par demandes et réponses du grade de Compagnon.");
      await this.pause(this.PAUSE_ACTION);
      await this.catechismeCompagnonSection_premiere_section();
      await this.catechismeCompagnonSection_deuxieme_section();
      await this.catechismeCompagnonSection_troisieme_section();
      await this.frapper('V.M.', 'O');
      await this.parler('V.M.', "L'instruction par demandes et réponses est terminée. Je remercie les Frères Surveillants.");
    }
  });

  console.info('[correctif-compagnon] Catéchisme de Compagnon corrigé et chargé.');
})();
