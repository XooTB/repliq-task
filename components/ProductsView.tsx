"use client";

import useGetProducts from "@/hooks/useGetProducts";
import ProductStore from "@/stores/ProductStore";
import React, { useEffect } from "react";
import { useStore } from "zustand";
import ProductTile from "./ProductTile";

type Props = {};

const ProductsView = (props: Props) => {
  const { getProducts } = useGetProducts();
  const { products } = useStore(ProductStore);

  useEffect(() => {
    getProducts();
  }, []);

  if (products.length < 1) {
    return <p>No products found.</p>;
  } else {
    return (
      <div className="grid grid-cols-4 gap-5 py-10">
        {products.map((product, i) => (
          <ProductTile key={i} {...product} />
        ))}
      </div>
    );
  }
};

export default ProductsView;
