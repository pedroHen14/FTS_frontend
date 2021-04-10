import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterManager from "./pages/RegisterManager";
import RegisterEmployees from "./pages/RegisterEmployees";
import { isSignedIn } from "./services/security";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/" />;
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>

        <Route path="/registerManager">
          <RegisterManager />
        </Route>

        <Route path="/registerEmployees">
          <RegisterEmployees />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
