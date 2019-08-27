function Show() {
    window.open("https://www.youtube.com/", "Youtube");
    window.focus();
    document.removeEventListener("mouseup", Show, false);
}

document.addEventListener("mouseup", Show, false);
