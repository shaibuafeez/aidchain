import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from "../assets/login.png";
import { signInWithGoogle } from '../firebase'; // Import the Google Sign-In function

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${loginImage}) no-repeat center center/cover;
  color: #ffffff;
`;

const Card = styled.div`
  background: #112d4e;
  border-radius: 10px;
  padding: 40px;
  width: 400px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #f9f7f7;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: #3f72af;
  color: #f9f7f7;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f9f7f7;
  color: #112d4e;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dbe2ef;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
  }
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  margin-top: 15px;
`;

const SwitchText = styled.p`
  margin-top: 20px;
  color: #dbe2ef;

  span {
    color: #f9f7f7;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Login = ({ setIsAuthenticated }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Example validation (replace with actual logic)
    if (email === 'test@example.com' && password === 'password') {
      setError('');
      setIsAuthenticated(true); // Set authentication status to true
      navigate('/dashboard'); // Redirect to Dashboard on successful login
    } else {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      setIsAuthenticated(true); // Set authentication status to true
      navigate('/dashboard'); // Redirect to Dashboard after successful Google Sign-In
    } catch (error) {
      setError('Failed to sign in with Google');
    }
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Password" required />
          <Button type="submit">Login</Button>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <GoogleButton onClick={handleGoogleLogin}>Sign in with Google</GoogleButton>
        <SwitchText>
          Don't have an account? <Link to="/signup"><span>Sign Up</span></Link>
        </SwitchText>
      </Card>
    </Container>
  );
};

export default Login;
