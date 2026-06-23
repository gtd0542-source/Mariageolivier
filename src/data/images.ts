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
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156253/468222480_554831497265599_3375170453605278998_n_cc4vw5.jpg",
      alt: "Le Complexe Mundi au coucher du soleil",
      width: 1352,
      height: 902,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156252/6529c4482b166_1697236040_Complexe_Mundi_2_ptkmvv.jpg",
      alt: "Le bâtiment principal du Complexe Mundi",
      width: 480,
      height: 480,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156244/Bienvenue_au_complexe_Mundi_situ%C3%A9_sur_la_route_de_Nsimalen_%C3%A0_Yaound%C3%A9_Credit_-__the_student_pho_4_fenppf.jpg",
      alt: "Piscine et jardins du Complexe Mundi",
      width: 1080,
      height: 720,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156300/206a5211_n5w7wo.jpg",
      alt: "Espace de réception au bord de la piscine",
      width: 4464,
      height: 2976,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156245/Bienvenue_au_complexe_Mundi_situ%C3%A9_sur_la_route_de_Nsimalen_%C3%A0_Yaound%C3%A9_Credit_-__the_student_pho_3_rd3f1s.jpg",
      alt: "Architecture du Complexe Mundi",
      width: 1080,
      height: 720,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156243/6529c671372d7_1697236593_Complexe_Mundi_10_x5xuhx.jpg",
      alt: "Espace restauration en plein air",
      width: 480,
      height: 390,
    },
  ] satisfies ImageAsset[],

  ogImage: {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    alt: "Olivier et Céline — 20 Février 2027",
    width: 1200,
    height: 630,
  } satisfies ImageAsset,
};
