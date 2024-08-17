const root = document.documentElement;
const style = getComputedStyle(root);
const colWhite = style.getPropertyValue("--col-white");
const colGrey = style.getPropertyValue("--col-grey");
const colYellow = style.getPropertyValue("--col-yellow");
const colDarkBlue = style.getPropertyValue("--col-darkblue");
const colBlack = style.getPropertyValue("--col-black");

const lightModeButton = document.getElementById("lightModeButton");
const darkModeButton = document.getElementById("darkModeButton");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

//darkModeButton.addEventListener("click", function () {
//    if ( body.style.backgroundColor === '#ffffff' ) {
//        body.style.backgroundColor = '#14213d';
//    } else {
//        body.style.backgroundColor = '#ffffff';
//    }
//})

darkModeButton.addEventListener("click", function () {
    body.style.backgroundColor = colDarkBlue;
    body.style.color = colWhite;
    footer.style.backgroundColor = colGrey;
})

lightModeButton.addEventListener("click", function () {
    body.style.backgroundColor = colWhite;
    body.style.color = colDarkBlue;
})