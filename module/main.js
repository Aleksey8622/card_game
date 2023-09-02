const conteinerElement = document.querySelector(".container");
let gameLavel = ""


function getRender() {

    let blokHtml = `        <div class="box">
    <div class="title">Выбери сложность</div>
    <div class="radio-toolbar">
        <button class="radio-button">1</button>
        <button class="radio-button">2</button>
        <button class="radio-button">3</button>
    </div>
    <button class="button-start">Старт</button>
</div>`

    conteinerElement.innerHTML = blokHtml

    const buttonElements = document.querySelectorAll(".radio-button");
    const buttonStart = document.querySelector(".buttonStart");

    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', () => {
            if (buttonElement.classList.contains("color")) {
                buttonElement.classList.remove("color")
            } else {
                buttonElement.classList.add("color")
            }
            console.log("hello");
        })
    }
}


getRender()