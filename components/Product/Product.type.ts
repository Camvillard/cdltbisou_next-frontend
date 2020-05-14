export type ProductImage = {
  thumbnail: string;
  mainImage?: string;
  detailsImage?: string;
  otherImage?: string;
};

export type Product = {
  title: string;
  description: string;
  price: number;
  images: ProductImage;
  type: string;
};

export type ProductType = Carte | Affiche | Calendrier;

export type Carte = "carte";
export type Affiche = "affiche";
export type Calendrier = "calendrier";
