import './css/NavBar.css';
import './css/Footer.css';
import './css/Cards.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/NavBar/Navbar";
import Footer from './components/Footer';
import PageHome from './pages/Home';
import PageCotizador from './pages/Cotizador';
import PageTvInternet from './pages/Tv+Internet';
import PageInternet from './pages/Internet';
import PageLogin from './pages/Login';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PageHome}></Route>
          <Route path="/Tv-Internet" exact component={PageTvInternet}></Route>
          <Route path="/Internet" exact component={PageInternet}></Route>
          <Route path="/Cotizador" exact component={PageCotizador}></Route>
          <Route path="/Login" exact component={PageLogin}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
