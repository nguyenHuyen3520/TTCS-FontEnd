import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import HeaderNavbarLogo from './HeaderNavbarLogo';
import HeaderNavbarList from './HeaderNavbarList';
import HeaderNavbarIcon from './HeaderNavbarIcon';

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {

    return (
        <header className="header grid">
            <nav className="header__navbar">
                <HeaderNavbarLogo />
                <HeaderNavbarList />                
                <HeaderNavbarIcon />
            </nav>
        </header>
    )
}

export default Header