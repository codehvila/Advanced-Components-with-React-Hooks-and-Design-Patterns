import logo from "./logo.svg";
import "./App.css";
import Wizard from "./components/Wizard";
import { Page1, Page2, Page3 } from "./components/Pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main className="App-main">
        <Wizard>
          <Page1 />
          <Page2 />
          <Page3 />
        </Wizard>
      </main>
    </div>
  );
}

export default App;
