import "./home.css"
// Components
import Header from "../../components/Header"
import Posts from "../../components/Posts"
import Sidebar from "../../components/Sidebar"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="posts-sidebar">
        <Posts />
        <Sidebar />
      </div>
    </div>
  )
}
