import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className='header'>
            <h2 className='header__h2'>  <Link to={"/"}>Trial Watch | Магазин</Link>
            </h2>
          
        <div className='header__category'>
            <Link to={"/models"}>МОДЕЛИ</Link>
            <Link to={"/questions"}>ВОПРОСЫ</Link>
            <Link to={"/reviews"}>ОТЗЫВЫ</Link>
            </div>
            <div>
                <div>
                    {/* <FontAwesomeIcon icon={faPhone} /> */}
                <a className='header__a' target={"__blank"} href="+7 (495) 787 34 22"><FontAwesomeIcon icon={faPhone} /></a>
                </div>
                <p className='header__p'>
                Пн-Пт. с 8:00 до 18:00
                </p>
            </div>
           
        </header>
    )
}

export default Header;