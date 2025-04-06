export function Tittle(props: { name: string }) {
  return <div style={styles}>{props.name}</div>;
}

const styles: React.CSSProperties = {
  width: "28%",
  color: "Black",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  fontSize: "56px",
  marginLeft: "300px",
};
