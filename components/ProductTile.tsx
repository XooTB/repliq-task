"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import EditProductForm from "./EditProductForm";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  description: string;
};

const ProductTile = ({
  id,
  name,
  price,
  stock,
  image,
  description,
}: ProductProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Card className="w-fit rounded-lg">
          <img src={image} alt={name} className="w-full rounded-t-lg" />
          <CardContent className="text-left">
            <p className="text-xl font-semibold pb-2">{name}</p>
            <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update Product</SheetTitle>
          <SheetDescription className="pb-5">
            Change the details of your product
          </SheetDescription>
        </SheetHeader>
        <EditProductForm
          product={{ id, name, price, stock, image, description }}
          handleTrigger={setOpen}
        />
      </SheetContent>
    </Sheet>
  );
};

export default ProductTile;
