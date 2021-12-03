import Logo from "../images/LOGO-BLANCO.png"
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <>
            <div id="footer">
                <Link to="/" className="navbar-logo">
                    <img src={Logo} alt="logo" className="Logo"/>
                </Link>
                <div className="nav-items">
                    <p className="pFooter"> Terminos</p>
                    <p className="pFooter">Aviso legal</p>
                </div>
            </div>
        </>
    )
}