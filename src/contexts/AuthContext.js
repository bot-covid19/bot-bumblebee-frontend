import * as React from 'react';
import { getStoredUserAuth } from 'utils/utils';


export const authContext = React.createContext({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => { },
  setUnauthStatus: () => { }
});

const { Provider } = authContext;

const AuthProvider = ({
  children
}) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );

  return (
    <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
