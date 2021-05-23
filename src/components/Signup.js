import React,{ useRef } from 'react'
import {Form, Button, Card } from 'react-bootstrap'

export const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>    
                </Card.Body>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label> 
                        <Form.Control type="email" ref={emailRef} required/> 
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group id="password">
                        <Form.Label>Confirm Password</Form.Label> 
                        <Form.Control type="password" ref={passwordRef} required /> 
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label> 
                        <Form.Control type="password" ref={passwordConfirmRef}  required/> 
                    </Form.Group>
                    <Button className="w100">Sign Up</Button>
                </Form>
            </Card>  
            <div className="w-100 text-center mt-2">
                Already Have an Account? Log In
            </div>
        </>
    )
}

export default Signup;