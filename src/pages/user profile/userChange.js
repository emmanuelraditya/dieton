import React, {useState} from "react";
import Swal from 'sweetalert2'
import showPwdImg from '../../assets/Show.png';
import hidePwdImg from '../../assets/Hide.png';
import "./userChange.css"


function UserChange () {

  let [pwd, setPwd] = useState('Password');
  let [userName, setUserName] = useState('')
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const handleClick = () => 
  Swal.fire({
    type: 'success',  
    text: 'Yeeayy...! Diet On Successfully Save Your Profile Change',
    timer: '5000'
  })

  return(
    <div>
      <div className="userPage">
        <div>
          <form>
          <button type="submit" className="btn btn-primary btn-block btnSave" onClick={handleClick} >Save</button>
            <div className="form formChange">
              <div className="form-group formGroup">
                <label>Name</label>
                <input type="text" className="form-control inputChange" placeholder="Enter your name" />
              </div>
              <div className="form-group formGroup">
                <label>Password</label>
                <div className="formIcon">
                    <input
                    className="form-control inputChange"
                    type={isRevealPwd ? "text" : "password"}
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}/>
                    <img title={isRevealPwd ? "Hide password" : "Show password"}
                    src={isRevealPwd ? showPwdImg : hidePwdImg}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserChange