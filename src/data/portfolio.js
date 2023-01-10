import React from 'react'

import portfolio1 from "../images/portfolio/local-weather-app.jpg"
import portfolio2 from "../images/portfolio/visual-studio-code.jpeg"
import portfolio3 from "../images/portfolio/personal-portfolio.jpg"
import portfolio4 from "../images/portfolio/react.jpg"
import project1 from "../images/project/personal-portfolio/about.jpg"
import project2 from "../images/project/personal-portfolio/contact.jpg"
import project3 from "../images/project/personal-portfolio/home.jpg"
import project4 from "../images/project/personal-portfolio/portfolio.jpg"
import project5 from "../images/project/personal-portfolio/reviews.jpg"
import project6 from "../images/project/personal-portfolio/services.jpg"



const projects = [
    {
        id: 1,
        image: portfolio1,
        project_images: [
            '/images/project/local-weather-app/local-weather-app/local-weather-app.jpg',
            '/images/project/local-weather-app/local-weather-app/local-weather-app.jpg',
            '/images/project/local-weather-app/local-weather-app/local-weather-app.jpg',
            '/images/project/local-weather-app/local-weather-app/local-weather-app.jpg',
            '/images/project/local-weather-app/local-weather-app/local-weather-app.jpg',
            '/images/project/local-weather-app/local-weather-app/local-weather-app.jpg'
        ],
        title: 'Local Weather Application',
        web_technologies: 'HTML, SASS and JavaScript',
        development_time: '160 Hours',
        client: 'FreeCodeCamp',
        price: 'Not applicable',
        date: '26th October 2022',
        highlight_features:
            <ul>
                <li>Responsive web design</li>
                <li>Animations</li>
                <li>Modern design</li>
                <li>Smooth transition effects</li>
                <li>Sticky navigation</li>
                <li>Mobile Navigation</li>
                <li>Scroll To Top</li>
            </ul>,
        download: 'insert netlify link'
    },
    {
        id: 2,
        image: portfolio2,
        project_images: [
            '/images/local-weather-app/local-weather-app.jpg',
            '/images/local-weather-app/local-weather-app.jpg',
            '/images/local-weather-app/local-weather-app.jpg',
            '/images/local-weather-app/local-weather-app.jpg',
            '/images/local-weather-app/local-weather-app.jpg',
            '/images/local-weather-app/local-weather-app.jpg'
        ],
        title: 'Weather Application',
        web_technologies: 'React CSS (CSS Modules) and React JS',
        development_time: '160 Hours',
        client: 'FreeCodeCamp',
        price: 'Not applicable',
        date: '26th October 2022',
        highlight_features:
            <ul>
                <li>Responsive web design</li>
                <li>Animations</li>
                <li>Modern design</li>
                <li>Smooth transition effects</li>
                <li>Sticky navigation</li>
                <li>Mobile Navigation</li>
                <li>Scroll To Top</li>
            </ul>,
        download: 'insert netlify link'
    },
    {
        id: 3,
        image: portfolio3,
        project_images: [project1, project2, project3, project4, project5, project6],
        title: 'Portfolio Website',
        web_technologies: 'React SASS and React JS',
        development_time: '160 Hours',
        client: 'PF',
        price: 'Not applicable',
        date: '26th October 2022',
        highlight_features:
            <ul>
                <li>Responsive web design</li>
                <li>Animations</li>
                <li>Modern design</li>
                <li>Smooth transition effects</li>
                <li>Sticky navigation</li>
                <li>Mobile Navigation</li>
            </ul>,
        download: 'insert netlify link'
    },
    {
        id: 4,
        image: portfolio4,
        project_images: [
            '/images/local-weather-app/local-weather-app.jpg',
            '/images/local-weather-app/local-weather-app.jpg',
            '/images/local-weather-app/local-weather-app.jpg'
        ],
        title: 'React Projects',
        web_technologies: 'React CSS and React JS',
        development_time: '160 Hours',
        client: 'FreeCodeCamp',
        price: 'Not applicable',
        date: '26th October 2022',
        highlight_features:
            <ul>
                <li>Responsive web design</li>
                <li>Animations</li>
                <li>Modern design</li>
                <li>Smooth transition effects</li>
                <li>Sticky navigation</li>
                <li>Mobile Navigation</li>
                <li>Scroll To Top</li>
            </ul>,
        download: 'insert netlify link'
    },
];

export default projects;





