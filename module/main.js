import '../style.css'
import {
    getRenderCard,
    getRenderLevel,
    arrCardLevel,
    getRenderEndGame,
    getRenderLostGame,
    timerId,
} from './level-game.js'
export let gameLavel = ''
const conteinerElement = document.querySelector('.app-game')
const conteinerCards = document.querySelector('.app-card')

export function getRender() {
    let blokHtml = `           <div class="container center">
    <div class="box">
        <div class="title">Выбери сложность</div>
        <div class="radio-toolbar">
            <input type="radio" id="radio1" name="radios" value="easy" checked>
            <label for="radio1">1</label>

            <input type="radio" id="radio2" name="radios" value="medium">
            <label for="radio2">2</label>

            <input type="radio" id="radio3" name="radios" value="hard">
            <label for="radio3">3</label>
        </div>
        <button class="button-start">Старт</button>
    </div>
</div>

`

    conteinerElement.innerHTML = blokHtml

    const buttonElements = document.getElementsByName('radios')
    const buttonStart = document.querySelector('.button-start')
    console.log(buttonStart)

    buttonStart.addEventListener('click', () => {
        for (const buttonElement of buttonElements) {
            if (buttonElement.checked) {
                gameLavel = buttonElement.value
                getRenderLevel({ conteinerElement })
                getRenderCard({ conteinerCards })
                setTimeout(() => {
                    hidenCard()
                }, 5000)

                console.log(gameLavel)
            }
        }
    })
    clearInterval(timerId)
}

getRender()

function hidenCard() {
    const cardElements = document.querySelectorAll('.card')
    const cardShirtElements = document.querySelectorAll('.cardShirt')

    for (const cardElement of cardElements) {
        cardElement.classList.add('hiden')
    }

    for (const cardShirtElement of cardShirtElements) {
        cardShirtElement.classList.remove('hiden')
    }
    compareCard()
}

function compareCard() {
    const faceCardElements = document.querySelectorAll('.box-card')
    let counterCardNamber = 0
    let cardFirst
    let cardSecond
    let countNamder = 0
    let counterLost = 0
    for (const faceCardElement of faceCardElements) {
        faceCardElement.addEventListener('click', () => {
            const cardElementChild = faceCardElement.children
            cardElementChild[0].classList.remove('hiden')
            cardElementChild[1].classList.add('hiden')
            console.log(cardElementChild)
            counterCardNamber++

            if (counterCardNamber % 2 !== 0) {
                cardFirst = faceCardElement.children[0].src
            }
            if (counterCardNamber % 2 === 0) {
                cardSecond = faceCardElement.children[0].src

                if (cardFirst === cardSecond) {
                    countNamder++
                    console.log(countNamder)
                    if (countNamder === arrCardLevel.length / 2) {
                        clearInterval(timerId)
                        getRenderEndGame()
                    }
                }
                if (cardFirst !== cardSecond) {
                    counterLost++
                    console.log(counterLost)
                    if (counterLost % 2 === 0) {
                        clearInterval(timerId)
                        getRenderLostGame()
                    }
                }
                // else {
                //     getRenderLostGame()
                // }
            }
        })
    }
}
