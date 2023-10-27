import React from "react"

function perks(){
    return(
        <>
        <header>
        <nav className="nav">
        <img src='./src/assets/reactlogo.png' className="nav-logo"></img>
        <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        </nav>
        </header>
        <h1>Resons I'm excited to learn React</h1>
        <ol>
            <li>It's a popular library so I will be able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer if I know react</li>
        </ol>
        <footer>
        <p>© 2023 Ansari development. All rights reserved.</p>
        </footer>
        </>
    )
}

export default perks