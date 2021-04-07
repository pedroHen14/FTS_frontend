import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterManager from "./pages/RegisterManager";
import RegisterEmployees from "./pages/RegisterEmployees";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

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
