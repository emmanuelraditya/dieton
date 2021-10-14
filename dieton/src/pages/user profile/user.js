import React from "react";
import Background from "../../assets/Background.png"

function User () {
  return(
    <div>
      <div>
        <div className="backgroundImg">
          <img
          src={Background}
          alt="Backround"/>
        </div>
      </div>
    </div>
  )
}

export default User