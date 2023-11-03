import React from "react"

import phonelogo from "../assets/phonelogo.png"
import email from "../assets/emaillogo.jpg"

export default function contact(props) {
    return(
        <div className="contacts">
        <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phonelogo}/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={email} />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}