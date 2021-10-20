import React, {useState} from "react";
import CaloriTarget from "../../assets/Calori Target user.png"
import UserWeight from "../../assets/Weight User.png"
import Progress from "../../assets/Progress.png"
import Setting from "../../assets/setting.png"
import BMI from "../../assets/BMI.png"
import showPwdImg from '../../assets/Show.png';
import hidePwdImg from '../../assets/Hide.png';
import Background from "../../assets/Background.png"
import "./user.css"


function User () {

  const [pwd, setPwd] = useState('Password');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [setting, setSetting] = useState(true)
  const handleSetting = () => {
    setSetting(!setting)
  }



  return(
    <div>
      <div className="userPage">
        <div className="backgroundUser">
            <div className="banner">
              <img className="imgBanner" src={Background} alt="images" />
            </div>
            <div className="userImg">
              <img
                src="https://cdn.myanimelist.net/images/characters/12/274345.jpg"
                alt="user profile" />
            </div>
        </div>

        {setting ?
        <div>
          <div>
            <button onClick={handleSetting} class="btnSetting">
              <img src={Setting}
              alt="setting"/>Setting
            </button>
            
          </div>
          <div>
            <div className="userData">
              <p className="userName">Derry</p>
              <p className="emailUser">ilhamderryn@gmail.com</p>
            </div>
            <div className="pwd-container">
              <input
                readOnly
                name="pwd"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={e => setPwd(e.target.value)}
              />
              <img title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
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
      :
      <div>
            <form>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="Enter your name" />
                  </div>

                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>


      }
      </div>
    </div>
  )
}

export default User