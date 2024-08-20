import { create } from "zustand";

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  description: string;
};

type storeType = {
  products: Product[];
  addProduct: (product: Product) => void;
  addProducts: (products: Product[]) => void;
  removeProduct: (id: number) => void;
  updateProduct: (id: number, product: Product) => void;
};

const ProductStore = create<storeType>((set) => ({
  products: [],
  addProduct: (product: Product) => {
    set((state) => ({ products: [...state.products, product] }));
  },
  addProducts: (products: Product[]) => {
    set((state) => ({ products: [...state.products, ...products] }));
  },
  removeProduct: (id: number) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
  updateProduct: (id: number, product: Product) => {
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...product } : p
      ),
    }));
  },
}));

export default ProductStore;
