import React from "react"
import Group77 from "../assets/Group 77.png"

export default function hero() {
    return(
        <section className="hero">
        <img src={Group77} className="hero-photo"/>
        <h1 className="hero-heading">Online Expereineces</h1>
        <p className="hero-text">Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}