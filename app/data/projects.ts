export interface Project {
  src: string
  caption: string
  alt: string
  captionEn: string
  altEn: string
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
    captionEn: 'Perforated acoustic ceiling',
    altEn: 'Cafeteria with a perforated acoustic ceiling',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('finition-bureau'),
    caption: 'Plafond bleu et retombée courbe',
    alt: 'Bureau avec plafond bleu et retombée courbe',
    captionEn: 'Blue ceiling and curved soffit',
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
    caption: 'Accueil — aplats de peinture',
    alt: 'Zone d’accueil avec aplats de peinture rouge et bleu',
    captionEn: 'Reception — blocks of colour',
    altEn: 'Reception area with red and blue blocks of colour',
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
    captionEn: 'Plasterboard partitions — service wall and hallway',
    altEn: 'Plasterboard living room before plastering, with hallway',
    width: 1024,
    height: 786,
    ratio: '16 / 9',
    wide: true,
  },
  {
    src: img('chantier-combles'),
    caption: 'Combles — pose des plaques',
    alt: 'Combles en cours de doublage en plaques de plâtre',
    captionEn: 'Attic — plasterboard installation',
    altEn: 'Attic being lined with plasterboard',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-ouverture'),
    caption: 'Ouverture circulaire — avant peinture',
    alt: 'Mur en plaques avec ouverture circulaire avant peinture',
    captionEn: 'Circular opening — before painting',
    altEn: 'Plasterboard wall with circular opening before painting',
    width: 1024,
    height: 1024,
    ratio: '4 / 5',
    pos: '55% 50%',
  },
  {
    src: img('chantier-plancher'),
    caption: 'Plafond suspendu — ossature et premières plaques',
    alt: 'Ossature métallique de plafond suspendu avec premières plaques',
    captionEn: 'Suspended ceiling — frame and first boards',
    altEn: 'Suspended ceiling metal frame with the first plasterboards installed',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-ossature'),
    caption: 'Ossature métallique du plafond',
    alt: 'Rails métalliques d’un plafond suspendu',
    captionEn: 'Metal ceiling frame',
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
    src: img('chantier-fourrures'),
    caption: 'Fourrures et suspentes',
    alt: 'Fourrures et suspentes avant pose des plaques',
    captionEn: 'Ceiling channels and hangers',
    altEn: 'Ceiling channels and hangers before plasterboard installation',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
  {
    src: img('chantier-plaques'),
    caption: 'Plafond en plaques sur structure acier',
    alt: 'Plafond en plaques de plâtre sur structure acier',
    captionEn: 'Plasterboard ceiling on a steel frame',
    altEn: 'Plasterboard ceiling on a steel frame',
    width: 768,
    height: 1024,
    ratio: '4 / 5',
  },
]
