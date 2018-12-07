import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Local from "./pages/Local";
import Global from "./pages/Global";
import National from "./pages/National";
import Login from "./pages/login";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/global" component={Global} />
        <Route exact path="/national" component={National} />
        <Route exact path="/local" component={Local} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;


