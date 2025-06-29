let menue = document.querySelector(".brger");
let close = document.querySelector(".close");
let layout = document.querySelector(".layout");

// console.log(menue)

menue.onclick = function () {
    layout.style.transform = "translateX(0%)"
}

close.onclick = function () {
    layout.style.transform = "translateX(-100%)"
}

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        layout.style.transform = "translateX(-100%)"
    }
}






