import React from 'react';
import { Header } from '../components/Header';
import runninman from "../img/runninman.jpg"


export function Alert() {
  return (
    <>
     
       <Header/>
      <body className = "alertmain">     
        <container className = "picbox">
         <input className = "gps" type="image" id="image" alt="Login"
          src={runninman}/>
        </container>
        <div className= "alerttxt">
          <h2>IF YOU ARE CURRENTLY ABOUT TO BE ARRESTED AND CANT REACH US PLEASE PRESS THE ABOVE BUTTON AND YOUR LOCATION
             WILL BE SENT TO US SO WE KNOW WHAT CITY YOU ARE BEING ARRESTED IN SO WE CAN INITIATE THE PAPERWORK TO GET YOU BONDED,
             STAND BY AND WE WILL SEE YOU SOON! </h2>
        </div>
      </body>
    </>


      
    
  );

}
