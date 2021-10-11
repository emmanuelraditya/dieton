import React, { useState } from "react";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signUp.module.css";

const SignUp3 = (props) => {

  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div className={styles.signUp}>
      <div className={styles.backgroundImage}>
        <img src={background} alt="Diet On Background" />
      </div>
      <div className={styles.backgroundSolid}>
        <div className={styles.signUpContent}>
          <div className={styles.step}>{props.step}</div>
          <div className={styles.logo}>
            <img src={DietOnLogo} alt="Diet On" />
          </div>
          <div className={styles.tagline}>
            <p>Your Diet Assistant</p>
          </div>
          <div className={styles.signUpIntroPage3}>
            <p id={styles.almostThere}>Almost There!</p>
            <p id={styles.contentPage3}>
              Based on our calculations of your current height and weight, this
              is the maximum number of calories you need. Feel free to edit your
              calorie size for better result
            </p>
          </div>
          <form className={styles.form}>
            <p>Your Calorie Size</p>
            <div className={styles.calorieWrapper}>
              <input
                name="calorieSize"
                type="number"
                placeholder="Ex: 1900 kcal/day"
              />
              <span className={styles.kcal}>
                <p>kcal/day</p>
              </span>
            </div>
            <br />
            <button 
            id={styles.signUpButton}
             onClick={props.next}
            >Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
