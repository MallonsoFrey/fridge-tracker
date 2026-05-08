import { create } from 'zustand';
import { type ProductItem } from "@/data/products";

type AddedProductsType = {
  addedProducts: ProductItem[];

  addProduct: (product: ProductItem) => void;
}

export const useAddedProducts = create<AddedProductsType>((set) => ({
  addedProducts: [],

  addProduct: (product) =>
    set((state) => ({
      addedProducts: [...state.addedProducts, product],
    })),
}))