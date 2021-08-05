import { NavLink } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <i className="social-icon fab fa-facebook-square" />
        <i className="social-icon fab fa-twitter-square" />
        <i className="social-icon fab fa-line" />
        <i className="social-icon fab fa-instagram-square" />
      </div>
      <div className="nav-center">
        <ul className="menu-list">
          <NavLink to="/" className="link" activeClassName="link-active">
            <li className="menu-item">HOME</li>
          </NavLink>
          <li className="menu-item">ABOUT</li>
          <li className="menu-item">WRITE</li>
          <li className="menu-item">CONTACT</li>
          <li className="menu-item">LOG OUT</li>
        </ul>
      </div>
      <div className="nav-right">
        <img
          src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/117958973_2756111237821896_2814351278256452421_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4ytmLuafv64AX-gMiJG&_nc_ht=scontent.fbkk28-1.fna&oh=1cddba0e203295ac22ae5fefd3b169be&oe=612D6AD8"
          alt="profile"
          className="profile-img"
        />
        <i className="search-icon fas fa-search" />
      </div>
    </div>
  )
}
