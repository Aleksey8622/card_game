const conteinerElement = document.querySelector(".container");
let gameLavel = ""


function getRender() {

    let blokHtml = `        <div class="box">
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
</div>`

    conteinerElement.innerHTML = blokHtml

    const buttonElements = document.getElementsByName("radios");
    const buttonStart = document.querySelector(".button-start");
    console.log(buttonElements);

    buttonStart.addEventListener("click", () => {

        for (const buttonElement of buttonElements) {
            if (buttonElement.checked) {
                gameLavel = buttonElement.value
                console.log(gameLavel);
                alert(gameLavel)
            }
            console.log("hello");

        }
    })


}


getRender()