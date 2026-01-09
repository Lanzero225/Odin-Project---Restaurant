import "./styles.css";
import { menu, buildMenu } from "./menu.js";
import odinImage from "./odin.png";

   

document.addEventListener('DOMContentLoaded', () => {

});

document.getElementById("home-button").onclick = loadHome;
document.getElementById("menu-button").onclick = loadMenu;
document.getElementById("contact-button").onclick = loadContact;

function clearContent(){
    const mainDiv = document.getElementById("content");
    mainDiv.innerHTML="";
}

function loadHome(){
    clearContent();
}


function loadMenu(){
    clearContent();
    const mainDiv = document.getElementById("content");
    buildMenu(mainDiv);
}



function loadContact(){
    clearContent();
}