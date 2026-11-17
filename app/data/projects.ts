export interface ProjectImage {
  src: string
  alt: string
  altEn: string
  width: number
  height: number
  ratio?: string
  pos?: string
}

export interface Project extends ProjectImage {
  type?: 'photo'
  caption: string
  captionEn: string
  description?: string
  descriptionEn?: string
}

export interface BeforeAfterPair {
  type: 'before-after'
  id: string
  switcherLabel: string
  before: ProjectImage
  after: ProjectImage
  ratio: string
  caption: string
  captionEn: string
  description?: string
  descriptionEn?: string
}

export type Finish = Project | BeforeAfterPair

const img = (name: string) => `/img/${name}.jpg`

export const pairs: BeforeAfterPair[] = [
  {
    type: 'before-after',
    id: 'sejour',
    switcherLabel: 'Séjour',
    before: {
      src: img('chantier-sejour'),
      alt: 'Séjour en plaques de plâtre avant enduit, avec couloir',
      altEn: 'Plasterboard living room before plastering, with hallway',
      width: 1024,
      height: 786,
      ratio: '4 / 5',
      pos: '50% 50%',
    },
    after: {
      src: img('hero-sejour'),
      alt: 'Séjour terminé avec parquet et éléments décoratifs',
      altEn: 'Finished living room with parquet flooring and decorative details',
      width: 1024,
      height: 682,
      ratio: '4 / 5',
      pos: '50% 50%',
    },
    ratio: '3 / 2',
    caption: 'Création de faux plafonds & éléments décoratifs',
    description: 'Travaux de plâtrerie et peinture sur mesure avec faux plafonds, encadrements et finitions soignées.',
    captionEn: 'Suspended ceilings & decorative features',
    descriptionEn: 'Custom plastering and painting with suspended ceilings, surrounds and carefully finished details.',
  },
  {
    type: 'before-after',
    id: 'mur-decoratif',
    switcherLabel: 'Mur décoratif',
    before: {
      src: img('chantier-ouverture'),
      alt: 'Mur en plaques avec ouverture circulaire avant peinture',
      altEn: 'Plasterboard wall with circular opening before painting',
      width: 1024,
      height: 1024,
      ratio: '4 / 5',
      pos: '55% 48%',
    },
    after: {
      src: img('chantier-ouverture-noir'),
      alt: 'Mur décoratif noir avec ouverture circulaire blanche',
      altEn: 'Black feature wall with a white circular opening',
      width: 1254,
      height: 1254,
      ratio: '4 / 5',
      pos: '50% 50%',
    },
    ratio: '3 / 2',
    caption: 'Réalisation d’un mur décoratif, alliant volumes, formes et finitions soignées',
    captionEn: 'A feature wall combining volume, shape and carefully finished details',
  },
]

