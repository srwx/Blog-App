import { useContext } from "react"
import { Link } from "react-router-dom"
// Style
import "./userDropdown.css"
// Context
import { UserContext } from "../../context/Context"
// Components
import UserFNameLName from "./UserFNameLName"
import DropdownMenu from "./DropdownMenu"

export default function UserDropdown() {
  return (
    <div className="userDropdown-container">
      <UserFNameLName />
      <hr className="line-userdropdown" />
      <Link className="link">
        <DropdownMenu icon="fas fa-cog" menuName="Profile settings" />
      </Link>
      <Link className="link">
        <DropdownMenu icon="fas fa-question" menuName="Help" />
      </Link>
      <Link className="link">
        <DropdownMenu icon="fas fa-sign-out-alt" menuName="Log out" />
      </Link>
    </div>
  )
}
