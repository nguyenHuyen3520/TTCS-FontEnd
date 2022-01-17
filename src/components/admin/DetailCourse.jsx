import React, { useState, useEffect } from 'react'
import { FormControl, TextField, Button, Box, Modal, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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

const DetailCourse = ({ course }) => {
    const [formData, setFormData] = useState();
    const [listUser, setListUser] = useState();
    const [showListUser, setShowListUser] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, setState] = useState({
        data: [],
        currentDate: '2022-01-11',
        locale: 'en-US',
    })
    useEffect(() => {
        const getData = async () => {
            const profile = JSON.parse(localStorage.getItem('profile'));
            const scheduleData = await CourseApi.getScheduleOfCourse(course._id);
            setState(
                (prevData) => {
                    const newState = { ...prevData, data: scheduleData.data.schedule, listUser: scheduleData.listUser }
                    return newState;
                }
            )
            setListUser(state.listUser);
        }
        getData();
        console.log("listUser", listUser);
    }, [course])
    return (
        <div className=" mx-16 my-20 p-2 bg-slate-100 flex text-black flex">
            <div className="w-full h-full">
                <img className=" object-cover" alt={course?.name} src={course?.image} />
                <div className="p-5 flex cursor-pointer">
                    <div className="font-bold text-xl mr-3">Calendar:</div>
                    <CalendarTodayIcon sx={{ fontSize: 25 }} onClick={handleOpen} />
                </div>
                <div className="font-bold text-xl mr-3 px-5 cursor-pointer" >
                    <div>
                        {
                            showListUser ?
                                (
                                    <div onClick={() => setShowListUser(!showListUser)}>List User:<ArrowDropUpIcon /></div>) : (
                                    <div onClick={() => setShowListUser(!showListUser)}>
                                        List User:<ArrowDropDownIcon />
                                    </div>)
                        }
                    </div>
                    <div>
                        {
                            showListUser ? (<div>
                                {
                                    listUser?.map((item, index) => (
                                        <div key={index}> {item.userName} </div>
                                    ))
                                }
                            </div>) : null
                        }

                    </div>
                </div>
            </div>
            <div className="pl-4">
                <div className="font-bold mb-2 text-center">Thông tin chi tiết</div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch', color: 'white' },
                    }}
                    autoComplete="off"
                >
                    <FormControl >
                        <div className="mb-4">
                            <TextField id="outlined-basic" label="Name" value={course?.name} className="text-black" disabled />
                        </div>
                        <div className="mb-4">
                            <TextField id="outlined-basic" label="Type" value={course?.typeCourse} className="text-black" disabled />
                        </div>
                        <div className="mb-4 h-auto">
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={5}
                                value={course?.descriptions}
                                placeholder={course?.descriptions}
                                disabled
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
                        <Paper>
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
                        </Paper>
                    </div>
                </Modal>

            </div>
        </div>
    )
}

export default DetailCourse
