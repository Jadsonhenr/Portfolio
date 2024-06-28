import './header.css'
import React, {useState} from "react";
function Header() {
    const [active,setActive] = useState("lista__links");
        const navToggler = ()=>{
            if(active ==="lista__links"){
                setActive("lista__links lista__links__active")
            }else{
                setActive("lista__links")
            }
        }  
    return (
        <header>
            <nav className='nav'>
                <a className='logo' href='#1'>Jadson <span>Almeida</span></a>
                <ul className={active}>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#habilidades'>TECNOLOGIA</a></li>
                    <li><a href='#projetos'>PROJETOS</a></li>
                    <li><a href='#educacao'>EDUCAÇÃO</a></li>
                    <li><a href='#contato'>CONTATO</a></li>
                </ul>
                <div onClick={navToggler} className="toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    );
}
export default Header;