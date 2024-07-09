import { useState } from "react";
import logo from "../assets/logo.svg";
import { navigation } from "../constants";
import hamburgerOpen from "../assets/hamburger.svg";
import hamburgerClosed from "../assets/close.svg";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

return (
    <div className='pt-[2.8125rem] lg:pt-14'>
        <div className="px-6 lg:max-w-[1110px] flex justify-between items-center font-primary m-auto text-sm lg:p-0">
            <a href="/"><img src={logo} alt="/" width="147" height="24" className="pt-2" /></a>
            <nav className="hidden lg:flex">
                <ul className='flex gap-8 text-color-text'>
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url}>
                            <li className='list-none hover:opacity-50 transition-all ease-in-out duration-200'>{item.title}</li>
                        </a>    
                    ))}
                </ul>
            </nav>
            <button className='hidden lg:flex bg-[#F3603C] px-8 py-3 rounded-full text-white shadow-lg hover:bg-color-accentHover transition-all duration-200'>Get Started</button>
            <button onClick={toggleNav} className="lg:hidden">
                {menuOpen ? <img src={hamburgerClosed}/> : <img src={hamburgerOpen} />} 
            </button>
        </div>
        {/* OPEN MENU */}
        {menuOpen && (
            <ul className=''>
            {navigation.map((item) => (
                <a key={item.id} href={item.url}>
                    <li className='list-none hover:opacity-50 transition-all ease-in-out duration-200 py-4'>{item.title}</li>
                </a>    
            ))}
        </ul>
        )}
    </div>
)
}

export default Navbar
