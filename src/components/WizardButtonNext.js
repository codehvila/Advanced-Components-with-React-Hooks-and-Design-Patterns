import { useContext } from "react";
import { WizardContext } from "./Wizard";

const WizardButtonNext = (props) => {
  const { handleGoNextPageClick, activePage, steps } =
    useContext(WizardContext);

  return (
    <>
      {activePage < steps - 1 ? (
        <button onClick={handleGoNextPageClick} type="button" {...props}>
          Siguiente
        </button>
      ) : null}
    </>
  );
};

export default WizardButtonNext;
