import React, { useState } from "react";
// import Typed from "react-typed";
import API from "../utils/Api";
import WineCard from "./WineCard/WineCard";
import "../styles/Mood.css"

const Mood = () => {
    const [wines, setWines] = useState([]);
    const selectWineByMood = async (mood) => {
        const response = await API.search(`?mood=${mood}`)
        setWines(response.data)
    }
    return (
        <div className="header-wrapper">
            { wines.length
                ? <div>
                    {wines.map(wine => (
                        <WineCard name={wine.name} img={wine.img} key={wine.id}/>
                     ) )} 
                    <button id="btn-mood" className="btn-mood" onClick={ () => setWines([])}>Choose a new mood</button> 
                </div>
                :
                <div className="main-info">
                  <div id="btnGroup">
                    <button id="btn-mood" className="btn-mood" onClick={ () => selectWineByMood('relax')}>Relax</button> 
                    <button id="btn-mood" className="btn-mood" onClick={ () => selectWineByMood('sexy')}>Sexy</button> 
                    <button id="btn-mood" className="btn-mood" onClick={ () => selectWineByMood('stressed')}>Stress</button> 
                    <button id="btn-mood" className="btn-mood" onClick={ () => selectWineByMood('happy')}>Happy</button> 
                  </div>
                </div>
            }
        </div>
    )
}

export default Mood;

