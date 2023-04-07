import React from 'react';
import me from '../../static/imgs/me.JPEG'

export default function About() {

    return (
        <div className="bg-white rounded-lg drop-shadow-lg pt-2 min-h-fit h-3/4 w-3/4 min-w-275 flex">
            <div className="w-1/2 items-center justify-center flex">
                <img src={me} alt="Me" className="h-3/4" />
            </div>
            <div className="w-1/2 flex flex-col m-5 items-center justify-center">
                <h2 className="pb-10 text-4xl">Justin Watkins</h2>
                <p>I am an aspiring full-stack developer with over 8 years of experience in the tech field. I'm currently enrolled in a bootcamp through The University of Texas and hope to soon transition from my current field of IT to a role as a developer. With a passion for problem solving and tinkering I hope to continue to grow my coding skills and take my career to the next level.</p>
            </div>
        </div>
    )
}
 