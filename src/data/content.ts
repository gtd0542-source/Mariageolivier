// Contenu central du site. Remplacez les valeurs marquées [PLACEHOLDER] par les textes définitifs.

export const couple = {
  groom: "Olivier",
  bride: "Céline",
  fullNames: "Céline & Olivier",
  weddingDate: "2027-02-20T10:00:00+01:00", // 20 février 2027, Yaoundé (UTC+1)
  weddingDateLabel: "20 Février 2027",
  venueName: "Complexe Mundi",
  venueCity: "Yaoundé",
  venueCountry: "Cameroun",
  venueFullAddress: "Complexe Mundi, Ntoung, Route de Nsimalen, Yaoundé, Cameroun",
  venueCoordinates: {
    lat: 3.748577,
    lng: 11.519085,
  },
};

export const intro = {
  welcomeText: "Bienvenue à la célébration de notre union",
  ctaLabel: "Découvrir notre histoire",
};

export const hero = {
  kicker: "Nous nous marions",
  ctaPrimary: "Confirmer ma présence",
  ctaSecondary: "Réserver un hébergement",
};

export const story = {
  intro: "",
  biblicalVerse: {
    text: "L'amour est patient, il est plein de bonté ; l'amour n'est point envieux ; l'amour ne se vante point, il ne s'enfle point d'orgueil. Il ne fait rien de malhonnête, il ne cherche point son intérêt, il ne s'irrite point, il ne soupçonne point le mal. Il ne se réjouit point de l'injustice, mais il se réjouit de la vérité. Il excuse tout, croit tout, espère tout, supporte tout. L'amour ne périt jamais.",
    reference: "1 Corinthiens 13:4-8",
  },
  timeline: [
    {
      year: "",
      title: "Leur rencontre",
      text: "« Celui qui trouve une femme trouve le bonheur ; c'est une grâce qu'il obtient de l'Éternel. »",
      reference: "Proverbes 18:22",
    },
    {
      year: "",
      title: "Le premier pas",
      text: "« Où tu iras, j'irai ; où tu demeureras, je demeurerai ; ton peuple sera mon peuple, et ton Dieu sera mon Dieu. »",
      reference: "Ruth 1:16",
    },
    {
      year: "",
      title: "La demande",
      text: "« Mets-moi comme un sceau sur ton cœur, comme un sceau sur ton bras ; car l'amour est fort comme la mort. »",
      reference: "Cantique des Cantiques 8:6",
    },
    {
      year: "2027",
      title: "Le grand jour",
      text: "Le 20 février 2027, Céline et Olivier s'uniront pour la vie au Complexe Mundi, à Yaoundé.",
      reference: "",
    },
  ],
};

export const rsvp = {
  title: "Confirmation de présence",
  subtitle: "Votre présence est un cadeau précieux pour Céline et Olivier.",
  successTitle: "Votre présence a bien été enregistrée.",
  successMessage:
    "Nous avons hâte de partager ce moment exceptionnel avec vous.",
  submitLabel: "Je confirme ma présence",
};

export const accommodation = {
  title: "Hébergement",
  subtitle: "Le Complexe Mundi met à votre disposition 53 chambres pour votre séjour.",
  totalRooms: 53,
  categories: [
    {
      id: "standard",
      name: "Chambre Standard",
      description:
        "[PLACEHOLDER] Description de la chambre standard — confort essentiel dans un cadre apaisant.",
      capacity: "2 personnes",
      price: "50 000 FCFA / nuit",
      amenities: ["Lit double", "Salle de bain privée", "Climatisation", "Wi-Fi"],
    },
    {
      id: "premium",
      name: "Chambre Premium",
      description:
        "[PLACEHOLDER] Description de la chambre premium — plus d'espace et de raffinement.",
      capacity: "2-3 personnes",
      price: "50 000 FCFA / nuit",
      amenities: ["Lit king size", "Coin salon", "Climatisation", "Wi-Fi", "Vue jardin"],
    },
    {
      id: "suite",
      name: "Suite",
      description:
        "[PLACEHOLDER] Description de la suite — l'expérience la plus exclusive du complexe.",
      capacity: "2-4 personnes",
      price: "80 000 FCFA / nuit",
      amenities: ["Chambre + salon séparés", "Baignoire", "Climatisation", "Wi-Fi", "Terrasse privée"],
    },
  ],
};

