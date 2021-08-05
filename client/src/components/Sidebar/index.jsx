import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/117958973_2756111237821896_2814351278256452421_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4ytmLuafv64AX-me8Bn&_nc_ht=scontent.fbkk28-1.fna&oh=978ffe694e44c33371d7374443d59955&oe=61315F58"
          alt="profile pic"
          className="sidebar-profile-img"
        />
        <p className="sidebar-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod omnis
          aut consequatur iure et animi repudiandae.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-content">
          <li className="sidebar-category-list">Music</li>
          <li className="sidebar-category-list">Style</li>
          <li className="sidebar-category-list">Sport</li>
          <li className="sidebar-category-list">Food</li>
          <li className="sidebar-category-list">Tech</li>
          <li className="sidebar-category-list">Game</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW ME</span>
        <div className="sidebar-icons-container">
          <i className="social-icon fab fa-facebook-square" />
          <i className="social-icon fab fa-twitter-square" />
          <i className="social-icon fab fa-line" />
          <i className="social-icon fab fa-instagram-square" />
        </div>
      </div>
    </div>
  )
}
