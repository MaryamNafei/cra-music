import React from "react";
import Home from "./Home/Home";
import Singer from "./Singer/Singer";
import Song from "./Song/Song";
import Login from "./Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/artist/:artist" component={Singer} />
        <PrivateRoute path="/song/:song" component={Song} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
