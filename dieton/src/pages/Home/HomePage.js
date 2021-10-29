import React from "react";
import Calender from "../../components/calender/calender";
import HomeNewUser from "../../components/homeUser/homeUser";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
    <div className={styles.homeAll}>
      <div className={styles.sideNavbar}>
        <SideNavbar />
      </div>
      <div className={styles.home}>
        <HomeNewUser />
        <div>
        <Calender />
      </div>
      </div>
      
      </div>
    </>
  );
}

export default HomePage;
