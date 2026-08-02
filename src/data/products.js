export const products = [
  {
    id: 1,

    slug: "t-shirt-made-from-nothing",

    name: "T-shirt Made From Nothing",

    category: "T-shirts",

    price: 20000,

    currency: "FCFA",

    chapter: "Chapter 0",

    collection: "Project Genesis",

    badge: "New release",

    featured: true,

    soldOut: true,

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

  {
    id: 2,

    slug: "genotype-0",

    name: "GENOTYPE 0",

    category: "T-shirts",

    price: 25000,

    currency: "FCFA",

    chapter: "Chapter 0",

    collection: "Project Genesis",

    badge: "New release",

    featured: true,

    soldOut: false,

    description:
      "GENOTYPE 0 incarne l’identité brute d’Atelier Zéro. Confectionné en coton premium, il associe une coupe structurée à une esthétique graphique affirmée, pensée pour celles et ceux qui construisent leur propre trajectoire.",

    longDescription:
      "Pensé comme une évolution du premier chapitre Atelier Zéro, GENOTYPE 0 associe confort, résistance et identité visuelle. Sa construction en coton offre un tombé structuré et agréable au quotidien. Une pièce conçue pour symboliser la transformation, la discipline et la création d’une nouvelle version de soi.",

    details: [
      "T-shirt streetwear premium",
      "Impression graphique haute qualité",
      "Manches courtes",
      "Col rond",
      "Coupe unisexe",
      "Finitions renforcées",
      "Disponible en noir et en rouge",
    ],

    composition: [
      "100 % coton",
      "Matière douce, respirante et résistante",
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
          "/assets/products/genotype-0-black/front.jpg",

        gallery: [
          "/assets/products/genotype-0-black/front.jpg",
          "/assets/products/genotype-0-black/side.jpg",
          "/assets/products/genotype-0-black/back.jpg",
          "/assets/products/genotype-0-black/worn.jpeg",
          "/assets/products/genotype-0-black/worn2.jpeg",
        ],

        sizes: ["M", "L", "XL"],

        stock: {
          M: true,
          L: true,
          XL: true,
        },
      },

      {
        id: "red",

        color: "Rouge",

        colorValue: "#b40018",

        image:
          "/assets/products/genotype-0-red/front.jpg",

        gallery: [
          "/assets/products/genotype-0-red/front.jpg",
          "/assets/products/genotype-0-red/side.jpg",
          "/assets/products/genotype-0-red/back.jpg",
          "/assets/products/genotype-0-red/worn.jpeg",
          "/assets/products/genotype-0-red/worn2.jpeg",
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

  {
    id: 3,

    slug: "zero-fitted-shirt",

    name: "Zero Fitted Shirt",

    category: "T-shirts",

    price: 15000,

    currency: "FCFA",

    chapter: "Chapter 0",

    collection: "Project Genesis",

    badge: "New release",

    featured: true,

    soldOut: false,

    description:
      "Le Zero Fitted Shirt revisite l’essentiel Atelier Zéro avec une coupe ajustée et une identité minimaliste. Confectionné en coton doux, il est marqué par une broderie Atelier Zéro sur le devant.",

    longDescription:
      "Pensé pour offrir une silhouette plus près du corps, le Zero Fitted Shirt associe confort, simplicité et précision. Sa construction en coton et sa broderie Atelier Zéro en font une pièce polyvalente, facile à porter seule ou sous une veste.",

    details: [
      "T-shirt ajusté en coton",
      "Inscription Atelier Zéro brodée sur le devant",
      "Col rond",
      "Manches courtes",
      "Coupe près du corps",
      "Finitions soignées",
      "Disponible en noir et en blanc",
    ],

    composition: [
      "100 % coton",
      "Matière douce et respirante",
    ],

    care: [
      "Lavage en machine à 30 °C maximum",
      "Laver le vêtement à l’envers",
      "Laver avec des couleurs similaires",
      "Ne pas utiliser d’eau de Javel",
      "Ne pas sécher au sèche-linge",
      "Repasser à basse température et à l’envers",
      "Ne pas repasser directement sur la broderie",
    ],

    fit: [
      "Coupe ajustée",
      "Prendre votre taille habituelle pour un effet près du corps",
      "Prendre une taille au-dessus pour un porté plus ample",
    ],

    variants: [
      {
        id: "black",

        color: "Noir",

        colorValue: "#000000",

        image:
          "/assets/products/zero-fitted-shirt-black/front.jpg",

        gallery: [
          "/assets/products/zero-fitted-shirt-black/front.jpg",
          "/assets/products/zero-fitted-shirt-black/back.jpg",
          "/assets/products/zero-fitted-shirt-black/worn.jpeg",
          "/assets/products/zero-fitted-shirt-black/worn2.jpeg",
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
          "/assets/products/zero-fitted-shirt-white/front.jpg",

        gallery: [
          "/assets/products/zero-fitted-shirt-white/front.jpg",
          "/assets/products/zero-fitted-shirt-white/back.jpg",
          "/assets/products/zero-fitted-shirt-white/worn.jpeg",
          "/assets/products/zero-fitted-shirt-white/worn2.jpeg",
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

  {
    id: 4,

    slug: "tank-atelier-zero",

    name: "Tank Atelier Zéro",

    category: "Tank tops",

    price: 12000,

    currency: "FCFA",

    chapter: "Chapter 0",

    collection: "Project Genesis",

    badge: "New release",

    featured: true,

    soldOut: false,

    description:
      "Le Tank Atelier Zéro propose une silhouette légère et structurée, conçue pour les journées chaudes et les superpositions. Réalisé en coton, il présente le logo Atelier Zéro brodé sur le devant.",

    longDescription:
      "Minimaliste et fonctionnel, le Tank Atelier Zéro associe une coupe sans manches à une matière en coton confortable. La broderie placée sur le devant apporte une signature discrète, fidèle à l’esthétique brute de la marque.",

    details: [
      "Débardeur en coton",
      "Logo Atelier Zéro brodé sur le devant",
      "Coupe sans manches",
      "Col rond",
      "Coupe unisexe",
      "Finitions soignées",
      "Disponible en noir et en blanc",
    ],

    composition: [
      "100 % coton",
      "Matière douce et respirante",
    ],

    care: [
      "Lavage en machine à 30 °C maximum",
      "Laver le vêtement à l’envers",
      "Laver avec des couleurs similaires",
      "Ne pas utiliser d’eau de Javel",
      "Ne pas sécher au sèche-linge",
      "Repasser à basse température et à l’envers",
      "Ne pas repasser directement sur la broderie",
    ],

    fit: [
      "Coupe droite sans manches",
      "Prendre votre taille habituelle pour un porté classique",
      "Prendre une taille au-dessus pour un effet plus ample",
    ],

    variants: [
      {
        id: "black",

        color: "Noir",

        colorValue: "#000000",

        image:
          "/assets/products/Tank-Atelier-zero-black/front.jpg",

        gallery: [
          "/assets/products/Tank-Atelier-zero-black/front.jpg",
          "/assets/products/Tank-Atelier-zero-black/back.jpg",
          "/assets/products/Tank-Atelier-zero-black/worn.jpeg",
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
          "/assets/products/Tank-Atelier-zero-white/front.jpg",

        gallery: [
          "/assets/products/Tank-Atelier-zero-white/front.jpg",
          "/assets/products/Tank-Atelier-zero-white/back.jpg",
          "/assets/products/Tank-Atelier-zero-white/worn.jpg",
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

  {
    id: 5,

    slug: "double-layer-az-shirt",

    name: "Double Layer AZ Shirt",

    category: "T-shirts",

    price: 30000,

    currency: "FCFA",

    chapter: "Chapter 0",

    collection: "Project Genesis",

    badge: "New release",

    featured: true,

    soldOut: false,

    description:
      "Le Double Layer AZ Shirt est une pièce signature d’Atelier Zéro. Sa construction à double manche crée une silhouette singulière, entre t-shirt structuré et superposition streetwear.",

    longDescription:
      "Conçu comme une interprétation plus expérimentale du t-shirt classique, le Double Layer AZ Shirt se distingue par ses manches superposées et son volume travaillé. Sa construction en coton offre confort et tenue, tandis que ses détails renforcent l’identité brute et minimaliste d’Atelier Zéro.",

    details: [
      "T-shirt streetwear premium",
      "Construction à double manche",
      "Effet de superposition intégré",
      "Manches courtes superposées",
      "Col rond",
      "Coupe unisexe",
      "Silhouette structurée",
      "Disponible en noir et en blanc",
    ],

    composition: [
      "100 % coton",
      "Matière douce, respirante et résistante",
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
          "/assets/products/double-layer-az-shirt-black/front.jpg",

        gallery: [
          "/assets/products/double-layer-az-shirt-black/front.jpg",
          "/assets/products/double-layer-az-shirt-black/side.jpg",
          "/assets/products/double-layer-az-shirt-black/back.jpg",
          "/assets/products/double-layer-az-shirt-black/worn.jpeg",
          "/assets/products/double-layer-az-shirt-black/worn2.jpeg",
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
          "/assets/products/double-layer-az-shirt-blanc/front.jpg",

        gallery: [
          "/assets/products/double-layer-az-shirt-blanc/front.jpg",
          "/assets/products/double-layer-az-shirt-blanc/side.jpg",
          "/assets/products/double-layer-az-shirt-blanc/back.jpg",
          "/assets/products/double-layer-az-shirt-blanc/worn.jpeg",
          "/assets/products/double-layer-az-shirt-blanc/worn2.jpeg",
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
].sort((a, b) => b.id - a.id);

export const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];