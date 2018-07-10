(function () {
    var comingSoonSpan = document.getElementById("select-coming-soon");
    var inTheatersSpan = document.getElementById("select-in-theater");
    var highlighterForSelect = document.getElementById("selection-highlighter");
    comingSoonSpan.click = () => { alert() }
    comingSoonSpan.addEventListener("onClick", () => {
        highlighterForSelect.style.left = "0%";
        console.log("coming soon");
    })
    inTheatersSpan.addEventListener("click", () => {
        highlighterForSelect.style.left = "50%";
        console.log("in theaters");
    })
})();
var highlighterForSelect = document.getElementById("selection-highlighter");

function slideLeft() {
    highlighterForSelect.style.left = "0%";
    console.log("coming soon");
}

function slideRight() {
    highlighterForSelect.style.left = "50%";
    console.log("in theaters");
}