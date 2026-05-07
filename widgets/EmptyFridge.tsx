export default function EmptyFridge() {
  return (
    <div className="text-center w-full md:max-w-[350px] h-auto flex flex-col justify-center items-center gap-5 border-[#F4F2ECFA] border-2 rounded-[24px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(244,242,236,0.98)_100%)] p-5">
      <div>
        <h2 className="text-2xl text-[#687063] font-bold">Холодильник пуст</h2>

        <p className="text-xs text-[#687063]">
          Начните добавлять продукты, и{" "}
          <span className="font-bold">Fridge Tracker</span> поможет вам следить
          за их сроком годности.
        </p>
      </div>
      <div className="select-none w-fit rounded-[100px] p-4 bg-[#687063] elem-tilt-hover">
        <span className="flex">
          🧺
        </span>
      </div>

      <button className="flex justify-center items-center w-full h-6 transition-transform duration-100 ease-in-out active:translate-y-[3px] active:shadow-md active:bg-[#6F8D67] hover:shadow-md bg-[#E8EFE3] hover:bg-[#6F8D67] text-[#5D7155] hover:text-white border-none outline-none text-sm py-4 px-5 rounded-[22px]">
        Добавить первый продукт
      </button>
    </div>
  );
}
