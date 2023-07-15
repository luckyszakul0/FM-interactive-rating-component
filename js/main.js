const ratesBtns = document.querySelectorAll(".rates"); //array of all the rates
let notClickedFlag = false;

window.onload = function main(){

    ratesBtns.forEach((rate) => {
        rate.addEventListener("click", () => handlingClicking(rate));
        rate.addEventListener("mouseover", () => handlingMouseOver(rate));
        rate.addEventListener("mouseout", () => handlingMouseOut(rate));
    })

}

function handlingClicking(button){
    button.classList.add("current_rate");
    button.setAttribute("data-clicked", "true");
}

function handlingMouseOver(button){
    ratesBtns.forEach((ryba) => {
        if(ryba.getAttribute("data-clicked") == "true" && button.getAttribute("data-clicked") != "true"){
            notClickedFlag = true;

            ryba.classList.add("old_rate");
            ryba.classList.remove("current_rate");
            button.classList.add("current_rate");
        }
    })
}

function handlingMouseOut(button){
    if(notClickedFlag){
        button.classList.remove("current_rate");

    }
}