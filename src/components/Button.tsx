export type ButtonProps = {
  name: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export function Button({ name, style, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
    >
      {name}
    </button>
  );
}
