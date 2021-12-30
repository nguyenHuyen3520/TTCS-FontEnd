
import React from 'react'
import MnUser from '../../components/MnUser'
import Admin from './Admin'
import { gql, useQuery } from '@apollo/client';
const AdminTeacher = () => {
    const { loading, error, data } = useQuery(GET_DATA);
    if(loading) { return <div>dang loading</div>; }
    if(error) { return <div>err</div>}
    return (
        <Admin>            
            <MnUser listUser={data.teachers} title="Quan ly Giao Vien" />                    
        </Admin>
    )
}
const GET_DATA= gql `
    query{
        teachers{
            name email address id
        }
    }
`
export default AdminTeacher
