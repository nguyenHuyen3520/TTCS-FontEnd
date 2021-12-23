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

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

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