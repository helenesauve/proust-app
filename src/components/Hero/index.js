import React from "react";
import "./style.css";
import moustache from "./moustache-small.png";


function Hero() {
    return (
        <>
         <div className="image-container">
        <img src={moustache} alt="Logo"/>
        </div>
        </>
    )
}

export default Hero;