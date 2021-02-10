import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const PrivateRoute = ({ location, component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};
