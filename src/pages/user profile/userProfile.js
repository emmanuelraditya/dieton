import React, {useState} from "react";
import CaloriTarget from "../../assets/Calori Target user.png"
import UserWeight from "../../assets/Weight User.png"
import Progress from "../../assets/Progress.png"
import BMI from "../../assets/BMI.png"
import showPwdImg from '../../assets/Show.png';
import hidePwdImg from '../../assets/Hide.png';
import "./userProfile.css"


function UserProfile () {

  const [pwd, setPwd] = useState('Password');
  const [isRevealPwd, setIsRevealPwd] = useState(false);


  return(
    <div>
      <div className="userPage">
        <div>
          <div>
            <div className="userData">
              <p className="userName">Derry</p>
              <p className="emailUser">ilhamderryn@gmail.com</p>
            </div>
            <div className="form-grup pwd-container">
              <input
                readOnly
                name="pwd"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={e => setPwd(e.target.value)}
              />
              <img title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? showPwdImg : hidePwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
                alt="icon"
              />
            </div>
          </div>
          <div className='userProgress'>
            <div className='progressList'>
              <img src={CaloriTarget}
              alt='imageUser' />
              <p>Calori Target</p>
              <p>1400 Kcal</p>
            </div>
            <div className='progressList'>
              <img src={UserWeight}
              alt='imageUser' />
              <p>Early Weight</p>
              <p>64 Kg</p>
            </div>
            <div className='progressList'>
              <img src={Progress}
              alt='imageUser' />
              <p>Progress</p>
              <p>-1 Kg</p>
            </div>
            <div className='progressList'>
              <img src={BMI}
              alt='imageUser' />
              <p>BMI Weight</p>
              <p>50 Kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile