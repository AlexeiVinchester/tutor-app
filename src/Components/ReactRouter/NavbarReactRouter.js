import { Link } from "react-router-dom";

export default function NavbarReactRouter({isMenuHide}) {
    return (
            <ul className={isMenuHide ? `menu active` : 'menu'}>
                <li><Link className="menu_item" to="/">Main</Link></li>
                <li><Link className="menu_item" to="/students">Students</Link></li>
                <li><Link className="menu_item" to="/lessons">Lessons</Link></li>
                <li><Link className="menu_item" to="/tutors">Tutors</Link></li>
                <li><Link className="menu_item" to="/contacts">Contacts</Link></li>
            </ul>
    );
}