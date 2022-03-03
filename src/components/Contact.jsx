import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        content: ''
    })
    const setChange = (text, key) => {
        setFormData((prevData) => {
            const newData = { ...prevData, [key]: text };
            return newData;
        })        
    }
    return (
        <div className="p-6">
            <div>
                <Grid container>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                            <div className="font-bold text-2xl py-6">Liên Hệ</div>
                            <FormControl fullWidth margin='normal'>
                                <InputLabel>Họ và tên:</InputLabel>
                                <Input name='name' fullWidth value={formData.name} onChange={(e) => setChange(e.target.value, e.target.name)} />
                            </FormControl>
                            <FormControl fullWidth margin='normal'>
                                <InputLabel>Email</InputLabel>
                                <Input name='email' fullWidth onChange={(e) => setChange(e.target.value, e.target.name)} />
                            </FormControl>
                            <FormControl fullWidth margin='normal'>
                                <InputLabel>Điện Thoại:</InputLabel>
                                <Input name='phone' fullWidth onChange={(e) => setChange(e.target.value, e.target.name)} />
                            </FormControl>
                            <FormControl fullWidth margin='normal'>
                                <InputLabel>Content</InputLabel>
                                <Input name='content' fullWidth onChange={(e) => setChange(e.target.value, e.target.name)} />
                                {/* <TextareaAutosize
                                    name='content'
                                    minRows={3}
                                    style={{ width: 200 }}
                                /> */}
                            </FormControl>
                            <FormControl fullWidth margin='normal'>
                                <Button
                                    variant='extendedFab'
                                    color='primary'
                                    type='submit'
                                    style={{ backgroundColor: 'blue', color: 'white' }}
                                    onClick={() => {
                                        toast("Gửi thông tin liên hệ thành công!!", {
                                            position: "bottom-right",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                        setTimeout(function () {
                                            history.push('/')
                                        }, 3000)
                                    }}
                                >
                                    Contact
                                </Button>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
                <ToastContainer />
            </div>
        </div>
    )
}
export default Contact
