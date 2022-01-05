import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { FiEdit }from "react-icons/fi";
import {AiFillDelete } from "react-icons/ai";
import CreateUser from '../components/CreateUser';
import AdminApi from '../api/AdminApi';
const MnUser = ({ data }) => {
    const [listUser, setListUser] = React.useState([
        {
            typeUser: 'admin',
            image: 'https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-11.jpg',
            _id: '61cb56682f910f4c5c85be64',
            userName: 'testJWT',
            password: '$2a$12$ZVGdWK3HCv01A14c6Yk4i.KWQZMu2zhPbAZdOJY6ZRl6ukWvyO6rS',
            phone: '0123456789',
            email: 'testJWT@gmail.com',
            __v: 0
        },
        {
            typeUser: 'user',
            image: 'https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-11.jpg',
            _id: '61cb5957d4e29a4c842298bf',
            userName: 'testJWT',
            password: '$2a$12$l25H0GPmSZYAm22Jf.R7FOK.B5dRC3FlK344n9ty7nlpjSYu2agIK',
            phone: '0123456789',
            email: 'test2912@gmail.com',
            __v: 0
        }
    ]);
    React.useEffect(() => {
        const getData = async ()=>{

        }
        setListUser([
            {
                typeUser: 'admin',
                image: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg',
                _id: '61cb56682f910f4c5c85be64',
                userName: 'testJWT',
                password: '$2a$12$ZVGdWK3HCv01A14c6Yk4i.KWQZMu2zhPbAZdOJY6ZRl6ukWvyO6rS',
                phone: '0123456789',
                email: 'testJWT@gmail.com',
                __v: 0
            },
            {
                typeUser: 'user',
                image: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg',
                _id: '61cb5957d4e29a4c842298bf',
                userName: 'testJWT',
                password: '$2a$12$l25H0GPmSZYAm22Jf.R7FOK.B5dRC3FlK344n9ty7nlpjSYu2agIK',
                phone: '0123456789',
                email: 'test2912@gmail.com',
                __v: 0
            }
        ]);
        console.log("listuer:", listUser);
    }, [])
    React.useEffect(() => {
        const getData = async () => {
            console.log("vao day aaaa");
            const response = await AdminApi.getListUser();
            console.log("list user",response);
            setListUser(response.listUser);
            console.log("list user sau khi set",listUser);
        }
        getData();
    }, []);
    const [search, setSearch] = React.useState('')
    const handleOnChange = (e)=>{
        setSearch(e.target.value);
    }

    React.useEffect(() => {
        if(search === ''){
            setListUser([
                {
                    typeUser: 'admin',
                    image: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg',
                    _id: '61cb56682f910f4c5c85be64',
                    userName: 'testJWT',
                    password: '$2a$12$ZVGdWK3HCv01A14c6Yk4i.KWQZMu2zhPbAZdOJY6ZRl6ukWvyO6rS',
                    phone: '0123456789',
                    email: 'testJWT@gmail.com',
                    __v: 0
                },
                {
                    typeUser: 'user',
                    image: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg',
                    _id: '61cb5957d4e29a4c842298bf',
                    userName: 'testJWT',
                    password: '$2a$12$l25H0GPmSZYAm22Jf.R7FOK.B5dRC3FlK344n9ty7nlpjSYu2agIK',
                    phone: '0123456789',
                    email: 'test2912@gmail.com',
                    __v: 0
                }
            ])
        }else{

            const getSearch = ()=>{
                const newListUser = listUser.filter((item)=> item.userName.includes(search));
                setListUser(newListUser);
            }
            getSearch();
        }
    },[search])
    const [isNew, setIsNew] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [isDetail, setIsDetail] = React.useState(false);
    
    const handlerAddNewUser =()=>{
        console.log('test')
        setIsNew(true);
        setIsEdit(false);
        setIsDetail(false);
    }
    const handlerEdit =(id)=>{
        setIsNew(false);
        setIsEdit(true);
        setIsDetail(false);
    }
    const handlerDetail =(id)=>{
        setIsNew(false);
        setIsEdit(false);
        setIsDetail(true);
    }
    const handlerDelete =(id)=>{
        setIsNew(true);
        setIsEdit(false);
        setIsDetail(false);
    }
    console.log(listUser);
    return (
        <div className="MnUser">
            <div className="MnUser__left">
                <div className="MnUser__left__header">
                    <div style={{ height: '30px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', padding: '3px', backgroundColor: '#303f9f', cursor: 'pointer' }} onClick={()=>handlerAddNewUser()}>
                        <div style={{ fontSize: '2rem' }}>+</div>
                    </div>
                    <div style={{ padding: '0px 30px', border: '1px solid #e0e0e0', borderRadius: '15px', lineHeight: '2rem' }}>
                        {listUser.length} user was found
                    </div>
                    <div>

                    </div>
                </div>
                <input className="inputSearch" style={{ width: '100%', marginTop: '10px', height: '30px', border: 'none'}} placeholder="Enter user" onChange={(e)=>handleOnChange(e)} />
                <div className="MnUser__left__listUser">
                    {
                        listUser.map((user, index) => (
                            <div key={index} style={{ display: 'flex', marginBottom: '10px', cursor: 'pointer', justifyContent: 'space-between' }} >
                                <div style={{ display: 'flex', width: "100%" }} onClick={()=>handlerDetail(user._id)}>
                                    <div style={{ height: '30px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', padding: '3px', cursor: 'pointer', backgroundImage: `url("${user.image}")`, backgroundSize: 'cover' }}>                                        
                                    </div>
                                    <div style={{marginLeft: '10px'}}>
                                        <div>
                                            {
                                                user.userName
                                            }
                                        </div>
                                        <div>
                                            {
                                                user.email
                                            }
                                        </div>
                                    </div>
                                    <div style={{paddingTop: '10px', marginLeft: '220px', color: `${user.typeUser === 'admin' ? "#ff0000" : "white"}` }}>{user.typeUser}</div>
                                </div>                                
                                <div className="MnUser__left__listUser__icons">
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}} onClick={()=> handlerEdit(user._id)}>
                                        <FiEdit style={{color: 'white'}} />
                                    </div>
                                    <div style={{marginLeft: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}} onClick={()=> handlerDelete(user._id)}>
                                        <AiFillDelete style={{color: 'white'}} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="MnUser__right">
                {
                    isNew ? (<CreateUser/>) : null
                }
            </div>
        </div>
    )
}

export default MnUser
