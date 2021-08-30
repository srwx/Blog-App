import { useContext } from "react"
import { NavLink } from "react-router-dom"
import "./navbar.css"
// Context
import { UserContext } from "../../context/Context"
// Custom hooks
import useLoginBox from "../../hooks/useLoginBox"
import useRegisterBox from "../../hooks/useRegisterBox"
import useDropdown from "../../hooks/useDropdown"
// Components
import RegisterBox from "../RegisterBox"
import LoginBox from "../LoginBox"
import UserDropdown from "../UserDropdown"

export default function Navbar() {
  const { loginBoxOpen, loginClick, loginSubmit, loginResult } = useLoginBox()
  const { registerBoxOpen, registerClick, registerSubmit, registerResponse } =
    useRegisterBox()
  const { dropdownOpen, userIconClick } = useDropdown()
  const { user } = useContext(UserContext)

  return (
    <div className="navbar-container">
      <div className="nav-left">
        <input type="text" className="search-input" />
        <i className="search-icon fas fa-search" />
      </div>
      <div className="nav-center">
        <ul className="menu-list">
          <NavLink to="/" className="link" exact activeClassName="link-active">
            <li className="menu-item">HOME</li>
          </NavLink>
          <li className="menu-item">ABOUT</li>
          <li className="menu-item">WRITE</li>
          <li className="menu-item">CONTACT</li>
        </ul>
      </div>
      <div className="nav-right">
        {user ? (
          <img
            src={user.profilePic}
            alt="profile"
            className="profile-img"
            onClick={userIconClick}
          />
        ) : (
          <ul className="menu-list">
            <li className="menu-item" onClick={loginClick}>
              LOGIN
            </li>
            <li className="menu-item" onClick={registerClick}>
              REGISTER
            </li>
          </ul>
        )}
      </div>
      {loginBoxOpen ? (
        <LoginBox
          closeClick={loginClick}
          loginSubmit={loginSubmit}
          loginResult={loginResult}
        />
      ) : null}
      {registerBoxOpen ? (
        <RegisterBox
          closeClick={registerClick}
          registerSubmit={registerSubmit}
          registerResponse={registerResponse}
        />
      ) : null}
      {dropdownOpen ? <UserDropdown /> : null}
    </div>
  )
}
