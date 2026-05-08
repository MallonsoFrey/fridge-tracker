import raw from "./products.ru.json";

export type StorageLocation = "fridge" | "freezer";

export type ProductItem = {
  id: string;
  emoji: string;
  name: string;
  category?: string;
  storage?: StorageLocation[];
};

export type ProductsDataset = {
  version: number;
  locale: "ru";
  items: ProductItem[];
};

export const productsRu = raw as ProductsDataset;
export const productItems: ProductItem[] = productsRu.items;

