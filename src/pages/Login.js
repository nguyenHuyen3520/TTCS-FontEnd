import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import userApi from '../api/userApi';
import { Container } from '@mui/material';
import { useHistory } from "react-router-dom"
import { GoogleLogin } from 'react-google-login';

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
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const login = async () => {
        const response = await userApi.login(values);
        localStorage.setItem('accessToken', response.accessToken);
        const user = await userApi.getProfile();
        console.log(JSON.stringify({ ...user.user }));
        localStorage.setItem('profile', JSON.stringify({ ...user.user }));
        console.log({ ...user.user });
        history.push("/")
      }
      login();
    },
  });

  const onLoginSuccess = async (res) => {
    console.log('Login Success:', res.profileObj);
    const values = {
      userName: res.profileObj.name,
      email: res.profileObj.email,
      image: res.profileObj.imageUrl,
      isGoogle: true
    }
    const response = await userApi.login(values);
    localStorage.setItem('accessToken', response.accessToken);
    const user = await userApi.getProfile();
    console.log(JSON.stringify({ ...user.user }));
    localStorage.setItem('profile', JSON.stringify({ ...user.user }));
    console.log({ ...user.user });
    history.push("/")
  };
  return (
    <div className= "form" style ={{background:'rgb(34,193,195)', background: 'linear-gradient(135deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%)', top:'0px',height:'100%', paddingTop:'150px'}}>
    <Container style={{ maxWidth:'500px', minWidth:'300px', maxHeight:'700px', width:'30%', height:'60%', margin:'auto', backgroundColor:'#FFFFFF', borderRadius:'25px', padding:'80px'}}>
      <div classname= " form_login" style={{ }}>
      

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
                style={{ width: '100px' }}
              />
            </div>
          </form>
        </div>
     
    </Container>
    </div>
  );
};

export default Login