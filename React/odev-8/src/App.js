import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="todoapp">
      <Header />
      <section class="main">
        <input class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>

        <ul class="todo-list">
          <li class="completed">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button class="destroy"></button>
            </div>
          </li>
          <li>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>Learn React</label>
              <button class="destroy"></button>
            </div>
          </li>
          <li>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>Have a life!</label>
              <button class="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default App;
