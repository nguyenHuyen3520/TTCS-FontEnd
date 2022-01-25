import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container } from '@mui/material';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from "@mui/material/InputLabel";
import AdminApi from '../api/AdminApi';
import { useHistory } from "react-router-dom"
const validationSchema = yup.object({
    name: yup
        .string('Enter your user name').required('user name is required'),
    description: yup
        .string('Enter your description').required('description is required'),
    price: yup
        .number().required('price is required'),
});

const CreateCourse = () => {
    const history = useHistory()
    const [typeCourse, setTypeCourse] = React.useState('');
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const createCourse = async () => {
                const response = await AdminApi.createCourse(values);
                console.log("response", response);
            }
            createCourse();
            history.push("/");
            history.push("/courses");
        },
    });
    const handleChangeSelect = (event) => {
        setTypeCourse(event.target.value);
    };
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "100px" }}>
                <div>
                    <h1>Create new course</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField
                            fullWidth
                            id="price"
                            name="price"
                            label="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price}
                        />
                        {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={formik.values.typeCourse}
                            label="Type Course"
                            onChange={handleChangeSelect}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select> */}
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

export default CreateCourse