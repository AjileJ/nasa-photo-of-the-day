import React from "react";

const NasaCard = props => {
  return (
    <div className="planets" key={1}>
      <div className = "titleandex">
      <p className = "title"><span>Title: </span>{props.title}</p>
      <p className = "explanation"><span>Explanation: </span>{props.explanation}</p>
      </div>
      <img className="imgg" src={props.hdurl} alt="spaceimg"/>
      <div className="datecopy">
      <p><span className = "copyright">Date: </span>{props.date}</p>
      <p><span className = "copyright">CopyRight: </span>{props.copyright}</p>
      </div>
    </div>
  );
};

export default NasaCard;


























