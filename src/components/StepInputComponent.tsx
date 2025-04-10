export type StepInputComponentProps = {
    step: number;
    actualizarPaso: () => void;
  };
export function StepInputComponent({step, actualizarPaso}: StepInputComponentProps) {
  return (
    <div className="flex flex-col items-center mt-2">
      <div>
        <label>"Paso:"</label>
      </div>
      <div>
        <input type="number" value={step} onChange={actualizarPaso} className="border p-2 rounded"></input>
      </div>
    </div>
  );
}
