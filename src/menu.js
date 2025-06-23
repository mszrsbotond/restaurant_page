

export function loadMenu() {
    let menuPage = document.createElement("div")

    let menuTitle = document.createElement("h1")
    menuTitle.textContent = "Menu"

    let menuTable = document.createElement("div")

    menuTable.innerHTML = `
<table>
    <tr>
        <th colspan="2">Appetizers</th>
    </tr>
    <tr>
        <td>Patrician Platter - Marinated olives, Roman spiced cheese, roasted almonds</td>
        <td>39$</td>
    </tr>
    <tr>
        <td>Lentil & Barley Soup - A rustic starter with ancient grains and herbs</td>
        <td>32$</td>
    </tr>
    <tr>
        <td>Figs with Honey & Nuts - A sweet-salty delicacy straight from the Forum</td>
        <td>34$</td>
    </tr>
    <tr>
        <th colspan="2">Main Dishes</th>
    </tr>
    <tr>
        <td>Caesar's Roasted Boar - With honey glaze, herbs, and garum reduction</td>
        <td>54$</td>
    </tr>
    <tr>
        <td>Pulmentum - Creamy semolina porridge with sautéed mushrooms and herbs</td>
        <td>47$</td>
    </tr>
    <tr>
        <td>Triclinium Chicken - Slow-cooked with garlic, wine, and rosemary</td>
        <td>57$</td>
    </tr>
        <tr>
        <th colspan="2">Desserts</th>
    </tr>
    <tr>
        <td>Libum - Traditional Roman cheesecake with ricotta and bay leaf</td>
        <td>32$</td>
    </tr>
    <tr>
        <td>Spiced Pears in Red Wine - Poached with cloves and cinnamon</td>
        <td>37$</td>
    </tr>
    <tr>
        <th colspan="2">Drinks</th>
    </tr>
    <tr>
        <td>Mulsum - Sweet wine with wildflower honey</td>
        <td>14$</td>
    </tr>
    <tr>
        <td>Roman Lemonade - Lemon, mint, and fennel infusion</td>
        <td>23$</td>
    </tr>
        <td>Grapes & Laurel Juice - Refreshing, imperial-style</td>
        <td>17$</td>
    </tr>
</table>
    `

    menuPage.appendChild(menuTitle)
    menuPage.appendChild(menuTable)

    return menuPage
}