import logo from "./logo.svg";
import "./App.css";
import Wizard from "./components/Wizard";
import { Page1, Page2, Page3 } from "./components/Pages";
import WizardButtonNext from "./components/WizardButtonNext";
import WizardButtonPrev from "./components/WizardButtonPrev";
import WizardPages from "./components/WizardPages";

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
          <WizardPages className="wizard__content">
            <Page1 />
            <Page2 />
            <Page3 />
          </WizardPages>
          <div className="wizard__button">
            <WizardButtonPrev className="wizard__buttons-left" />
            <WizardButtonNext className="wizard__buttons-right" />
          </div>
        </Wizard>
      </main>
    </div>
  );
}

export default App;
