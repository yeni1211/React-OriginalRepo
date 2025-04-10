export type CounterDisplayProps = {
  count: number;
};

export function CounterDisplay({ count }: CounterDisplayProps) {
//   const objetivoAmor = {
//     te: "te",
//     amo: "amo",
//   };

//   //destructuring
//   const { te, amo } = objetivoAmor;

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl">slider</div>
      <h1>
        {count}
      </h1>
    </div>
  );
}
