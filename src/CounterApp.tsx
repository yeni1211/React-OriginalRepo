import { ControlPanelComponent } from "./components/ControlPanelComponent";
import { CounterDisplay } from "./components/CounterDisplay";
import { HeaderCounter } from "./components/HeaderCounter";
import { StatusMessagesComponent } from "./components/StatusMessagesComponent";
import { StepInputComponent } from "./components/StepInputComponent";


export function CounterApp() {
  //logica
  const titulo = "Mi Contador React";
  const count = 2;
  const step = 2;
  const handleIncrementarContador = () => {
    console.log("incrementarContador");
  };
  const handledDecrementarContador= () => {
    console.log("decrementarContador");
  };
  const handleresetearContador = () => {
    console.log("resetearContador");
  };

  const actualizarPaso = () => {
    console.log("actualizarPaso");
  };

  return (
    <div className="w-full h-full">
      <HeaderCounter title={titulo} />
      <CounterDisplay count={count} />
      <ControlPanelComponent incrementarContador={handleIncrementarContador} decrementarContador={handledDecrementarContador} resetearContador={handleresetearContador} />
      <StepInputComponent actualizarPaso={actualizarPaso} step={step}/>
      <StatusMessagesComponent count={count} />
    </div>
  );
}
