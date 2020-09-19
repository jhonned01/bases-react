import React from 'react';
import '../assets/syles/components/Header.scss'

const Header = () => (
    <header className="header">
        <img className="header__img" src="" alt="img-perfil"/>
        <div className="header__menu">
            <div className="header__menu_profile">
                <img src="" alt="suer-Icon"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li>
                    <a href="">Cuenta</a>
                </li>
                <li>
                    <a href="">Cerrar Sesion</a>
                </li>
            </ul>

        </div>
    </header>

);


export default Header;