export interface Product {
  id: string;
  title: string;
  price: number;
  formattedPrice: string;
  currency: string;
  availability: string;
  description: string;
  imageUrl: string;
  sku: string;
  productType: string;
  googleProductCategory: string;
  features: string[];
  gallery: string[];
}

export const SITE_URL = "https://shop.paradisefurniture.in";
export const BRAND_NAME = "Paradise Furniture";
export const STORE_CODE = "A51-NARAINA";

export const PRODUCTS: Product[] = [
  {
    id: "majesty-hb",
    title: "MAJESTY HB",
    price: 16500,
    formattedPrice: "INR 16,500",
    currency: "INR",
    availability: "In Stock",
    description: "Premium ergonomic office chair designed for long hours of comfortable working. Features adjustable lumbar support, 4D armrests, and breathable mesh back.",
    imageUrl: "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942107/MAJESTY-HB-1/MAJESTY-HB-1.jpg?_i=AA",
    sku: "PF-CHAIR-ERGO-01",
    productType: "Furniture > Chairs > Office Chairs",
    googleProductCategory: "Furniture > Chairs",
    features: ["Adjustable Lumbar Support", "Breathable Mesh Back", "Tilt & Lock Mechanism"],
    gallery: [
      "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942107/MAJESTY-HB-1/MAJESTY-HB-1.jpg?_i=AA",
    ],
  },
  {
    id: "milan-mb",
    title: "MILAN MB",
    price: 24800,
    formattedPrice: "INR 24,800",
    currency: "INR",
    availability: "In Stock",
    description: "Elegant velvet accent chair perfect for living rooms or boutique office spaces. Deeply padded seat with gold-finished metal legs.",
    imageUrl: "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942127/500x500_1/500x500_1.jpg?_i=AA",
    sku: "PF-CHAIR-ACC-02",
    productType: "Furniture > Chairs > Accent Chairs",
    googleProductCategory: "Furniture > Chairs",
    features: ["Premium Velvet Fabric", "High-Density Foam Cushioning", "Gold-Finished Metal Legs"],
    gallery: [
      "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942127/500x500_1/500x500_1.jpg?_i=AA",
    ],
  },
  {
    id: "phd-1912",
    title: "PHD-1912",
    price: 29500,
    formattedPrice: "INR 29,500",
    currency: "INR",
    availability: "In Stock",
    description: "Minimalist Scandinavian design dining chair crafted from solid oak wood. Features a gently curved backrest and woven rope seat.",
    imageUrl: "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942308/phd-1912/phd-1912.jpg?_i=AA",
    sku: "PF-CHAIR-DIN-03",
    productType: "Furniture > Chairs > Dining Chairs",
    googleProductCategory: "Furniture > Chairs",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942308/phd-1912/phd-1912.jpg?_i=AA",
    ],
  },
  {
    id: "phe-5126",
    title: "PHE-5126",
    price: 23600,
    formattedPrice: "INR 23,600",
    currency: "INR",
    availability: "In Stock",
    description: "Minimalist Scandinavian design dining chair crafted from solid oak wood. Features a gently curved backrest and woven rope seat.",
    imageUrl: "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942180/phe-5126/phe-5126.jpg?_i=AA",
    sku: "PF-CHAIR-DIN-04",
    productType: "Furniture > Chairs > Dining Chairs",
    googleProductCategory: "Furniture > Chairs",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942180/phe-5126/phe-5126.jpg?_i=AA",
    ],
  },
  {
    id: "phe-5130",
    title: "PHE-5130",
    price: 14800,
    formattedPrice: "INR 14,800",
    currency: "INR",
    availability: "In Stock",
    description: "Minimalist Scandinavian design dining chair crafted from solid oak wood. Features a gently curved backrest and woven rope seat.",
    imageUrl: "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942175/phe-5130/phe-5130.jpg?_i=AA",
    sku: "PF-CHAIR-DIN-05",
    productType: "Furniture > Chairs > Dining Chairs",
    googleProductCategory: "Furniture > Chairs",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942175/phe-5130/phe-5130.jpg?_i=AA",
    ],
  },
  {
    id: "star",
    title: "STAR",
    price: 10900,
    formattedPrice: "INR 10,900",
    currency: "INR",
    availability: "In Stock",
    description: "Minimalist Scandinavian design dining chair crafted from solid oak wood. Features a gently curved backrest and woven rope seat.",
    imageUrl: "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942116/STAR-1-1/STAR-1-1.jpg?_i=AA",
    sku: "PF-CHAIR-DIN-06",
    productType: "Furniture > Chairs > Dining Chairs",
    googleProductCategory: "Furniture > Chairs",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/dfb0umklg/images/f_auto,q_auto/v1755942116/STAR-1-1/STAR-1-1.jpg?_i=AA",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
