export function Button(props: { name: string; style?: React.CSSProperties }) {
    return (
      <button style={props.style}>
        {props.name}
      </button>
    );
  }
