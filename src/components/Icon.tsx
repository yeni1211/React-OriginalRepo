export function Icon(props: { url: string }) {
    return (
      <div>
        <img
          src={props.url}
          alt="vite"
          style={{ width: '60px', height: '60px' }} // Ejemplo de estilos
        />
      </div>
    );
  }

