import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Nav from "./Nav";
import Img from "./Img";


function About(){
  
    //to make the animation work properly
    useEffect(() => {
       // Wrap every letter in a span
        let textWrapper = document.querySelector('.ml14 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // using anime.js library
        anime.timeline()
        .add({
            targets: '.ml14 .letter',
            opacity: [0,1],
            translateX: [40,0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "easeOutExpo",
            duration: 1500,
            offset: '-=600',
            delay: (1000)
        })
             
      });
    return(
        <div className="container div-body">
            <h1 className="ml14">
                <span className="text-wrapper">
                    <span className="letters">About Me</span>
                </span>
            </h1>
            
            <div className="container about-grid">
                <div className="row">
                    <div className="col">
                        <div className="container about-content">
                            <p>My name is Lucas Marques,<br></br>
                            I'm a Front-End Developer, in my way to become a full stack Developer, from MG - Brazil.<br></br>
                            I'm a very committed and creative person, that have developed some beautiful projects to learn and improve my skills.</p>
                            <p>My Goal is to become a Fullstack Developer.</p>
                        </div>
                    </div>
                    <div className="col">
                        <Img />
                        
                    </div>
                </div>
            </div>
            <div className="about-nav">
                <Nav className='about-nav' />
            </div>
        </div>
    )
}

export default About;