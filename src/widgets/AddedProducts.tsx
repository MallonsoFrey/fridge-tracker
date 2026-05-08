import { useAddedProducts } from "@/store/addedProductsStore";

export default function AddedProducts() {
  const addedProducts = useAddedProducts((state) => state.addedProducts);

  return (
    <div className="flex gap-3 flex-col md:max-w-[656px] p-5 bg-[#FFFFFFD1] border-[#F4F2ECFA] border-2 rounded-[24px]">
      <h2 className="text-lg text-[#687063] font-bold flex justify-between">
        В холодильнике
        <span className="bg-[#EDF2E7] rounded-full py-2 px-4 text-sm">
          {addedProducts.length > 0 ? addedProducts.length : 0}
        </span>
      </h2>
      <div className="flex flex-wrap gap-2 flex-col md:flex-row">
        {addedProducts.length > 0 &&
          addedProducts.map((product) => (
            <div className="shadow-sm max-w-[300px] text-left w-full h-auto flex items-center gap-3 border-[#F4F2ECFA] border-2 rounded-[24px] bg-[_rgba(255,255,255,0.98)] p-3 text-sm">
              <div className="select-none w-fit rounded-[100px] p-4 bg-[_rgba(236,242,230,0.9)] elem-tilt-hover">
                <span className="flex">{product.emoji}</span>
              </div>
              {product.name}
            </div>
          ))}
      </div>
    </div>
  );
}
