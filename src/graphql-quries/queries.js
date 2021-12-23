import {gql} from '@apollo/client'
const getStudents = gql `
    query{

        user(id: "61c1fa381a42433aa09bad2f"){
            id
            name
            address
        }
    }
`

const getTeachers = gql `
    query{
        teachers{
            id 
            name
        }
    }
`

const createUser = gql `
    mutation{
        createUser()
    }
`

export {getStudents, getTeachers}