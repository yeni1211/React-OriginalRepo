import { useEffect, useState } from "react";
import { ControlPanelComponent } from "./components/ControlPanelComponent";
import { CounterDisplay } from "./components/CounterDisplay";
import { HeaderCounter } from "./components/HeaderCounter";
import { StatusMessagesComponent } from "./components/StatusMessagesComponent";
import { StepInputComponent } from "./components/StepInputComponent";
import Slider from "./components/Slider";

export function CounterApp() {
  // logica
  const titulo = "Mi Contador React";
  const [count, setCount] = useState(0);
  const step = 2;

  const handleIncrementarContador = () => {
    console.log("incrementarContador");
  };

  const handledDecrementarContador = () => {
    console.log("decrementarContador");
  };

  const handleresetearContador = () => {
    console.log("resetearContador");
  };

  const actualizarPaso = () => {
    console.log("actualizarPaso");
  };


  // Efecto de montaje
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 150 ? prevCount + 1 : 150));
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full">
      <HeaderCounter
        title={titulo}
        counterComponent={<CounterDisplay count={count} />}
      />

      <ControlPanelComponent
        incrementarContador={handleIncrementarContador}
        decrementarContador={handledDecrementarContador}
        resetearContador={handleresetearContador}
      />
      <StepInputComponent actualizarPaso={actualizarPaso} step={step} />
      <StatusMessagesComponent count={count} />
    </div>
  );
}
