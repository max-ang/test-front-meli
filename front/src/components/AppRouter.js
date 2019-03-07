import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import routes from "../utils/routes";

/*
** AppRouter se encarga de disponibilizar las rutas del proyecto definidas en utils/routes.
** En caso de no corresponder, se redirige a /
*/

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(route => {
            return route.component ? (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
                history={route.history}
              />
            ) : null;
          })}
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
