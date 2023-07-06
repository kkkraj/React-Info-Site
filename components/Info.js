import React from "react"
import Buttons from "../components/Buttons"
import About from "../components/About"
import Interests from "../components/Interests"
import Footer from "../components/Footer"

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