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
    <div>
      <div>slider</div>
      <h1>
        {count}
      </h1>
    </div>
  );
}
