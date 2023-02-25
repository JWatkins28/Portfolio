import React from 'react';
import { GrLinkedin, GrStackOverflow, GrGithub } from 'react-icons/gr'

export default function Footer() {

    return (
        <div className="relative bottom-0 px-2 h-12 w-full mx-auto bg-black text-white">
            <div className="relative h-full flex items-center justify-around mx-32 ">
                <a href="https://github.com/JWatkins28" target="_blank" rel="noreferrer">
                <GrGithub />
                </a>
                <a href="https://www.linkedin.com/in/justin-watkins-283a8a76/" target="_blank" rel="noreferrer">
                <GrLinkedin />
                </a>
                <a href="https://stackoverflow.com/users/21283931/justin-watkins" target="_blank" rel="noreferrer">
                <GrStackOverflow />
                </a>
            </div>
        </div>
    )
}