import { arrCard } from './helpers.js'
import { gameLavel, getRender } from './main.js'
const conteinerElement = document.querySelector('.app-game')

let arrCardLevel = []
export function getRenderCard() {
    let counterCard = 0

    let cardRandom = arrCard.sort(() => Math.random() - 0.5)
    console.log(cardRandom)
    if (gameLavel === 'easy') {
        counterCard = 3
    }
    if (gameLavel === 'medium') {
        counterCard = 6
    }
    if (gameLavel === 'hard') {
        counterCard = 9
    }

    for (let i = 0; i < counterCard; i++) {
        arrCardLevel.push(cardRandom[i])
        // console.log(arrCardLevel)
    }
    // console.log(arrCardLevel)
    arrCardLevel = arrCardLevel.concat(arrCardLevel)
    arrCardLevel.sort(() => Math.random() - 0.5)

    const htmlCards = arrCardLevel
        .map((card) => {
            return `<div class="box-card">
            <img class="card" src="${card.img}" alt="card"></img>
                    <img class="cardShirt" src="./static/Shirt/card-shirt.png" alt="card"></img>
                    </div>`
        })
        .join('')
    const conteinerCards = document.querySelector('.app-card')
    conteinerCards.insertAdjacentHTML('afterbegin', htmlCards)
    const cardShirtElements = document.querySelectorAll('.cardShirt')

    for (const cardElement of cardShirtElements) {
        cardElement.classList.add('hiden')
    }

    const startOverElement = document.querySelector('.start-over')
    console.log(startOverElement)
    startOverElement.addEventListener('click', getRender)
}
export let timerId
let counterGame
export let time = 0
export function getRenderLevel() {
    const levelHtml = ` <div class="navi center-card">
        <div class="time">
            <div class="report">
                <p class="minuts">min</p>
                <p class="seconds">sek</p>
            </div>
            <div id="timerId" class="counter">00.00</div>
        </div>
        <button class="start-over">Начать заново</button>
    </div>
    <div class="app-card center-card"> </div>
    `

    conteinerElement.innerHTML = levelHtml

    counterGame = document.getElementById('timerId')
    console.log(counterGame)

    timerId = setInterval(() => {
        let minuts = Math.floor(time / 60)
        minuts = minuts < 10 ? '0' + minuts : minuts
        let second = time % 60
        second = second < 10 ? '0' + second : second
        counterGame.textContent = `${minuts}.${second}`
        time++
    }, 1000)

    // function startTimeGame() {
    //     let minuts = Math.floor(time / 60)
    //     minuts = minuts < 10 ? '0' + minuts : minuts
    //     let second = time % 60
    //     second = second < 10 ? '0' + second : second
    //     counterGame.textContent = `${minuts}.${second}`
    //     time++
    // }
    // setInterval(startTimeGame, 1000)
}
// const counterElement = document.querySelector('.counter')
// console.log(counterGame)
// const cardA = document.querySelectorAll('.card')
// console.log(cardA)
