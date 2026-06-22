// Registre central de toutes les images du site.
// Pour remplacer une image : changez uniquement son `src` ci-dessous.
// Les URLs actuelles sont des placeholders libres de droits (Unsplash) en attendant les photos retouchées.

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** true = aucune photo fiable trouvée ; un visuel de remplacement (dégradé) est affiché à la place. */
  placeholder?: boolean;
};

export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2400&auto=format&fit=crop",
    alt: "Olivier et Céline",
    width: 2400,
    height: 1600,
  } satisfies ImageAsset,

  story: [
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
      alt: "Olivier et Céline, leur rencontre",
      width: 1600,
      height: 2000,
    },
    {
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600&auto=format&fit=crop",
      alt: "Olivier et Céline, un moment complice",
      width: 1600,
      height: 2000,
    },
    {
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1600&auto=format&fit=crop",
      alt: "Olivier et Céline, la demande",
      width: 1600,
      height: 2000,
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop",
      alt: "Olivier et Céline, vers le grand jour",
      width: 1600,
      height: 2000,
    },
  ] satisfies ImageAsset[],

  accommodation: {
    standard: {
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1600&auto=format&fit=crop",
      alt: "Chambre Standard du Complexe Mundi",
      width: 1600,
      height: 1067,
    } satisfies ImageAsset,
    premium: {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1600&auto=format&fit=crop",
      alt: "Chambre Premium du Complexe Mundi",
      width: 1600,
      height: 1067,
    } satisfies ImageAsset,
    suite: {
      src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1600&auto=format&fit=crop",
      alt: "Suite du Complexe Mundi",
      width: 1600,
      height: 1067,
    } satisfies ImageAsset,
  },

  traditions: {
    outfits: [
      {
        src: "",
        alt: "Tenue traditionnelle — photo à venir",
        width: 1600,
        height: 2000,
        placeholder: true,
      },
      {
        src: "",
        alt: "Tenue traditionnelle — photo à venir",
        width: 1600,
        height: 2000,
        placeholder: true,
      },
    ] satisfies ImageAsset[],
    menu: [
      {
        src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=1600&auto=format&fit=crop",
        alt: "Plat traditionnel",
        width: 1600,
        height: 1067,
      },
      {
        src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1600&auto=format&fit=crop",
        alt: "Plat traditionnel",
        width: 1600,
        height: 1067,
      },
      {
        src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1600&auto=format&fit=crop",
        alt: "Plat traditionnel",
        width: 1600,
        height: 1067,
      },
    ] satisfies ImageAsset[],
  },

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop",
      alt: "Complexe Mundi, vue d'ensemble",
      width: 1600,
      height: 1067,
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
      alt: "Le complexe en soirée",
      width: 1600,
      height: 1067,
    },
    {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop",
      alt: "Jardins du Complexe Mundi",
      width: 1600,
      height: 1067,
    },
    {
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop",
      alt: "Espace de réception",
      width: 1600,
      height: 1067,
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop",
      alt: "Chambre du complexe",
      width: 1600,
      height: 1067,
    },
    {
      src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1600&auto=format&fit=crop",
      alt: "Site touristique à proximité",
      width: 1600,
      height: 1067,
    },
  ] satisfies ImageAsset[],

  ogImage: {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    alt: "Olivier et Céline — 20 Février 2027",
    width: 1200,
    height: 630,
  } satisfies ImageAsset,
};
