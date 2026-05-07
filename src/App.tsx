import Home from "@pages/Home";

function App() {
  return (
    <div className="p-5 flex flex-col">
      <header className="text-[#8E9388] text-lg font-bold uppercase flex justify-between md:gap-5 md:justify-normal items-center mb-4">
        Fridge Tracker
        <span className="flex bg-[#EEF2E9] select-none w-fit rounded-[100px] p-4">
          🥬
        </span>
      </header>
      <Home />
    </div>
  );
}

export default App;