export const dressCode = {
  title: "Dress Code",
  rule: "Toutes les couleurs sont autorisées, à l'exception du blanc.",
  subtitle:
    "Réservé aux mariés, le blanc est la seule teinte à éviter. Exprimez votre élégance dans toute la richesse de la palette Chic & Nature.",
  palette: [
    { name: "Corail classique", hex: "#FF7F50" },
    { name: "Vert eucalyptus", hex: "#87A08F" },
    { name: "Doré subtil", hex: "#C9A86A" },
    { name: "Jaune or", hex: "#D4A017" },
    { name: "Marron", hex: "#6F4E37" },
    { name: "Bordeaux", hex: "#722F37" },
  ],
  inspirations: [
    "[PLACEHOLDER] Inspiration tenue homme — costume tailleur ton sur ton",
    "[PLACEHOLDER] Inspiration tenue femme — robe longue fluide",
    "[PLACEHOLDER] Inspiration accessoires — bijoux dorés discrets",
  ],
};

export const dayOf = {
  title: "Jour J",
  subtitle: "Le programme complet des 20 et 21 février 2027.",
  days: [
    {
      date: "20 Février 2027",
      schedule: [
        { time: "10h00", title: "Cérémonie civile", description: "" },
        { time: "11h00 – 12h00", title: "Séances photos", description: "" },
        { time: "12h00 – 13h00", title: "Vin d'honneur", description: "" },
        { time: "16h00 – 18h00", title: "Cérémonie religieuse", description: "" },
        { time: "18h30 – 19h30", title: "Séances photos", description: "" },
        {
          time: "19h30",
          title: "Accueil des invités",
          description: "Installation dans le lieu réservé à la soirée.",
        },
        { time: "20h00", title: "Repas", description: "" },
        {
          time: "22h00",
          title: "Soirée dansante",
          description: "Ouverture de la soirée dansante, jusqu'à 4h du matin.",
        },
      ],
    },
    {
      date: "21 Février 2027",
      schedule: [
        { time: "12h00", title: "Repas traditionnel", description: "" },
        { time: "15h00", title: "Fin", description: "" },
      ],
    },
  ],
};

export const traditions = {
  title: "Tenues & Repas Traditionnels",
  subtitle: "Un hommage à nos racines et à nos coutumes.",
  outfits: [
    {
      name: "Ekang",
      description: "L'élégance Ekang, un héritage culturel porté avec fierté et distinction.",
    },
    {
      name: "Le Ndop",
      description: "Tenue traditionnelle des Bamilékés au Cameroun.",
    },
  ],
  customs: "[PLACEHOLDER] Présentation des coutumes observées lors de la cérémonie traditionnelle.",
  menu: [
    { name: "Mets de pistache & bâton de manioc", description: "" },
    { name: "Taro à la sauce jaune", description: "" },
    { name: "Légumes sautés", description: "" },
  ],
};

export const location = {
  title: "Nous trouver",
  venueName: couple.venueName,
  address: couple.venueFullAddress,
  coordinates: couple.venueCoordinates,
  directionsLabel: "Obtenir l'itinéraire",
};

export const practicalInfo = {
  title: "Informations utiles",
  address: couple.venueFullAddress,
  email: "mariagecelineolivier2027@gmail.com",
  arrivalTime: "Arrivée recommandée à partir de 09h30",
  ceremonyStart: "Début de la cérémonie à 10h00",
  notes:
    "[PLACEHOLDER] Consignes particulières (parking, tenue, sécurité, etc.)",
};

export const footer = {
  thankYou:
    "Merci de faire partie de ce moment unique. Nous avons hâte de célébrer avec vous.",
};

export const whatsapp = {
  countryCode: "237",
};
