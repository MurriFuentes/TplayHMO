import { Link } from 'react-router-dom';
import { useState } from 'react';
import {AdmonDropdown} from './AdmonItems';
import './Dropdown.css';

export function AdmonDrop () {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
        <ul className={dropdown ? "Admon-submenu clicked" : "Admon-submenu"} onClick={() => setDropdown(!dropdown)}>
            {AdmonDropdown.map((item) => (
                <li key={item.id} className={item.dName} onClick={() => setDropdown(false)}>
                    <Link to={item.path}>{item.title}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}
