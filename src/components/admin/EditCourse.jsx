import React, { useState, useEffect } from 'react'
import { FormControl, TextField, Button, Box, Modal, InputLabel, Select, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { upload, storage } from "../../firebase/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import AddIcon from '@mui/icons-material/Add';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimePicker, { format } from 'react-datetime-picker';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { GrAdd } from "react-icons/gr";
import { FaPlusCircle } from "react-icons/fa";
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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditCourse = ({ course }) => {
    const [date, setDate] = useState(new Date())
    const [value, onChange] = useState(new Date());
    const [listTeacher, setListTeacher] = useState(null)
    const [listType, setListType] = useState();
    const [photo, setPhoto] = useState(course.image)
    const [photoTemp, setPhotoTemp] = useState();
    const [formData, setFormData] = useState({
        name: course.name,
        typeCourse: course.typeCourse,
        descriptions: course.descriptions,
        image: course.image,
        _id: course._id,
        teacher_id: course.teacher_id,
        teacher_name: null
    });
    const [check, setCheck] = useState(true);
    const [listUser, setListUser] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openCal, setOpenCal] = React.useState(false);
    const handleOpenCal = () => setOpenCal(true);
    const handleCloseCal = () => setOpenCal(false);
    const [state, setState] = useState({
        data: [],
        currentDate: '2022-01-17',
        locale: 'en-US',
        addedAppointment: {},
        appointmentChanges: {},
        editingAppointment: undefined,
    })

    useEffect(() => {
        setPhoto(course.image);
        setFormData({
            name: course.name,
            typeCourse: course.typeCourse,
            descriptions: course.descriptions,
            image: course.image,
            _id: course._id,
            teacher_id: course.teacher_id,
            teacher_name: null
        })
        const getData = async () => {
            const scheduleData = await CourseApi.getScheduleOfCourse(formData._id);
            const listCourse = await AdminApi.getTypeCourses();
            const listCourseType = listCourse.data.map((item) => item.nameType);
            const getListTeacher = await AdminApi.getListUserOfType({ typeUser: 'giao_vien' });
            const teacherNow = getListTeacher.data.filter((item) => item._id === course.teacher_id)
            console.log("teacherNow", teacherNow);
            setFormData((prevData) => {
                const newData = { ...prevData, teacher_name: teacherNow.userName }
                return newData;
            })
            setListTeacher(getListTeacher.data);
            console.log("listTeacher", listTeacher);
            setListType(listCourseType);
            setState(
                (prevData) => {
                    const newState = { ...prevData, data: scheduleData.data.schedule }
                    return newState;
                }
            )
            const list = await CourseApi.getUserOfCourse(course._id);
            setListUser(list.data);
            console.log("vao get 2")

        }
        getData();
    }, [course, check])
    const commitChanges = async ({ added, changed, deleted }) => {
        setState(async (state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    appointment._id === state.editingAppointment._id ? { ...appointment, ...changed.undefined } : appointment));
                const values = {
                    data: data,
                    course_id: course._id,
                }
                const result = await CourseApi.changeSchedule(values);
                const toasts = () => {
                    toast(result.message, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                toasts();
                setCheck(!check);
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }

            const newState = { ...state, data: data };
            return newState;
        });

    }
    const changeAddedAppointment = (addedAppointment) => {
        setState(
            (prevData) => {
                const newState = { ...prevData, addedAppointment: addedAppointment }
                return newState;
            }
        )
    }

    const changeAppointmentChanges = (appointmentChanges) => {
        setState(
            (prevData) => {
                const newState = { ...prevData, appointmentChanges: appointmentChanges }
                return newState;
            }
        )
    }

    const changeEditingAppointment = (editingAppointment) => {
        setState(
            (prevData) => {
                const newState = { ...prevData, editingAppointment: editingAppointment }
                return newState;
            }
        )
    }
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
        const result = await AdminApi.updateCourse(formData);
        toast(result.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    return (
        <div className="mx-4 my-20 p-2  flex " style={{ backgroundColor: '#ff9797' }}>
            <div className="w-full h-full">
                <div style={{ width: '420px', height: '230px' }}>
                    <img className=" object-cover" alt={course?.name} src={photo} />
                </div>
                <div className="justify-center items-center ml-5">
                    <input type="file" onChange={handleChange} className="mt-14" />
                    <button onClick={handleClick} className="p-2 px-4 text-white bg-cyan-500 my-2 rounded-xl">Upload</button>
                </div>
                <div className="p-5 flex cursor-pointer text-white">
                    <div className="font-bold text-xl mr-3">Calendar:</div>
                    <div className="mx-2">
                        <CalendarTodayIcon sx={{ fontSize: 25 }} onClick={handleOpen} />
                    </div>
                    <div className="text-white">
                        <FaPlusCircle fontSize={25} color="white" onClick={() => console.log("da click")} />
                    </div>
                </div>
                {/* <div className="font-bold text-xl mr-3 px-5 cursor-pointer" onClick={() => setShowListUser(!showListUser)}>
                    <div>
                        <Modal
                            open={openCal}
                            onClose={handleCloseCal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="border-none"
                        >
                            <div className="bg-white h-52 flex">
                                <DateTimePicker
                                    onChange={(e) => {
                                        onChange(e);
                                    }}
                                    value={value}
                                    format="y-MM-dd h:mm:ss a"
                                />
                                <div>Thời gian đã chọn: </div>
                            </div>
                        </Modal>
                    </div>
                    {
                        showListUser ? (<div>
                            {
                                listUser?.map((item, index) => (
                                    <div key={index}>{item.name}</div>
                                ))
                            }
                        </div>) : null
                    }

                </div> */}
            </div>
            <div className="text-xl px-3 w-full">
                <div>
                    <div className="font-bold">
                        Name:
                    </div>
                    <input
                        value={formData?.name}
                        className="border-2 w-full p-2 ml-3"
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
                        <select name="typeUser" value={formData.teacher_name} className="p-3 min-w-full" onChange={(e) => setFormData((prevData) => {
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
                        className="border-2 w-full p-0 ml-3 h-40 overflow-scroll leading-7"
                        name="Descriptions"
                        onChange={(e) => setFormData((prevData) => {
                            const newData = { ...prevData, descriptions: e.target.value }
                            return newData;
                        })}
                    />
                </div>
                <div>
                    <div className="font-bold">
                        Teacher:
                    </div>
                    <div className="p-2">
                        <select name="typeUser" value={formData.typeCourse} className="p-3 min-w-full" onChange={(e) => setFormData((prevData) => {
                            const newData = { ...prevData, typeUser: e.target.value }
                            return newData;
                        })}>
                            {
                                listTeacher?.map((item) => (
                                    <option value={item.userName} name={item._id}>{item.userName}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <div className="font-bold">
                        typeCourses:
                    </div>
                    <div className="p-2">
                        <select name="typeUser" value={formData.typeCourse} className="p-3 min-w-full" onChange={(e) => {
                            setFormData((prevData) => {
                                const newData = { ...prevData, typeCourse: e.target.value }
                                return newData;
                            })
                        }}>
                            {
                                listType?.map((item) => (
                                    <option value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex items-center justify-center border-2 p-3 bg-blue-600 text-white hover:text-red-300 hover:shadow-sm rounded-xl cursor-pointer w-1/2" >
                        Cập nhật
                    </div>
                </div>
            </div>
            <div className="p-7">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="border-none"
                >
                    <div className="shadow-2xl mt-8 px-32 border-none">
                        {/* <Paper>
                            <Scheduler
                                data={state.data}
                                locale={state.locale}
                                height={700}
                            >
                                <ViewState
                                // defaultCurrentDate={currentDate}
                                />
                                <WeekView
                                    startDayHour={17}
                                    endDayHour={22}
                                />
                                <Toolbar />
                                <DateNavigator />
                                <Appointments />
                                <AllDayPanel
                                />
                            </Scheduler>
                        </Paper> */}
                        <Paper>
                            <Scheduler
                                data={state.data}
                                height={960}
                            >
                                <ViewState
                                // currentDate={state.currentDate}
                                />
                                <EditingState
                                    onCommitChanges={commitChanges}
                                    addedAppointment={state.addedAppointment}
                                    onAddedAppointmentChange={changeAddedAppointment}
                                    appointmentChanges={state.appointmentChanges}
                                    onAppointmentChangesChange={changeAppointmentChanges}
                                    editingAppointment={state.editingAppointment}
                                    onEditingAppointmentChange={changeEditingAppointment}
                                />
                                <WeekView
                                    startDayHour={7}
                                    endDayHour={22}
                                />
                                <AllDayPanel />
                                <EditRecurrenceMenu />
                                <ConfirmationDialog />
                                <Toolbar />
                                <DateNavigator />
                                <Appointments />
                                <AllDayPanel />
                                <AppointmentTooltip
                                    showOpenButton
                                    showDeleteButton
                                />
                                <AppointmentForm />
                            </Scheduler>
                        </Paper>
                    </div>
                </Modal>
            </div>
            <ToastContainer />
        </div >
    )
}

export default EditCourse
