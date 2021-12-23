import React from 'react'
import { getTeachers} from "../graphql-quries/queries"
import { useQuery } from '@apollo/client'
const Test = () => {
    const { loading, error, data } = useQuery(getTeachers);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    

    console.log(data);
    return (
        <div>
            test
        </div>
    )
}

export default Test
