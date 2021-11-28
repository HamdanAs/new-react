import "./App.css";
// import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router";

import { Home, Items } from "./pages";
import ItemDetail from "./pages/ItemDetail";
import { NavbarComponent } from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/items" component={Items} exact></Route>
        {/* <Route path="/items/add" component={AddItem} exact></Route> */}
        <Route path="/items/:id" component={ItemDetail} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
