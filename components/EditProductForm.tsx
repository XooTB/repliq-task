"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useStore } from "zustand";
import ProductStore from "@/stores/ProductStore";

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    description: string;
  };
  handleTrigger: any;
};

const EditProductForm = ({ product, handleTrigger }: Props) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  const { updateProduct } = useStore(ProductStore);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleSubmit = () => {
    updateProduct(currentProduct.id, currentProduct);
    handleTrigger(false);
  };

  return (
    <div>
      <img
        src={product.image}
        alt="product_img"
        className="w-full rounded-lg"
      />
      <div className="py-5">
        <label className="font-semibold">Product name</label>
        <Input
          placeholder="Product Name"
          value={currentProduct.name}
          className="mb-3"
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <label className="font-semibold">Product Price</label>
        <Input
          placeholder="Price"
          value={currentProduct.price}
          className="mb-3"
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <label className="font-semibold">Product Stock</label>
        <Input
          placeholder="Stock"
          value={currentProduct.stock}
          className="mb-3"
          name="stock"
          onChange={(e) => handleChange(e)}
        />
        <label className="font-semibold">Product Description</label>
        <Input
          type="textarea"
          placeholder="Description"
          value={currentProduct.description}
          className="mb-3"
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={handleSubmit}>Save</Button>
      </div>
    </div>
  );
};

export default EditProductForm;
