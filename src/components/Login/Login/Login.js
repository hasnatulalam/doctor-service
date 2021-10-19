import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hoocks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/services';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
 
    return (
        <div className="login-form">
        <div>
            <h2>Login</h2>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

  
  
</Form>
            <p className="text-primary"> new to call Doctor Website <Link to="/register">Create Account</Link></p>
            <div>-------or----------</div>
            <button
                className="btn btn-primary"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    </div>

    );
};

export default Login;