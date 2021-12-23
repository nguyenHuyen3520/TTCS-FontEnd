import React, { Component } from 'react';
import { Link } from "react-router-dom"
class HeaderNavbarLogo extends Component {
    render() {
        return (
            <div className="header__navbar-logo">
            <Link to="" className="header__navbar-logo">
            <img
              src="https://e2.com.vn/wp-content/uploads/2020/05/cropped-logo_e_new.png"
              alt=""
            />
          </Link>
            </div>
        );
    }
}

export default HeaderNavbarLogo;