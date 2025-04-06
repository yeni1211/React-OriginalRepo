export function Logo(props: { url: string; style?: React.CSSProperties }) {
    return (
      <div>
        <img src={props.url} alt="vite" style={props.style} />
      </div>
    );
  }