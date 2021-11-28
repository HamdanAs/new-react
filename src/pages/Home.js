import React from "react";
import { Button, Image } from "react-bootstrap";

import { Items } from ".";

const Home = () => {
  return (
    <div className="mt-5">
      <Image src="illust.png" width="400"></Image>

      <div>
        <h3 className="mt-3">Aplikasi Kasir</h3>
        <h5 className="mt-3">Silahkan login terlebih dahulu</h5>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Home;
