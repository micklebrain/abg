import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                    <div className="header__middle__menus">
                        <nav className="main-nav " >
                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle /> </span>
                            </> : <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight /> </span>
                            </>}
                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> ABGs </NavLink> </li>
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Boba Shops </NavLink> </li>
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Car meets </NavLink> </li>
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/falsies`}> Falsies </NavLink> </li>
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Festivals </NavLink> </li>
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Makeup </NavLink> </li>
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Tattoos </NavLink> </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Cities <FiChevronDown /> </Link>
                                    <ul className={boxClassSubMenu.join(' ')} >
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/denver`}> Denver </NavLink> </li>
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/lasvegas`}> Las Vegas </NavLink> </li>
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/newyorkcity`}> New York City </NavLink> </li>
                                    </ul>
                                </li>                                
                                <li className="menu-item" > <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/cart`}> Cart </NavLink> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbarmenu