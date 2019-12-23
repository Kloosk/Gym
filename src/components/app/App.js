import React from 'react';
import Nav from  '../nav/Nav'
import styled,{createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 30px;
      height: 20px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #A2D64E;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #A2D64E;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #A2D64E;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
    }
`;
const Container = styled.div`

`;
function App() {
  return (
          <Container>
              <GlobalStyle/>
              <Nav/>
          </Container>
  );
}

export default App;
