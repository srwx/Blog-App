import { useContext } from "react"
// Style
import "./userDropdown.css"
// Context
import { UserContext } from "../../context/Context"

export default function UserDropdown() {
  const { user } = useContext(UserContext)
  console.log(user)
  return <div className="userDropdown-container"></div>
}
