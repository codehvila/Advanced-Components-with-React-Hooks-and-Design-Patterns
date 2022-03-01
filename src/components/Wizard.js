import { useCallback, createContext, useReducer } from "react";
import "./wizard.css";

export const WizardContext = createContext();

const Wizard = ({ children }) => {
  const defaultInitialState = {
    activePage: 0,
    steps: 0,
  };

  const actions = {
    NEXT_PAGE: "NEXT_PAGE",
    PREV_PAGE: "PREV_PAGE",
    SET_STEPS: "SET_STEPS",
  };

  const defaultReducer = (state, action) => {
    const { activePage } = state;
    switch (action.type) {
      case actions.NEXT_PAGE:
        return { ...state, activePage: activePage + 1 };

      case actions.PREV_PAGE:
        return { ...state, activePage: activePage - 1 };

      case actions.SET_STEPS:
        return { ...state, steps: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(defaultReducer, defaultInitialState);

  const handleGoPrevPageClick = () => {
    dispatch({ type: actions.PREV_PAGE });
  };
  const handleGoNextPageClick = () => {
    dispatch({ type: actions.NEXT_PAGE });
  };

  const setSteps = useCallback(
    (n) => {
      dispatch({ type: actions.SET_STEPS, payload: n });
    },
    [actions.SET_STEPS, dispatch]
  );

  const { activePage, steps } = state;

  const context = {
    activePage,
    handleGoNextPageClick,
    handleGoPrevPageClick,
    setSteps,
    steps,
  };

  return (
    <WizardContext.Provider value={context}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
};

export default Wizard;
