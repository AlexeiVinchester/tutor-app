import { Link } from "react-router-dom";

export default function NavbarMenu({isMenuHide}) {
    return (
            <ul className={isMenuHide ? `menu active` : 'menu'}>
                <li><Link className="menu_item" to="/">Main</Link></li>
                <li><Link className="menu_item" to="/students">Students</Link></li>
                <li><Link className="menu_item" to="/lessons">Lessons</Link></li>
                <li><Link className="menu_item" to="/statistics">Statistics</Link></li>
                <li><Link className="menu_item" to="/tasks">Tasks</Link></li>
                <li><Link className="menu_item" to="/contacts">Contacts</Link></li>
            </ul>
    );
}