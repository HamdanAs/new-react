import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { midContainer } from "../styles/styles";
import { Login } from "./Auth/Login";

const Home = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div style={midContainer}>
      <div>
        <Image src="illust.png" width="400"></Image>

        <div>
          <h3 className="mt-3">Aplikasi Kasir</h3>
          <h5 className="mt-3">Silahkan login terlebih dahulu</h5>

          <Button onClick={handleShow}>Login</Button>

          <Login show={show} handleClose={handleClose}></Login>
        </div>
      </div>
    </div>
  );
};

export default Home;
