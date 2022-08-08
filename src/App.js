import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Provider } from "react-redux";
import { store } from "./redux";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";
import FilmPage from "./pages/filmPage/FilmPage";
import OrderPage from "./pages/orderPage/OrderPage";
import { paths } from "./paths";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={`${paths.film}/:id`} element={<FilmPage />} />
            <Route path={paths.order} element={<OrderPage />}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
