import React, { useState, useEffect } from 'react'
import { Modal } from '@mui/material';
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import moment from 'moment'
import {
    Scheduler,
    Appointments,
    AppointmentForm,
    WeekView,
    EditRecurrenceMenu,
    AllDayPanel,
    ConfirmationDialog,
    Toolbar,
    DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import CourseApi from '../../api/CourseApi';
import AdminApi from '../../api/AdminApi'
import nothingImage from '../../assets/nothing.png'
const CreateCourse = () => {

    const [listTeacher, setListTeacher] = useState(null)
    const [listType, setListType] = useState();
    const [photo, setPhoto] = useState(null)
    const [photoTemp, setPhotoTemp] = useState();
    const [formData, setFormData] = useState({
        name: "",
        typeCourse: "",
        descriptions: "",
        image: "",
        teacher_id: "",
        teacher_name: ""
    });


    useEffect(() => {

        const getData = async () => {
            const listCourse = await AdminApi.getTypeCourses();
            const listCourseType = listCourse.data.map((item) => item.nameType);
            const getListTeacher = await AdminApi.getListUserOfType({ typeUser: 'giao_vien' });
            setListTeacher(getListTeacher.data);
            setListType(listCourseType);
            setFormData((prevData) => {
                const newData = { ...prevData, typeCourse: listCourseType[0], teacher_name: getListTeacher?.data[0]?.userName, teacher_id: getListTeacher?.data[0]?._id };
                return newData;
            })
        }
        getData();
    }, [])

    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhotoTemp(e.target.files[0])
            setLoading(true);
        }
    }

    function handleClick() {
        upload(photoTemp, formData.name + "-" + formData._id);
    }

    async function upload(file, name) {
        const fileRef = ref(storage, name + '.png');
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        setPhoto(photoURL);
        setFormData((prevData) => {
            const newState = { ...prevData, image: photoURL };
            return newState;
        })
    }

    const submitForm = async () => {
        if (formData.image) {
            const result = await AdminApi.createCourse(formData);
            toast(result.message, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            window.location.reload();
        } else {
            window.alert('Ban can phai chose image')
        }
    }
    return (
        <div className="mx-4 my-20 p-2  flex " style={{ backgroundColor: '#ccc', color: 'black' }}>
            <div className="w-full h-full">
                <div style={{ width: '420px', height: '230px' }}>
                    {
                        photo ? (<img className=" object-cover" alt="err" src={photo} />) : (
                            <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', }}>
                                you need to add photos for the course
                            </div>
                        )
                    }
                </div>
                <div className="justify-center items-center ml-5">
                    <input type="file" onChange={handleChange} className="mt-14" />
                    <button onClick={handleClick} className="p-2 px-4 text-white bg-cyan-500 my-2 rounded-xl">Upload</button>
                </div>
            </div>
            <div className="text-xl px-3 w-full">
                <div>
                    <div className="font-bold">
                        Name:
                    </div>
                    <input
                        value={formData?.name}
                        className="text-black w-full p-2 rounded-xl border-2 border-zinc-700"
                        name="name"
                        onChange={(e) => setFormData((prevData) => {
                            const newData = { ...prevData, name: e.target.value }
                            return newData;
                        })}
                    />
                </div>
                <div>
                    <div className="font-bold">
                        Teacher:
                    </div>
                    <div className="p-2">
                        <select name="typeUser" value={formData.teacher_name} className="text-black w-full p-2 rounded-xl border-2 border-zinc-700" onChange={(e) => setFormData((prevData) => {
                            const newData = { ...prevData, teacher_name: e.target.value, teacher_id: e.target.name }
                            return newData;
                        })} >
                            {
                                listTeacher?.map((item, index) => (
                                    <option key={index} value={item.userName} name={item._id} >{item.userName}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <div className="font-bold">
                        Descriptions:
                    </div>
                    <textarea
                        value={formData?.descriptions}
                        className="text-black w-full p-2 rounded-xl border-2 border-zinc-700"
                        name="Descriptions"
                        onChange={(e) => setFormData((prevData) => {
                            const newData = { ...prevData, descriptions: e.target.value }
                            return newData;
                        })}
                    />
                </div>
                <div>
                    <div className="font-bold">
                        typeCourses:
                    </div>
                    <div className="p-2">
                        <select name="typeUser" value={formData.typeCourse} className="text-black w-full p-2 rounded-xl border-2 border-zinc-700" onChange={(e) => {
                            setFormData((prevData) => {
                                const newData = { ...prevData, typeCourse: e.target.value }
                                return newData;
                            })
                        }}>
                            {
                                listType?.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="mt-4" onClick={() => submitForm()}>
                    <div className="flex items-center justify-center border-2 p-3 bg-blue-600 text-white hover:text-red-300 hover:shadow-sm rounded-xl cursor-pointer w-1/2" >
                        Tạo
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div >
    )
}

export default CreateCourse

