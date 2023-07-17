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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username, email, password);
      const res = await axios.post(
        "http://localhost:8001/todos/register",
        { username, email, password }
      );
      if(res.data.status === 'ok') {
        alert('new user created!')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-4 p-4 form-container w-50">
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const loginStatus = useSelector(state=>state.login.isLoggedIn)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/todos/login", { username, password })
      console.log(res.data.user._id);
      sessionStorage.setItem('user_id', res.data.user._id);
      // dispatch(loginActions.setLoggedIn());
      console.log(loginStatus)
      navigate('/todos')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-4 p-4 form-container w-50">

      <Form onSubmit={handleSubmit}>
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
