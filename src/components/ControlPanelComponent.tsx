import { ButtonComponent } from "./ButtonComponent";

export type ControlPanelComponentProps = {
  incrementarContador: () => void;
  decrementarContador: () => void;
  resetearContador: () => void;
};

export function ControlPanelComponent({
  incrementarContador, decrementarContador, resetearContador
}: ControlPanelComponentProps) {
  return (
    <div className="flex flex-row bg-gray-300 gap-1 items-center justify-center w-96 mx-auto"> 
      <div>
        <ButtonComponent name="Increment" onClick={incrementarContador}></ButtonComponent>
      </div>
      <div><ButtonComponent name="Decrement" onClick={decrementarContador}></ButtonComponent></div>
      <div><ButtonComponent name="Reset" onClick={resetearContador}></ButtonComponent></div>
    </div>
  );
}
