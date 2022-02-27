import { useWizardContext } from "../hooks/useWizardContext";

const WizardButtonNext = (props) => {
  const { handleGoNextPageClick, activePage, steps } = useWizardContext(
    "WizardButtonNext",
    "Wizard"
  );

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
