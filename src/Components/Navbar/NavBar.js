import { useState } from "react";
import NavLogo from "./NavLogo";
import './NavBar.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import NavbarMenu from "./NavbarMenu";

export default function NavBar() {
    const [isMenuHide, setIsMenuHide] = useState(false);
    return (
        <header className='box'>
            <NavLogo />
            <NavbarMenu isMenuHide={isMenuHide} />
            <div onClick={() => setIsMenuHide(!isMenuHide)} className='menu_btn'>
                {isMenuHide ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}  
            </div>
        </header>
    );

}
