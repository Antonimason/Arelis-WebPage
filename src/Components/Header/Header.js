import React, {useState} from 'react'
import './Header.css'
import Icon from "../../Assets/Icono1.jpg";
import Hamburguer from "../../Assets/menu.svg"
function Header(){

    const [navToggle, setNavToggle] = useState(false)

    const [colorChange, setColorChange] = useState(false);
     const headerBg = ["white","#f6f4e8"];
    const changeheaderColor = () => {
        window.scrollY >= 80 ? setColorChange(true) : setColorChange(false);
    }
    window.addEventListener('scroll', changeheaderColor);

    return (
        <div className='header' style={{background: colorChange ? headerBg[0] : headerBg[1]}}>
            <div className="header__hamburguer"><img src={Hamburguer} className="header__img" alt="Menu" onClick={e=>{setNavToggle(!navToggle)}} /></div>
            <div className='header__logo'></div>

            <ul className= {navToggle ? "header__nav header__nav--actived" :"header__nav header__nav--desactived"}>
                <li className='nav__list'><a className='nav__path' href='#inicio-contenedor' rel="noopener noreferrer" title="Incio">Inicio</a></li>
                <li className='nav__list'><a className='nav__path' href='#acerca-contenedor' rel="noopener noreferrer" title="Acerca">Acerca de</a></li>
                <li className='nav__list'><a className='nav__path' href='#servicios-contenedor' rel="noopener noreferrer" title="Servicios">Servicios</a></li>
                <li className='nav__list'><a className='nav__path' href='#galeria-contenedor' rel="noopener noreferrer" title="Galeria">Galeria</a></li>
                <li className='nav__list'><a className='nav__path' href='#contacto-contenedor' rel="noopener noreferrer" title="contacto">Contacto</a></li>
            </ul>

        </div>
    )
}

export default Header;