import { useContext } from "react"
// Styles
import "./userFNameLName.css"
// Context
import { UserContext } from "../../../context/Context"

export default function UserFNameLName() {
  const { user } = useContext(UserContext)
  return (
    <div className="userFNameLNamePic dropdown-item">
      <img
        src={user.profilePic}
        alt="profile-pic"
        className="profile-pic-dropdown"
      />
      <div className="userFNameLName-dropdown">
        <div className="FNameLNamedropdown">
          {user.firstname} {user.lastname}
        </div>
        <div className="view-profile-message">View my profile</div>
      </div>
    </div>
  )
}
