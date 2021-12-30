import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { Link, BrowserRouter, useLocation } from 'react-router-dom';
import Routes from '../../routes/Routes'
import MnUser from '../../components/MnUser';
import { gql, useQuery } from '@apollo/client';

const links = [
    {
        name: "Quản lý học sinh",
        path: "/mn/users",
        icon: <AiFillHome />
    },
    {
        name: "Quản lý giao viên",
        path: "/mn/teachers",
        icon: <AiFillHome />
    },
    {
        name: "Home",
        path: "/home",
        icon: <AiFillHome />
    },
]

const Admin = (props) => {
    const { pathname } = useLocation()
    const activeNav = links.findIndex(e => e.path === pathname)
    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div>
            <header style={{ borderBottom: '1px solid black' }}>
                
            </header>
            <div className="Admin">
                <div className="Admin__left">
                    <Link to="/admin">
                        <h2 style={{ paddingLeft: "10px" }}>Admin</h2>
                    </Link>
                    {
                        links.map((item, index) => (
                            <div key={index}  className={`${index === activeNav ? 'active' : ''}`} >
                                <Link to={item.path} ><span style={{ marginRight: "10px" }}>{item.icon}</span>{item.name}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className="Admin__right">
                    {props.children}                    
                </div>
            </div>
        </div>
    )
}

const GET_DATA= gql `
    query{
        students{
            name email address
        }
        teachers{
            name email address
        }
    }
`
export default Admin

