"use strict";

const header = document.getElementById('welcome');
const navbar = document.getElementById('nav');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const container = document.querySelector('.container');
const img1 = document.getElementById('img1');

// window.requestAnimationFrame = window.requestAnimationFrame
// || function(f){setTimeout(f,1000/60)}

window.addEventListener('scroll',parallax);
// window.addEventListener('scroll',parallax2);

const background = document.querySelector('.mainbackground');

function parallax() {
    const maxblur = 20;
    let blur = maxblur*window.scrollY / window.innerHeight;
    if (blur > maxblur) {
        blur = maxblur;
    }
    background.style.backgroundPositionY = `${window.scrollY/3}px`;
    background.style.setProperty('filter',`blur(${blur}px)`);
    // background.style.setProperty('top',`${-maxblur-window.scrollY/5}px`);
    // const newtoptitle = 0.4*window.innerHeight + window.scrollY*0.6; 
    // const newtopsub = 0.4*window.innerHeight + window.scrollY*1.2; 
    // title.style.setProperty('top',`${newtoptitle}px`);
}

function parallax2() {
    console.log(window.scrollY);
    const pos = 200 - window.scrollY/5;
    // img1.style.backgroundPositionY = `${pos}px`;

}

function fontOpacity(item1, opacity, start) {
    item1.style.setProperty('opacity',`${opacity}`);
    opacity = (new Date().getTime() - start)/2000;
    if (opacity < 1) {
        setTimeout(function(){fontOpacity(item1, opacity, start)},30);
    }
}

function onPageLoad() {
    setTimeout(function(){fontOpacity(title,0,new Date().getTime())},500);
    setTimeout(function(){fontOpacity(subtitle,0,new Date().getTime())},2000);
}

onPageLoad();