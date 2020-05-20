import React from "react";
import { DefaultLayout } from "../components/Layouts/DefaultLayout.component";
import { ProductInfoCart } from "../components/Product/ProductInfoCart.component";
import {
  ProductThumbnail,
  ProductNameStroked,
  ProductImage,
} from "../components/Product/Product.ui";

const placeholderLinkOne = `https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80`;

const fakeProduct = {
  title: "carte postale de vacances",
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
      <ProductNameStroked>{fakeProduct.title}</ProductNameStroked>
      <ProductThumbnail src={fakeProduct.images.thumbnail} />
      <ProductInfoCart product={fakeProduct} />
      <ProductImage
        src={fakeProduct.images.thumbnail}
        imageWidth={{ default: "92vw", md: "30%" }}
        left={{ default: "auto" }}
        right={{ default: "auto" }}
        bottom={{ default: "24px" }}
      />
      <ProductImage
        src={fakeProduct.images.thumbnail}
        imageWidth={{ default: "82vw", md: "30%" }}
        left={{ default: "auto" }}
        right={{ default: "auto" }}
      />
    </DefaultLayout>
  );
};

export default Product;
