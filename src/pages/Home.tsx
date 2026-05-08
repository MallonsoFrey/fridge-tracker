import AddfProduct from "@widgets/AddProduct";
import EmptyFridge from "@widgets/EmptyFridge";
import AddedProducts from "@/widgets/AddedProducts";

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px]">
      <EmptyFridge />
      <AddedProducts />
      <AddfProduct />
    </div>
  );
}
