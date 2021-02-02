import React from "react";

import Typography from "@kdanmobile/kdan-ui/dist/Typography";
import Button from "@kdanmobile/kdan-ui/dist/Button";
import Navbar from "@kdanmobile/kdan-ui/dist/Navbar";
import Logo from "@kdanmobile/kdan-ui/dist/Logo";
import Carousel from "@kdanmobile/kdan-ui/dist/Carousel";
import Box from "@kdanmobile/kdan-ui/dist/Box";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar brand={<Logo variant="combine" />} isFixed>
        <Button>Click</Button>
      </Navbar>
      <header className="App-header">
        <Typography variant="h1">123</Typography>
        <Box m={2}>
          <Carousel>
            {[
              <p key="1" style={{ width: "100px" }}>
                123
              </p>,
              <p key="2" style={{ width: "100px" }}>
                456
              </p>,
            ]}
          </Carousel>
        </Box>
      </header>
    </div>
  );
};

export default App;
