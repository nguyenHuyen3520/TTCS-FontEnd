import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class HeaderNavbarList extends Component {
    render() {
        return (

            <ul className="header__navbar-list">
                <li className="header__navbar-item">
                    <Link
                        to="#"
                        className="header__navbar-link header__navbar-link--has-color"
                    >
                        Home Page
                    </Link>

                </li>
                <li className="header__navbar-item">
                    <Link to="" className="header__navbar-link">
                        {" "}
                        About us{" "}
                    </Link>
                    <div className="header__inner">
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    About Us
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    What We Offer
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Our Team
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Get In Touch
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    FAQ Page
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Coming Soon
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Error Page
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <Link to="#" className="header__navbar-link">
                        {" "}
                        Programs{" "}
                    </Link>
                    <div className="header__inner">
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Courses
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Full Stack Web Development
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Destination Item
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <Link to="#" className="header__navbar-link">
                        {" "}
                        Student{" "}
                    </Link>
                    <div className="header__inner">
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Class Schedule
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Office List
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to="#" className="header__inner-link">
                                    Products
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Payment
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <Link to="#" className="header__navbar-link">
                        {" "}
                        Blog{" "}
                    </Link>
                    <div className="header__inner">
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Blog Masonry
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <div className="header__inner--Blog">
                                    <Link to className="header__inner-link">
                                        {" "}
                                        Blog Standard{" "}
                                    </Link>
                                    <span className="arrow-right">
                                        <i className="ti-angle-right" />
                                    </span>
                                </div>
                                <ul className="header__inner-extra">
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Right Sidebar
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Left Sidebar
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Without Sidebar
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__inner-item">
                                <div className="header__inner--Blog">
                                    <Link to className="header__inner-link">
                                        Post Types
                                    </Link>
                                    <span className="arrow-right">
                                        <i className="ti-angle-right" />
                                    </span>
                                </div>
                                <ul className="header__inner-extra">
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Standard
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Gallery
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            {" "}
                                            Link{" "}
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            {" "}
                                            Quote{" "}
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            {" "}
                                            Video{" "}
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            {" "}
                                            Audio{" "}
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            No Sidebar
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <Link to="#" className="header__navbar-link">
                        {" "}
                        Contact{" "}
                    </Link>
                    <div className="header__inner">
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Product List
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Product Single
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <div className="header__inner--Blog">
                                    <Link to className="header__inner-link">
                                        Shops Layouts
                                    </Link>
                                    <span className="arrow-right">
                                        <i className="ti-angle-right" />
                                    </span>
                                </div>
                                <ul className="header__inner-extra">
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Threes Column
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Four Column
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Full Width
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__inner-item">
                                <div className="header__inner--Blog">
                                    <Link to className="header__inner-link">
                                        Shop Pages
                                    </Link>
                                    <span className="arrow-right">
                                        <i className="ti-angle-right" />
                                    </span>
                                </div>
                                <ul className="header__inner-extra">
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            My account
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            {" "}
                                            Cart{" "}
                                        </Link>
                                    </li>
                                    <li className="header__inner-extra-item">
                                        <Link to className="header__inner-extra-link">
                                            Checkout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <Link to className="header__navbar-link">
                        {" "}
                        E3 Talk{" "}
                    </Link>
                    <div className="header__inner header__inner--ful-width">
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to className="header__inner-link header__inner--text">
                                    Featured
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Tour list
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Tour Carousel
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Destination With Tours
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Destination list
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Destination Fullscreen Slider
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Fullscreen sections
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    reviews Carousel
                                </Link>
                            </li>
                        </ul>
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to className="header__inner-link header__inner--text">
                                    presentation
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    team
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    blog list
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Shop list
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Testimonials
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Banner
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Clients
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Parallax Section
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Video button
                                </Link>
                            </li>
                        </ul>
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to className="header__inner-link header__inner--text">
                                    classic
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    accordions
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    tabs
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    buttons
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    googles maps
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    progress bar
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    countdown
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    counters
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    call to action
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    contact form
                                </Link>
                            </li>
                        </ul>
                        <ul className="header__inner-list">
                            <li className="header__inner-item">
                                <Link to className="header__inner-link header__inner--text">
                                    Typography
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Headings
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    Columns
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    section title
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    blockquote
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    dropcaps
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    highlights
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    icon with text
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    separators
                                </Link>
                            </li>
                            <li className="header__inner-item">
                                <Link to className="header__inner-link">
                                    custom font
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        )
    }
}
