
import React from 'react'
import MnUser from '../../components/MnUser'
import Admin from './Admin'
import { gql, useQuery } from '@apollo/client';
const AdminStudent = () => {
    const { loading, error, data } = useQuery(GET_DATA);
    if(loading) { return <div>dang loading</div>; }
    if(error) { return <div>err</div>}
    return (
        <Admin>            
            <MnUser listUser={data.students} title="Quan ly student" />                    
        </Admin>
    )
}
const GET_DATA= gql `
    query{
        students{
            name email address id
        }
    }
`

export default AdminStudent
