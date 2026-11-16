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
  wide?: boolean
}

export interface BeforeAfterPair {
  type: 'before-after'
  before: ProjectImage
  after: ProjectImage
  caption: string
  captionEn: string
  description?: string
  descriptionEn?: string
}

export type Finish = Project | BeforeAfterPair

const img = (name: string) => `/img/${name}.jpg`

export const finitions: Finish[] = [
  {
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
  },
  {
    src: img('finition-bureau'),
    caption: 'Faux plafond blanc & plafond bleu',
    description: 'Création d’un faux plafond sur mesure et mise en peinture pour un rendu moderne et élégant',
    alt: 'Bureau avec plafond bleu et retombée courbe',
    captionEn: 'White suspended ceiling & blue ceiling',
    descriptionEn: 'A custom suspended ceiling and paint finish for a modern, elegant result',
    altEn: 'Office with a blue ceiling and curved soffit',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('finition-lattes'),
    caption: 'Lattes de bois — sol carrelé gris',
    alt: 'Pièce avec habillage en lattes de bois et sol carrelé gris',
    captionEn: 'Wood slats — grey tiled floor',
    altEn: 'Room with wood-slat cladding and grey tiled floor',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    // Le bas de l'image (sacs au sol) reste hors cadre.
    src: img('finition-accueil'),
    caption: 'Création et finition de l’accueil',
    description: 'Aménagement complet de l’espace accueil avec plafonds, habillages et finitions sur mesure.',
    alt: 'Zone d’accueil avec aplats de peinture rouge et bleu',
    captionEn: 'Reception area design and finishing',
    descriptionEn: 'Complete reception area fit-out with ceilings, cladding and custom finishes.',
    altEn: 'Reception area with red and blue blocks of colour',
    width: 768,
    height: 1024,
    ratio: '1 / 1',
    pos: '50% 28%',
  },
  {
    src: img('finition-salon'),
    caption: 'Création et finition d’un espace d’accueil',
    description: 'Ossature renforcée, plaques de plâtre, plafond et finitions décoratives',
    alt: 'Salon avec étagères intégrées et mobilier clair',
    captionEn: 'Creating and finishing a reception area',
    descriptionEn: 'Reinforced framing, plasterboard, ceiling and decorative finishes',
    altEn: 'Living room with built-in shelves and light-coloured furniture',
    width: 512,
    height: 341,
    ratio: '3 / 2',
  },
  {
    src: img('finition-moulures'),
    caption: 'Salon lumineux aux moulures élégantes',
    description: 'Tons blanc cassé et beige, pour une ambiance chic et chaleureuse',
    alt: 'Salon lumineux blanc avec moulures murales et parquet clair',
    captionEn: 'Bright living room with elegant mouldings',
    descriptionEn: 'Off-white and beige tones create a chic, welcoming atmosphere',
    altEn: 'Bright white living room with wall mouldings and light flooring',
    width: 1536,
    height: 1024,
    ratio: '3 / 2',
  },
  {
    type: 'before-after',
    before: {
      src: img('chantier-sejour'),
      alt: 'Séjour en plaques de plâtre avant enduit, avec couloir',
      altEn: 'Plasterboard living room before plastering, with hallway',
      width: 1024,
      height: 786,
      ratio: '16 / 9',
    },
    after: {
      src: img('hero-sejour'),
      alt: 'Séjour terminé avec parquet et éléments décoratifs',
      altEn: 'Finished living room with parquet flooring and decorative details',
      width: 1024,
      height: 682,
    },
    caption: 'Création de faux plafonds & éléments décoratifs',
    description: 'Travaux de plâtrerie et peinture sur mesure avec faux plafonds, encadrements et finitions soignées.',
    captionEn: 'Suspended ceilings & decorative features',
    descriptionEn: 'Custom plastering and painting with suspended ceilings, surrounds and carefully finished details.',
  },
  {
    type: 'before-after',
    before: {
      src: img('chantier-ouverture'),
      alt: 'Mur en plaques avec ouverture circulaire avant peinture',
      altEn: 'Plasterboard wall with circular opening before painting',
      width: 1024,
      height: 1024,
      ratio: '4 / 5',
      pos: '55% 50%',
    },
    after: {
      src: img('chantier-ouverture-noir'),
      alt: 'Mur décoratif noir avec ouverture circulaire blanche',
      altEn: 'Black feature wall with a white circular opening',
      width: 1024,
      height: 1024,
      ratio: '4 / 5',
    },
    caption: 'Réalisation d’un mur décoratif, alliant volumes, formes et finitions soignées',
    captionEn: 'A feature wall combining volume, shape and carefully finished details',
  },
]

export const chantiers: Project[] = [
  {
    src: img('chantier-combles'),
    caption: 'Faux plafond sur mesure & finitions',
    description: 'Création d’un faux plafond avec retombées et formes sur mesure, réalisé en plaques de plâtre pour une finition propre et contemporaine.',
    alt: 'Combles en cours de doublage en plaques de plâtre',
    captionEn: 'Custom suspended ceiling & finishing',
    descriptionEn: 'A custom plasterboard suspended ceiling with drops and shaped details for a clean, contemporary finish.',
    altEn: 'Attic being lined with plasterboard',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
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
  },
  {
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
  },
  {
    src: img('chantier-reseaux'),
    caption: 'Plafond ouvert — réseaux avant fermeture',
    alt: 'Plafond ouvert avec réseaux bleus avant fermeture en plaques',
    captionEn: 'Open ceiling — services before boarding',
    altEn: 'Open ceiling with blue service pipes before plasterboarding',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-plaques'),
    caption: 'Ossature renforcée & double parement',
    alt: 'Plafond en plaques de plâtre sur structure acier',
    captionEn: 'Reinforced framing & double layer',
    altEn: 'Plasterboard ceiling on a steel frame',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
]
