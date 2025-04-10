export type ButtonComponentProps = {
  name: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function ButtonComponent({
  name,
  style,
  onClick: onClick,
}: ButtonComponentProps) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="w-28 border-1 border-gray-400 bg-gray-300 hover:bg-gray-200 text-gray-800 font-semibold mt-4 py-2 px-4 rounded"
    >
      {name}
    </button>
  );
}
