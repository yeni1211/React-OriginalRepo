import { Button } from "./Button";

export type ControlPanelComponentProps = {
  incrementarContador: () => void;
};

export function ControlPanelComponent({
  incrementarContador,
}: ControlPanelComponentProps) {
  return (
    <div className="flex gap-4">
      <div className="flex gap-4">
        <Button name="Incrementar" onClick={incrementarContador}></Button>
      </div>
      <div><Button name="Incrementar" ></Button></div>
      <div><Button name="Incrementar" ></Button></div>
    </div>
  );
}
