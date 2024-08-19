import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

type Props = {
  product: {
    name: string;
    price: number;
    description: string;
    image: StaticImageData;
  };
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-2 border rounded-md pb-2">
      <Image src={product.image} alt={product.name} className="rounded-t-md" />
      <div className="px-3">
        <h2 className="text-2xl font-medium py-2">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex justify-between items-center py-2">
          <p className="text-lg font-semibold">${product.price}</p>
          <Button className="flex gap-3">
            Buy Now <ShoppingCart size={20} />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
