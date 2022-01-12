import React from 'react';
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
import { useHistory } from "react-router-dom"

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

const CreateUser = ({ title }) => {
    const history = useHistory()
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
        onSubmit: (values) => {
            console.log("value", values);
            const CreateUser = async () => {
                const response = await AdminApi.createUser(values);
                console.log("aaaa", response);
            }
            CreateUser();
            history.push("/");
            history.push("/admin-management-user");
        },
    });

    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "100px", width: "600px", color: 'black', backgroundColor: 'white', padding: '10px', marginLeft: '250px' }}>
                <div>

                    <h1 style={{ textAlign: 'center' }}>Add New User</h1>
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
                        <FormLabel component="legend">TypeUser</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            defaultValue=""
                            name="typeUser"
                        >
                            <div className="flex items-center mx-auto">
                                <FormControlLabel onChange={formik.handleChange} value="user" control={<Radio />} label="User" />
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
        </Container>
    );
};

export default CreateUser