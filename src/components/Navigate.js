import React from 'react'
import { AiFillHome } from "react-icons/ai";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { AiFillHdd } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom'
const links = [
    {
        name: "Home",
        path: "/home",
        icon: <AiFillHome style={{ fontSize: '25px', color: 'black' }} />
    },
    {
        name: "Courses",
        path: "/courses",
        icon: <MenuBookIcon style={{ fontSize: '25px', color: 'black' }} />
    }
]
const Navigate = () => {
    const { pathname } = useLocation()
    const activeNav = links.findIndex(e => e.path === pathname)
    const [isAdmin, setIsAdmin] = React.useState(false);
    React.useEffect(() => {

        if (isAdmin) {
            links.push(
                {
                    name: "Admin",
                    path: "/admin",
                    icon: <AiFillHdd style={{ fontSize: '25px', color: 'black' }} />
                })
        }
    }, [isAdmin])
    return (
        <div className="Catalog">
            <div className="Catalog__left">
                {
                    links.map((item, index) => (
                        <div key={index} style={{ margin: "20px 0" }}>
                            <Link to={item.path}>
                                <div style={{ width: "70%", textAlign: "center" }} className={`${index === activeNav ? 'active' : ''}`}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
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
