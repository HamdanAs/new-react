import { Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../../services/AuthService";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    if (username !== "" && password !== "") {
      AuthService.login(username, password).then(
        () => {
          history.push("/dashboard");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container className="mt-5 p-3 bg-light w-50">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 ">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={usernameChange}
            value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={passwordChange}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
