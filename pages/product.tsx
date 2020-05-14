import React from "react";
import { DefaultLayout } from "../components/Layouts/DefaultLayout.component";
import { ProductInfoCart } from "../components/Product/ProductInfoCart.component";
import { ProductThumbnail } from "../components/Product/Product.ui";

const placeholderLinkOne = `https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80`;

const fakeProduct = {
  title: "je t'aime & je t'adore",
  description:
    "toutes les cartes sont au format A2 (4.25po x 5.5po plié) et sont imprimées à Montréal sur un papier blanc certifié FSC. Toutes les cartes sont vierges et sont accompagnées d’une enveloppe blanche et d’un film protecteur compostable en PLA végétal.",
  price: 500,
  type: "carte",
  images: {
    thumbnail: placeholderLinkOne,
    mainImage: "",
    detailsImage: "",
    otherImage: "",
  },
};

const Product = () => {
  return (
    <DefaultLayout>
      <ProductThumbnail src={fakeProduct.images.thumbnail} />
      <ProductInfoCart product={fakeProduct} />
    </DefaultLayout>
  );
};

export default Product;
