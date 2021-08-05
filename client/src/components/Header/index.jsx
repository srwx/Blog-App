import "./header.css"

export default function Header() {
  return (
    <>
      <div className="header-title">
        <span className="title-sm">Learning MERN Stack</span>
        <span className="title-lg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="background"
        className="header-img"
      />
    </>
  )
}
