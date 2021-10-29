import React from 'react';
import WeightMeasurements from "../../components/WeightMeasurement/WeightMeasurement";
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./WeightMeasurementPage.module.css";


function WeightMeasurementPage() {
    return (
        <>
        <div className={styles.weightMeasurementAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          <div  className={styles.weightMeasurement}>
          <WeightMeasurements />
          </div>
        </div>
        </>
    )
}

export default WeightMeasurementPage;
