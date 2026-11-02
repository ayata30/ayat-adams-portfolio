import { useState } from "react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>

            <header className="navbar">
            <a href="#" className="logo">
                <img src="/pfp1.png" 
                alt="Ayat Adams pfp"></img>

            </a>

             <button 
               className="nav-toggle"
               aria-label="Toggle navigation"
               aria-expanded={isOpen}
               onClick={() => setIsOpen(!isOpen)}>

            <span className="hamburger"></span>
            </button>

             <nav className={isOpen ? "nav nav-open" : "nav"}>
                <ul className="nav__list">
                    <li>
                        <a href="#" onClick={() => setIsOpen(false)}>Home</a>
                    </li> 

                    <li>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    </li>

                     <li>
                        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    </li>

                    <li>
                        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                    </li>
                    
                </ul>
            </nav>

        </header>

        
        
        </>
    )
}
export default Navbar;