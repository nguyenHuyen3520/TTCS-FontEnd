import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container } from '@mui/material';
import userApi from '../api/userApi';
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
});

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            phone: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const signup = async () => {
                const response = await userApi.signup(values);

            }
            signup();

        },
    });

    return (
        <div className= "form" style ={{background:'rgb(34,193,195)', background: 'linear-gradient(135deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%)', top:'0px',height:'100%', paddingTop:'150px'}}>
        <Container style={{ maxWidth:'500px', minWidth:'300px', maxHeight:'700px', width:'30%', height:'60%', margin:'auto', backgroundColor:'#FFFFFF', borderRadius:'25px', padding:'60px 60px'}}>
            <div style={{ }}>

                    <h1 className="font-bold text-5xl text-center mb-2">Register</h1>
                    <form onSubmit={formik.handleSubmit}>
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
                        <div style={{ marginTop: "10px" }}>
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
        </Container>
        </div>
    );
};

export default Signup