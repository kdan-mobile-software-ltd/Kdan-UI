import React from 'react';

import Typography from '@kdanmobile/kdan-ui/dist/Typography';
import Button from '@kdanmobile/kdan-ui/dist/Button';
import Navbar from '@kdanmobile/kdan-ui/dist/Navbar';
import Logo from '@kdanmobile/kdan-ui/dist/Logo';
import Checkbox from '@kdanmobile/kdan-ui/dist/Checkbox';
import Box from '@kdanmobile/kdan-ui/dist/Box';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar brand={<Logo variant="combine" />} isFixed>
        <Button>Click</Button>
      </Navbar>
      <header className="App-header">
        <Logo variant="pdf-reader" />
        <Typography variant="h1">123</Typography>
        <Box m={2}>
          <Checkbox label="text" value="123" />
        </Box>
      </header>
    </div>
  );
};

export default App;
