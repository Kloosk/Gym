import React from 'react';
import Nav from  '../nav/Nav'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
`;
function App() {
  return (
      <div>
          <GlobalStyle/>
          <Nav/>
      </div>
  );
}

export default App;
