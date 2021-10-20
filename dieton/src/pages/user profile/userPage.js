import User from "./user";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import "./userPage.css"

function UserPage() {
  return (
      <>
      <div className="userAll">
        <div className="sideNavbar">
            <SideNavbar />
        </div>
        <div  className="">
        <User />
        </div>
      </div>
      </>
  )
}

export default UserPage;