const button = document.querySelector('.btn');
const banner = document.querySelector('.banner');
let flag = true;

function Show() {
    banner.style.transform = "translateY(100%)";
    window.open("https://www.youtube.com/", "Youtube");
    window.focus();
    flag = !flag;
}

if (flag) {
    button.onmouseup = Show;
}