export const finitions: Finish[] = [
  {
    type: 'photo',
    src: img('finition-cafeteria'),
    caption: 'Faux plafond acoustique perforé',
    description: 'Une solution élégante pour améliorer le confort acoustique et l’esthétique des espaces professionnels',
    alt: 'Cafétéria avec faux plafond acoustique perforé',
    captionEn: 'Perforated acoustic ceiling',
    descriptionEn: 'An elegant solution to improve acoustic comfort and the look of professional spaces',
    altEn: 'Cafeteria with a perforated acoustic ceiling',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 38%',
  },
  {
    type: 'photo',
    src: img('presta-faux-plafonds'),
    caption: 'Faux plafond blanc & plafond bleu',
    description: 'Création d’un faux plafond sur mesure et mise en peinture pour un rendu moderne et élégant',
    alt: 'Bureau avec plafond bleu et retombée courbe',
    captionEn: 'White suspended ceiling & blue ceiling',
    descriptionEn: 'A custom suspended ceiling and paint finish for a modern, elegant result',
    altEn: 'Office with a blue ceiling and curved soffit',
    width: 1086,
    height: 1448,
    ratio: '4 / 5',
    pos: '50% 38%',
  },
  {
    type: 'photo',
    src: img('finition-lattes'),
    caption: 'Pose de plafonds suspendus en dalles',
    description: 'Ce type de plafond apporte une finition esthétique et fonctionnelle tout en permettant de dissimuler les installations techniques et de faciliter leur accès.',
    alt: 'Pièce avec plafonds suspendus en dalles',
    captionEn: 'Suspended ceiling tile installation',
    descriptionEn: 'This type of ceiling provides an aesthetic, functional finish while concealing technical installations and making them easier to access.',
    altEn: 'Room with suspended ceiling tiles',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 50%',
  },
  {
    type: 'photo',
    src: img('finition-accueil'),
    caption: 'Création et finition de l’accueil',
    description: 'Aménagement complet de l’espace accueil avec plafonds, habillages et finitions sur mesure.',
    alt: 'Zone d’accueil avec aplats de peinture rouge et bleu',
    captionEn: 'Reception area design and finishing',
    descriptionEn: 'Complete reception area fit-out with ceilings, cladding and custom finishes.',
    altEn: 'Reception area with red and blue blocks of colour',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 28%',
  },
  {
    type: 'photo',
    src: img('finition-salon'),
    caption: 'Création et finition d’un espace d’accueil',
    description: 'Ossature renforcée, plaques de plâtre, plafond et finitions décoratives',
    alt: 'Salon avec étagères intégrées en bois',
    captionEn: 'Creating and finishing a reception area',
    descriptionEn: 'Reinforced framing, plasterboard, ceiling and decorative finishes',
    altEn: 'Living room with built-in wooden shelves',
    width: 1174,
    height: 783,
    ratio: '4 / 5',
    pos: '50% 50%',
  },
  {
    type: 'photo',
    src: img('finition-moulures'),
    caption: 'Salon lumineux aux moulures élégantes',
    description: 'Tons blanc cassé et beige, pour une ambiance chic et chaleureuse',
    alt: 'Salon aux moulures blanches',
    captionEn: 'Bright living room with elegant mouldings',
    descriptionEn: 'Off-white and beige tones create a chic, welcoming atmosphere',
    altEn: 'Bright living room with white wall mouldings',
    width: 1536,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 48%',
  },
  ...pairs,
]

export const chantiers: Project[] = [
  {
    type: 'photo',
    src: img('chantier-combles'),
    caption: 'Faux plafond sur mesure & finitions',
    description: 'Création d’un faux plafond avec retombées et formes sur mesure, réalisé en plaques de plâtre pour une finition propre et contemporaine.',
    alt: 'Combles en cours de doublage en plaques de plâtre',
    captionEn: 'Custom suspended ceiling & finishing',
    descriptionEn: 'A custom plasterboard suspended ceiling with drops and shaped details for a clean, contemporary finish.',
    altEn: 'Attic being lined with plasterboard',
    width: 1086,
    height: 1448,
    ratio: '4 / 5',
    pos: '50% 40%',
  },
  {
    type: 'photo',
    src: img('chantier-plancher'),
    caption: 'Plafond suspendu en plaques de plâtre',
    description: 'Pose des premières plaques pour la création d’un plafond suspendu.',
    alt: 'Ossature métallique de plafond suspendu avec premières plaques',
    captionEn: 'Plasterboard suspended ceiling',
    descriptionEn: 'Installing the first boards to create a suspended ceiling.',
    altEn: 'Suspended ceiling metal frame with the first plasterboards installed',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 43%',
  },
  {
    type: 'photo',
    src: img('chantier-ossature'),
    caption: 'Structure métallique de plafond',
    description: 'Mise en place d’une structure métallique pour la réalisation d’un plafond.',
    alt: 'Rails métalliques d’un plafond suspendu',
    captionEn: 'Metal ceiling structure',
    descriptionEn: 'Installing a metal structure to build a ceiling.',
    altEn: 'Metal framework for a suspended ceiling',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 42%',
  },
  {
    type: 'photo',
    src: img('chantier-reseaux'),
    caption: 'Plafond ouvert — réseaux avant fermeture',
    alt: 'Plafond ouvert avec réseaux bleus avant fermeture en plaques',
    captionEn: 'Open ceiling — services before boarding',
    altEn: 'Open ceiling with blue service pipes before plasterboarding',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 38%',
  },
  {
    type: 'photo',
    src: img('chantier-plaques'),
    caption: 'Ossature renforcée & double parement',
    alt: 'Plafond en plaques de plâtre sur structure acier',
    captionEn: 'Reinforced framing & double layer',
    altEn: 'Plasterboard ceiling on a steel frame',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
    pos: '50% 42%',
  },
]
