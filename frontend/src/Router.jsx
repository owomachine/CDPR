import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import pages
import HomePage from "./pages/home-page";
import AdminPage from "./pages/admin-page";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" exact component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}
