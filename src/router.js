import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { getUser, isSignedIn } from "./services/security";
import UsersRegister from "./pages/UsersRegister";
import InventoryReports from "./pages/InventoryReports";
import PurchasesReports from "./pages/PurchasesReports";
import SalesReports from "./pages/SalesReports";
import Pdv from "./pages/Pdv";
import Sales from "./pages/Sales";
import PublicPage from "./pages/PublicPage";
import ProductsRegister from "./pages/ProductsRegister";
import Inventory from "./pages/Inventory";
import Purchases from "./pages/Purchases";
import ClientPage from "./pages/ClientPage";
import { useLocation } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const user = getUser();

  const location = useLocation();

  const path = location.pathname;

  const array = [];

  const hasAccess = () => {
    user.permissions.map((p) =>
      p.Screens.forEach((s) => {
        array.push(s.route);
      })
    );

    if (array.indexOf(path, 0) === -1) return false;
    else return true;
  };

  if (isSignedIn() && hasAccess()) {
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
          <PublicPage />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>

        <PrivateRoute path="/clientPage">
          <ClientPage />
        </PrivateRoute>

        <PrivateRoute path="/usersRegister">
          <UsersRegister />
        </PrivateRoute>

        <PrivateRoute path="/productsRegister">
          <ProductsRegister />
        </PrivateRoute>

        <PrivateRoute path="/inventoryReports">
          <InventoryReports />
        </PrivateRoute>

        <PrivateRoute path="/inventory">
          <Inventory />
        </PrivateRoute>

        <PrivateRoute path="/salesReports">
          <SalesReports />
        </PrivateRoute>

        <PrivateRoute path="/purchasesReports">
          <PurchasesReports />
        </PrivateRoute>

        <PrivateRoute path="/purchases">
          <Purchases />
        </PrivateRoute>

        <PrivateRoute path="/pdv">
          <Pdv />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
