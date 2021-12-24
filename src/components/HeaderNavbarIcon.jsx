import React, { Component } from 'react';
import { Link } from "react-router-dom"
class HeaderNavbarIcon extends Component {
  render() {
    return (
      <div className="header__navbar-icon">
      <div className="header__account">
      <a href className="header-cart__link">
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 23 23"
      enableBackground="new 0 0 23 23"
      xmlSpace="preserve"
    >
      <g>
        <path
          fill="currentColor"
          d="M11.5,14.1c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C15.5,12.3,13.7,14.1,11.5,14.1z M11.5,7.3
                    c-1.6,0-2.8,1.3-2.8,2.8c0,1.6,1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8C14.3,8.5,13,7.3,11.5,7.3z"
        />
        <path
          fill="currentColor"
          d="M11.5,23c-3.1,0-5.9-1.2-8.1-3.4c-2.2-2.2-3.4-5-3.4-8.1s1.2-5.9,3.4-8.1c2.2-2.2,5-3.4,8.1-3.4
                    s5.9,1.2,8.1,3.4c2.2,2.2,3.4,5,3.4,8.1s-1.2,5.9-3.4,8.1C17.4,21.8,14.5,23,11.5,23z M11.5,1.2C5.8,1.2,1.2,5.9,1.2,11.5
                    s4.6,10.3,10.3,10.3s10.3-4.6,10.3-10.3S17.1,1.2,11.5,1.2z"
        />
        <path
          fill="currentColor"
          d="M11.5,23c-1.5,0-2.9-0.3-4.2-0.8c-0.2-0.1-0.4-0.3-0.4-0.6v-5.3c0-1.8,1.5-3.3,3.3-3.3h2.6
                    c1.8,0,3.3,1.5,3.3,3.3v5.3c0,0.2-0.1,0.5-0.4,0.6C14.4,22.7,12.9,23,11.5,23z M8.1,21.2c1.1,0.4,2.2,0.6,3.4,0.6s2.3-0.2,3.4-0.6
                    v-4.9c0-1.2-0.9-2.1-2.1-2.1h-2.6c-1.2,0-2.1,0.9-2.1,2.1V21.2z"
        />
      </g>
    </svg>
    </a>
    <div className="header-cart--inners">
    <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Log In
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Register
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Coming Soon
                                </Link>
                            </li>
                            
                        </ul>
    </div>
      </div>
        <div className="header-cart">
          <a href className="header-cart__link">
            <svg
              version="1.1"
              x="0px"
              y="0px"
              width={20}
              viewBox="0 0 20 17"
              enableBackground="new 0 0 20 17"
              xmlSpace="preserve"
              style={{ width: 25 }}
            >
              <g>
                <path
                  strokeWidth="0.3"
                  strokeMiterlimit={10}
                  d="M3.9,8.9H1.4c-0.7,0-1.2-0.5-1.2-1.2V6.8
                              c0-0.7,0.5-1.2,1.2-1.2h2.9v0.8H1.4C1.2,6.4,1,6.6,1,6.8v0.8c0,0.2,0.2,0.4,0.4,0.4h2.4V8.9z"
                />
              </g>
              <g>
                <rect
                  x="6.7"
                  y="5.6"
                  strokeWidth="0.3"
                  strokeMiterlimit={10}
                  width="6.5"
                  height="0.8"
                />
              </g>
              <g>
                <rect
                  x={2}
                  y="8.1"
                  strokeWidth="0.3"
                  strokeMiterlimit={10}
                  width="15.1"
                  height="0.8"
                />
              </g>
              <g>
                <path
                  strokeWidth="0.3"
                  strokeMiterlimit={10}
                  d="M18.6,8.9h-2.4V8.1h2.4c0.2,0,0.4-0.2,0.4-0.4V6.8
                              c0-0.2-0.2-0.4-0.4-0.4h-2.9V5.6h2.9c0.7,0,1.2,0.5,1.2,1.2v0.8C19.8,8.3,19.2,8.9,18.6,8.9z"
                />
              </g>
              <g>
                <path
                  strokeWidth="0.3"
                  strokeMiterlimit={10}
                  d="M15.5,16.2H4.5c-0.8,0-1.4-0.5-1.6-1.3L1.4,8.6l0.8-0.2
                              l1.4,6.4c0.1,0.4,0.4,0.6,0.8,0.6h11.1c0.4,0,0.7-0.3,0.8-0.6l1.4-6.4l0.8,0.2l-1.4,6.4C17,15.7,16.3,16.2,15.5,16.2z"
                />
              </g>
              <g>
                <path
                  strokeWidth="0.3"
                  strokeMiterlimit={10}
                  d="M5.1,7.7c-0.1,0-0.1,0-0.2,0C4.7,7.5,4.6,7.3,4.7,7.1L7.2,1
                              c0.1-0.2,0.3-0.3,0.5-0.2C7.9,0.8,8,1.1,7.9,1.3L5.5,7.4C5.4,7.6,5.3,7.7,5.1,7.7z"
                />
              </g>
              <g>
                <path
                  strokeWidth="0.3"
                  strokeMiterlimit={10}
                  d="M14.9,7.7c-0.2,0-0.3-0.1-0.4-0.3l-2.4-6.1
                              c-0.1-0.2,0-0.4,0.2-0.5c0.2-0.1,0.4,0,0.5,0.2l2.4,6.1c0.1,0.2,0,0.4-0.2,0.5C15,7.6,14.9,7.7,14.9,7.7z"
                />
              </g>
            </svg>
          </a>
          <div className="header-cart--inners">
            <span className="header-cart--inners-text">No products in the cart.</span>
          </div>
        </div>
        <label htmlFor="header-with-search" className="header-search">
          <div href className="header-cart__link">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="19px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              xmlSpace="preserve"
            >
              <circle
                fill="none"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                cx="10.9"
                cy="9.5"
                r="8.4"
              />
              <line fill="none" x1="5.4" y1="15.6" x2="5.4" y2="15.6" />
              <line
                strokeWidth="1.5"
                strokeMiterlimit={10}
                x1="5.3"
                y1="15.2"
                x2="0.6"
                y2="19.4"
              />
            </svg>
          </div>
          <input
            type="checkbox"
            hidden
            id="header-with-search"
            className="header-with-search--check"
          />
          <label htmlFor="header-with-search" className="header-search__fullscreen">
            <div className="header-search__fullscreen--inner">
              <input
                type="text"
                className="header-search__fullscreen-text"
                placeholder="Search..."
              />
              <button className="btn">Find Now</button>
            </div>
            <div className="icon-close">
              <i className="fas fa-times" />
            </div>
          </label>
        </label>
        <div className="header-bars">
          <label
            htmlFor="header-bars"
            className="header-cart__link"
            style={{ marginRight: 0 }}
          >
            <svg
              className="qodef-setsail-burger"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="19px"
              height="17px"
              viewBox="0 0 26 20"
              enableBackground="new 0 0 26 20"
              xmlSpace="preserve"
              style={{ width: 20, height: 28 }}
            >
              <rect x="10.5" width="13.7" height="2.4" />
              <rect x={8} y="8.8" width="16.2" height="2.4" />
              <rect x="1.7" y="17.6" width="22.5" height="2.4" />
            </svg>
          </label>
          <input
            type="checkbox"
            hidden
            id="header-bars"
            className="header-bars__side"
          />
          <section className="header-side-menu">
            <div className="header-menu-logo">
              <img
                className="header-menu-img-logo"
                src="https://e2.com.vn/wp-content/uploads/2020/05/cropped-logo_e_new.png"
                alt=""
              />
              <label htmlFor="header-bars" className="icon-close">
                <i className="fas fa-times icon-close-bars" />
              </label>
            </div>
            <div className="header-menu-text">
              <img
                className="header-menu-img-text"
                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/sidearea-img-2.png"
                alt=""
              />
            </div>
            <div className="header-menu-sign">
              <div className="header-menu-signIn">
                Đăng Nhập
              </div>
              <div className="header-menu-signUp">
                Đăng Ký
              </div>

            </div>

            <div className="header-menu-search">
              <div className="header-search-heading">
                <p>Find Your Destination</p>
              </div>
              <div className="header-search-body">
                <input
                  type="text"
                  placeholder="Search..."
                  className="header-search-bar"
                />
                <button className="btn header-search-body-btn">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
            <div className="header-menu-footer">
              <div className="header-menu-label">Follow Me</div>
              <div className="header-social-icon">
                <a href className="header-social-twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href className="header-social-pinterest">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href className="header-social-facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href className="header-social-instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </section>
          <label htmlFor="header-bars" className="overlay">
            {" "}
          </label>
        </div>
      </div>
    );
  }
}

export default HeaderNavbarIcon;