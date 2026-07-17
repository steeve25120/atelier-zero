export const products = [
  {
    id: 1,

    slug: "t-shirt-made-from-nothing",

    name: "T-shirt Made From Nothing",

    category: "T-shirts",

    price: 25000,

    currency: "FCFA",

    chapter: "Chapter 0",

    collection: "Project Genesis",

    badge: "New release",

    featured: true,

    description:
      "Le T-shirt Made From Nothing incarne le point de départ de la Mentalité Zéro. Une pièce streetwear à l’esthétique minimaliste sur le devant, marquée par le symbole Atelier Zéro sur la poitrine et une composition graphique forte au dos.",

    longDescription:
      "Pensé comme une pièce centrale du premier chapitre Atelier Zéro, le T-shirt Made From Nothing associe une silhouette streetwear à des détails graphiques inspirés de la reconstruction. Le marquage arrière rappelle que toute évolution commence à zéro : Made From Nothing, From Zero to Everything.",

    details: [
      "T-shirt streetwear premium",
      "Symbole Atelier Zéro imprimé sur la poitrine",
      "Impression Made From Nothing au dos",
      "Motif graphique contrasté sur la partie inférieure",
      "Manches courtes",
      "Col rond",
      "Coupe unisexe",
    ],

    composition: [
      "Matière douce et confortable",
      "Composition textile exacte à confirmer",
    ],

    care: [
      "Lavage en machine à 30 °C maximum",
      "Laver le vêtement à l’envers",
      "Laver avec des couleurs similaires",
      "Ne pas utiliser d’eau de Javel",
      "Ne pas sécher au sèche-linge",
      "Repasser à basse température et à l’envers",
      "Ne pas repasser directement sur les impressions",
    ],

    fit: [
      "Coupe streetwear unisexe",
      "Prendre votre taille habituelle pour un porté classique",
      "Prendre une taille au-dessus pour un effet plus oversize",
    ],

    variants: [
      {
        id: "black",

        color: "Noir",

        colorValue: "#000000",

        image:
          "/assets/products/made-from-nothing-black/front.jpg",

        gallery: [
          "/assets/products/made-from-nothing-black/front.jpg",
          "/assets/products/made-from-nothing-black/side.jpg",
          "/assets/products/made-from-nothing-black/back.jpg",
          "/assets/products/made-from-nothing-black/worn.jpeg",
        ],

        sizes: ["M", "L", "XL"],

        stock: {
          M: true,
          L: true,
          XL: true,
        },
      },

      {
        id: "white",

        color: "Blanc",

        colorValue: "#ffffff",

        image:
          "/assets/products/made-from-nothing-white/front.jpg",

        gallery: [
          "/assets/products/made-from-nothing-white/front.jpg",
          "/assets/products/made-from-nothing-white/side.jpg",
          "/assets/products/made-from-nothing-white/back.jpg",
          "/assets/products/made-from-nothing-white/worn.jpeg",
        ],

        sizes: ["M", "L", "XL"],

        stock: {
          M: true,
          L: true,
          XL: true,
        },
      },
    ],
  },
];

export const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];