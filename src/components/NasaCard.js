import React from "react";

const NasaCard = props => {
  return (
    <div className="planets" key={1}>
      <div className = "titleandex">
      <p><span>Title: </span>{props.title}</p>
      <p><span>Explanation: </span>{props.explanation}</p>
      </div>
      <img className="imgg" src={props.hdurl} alt="spaceimg"/>
      <p><span className = "copyright">Date: </span>{props.date}</p>
      <p><span className = "copyright">CopyRight: </span>{props.copyright}</p>
    </div>
  );
};

export default NasaCard;


























