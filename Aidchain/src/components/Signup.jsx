import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import signupImage from "../assets/login.png"; // Import the signup image
import { signInWithGoogle } from '../firebase'; // Import the Google Sign-In function

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${signupImage}) no-repeat center center/cover; /* Set the background image */
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

const Signup = ({ setIsAuthenticated }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Example validation (replace with actual signup logic)
    if (name && email && password) {
      try {
        // Implement actual signup logic here (e.g., using Firebase Auth)
        setError('');
        setIsAuthenticated(true); // Set authentication status to true
        navigate('/dashboard'); // Redirect to Dashboard after successful signup
      } catch (error) {
        setError('Failed to sign up');
      }
    } else {
      setError('Please fill out all fields');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      setIsAuthenticated(true); // Set authentication status to true
      navigate('/dashboard'); // Redirect to Dashboard after successful Google Sign-Up
    } catch (error) {
      setError('Failed to sign up with Google');
    }
  };

  return (
    <Container>
      <Card>
        <Title>Sign Up</Title>
        <form onSubmit={handleSignup}>
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Password" required />
          <Button type="submit">Sign Up</Button>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <GoogleButton onClick={handleGoogleSignup}>Sign up with Google</GoogleButton>
        <SwitchText>
          Already have an account? <Link to="/login"><span>Login</span></Link>
        </SwitchText>
      </Card>
    </Container>
  );
};

export default Signup;
