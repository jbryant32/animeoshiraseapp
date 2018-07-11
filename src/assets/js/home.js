
var highlighterForSelect = document.getElementById("selection-highlighter");
var comingSoon = document.getElementById("coming-soon");
var inTheaters = document.getElementById("in-theaters");
function slideLeft() {
    highlighterForSelect.style.left = "0%";
    comingSoon.style.left = "0%";
    inTheaters.style.left="-100%";
    console.log("coming soon");
}

function slideRight() {
    highlighterForSelect.style.left = "50%";
    inTheaters.style.left="0%";
    comingSoon.style.left = "100%";
    console.log("in theaters");
}