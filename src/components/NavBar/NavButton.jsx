import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";

export default function NavButton() {
    //islogged = false
    const { isLogged, logout } = useUser()

    const handleClick = e => {
        e.preventDefault();
        logout();
    }

    return (
        <header>
            {
                isLogged
                    ? <Link to="#" onClick={handleClick}>
                        <button className="navButton">Logout</button>
                    </Link>
                    : <Link to="./Login">
                        <button className="navButton">Login</button>
                    </Link>
            }
        </header>
    );
}