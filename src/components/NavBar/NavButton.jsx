import useUser from "../../hooks/UseUser";
import { Link, useRouteMatch} from "react-router-dom";

export default function NavButton() {
    const { isLogged, logout } = useUser()
    const match = useRouteMatch("/Login");
    
    const handleClick = e => {
        e.preventDefault();
        sessionStorage.removeItem("jwt")
        logout()
    }
    
    const renderLoginButtons = ({isLogged}) => {
        return isLogged
                ? <Link to="./" onClick={handleClick}>
                    <div className="navButton">
                        Logout
                    </div>
                </Link>
                : <Link to="./Login">
                    <div className="navButton">
                        Login
                    </div>
                </Link>
    }
    
    const content = match
    ? null
    : renderLoginButtons({isLogged})
    
    return (
        <header>
          {content}
        </header>
      )
}