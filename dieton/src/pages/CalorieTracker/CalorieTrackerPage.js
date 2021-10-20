import React from 'react';
import CalorieTracker from './CalorieTracker';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./CalorieTracker.module.css";


function AddFoodMealPlanPage() {
    return (
        <>
        <div className={styles.calorieTrackerAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          <div  className={styles.calorieTracker}>
          <CalorieTracker />
          </div>
        </div>
        </>
    )
}

export default AddFoodMealPlanPage;