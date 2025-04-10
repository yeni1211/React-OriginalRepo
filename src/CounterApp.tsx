import { ControlPanelComponent } from "./components/ControlPanelComponent";
import { CounterDisplay } from "./components/CounterDisplay";
import { HeaderCounter } from "./components/HeaderCounter";
import { Trailhead } from "./Trailhead";

export function CounterApp() {
  //logica
  const titulo = "Mi Contador React";
  const count = 2;
  const handleIncrementarContador = () => {
    console.log("incrementarContador");
  };

  return (
    <div className="w-full h-full">
      <HeaderCounter title={titulo} />;
      <CounterDisplay count={count} />
      <ControlPanelComponent incrementarContador={handleIncrementarContador} />
      <Trailhead />
    </div>
  );
}
