import { arrCard } from './helpers.js'

const conteinerElement = document.querySelector('.app-game')

export function getRenderCard() {
    const htmlCards = arrCard
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
