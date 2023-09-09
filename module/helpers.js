const conteinerElement = document.querySelector('.app-game')

export let arrCard = [
    { img: './img/deck-cards/boody/6.png' },
    { img: './img/deck-cards/boody/7.png' },
    { img: './img/deck-cards/boody/8.png' },
    { img: './img/deck-cards/boody/9.png' },
    { img: './img/deck-cards/boody/10.png' },
    { img: './img/deck-cards/boody/J.png' },
    { img: './img/deck-cards/boody/Q.png' },
    { img: './img/deck-cards/boody/K.png' },
    { img: './img/deck-cards/boody/A.png' },
    { img: './img/deck-cards/cross/6.png' },
    { img: './img/deck-cards/cross/7.png' },
    { img: './img/deck-cards/cross/8.png' },
    { img: './img/deck-cards/cross/9.png' },
    { img: './img/deck-cards/cross/10.png' },
    { img: './img/deck-cards/cross/J.png' },
    { img: './img/deck-cards/cross/Q.png' },
    { img: './img/deck-cards/cross/K.png' },
    { img: './img/deck-cards/cross/A.png' },
    { img: './img/deck-cards/peaks/6.png' },
    { img: './img/deck-cards/peaks/7.png' },
    { img: './img/deck-cards/peaks/8.png' },
    { img: './img/deck-cards/peaks/9.png' },
    { img: './img/deck-cards/peaks/10.png' },
    { img: './img/deck-cards/peaks/J.png' },
    { img: './img/deck-cards/peaks/Q.png' },
    { img: './img/deck-cards/peaks/K.png' },
    { img: './img/deck-cards/peaks/A.png' },
    { img: './img/deck-cards/worms/6.png' },
    { img: './img/deck-cards/worms/7.png' },
    { img: './img/deck-cards/worms/8.png' },
    { img: './img/deck-cards/worms/9.png' },
    { img: './img/deck-cards/worms/10.png' },
    { img: './img/deck-cards/worms/J.png' },
    { img: './img/deck-cards/worms/Q.png' },
    { img: './img/deck-cards/worms/K.png' },
    { img: './img/deck-cards/worms/A.png' },
]

console.log(arrCard)
export function getRenderCard() {
    const cardsHtml = arrCard
        .map((item) => {
            return ` <div class="card">
            <img src="${item.img}" alt="">
        </div>
        `
        })
        .join('')

    conteinerElement.innerHTML = cardsHtml
}
