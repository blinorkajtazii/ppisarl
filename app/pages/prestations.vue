<script setup lang="ts">
const { copy } = useLanguage()

useSeoMeta({
  title: computed(() => `${copy.value.common.services} | PPI Plâtrerie Peinture`),
  description: computed(() => copy.value.services.lead),
})
useMotion()

interface Service {
  kicker: string
  id: string
  title: {
    regular: string
    muted: string
  }
  intro: [string, string]
  listTitle: string
  items: string[]
  outro: string
  image: {
    src: string
    alt: string
    width: number
    height: number
    ratio: string
  }
}

const services: Service[] = [
  {
    kicker: '01 / PLÂTRERIE',
    id: 'platrerie',
    title: { regular: 'Donner forme', muted: 'à vos espaces.' },
    intro: [
      'La plâtrerie joue un rôle essentiel dans l’aménagement et la transformation de vos intérieurs. Nous réalisons des travaux de plâtrerie adaptés à vos besoins, en accordant une attention particulière à la précision de l’exécution et à la qualité des finitions.',
      'De la création de nouvelles séparations à la préparation des surfaces, nous mettons notre savoir-faire au service d’espaces fonctionnels, harmonieux et soigneusement réalisés.',
    ],
    listTitle: 'Nos prestations en plâtrerie :',
    items: [
      'Pose de plaques de plâtre (Placo)',
      'Création, modification et suppression de cloisons',
      'Réalisation de cloisons de séparation et de distribution',
      'Doublage et habillage des murs',
      'Création de faux plafonds et plafonds suspendus',
      'Réalisation de plafonds et contre-cloisons',
      'Coffrages et habillages techniques',
      'Création de niches, retombées et éléments décoratifs',
      'Isolation thermique et acoustique intégrée aux systèmes de plâtrerie',
      'Réparation et rénovation des surfaces en plâtre',
      'Rebouchage, lissage et préparation des supports avant peinture',
    ],
    outro: 'Chaque réalisation est exécutée avec soin afin d’obtenir des surfaces régulières, des volumes bien définis et un résultat prêt à recevoir les finitions.',
    image: {
      src: '/img/presta-platrerie.jpg',
      alt: 'Pièce aux cloisons en plaques de plâtre',
      width: 1254,
      height: 1254,
      ratio: '1 / 1',
    },
  },
  {
    kicker: '02 / PEINTURE INTÉRIEURE',
    id: 'peinture',
    title: { regular: 'Révéler le caractère', muted: 'de vos intérieurs.' },
    intro: [
      'La peinture apporte la touche finale à un intérieur et contribue pleinement à son atmosphère. Nous accordons une attention particulière à chaque étape, de la préparation des supports jusqu’à l’application de la peinture, afin de garantir un rendu harmonieux, uniforme et soigné.',
      'Nous vous accompagnons dans le choix des couleurs et des finitions pour mettre en valeur vos espaces, rafraîchir votre intérieur ou donner vie à une nouvelle ambiance.',
    ],
    listTitle: 'Nos prestations en peinture intérieure :',
    items: [
      'Peinture des murs et des plafonds',
      'Préparation et protection des surfaces',
      'Rebouchage des trous et réparation des imperfections',
      'Ponçage, enduisage et lissage des supports',
      'Application de sous-couches et impressions',
      'Mise en peinture des boiseries, portes et encadrements',
      'Peinture des radiateurs et autres éléments intérieurs adaptés',
      'Rafraîchissement et rénovation des peintures existantes',
      'Finitions mates, satinées et veloutées',
      'Travaux de peinture décorative selon le projet',
      'Harmonisation des couleurs et conseils dans le choix des teintes',
    ],
    outro: 'Chaque intervention est réalisée avec soin et précision pour obtenir des finitions de qualité, adaptées à votre intérieur et à vos attentes.',
    image: {
      src: '/img/presta-peinture.jpg',
      alt: 'Mur noir avec ouverture circulaire',
      width: 1536,
      height: 1024,
      ratio: '3 / 2',
    },
  },
  {
    kicker: '03 / FAUX PLAFONDS',
    id: 'faux-plafonds',
    title: { regular: 'Sublimer vos espaces', muted: 'en hauteur.' },
    intro: [
      'Le faux plafond permet de transformer un intérieur, de structurer les volumes et d’apporter une nouvelle dimension à vos espaces. Nous réalisons des solutions adaptées à la configuration de vos pièces, à vos besoins techniques et à l’esthétique souhaitée.',
      'Qu’il s’agisse de créer un plafond suspendu, d’intégrer un éclairage ou de dissimuler des installations techniques, chaque réalisation est étudiée avec soin afin d’allier fonctionnalité, harmonie et qualité de finition.',
    ],
    listTitle: 'Nos prestations en faux plafonds :',
    items: [
      'Réalisation de faux plafonds en plaques de plâtre',
      'Pose de plafonds suspendus sur ossature métallique',
      'Création de plafonds à différents niveaux',
      'Réalisation de retombées de plafond et de jouées',
      'Création de coffrages et d’habillages techniques',
      'Intégration de spots et de luminaires encastrés',
      'Aménagement de réservations pour l’éclairage et les installations techniques',
      'Intégration de solutions d’isolation thermique et acoustique',
      'Réalisation de plafonds décoratifs et personnalisés',
    ],
    outro: 'Chaque projet fait l’objet d’une attention particulière, de la conception à la finition, pour obtenir un résultat propre, harmonieux et parfaitement intégré à votre intérieur.',
    image: {
      src: '/img/presta-faux-plafonds.jpg',
      alt: 'Faux plafond blanc courbe et plafond bleu',
      width: 1086,
      height: 1448,
      ratio: '3 / 4',
    },
  },
  {
    kicker: '04 / ENDUITS & RATISSAGE',
    id: 'enduits',
    title: { regular: 'Soigner les surfaces', muted: 'jusqu’au moindre détail.' },
    intro: [
      'La qualité d’une finition dépend avant tout de la préparation de son support. Nous apportons un soin particulier au traitement des murs et des plafonds afin d’obtenir des surfaces lisses, régulières et prêtes à recevoir leur finition.',
      'Grâce à des techniques adaptées à chaque support, nous corrigeons les irrégularités, éliminons les imperfections et préparons les surfaces avec précision pour garantir un résultat harmonieux et durable.',
    ],
    listTitle: 'Nos prestations en enduits et ratissage :',
    items: [
      'Application d’enduits de lissage sur murs et plafonds',
      'Ratissage complet des surfaces',
      'Rebouchage des trous, fissures et imperfections',
      'Réparation des surfaces dégradées',
      'Correction des irrégularités et défauts de planéité',
      'Enduisage des joints et raccords entre plaques de plâtre',
      'Ponçage et dépoussiérage des surfaces',
      'Application d’enduits de finition',
      'Préparation des supports avant mise en peinture',
    ],
    outro: 'Chaque étape est réalisée avec minutie afin d’obtenir un support propre, homogène et parfaitement préparé pour accueillir la peinture.',
    image: {
      src: '/img/presta-enduits.jpg',
      alt: 'Couloir enduit et ponçage des murs',
      width: 1536,
      height: 1024,
      ratio: '3 / 2',
    },
  },
]
</script>

