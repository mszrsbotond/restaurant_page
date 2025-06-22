import restaurantImg from "../images/restaurant.jpg"

export function loadHome() {
    // create a homepage div that stores everything, it will be returned in the end with all the elements inside
    let homePage = document.createElement("div")

    let homeCont = document.createElement("div")
    homeCont.classList.add("homeCont")

    let homeTitle = document.createElement("h1")
    homeTitle.textContent = "Welcome to Caesar's Feast"

    let homeDesc = document.createElement("h3")
    homeDesc.textContent = "Dine like an emperor. At Caesar's Feast, we invite you to experience the opulence and bold flavors of ancient Rome. Surrounded by marble columns, olive branches, and warm candlelight, every meal becomes a celebration of history and taste."

    homeCont.appendChild(homeTitle)
    homeCont.appendChild(homeDesc)


    let restaurantPic = document.createElement("img")
    restaurantPic.src = restaurantImg
    restaurantPic.style["width"] = "700px"
    restaurantPic.style["border-radius"] = "30px"

    homeCont.appendChild(restaurantPic)

    let mottoCont = document.createElement("div")
    mottoCont.classList.add("mottoCont")

    let mottoTitle = document.createElement("h2")
    mottoTitle.textContent = "“Veni, Vidi, Vixi”"

    let mottoDesc = document.createElement("h3")
    mottoDesc.textContent = "I came, I saw, I dined"

    mottoCont.appendChild(mottoTitle)
    mottoCont.appendChild(mottoDesc)

    homePage.appendChild(homeCont)
    homePage.appendChild(mottoCont)

    return homePage
}