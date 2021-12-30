import React from 'react'
import { Table } from 'semantic-ui-react'
import {gql} from '@apollo/client'
import {useMutation} from '@apollo/react-hooks'
const MnUser = (props) => {
    const { listUser, title } = props
    // const [id, setId] = React.useState(null)
    // const [remove, {data, loading}] = useMutation(DELETE_USER,{
    //     variables: { id: id}
    // });
    // const handleRemove = (id)=>{
    //     setId(id);
    //     remove();
    // }
    return (
        <div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <h3 style={{marginRight: "20px"}}>{title}</h3>
                <button style={{cursor: "pointer", backgroundColor: "#358bf4", color: "white", padding: "0 20px", borderRadius: "10px", border:"none"}}>New</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>                                    
                                    <button 
                                        style={{backgroundColor: "red", color: "white", cursor: "pointer", borderRadius: "5px", border: "none", padding: "5px"}}
                                        // onClick={handleRemove(item.id) }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

const DELETE_USER= gql `
    query{
        DeleteUser(id: ID){
            String
        }
    }
`
export default MnUser
