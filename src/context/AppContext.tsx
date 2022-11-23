import { type Dispatch, createContext, useReducer } from "react";

const initialState = {
  activeTab: "profile",
  dispatch: (() => undefined) as Dispatch<any>,
};

export const AppContext = createContext(initialState);

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "Change_Tab":
      return {
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ activeTab: state.activeTab, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
