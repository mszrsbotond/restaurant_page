export function loadAbout() {
    let aboutPage = document.createElement("div")

    let aboutTitle = document.createElement("h1")
    aboutTitle.textContent = "About"

    let aboutText = document.createElement("p")
    aboutText.innerHTML = `
    <b>About Caesar's Feast</b><br>

At Caesar's Feast, we bring the grandeur of Roman dining to life. Inspired by the opulent banquets of Julius Caesar's time,<br> our dishes are based on authentic Roman recipes and ingredients once savored by emperors and senators alike.

Our chefs blend tradition<br> with artistry, crafting meals that honor history while satisfying the modern palate. From our mosaic floors to the carved busts of Caesar <br> and Cicero, every detail reflects our passion for Roman culture. <br>
<br>
<b>Opening Hours:</b> <br>
Monday - Sunday: 12:00 PM - 10:00 PM <br>
<br>
<b>Location:</b> <br>
Imperial Street 44, Roma Nova District`

    aboutPage.appendChild(aboutTitle)
    aboutPage.appendChild(aboutText)

    return aboutPage
}