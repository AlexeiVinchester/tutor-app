import { useState } from "react";
import NavLogo from "./NavLogo";
import NavBarMenu from "./NavBarMenu";
import './NavBar.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function NavBar() {

    const [isMenuHide, setIsMenuHide] = useState(false);
    const navBarItems = ['Menu', 'Pupils', 'Lessons', 'Tutors', 'Contacts'];
    return (
        <header clastylesName='header'>
            <div className="container-header">
                <div className='box'>
                    <NavLogo />
                    <NavBarMenu items={navBarItems} isMenuHide={isMenuHide}/>
                    <div onClick={() => setIsMenuHide(!isMenuHide)} className='menu_btn'>
                        {isMenuHide ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}  
                    </div>
                </div>
            </div>
        </header>
    );

}
