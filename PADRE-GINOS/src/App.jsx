import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Pedre Gino's - Order now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Hawaiian" description="ham, pineapple, n stiff"/>
      <Pizza name="Americano" description="french fries, hot dogs, n stuff"/>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
