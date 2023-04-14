import React from "react";
import Hero from "../../Hero";
import Button from "../../Button";
import "./style.css";
import { Link } from 'react-router-dom';



function Home () {
    return (
        <>
        <div className="home">
    <Hero />
    <Link to="/Trotter">
    <Button text="Proust-Trotter" />
    </Link>
    <br />
    <Button text="Proust-In-Loo"/>
    <br />
    <Button text="Character Finder"/>
    </div>
    </>
    )
}

export default Home;