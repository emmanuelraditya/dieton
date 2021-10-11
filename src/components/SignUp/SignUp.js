import React, { useState } from "react";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signUp.module.css";
import GoogleLogo from "../../assets/signUp/googleLogo.svg";
import showPasswordImg from "../../assets/signUp/showEye.svg";
import hidePasswordImg from "../../assets/signUp/hideEye.svg";

const SignUp = props => {
  const [password, setPassword] = useState("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);


  if (props.currentStep !== 1) {
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
            <p>Your Diet Asisstant</p>
          </div>
          <div className={styles.signUpIntro}>
            <p>Get Ready To Join Diet On!</p>
            <p>
              Please complete all the steps,and start to feel the difference
              with Diet On
            </p>
          </div>
          <form className={styles.form}>
            <p>Name</p>
            <input name="name" type="text" placeholder="Enter Your Name" required/>
            <p>Email</p>
            <input type="email" placeholder="Enter Email Address" required/>
            <p>Password</p>
            <div className={styles.passwordWrapper}>
              <input
                name="password"
                placeholder="Enter your password"
                type={isRevealPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <img
                title={isRevealPassword ? "Hide password" : "Show password"}
                src={isRevealPassword ? showPasswordImg : hidePasswordImg}
                onClick={() => setIsRevealPassword((prevState) => !prevState)}
                alt="passwordlogo"
              />
            </div>
            <br />
            <button 
            id={styles.signUpButton}
            onClick={props.next}
            >Sign Up</button>
            <p id={styles.or}>Or</p>
            <button id={styles.signUpGoogleButton}>
              <img src={GoogleLogo} alt="google" />
              Sign Up With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
