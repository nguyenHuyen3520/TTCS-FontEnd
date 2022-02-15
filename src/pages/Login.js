import React, { useState, useLayoutEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import userApi from '../api/userApi';
import { Container } from '@mui/material';
import { useHistory, useLocation } from "react-router-dom"
import { GoogleLogin } from 'react-google-login';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../firebase/firebase"
import { setDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
const clientId = "204968990099-vnh6f6s4rgcte95ul3o12qs6polbik4p.apps.googleusercontent.com";
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const [refresh, setRefresh] = useState(false);
  const data = useLocation();
  const [errForm, setErrForm] = useState({
    status: false,
    message: '',
    type: ''
  })
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  useLayoutEffect(() => {
    if (data?.state?.user) {
      setFormData({
        email: data.state.user.email,
        password: data.state.user.password
      })
    }
  }, [data?.state?.user]);
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: formData.email,
      password: formData.password,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const login = async () => {
        const response = await userApi.login(values);
        if (response.success) {
          const result = await signInWithEmailAndPassword(auth, values.email, values.password);
          await updateDoc(doc(db, 'users', result.user.uid), {
            isOnline: true
          })
          localStorage.setItem('accessToken', response.accessToken);
          const user = await userApi.getProfile();
          const dataProfile = { ...user.user, uid: result.user.uid, avatar: response.image, isGoogle: response.isGoogle }
          localStorage.setItem('profile', JSON.stringify(dataProfile));
          history.push("/", { login: true })
        } else {
          setRefresh(!refresh);
          setErrForm({
            status: true,
            message: response.message,
            type: response.type
          })
        }
      }
      login();
    },
  });

  const onLoginSuccess = async (res) => {
    const values = {
      userName: res.profileObj.name,
      email: res.profileObj.email,
      image: res.profileObj.imageUrl,
      isGoogle: true
    }
    const response = await userApi.login(values);
    if (response.needCreate) {
      const result = await signInWithEmailAndPassword(auth, values.email, values.password);
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        name: values.userName,
        email: values.email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: false
      })
    }
    localStorage.setItem('accessToken', response.accessToken);
    const user = await userApi.getProfile();
    localStorage.setItem('profile', JSON.stringify({ ...user.user }));
    history.push("/", { login: true })
  };
  return (
    // , background: 'linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
    <div className="form" style={{ background: 'rgb(34,193,195)', top: '0px', height: '100%', paddingTop: '150px' }}>
      <Container style={{ maxWidth: '500px', minWidth: '300px', width: '30%', margin: 'auto', backgroundColor: '#FFFFFF', borderRadius: '25px', padding: '80px' }}>
        <div classname=" form_login" style={{}}>
          <h1 className="font-bold text-5xl text-center mb-2">Login</h1>
          <form onSubmit={formik.handleSubmit}>
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
            {
              errForm.status && errForm.type === 'email' ? (<div style={{ color: 'red' }}>{errForm.message}</div>) : null
            }
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
            {
              errForm.status && errForm.type === 'password' ? (<div style={{ color: 'red' }}>{errForm.message}</div>) : null
            }
            <div style={{ marginTop: "10px" }}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </div>
            <div className="w-full mt-3 border-x-slate-50">
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign In With Google"
                onSuccess={onLoginSuccess}
                // onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                style={{ width: '100%' }}
              />
            </div>
            <div>
              If you don't have an account,
              <span
                onClick={() => {
                  history.push("/signup")
                }}
                className="cursor-pointer text-red-500 font-bold min-w-full"
              >
                click here
              </span>
            </div>
          </form>
        </div>

      </Container>
    </div>
  );
};

export default Login