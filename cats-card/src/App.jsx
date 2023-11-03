import { useState } from 'react'
import './App.css'
import Contact from "./components/contacts.jsx";
import Cats1 from "./assets/cat1.jfif";
import Cats2 from "./assets/cat2.jfif";
import Cats3 from "./assets/cat3.jpg";
import Cats4 from "./assets/cat4.jpg";

function App() {

  return (
    <>
    <Contact
        img={Cats1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={Cats2}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={Cats3}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={Cats4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </>
  )
}

export default App
