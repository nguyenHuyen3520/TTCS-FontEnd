import React from 'react'
import { AiFillHome } from "react-icons/ai";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { AiFillHdd } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Navigate = () => {
    const { pathname } = useLocation()
    const [links, setLinks] = React.useState([
        {
            name: "Home",
            path: "/",
            icon: <AiFillHome style={{ fontSize: '25px', color: 'black' }} />
        },
        {
            name: "Courses",
            path: "/courses",
            icon: <MenuBookIcon style={{ fontSize: '25px', color: 'black' }} />
        }
    ]);
    const activeNav = links.findIndex(e => e.path === pathname)
    const [isAdmin, setIsAdmin] = React.useState(false);
    React.useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        if (profile) {

            if (profile.typeUser === 'admin') {
                setIsAdmin(true)
                setLinks((state) => {
                    return [
                        {
                            name: "Home",
                            path: "/",
                            icon: <AiFillHome style={{ fontSize: '25px', color: 'white' }} />
                        },
                        {
                            name: "Courses",
                            path: "/courses",
                            icon: <MenuBookIcon style={{ fontSize: '25px', color: 'white' }} />
                        }, {
                            name: "Course mngmt",
                            path: "/admin-management-course",
                            icon: <AiFillHdd style={{ fontSize: '25px', color: 'white' }} />
                        }, {
                            name: "User mngmt",
                            path: "/admin-management-user",
                            icon: <AssignmentIndIcon style={{ fontSize: '25px', color: 'white' }} />
                        }
                    ]
                });
            } else {
                setIsAdmin(false);
            }
        }
    }, [isAdmin])
    return (
        <div className="bg-slate-800 " style={{ height: '100vh' }}>
            {
                links.map((item, index) => (
                    <div key={index} className="flex justify-center w-16 p-3 navigate">
                        <Link to={item.path}>
                            <div className={`${index === activeNav ? 'active' : ''} flex`}>
                                <div>
                                    {item.icon}
                                </div>
                                <div className="text-white hidden">
                                    {item.name}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Navigate
