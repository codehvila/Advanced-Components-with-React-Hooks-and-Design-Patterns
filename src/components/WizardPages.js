import { useContext, Children } from "react";
import { WizardContext } from "./Wizard";

const WizardPages = (props) => {
  const { activePage } = useContext(WizardContext);
  const pages = Children.toArray(props.children);
  const currentPage = pages[activePage];
  return <div {...props}>{currentPage}</div>;
};

export default WizardPages;
