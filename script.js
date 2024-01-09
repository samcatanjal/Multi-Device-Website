
var menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px"; 

function toggle_menu() {
    
    if (menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "300px"
    }
    else
        {
            menuList.style.maxHeight = "0px";
    }
}

var intro = document.getElementById("introMusic");
intro.volume = 0.5;

function playIntro() {

    if (intro.paused) {
        intro.play();
    }
    else {
        intro.pause();
    }
}
