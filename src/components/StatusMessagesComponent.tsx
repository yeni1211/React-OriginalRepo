export type StatusMessagesComponentProps = {
  count: number;
};

export function StatusMessagesComponent({
  count,
}: StatusMessagesComponentProps) {
  return (
    <div className="flex flex-col w-96 mx-auto items-center justify-center bg-gray-300 text-2xl text-gray-800 font-semibold p-8">
      <div>
        {count > 10 ? (
          <div>¡El contador es mayor a 10!</div>
        ) : count === 0 ? (
          <div>El contador es 0, por abajo de cero no se puede</div>
        ) : null}
      </div>
    </div>
  );
}
