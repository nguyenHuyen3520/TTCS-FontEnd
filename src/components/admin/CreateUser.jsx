import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container } from '@mui/material';
import AdminApi from '../../api/AdminApi';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from "react-router-dom";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db, storage } from "../../firebase/firebase"
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth'
const validationSchema = yup.object({
    userName: yup
        .string('Enter your user name').required('user name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    phone: yup
        .number().required('phone is required'),
    typeUser: yup.string(),
});
const CreateUser = () => {
    const history = useHistory()
    const [errForm, setErrForm] = useState(null)
    const [dataForm, setDataForm] = useState(null)
    const [refresh, setRefresh] = useState(true)
    const [data, setData] = useState(null)
    const [photo, setPhoto] = useState("https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-11.jpg")
    const [photoTemp, setPhotoTemp] = useState();
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            phone: '',
            typeUser: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setDataForm((prevData) => {
                const newData = { ...prevData, ...values, image: photo };
                return newData;
            })
            console.log("dataForm", dataForm);
            const response = await AdminApi.createUser(dataForm);
            if (response.success) {
                const result = await createUserWithEmailAndPassword(auth, values.email, values.password);
                const updateUser = await AdminApi.updateUser({ uid: result.uid, _id: response.data._id })
                await setDoc(doc(db, 'users', result.user.uid), {
                    uid: result.user.uid,
                    name: values.userName,
                    email: values.email,
                    createdAt: Timestamp.fromDate(new Date()),
                    isOnline: false,
                    avatar: dataForm.image
                })
            } else {
                setErrForm(response.message);
            }
            console.log("response", response);
            const find = localStorage.getItem('refresh');
            if (find) {
                localStorage.setItem("refresh", !find);
            } else {
                localStorage.setItem("refresh", true);
            }
            toast('Tạo tài khoản thành công!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
    });
    function handleChange(e) {
        console.log("vao handleChange", e.target)
        if (e.target.files[0]) {
            setPhotoTemp(e.target.files[0])
        }
    }

    function handleClick() {
        upload(photoTemp, data?.userName + "-" + Math.random().toFixed(6));
    }

    async function upload(file, name) {
        const fileRef = ref(storage, name + '.png');
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        setPhoto(photoURL);
    }
    return (
        <Container>
            <div style={{ marginTop: "100px", width: "900px", color: 'black', backgroundColor: 'white', padding: '10px', marginLeft: '100px' }}>
                <h1 style={{ textAlign: 'center' }}>Thêm người dùng mới</h1>
                <div className="flex">
                    <div className="mr-3">
                        <div style={{ width: '300px', height: '300px', backgroundImage: `url("${photo}")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        </div>
                        <div className="">
                            <input type="file" onChange={handleChange} />
                            <button disabled={loading || !photoTemp} onClick={handleClick} className="p-2 px-4 text-white bg-cyan-500 my-2 rounded-xl">Upload</button>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <div>{errForm}</div>
                            <TextField
                                fullWidth
                                id="userName"
                                name="userName"
                                label="userName"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                error={formik.touched.userName && Boolean(formik.errors.userName)}
                                helperText={formik.touched.userName && formik.errors.userName}
                            />
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <TextField
                                fullWidth
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                label="passwordConfirmation"
                                type="password"
                                value={formik.values.passwordConfirmation}
                                onChange={formik.handleChange}
                                error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                                helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                            />
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                label="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                            <FormLabel component="legend">TypeUser</FormLabel>
                            <RadioGroup
                                aria-label="typeUser"
                                defaultValue=""
                                name="typeUser"
                            >
                                <div className="flex items-center mx-auto">
                                    <FormControlLabel onChange={formik.handleChange} value="hoc_vien" control={<Radio />} label="Hoc_Vien" />
                                    <FormControlLabel onChange={formik.handleChange} value="giao_vien" control={<Radio />} label="Giao_Vien" />
                                    <FormControlLabel onChange={formik.handleChange} value="admin" control={<Radio />} label="Admin" />
                                </div>
                            </RadioGroup>
                            <div style={{ marginTop: "10px" }}>
                                <Button color="primary" variant="contained" fullWidth type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </Container>
    );
};

export default CreateUser