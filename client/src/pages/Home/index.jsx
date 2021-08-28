// Styles
import "./home.css"
// useContext() from react
import { useContext } from "react"
// UserContext
import { UserContext } from "../../context/Context"
// Components
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import Posts from "../../components/Posts"
import Sidebar from "../../components/Sidebar"

export default function Home() {
  const { user, dispatch } = useContext(UserContext)

  return (
    <div>
      <Navbar />
      <Header />
      <div className="posts-sidebar">
        <Posts />
        <Sidebar />
      </div>
    </div>
  )
}
