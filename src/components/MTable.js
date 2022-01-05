import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    },
    tableContainer: {
        borderRadius: 15,
    },
    tableRow: {
        fontWeight: 'bold',
    },
    bg: {
        marginRight: '10px'
    }
}))

export default function MTable(props) {

    const classes = useStyles()
    const { data, title } = props;
    const [listUser, setListUser] = React.useState([]);
    React.useEffect(() => {
        setListUser(data);
    })
    const handlerDelete = ()=>{

    }
    return (
        <div style={{ position: 'relative', marginBottom: '100px', zIndex: '100', paddingLeft: "20px", backgroundColor: "white"}}>
            <h1 style={{ position: 'absolute', width: '800px', height: '50px', lineHeight: '50px', top: '-46px', paddingLeft: '50px', borderRadius: '10px', backgroundColor: '#358fee', zIndex: '99', color: 'white', left: '40px' }}>{title}</h1>
            <TableContainer component={Paper} className={classes.tableContainer} style={{ position: 'relative', marginTop: '30px', paddingTop: '20px', border: '1px solid black' }}>
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                        <TableRow classes={classes.tableRow}>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listUser.map((user) => (
                            <TableRow
                                key={user.id}
                            >
                                <TableCell>{user.userName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.typeUser}</TableCell>
                                <TableCell>
                                    <div style={{display: 'flex',}}>
                                        <div style={{ marginRight: "10px" }}>
                                            <Button variant="contained" startIcon={<EditIcon />} color="primary" >
                                                EDIT
                                            </Button>

                                        </div>
                                        <div>
                                            <Button variant="contained" startIcon={<DeleteIcon />} color="secondary" onClick={()=> handlerDelete(user.id)}>
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

