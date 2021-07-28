// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Settings from "./components/settings/Settings";
import TopHeader from "./components/topHeader/TopHeader";
import Write from "./components/write/Write";
import Single from "./components/single/Single";

function App() {
  const currentUser = false;
  return (
    <Router>
      <TopHeader/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register/>}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single/>
        </Route>
        <Route path="/write">{currentUser ? <Write/> : <Login/>}</Route>
        <Route path="/settings">
          {currentUser ? <Settings/> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;