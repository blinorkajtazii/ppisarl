export interface Project {
  src: string
  caption: string
  alt: string
  width: number
  height: number
  ratio?: string
  pos?: string
  wide?: boolean
}

const img = (name: string) => `/img/${name}.jpg`

export const finitions: Project[] = [
  {
    src: img('finition-cafeteria'),
    caption: 'Faux plafond acoustique perforé',
    alt: 'Cafétéria avec faux plafond acoustique perforé',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('finition-bureau'),
    caption: 'Plafond bleu et retombée courbe',
    alt: 'Bureau avec plafond bleu et retombée courbe',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('finition-lattes'),
    caption: 'Lattes de bois — sol carrelé gris',
    alt: 'Pièce avec habillage en lattes de bois et sol carrelé gris',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    // Le bas de l'image (sacs au sol) reste hors cadre.
    src: img('finition-accueil'),
    caption: 'Accueil — aplats de peinture',
    alt: 'Zone d’accueil avec aplats de peinture rouge et bleu',
    width: 768,
    height: 1024,
    ratio: '1 / 1',
    pos: '50% 28%',
  },
]

export const chantiers: Project[] = [
  {
    src: img('chantier-sejour'),
    caption: 'Cloisons en plaques — mur technique et couloir',
    alt: 'Séjour en plaques de plâtre avant enduit, avec couloir',
    width: 1024,
    height: 786,
    ratio: '16 / 9',
    wide: true,
  },
  {
    src: img('chantier-combles'),
    caption: 'Combles — pose des plaques',
    alt: 'Combles en cours de doublage en plaques de plâtre',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-ouverture'),
    caption: 'Ouverture circulaire — avant peinture',
    alt: 'Mur en plaques avec ouverture circulaire avant peinture',
    width: 1024,
    height: 1024,
    ratio: '4 / 5',
    pos: '55% 50%',
  },
  {
    src: img('chantier-plancher'),
    caption: 'Plafond suspendu — ossature et premières plaques',
    alt: 'Ossature métallique de plafond suspendu avec premières plaques',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-ossature'),
    caption: 'Ossature métallique du plafond',
    alt: 'Rails métalliques d’un plafond suspendu',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-reseaux'),
    caption: 'Plafond ouvert — réseaux avant fermeture',
    alt: 'Plafond ouvert avec réseaux bleus avant fermeture en plaques',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-fourrures'),
    caption: 'Fourrures et suspentes',
    alt: 'Fourrures et suspentes avant pose des plaques',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-plaques'),
    caption: 'Plafond en plaques sur structure acier',
    alt: 'Plafond en plaques de plâtre sur structure acier',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
]
