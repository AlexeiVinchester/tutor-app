import {AiFillDingtalkCircle } from 'react-icons/ai';

export default function NavLogo(){
    return (
        <div className='logo_container'>
            <AiFillDingtalkCircle className='logo_icon' size={40}/>
            <h1 className='logo_message'>Tutor-app</h1>
        </div>
    );
    
}