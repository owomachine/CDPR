import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//import pages
import HomePage from "./pages/home";
import AdminPage from "./pages/admin";
import GamePage from "./pages/game";
import SearchPage from "./pages/search";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/games/:gameId" exact component={GamePage} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}
