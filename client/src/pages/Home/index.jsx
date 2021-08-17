import "./home.css"
// Components
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import Posts from "../../components/Posts"
import Sidebar from "../../components/Sidebar"

export default function Home() {
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
