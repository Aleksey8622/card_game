import { arrCard } from './helpers'
import { gameLavel, getRender, countNumber, counterLost } from './main'
const conteinerElement = document.querySelector('.app-game') as HTMLElement
export let timerId: NodeJS.Timeout
export let totalTime: String | Number
export let arrCardLevel: { img: string }[] = []

export function getRenderCard() {
    let counterCard = 0

    let cardRandom = arrCard.sort(() => Math.random() - 0.5)
    // console.log(cardRandom)
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
        console.log(arrCardLevel)
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
    if (conteinerCards) {
        conteinerCards.insertAdjacentHTML('afterbegin', htmlCards)
    }
    const cardShirtElements = document.querySelectorAll(
        '.cardShirt',
    ) as NodeListOf<Element>
    // cardShirtElements.forEach((el) => {
    //     el.classList.add('hiden')
    // })
    for (const cardElement of cardShirtElements) {
        cardElement.classList.add('hiden')
    }
}

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

    if (conteinerElement) {
        conteinerElement.innerHTML = levelHtml
    }
    const counterGame = document.getElementById('timerId') as HTMLElement
    console.log(counterGame)
    let time: number = 0
    timerId = setInterval(() => {
        let minuts: number | String = Math.floor(time / 60)
        minuts = minuts < 10 ? '0' + minuts : minuts
        let second: number | String = time % 60
        second = second < 10 ? '0' + second : second
        counterGame.textContent = `${minuts}.${second}`
        totalTime = `${minuts}.${second}`
        time++
    }, 1000)

    const startOverElement = document.querySelector(
        '.start-over',
    ) as HTMLElement
    startOverElement.addEventListener('click', () => {
        arrCardLevel.splice(0, arrCardLevel.length)
        getRender()
    })
    console.log(startOverElement)
}

export function getRenderEndGame() {
    const endGame = `    <div class="box-end">
    <div class="result-game">
      <img
        class="celebration"
        src="./static/celebration.png"
        alt="celebration"
      />
      <div class="title-game">Вы выиграли!</div>
      <div class="time-text">Затраченное время:</div>
      <div class="time-game">${totalTime}</div>
      <button class="button-game">Играть снова</button>
    </div>
  </div>`

    const lostGame = `<div class="box-end">
  <div class="result-game">
    <img
      class="celebration"
      src="./static/dead.png"
      alt="celebration"
    />
    <div class="title-game">Вы проиграли!</div>
    <div class="time-text">Затраченное время:</div>
    <div class="time-game">${totalTime}</div>
    <button class="button-game">Играть снова</button>
  </div>
</div>`

    if (conteinerElement) {
        if (countNumber === arrCardLevel.length / 2) {
            conteinerElement.innerHTML = endGame
        } else if (counterLost % 2 === 0) {
            conteinerElement.innerHTML = lostGame
        }
    }

    const buttonRestartElement = document.querySelector(
        '.button-game',
    ) as HTMLElement
    buttonRestartElement.addEventListener('click', () => {
        arrCardLevel.splice(0, arrCardLevel.length)
        getRender()
    })
}

// export function getRenderLostGame() {
//     const lostGame = `<div class="box-end">
//     <div class="result-game">
//       <img
//         class="celebration"
//         src="./static/dead.png"
//         alt="celebration"
//       />
//       <div class="title-game">Вы проиграли!</div>
//       <div class="time-text">Затраченное время:</div>
//       <div class="time-game">${totalTime}</div>
//       <button class="button-game">Играть снова</button>
//     </div>
//   </div>`

//     if (conteinerElement) {
//         conteinerElement.innerHTML = lostGame
//     }
//     const buttonRestartElement = document.querySelector(
//         '.button-game',
//     ) as HTMLElement
//     buttonRestartElement.addEventListener('click', () => {
//         arrCardLevel.splice(0, arrCardLevel.length)
//         getRender()
//     })
// }

// const counterElement = document.querySelector('.counter')
// console.log(counterGame)
// const cardA = document.querySelectorAll('.card')
// console.log(cardA)
