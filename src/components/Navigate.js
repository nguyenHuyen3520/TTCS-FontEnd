import React from 'react'
import { AiFillHome } from "react-icons/ai";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { AiFillHdd } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Navigate = () => {
    console.log("aaaa");
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
    console.log("links:", links);
    const [isAdmin, setIsAdmin] = React.useState(false);
    React.useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        if (profile) {

            if (profile.typeUser === 'admin') {
                console.log("ok admin")
                setIsAdmin(true)
                setLinks((state) => {
                    return [
                        {
                            name: "Home",
                            path: "/",
                            icon: <AiFillHome style={{ fontSize: '25px', color: 'black' }} />
                        },
                        {
                            name: "Courses",
                            path: "/courses",
                            icon: <MenuBookIcon style={{ fontSize: '25px', color: 'black' }} />
                        }, {
                            name: "Course mngmt",
                            path: "/admin-management-course",
                            icon: <AiFillHdd style={{ fontSize: '25px', color: 'black' }} />
                        }, {
                            name: "User mngmt",
                            path: "/admin-management-user",
                            icon: <AssignmentIndIcon style={{ fontSize: '25px', color: 'black' }} />
                        }
                    ]
                });
            } else {
                setIsAdmin(false);
            }
        }
    }, [isAdmin])
    return (
        <div className="Catalog">
            <div className="Catalog__left">
                {
                    links.map((item, index) => (
                        <div key={index} className="Catalog__left__navigation" style={{ margin: "20px 0", width: "40px" }} >
                            <Link to={item.path}>
                                <div className={`${index === activeNav ? 'active' : ''}`}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div className="Catalog__left__txt">
                                        {item.name}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Navigate
