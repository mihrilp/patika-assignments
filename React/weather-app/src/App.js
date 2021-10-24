import "./App.css";
import Home from "./pages/Home";

import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
