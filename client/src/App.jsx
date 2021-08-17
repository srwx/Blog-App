import { Switch, Route } from "react-router-dom"
// Pages
import Home from "./pages/Home"
import SinglePost from "./pages/SinglePost"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={SinglePost} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
