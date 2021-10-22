import useUser from "../../hooks/useUser";
import { Link, useRouteMatch} from "react-router-dom";

export default function NavButton() {
    const { isLogged, logout } = useUser()
    const match = useRouteMatch("/Login");
    
    const handleClick = e => {
        e.preventDefault();
        sessionStorage.removeItem("jwt")
        logout()

    }
    let jwt = sessionStorage.getItem("jwt")
    console.log(jwt)
    const renderLoginButtons = ({isLogged}) => {
        return jwt
                ? <Link to="./" onClick={handleClick}>
                    <button className="navButton">
                        Logout
                    </button>
                </Link>
                : <Link to="./Login">
                    <button className="navButton">
                        Login
                    </button>
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