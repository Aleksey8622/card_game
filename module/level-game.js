
const conteinerElement = document.querySelector(".app-game");

export function getRenderLevel() {
  const levelHtml = ` <div class="navi">
    <div class="time">
        <div class="report">
            <p class="minuts">min</p>
            <p class="seconds">sek</p>
        </div>
        <p class="counter">00.00</p>
    </div>
    <button class="start-over">Начать заново</button>
</div>`


conteinerElement.innerHTML = levelHtml
}