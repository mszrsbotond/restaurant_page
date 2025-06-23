import "./style.css"
import {loadHome} from "./home.js"
import { loadMenu } from "./menu.js"
import { loadAbout } from "./about.js"

const content = document.querySelector("#content")
content.appendChild(loadHome())

// add the buttons
const homeButton = document.querySelector("#home")

const menuButton = document.querySelector("#menu")

const aboutButton = document.querySelector("#about")

homeButton.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(loadHome())
    menuButton.style["background-color"]=""
    aboutButton.style["background-color"]=""
    homeButton.style["background-color"]="rgb(240, 216, 6)"
})

menuButton.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(loadMenu())
    homeButton.style["background-color"]=""
    aboutButton.style["background-color"]=""
    menuButton.style["background-color"]="rgb(240, 216, 6)"
})

aboutButton.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(loadAbout())
    menuButton.style["background-color"]=""
    homeButton.style["background-color"]=""
    aboutButton.style["background-color"]="rgb(240, 216, 6)"
})
