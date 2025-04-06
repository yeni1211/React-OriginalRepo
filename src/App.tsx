export default function App() {
  return (
    <div>
      <Tittle title="Contadores"/>
      <Counter />
      
    </div>
  );
}

export function Tittle(props: { title: string }) {
  return <h1>{props.title}</h1>;
}

export function Counter() {
  return <div>
    <Boton title="-" />
  </div>
}

export function Boton(){
  return 
}

export function Label(){
  return
}
