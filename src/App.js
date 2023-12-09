import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Weather />
        <div>
          <footer>
            <a href="https://github.com/MariJ12/weather-mariapp-react">
              Github
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
