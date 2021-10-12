import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalorieTrackerPage from '../pages/CalorieTracker/CalorieTrackerPage';
import HomePage from '../pages/Home/HomePage';
import LandingPages from '../pages/LandingPage/LandingPages';
import MealPlanPage from '../pages/MealPlan/MealPlanPage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import WeightMeasurementPage from '../pages/WeightMeasurement/WeightMeasurementPage';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPages} />
                <Route path='/signuppage' component={SignUpPage} />
                <Route path='/signinpage' component={SignInPage} />
                <Route path='/homepage' component={HomePage} />
                <Route path='/calorietrackerpage' component={CalorieTrackerPage} />
                <Route path='/mealplanpage' component={MealPlanPage} />
                <Route path='/weightmeasurementpage' component={WeightMeasurementPage} />
            </Switch>
        </Router>
    )
}

export default Routes;
