import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import useAuth from "../useAuth";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogle(location, navigate);
  };
  return (
    <div>
      <Container
        style={{
          marginTop: 40,
          border: "3px solid #900C3F",
          width: 256,

          borderRadius: 10,
          height: 54,
        }}
      >
        <ButtonGroup size="lg">
          <FaGoogle
            style={{
              width: 30,
              marginTop: 10,
              marginRight: 22,
              height: 30,
              color: "#183DF3",
            }}
          ></FaGoogle>
          <Button
            style={{ width: 188, fontWeight: 700 }}
            onClick={handleGoogleSignIn}
          >
            Sign-In-Google
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Login;
