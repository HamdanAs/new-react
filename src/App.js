// import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router";

import { Home, Items } from "./pages";
import ItemDetail from "./pages/ItemDetail";
import { NavbarComponent } from "./components/NavbarComponent";
import { Login } from "./pages/Auth/Login";

import * as Middleware from "./middleware/App";
import { midContainer } from "./styles/styles";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>

      <Switch>
        <Route path="/" exact>
          <Middleware.Guest render={<Home />} />
        </Route>

        <Route path="/login" exact>
          <Middleware.Guest render={<Login />} />
        </Route>
        <Route path="/items" exact>
          <Middleware.Authenticated render={<Items />} />
        </Route>
        {/* <Route path="/items/add" component={AddItem} exact></Route> */}
        {/* <Route path="/items/:id" exact>
          <Middleware.Authenticated render={<ItemDetail />} />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
