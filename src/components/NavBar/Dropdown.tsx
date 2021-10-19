import { Link } from 'react-router-dom';
import { navItems } from './NavbarItems';

export default function DropTogglebar () {
    return (
        <>
        <ul className="nav-items-toggled">
            {navItems.map((item) => (
                <li key={item.id} className={item.dName}>
                    <Link to={item.path}>{item.title}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}
