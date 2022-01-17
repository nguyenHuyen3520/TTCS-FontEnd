import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import CourseApi from '../api/CourseApi'
import { BsCheckLg } from "react-icons/bs";
import Image from '../components/Image';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Course = () => {
    const [data, setData] = useState({});
    const [isCheck, setIsCheck] = useState(true)
    const path = useParams();
    useEffect(() => {
        const getData = async () => {
            const result = await CourseApi.getCourse(path.id);
            setData(result.data);
            console.log("data:", result.data)
            const profile = JSON.parse(localStorage.getItem('profile'));
            const check = await CourseApi.checkStatus({ Course_id: path.id, User_id: profile.id });
            console.log(check.status);
            setIsCheck(check.status);
        }
        getData();
    }, [])
    const handlerSignup = async () => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        setIsCheck(false);
        const response = await CourseApi.addUserToCourse({ Course_id: path.id, User_id: profile.id });
        toast('Đăng ký thành công!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log(response);
    }
    const handlerDelete = async () => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        console.log("profile: ", profile);
        setIsCheck(true);
        const response = await CourseApi.DeleteUserFromCourse({ Course_id: path.id, User_id: profile.id });
        toast('Hủy Đăng ký thành công!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log(response);
    }
    return (
        <div className="p-12 pt-12 flex">
            <div className="w-2/3">
                <h1 className="font-bold text-4xl ">{data.resultCourse?.name ? <span>{data.resultCourse?.name}</span> : null}</h1>
                <div className="my-3">{data.resultCourse?.descriptions}</div>
                <div className="font-bold text-2xl mb-2">Bạn sẽ học được gì</div>
                <div className="grid grid-cols-2">
                    {
                        data.resultDetail?.Content.map((item, index) => (
                            <div key={index} className="flex w-1/2 mb-1 min-w-max">
                                <div className="mt-1 mr-1">
                                    <BsCheckLg color="#f58b6c" />
                                </div>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div className="font-bold text-2xl mb-2 mt-2">Yêu cầu</div>
                <div className="grid grid-cols-2">
                    {
                        data.resultDetail?.Requirements.map((item, index) => (
                            <div key={index} className="flex w-1/2 mb-1 min-w-max">
                                <div className="mt-1 mr-1">
                                    <BsCheckLg color="#f58b6c" />
                                </div>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center items-center ml-8">
                <div className="w-auto h-1/2">
                    <img className="h-full w-full object-cover" alt={data.resultCourse?.name} src={data.resultCourse?.image} />
                    {
                        isCheck ?
                            (
                                <div className="flex justify-center items-center mt-5 ">
                                    <button className="px-3 py-1 bg-orange-500 rounded-3xl  " onClick={() => handlerSignup()}>
                                        <span className="text-center p-5 text-2xl text-white">Đăng Ký</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center mt-5 ">
                                    <button className="px-3 py-1 bg-orange-500 rounded-3xl " onClick={() => handlerDelete()}>
                                        <span className="text-center p-5 text-2xl text-white">Hủy Đăng Ký</span>
                                    </button>
                                </div>)
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Course
