import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Context from "../../context/UserContext";

export default function NavButton() {
    //islogged = false
    const { isLogged, logout ,jwt } = useUser()
    const handleClick = e => {
        e.preventDefault();
        logout();
    }
    useEffect(()=>{
        console.log(isLogged)
    },[jwt])

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