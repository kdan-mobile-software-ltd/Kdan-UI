import React from "react";

import Typography from "@kdanmobile/kdan-ui/dist/Typography";
import Button from "@kdanmobile/kdan-ui/dist/Button";
import Navbar from "@kdanmobile/kdan-ui/dist/Navbar";
import Logo from "@kdanmobile/kdan-ui/dist/Logo";
import Select from "@kdanmobile/kdan-ui/dist/Select";
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
          <Select
            options={[
              { key: "1", value: "1" },
              { key: "2", value: "2" },
            ]}
          />
        </Box>
      </header>
    </div>
  );
};

export default App;
