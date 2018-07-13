
var highlighterForSelect = document.getElementById("selection-highlighter");
var comingSoon = document.getElementById("coming-soon");
var inTheaters = document.getElementById("in-theaters");
function slideInHome() {
    highlighterForSelect.style.left = "0%";
    comingSoon.style.left = "0%";
   
    console.log("coming soon");
}

function slideNowInTheaters() {
    highlighterForSelect.style.left = "50%";
  
    comingSoon.style.left = "100%";
    console.log("in theaters");
}