import ProductsView from "@/components/ProductsView";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800">Store Inventory</h1>
      <p className="text-sm text-gray-500">
        Take a look at our inventory, what's in and what's not
      </p>
      <div className="">
        <ProductsView />
      </div>
    </div>
  );
};

export default page;
