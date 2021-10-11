import React, { useState } from "react";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signUp.module.css";
// import GoogleLogo from "../../assets/signUp/googleLogo.svg";


const SignUp2 = props => {

  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div className={styles.signUp}>
      <div className={styles.backgroundImage}>
        <img src={background} alt="Diet On Background" />
      </div>
      <div className={styles.backgroundSolid}>
        <div className={styles.signUpContent}>
        <div className={styles.step}>
            {props.step}
        </div>
          <div className={styles.logo}>
            <img src={DietOnLogo} alt="Diet On" />
          </div>
          <div className={styles.tagline}>
            <p>Your Diet Assistant</p>
          </div>
          <div className={styles.signUpIntro}>
            <p>No secrets with Diet On!</p>
            <p>
              Let us now your size, so we can calculate how many calories you need
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.measurementWrappers}>
            <p>Weight</p>
            <div className={styles.weightWrapper}>
            <input name="weight" type="number" placeholder="Enter Your Current Weight" />
            <span className={styles.kg}><p>kg</p></span>
            </div>
            <p>Height</p>
            <div className={styles.heightWrapper}>
            <input name="height" type="number" placeholder="Enter Your Current Height" />
            <span className={styles.cm}><p>cm</p></span>
            </div>
            <p>Measurement </p>
            <div className={styles.measurementWrapper}>
            <input name="waistline" type="number" placeholder="Waistline" />
            <span className={styles.cm1}><p>cm</p></span>
            <input id={styles.thighInputBox} name="thigh" type="number" placeholder="Thigh" />
            <span className={styles.cm2}><p>cm</p></span>
            </div>
            </div>
            <br />
            <button 
            id={styles.signUpButton}
            onClick={props.next}
            >Next</button>
            {/* <p id={styles.or}>Or</p>
            <button id={styles.signUpGoogleButton}>
              <img src={GoogleLogo} alt="google" />
              Sign Up With Google
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp2;
