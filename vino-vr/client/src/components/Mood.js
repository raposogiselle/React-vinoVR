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
                    <button className="btn-change-mood" onClick={ () => setWines([])}>Choose a new mood</button> 
                </div>
                :
                <div className="main-mood">
                    <button className="btn-mood btn-1" onClick={ () => selectWineByMood('relax')}>Relax</button> 
                    <button className="btn-mood btn-2" onClick={ () => selectWineByMood('sexy')}>Sexy</button> 
                    <button className="btn-mood btn-3" onClick={ () => selectWineByMood('stressed')}>Stress</button> 
                    <button className="btn-mood" onClick={ () => selectWineByMood('happy')}>Happy</button> 
                    {/* <p>
                        "Now, I don't know much about science, but I am fairly good a drinking wine and<br></br> I am even better at having emotions"
                    </p> */}
                </div>
            }
        </div>
    )
}

export default Mood;

