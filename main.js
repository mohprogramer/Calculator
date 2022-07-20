const display = document.querySelector(".display");
const list = document.querySelectorAll(".show-display");
document.querySelector(".all-clear").addEventListener("click", clearAll);
document.querySelector(".clear-last").addEventListener("click", clearLast)
document.querySelector(".calculate").addEventListener("click", calculate);

list.forEach(item => {
    item.addEventListener("click", show);

    function show() {
        if (display.innerText == 0) {
            display.innerText = item.innerText;
        } else if (display.innerText != 0) {
            display.innerText += item.innerText;
        }
    }
})

function clearAll() {
    display.innerText = 0;
}

function clearLast() {
    if (display.innerText.lenght == 1) {
        display.innerText = 0;
    } else {
        display.innerText = display.innerText.substring(0, display.innerText.length - 1);
    }
}

function calculate() {
    display.innerText = eval(display.innerText);
}