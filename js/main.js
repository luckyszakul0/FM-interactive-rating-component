const ratesBtns = document.querySelectorAll(".rates"); //array of all the rates
let clickedIndex = null;

window.onload = function main(){

    ratesBtns.forEach((rate) => {
        rate.addEventListener("mouseover", () => handlingMouseOver(rate));
        rate.addEventListener("mouseout", () => handlingMouseOut(rate));
        rate.addEventListener("click", () => handlingClicking(rate));
    })

}

function handlingClicking(button){
    //
    button.classList.add("current_rate");
    button.setAttribute("data-clicked", "true");

    if(clickedIndex != null){
        ratesBtns[clickedIndex].classList.remove("current_rate");
        ratesBtns[clickedIndex].classList.remove("old_rate");
        ratesBtns[clickedIndex].setAttribute("data-clicked", "false");
    }

    clickedIndex = button.getAttribute("data-index");
}

function handlingMouseOver(button){
    button.classList.add("current_rate");

    if(clickedIndex != null)
        ratesBtns[clickedIndex].classList.add("old_rate");
}

function handlingMouseOut(button){
    if(button.getAttribute("data-clicked") == "false")
        button.classList.remove("current_rate");

    if(clickedIndex != null)
        ratesBtns[clickedIndex].classList.remove("old_rate");
}