import { useState, Children } from "react";
import "./wizard.css";

const Wizard = ({ children }) => {
  const [activePage, setActivePage] = useState(0);

  const pages = Children.toArray(children);
  const currentPage = pages[activePage];

  const handleGoPrevPageClick = () => {
    setActivePage((index) => index - 1);
  };
  const handleGoNextPageClick = () => {
    setActivePage((index) => index + 1);
  };

  return (
    <div className="wizard">
      <div className="wizard__content">{currentPage}</div>
      <div className="wizard__buttons">
        {activePage > 0 ? (
          <button
            onClick={handleGoPrevPageClick}
            type="button"
            className="wizard__buttons-left"
          >
            Atras
          </button>
        ) : null}
        {activePage < pages.length - 1 ? (
          <button
            onClick={handleGoNextPageClick}
            type="button"
            className="wizard__buttons-right"
          >
            Siguiente
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Wizard;
