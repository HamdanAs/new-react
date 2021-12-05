import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { midContainer } from "../styles/styles";
import { Login } from "./Auth/Login";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const handleLogin = (e) => {
    history.push("/login");
  };

  return (
    <div style={midContainer}>
      <div>
        <Image src="illust.png" width="400"></Image>

        <div>
          <h3 className="mt-3">Aplikasi Kasir</h3>
          <h5 className="mt-3">Silahkan login terlebih dahulu</h5>

          <Button as={Link} onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
