import { useState } from "react";
import Link from "../Link/Link";
import { BiMenuAltLeft, } from 'react-icons/bi';
import { IoIosClose } from "react-icons/io";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Address' },
      ];
      

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
            {
                open === true ? <BiMenuAltLeft className="text-3xl "></BiMenuAltLeft> : <IoIosClose></IoIosClose>
            }
            
            </div>
            <ul className={`md:flex absolute duration-1000 absolute md:static ${open ? 'top-16 ': '-top-64'}
            bg-yellow-200 px-6`}>
            {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;