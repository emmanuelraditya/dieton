import React from "react";
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
      </div>
      </div>
    </>
  );
}

export default HomePage;
