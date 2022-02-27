import { Children } from "react";
import { useWizardContext } from "../hooks/useWizardContext";

const WizardPages = (props) => {
  const { activePage } = useWizardContext("WizardPages", "Wizard");
  const pages = Children.toArray(props.children);
  const currentPage = pages[activePage];
  return <div {...props}>{currentPage}</div>;
};

export default WizardPages;
