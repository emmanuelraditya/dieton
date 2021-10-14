import React from "react"
import "./header.css"
import Bell from "../../assets/Bell.png"
import Logo from "../../assets/Logo.png"

function Header () {
  return(
    
    <div className="header">
      <div className="logo">
        <img className="bannerLogo" src={Logo}
        alt="Logo" />

      </div>
      <div className="notifIcon">
        <img className="iconNotif"
        src={Bell}
        alt="Bell" />
      </div>
      <div className="userIcon">
        <ul className="profile-wrapper">
          <li>
          {/* <!-- user profile --> */}
          <div className="profile">
            <img
            src="https://cdn.myanimelist.net/images/characters/12/274345.jpg"
            alt="user profile" />
            {/* <!-- more menu --> */}
            <ul className="menu">
              <li>My Profile</li>
              <li>Log out</li>
              {/* <li><a href="#">Log out</a></li> */}
            </ul>
          </div>
          </li>
        </ul>
    </div>
    </div>
  )
}

export default Header