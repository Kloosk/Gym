import React from 'react';
import Home from "../home/Home";
import Register from "../reg/Register";
import Login from "../login/Login";
import styled,{createGlobalStyle} from 'styled-components';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 20px;
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
            <Router>
                <GlobalStyle/>
                  <Container>
                     <Route exact path="/" component={Home}/>
                     <Route path="/login" component={Login}/>
                     <Route path="/reg" component={Register}/>
                  </Container>
            </Router>
  );
}

export default App;
