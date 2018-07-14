var highlighterForSelect
var comingSoon 
var inTheaters 
$(document).ready(() => {
    highlighterForSelect = document.getElementById("selection-highlighter");
    comingSoon = document.getElementById("coming-soon");
    inTheaters = document.getElementById("in-theater");
})
console.log(navigator.userAgent)

 
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     inTheaters.getElementsByTagName("a")[0].addEventListener("touchstart", () => { slideNowInTheaters();  console.log("touchstart") }, false)
//     comingSoon.getElementsByTagName("a")[0].addEventListener("touchstart", () => {  slideInHome(); }, false)
// }
// else {
//     inTheaters.getElementsByTagName("a")[0].addEventListener("click", () => { slideInHome() }, false)
//     comingSoon.getElementsByTagName("a")[0].addEventListener("click", () => { slideNowInTheaters() }, false)
// }


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