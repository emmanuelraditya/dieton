import React from 'react';
import MealPlanNew from '../../components/MealPlan/MealPlanNew';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./MealPlan.module.css";

function MealPlanPage() {
    return (
        <>
        <div className={styles.mealPlanAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          <div  className={styles.mealPlan}>
          <MealPlanNew />
          </div>
        </div>
        </>
    )
}

export default MealPlanPage;

