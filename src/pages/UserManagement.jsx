import React from 'react'
import AdminApi from '../api/AdminApi.js'
import MnUser from '../components/admin/MnUser.jsx';
// import MTable from "../components/MTable"

const UserManagement = () => {
    const [listUser, setListUser] = React.useState([]);
    React.useEffect(()=>{
        const getListUser = async ()=>{
            const response = await AdminApi.getListUser();
            setListUser(response.listUser);
        }
        getListUser();
    }, [])    
    return (
        <div>
            {/* <MTable data={listUser} title="User Table"/>
            <MTable data={listUser} title="User Table"/> */}
            <MnUser data={listUser} />
        </div>
    )
}

export default UserManagement

