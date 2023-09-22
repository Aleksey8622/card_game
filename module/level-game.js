import { gameLavel } from './main.js'
import { arrCard } from './helpers.js'

let arrCardLevel = []

const conteinerElement = document.querySelector('.app-game')

let counterCard = 0

let cardRandom = arrCard.sort(() => Math.random() - 0.5)

if (gameLavel === 'easy') {
    counterCard = 3
}
if (gameLavel === 'medium') {
    counterCard = 6
}
if (gameLavel === 'hard') {
    counterCard = 9
}

for (let i = 1; i < counterCard; i++) {
    arrCardLevel.push(cardRandom[i])
}

arrCardLevel = arrCardLevel.concat(arrCardLevel)
arrCardLevel.sort(() => Math.random() - 0.5)

export function getRenderCard() {
    const htmlCards = arrCardLevel
        .map((card) => {
            return `<img src="${card.img}" alt="card"></img>`
        })
        .join('')
    const conteinerCards = document.querySelector('.app-card')
    conteinerCards.insertAdjacentHTML('afterbegin', htmlCards)
}

export function getRenderLevel() {
    const levelHtml = ` <div class="navi center-card">
        <div class="time">
            <div class="report">
                <p class="minuts">min</p>
                <p class="seconds">sek</p>
            </div>
            <p class="counter">00.00</p>
        </div>
        <button class="start-over">Начать заново</button>
    </div>
    <div class="app-card center-card"> </div>
    `

    conteinerElement.innerHTML = levelHtml
}
