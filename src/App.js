import logo from './logo.svg';
import './App.css';
import {useContext, useState} from 'react';
import SideNav from './components/SideNav';
import { ChakraProvider, Flex, Box, VStack, Heading, Text } from '@chakra-ui/react'
import {ThemeProvider} from './modules/themes/UseTheme';
function App() {
  const a = {value: 50};
  let [c, setC] = useState(1);
  console.log('re init with rend')
  const inc = () => {
    a.value += 10;
    console.log(a);
  }
  const increment = () => {
    console.log('execu')
    setC(v => v+1);
    // c += 2;
    console.log(c);
  }
  return (
    <ThemeProvider>
      {/* <ChakraProvider> */}
        <Flex h="100vh">
          {/* <Box w={200}>
            <VStack>
              <Heading size="md">Reddit</Heading>
              <Text>DashBoard</Text>
              <Text>Communities</Text>
            </VStack>
          </Box> */}
          <SideNav />
        </Flex>
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>Counter def: {a.value}</h3>
          <h4>Rendr main: {c}</h4>
          <button onClick={inc}>modify</button>
          <button onClick={increment}>render</button>
        </header> */}
        {/* </ChakraProvider> */}

    </ThemeProvider>

  );
}

export default App;
