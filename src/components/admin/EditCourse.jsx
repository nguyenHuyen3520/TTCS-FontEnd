import React, { useState, useEffect } from 'react'
import { FormControl, TextField, Button, Box, Modal, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
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
    const [formData, setFormData] = useState();
    const [listUser, setListUser] = useState();
    const [showListUser, setShowListUser] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, setState] = useState({
        data: [],
        currentDate: '2022-01-17',
        locale: 'en-US',
        addedAppointment: {},
        appointmentChanges: {},
        editingAppointment: undefined,
    })

    useEffect(() => {
        const getData = async () => {
            const profile = JSON.parse(localStorage.getItem('profile'));
            const scheduleData = await CourseApi.getScheduleOfCourse(course._id);

            setState(
                (prevData) => {
                    const newState = { ...prevData, data: scheduleData.data.schedule }
                    return newState;
                }
            )
            const list = await CourseApi.getUserOfCourse(course._id);
            console.log("lich: ", state.data)
            setListUser(list.data);
        }
        getData();
        console.log("scha", state.data)
    }, [course])
    const commitChanges = ({ added, changed, deleted }) => {
        console.log("changed", added, changed, deleted)
        setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                console.log("targer:", state.editingAppointment)
                console.log("data changed", state.appointmentChanges)
                data = data.map(appointment => (
                    changed[appointment._id] ? { ...appointment, ...changed[appointment._id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            console.log("test data:", { data });
            return { data };
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
        console.log("appointmentChanges", appointmentChanges)
        setState(
            (prevData) => {
                const newState = { ...prevData, appointmentChanges: appointmentChanges }
                return newState;
            }
        )
    }

    const changeEditingAppointment = (editingAppointment) => {
        console.log("editingAppointment", editingAppointment);
        setState(
            (prevData) => {
                const newState = { ...prevData, editingAppointment: editingAppointment }
                return newState;
            }
        )
    }
    return (
        <div className=" mx-16 my-20 p-2 bg-slate-100 flex text-black flex">
            <div className="w-full h-full">
                <img className=" object-cover" alt={course?.name} src={course?.image} />
                <div className="p-5 flex cursor-pointer">
                    <div className="font-bold text-xl mr-3">Calendar:</div>
                    <CalendarTodayIcon sx={{ fontSize: 25 }} onClick={handleOpen} />
                </div>
                <div className="font-bold text-xl mr-3 px-5 cursor-pointer" onClick={() => setShowListUser(!showListUser)}>
                    <div>List User:{
                        showListUser ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                    }</div>
                    {
                        showListUser ? (<div>
                            {
                                listUser?.map((item, index) => (
                                    <div key={index}>{item.name}</div>
                                ))
                            }
                        </div>) : null
                    }


                </div>
            </div>
            <div className="pl-4">
                <div className="font-bold mb-2 text-center">Edit Course</div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch', color: 'white' },
                    }}
                    autoComplete="off"
                >
                    <FormControl >
                        <div className="mb-4">
                            <TextField id="outlined-basic" label="Name" value={course?.name} className="text-black" />
                        </div>
                        <div className="mb-4">
                            <TextField id="outlined-basic" label="Type" value={course?.typeCourse} className="text-black" />
                        </div>
                        <div className="mb-4 h-auto">
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={5}
                                value={course?.descriptions}
                                placeholder={course?.descriptions}
                            />
                        </div>
                    </FormControl>
                </Box>
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
                                height={660}
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
                                    startDayHour={17}
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
        </div>
    )
}

export default EditCourse
