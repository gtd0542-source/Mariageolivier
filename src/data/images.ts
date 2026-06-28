// Registre central de toutes les images du site.
// Pour remplacer une image : changez uniquement son `src` ci-dessous.
// Les photos de Céline & Olivier, du Complexe Mundi, des tenues et du menu sont les vraies photos fournies.
// Les chambres (accommodation) restent en placeholders Unsplash en attendant de vraies photos.

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
    src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_2400/v1782648392/rend_cette_image_en_1920x1080_202606241030_exeqju.jpg",
    alt: "Céline et Olivier",
    width: 1901,
    height: 1060,
  } satisfies ImageAsset,

  story: [
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156143/WhatsApp_Image_2026-06-06_at_20.39.45_9_xfbypg.jpg",
      alt: "Olivier",
      width: 1200,
      height: 1600,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782648855/WhatsApp_Image_2026-06-06_at_20.39.46_1_vth82q.jpg",
      alt: "Céline",
      width: 898,
      height: 1600,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156134/WhatsApp_Image_2026-06-06_at_20.37.36_ngp8i0.jpg",
      alt: "Céline et Olivier",
      width: 1600,
      height: 1200,
    },
    {
      src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1600/v1782156172/IMG_5514.PNG_ajl3xt.png",
      alt: "Céline et Olivier en tenue traditionnelle",
      width: 896,
      height: 1195,
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
        src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1200/v1782649180/Tenu_2_duuzeh.jpg",
        alt: "Tissu pagne du mariage",
        width: 836,
        height: 1115,
      },
      {
        src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1200/v1782649166/Tenu_1_z7d0ty.jpg",
        alt: "Tissu pagne du mariage",
        width: 896,
        height: 1195,
      },
    ] satisfies ImageAsset[],
    menu: [
      {
        src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1200/v1782223238/WhatsApp_Image_2026-06-23_at_14.47_ndkal6.png",
        alt: "Mets de pistache et bâton de manioc",
        width: 1071,
        height: 1071,
      },
      {
        src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1200/v1782219433/Achu_Yellow_Soup__Le_Taro_et_Sauce_Jaune_kengskitchen_geshov.jpg",
        alt: "Taro et sauce jaune",
        width: 500,
        height: 868,
      },
      {
        src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1200/v1782214038/a386812cad3a2bd4e232603766d6fde5_rvgmm6.png",
        alt: "Légumes sautés",
        width: 736,
        height: 981,
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
    src: "https://res.cloudinary.com/dikdhk3ng/image/upload/f_auto,q_auto,c_limit,w_1200/v1782648392/rend_cette_image_en_1920x1080_202606241030_exeqju.jpg",
    alt: "Céline et Olivier — 20 Février 2027",
    width: 1901,
    height: 1060,
  } satisfies ImageAsset,
};
