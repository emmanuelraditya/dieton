import React, {useState} from "react";
import showPwdImg from '../../assets/Show.png';
import hidePwdImg from '../../assets/Hide.png';
import Background from "../../assets/Background.png"
import "./user.css"


function User () {

  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return(
    <div>
      <div className="backgroundImage">
        <div className="backgroundUser"
          style={{backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          height:'350px',
          backgroundSize: 'cover'
          }}>
            <div className="profileUser">
              <img
              src="https://cdn.myanimelist.net/images/characters/12/274345.jpg"
              alt="user profile" />
          </div>
          <div className="pwd-container">
            <input
              name="pwd"
              placeholder="Enter Password"
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              readonly
            />
            <img
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setIsRevealPwd(prevState => !prevState)}
            />
      </div>
        </div>
      </div>
    </div>
  )
}

export default User