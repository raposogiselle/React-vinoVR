import React from "react";
import "../styles/About.css"
import BGgeneral from '../images/BGgeneral.png'; // Tell webpack this JS file uses this image


function About() {
  return (
    <div style={{backgroundImage:"url("+{BGgeneral}+")"}}>
      <h1>About Us</h1>
      <div className ="card">
      <img src="" alt="" style={{width: "100%"}}/>
        <div className ="container">
          <h4><b>Luis Apuango</b></h4>
          <p>Gkfhfh kffhhr ejrhfufu fhffh hufeyueow</p>
        </div>
     </div>
    </div> 
  )
}
 
export default About;