import React, { useState, useEffect } from 'react'
import { FormControl, TextField, Button, Box, Modal, Typography } from '@mui/material';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Paper from '@material-ui/core/Paper';
import { alpha } from '@material-ui/core/styles'
import { ViewState } from '@devexpress/dx-react-scheduler';
import { BsCheckLg } from "react-icons/bs";
import {
    Scheduler,
    WeekView,
    Toolbar,
    DateNavigator,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import CourseApi from '../../api/CourseApi';
import AdminApi from '../../api/AdminApi';

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
    const [detailCourse, setDetailCourse] = useState(null)
    const [formData, setFormData] = useState();
    const [listUser, setListUser] = useState();
    const [showListUser, setShowListUser] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [state, setState] = useState({
        data: [],
        currentDate: '2022-01-11',
        locale: 'en-US',
    })
    useEffect(() => {
        const getData = async () => {
            const scheduleData = await CourseApi.getScheduleOfCourse(course._id);
            const resultGetDetailCourse = await AdminApi.getDetailCourse({ Course_id: course._id })
            setState(
                (prevData) => {
                    const newState = { ...prevData, data: scheduleData?.data?.schedule, listUser: scheduleData?.listUser }
                    return newState;
                }
            )
            setListUser(state.listUser);
            setDetailCourse(resultGetDetailCourse?.data);
        }
        getData();
        setCheck(false);
        setCheck1(false);
    }, [course])
    return (
        <div className="mx-4 my-20 p-2  flex text-black flex" style={{ backgroundColor: '#ff9797' }}>
            <div className=" h-full text-white">
                <div style={{ width: '420px', height: '230px' }}>
                    <img className=" object-cover" alt={course?.name} src={course?.image} style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="p-5 flex cursor-pointer">
                    <div className="font-bold text-xl mr-3">Calendar:</div>
                    <CalendarTodayIcon sx={{ fontSize: 25 }} onClick={handleOpen} />
                </div>
                <div>
                    <div className="font-bold text-xl mr-3 px-5 cursor-pointer text-white" >
                        <div className="flex">
                            <div>
                                Kiến thức sẽ đạt được sau khóa học:
                            </div>
                            {
                                check ? (
                                    <div onClick={() => setCheck(!check)} className="flex cursor-pointer items-center justify-center ml-2">
                                        <AiFillCaretDown />
                                    </div>
                                ) : (
                                    <div onClick={() => setCheck(!check)} className="cursor-pointer items-center justify-center flex ml-2">
                                        <AiFillCaretUp />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        {
                            check ? (
                                <div className="pl-6">
                                    {
                                        detailCourse?.Content.map((item, index) => (
                                            <div key={index} className="flex w-1/2 mb-1 min-w-max">
                                                <div className="mt-1 mr-1">
                                                    <BsCheckLg color="red" />
                                                </div>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                    <div className="font-bold text-xl mr-3 px-5 cursor-pointer text-white mt-5" >
                        <div className="flex">
                            <div>
                                Yêu cầu của khóa học:
                            </div>
                            {
                                check1 ? (
                                    <div onClick={() => setCheck1(!check1)} className="flex cursor-pointer items-center justify-center ml-2">
                                        <AiFillCaretDown />
                                    </div>
                                ) : (
                                    <div onClick={() => setCheck1(!check1)} className="cursor-pointer items-center justify-center flex ml-2">
                                        <AiFillCaretUp />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        {
                            check1 ? (
                                <div className="pl-6">
                                    {
                                        detailCourse?.Content.map((item, index) => (
                                            <div key={index} className="flex w-1/2 mb-1 min-w-max">
                                                <div className="mt-1 mr-1">
                                                    <BsCheckLg color="red" />
                                                </div>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
            <div className="pl-4">
                <div className="font-bold mb-2 text-center">Thông tin khóa học</div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '70ch', color: 'black' },
                    }}
                    autoComplete="true"
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
                                data={state?.data}
                                locale={state?.locale}
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
