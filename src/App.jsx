import { CoffeShop } from "./components/coffeShop";
import { Header } from "./components/header";
import { Introduction } from "./components/introduction";

function App() {
  return (
    <div className="flex flex-col px-40">
      <Header />
      <Introduction />
      <CoffeShop />
    </div>
  );
}

export default App;
