const ratesBtns = document.querySelectorAll(".rates"); //array of all the rates
let clickedIndex = 'null'; //index of currently clicked button, on the start it's a string, then changes to integer

window.onload = function main(){

    //main function - add event listeners to all of the rates button
    ratesBtns.forEach((rate) => {
        rate.addEventListener("mouseover", () => handlingMouseOver(rate));
        rate.addEventListener("mouseout", () => handlingMouseOut(rate));
        rate.addEventListener("click", () => handlingClicking(rate));
    })

}

function handlingClicking(button){
    //changed the clicked button's colors
    button.classList.add("current_rate");
    button.setAttribute("data-clicked", "true");

    //remove all of the dynamic classes from the old clicked button if it exists and it isn't the one which is being clicked
    if(clickedIndex !== 'null' && button.getAttribute("data-index") !== clickedIndex){
        ratesBtns[clickedIndex].classList.remove("current_rate");
        ratesBtns[clickedIndex].classList.remove("old_rate");
        ratesBtns[clickedIndex].setAttribute("data-clicked", "false");
    }

    clickedIndex = button.getAttribute("data-index");
}

function handlingMouseOver(button){
    //if mouse over new button - give it orange color and give the light gray color to the old clicked button
    button.classList.add("current_rate");
    
    //change the color of the old button to light gray if the old one exists and it isn't the one being hovered at the moment
    if(clickedIndex !== 'null' && button.getAttribute("data-index") !== clickedIndex)
        ratesBtns[clickedIndex].classList.add("old_rate");
}

function handlingMouseOut(button){
    //if the button hasn't been clicked - remove it's orange color on mouse out
    if(button.getAttribute("data-clicked") == "false")
        button.classList.remove("current_rate");

    //give the old clicked button it's orange color back
    if(clickedIndex !== 'null')
        ratesBtns[clickedIndex].classList.remove("old_rate");
}