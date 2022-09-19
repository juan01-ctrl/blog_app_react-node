import { createContext, FC, ReactNode, useEffect, useReducer } from "react";
import AuthReducer, { stateType } from "./Reducer";

const INITIAL_STATE: stateType = {
  user: JSON.parse(localStorage.getItem("user")!) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<any>;
}>({ state: INITIAL_STATE, dispatch: () => null });

type Props = {
  children: ReactNode;
};

export const ContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
