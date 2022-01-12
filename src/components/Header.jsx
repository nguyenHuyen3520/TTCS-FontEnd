import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from './Image'
import SearchIcon from '@mui/icons-material/Search';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

const Header = () => {
    const path = useParams();
    const history = useHistory()
    const [profile, setProfile] = useState();
    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        setProfile(profile);
    }, [path]);
    const handlerLogout = () => {
        localStorage.removeItem('profile')
        setProfile(false);
        history.push("/")
    }
    const handlerGoToMyCourse = ()=>{
        history.push("/")
        history.push("/myCourse");
    }
    return (
        <div style={{ background: 'linear-gradient(120deg, #2980b9, #8e44ad)', color: "#fff" }}>
            {
                path !== 'login' | path !== 'signup' ? (

                    <div className="header">
                        <div className="header__left">
                            <div className="header__icon">
                                <DensitySmallIcon/>
                            </div>
                            <Link to="/">
                                <Image />
                            </Link>
                        </div>
                        <div className="header__right">
                            <div className="header__right__search">
                                <form>
                                    <input type="text" placeholder="Enter keys" />
                                    <div className="header__right__search__icon" style={{    border:' none !important'}}>
                                        <SearchIcon />
                                    </div>
                                </form>
                            </div>
                            <div>
                                {
                                    profile ? (
                                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                            <button 
                                                onClick={() => handlerGoToMyCourse()} style={{marginRight: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer'}}
                                            >My Course</button>
                                            <AccountCircleIcon fontSize="large" />
                                            <div style={{ margin: "0 10px" }} >{profile.userName}</div>
                                            <button onClick={() => handlerLogout()} style={{borderRadius: '5px', border: 'none', cursor: 'pointer'}}>Logout</button>
                                        </div>
                                    ) : (
                                        <div style={{ display: "flex" }}>
                                            <Link to={"/login"}>
                                                <div className="header__button" style={{ marginRight: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                                                    Đăng Nhập
                                                </div>
                                            </Link>
                                            <Link to={"/signup"}>
                                                <div className="header__button">
                                                    Đăng Ký
                                                </div>
                                            </Link>
                                        </div>
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