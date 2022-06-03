import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Provider } from "react-redux";

import { store } from "./redux";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
