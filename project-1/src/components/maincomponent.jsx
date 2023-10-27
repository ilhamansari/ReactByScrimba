import { ToggleDefault } from "awesome-react-toggles"
import React from "react"

export default function maincomponent(){
    return(
        <main>
        <h1 className="main-title">Fun facts about React</h1>
      <ul className="main-facts">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well oover 100K stars on github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps , including mobile apps</li>
      </ul>
      <ToggleDefault bgColorChecked="red"/>
        </main>
    )
}