import { Slider } from "./Slider";

export function HeaderCounter() {
    return (
      <header className="flex flex-col bg-black text-white items-center justify-center w-96 mx-auto p-8 rounded-lg">
        <span className="text-2xl mb-4">Mi Contador React</span>
        <Slider />
        <label className="text-6xl">0</label>
      </header>
    );
  }