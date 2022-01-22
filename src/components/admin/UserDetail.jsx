// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { Container } from '@mui/material';
// import AdminApi from '../../api/AdminApi';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { useHistory } from "react-router-dom"

// const validationSchema = yup.object({
//     userName: yup
//         .string('Enter your user name').required('user name is required'),
//     email: yup
//         .string('Enter your email')
//         .email('Enter a valid email')
//         .required('Email is required'),
//     password: yup
//         .string('Enter your password')
//         .min(8, 'Password should be of minimum 8 characters length')
//         .required('Password is required'),
//     phone: yup
//         .number().required('phone is required'),
//     typeUser: yup.string(),
// });

// const DetailtUser = ({ user }) => {
//     const history = useHistory()
//     const formik = useFormik({
//         initialValues: user,
//         validationSchema: validationSchema,
//         onSubmit: (values) => {
//             const DetailtUser = async () => {
//                 console.log(values);
//                 const response = await AdminApi.updateUser(values);
//             }
//             DetailtUser();
//         },
//     });

//     return (
//         <Container>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "100px", width: "600px", color: 'black', backgroundColor: 'white', padding: '10px', marginLeft: '250px' }}>
//                 <div>

//                     <h1 className="text-center font-bold text-3xl">Detail user</h1>
//                     <form onSubmit={formik.handleSubmit}>
//                         <TextField
//                             fullWidth
//                             id="userName"
//                             name="userName"
//                             label="userName"
//                             value={formik.values.userName}
//                             onChange={formik.handleChange}
//                             error={formik.touched.userName && Boolean(formik.errors.userName)}
//                             helperText={formik.touched.userName && formik.errors.userName}
//                             disabled
//                         />
//                         <TextField
//                             fullWidth
//                             id="email"
//                             name="email"
//                             label="Email"
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             error={formik.touched.email && Boolean(formik.errors.email)}
//                             helperText={formik.touched.email && formik.errors.email}
//                             disabled
//                         />
//                         <TextField
//                             fullWidth
//                             id="phone"
//                             name="phone"
//                             label="phone"
//                             value={formik.values.phone}
//                             onChange={formik.handleChange}
//                             error={formik.touched.phone && Boolean(formik.errors.phone)}
//                             helperText={formik.touched.phone && formik.errors.phone}
//                             disabled
//                         />
//                         <FormLabel component="legend">TypeUser</FormLabel>
//                         <RadioGroup
//                             aria-label="gender"
//                             name="typeUser"
//                             defaultValue={user.typeUser}
//                             disabled
//                         >
//                             <div style={{ display: 'flex', justifyContent: 'center' }}>
//                                 <FormControlLabel onChange={formik.handleChange} value="hoc_vien" control={<Radio />} label="Hoc Vien" disabled />
//                                 <FormControlLabel onChange={formik.handleChange} value="giao_vien" control={<Radio />} label="Giao Vien" disabled />
//                                 <FormControlLabel onChange={formik.handleChange} value="admin" control={<Radio />} label="Admin" disabled />
//                             </div>
//                         </RadioGroup>
//                         <div style={{ marginTop: "10px" }}>
//                             <Button color="primary" variant="contained" fullWidth type="submit">
//                                 Submit
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default DetailtUser
import React from 'react';

export const UserDetail = () => {
    return <div>test</div>;
};
