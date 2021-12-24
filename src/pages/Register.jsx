import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Helmet from "../components/Helmet"
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import { useHistory } from "react-router-dom";
const Register = () => {
    const history = useHistory();
    const [values, setValue] = React.useState({
        userName: "",
        password: "",
        email: "",
        confirmPassword: "",
        role: 1
    })
    const onSubmit = (event) => {
        event.preventDefault();
        addUser();
        console.log(data);
        history.push("/home?",data)
    }

    const [addUser, {data, loading}] = useMutation(REGISTER_USER, {
        update(proxy, result) {
            console.log(result)
        },
        variables: {
            name: values.userName,
            email: values.email,
            password: values.password,
            role: 1
        }
    })
    
    const onChange = (event) => {
        setValue({...values, [event.target.name]: event.target.value})
    }
    return (

        <Helmet title="Register">
            <div style={{padding: "100px 700px"}}>
                <Form onSubmit={onSubmit} noValidate>
                    <h1 style={{textAlign: "center", width: "400px", margin: "auto"}}>Register</h1>
                    <Form.Input
                        label="UserName"
                        placeholder="UserName..."
                        name="userName"
                        value={values.userName}
                        onChange={onChange}
                        type="text" 
                    />
                    <Form.Input
                        label="Email"
                        placeholder="Email..."
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        type="text" 
                    />
                    <Form.Input
                        label="Password"
                        placeholder="Password..."
                        name="password"
                        value={values.password}
                        onChange={onChange}
                        type="password"
                    />
                    <Form.Input
                        label="ConfirmPassword"
                        placeholder="ConfirmPassword..."
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={onChange}
                        type="password"
                    />
                    <Button type="submit" onClick={onSubmit}>Register</Button>
                </Form>
            </div>        
        </Helmet>
    )
}

const REGISTER_USER = gql `
    mutation createUser(
        $name: String!
        $email: String!
        $password: String!    
        $role: Int    
    ){
        id name
    }
`
export default Register