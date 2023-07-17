import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/login-slice";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/user/register", {
        username,
        email,
        password,
      });
      if (res.data.status !== "error") {
        alert("new user created!");
      } else {
        alert('use a unique username')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-4 p-4 form-container w-50">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="registerUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Group>
            <Form.Label className="mt-3">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:8001/user/login", { username, password })
      sessionStorage.setItem('user_id', res.data.user._id);
      sessionStorage.setItem('user_name', res.data.user.username);
      navigate('/todos')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-4 p-4 form-container w-50">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};

export const UserGetInForm = () => {
  const [btnState, setBtnState] = useState("login");
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <Button onClick={() => setBtnState("login")}>Login</Button>
        <Button onClick={() => setBtnState("register")}>Register</Button>
      </div>
      {btnState === "register" ? <RegisterForm /> : <LoginForm />}
    </Container>
  );
};
