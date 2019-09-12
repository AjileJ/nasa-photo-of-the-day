import React from "react";
import NasaGrid from "./components/NasaGrid";
import styled from "styled-components";
import "./App.css";

const WrapperDiv = styled.div`
font-family: sans-serif;
text-align: center;
`;
const Redh1 = styled.h1`
color:red;
`;
const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src = "components/img/nasa.jpg"/>
        <a href="#">Home</a>
        <a href="#">Planets</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <NasaGrid />
      <Button type="danger">Next!</Button>
      <Button type="warning">warning!</Button>
      <Button type="primary">Normal!</Button>
      <WrapperDiv>
        <Redh1>Jordan's Styled Component</Redh1>
      </WrapperDiv>
    </div>
  );
}

export default App;
