import { useWizardContext } from "../hooks/useWizardContext";

const WizardButtonPrev = (props) => {
  const { handleGoPrevPageClick, activePage } = useWizardContext(
    "WizardButtonPrev",
    "Wizard"
  );

  return (
    <>
      {activePage > 0 ? (
        <button onClick={handleGoPrevPageClick} type="button" {...props}>
          {props.children}
        </button>
      ) : null}
    </>
  );
};

export default WizardButtonPrev;
