import React from 'react';
import me from '../../static/imgs/me.jpg'

export default function About() {

    return (
        <div className="bg-white rounded-lg drop-shadow-lg pt-2 min-h-fit h-3/4 w-3/4 min-w-275 flex">
            <div className="w-1/2 items-center justify-center flex">
                <img src={me} alt="Me" className="h-2/4" />
            </div>
            <div className="w-1/2 flex items-center justify-center">
                About Me
            </div>
        </div>
    )
}
