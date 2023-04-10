import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Nav from "./Nav";

function Projects(){
    useEffect(() => {
        // Wrap every letter in a span
         let textWrapper = document.querySelector('.ml14 .letters');
         textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
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
                    <span className="letters">My Work</span>
                </span>
            </h1>

            <div className="container" style={{marginTop:'30px'}}>
                <div className="row">
                    <div className="col">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">HairSalon</h5>
                                <p className="card-text">Hairsalon SPA Landing Page is a beautiful website built with React</p>
                            </div>
                            <div className="card-body">
                                <a href="https://lucas-marques-web.github.io/hair-Salon/" className="card-link" >Live-Demo</a>
                                <a href="https://github.com/Lucas-marques-web/hair-Salon" className="card-link">Git Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Notes.io</h5>
                                <p className="card-text">This is an awesome notepad application built with React and Bootstrap</p>
                            </div>
                            <div className="card-body">
                                <a href="https://lucas-marques-web.github.io/Notes.io/" className="card-link" >Live-Demo</a>
                                <a href="https://github.com/Lucas-marques-web/Notes.io" className="card-link">Git Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">LoginPage</h5>
                                <p className="card-text">This is a beatiful login page built with js, html and css</p>
                            </div>
                            <div className="card-body">
                                <a href="https://lucas-marques-web.github.io/Login-Registration-page/" className="card-link" >Live-Demo</a>
                                <a href="https://github.com/Lucas-marques-web/Login-Registration-page" className="card-link">Git Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a className="see-more" href="https://github.com/Lucas-marques-web?tab=repositories">See More</a>       
            <div className='projects-nav'>
                <Nav  />
            </div> 
        </div>
    )
}

export default Projects;