import React, { useState, useEffect, useContext } from 'react'
import { AiFillHome } from "react-icons/ai";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { AiFillHdd } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { BsFillChatDotsFill } from "react-icons/bs";
import RefreshContext from '../context/refresh'
const Navigate = () => {
    const { pathname } = useLocation()    
    const [links, setLinks] = useState([
        {
            name: "Home",
            path: "/",
            icon: <AiFillHome style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
        },
        {
            name: "Courses",
            path: "/courses",
            icon: <MenuBookIcon style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
        }
    ]);
    const activeNav = links.findIndex(e => e?.path === pathname)

    const refresh = useContext(RefreshContext);
        
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        if (profile) {
            if (profile.typeUser === 'admin') {
                setIsAdmin(true)
                setLinks((state) => {
                    return [
                        {
                            name: "Home",
                            path: "/",
                            icon: <AiFillHome style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        },
                        {
                            name: "Courses",
                            path: "/courses",
                            icon: <MenuBookIcon style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        },
                        , {
                            name: "Chat",
                            path: "/chat",
                            icon: <BsFillChatDotsFill style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        }, {
                            name: "Course mngmt",
                            path: "/admin-management-course",
                            icon: <AiFillHdd style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        }, {
                            name: "User mngmt",
                            path: "/admin-management-user",
                            icon: <AssignmentIndIcon style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        }
                    ]
                });
            } else {
                setIsAdmin(false);
                setLinks((state) => {
                    return [
                        {
                            name: "Home",
                            path: "/",
                            icon: <AiFillHome style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        },
                        {
                            name: "Courses",
                            path: "/courses",
                            icon: <MenuBookIcon style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        }, {
                            name: "Chat",
                            path: "/chat",
                            icon: <BsFillChatDotsFill style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                        }
                    ]
                });
            }
        } else {
            setLinks([
                {
                    name: "Home",
                    path: "/",
                    icon: <AiFillHome style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                },
                {
                    name: "Courses",
                    path: "/courses",
                    icon: <MenuBookIcon style={{ fontSize: '25px', color: 'white', justifyContent: 'center', alignItems: 'center' }} />
                }
            ])
        }
    }, [isAdmin, refresh,])
    return (
        <div className="bg-slate-800 " style={{ minHeight: '100vh' }}>
            {
                links.map((item, index) => (
                    <div key={index} className="flex justify-center w-16 p-3 navigate">
                        <Link to={item.path}>
                            <div className={`${index === activeNav ? 'active' : ''} flex p-3`}>
                                <div>
                                    {item.icon}
                                </div>
                                <div className="text-white hidden">
                                    {item.name}
                                </div>
                            </div>
                            {/* <div className={`${index === activeNav ? 'active' : ''} flex`}>
                                <div className="justify-center items-center">
                                    <div className="place-content-center">
                                        {item.icon}
                                    </div>
                                    <div className="text-white text-center">
                                        {item.name}
                                    </div>
                                </div>
                            </div> */}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Navigate
