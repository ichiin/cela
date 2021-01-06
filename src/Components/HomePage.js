import React from 'react'
import '../Style/HomePage.css'
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div id={"pageBackgroundImage"}>
            <div id={"blackOverlay"}>
                <h1>Learning Agreement Generating Form</h1>
                <h2>Fill out your information and the courses you wish to take to generate an Erasmus Learning agreement</h2>
                <div id={"buttonStartHolder"}>
                    <Link to={'/userForm'}>
                        <button id={"buttonStart"}>Get Started !</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
