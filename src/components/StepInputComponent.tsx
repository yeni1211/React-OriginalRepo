export type StepInputComponentProps = {
  step: number;
  actualizarPaso: () => void;
};

export function StepInputComponent({step, actualizarPaso}: StepInputComponentProps) {
  return (
    <div className="bg-gray-300 w-96 mx-auto gap-2"> {/* Elimina items-center */}
      <div className="flex items-start justify-start text-gray-800 font-semibold pl-10"> {/* Añade pl-4 para padding left */}
        <label className="mt-4 mb-4 text-lg">Paso:</label>
      </div>
      <div className="pl-10"> {/* Añade pl-4 para alinear el input */}
        <input type="number" value={step} onChange={actualizarPaso} className="w-75 mx-auto border-2 border-gray-400 text-gray-800 font-semibold mt-4 py-2 px-4 p-1 rounded"></input>
      </div>
    </div>
  );
}
