import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import Privacy from "./Privacy";
import Reader from "./Reader";
import Upload from "./Upload";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/read">
              <Reader /> 
            </Route>
            <Route path="/privacy">
              <Privacy /> 
            </Route>
            <Route path="*">
              <Error /> 
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
