import React from 'react';
import AddNewMealPlan from '../../components/MealPlan/addNewMealPlan';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./MealPlan.module.css";
import JSONDATA from "../../MOCK_DATA.json";

function AddNewMealPlanPage() {
    return (
        <>
        <div className={styles.mealPlanAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          <div  className={styles.mealPlan}>
          <AddNewMealPlan data={JSONDATA} />
          </div>
        </div>
        </>
    )
}

export default AddNewMealPlanPage;

