import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Components/StandardComponents/Error";
import Footer from "./Components/StandardComponents/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/StandardComponents/NavBar";
import Privacy from "./Components/StandardComponents/Privacy";
import Reader from "./Components/Reader";
import ReaderFileReader from "./Components/ReaderFileReader";



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
            <Route path="/read">
              <Reader /> 
            </Route>
            <Route path="/readWithFR">
             <ReaderFileReader /> 
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
