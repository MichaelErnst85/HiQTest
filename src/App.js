import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Privacy from "./Components/Privacy";
import Reader from "./Components/Reader";
import Upload from "./Components/Upload";



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