<template>
  <div>
    <PageHero
      :kicker="copy.services.kicker"
      :lead="copy.services.lead"
      :img="{ src: '/img/chantier-sejour.jpg', alt: copy.services.image, width: 1024, height: 786, pos: '50% 45%' }"
    >
      <template #title>{{ copy.services.title }} <em>{{ copy.services.titleEmphasis }}</em></template>
    </PageHero>

    <section class="wrap services" style="padding-top: clamp(32px, 6vw, 96px)">
      <article v-for="service in services" :id="service.id" :key="service.id" class="service">
        <div class="service__text">
          <p class="label" data-reveal>{{ service.kicker }}</p>
          <h2 class="title" data-reveal data-delay="0.05">
            {{ service.title.regular }} <em>{{ service.title.muted }}</em>
          </h2>
          <p v-for="paragraph in service.intro" :key="paragraph" class="service__intro" data-reveal>
            {{ paragraph }}
          </p>
          <h3 class="service__list-title" data-reveal>{{ service.listTitle }}</h3>
          <ul class="service__list" data-reveal>
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
          <p class="service__outro" data-reveal>{{ service.outro }}</p>
        </div>
        <PhotoFrame
          v-bind="service.image"
          class="service__image"
          zoom
        />
      </article>
    </section>

    <div style="height: clamp(48px, 8vw, 120px)" />
    <ContactBand />
  </div>
</template>
