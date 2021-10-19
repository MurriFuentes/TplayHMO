
import { Link } from "react-router-dom";

export default function NavButton() {
    return(
        <Link to="./Login">
            <button className="navButton">Login</button>
        </Link>
    );
}