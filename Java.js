// Made by Noah, Isaac, & Diego
// 11/21/16

var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var numberOfFaces = 5;
var theBody = document.getElementsByTagName("body")[0];
var counter = 0;

function generateFaces() {
    for (var temp = 1; temp <= numberOfFaces; temp++) {
        var img = document.createElement("img");
        img.src = "img/datboi.gif";

        img.style.top = Math.floor(Math.random() * 400) + "px";

        img.style.left = Math.floor(Math.random() * 400) + "px";
        theLeftSide.appendChild(img)
    }
    var leftImages = theLeftSide.cloneNode(true);
    leftImages.removeChild(leftImages.lastChild);
    theRightSide.appendChild(leftImages);
    theLeftSide.lastChild.onclick = function nextLevel(event) {


        document.getElementById("inc").value = ++counter;


        event.stopPropagation();
        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);

        }
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild)
        }
        numberOfFaces += 5;
        generateFaces();
    };
}
theBody.onclick = function endGame() {
    alert("Game over, you made it to round "+ counter +" press 'OK' to play again");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
    location.reload();
};

//var counter = 0;
//function buttonClick() {
////theLeftSide.lastChild.onclick
//document.getElementById('inc').value = ++counter;
//}