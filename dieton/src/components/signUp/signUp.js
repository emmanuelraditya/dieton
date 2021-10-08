import React from "react";
import background from "../../assets/signUp/background.svg";
import styles from "./signUp.module.css";

function SignUp() {
  return (
    <div className={styles.signUp}>
      <div className={styles.backgroundImage}>
        <img src={background} alt="Diet On Background" />
      </div>
      <div className={styles.backgroundGreen}>
        <svg width="400" height="110">
          <rect
            width="300"
            height="100"
          />
        </svg>
      </div>
    </div>
  );
}

export default SignUp;
