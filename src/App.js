import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
