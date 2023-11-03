import React from "react"
import Airbnblogo from "../assets/Airbnb_Logo.png"

export default function navbar() {
    return(
        <nav>
        <img src={Airbnblogo} className="nav-logo"/>
        </nav>
    )
}