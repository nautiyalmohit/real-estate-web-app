import React, { useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import './Header.css';
let i = 0;
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    // console.log('one', menuOpened);
    const getMenuStyle = (menuOpened => {
        if (document.documentElement.clientWidth <= 768) {
            return { right: !menuOpened && "-100%" }
        }
    });
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={
                    () => {
                        setMenuOpened(false)
                    }}>
                    <div className="h-menu flexCenter" style={getMenuStyle(menuOpened)}>
                        <a
                            href="">
                            Residencies
                        </a>
                        <a href="">Our Values</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                    <div className="menu-icon" onClick={() => { setMenuOpened((prev) => !prev) }}>
                        <BiMenuAltRight size={30} />
                    </div>
                </OutsideClickHandler>
            </div>
        </section>
    )
}
export default Header;