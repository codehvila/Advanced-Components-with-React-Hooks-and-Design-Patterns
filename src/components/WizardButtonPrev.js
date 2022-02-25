import { useContext } from "react";
import { WizardContext } from "./Wizard";

const WizardButtonPrev = (props) => {
  const { handleGoPrevPageClick, activePage } = useContext(WizardContext);

  return (
    <>
      {activePage > 0 ? (
        <button onClick={handleGoPrevPageClick} type="button" {...props}>
          Atras
        </button>
      ) : null}
    </>
  );
};

export default WizardButtonPrev;
