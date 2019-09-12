import React from "react";
import NasaGrid from "./components/NasaGrid";
import { Button } from 'reactstrap';
import styled from "styled-components";
import "./App.css";

const WrapperDiv = styled.div`
font-family: sans-serif;
text-align: center;
`;
const Redh1 = styled.h1`
color:red;
`

function App() {
  return (
    <div className="App">
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">Planets</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <NasaGrid />
      <Button color="danger">Next!</Button>
      <WrapperDiv>
        <Redh1>Jordans Styled Component</Redh1>
      </WrapperDiv>
    </div>
  );
}

export default App;
