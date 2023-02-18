import React from 'react';
import ProjectCards from '../pieces/ProjectCards'
import busybee from '../../static/imgs/busybee.png'
import movielib from '../../static/imgs/themovielibrary.PNG'
import jsquiz from '../../static/imgs/javascriptquiz.PNG'
import weather from '../../static/imgs/weatherdashboard.PNG'
import techblog from '../../static/imgs/techblog.PNG'
import scheduler from '../../static/imgs/scheduler.PNG'

export default function Portfolio() {

    const projects = [
        {
            name: 'Busy Bee',
            description: 'Enter Something Here',
            img: busybee,
            github: 'https://github.com/JWatkins28/busy-bee',
            deployed: 'https://lit-beach-45684.herokuapp.com/'
        },
        {
            name: 'Tech Blog',
            description: 'Enter Something Here',
            img: techblog,
            github: 'https://github.com/JWatkins28/tech-blog',
            deployed: 'https://pacific-oasis-95450.herokuapp.com/'
        },
        {
            name: 'The Movie Library',
            description: 'Enter Something Here',
            img: movielib,
            github: 'https://github.com/JWatkins28/The-Movie-Library',
            deployed: 'https://jwatkins28.github.io/The-Movie-Library/'
        },
        {
            name: 'Javascript Quiz',
            description: 'Enter Something Here',
            img: jsquiz,
            github: 'https://github.com/JWatkins28/javascript-quiz',
            deployed: 'https://jwatkins28.github.io/Javascript-Quiz/'
        },
        {
            name: 'Weather Dashboard',
            description: 'Enter Something Here',
            img: weather,
            github: 'https://github.com/JWatkins28/weather-dashboard',
            deployed: 'https://jwatkins28.github.io/Weather-Dashboard/'
        },
        {
            name: 'Work Day Scheduler',
            description: 'Enter Something Here',
            img: scheduler,
            github: 'https://github.com/JWatkins28/work-day-scheduler',
            deployed: 'https://jwatkins28.github.io/Work-Day-Scheduler/'
        }


    ]

    return (
        <div className="max-h-full">
            <div class="my-10 grid grid-cols-3 grid-flow-row gap-3">
                {projects.map(data => (
                    <ProjectCards name={data.name} description={data.description} img={data.img} github={data.github} deployed={data.deployed} />
                ))}

            </div>
        </div>
    )
}
