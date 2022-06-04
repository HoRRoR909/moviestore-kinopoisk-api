import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Provider } from "react-redux";

import { store } from "./redux";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";
import FilmPage from "./pages/filmPage/FilmPage";
import OrderPage from "./pages/orderPage/OrderPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/:title">
              <FilmPage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
