const root = document.documentElement;
const style = getComputedStyle(root);
const colWhite = style.getPropertyValue("--col-white");
const colGrey = style.getPropertyValue("--col-grey");
const colYellow = style.getPropertyValue("--col-yellow");
const colDarkBlue = style.getPropertyValue("--col-darkblue");
const colBlack = style.getPropertyValue("--col-black");

let darkModeOn = false;

const lightModeButton = document.getElementById("lightModeButton");
const darkModeButton = document.getElementById("darkModeButton");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const blogLink = document.getElementsByClassName("blogLink");
//const skillsTable = document.querySelector(".skillsTable")

darkModeButton.addEventListener("click", function () {
    if ( darkModeOn === false ) {
        body.style.backgroundColor = colDarkBlue;
        body.style.color = colWhite;
        footer.style.backgroundColor = colGrey;
        
       

        for ( i = 0; i < blogLink.length; i++ ) {
            blogLink[i].style.borderColor = colWhite;
        }

        darkModeButton.innerText = "☀";
        darkModeOn = true;
    } else if ( darkModeOn === true ) {
        body.style.backgroundColor = colWhite;
        body.style.color = colDarkBlue;
        for ( i = 0; i < blogLink.length; i++ ) {
            blogLink[i].style.borderColor = colDarkBlue;
        }
        footer.style.backgroundColor = colYellow;
        darkModeButton.innerText = "☾";
        darkModeOn = false;
    }
})