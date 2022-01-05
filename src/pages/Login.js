import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import userApi from '../api/userApi';
import { Container } from '@mui/material';
import { useHistory } from "react-router-dom"

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

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "300px" }}>
        <div>

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
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login