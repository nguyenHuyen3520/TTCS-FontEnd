import React, { useState, useEffect } from 'react'
import CourseApi from '../api/CourseApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';

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

const appointments = [
    {
        title: "Reactjs",
        startDate: "2022-01-11T09:45",
        endDate: "2022-01-11T11:45",
    },
    {
        title: "Reactjs",
        startDate: "2022-01-13T09:45",
        endDate: "2022-01-13T11:45",
    },
    {
        title: "Reactjs",
        startDate: "2022-01-15T09:45",
        endDate: "2022-01-15T11:45",
    },
    {
        title: "Reactjs",
        startDate: "2022-01-20T09:45",
        endDate: "2022-01-20T11:45",
    },
]

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

const getAllDayMessages = locale => allDayLocalizationMessages[locale];

// const LocaleSwitcher = withStyles(styles, { name: 'LocaleSwitcher' })(
//     ({ onLocaleChange, currentLocale, classes }) => (
//         <div className={classes.container}>
//             <div className={classes.text}>
//                 Locale:
//             </div>
//             <TextField
//                 select
//                 value={currentLocale}
//                 onChange={onLocaleChange}
//             >
//                 <MenuItem value="fr-FR">Le français (French)</MenuItem>
//                 <MenuItem value="de-GR">Deutsch (German)</MenuItem>
//                 <MenuItem value="en-US">English (United States)</MenuItem>
//             </TextField>
//         </div>
//     ),
// );

const MyCourse = () => {
    const [schedule, setSchedule] = useState()
    const [state, setState] = useState({
        data: appointments,
        currentDate: '2022-01-11',
        locale: 'en-US',
    })
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
        }
        getData();
    }, [])
    const { data, currentDate, locale } = state;
    return (
        <div className="p-9">
            <div>
                <div className="font-bold text-3xl">
                    Danh sách khóa học của bạn:
                </div>
                <div className="mt-4">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
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
            </div>
            <div>
                <div className="font-bold text-3xl mt-7 mb-3">
                    Lịch học của bạn:
                </div>
                <div>
                    <div className="shadow-2xl">
                        <Paper>
                            <Scheduler
                                data={data}
                                locale={locale}
                                height={660}
                            >
                                <ViewState
                                    defaultCurrentDate={currentDate}
                                />
                                <WeekView
                                    startDayHour={7}
                                    endDayHour={22}
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
        </div>
    )
}

export default MyCourse
