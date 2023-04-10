import React, { useEffect } from "react";
import meImg from './assets/me.png'
import anime from "animejs/lib/anime.es.js";

function Img(){
    useEffect(() => {
        //circle img animation  
        const element1 = document.querySelector(".box1");
        anime({
        targets: element1,
        translateY: [0,20],
        direction: 'alternate',
        loop: true,
        duration:3000,
        easing: 'linear'
        });
    })

    return(
        <img className="box1" src={meImg} alt="meImg"></img>
    )
}

export default Img;