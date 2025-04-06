export function Description(props: { name: string }) {
  return <div style={styles}>{props.name}</div>;
}

const styles={
    marginLeft: "300px",
    fontFamily: 'Arial, sans-serif',
    fontSize: '25px',
    width: "28%",
}