"use client";

import useGetProducts from "@/hooks/useGetProducts";
import ProductStore, { Product } from "@/stores/ProductStore";
import React, { useEffect, useState } from "react";
import { useStore } from "zustand";
import ProductTile from "./ProductTile";

type Props = {};

const ProductsView = (props: Props) => {
  const { isLoading, error, getProducts } = useGetProducts();
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
