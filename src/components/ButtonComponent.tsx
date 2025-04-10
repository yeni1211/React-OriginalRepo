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
      className="w-32 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded"
      
    >
      {name}
    </button>
  );
}
