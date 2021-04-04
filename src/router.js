import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/registerUser">
          <RegisterUser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
