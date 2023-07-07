import React from "react"
import Buttons from "./Buttons"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function Info() {
    return (
        <div>
            <img src="../images/head-shot" alt="head-shot"  className="head-shot"/>
            <h2 className="name">Khanittha Krajangjaem</h2>
            <p className="role">Full Stack Developer</p>
            <p className="website">khanittha.website</p>
            <Buttons />
            <div className="detail-container">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}