import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CalorieTrackerPage from '../pages/Calorie tracker/CalorieTrackerPage'
import HomePage from '../pages/Home/HomePage'
import LandingPages from '../pages/Landing page/LandingPages'
import MealPlanPage from '../pages/Meal plan/MealPlanPage'
import SignInPage from '../pages/Sign In/SignInPage'
import SignUpPage from '../pages/Sign Up/SignUpPage'
import WeightMeasurementPage from '../pages/Weight and measurement/WeightMeasurementPage'

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

export default Routes
