import NavBarItem from "./NavBarItem";

export default function NavBarMenu({items, isMenuHide}) {
    return (
        <ul className={isMenuHide ? `menu active` : 'menu'}>
            {
                items.map((item) => (
                    <NavBarItem 
                        itemName={item} 
                        key={item} 
                        handleClick={()=> console.log('')} 
                    />
                ))
            }
        </ul>
    );
}