import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Upload from "./Upload";


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/">
          <Home  />
          </Route>
          <Route path="/upload">   
          <Upload  />
          </Route>  
        </Switch>
    </div>
    </Router>
  );
}

export default App;
