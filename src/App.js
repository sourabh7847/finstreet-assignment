import React from "react";
import { Signin, Signup } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path= '/signin'>
            <Signin />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
