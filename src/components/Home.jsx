import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import '../App.css'
import Nav from "./Nav";



function Home(){
            useEffect(() => {
            // Wrap every letter in a span
            let textWrapper = document.querySelector('.ml14 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
            // Wrap every letter in a span
            let textWrapper2 = document.querySelector('.ml15 .letters');
            textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
                
              anime.timeline({loop: true})
              .add({
                targets: '.ml14 .line',
                scaleX: [0,1],
                opacity: [0.5,1],
                easing: "easeInOutExpo",
                duration: 900
              }).add({
                targets: '.ml14 .letter',
                opacity: [0,1],
                translateX: [40,0],
                translateZ: 0,
                scaleX: [0.3, 1],
                easing: "easeOutExpo",
                duration: 800,
                offset: '-=600',
                delay: (el, i) => 150 + 25 * i
              }).add({
                targets: '.ml14',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
              });
              
              
              anime.timeline({loop: true})
              .add({
                targets: '.ml15 .line',
                scaleX: [0,1],
                opacity: [0.5,1],
                easing: "easeInOutExpo",
                duration: 900
              }).add({
                targets: '.ml15 .letter',
                opacity: [0,1],
                translateX: [40,0],
                translateZ: 0,
                scaleX: [0.3, 1],
                easing: "easeOutExpo",
                duration: 800,
                offset: '-=600',
                delay: (el, i) => 150 + 25 * i
              }).add({
                targets: '.ml15',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
              });
        
          });
        
          return (
            <div className='container div-body'>
              <h1 className="ml14">
                <span className="text-wrapper">
                  <span className="letters">Welcome to My</span>
                  <span className="line"></span>
                </span>
              </h1>
              <h1 className="ml15">
                <span className="text-wrapper">
                  <span className="letters">Portifolio</span>
                  <span className="line"></span>
                </span>
              </h1>
                <div className='home-nav'>
                    <Nav  />
                </div>
              </div>  
        
    )
}


export default Home;