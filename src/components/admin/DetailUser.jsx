import React, { useState, useEffect, useLayoutEffect } from 'react';
import CourseApi from '../../api/CourseApi';
import { FaBan } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DetailUser = ({ user }) => {
    const [data, setData] = useState();
    const [check, setCheck] = useState(false);
    const [listCourse, setListCourse] = useState(null);
    const [refresh, setRefresh] = useState(true)
    useLayoutEffect(() => {
        setData(user)
        const getData = async () => {
            const response = await CourseApi.getListMyCourse({ user_id: user._id });
            setListCourse(response.data)
        }
        getData();
        setCheck(true)
    }, [user, refresh])
    const handlerDelete = async (course) => {
        const response = await CourseApi.DeleteUserFromCourse({ Course_id: course._id, User_id: user._id });
        toast('Ban người dùng khỏi khóa học thành công!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setRefresh(!refresh);
    }
    return (
        <div style={{ marginTop: "100px", width: "600px", color: 'black', backgroundColor: 'white', padding: '10px', marginLeft: '300px' }}>
            <div>
                <div className=" justify-center items-center">
                    <div className="text-center font-bold text-3xl">Thông tin chi tiết về người dùng</div>
                </div>
                <div className="p-2 flex">
                    <div style={{ width: '200px', height: '200px', backgroundImage: `url("${user.image}")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    </div>
                    <div className="text-xl px-3">
                        <div className="flex p-3">
                            <div className="font-bold">
                                Name:
                            </div>
                            <div className="ml-3">
                                {data?.userName}
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold">
                                Email:
                            </div>
                            <div className="ml-3">
                                {data?.email}
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold">
                                Phone:
                            </div>
                            <div className="ml-3">
                                {data?.phone}
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold">
                                TypeUser:
                            </div>
                            <div className="ml-3">
                                {data?.typeUser}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-xl pl-5 cursor-pointer">
                        <div className="flex font-bold">
                            Danh sách khóa học:
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
                        <div>
                            {
                                check ? (
                                    <div>
                                        {
                                            listCourse?.map((item, index) => (
                                                <div key={index} className="flex justify-between p-2">
                                                    <div>
                                                        {item.name}
                                                    </div>
                                                    <div className="text-red-600" onClick={() => handlerDelete(item)}>
                                                        <FaBan />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center" >
                                        Bạn chưa tham gia vào khóa học nào
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div >
    );
};

export default DetailUser