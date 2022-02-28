import { Children, useEffect } from "react";
import { useWizardContext } from "../hooks/useWizardContext";

const WizardPages = (props) => {
  const { activePage, setSteps } = useWizardContext("WizardPages", "Wizard");
  const pages = Children.toArray(props.children);
  const steps = Children.count(props.children);
  const currentPage = pages[activePage];

  useEffect(() => {
    setSteps(steps);
  }, [steps, setSteps]);
  return <div {...props}>{currentPage}</div>;
};

export default WizardPages;
