import './css/NavBar.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/NavBar/Navbar";
import Page_Home from './pages/Home';
import Page_Cotizador from './pages/Cotizador';
import Page_TvInternet from './pages/Tv+Internet';
import Page_Internet from './pages/Internet';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Page_Home}></Route>
          <Route path="/Tv-Internet" exact component={Page_TvInternet}></Route>
          <Route path="/Internet" exact component={Page_Internet}></Route>
          <Route path="/Cotizador" exact component={Page_Cotizador}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
