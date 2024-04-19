import NavBarItem from "./NavBarItem";

export default function NavBarMenu({items, isMenuHide, setMenuState}) {
    return (
        <ul className={isMenuHide ? `menu active` : 'menu'}>
            {
                items.map((item) => (
                    <NavBarItem 
                        itemName={item} 
                        key={item} 
                        handleClick={()=> setMenuState(item)} 
                    />
                ))
            }
        </ul>
    );
}