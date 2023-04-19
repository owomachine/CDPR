import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//import pages
import HomePage from "./pages/home";
import AdminPage from "./pages/admin";
import GamePage from "./pages/game";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/games/:gameId" exact component={GamePage} />
      </Switch>
    </BrowserRouter>
  );
}
