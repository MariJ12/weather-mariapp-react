import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import Cityoverview from "./Cityoverview";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Weather />
        <footer>
          <a href="https://github.com/MariJ12/weather-mariapp-react">Git Hub</a>
          <a href=""></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
