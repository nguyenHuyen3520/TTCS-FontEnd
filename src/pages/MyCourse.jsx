import React, { useState, useEffect } from 'react'
import CourseApi from '../api/CourseApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import moment from 'moment'
// Import Swiper styles
import 'swiper/css';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Toolbar,
    DateNavigator,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';


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

const useStyles = makeStyles(theme => ({
    todayCell: {
        backgroundColor: fade(theme.palette.primary.main, 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.14),
        },
        '&:focus': {
            backgroundColor: fade(theme.palette.primary.main, 0.16),
        },
    },
    weekendCell: {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        '&:hover': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        },
        '&:focus': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        },
    },
    today: {
        backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
    weekend: {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
    },
}));

const getAllDayMessages = locale => allDayLocalizationMessages[locale];

const TimeTableCell = (props) => {
    const classes = useStyles();
    const { startDate } = props;
    const date = new Date(startDate);

    if (date.getDate() === new Date().getDate()) {
        return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
    } if (date.getDay() === 0 || date.getDay() === 6) {
        return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
    } return <WeekView.TimeTableCell {...props} />;
};

const DayScaleCell = (props) => {
    const classes = useStyles();
    const { startDate, today } = props;

    if (today) {
        return <WeekView.DayScaleCell {...props} className={classes.today} />;
    } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
        return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
    } return <WeekView.DayScaleCell {...props} />;
};

const MyCourse = () => {
    const [state, setState] = useState({
        data: [],
        currentDate: '2022-01-11',
        locale: 'en-US',
    })
    // const [filter, setFilter] = useState(null)
    const [listCourse, setListCourse] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const profile = JSON.parse(localStorage.getItem('profile'));
            const response = await CourseApi.getListMyCourse({ user_id: profile.id });
            const scheduleData = await CourseApi.getSchedule();
            setState(
                (prevData) => {
                    const newState = { ...prevData, data: scheduleData.data }
                    return newState;
                }
            )
            setListCourse(response.data);
            // const listName = response.data.map((item) => item.name)
            // setFilter(['All', ...listName])
        }
        getData();
    }, []);
    const { data, locale } = state;
    return (
        <div className="p-9">
            {
                listCourse.length > 0 ? (
                    <div>
                        <div className="font-bold text-3xl">
                            Danh sách khóa học của bạn:
                        </div>
                        <div className="mt-4">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={5}
                            >
                                {
                                    listCourse.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Link to={`/course/${item._id}`}>
                                                <div>
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className="text-center text-2xl">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>) : (<div>
                        <div className="font-bold text-3xl">
                            Danh sách khóa học của bạn:
                        </div>
                        <div className="mt-4 h-24" style={{ lineHeight: "80px" }}>
                            Bạn chưa có khóa học nào.
                        </div>
                    </div>)
            }
            <div>
                <div className="font-bold text-3xl mt-7 mb-3 mr-3">
                    Lịch học của bạn:
                </div>
                {/* <div className="flex justify-center items-center mb-3">
                    <div className="font-bold text-3xl mr-3">
                        Lọc theo:
                    </div>
                    {
                        filter?.map((item, index) => {
                            <div className="p-2 rounded-md text-white bg-slate-500 px-4 font-bold text-2xl" key={index}>
                                {item}
                            </div>
                        })
                    }
                </div> */}
                <div>
                    <div className="shadow-2xl">
                        <Paper>
                            <Scheduler
                                data={data}
                                locale={locale}
                                height={960}
                            >
                                <ViewState
                                    defaultCurrentDate={moment(new Date())}
                                />
                                <WeekView
                                    startDayHour={9}
                                    endDayHour={22}
                                    timeTableCellComponent={TimeTableCell}
                                    dayScaleCellComponent={DayScaleCell}
                                />
                                <Toolbar />
                                <DateNavigator />
                                <Appointments />
                                <AllDayPanel
                                    messages={getAllDayMessages(locale)}
                                />
                            </Scheduler>
                        </Paper>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    )
}

export default MyCourse
