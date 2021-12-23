import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Helmet from "../components/Halmet"
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
const Register = () => {
    const [values, serValue] = React.useState({
        userName: "",
        password: "",
        email: "",
        confirmPassword: "",
    })
    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onChange = (event) => {
        serValue({...values, [event.target.name]: event.target.value})
        addUser();
    }

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, result) {
            console.log(result)
        },
        variables: values
    })
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
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ){
        register(
            registerInput:{
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ){
            id email username createAt token
        }
    }
`
export default Register
