import AddfProduct from "@widgets/AddProduct";
import EmptyFridge from "@widgets/EmptyFridge";

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px]">
      <EmptyFridge />
      <AddfProduct />
    </div>
  );
}
