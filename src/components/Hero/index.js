import React from "react";
import "./style.css";
import moustache from "./moustache-transparent.png";
// import moustacheWhite from "./moustache-white.png";


function Hero() {
    return (
        <>
         <div className="image-container">
        <img src={moustache} className="black" alt="Logo"/>
        {/* <img src={moustacheWhite} className="white" alt="Logo-white"/> */}
        </div>
        </>
    )
}

export default Hero;