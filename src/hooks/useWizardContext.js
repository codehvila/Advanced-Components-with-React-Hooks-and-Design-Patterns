import { useContext } from "react";
import { WizardContext } from "../components/Wizard";

const useWizardContext = (componentChildName, componentName) => {
  componentChildName = componentChildName || "";
  componentName = componentName || "";

  const context = useContext(WizardContext);
  if (!context) {
    throw new Error(
      `El componente compuesto ${componentChildName} no puede ser renderizado fuera del componente padre ${componentName}`
    );
  }
  return context;
};

export { useWizardContext };
