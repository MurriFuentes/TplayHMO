import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './NavbarItems';
import NavButton from './NavButton';
import * as icons from 'react-icons/ri';
import * as icons2 from 'react-icons/fa';

export default function Navbar() {
    const [mobile, setMobile] = useState(false);
    const [togglebar, setTogglebar] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1065) {
            setMobile(true);
        }

    }, [])

    useEffect(() => {
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

    }, []);

    return (
        <>
            <nav id="navbar">
                <Link to="/" className="navbar-logo" onClick={() => setTogglebar(false)}>
                    <icons.RiGooglePlayLine />
                    Totalplay
                </Link>

                {!mobile && (
                    <ul className="nav-items">
                        {navItems.map((item) => (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}

                {!mobile && <NavButton />}

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
                    {navItems.map((item) => {
                        return (
                            <li key={item.id} className={item.dName} onClick={() => setTogglebar(false)}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
