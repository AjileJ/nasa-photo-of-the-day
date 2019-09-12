import React from "react";
import styled from "styled-components";

const Planets = styled.div`

`;
const TitleAndEx = styled.div`
background: #42c1d8;
`;
const Title = styled.p`

`;

const Explanation = styled.p`
 margin-left: 3%;
  margin-right:3%;
  font-size: 1.3rem;
`;

const Imgg = styled.img`
  height: 70vh;
   border-radius: 0%;
`;

const DateCopy = styled.div`
 background:#bb4630;
  padding: 1%;
`;

const CopyRight = styled.p`
font-size: 1.5rem;
`;

const CopySpan = styled.span`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
`;




const NasaCard = props => {
  return (
    <Planets key={1}>
      <TitleAndEx>
      <Title><span>Title: </span>{props.title}</Title>
      <Explanation><span>Explanation: </span>{props.explanation}</Explanation>
      </TitleAndEx>
      <Imgg src={props.hdurl} alt="spaceimg"/>
      <DateCopy>
      <CopyRight><span className = "copyright">Date: </span>{props.date}</CopyRight>
      <CopyRight><CopySpan>CopyRight: </CopySpan>{props.copyright}</CopyRight>
      </DateCopy>
    </Planets>
  );
};

export default NasaCard;


























