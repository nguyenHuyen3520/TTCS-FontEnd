
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
import { IoMdNotifications } from "react-icons/io";
import CourseApi from '../api/CourseApi'
const clientId = "204968990099-vnh6f6s4rgcte95ul3o12qs6polbik4p.apps.googleusercontent.com";

const Header = () => {
    const { signOut, loaded } = useGoogleLogout({
        clientId,
    })
    const path = useParams();
    const history = useHistory()
    const [keyWord, setKeyWord] = useState('');
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [listResult, setListResult] = useState([])
    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        setProfile(profile);
    }, [path]);

    useEffect(async () => {
        const result = await CourseApi.search(keyWord);
        setListResult(result.data);
    }, [keyWord])
    const handlerLogout = async () => {
        await updateDoc(doc(db, "users", profile.uid), {
            isOnline: false
        })
        const refresh = JSON.parse(localStorage.getItem('refresh'));
        localStorage.setItem('refresh', !refresh)
        if (profile.isGoogle) {
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
                    <div className="mr-2">
                        <MenuIcon />
                    </div>
                    <div className="items-center">
                        <Link style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} to="/">
                            <Image src={logo} alt="logo" height={35} width={140} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} />
                        </Link>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__right__search">
                        <form>
                            <input type="text" placeholder="Enter keys" value={keyWord} onChange={(e) => { setKeyWord(e.target.value) }} />
                            <div className="header__right__search__icon" style={{ border: ' none !important' }}>
                                <SearchIcon />
                            </div>
                        </form>
                        {
                            keyWord !== "" ? (
                                <div className="header__right__search__result">
                                    <div>
                                        <div>
                                            Bạn đang tìm kiếm "{keyWord}"
                                        </div>
                                        <div className="border-b-2">
                                            Có <span style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}> {listResult?.length}</span> kết quả tìm kiếm được
                                        </div>
                                        <div>
                                            {listResult?.map((item, index) => (
                                                <Link to={`/course/${item._id}`} key={index} className="flex p-3 result__item cursor-pointer" onClick={() => setKeyWord("")}>
                                                    <div style={{ width: '50px', height: '50px', marginRight: '10px' }}>
                                                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%' }} />
                                                    </div>
                                                    <div className="flex justify-center items-center">{item.name}</div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
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
                                    <div style={{ marginLeft: '10px' }}>
                                        <IoMdNotifications fontSize={24} />
                                    </div>
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