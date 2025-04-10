

export type HeaderCounterProps = {
  title: string;
  counterComponent?: React.ReactNode; // Prop opcional para el CounterDisplay
};

export function HeaderCounter({ title, counterComponent }: HeaderCounterProps) {
  return (
    <div className="flex flex-col bg-black text-white items-center justify-center w-96 mx-auto p-16 rounded-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="mt-6 text-7xl">{counterComponent}</div>
    </div>
  );
}
