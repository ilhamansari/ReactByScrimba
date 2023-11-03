import React from "react"
import './App.css'
import jokesData from "./jokesData.jsx";
import Joke from "./jokes.jsx";

function App(props) {
  return (
    <>
    {jokesData.map((joke) => {
        return <Joke setup = {joke.setup} punchline = {joke.punchline}/>
      })}
    </>
  )
}

export default App
