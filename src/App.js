import React, { useEffect } from "react";
import { Home, Signin, Signup } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  let accessToken = localStorage.getItem("accessToken");
  useEffect(() => {}, [accessToken]);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
