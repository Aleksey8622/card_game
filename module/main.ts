import '../style.css'
import {
    getRenderCard,
    getRenderLevel,
    arrCardLevel,
    getRenderEndGame,
    timerId,
} from './level-game'
export let gameLavel: string = ''
export let countNumber: number = 0
export let counterLost: number = 0
const conteinerElement = document.querySelector('.app-game')

// const conteinerCards = document.querySelector('.app-card')

export function getRender() {
    const blokHtml = `           <div class="container center">
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
    if (conteinerElement) {
        conteinerElement.innerHTML = blokHtml
    }

    const buttonElements = document.getElementsByName(
        'radios',
    ) as NodeListOf<HTMLInputElement>
    const buttonStart = document.querySelector('.button-start') as HTMLElement
    console.log(buttonStart)

    buttonStart.addEventListener('click', () => {
        // for (const buttonElement of buttonElements) {
        //     if (buttonElement.checked) {
        //         gameLavel = buttonElement.value
        //         getRenderLevel()
        //         getRenderCard()
        //         setTimeout(() => {
        //             hidenCard()
        //         }, 5000)

        //         console.log(gameLavel)
        //     }
        // }
        buttonElements.forEach((el) => {
            if (el.checked) {
                gameLavel = el.value
                getRenderLevel()
                getRenderCard()
                setTimeout(() => {
                    hidenCard()
                }, 5000)
            }
        })
    })
    clearInterval(timerId)
}

getRender()

function hidenCard() {
    const cardElements = document.querySelectorAll(
        '.card',
    ) as NodeListOf<Element>
    const cardShirtElements = document.querySelectorAll(
        '.cardShirt',
    ) as NodeListOf<Element>

    cardElements.forEach((el) => {
        el.classList.add('hiden')
    })

    // for (const cardElement of cardElements) {
    //     cardElement.classList.add('hiden')
    // }
    cardShirtElements.forEach((el) => {
        el.classList.remove('hiden')
    })
    // for (const cardShirtElement of cardShirtElements) {
    //     cardShirtElement.classList.remove('hiden')
    // }
    compareCard()
}

function compareCard() {
    const faceCardElements = document.querySelectorAll('.box-card')
    let counterCardNamber = 0
    let cardFirst: string
    let cardSecond
    countNumber = 0
    counterLost = 0
    for (const faceCardElement of faceCardElements as any) {
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
                    countNumber++
                    console.log(countNumber)
                    if (countNumber === arrCardLevel.length / 2) {
                        clearInterval(timerId)
                        getRenderEndGame()
                    }
                }
                if (cardFirst !== cardSecond) {
                    counterLost++
                    console.log(counterLost)
                    if (counterLost % 2 === 0) {
                        clearInterval(timerId)
                        getRenderEndGame()
                    }
                }
                // else {
                //     getRenderLostGame()
                // }
            }
        })
    }
    // faceCardElements.forEach((el) => {
    //     el.addEventListener('click', () => {
    //         const cardElementChild = el.children
    //         cardElementChild[0].classList.remove('hiden')
    //         cardElementChild[1].classList.add('hiden')
    //         counterCardNamber++

    //         if (counterCardNamber % 2 !== 0) {
    //             cardFirst = el.children[0]
    //         }
    //         if (counterCardNamber % 2 === 0) {
    //             cardSecond = el.children[0]
    //             if (cardFirst === cardSecond) {
    //                 countNumber++
    //             }
    //         }
    //     })
    // })
}
