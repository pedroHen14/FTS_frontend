import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { isSignedIn } from "./services/security";
import UsersRegister from "./pages/UsersRegister";

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

        <PrivateRoute path="/usersRegister">
          <UsersRegister />
        </PrivateRoute>

        <PrivateRoute path="/inventoryReports">
          <InventoryReports />
        </PrivateRoute>

        <PrivateRoute path="/salesReports">
          <SalesReports />
        </PrivateRoute>

        <PrivateRoute path="/purchasesReports">
          <PurchasesReports />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
