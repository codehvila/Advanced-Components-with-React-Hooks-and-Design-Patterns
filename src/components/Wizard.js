import { useState, createContext } from "react";
import "./wizard.css";

export const WizardContext = createContext();

const Wizard = ({ children, steps }) => {
  const [activePage, setActivePage] = useState(0);

  const handleGoPrevPageClick = () => {
    setActivePage((index) => index - 1);
  };
  const handleGoNextPageClick = () => {
    setActivePage((index) => index + 1);
  };

  const context = {
    activePage,
    handleGoNextPageClick,
    handleGoPrevPageClick,
    steps,
  };

  return (
    <WizardContext.Provider value={context}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
};

export default Wizard;
