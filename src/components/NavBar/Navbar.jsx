import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './NavbarItems';
import NavButton from './NavButton';
import useUser from '../../hooks/useUser';
import * as icons from 'react-icons/ri';
import * as icons2 from 'react-icons/fa';

export default function Navbar() {
    const [mobile, setMobile] = useState(false);
    const [togglebar, setTogglebar] = useState(false);
    const { isLogged } = useUser();
    var [navOptions, setNavOptions] = useState(navItems) ;

    useEffect(() => {
        if (window.innerWidth < 1065) {
            setMobile(true);
        }

        const handleResize = () => {
            if (window.innerWidth < 1065) {
                setMobile(true);
            } else {
                setMobile(false);
                setTogglebar(false);
            }

        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useEffect(() => {
        if (!isLogged){
            setNavOptions(navItems.filter(item => item.title !== "LISTAR"))
        }else{
            setNavOptions(navItems)
        }

    }, [isLogged])

    return (
        <>
            <nav id="navbar">
                <Link to="/" className="navbar-logo" onClick={() => setTogglebar(false)}>
                    <icons.RiGooglePlayLine />
                    Totalplay
                </Link>
                
                {!mobile && (
                    <>
                        <ul className="nav-items">
                            {navOptions.map((item) => (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <NavButton />
                    </>
                )}


                {mobile && (
                    <div className="toggleButton">
                        {togglebar ? (
                            <icons2.FaTimes onClick={() => setTogglebar(!togglebar)} />
                        ) : (
                            <icons2.FaBars onClick={() => setTogglebar(!togglebar)} />
                        )}
                    </div>
                )}

            </nav>

            <div className="ToggleMenu">
                <ul className={togglebar ? "nav-items-toggled active" : "nav-items-toggled"}>
                    {navOptions
                    .map((item) => {
                        return (
                                <li key={item.id} className={item.dName} onClick={() => setTogglebar(false)}>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                        );
                    })}
                    <div onClick={() => setTogglebar(false)}>
                        <NavButton />
                    </div>
                </ul>
            </div>
        </>
    );
}
