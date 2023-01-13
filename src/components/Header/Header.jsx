import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showBurger, setShowBurger] = useState(false);
    const burgerFunc = () => {
        setShowBurger(!showBurger)
    }
    return (
        <header >

            <div className='header'>
                <h2 className='header__h2'>  <Link to={"/"}>Trial Watch | Магазин</Link>
                </h2>
                <div className='header__nav'>

                    <div className={showBurger ? 'header__category showBurger' : 'header__category'}>
                        <Link onClick={() => {
                            burgerFunc()
                        }} to={"/models"}>МОДЕЛИ</Link>
                        {/* <Link  onClick={() => {
                burgerFunc()
            }} to={"/questions"}>ВОПРОСЫ</Link> */}
                        <Link onClick={() => {
                            burgerFunc()
                        }} to={"/reviews"}>ОТЗЫВЫ</Link>
                        <div className='header__burger'>

                            <div>
                                <div className="header__icon">  </div>
                          
                                <a className='header__a' target={"__blank"} href="+7 (495) 787 34 22">+7 (495) 787 34 22</a>
                            </div>
                            <p className='header__p'>
                                Пн-Пт. с 8:00 до 18:00
                            </p>
                        </div >
                    </div>

                    <div className='mobile-btn' onClick={burgerFunc}>
                        {showBurger ? <p className='mobile-p'><FontAwesomeIcon icon={faXmark} /></p> : <p className='mobile-p'><FontAwesomeIcon icon={faBars} /></p>}
                    </div>
                </div>
                <div className='header__num'>
                    <div>
                        <a className='header__a' target={"__blank"} href="+7 (495) 787 34 22">+7 (495) 787 34 22</a>
                    </div>
                    <p className='header__p'>
                        Пн-Пт. с 8:00 до 18:00
                    </p>
                </div >
            </div>
        </header>
    )
}

export default Header;
