import './css/NavBar.css';
import './css/Footer.css';
import './css/Cards.css';
import './App.css';
import './css/PeticionContrato.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/NavBar/Navbar";
import Footer from './components/Footer';
import PageHome from './pages/Home';
import PageCotizador from './pages/Cotizar';
import PageTvInternet from './pages/Tv+Internet';
import PageInternet from './pages/Internet';
import PageLogin from './pages/Login';
import PageListar from './pages/Listar';
import PageListarCotizacion from './pages/ListarCotizaciones';
import PageContratar from './pages/Contratar';
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
          <Route path="/Listar" exact component={PageListar}></Route>
          <Route path="/Cotizaciones" exact component={PageListarCotizacion}></Route>
          <Route path="/Contratar" exact component={PageContratar}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
