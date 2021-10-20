import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalorieTrackerPage from '../pages/CalorieTracker/CalorieTrackerPage';
import HomePage from '../pages/Home/HomePage';
import LandingPages from '../pages/LandingPage/LandingPages';
import MealPlanPage from '../pages/MealPlan/MealPlanPage';
import AddMealPlanPage from '../pages/MealPlan/AddMealPlanPage';
import AddNewMealPlanPage from '../pages/MealPlan/AddNewMealPlanPage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import WeightMeasurementPage from '../pages/WeightMeasurement/WeightMeasurementPage';
import User from '../pages/user profile/user';
import Header from '../components/header/header';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/header' component={Header} />
                <Route exact path="/" component={LandingPages} />
                <Route path='/signuppage' component={SignUpPage} />
                <Route path='/signinpage' component={SignInPage} />
                <Route path='/homepage' component={HomePage} />
                <Route path='/calorietrackerpage' component={CalorieTrackerPage} />
                <Route path='/mealplanpage' component={MealPlanPage} />
                <Route path='/addmealplanpage' component={AddMealPlanPage} />
                <Route path='/addnewmealplanpage' component={AddNewMealPlanPage} />
                <Route path='/weightmeasurementpage' component={WeightMeasurementPage} />
                <Route path='/user' component={User} />
            </Switch>
        </Router>
    )
}
export default Routes;


// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import homeNewUser from "../components/homeUser/homeUser";
// import Calender from "../components/calender/calender";
// import Header from "../components/header/header";

// function Routes() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/home" component={homeNewUser} />
//         <Route path="/c" component={Calender} />
//         <Route path="/h" component={Header} />
//       </Switch>
//     </Router>
//   );
// }

// export default Routes
