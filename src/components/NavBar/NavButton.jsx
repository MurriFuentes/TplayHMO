import useUser from "../../hooks/useUser";
import { Link, useRouteMatch} from "react-router-dom";

export default function NavButton() {
    //islogged = false
    const { isLogged, logout } = useUser()
    //CAMBIAR cuando este funciondo el login
    const match = useRouteMatch("/Login")

    const handleClick = e => {
        e.preventDefault();
        logout()
    }

    const renderLoginButtons = ({isLogged}) => {
        return isLogged
                ? <Link to="./" onClick={handleClick}>
                    <button className="navButton">Logout</button>
                </Link>
                : <Link to="./Login">
                    <button className="navButton">Login</button>
                </Link>
    }
    
    const content = match
    ? null
    : renderLoginButtons({isLogged})

    return (
        <header className='gf-header'>
          {content}
        </header>
      )
}