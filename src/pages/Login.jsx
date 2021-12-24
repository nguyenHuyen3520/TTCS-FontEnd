import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Helmet from "../components/Helmet"
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
const Login = () => {
    const [values, serValue] = React.useState({
        userName: "",
        password: "",
        email: "",
        confirmPassword: "",
    })
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        // addUser();
    }

    
    // const [addUser, {loading}] = useMutation(LOGIN_USER, {
    //     update(proxy, result) {
    //         console.log(result)
    //     },
    //     variables: values
    // })
    
    const onChange = (event) => {
        serValue({...values, [event.target.name]: event.target.value})        
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

const LOGIN_USER = gql `
    mutation createUser(
        $name: String!
        $email: String!
        $password: String!
    ){
        id name 
    }
`
export default Login
