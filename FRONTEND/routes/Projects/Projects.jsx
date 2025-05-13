// TODO TILES WITH PIC (PLACEHOLDER FOR NOW), TITLE, DESCRIPTION, GITHUB CODE LINK, LINK TO WEBSITE
// TODO Figure out how to link github code page to tiles projects

import React from 'react';
import Nav from '../../components/Nav/nav';
import Footer from "../../components/footer/footer";
import { IoLogoGithub } from "react-icons/io";

export default function Projects() {
    return(
<div className="Projects-body"> 
    <Nav/>


{/* byte back chat */}
<div className="proj-fin"> 
    <h1 className="proj-t"> Projects </h1>
    <h3 className="proj-desc"> Explore my portfolio of projects, showcasing innovative solutions, modern design, and technical expertise across front-end, back-end, and full-stack development. </h3>
</div>
<div className="row1"> 
    <div className="Project-tile">
        {/* first div is image */}
        <div className="project-image"> 
        <img  src="/placeholder/bytebackchat.jpeg" />
        </div>
        {/* second div is title  */}
        <div className="second-half"> 
        <h1 className="project-tile-name"> Byte Back Chat</h1>
        <p className="project-tile-desc"> A real-time chat app built with React, html,  JavaScript, CSS, node and MongoDB. Users can create and edit accounts, start chat rooms, and join existing ones for seamless group conversations.</p>
        {/* third div = links */}
        <div className="list-unit"> 
            <ul className="l-cont">
                <li className="L-1">
                <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > <IoLogoGithub/></a>
                </li>
                <li className="L-1"> 
                link
                </li>
            </ul>
        </div>
        </div>
    </div>
{/*                       */}
{/* south meadows library  */}
<div className="Project-tile">
        {/* first div is image */}
        <div className="project-image"> 
        <img  src="/south/library.jpeg" />
        </div>
        {/* second div is title  */}
        <div className="second-half"> 
        <h1 className="project-tile-name"> South Meadows Library</h1>
        <p className="project-tile-desc"> An online lending library built with React, html, JavaScript, SCSS, and MongoDB. Users can log in to borrow or lend books, games, and miscellaneous items through a personal or community library. Features include ISBN book search, item management (add/delete), and direct messaging for borrow requests </p>
        {/* third div = links */}
        <div className="list-unit"> 
            <ul className="l-cont">
                <li className="L-1">
                <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > <IoLogoGithub/></a>
                </li>
                <li className="L-1"> 
                link
                </li>
            </ul>
        </div>
        </div>
    </div>
    {/*  portfolio */}
    <div className="Project-tile">
        {/* first div is image */}
        <div className="project-image"> 
        <img  src="/placeholder/portfolio.jpeg" />
        </div>
        {/* second div is title  */}
        <div className="second-half"> 
        <h1 className="project-tile-name"> Biankas Portfolio</h1>
        <p className="project-tile-desc"> A portfolio website built with react using html, JavaScript, and scss. Here you can contact me, view my professional experience and work. </p>
        {/* third div = links */}
        <div className="list-unit"> 
            <ul className="l-cont">
                <li className="L-1">
                <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > <IoLogoGithub/></a>
                </li>
                <li className="L-1"> 
                link
                </li>
            </ul>
        </div>
        </div>
    </div>
    {/*  */}

    {/* Ronald's church */}
  <div className="Project-tile">
        {/* first div is image */}
        <div className="project-image"> 
        <img  src="/placeholder/welcome.jpeg" alt="church" />
        </div>
        {/* second div is title  */}
        <div className="second-half"> 
        <h1 className="project-tile-name"> Welcome Church</h1>
        <p className="project-tile-desc"> A modern, user-friendly church website built with React, HTML, SCSS, and JavaScript. Designed for accessibility and ease of use, it offers one-click Spanish translation, streamlined online giving, and simple direct contact with the church via email form.</p>
        {/* third div = links */}
        <div className="list-unit"> 
            <ul className="l-cont">
                <li className="L-1">
                <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > <IoLogoGithub/></a>
                </li>
                <li className="L-1"> 
                link
                </li>
            </ul>
        </div>
        </div>
    </div>
    {/*  */}

    {/*   guess the number*/}
    <div className="Project-tile">
        {/* first div is image */}
        <div className="project-image"> 
        <img  src="/placeholder/pink.jpg" alt="church" />
        </div>
        {/* second div is title  */}
        <div className="second-half"> 
        <h1 className="project-tile-name"> Guess the number </h1>
        <p className="project-tile-desc"> </p>
        {/* third div = links */}
        <div className="list-unit"> 
            <ul className="l-cont">
                <li className="L-1">
                <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > <IoLogoGithub/></a>
                </li>
                <li className="L-1"> 
                link
                </li>
            </ul>
        </div>
        </div>
    </div>
    {/*  */}
    {/* Jeopardy */}
    <div className="Project-tile">
        {/* first div is image */}
        <div className="project-image"> 
        <img  src="/placeholder/Jeaopardy.jpeg" alt="church" />
        </div>
        {/* second div is title  */}
        <div className="second-half"> 
        <h1 className="project-tile-name"> Jeopardy Game</h1>
        <p className="project-tile-desc"> Created a fun, interactive Jeopardy-style game using html, css and javascript. Players take turns selecting questions from various categories and earning points for correct answers. The game features a responsive design, dynamic score tracking, and smooth turn-based logic using vanilla JavaScript. </p>
        {/* third div = links */}
        <div className="list-unit"> 
            <ul className="l-cont">
                <li className="L-1">
                <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > <IoLogoGithub/></a>
                </li>
                <li className="L-1"> 
                link
                </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    {/*  */}
<Footer/>
</div>
    );
}