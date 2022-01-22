import React, { useState, useEffect, useLayoutEffect } from 'react';
import CourseApi from '../../api/CourseApi';
import { FaBan } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { upload, storage } from "../../firebase/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdminApi from '../../api/AdminApi';
const EditUser = ({ user }) => {
    const [data, setData] = useState(user);
    const [check, setCheck] = useState(false);
    const [listCourse, setListCourse] = useState(null);
    const [refresh, setRefresh] = useState(true)
    const [photo, setPhoto] = useState(user.image)
    const [photoTemp, setPhotoTemp] = useState();
    const [loading, setLoading] = useState(false);
    useLayoutEffect(() => {
        setData(user)
        setPhoto(user.image)
        const getData = async () => {
            const response = await CourseApi.getListMyCourse({ user_id: user._id });
            console.log("response", response);
            setListCourse(response.data)
        }
        getData();
    }, [user, refresh])
    const handlerDelete = async (course) => {
        const response = await CourseApi.DeleteUserFromCourse({ Course_id: course._id, User_id: user._id });
        console.log(response);
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

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhotoTemp(e.target.files[0])
        }
    }

    function handleClick() {
        upload(photoTemp, user.userName + "-" + user._id + "-" + Math.random().toFixed(4));
    }

    async function upload(file, name) {
        const fileRef = ref(storage, name + '.png');
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        setPhoto(photoURL);
        setData((prevData) => {
            const newData = { ...prevData, image: photoURL };
            return newData;
        })
    }
    const updateUser = async () => {
        const response = await AdminApi.updateUser(data);
        toast('Update user thành công!', {
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
        <div style={{ marginTop: "100px", width: "900px", color: 'black', backgroundColor: 'white', padding: '10px', marginLeft: '100px' }}>
            <div>
                <div className=" justify-center items-center">
                    <div className="text-center font-bold text-3xl">Chỉnh sửa thông tin của người dùng</div>
                </div>
                <div className="p-2 flex">
                    <div>
                        <div style={{ width: '300px', height: '300px', backgroundImage: `url("${photo}")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        </div>
                        <div className="">
                            <input type="file" onChange={handleChange} />
                            <button disabled={loading || !photoTemp} onClick={handleClick} className="p-2 px-4 text-white bg-cyan-500 my-2 rounded-xl">Upload</button>
                        </div>
                    </div>
                    <div className="text-xl px-3 w-full">
                        <div>
                            <div className="font-bold">
                                Name:
                            </div>
                            <input
                                value={data?.userName}
                                className="border-2 w-full p-2 ml-3"
                                name="userName"
                                onChange={(e) => setData((prevData) => {
                                    const newData = { ...prevData, userName: e.target.value }
                                    return newData;
                                })}
                            />
                        </div>
                        <div>
                            <div className="font-bold">
                                Email:
                            </div>
                            <input
                                value={data?.email}
                                className="border-2 w-full p-2 ml-3"
                                name="email"
                                onChange={(e) => setData((prevData) => {
                                    const newData = { ...prevData, email: e.target.value }
                                    return newData;
                                })}
                            />
                        </div>
                        <div>
                            <div className="font-bold">
                                Phone:
                            </div>
                            <input
                                value={data?.phone}
                                className="border-2 w-full p-2 ml-3"
                                name="phone"
                                onChange={(e) => setData((prevData) => {
                                    const newData = { ...prevData, phone: e.target.value }
                                    return newData;
                                })}
                            />
                        </div>
                        <div>
                            <div className="font-bold">
                                TypeUser:
                            </div>
                            <select name="typeUser" value={data?.typeUser} className="p-3 min-w-full" onChange={(e) => setData((prevData) => {
                                const newData = { ...prevData, typeUser: e.target.value }
                                return newData;
                            })}>
                                <option value="admin">admin</option>
                                <option value="giao_vien">giao_vien</option>
                                <option value="hoc_vien">hoc_vien</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-center border-2 p-3 bg-blue-600 text-white hover:text-red-300 hover:shadow-sm rounded-xl cursor-pointer w-1/2" onClick={() => updateUser()}>
                                Cập nhật
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div >
    );
};

export default EditUser