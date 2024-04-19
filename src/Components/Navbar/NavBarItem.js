export default function NavBarItem({itemName, handleClick}) {
    return (
        <li>
            <a 
                href="##" 
                className='menu_item'
                onClick={handleClick}
            >
                {itemName}
            </a>
        </li>
    );
}