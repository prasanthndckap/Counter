let buttons = document.querySelectorAll("button")
let decrease = document.querySelector("#dec")
let increase = document.querySelector("#inc")
let reset = document.querySelector("#reset")
let num = document.querySelector("#num")

// increase button is clicked the value will increase. 


increase.addEventListener("click", function () {
    num.innerText++;
    if (num.innerText > 0) {
        num.style.color = "green"
    }

    if (num.innerText == 0) {
        num.style.color = "black"
    }
})

// decrease button is clicked it will decrease the numbers 
decrease.addEventListener("click", function () {
    num.innerText--;
    if (num.innerText < 0) {
        num.style.color = "red"
    }
    if (num.innerText == 0) {
        num.style.color = "black"
    }
})
if (num.innerText == 0) {
    num.style.color = "black"
}
// if the reset button is click it will back to initial value 0 and 
// the colour will become a black
reset.addEventListener("click", function () {
    num.innerText = 0
    if (num.innerText == 0) {
        num.style.color = "black"
    }
})





