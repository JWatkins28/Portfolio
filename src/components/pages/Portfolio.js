import React from 'react';
import ProjectCards from '../pieces/ProjectCards'
import busybee from '../../static/imgs/busybee.png'
import movielib from '../../static/imgs/themovielibrary.PNG'
import jsquiz from '../../static/imgs/javascriptquiz.PNG'
import weather from '../../static/imgs/weatherdashboard.PNG'
import techblog from '../../static/imgs/techblog.PNG'
import ghostbusters from '../../static/imgs/Ghostbusters.PNG'

export default function Portfolio() {

    const projects = [
        {
            name: 'GhostBusters',
            description: "A dating app designed to help you find the perfect date. You can read reviews left by other users and once you match with someone you can leave a review after your date. Find your dream date today!",
            img: ghostbusters,
            github: 'https://github.com/aberger3647/cache-me-outside',
            deployed: 'https://agile-peak-65135.herokuapp.com/'
        },
        {
            name: 'Busy Bee',
            description: "A task tracking application that let's you create a profile and set your own goals. When you close tasks you gain points called 'Honey' and earn badges on your profile. This app was created using Handlebars, Express, MySQL, Sequelize and JavaScript",
            img: busybee,
            github: 'https://github.com/JWatkins28/busy-bee',
            deployed: 'https://lit-beach-45684.herokuapp.com/'
        },
        {
            name: 'Tech Blog',
            description: "A tech blog where users can create a profile, create posts and leave comments on other's posts. You can view your 'Dashboard' which will show a collection of all of your posts in one place. This app was created using Handlebars, Express, MySQL, Sequelize and JavaScript" ,
            img: techblog,
            github: 'https://github.com/JWatkins28/tech-blog',
            deployed: 'https://pacific-oasis-95450.herokuapp.com/'
        },
        {
            name: 'The Movie Library',
            description: "A movie search engine that let's you search for movies and save them to your library. This uses the IMDB API to get the movie data. This app was created using JQuery, Tailwind for styling and JavaScript",
            img: movielib,
            github: 'https://github.com/JWatkins28/The-Movie-Library',
            deployed: 'https://jwatkins28.github.io/The-Movie-Library/'
        },
        {
            name: 'Javascript Quiz',
            description: 'A simple javascript quiz to test your knowledge of basic JavaScript. You can track your score on a high score list at the end of the quiz. This app was made with vanilla JavaScript and vanilla CSS for styling',
            img: jsquiz,
            github: 'https://github.com/JWatkins28/javascript-quiz',
            deployed: 'https://jwatkins28.github.io/Javascript-Quiz/'
        },
        {
            name: 'Weather Dashboard',
            description: 'A weather dashboard app that shows the 5-day forecast for any city you search for. It also shows a history of your recently searched cities. This app was created using the OpenWeatherMap API, JQuery and vanilla CSS for styling.',
            img: weather,
            github: 'https://github.com/JWatkins28/weather-dashboard',
            deployed: 'https://jwatkins28.github.io/Weather-Dashboard/'
        },



    ]

    return (
        <div className="max-h-full">
            <div className="my-10 grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-3">
                {projects.map(data => (
                    <ProjectCards name={data.name} description={data.description} img={data.img} github={data.github} deployed={data.deployed} key={data.name} />
                ))}
            </div>
        </div>
    )
}
