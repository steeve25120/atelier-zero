export const products = [
  // =========================================================
  // DROP 001 — PROJECT GENESIS
  // =========================================================

  {
    id: 1,

    slug: "t-shirt-made-from-nothing",

    name: "T-shirt Made From Nothing",

    category: "T-shirts",

    price: 20000,

    currency: "FCFA",

    chapter: "Chapter 0",

    collection: "Project Genesis",

    badge: null,

    featured: false,

    soldOut: false,

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
          M: 3,
          L: 2,
          XL: 0,
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
          M: 0,
          L: 0,
          XL: 0,
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

    badge: null,

    featured: false,

    soldOut: true,

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
          M: 0,
          L: 0,
          XL: 0,
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
          M: 0,
          L: 0,
          XL: 0,
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

    badge: null,

    featured: false,

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

        sizes: ["S", "M", "L", "XL"],

        stock: {
          S: 2,
          M: 0,
          L: 1,
          XL: 0,
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

        sizes: ["S", "M", "L", "XL"],

        stock: {
          S: 0,
          M: 1,
          L: 0,
          XL: 1,
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

    badge: null,

    featured: false,

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

        sizes: ["S", "M", "L", "XL"],

        stock: {
          S: 0,
          M: 0,
          L: 0,
          XL: 0,
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

        sizes: ["S", "M", "L", "XL", "XXL"],

        stock: {
          S: 0,
          M: 0,
          L: 2,
          XL: 2,
          XXL: 1,
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

    badge: null,

    featured: false,

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

        sizes: ["S", "M", "L", "XL", "XXL"],

        stock: {
          S: 0,
          M: 1,
          L: 0,
          XL: 1,
          XXL: 1,
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

        sizes: ["S", "M", "L", "XL", "XXL"],

        stock: {
          S: 0,
          M: 1,
          L: 0,
          XL: 1,
          XXL: 0,
        },
      },
    ],
  },

  // =========================================================
  // DROP 002 — ZERO II ASCENSION
  // =========================================================

  {
    id: 6,

    slug: "fly-from-benin-studded-tank",

    name: "FLY FROM BENIN Studded Tank",

    category: "Tank tops",

    price: 25000,

    currency: "FCFA",

    euroAdjustment: 10,

    chapter: "Chapter 1",

    collection: "ZERO II ASCENSION",

    badge: "New release",

    featured: true,

    soldOut: false,

    description:
      "Le FLY FROM BENIN Studded Tank affirme l’identité Atelier Zéro à travers une silhouette sleeveless oversized, une finition noire délavée et des détails métalliques autour du col et des emmanchures. Le dos est marqué par le statement “I’M FLY CAUSE I’M FROM BENIN”.",

    longDescription:
      "Pensé comme une pièce forte de ZERO II ASCENSION, le FLY FROM BENIN Studded Tank associe une esthétique brute à des détails métalliques inspirés du streetwear expérimental. Son traitement noir délavé renforce son aspect vintage, tandis que les clous métalliques placés autour du col et des emmanchures structurent la silhouette. À l’avant, la signature Atelier Zéro est accompagnée du message “From Zéro, You Chose”. Au dos, le statement “I’M FLY CAUSE I’M FROM BENIN” affirme l’origine et l’identité de la pièce.",

    details: [
      "Top sleeveless streetwear",
      "Finition noire délavée",
      "Clous métalliques autour du col et des emmanchures",
      "Impression Atelier Zéro sur le devant",
      "Inscription From Zéro, You Chose",
      "Grand visuel I’M FLY CAUSE I’M FROM BENIN au dos",
      "Coupe ample et structurée",
      "Modèle unisexe",
    ],

    composition: [
      "Composition textile exacte à confirmer",
      "Finition washed / effet délavé",
    ],

    care: [
      "Lavage en machine à 30 °C maximum",
      "Laver le vêtement à l’envers",
      "Laver avec des couleurs similaires",
      "Ne pas utiliser d’eau de Javel",
      "Ne pas sécher au sèche-linge",
      "Repasser à basse température et à l’envers",
      "Ne pas repasser directement sur les impressions",
      "Éviter les frottements excessifs sur les détails métalliques",
    ],

    fit: [
      "Coupe sleeveless ample et unisexe",
      "Prendre votre taille habituelle pour un porté oversized",
      "Prendre une taille en dessous pour un rendu plus ajusté",
    ],

    variants: [
      {
        id: "washed-black",

        color: "Washed Black",

        colorValue: "#252525",

        image:
          "/assets/products/fly-from-benin-studded-tank-black/front.png",

        gallery: [
          "/assets/products/fly-from-benin-studded-tank-black/front.png",
          "/assets/products/fly-from-benin-studded-tank-black/side.png",
          "/assets/products/fly-from-benin-studded-tank-black/back.png",
        ],

        sizes: ["M", "L", "XL", "XXL"],

        stock: {
          M: 4,
          L: 4,
          XL: 1,
          XXL: 1,
        },
      },
    ],
  },

  {
    id: 7,

    slug: "ascension-blood-camo-short",

    name: "ASCENSION BLOOD CAMO SHORT",

    category: "Shorts",

    price: 17000,

    currency: "FCFA",

    euroAdjustment: 10,

    chapter: "Chapter 1",

    collection: "ZERO II ASCENSION",

    badge: "New release",

    featured: true,

    soldOut: false,

    description:
      "Le ASCENSION BLOOD CAMO SHORT mêle camouflage gris, détails utilitaires et projections rouges pour une pièce plus agressive et expérimentale du Drop 002 — ZERO II ASCENSION.",

    longDescription:
      "Conçu pour ZERO II ASCENSION, le ASCENSION BLOOD CAMO SHORT associe une construction cargo à un camouflage gris et blanc contrasté par des projections rouges. Ses poches latérales renforcent son inspiration utilitaire, tandis que le patch Atelier Zéro apporte la signature de la marque. Une pièce pensée pour compléter les silhouettes du deuxième drop avec une identité plus brute et plus graphique.",

    details: [
      "Short cargo streetwear",
      "Motif camouflage gris et blanc",
      "Projections graphiques rouges",
      "Poches cargo latérales",
      "Poches arrière",
      "Passants de ceinture",
      "Patch Atelier Zéro",
      "Coupe ample et structurée",
      "Modèle unisexe",
    ],

    composition: [
      "Coton de bonne qualité",
      "Matière résistante et confortable",
    ],

    care: [
      "Lavage en machine à 30 °C maximum",
      "Laver le vêtement à l’envers",
      "Laver avec des couleurs similaires",
      "Ne pas utiliser d’eau de Javel",
      "Ne pas sécher au sèche-linge",
      "Repasser à basse température et à l’envers",
      "Ne pas repasser directement sur les éléments graphiques",
    ],

    fit: [
      "Coupe cargo ample",
      "Prendre votre taille habituelle pour un porté classique",
      "Prendre une taille au-dessus pour un effet plus loose",
    ],

    variants: [
      {
        id: "grey-camo-red",

        color: "Grey Camo / Red",

        colorValue: "#c8c5be",

        image:
          "/assets/products/ascension-blood-camo-short/front.png",

        gallery: [
          "/assets/products/ascension-blood-camo-short/front.png",
          "/assets/products/ascension-blood-camo-short/side.png",
          "/assets/products/ascension-blood-camo-short/back.png",
        ],

        sizes: ["M", "L", "XL"],

        stock: {
          M: 3,
          L: 6,
          XL: 2,
        },
      },
    ],
  },

  {
    id: 8,

    slug: "zero-is-not-cheap-tee",

    name: "ZERO IS NOT CHEAP Tee",

    category: "T-shirts",

    price: 17000,

    currency: "FCFA",

    euroAdjustment: 10,

    chapter: "Chapter 1",

    collection: "ZERO II ASCENSION",

    badge: "New release",

    featured: true,

    soldOut: false,

    description:
      "Le ZERO IS NOT CHEAP Tee affirme la vision Atelier Zéro avec une coupe oversized, une finition noire délavée et un statement jaune oversize sur le devant. Une pièce directe et assumée issue du Drop 002 — ZERO II ASCENSION.",

    longDescription:
      "Conçu pour ZERO II ASCENSION, le ZERO IS NOT CHEAP Tee associe une silhouette streetwear oversized à une esthétique brute et minimaliste. Sa finition noire délavée contraste avec le visuel jaune “ZERO IS NOT CHEAP.” placé sur le devant, tandis que la signature Atelier Zéro au dos apporte une finition plus discrète. Confectionné dans un coton de bonne qualité pour offrir confort, tenue et durabilité.",

    details: [
      "T-shirt streetwear oversized",
      "Finition noire délavée",
      "Grand visuel ZERO IS NOT CHEAP. jaune sur le devant",
      "Signature ATELIER ZÉRO au dos",
      "Manches courtes",
      "Col rond",
      "Coupe unisexe",
      "Silhouette ample et structurée",
    ],

    composition: [
      "Coton de bonne qualité",
      "Matière douce et confortable",
      "Finition washed / effet délavé",
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
      "Coupe oversized unisexe",
      "Prendre votre taille habituelle pour conserver le porté oversized",
      "Prendre une taille en dessous pour un rendu plus ajusté",
    ],

    variants: [
      {
        id: "washed-black-yellow",

        color: "Washed Black / Yellow",

        colorValue: "#202020",

        image:
          "/assets/products/zero-is-not-cheap-tee-black/front.png",

        gallery: [
          "/assets/products/zero-is-not-cheap-tee-black/front.png",
          "/assets/products/zero-is-not-cheap-tee-black/side.png",
          "/assets/products/zero-is-not-cheap-tee-black/back.png",
        ],

        sizes: ["M", "L", "XXL"],

        stock: {
          M: 8,
          L: 5,
          XXL: 2,
        },
      },
    ],
  },
].sort((a, b) => b.id - a.id);

export const categories = [
  "All",
  ...new Set(
    products.map(
      (product) => product.category
    )
  ),
];