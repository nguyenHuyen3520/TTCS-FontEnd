
import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Image from './Image'
import SearchIcon from '@mui/icons-material/Search';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import LoginIcon from '@mui/icons-material/Key'
import { BiLogIn } from "react-icons/bi";
import { GoogleLogout, useGoogleLogout } from 'react-google-login';
import logo from "../assets/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import { Menu } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { auth, db, logout } from "../firebase/firebase"
import { setDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
import { signOut as signOutFirebase } from 'firebase/auth'

const clientId = "204968990099-vnh6f6s4rgcte95ul3o12qs6polbik4p.apps.googleusercontent.com";

const Header = () => {
    const { signOut, loaded } = useGoogleLogout({
        clientId,
    })
    const path = useParams();
    const history = useHistory()
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        setProfile(profile);
    }, [path]);
    const handlerLogout = async () => {
        await updateDoc(doc(db, "users", profile.uid), {
            isOnline: false
        })
        const refresh = JSON.parse(localStorage.getItem('refresh'));
        localStorage.setItem('refresh', !refresh)
        console.log("profile", profile)
        if (profile.isGoogle) {
            console.log("vao day")
            signOut();
        }
        localStorage.removeItem('profile');
        logout()
        // signOutFirebase()
        history.push("/")
        window.location.reload();
    }
    const handlerGoToMyCourse = () => {
        history.push("/")
        history.push("/myCourse");
    }
    return (
        <div style={{ background: 'linear-gradient(120deg, #2980b9, #8e44ad)', color: "#fff" }}>
            <div className="header">
                <div className="header__left flex ">
                    <label htmlFor="nav__mobile-input" className="nav__bars-btn">
                        <MenuIcon style={{ color: '#FFFFFF' }} class="nav__bars-btn-1" />
                    </label>
                    <div className="items-center mt-3">
                        <Link style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} to="/">
                            <Image src={logo} alt="logo" height={35} width={140} style={{ display: 'flex', justifyContent: 'center' }} />
                        </Link>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__right__search">
                        <form>
                            <input type="text" placeholder="Enter keys" />
                            <div className="header__right__search__icon" style={{ border: ' none !important' }}>
                                <SearchIcon />
                            </div>
                        </form>
                    </div>
                    <div>
                        {
                            profile ? (
                                <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                    <button
                                        onClick={() => handlerGoToMyCourse()} style={{ marginRight: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                                    >
                                        <div className="px-3 py-1 rounded-md bg-red-500 flex items-center">
                                            My Course
                                        </div>
                                    </button>
                                    {/* <AccountCircleIcon fontSize="large" /> */}
                                    <div style={{ height: '35px', width: '35px' }}>
                                        <img style={{ height: '35px', width: '35px' }} src={profile.avatar} alt={`avatar`} className="rounded-full" />
                                    </div>
                                    <div style={{ margin: "0 10px" }} >{profile.userName}</div>
                                    {

                                        profile.isGoogle ? (<button onClick={() => handlerLogout()} style={{ borderRadius: '5px', border: '1px', cursor: 'pointer' }}>
                                            <div style={{ border: '1px solid white' }} className="px-3 py-1 rounded-md bg-blue-600 flex items-center">
                                                Logout <BiLogIn />
                                            </div>
                                        </button>) : (<button onClick={() => handlerLogout()} style={{ borderRadius: '5px', border: '1px', cursor: 'pointer' }}>
                                            <div style={{ border: '1px solid white' }} className="px-3 rounded-md bg-blue-600 flex items-center">
                                                Logout <BiLogIn />
                                            </div>
                                        </button>)
                                    }
                                </div>
                            ) : (
                                <div style={{ display: "flex" }}>
                                    <Link to={"/login"}>
                                        <div className="header__button" style={{ marginRight: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                                            <div className="header__button__icon">
                                                <LoginIcon />
                                            </div>
                                            Đăng nhập
                                        </div>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <div className="header__button">
                                            Đăng ký
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Header