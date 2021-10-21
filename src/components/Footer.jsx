import * as icons from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <>
            <div id="footer">
                <Link to="/" className="navbar-logo">
                    <icons.RiGooglePlayLine/>
                    Totalplay
                </Link>
                <div className="nav-items">
                    <p className="pFooter"> Terminos y condiciones</p>
                    <p className="pFooter">Aviso legal y políticas de privacidad</p>
                </div>
            </div>
        </>
    )
}