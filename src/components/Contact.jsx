import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Nav from "./Nav";

function Contact(){

    const phone='(31)985478793';
    const linkedin ='https://www.linkedin.com/in/lucas-marques-b0047a206/';
    const email ='lp411301@gmail.com';
    const github ='https://github.com/Lucas-marques-web'

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
                    <span className="letters">Contact Me</span>
                </span>
            </h1>
            <div className="container-fluid contact-content">
                <ul>
                    <li>Lucas Marques</li>
                    <li>Email : {email}</li>
                    <li>Phone : {phone}</li>
                    <li><a href={linkedin}>Linkedin</a></li>
                    <li><a href={github}>Github</a></li>
                </ul>                
                
            </div>
            <div className='contact-nav'>
                <Nav />
            </div>
        </div>
    )
}

export default Contact;