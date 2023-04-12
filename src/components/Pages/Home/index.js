import React from "react";
import Hero from "../../Hero";
import Button from "../../Button";
import "./style.css";

function Home () {
    return (
        <>
        <div className="home">
    <Hero />
    <Button text="Proust-Trotter" />
    <br />
    <Button text="Proust-In-Loo"/>
    <br />
    <Button text="Character Finder"/>
    </div>
    </>
    )
}

export default Home;