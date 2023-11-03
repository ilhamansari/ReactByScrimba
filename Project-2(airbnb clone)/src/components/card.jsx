import React from "react"

import Star from "../assets/Star 1.png"

export default function card(props) {
    return(
        <div  className="card">
        <img src={props.img} className="card-image"/>
        <div className="card-stats">
        <img src={Star} className="card-star"/>
        <span>{props.rating}</span>
        <span className="gray">({props.rating2}) .</span>
        <span className="gray">{props.country}</span>
        </div>
        <p>{props.paragraph}</p>
        <p> <b> {props.rate} </b> / person</p>
        </div>
    )
}
