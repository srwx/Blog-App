import "./DropdownMenu.css"

export default function DropdownMenu({ icon, menuName }) {
  return (
    <div className="temp dropdown-item">
      <div className="dropdown-icon-container">
        <i className={`dropdown-menu-icon ${icon}`} />
      </div>
      <span className="dropdown-name">{menuName}</span>
    </div>
  )
}
