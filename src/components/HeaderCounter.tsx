export type HeaderCounterProps = {
  title: string;
};
export function HeaderCounter({ title }: HeaderCounterProps) {
  return (
    <header className="flex flex-col bg-black text-white items-center justify-center w-96 mx-auto p-16 rounded-lg">
      <span className="text-2xl mb-4">{title}</span>
    </header>
  );
}
