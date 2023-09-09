

import { getRenderCard, getRenderLevel } from './level-game.js'
const conteinerElement = document.querySelector('.app-game')
const conteinerCards = document.querySelector(".app-card")
let gameLavel = ''

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
    console.log(buttonElements)

    buttonStart.addEventListener('click', () => {
        for (const buttonElement of buttonElements) {
            if (buttonElement.checked) {
                gameLavel = buttonElement.value
                getRenderLevel({ conteinerElement })
                getRenderCard({conteinerCards})
                console.log(gameLavel)
            }
        }
    })
}

getRender()
