"use client";

import { useStore } from "zustand";
import ProductStore from "@/stores/ProductStore";
import { useState } from "react";
import products from "@/constants/products";

const useGetProducts = () => {
  const { addProducts } = useStore(ProductStore);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getProducts = async () => {
    setIsLoading(true);

    // // Usually, this would be an API call
    // const response = await fetch("/api/products");
    // if (!response.ok) {
    //   setError("Failed to fetch products");
    //   setIsLoading(false);
    //   return;
    // }
    // const products = await response.json();

    addProducts(products);
    setIsLoading(false);
  };

  return { isLoading, error, getProducts };
};

export default useGetProducts;
