export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: string[];
  isSignature?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    description: "Begin your journey with our handcrafted appetisers",
    items: [
      {
        id: "s1",
        name: "Truffle Paneer Tikka",
        description: "Smoked cottage cheese marinated in truffle-infused yoghurt, kissed by the tandoor, served with gold-dusted chutney.",
        price: 480,
        image: "/images/menu/truffle-paneer.jpg",
        tags: ["Signature", "Vegetarian", "Chef's Pick"],
        isSignature: true,
      },
      {
        id: "s2",
        name: "Saffron Prawn Brochette",
        description: "Tiger prawns marinated in saffron, garlic and lime, grilled on skewers with pickled cucumber ribbons.",
        price: 620,
        tags: ["Seafood", "Gluten-Free"],
      },
      {
        id: "s3",
        name: "Mushroom Galette",
        description: "Wild mushroom & brie puff tart with truffle oil, micro-arugula and a balsamic reduction.",
        price: 360,
        tags: ["Vegetarian"],
      },
      {
        id: "s4",
        name: "Shorba-e-Khas",
        description: "Fragrant lamb broth slow-simmered with whole spices, saffron and coriander. Served with crispy bread.",
        price: 280,
        tags: ["Non-Veg"],
      },
    ],
  },
  {
    id: "mains",
    name: "Main Course",
    description: "Crafted with heritage spices and artisanal technique",
    items: [
      {
        id: "m1",
        name: "Butter Chicken",
        description: "Tender chicken in a velvety tomato-cashew gravy, infused with Kashmiri chilli and finished with cream. Our most beloved dish.",
        price: 540,
        image: "/images/menu/butter-chicken.jpg",
        tags: ["Signature", "Chef's Pick", "Non-Veg"],
        isSignature: true,
      },
      {
        id: "m2",
        name: "Dum Biryani",
        description: "Aromatic aged basmati slow-cooked dum style with Hyderabadi spices, saffron, fried onions, and served with raita and salan.",
        price: 580,
        image: "/images/menu/dum-biryani.jpg",
        tags: ["Signature", "Non-Veg"],
        isSignature: true,
      },
      {
        id: "m3",
        name: "Raan-e-Stone",
        description: "Slow-roasted lamb leg marinated overnight in yoghurt, ginger, garlic and spices — carved tableside.",
        price: 1200,
        tags: ["Non-Veg", "Chef's Pick"],
      },
      {
        id: "m4",
        name: "Dal Makhani Prestige",
        description: "Our 24-hour simmered black lentils finished with white butter, served with garlic naan.",
        price: 380,
        tags: ["Vegetarian", "Gluten-Free"],
      },
      {
        id: "m5",
        name: "Continental Herb-Crusted Salmon",
        description: "Atlantic salmon with lemon-herb crust, saffron beurre blanc, roasted asparagus and pomme purée.",
        price: 880,
        tags: ["Seafood", "Continental"],
      },
      {
        id: "m6",
        name: "Paneer Angara",
        description: "Cottage cheese cubes smoked over coal, tossed in a fiery onion-tomato masala with bell peppers.",
        price: 420,
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "breads",
    name: "Breads & Accompaniments",
    description: "Stone-baked and tandoor-fresh",
    items: [
      { id: "br1", name: "Gold Leaf Garlic Naan",     description: "Buttered naan with roasted garlic, hand-stretched and baked in tandoor.",        price: 120, tags: ["Vegetarian"] },
      { id: "br2", name: "Saffron Laccha Paratha",     description: "Layered whole-wheat flatbread with a hint of saffron butter.",                  price: 100, tags: ["Vegetarian"] },
      { id: "br3", name: "Signature Stone Kulcha",     description: "Stuffed with spiced potato and cheddar, baked on the stone.",                   price: 140, tags: ["Vegetarian", "Signature"] },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet finales crafted to linger",
    items: [
      {
        id: "d1",
        name: "Chocolate Lava Cake",
        description: "Warm Valrhona chocolate fondant with a molten centre, dusted with edible gold, served with Madagascar vanilla ice cream.",
        price: 380,
        image: "/images/menu/lava-cake.jpg",
        tags: ["Signature", "Chef's Pick"],
        isSignature: true,
      },
      {
        id: "d2",
        name: "Gulab Jamun Brûlée",
        description: "Our twist — soft gulab jamun inside a crème brûlée, caramelised tableside with rose water.",
        price: 280,
        tags: ["Vegetarian", "Chef's Pick"],
      },
      {
        id: "d3",
        name: "Mango Saffron Panna Cotta",
        description: "Silky Italian custard layered with Alphonso mango compote and saffron-honey drizzle.",
        price: 260,
        tags: ["Vegetarian", "Seasonal"],
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Curated pours and artisanal infusions",
    items: [
      { id: "bv1", name: "Saffron Lemonade",      description: "Fresh lemon, saffron strands, rose water and a pinch of Himalayan salt.",          price: 180, tags: ["Mocktail"] },
      { id: "bv2", name: "Masala Chai Martini",   description: "Our bar's signature: spiced chai infusion, vanilla, condensed milk, stirred cold.", price: 320, tags: ["Cocktail", "Signature"] },
      { id: "bv3", name: "Sparkling Rose Lassi",  description: "Whipped yoghurt, rose water, cardamom, topped with sparkling water.",              price: 220, tags: ["Mocktail", "Vegetarian"] },
      { id: "bv4", name: "Aged Single Malt",      description: "Selection of premium Indian and Scotch single malts — ask your sommelier.",        price: 800, tags: ["Spirits"] },
    ],
  },
];
