import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";


export default function NasaGrid(){
   const [infos, setInfos] =useState("");



  useEffect(()=> {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=wSY6t0BBf6J5XGWjyzPiccqycatsnqZ5etwsQDv7`)
    .then(response => {
      const infos = response.data;
      console.log(response.data);
      setInfos(infos);
    })
    .catch(error => {
     console.log("there is an error with axios", error);
    });
  },[]);
  return(
    <NasaCard 
    title={infos.title}
    date={infos.date}
    explanation={infos.explanation}
    hdurl={infos.hdurl}
    copyright={infos.copyright}
    />
  )
}