import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from './Image'
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    const [isLogin, setIsLogin] = useState(true);
    const path = useParams();
    return (
        <div style={{ backgroundColor: "#7254b0", color: "#fff" }}>
            {
                path !== 'login' | path !== 'signup' ? (

                    <div className="header">
                        <div className="header__left">
                            <Link to="/">
                                <Image />
                            </Link>
                        </div>
                        <div className="header__right">
                            <div className="header__right__search">
                                <form>
                                    <input type="text" placeholder="Enter keys" />
                                    <div className="header__right__search__icon">
                                        <SearchIcon/>
                                    </div>
                                </form>
                            </div>
                            <div>
                                {
                                    isLogin ? (
                                        <div style={{cursor: 'pointer'}}>
                                            <AccountCircleIcon fontSize="large" />
                                        </div>
                                    ) : (
                                        <Link to={"/login"}>
                                            <div className="header__button">
                                                Đăng Nhập
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Header