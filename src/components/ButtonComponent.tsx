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
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
    >
      {name}
    </button>
  );
}
