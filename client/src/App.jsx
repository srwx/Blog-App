import { Switch, Route } from "react-router-dom"
// Components
import Navbar from "./components/Navbar"
// Pages
import Home from "./pages/Home"
import SinglePost from "./pages/SinglePost"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={SinglePost} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
