import "./App.css";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import Hamburger from "./context/HamburgerContext";

function App() {
  return (
    <div className="App">
      <Hamburger>
        <Burger />
        <Menu />
      </Hamburger>
    </div>
  );
}

export default App;
