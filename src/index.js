import "./style.css"
import {loadHome} from "./home.js"

const content = document.querySelector("#content")

// add the buttons
const homeButton = document.querySelector("#home")


homeButton.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(loadHome())
})