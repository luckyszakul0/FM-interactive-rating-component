const ratesBtns = document.querySelectorAll(".rates");

window.onload = function ratesStates(){

    ratesBtns.forEach((rate) => {
        rate.addEventListener("click", () => {
            ratesBtns.forEach((oldRate) => {
                if(oldRate.getAttribute("data-clicked") == "true"){
                    oldRate.setAttribute("data-clicked", "false");
                    rate.setAttribute("data-clicked", "true");
                }
            })

            rate.setAttribute("data-clicked", "true");

        })
    })

}