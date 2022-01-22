import React, { useEffect, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import CreateUser from './CreateUser';
import AdminApi from '../../api/AdminApi';
import { useHistory } from "react-router-dom"
import EditUser from './EditUser';
import DetailUser from './DetailUser';
import { IoIosAddCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MnUser = ({ data }) => {
    const [user, setUser] = React.useState({})
    const history = useHistory()
    const [listUser, setListUser] = React.useState([]);
    const [refresh, setRefresh] = useState(false);
    React.useEffect(() => {
        const getData = async () => {
            const response = await AdminApi.getListUser();
            setListUser(response.listUser);
        }
        getData();
    }, []);
    React.useEffect(() => {
        const getData = async () => {
            const response = await AdminApi.getListUser();
            setListUser(response.listUser);
        }
        getData();
    }, []);
    const [search, setSearch] = React.useState('')
    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        let result = localStorage.getItem('refresh');
        if (result) {
            setRefresh(result)
        }
    })
    React.useEffect(() => {
        if (search === '') {
            const getData = async () => {
                const response = await AdminApi.getListUser();
                setListUser(response.listUser);
            }
            getData();
        } else {

            const getSearch = () => {
                const newListUser = listUser.filter((item) => item.userName.includes(search));
                setListUser(newListUser);
            }
            getSearch();
        }
    }, [search])
    const [isNew, setIsNew] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [isDetail, setIsDetail] = React.useState(false);

    const handlerAddNewUser = () => {
        setIsNew(true);
        setIsEdit(false);
        setIsDetail(false);
    }
    const handlerEdit = (user) => {
        setIsNew(false);
        setIsEdit(true);
        setIsDetail(false);
        setUser(user);
    }
    const handlerDetail = (user) => {
        setIsNew(false);
        setIsEdit(false);
        setIsDetail(true);
        setUser(user);
    }
    const handlerDelete = (user, index) => {
        const deleteUser = async () => {
            const result = await AdminApi.deleteUser(user._id);
            toast('Xóa user thành công!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        deleteUser();
        setListUser((state) => {
            const newState = state.filter((item, i) => i !== index);
            return newState;
        })
    }
    return (
        <div className="MnUser">
            <div className="MnUser__left">
                <div className="MnUser__left__header">
                    <div style={{ borderRadius: '50%', cursor: 'pointer' }} onClick={() => handlerAddNewUser()}>
                        <IoIosAddCircleOutline fontSize={35} color="white" />
                    </div>
                    <div style={{ padding: '0px 30px', border: '1px solid #e0e0e0', borderRadius: '15px', lineHeight: '2rem' }}>
                        {listUser.length} user was found
                    </div>
                    <div>

                    </div>
                </div>
                <input className="inputSearch w-11/12 outline-none border-b py-1 px-2 rounded-sm" style={{ width: '100%', marginTop: '10px', height: '30px', border: 'none' }} placeholder="Enter user" onChange={(e) => handleOnChange(e)} />
                <div className="MnUser__left__listUser">
                    {
                        listUser.map((user, index) => (
                            <div key={index} style={{ display: 'flex', marginBottom: '10px', cursor: 'pointer', justifyContent: 'space-between' }} >
                                <div style={{ display: 'flex', width: "100%" }} onClick={() => handlerDetail(user)}>
                                    <div className="relative" style={{ height: '30px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', padding: '3px', cursor: 'pointer', backgroundImage: `url("${user.image}")`, backgroundSize: 'cover', marginTop: '10px' }}>
                                        {
                                            user.typeUser === 'admin' ? (<div className="absolute -top-2 -right-2 text-white bg-red-600 rounded-full">AD</div>) : user.typeUser === 'giao_vien' ? (<div className="absolute -top-2 -right-2 text-white bg-cyan-500 rounded-full">GV</div>) : null
                                        }
                                    </div>
                                    <div style={{ marginLeft: '20px' }}>
                                        <div>
                                            <div >
                                                {
                                                    user.userName
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                user.email
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="MnUser__left__listUser__icons" style={{ marginTop: '10px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} onClick={() => handlerEdit(user)}>
                                        <FiEdit style={{ color: 'white' }} />
                                    </div>
                                    <div style={{ marginLeft: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} onClick={() => handlerDelete(user, index)}>
                                        <AiFillDelete style={{ color: 'white' }} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="MnUser__right">
                {
                    isNew ? (<CreateUser />) : null
                }
                {
                    isEdit ? (<EditUser user={user} />) : null
                }
                {
                    isDetail ? (<DetailUser user={user} />) : null
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default MnUser
