// Contenu central du site. Remplacez les valeurs marquées [PLACEHOLDER] par les textes définitifs.

export const couple = {
  groom: "Olivier",
  bride: "Céline",
  fullNames: "Olivier & Céline",
  weddingDate: "2027-02-20T10:00:00+01:00", // 20 février 2027, Yaoundé (UTC+1)
  weddingDateLabel: "20 Février 2027",
  venueName: "Complexe Mundi",
  venueCity: "Yaoundé",
  venueCountry: "Cameroun",
  venueFullAddress: "Complexe Mundi, Yaoundé, Cameroun", // [PLACEHOLDER] adresse précise (quartier/voie) à compléter
  venueCoordinates: {
    lat: 3.8480, // [PLACEHOLDER] coordonnées GPS exactes du Complexe Mundi à confirmer
    lng: 11.5021,
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
  intro:
    "[PLACEHOLDER] Une courte introduction à l'histoire d'Olivier et Céline — comment leurs chemins se sont croisés.",
  biblicalVerse: {
    text: "[PLACEHOLDER] Texte du passage biblique choisi par les mariés.",
    reference: "[PLACEHOLDER] Référence (ex. 1 Corinthiens 13:4-7)",
  },
  timeline: [
    {
      year: "[PLACEHOLDER]",
      title: "Leur rencontre",
      text: "[PLACEHOLDER] Le récit de leur première rencontre.",
    },
    {
      year: "[PLACEHOLDER]",
      title: "Le premier pas",
      text: "[PLACEHOLDER] Un moment marquant de leur histoire.",
    },
    {
      year: "[PLACEHOLDER]",
      title: "La demande",
      text: "[PLACEHOLDER] Le récit de la demande en mariage.",
    },
    {
      year: "2027",
      title: "Le grand jour",
      text: "Le 20 février 2027, Olivier et Céline s'uniront pour la vie au Complexe Mundi, à Yaoundé.",
    },
  ],
};

export const rsvp = {
  title: "Confirmation de présence",
  subtitle: "Votre présence est un cadeau précieux pour Olivier et Céline.",
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
      amenities: ["Lit double", "Salle de bain privée", "Climatisation", "Wi-Fi"],
    },
    {
      id: "premium",
      name: "Chambre Premium",
      description:
        "[PLACEHOLDER] Description de la chambre premium — plus d'espace et de raffinement.",
      capacity: "2-3 personnes",
      amenities: ["Lit king size", "Coin salon", "Climatisation", "Wi-Fi", "Vue jardin"],
    },
    {
      id: "suite",
      name: "Suite",
      description:
        "[PLACEHOLDER] Description de la suite — l'expérience la plus exclusive du complexe.",
      capacity: "2-4 personnes",
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
    { name: "Vert sauge", hex: "#9CAF88" },
    { name: "Vert eucalyptus", hex: "#87A08F" },
    { name: "Beige sable", hex: "#E8DDC7" },
    { name: "Doré subtil", hex: "#C9A86A" },
    { name: "Gris clair", hex: "#D8D5CE" },
    { name: "Blanc cassé (accessoires uniquement)", hex: "#FAF7F2" },
  ],
  inspirations: [
    "[PLACEHOLDER] Inspiration tenue homme — costume tailleur ton sur ton",
    "[PLACEHOLDER] Inspiration tenue femme — robe longue fluide",
    "[PLACEHOLDER] Inspiration accessoires — bijoux dorés discrets",
  ],
};

export const dayOf = {
  title: "Jour J",
  subtitle: "Le programme complet du 20 février 2027.",
  schedule: [
    { time: "09h30", title: "Accueil des invités", description: "[PLACEHOLDER] Détails de l'accueil." },
    { time: "10h00", title: "Cérémonie", description: "[PLACEHOLDER] Détails de la cérémonie." },
    { time: "12h00", title: "Cocktail", description: "[PLACEHOLDER] Détails du cocktail." },
    { time: "13h30", title: "Séance photo", description: "[PLACEHOLDER] Détails de la séance photo." },
    { time: "15h00", title: "Réception", description: "[PLACEHOLDER] Détails de la réception." },
    { time: "19h00", title: "Soirée", description: "[PLACEHOLDER] Détails de la soirée." },
  ],
};

export const traditions = {
  title: "Tenues & Repas Traditionnels",
  subtitle: "Un hommage à nos racines et à nos coutumes.",
  outfits: [
    {
      name: "[PLACEHOLDER] Tenue traditionnelle 1",
      description: "[PLACEHOLDER] Description de la tenue et de sa signification.",
    },
    {
      name: "[PLACEHOLDER] Tenue traditionnelle 2",
      description: "[PLACEHOLDER] Description de la tenue et de sa signification.",
    },
  ],
  customs: "[PLACEHOLDER] Présentation des coutumes observées lors de la cérémonie traditionnelle.",
  menu: [
    { name: "[PLACEHOLDER] Plat traditionnel 1", description: "[PLACEHOLDER] Description du plat." },
    { name: "[PLACEHOLDER] Plat traditionnel 2", description: "[PLACEHOLDER] Description du plat." },
    { name: "[PLACEHOLDER] Plat traditionnel 3", description: "[PLACEHOLDER] Description du plat." },
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
  phone: "[PLACEHOLDER] +237 6XX XXX XXX",
  email: "[PLACEHOLDER] contact@olivier-celine.com",
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
