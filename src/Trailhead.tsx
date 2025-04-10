import App from "./App";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function Trailhead() {
  return (
    <div className="width-full">
      <Header />
      <Main />
      <App />
    </div>
  );
}
