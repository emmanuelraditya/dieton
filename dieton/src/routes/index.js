import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homeNewUser from "../components/homeUser/homeUser";
import Calender from "../components/calender/calender";
import Header from "../components/header/header";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={homeNewUser} />
        <Route path="/c" component={Calender} />
        <Route path="/h" component={Header} />
      </Switch>
    </Router>
  );
}

export default Routes