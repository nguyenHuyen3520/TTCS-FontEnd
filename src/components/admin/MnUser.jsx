import React from 'react'
import { FiEdit }from "react-icons/fi";
import {AiFillDelete } from "react-icons/ai";
import CreateUser from './CreateUser';
import AdminApi from '../../api/AdminApi';
import { useHistory } from "react-router-dom"
import EditUser from './EditUser';
const MnUser = ({ data }) => {
    const [user, setUser] = React.useState({})
    const history = useHistory()
    const [listUser, setListUser] = React.useState([]);
    React.useEffect(() => {
        const getData = async () => {            
            const response = await AdminApi.getListUser();            
            setListUser(response.listUser);            
        }
        getData();
    }, []);
    const [search, setSearch] = React.useState('')
    const handleOnChange = (e)=>{
        setSearch(e.target.value);
    }

    React.useEffect(() => {
        if(search === ''){
            const getData = async () => {                
                const response = await AdminApi.getListUser();                
                setListUser(response.listUser);                
            }
            getData();
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
        setIsNew(true);
        setIsEdit(false);
        setIsDetail(false);
    }
    const handlerEdit =(user)=>{
        setIsNew(false);
        setIsEdit(true);
        setIsDetail(false);
        setUser(user);
    }
    const handlerDetail =(id)=>{
        setIsNew(false);
        setIsEdit(false);
        setIsDetail(true);
    }
    const handlerDelete =(user,index)=>{
        const deleteUser = async() =>{
            const result = await AdminApi.deleteUser(user._id);
            console.log(result);
        }
        deleteUser();
        setListUser((state)=>{
            const newState = state.filter((item, i)=> i !== index);
            return newState;
        })
    }    
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
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}} onClick={()=> handlerEdit(user)}>
                                        <FiEdit style={{color: 'white'}} />
                                    </div>
                                    <div style={{marginLeft: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}} onClick={()=> handlerDelete(user,index)}>
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
                {
                    isEdit ? (<EditUser user={user}/>) : null
                }
            </div>
        </div>
    )
}

export default MnUser
