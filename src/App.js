import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Reader from "./Reader";
import Upload from "./Upload";
import Footer from "./Footer";
import Privacy from "./Privacy";
import Error from "./Error";

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
