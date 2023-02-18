import React, { useState } from 'react';
import { GrLinkedin, GrTwitter, GrGithub } from 'react-icons/gr'

export default function Footer() {

    return (
        <div className="relative bottom-0 px-2 h-12 w-full mx-auto bg-black text-white">
            <div className="relative h-full flex items-center justify-around mx-64">
                <a href="https://github.com/JWatkins28" target="_blank">
                <GrGithub />
                </a>
                <a href="https://github.com/JWatkins28" target="_blank">
                <GrLinkedin />
                </a>
                <a href="https://github.com/JWatkins28" target="_blank">
                <GrTwitter />
                </a>
            </div>
        </div>
    )
}