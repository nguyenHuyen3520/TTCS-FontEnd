import React from 'react'
import AdminApi from '../api/AdminApi';
import CourseApi from '../api/CourseApi';
import { Link, useHistory } from 'react-router-dom'
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";
import DetailCourse from '../components/admin/DetailCourse';
import EditCourse from '../components/admin/EditCourse';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Paper from '@material-ui/core/Paper';
import { alpha } from '@material-ui/core/styles'
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Toolbar,
    DateNavigator,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import CreateCourse from '../components/admin/CreateCourse';


const allDayLocalizationMessages = {
    'fr-FR': {
        allDay: 'Temps plein',
    },
    'de-GR': {
        allDay: 'Ganztägig',
    },
    'en-US': {
        allDay: 'All Day',
    },
};

const CourseManagement = () => {
    const [listCourse, setListCourse] = React.useState([]);
    const [search, setSearch] = React.useState('')
    React.useEffect(() => {
        const getData = async () => {
            const response = await AdminApi.getListCourse();
            setListCourse(response.data);
        }
        getData();
    }, []);
    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }
    const [course, setCourse] = React.useState({})
    const history = useHistory()

    React.useEffect(() => {
        if (search === '') {
            const getData = async () => {
                // const response = await AdminApi.getListCourse();
                // setListCourse(response.listUser);
            }
            getData();
        } else {

            const getSearch = () => {
                // const newListUser = listCourse.filter((item) => item.userName.includes(search));
                // setListCourse(newListUser);
            }
            getSearch();
        }
    }, [search])
    const [isNew, setIsNew] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [isDetail, setIsDetail] = React.useState(false);

    const handlerAddNewCourse = () => {
        setIsNew(true);
        setIsEdit(false);
        setIsDetail(false);
    }
    const handlerEdit = (value) => {
        setIsNew(false);
        setIsEdit(true);
        setIsDetail(false);
        setCourse(value);
    }
    const handlerDetail = (value) => {
        setIsNew(false);
        setIsEdit(false);
        setIsDetail(true);
        setCourse(value);
    }
    const handlerDelete = (user, index) => {

    }
    return (
        // <div>
        //     <div style={{ width: '900px' }}>
        //         <input className="inputSearch" style={{ width: '100%', marginTop: '10px', height: '30px', border: 'none' }} placeholder="Enter course" onChange={(e) => handleOnChange(e)} />
        //         <ListCourse listCourse={listCourse} col={3} />
        //     </div>
        //     <div>

        //     </div>
        // </div>
        <div className="MnUser">
            <div className="MnUser__left">
                <div className="MnUser__left__header">
                    <div style={{ borderRadius: '50%', cursor: 'pointer' }} onClick={() => handlerAddNewCourse()}>
                        <IoIosAddCircleOutline fontSize={35} color="white" />
                    </div>
                    <div style={{ padding: '0px 30px', border: '1px solid #e0e0e0', borderRadius: '15px', lineHeight: '2rem' }}>
                        {listCourse.length} course was found
                    </div>
                    <div>

                    </div>
                </div>
                <input className="inputSearch w-11/12 outline-none border-b py-1 px-2 rounded-sm" style={{ width: '100%', marginTop: '10px', height: '30px', border: 'none' }} placeholder="Enter course" onChange={(e) => handleOnChange(e)} />
                <div className="MnUser__left__listUser">
                    <div className={`grid grid-cols-3 gap-2`}>
                        {
                            listCourse.map((item, index) => (
                                <div className='border-2 h-auto w-full bg-slate-500 rounded-md cursor-pointer shadow-2xl' key={index} >
                                    <div onClick={() => handlerDetail(item)}>
                                        <div className='w-full h-44 bg-cover bg-center' style={{ backgroundImage: `url("${item.image}")` }}>
                                        </div>
                                        {/* <div className="font-medium p-3 text-purple-50">{item.name}</div> */}
                                        <div className='px-2 text-white py-3'>
                                            <div className='pt-1 pb-8'>{item.name}</div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between mb-3 px-5 z-10'>
                                        <div className="p-3 rounded-full hover:bg-slate-900" onClick={() => handlerDelete(item)} ><FaTrash fontSize={20} /></div>
                                        <div className="p-3 rounded-full hover:bg-slate-900" onClick={() => handlerEdit(item)} ><MdEdit fontSize={20} /></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="MnUser__right">
                {
                    isEdit ? (<EditCourse course={course} />) : null
                }
                {
                    isDetail ? (<DetailCourse course={course} />) : null
                }
                {
                    isNew ? (<CreateCourse />) : null
                }
            </div>
        </div >
    )
}

export default CourseManagement
