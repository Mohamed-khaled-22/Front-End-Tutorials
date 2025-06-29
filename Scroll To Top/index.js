let up = document.querySelector("span")

window.onscroll = function () {
    // console.log(this.scrollY);
    if (window.scrollY >= 600) { up.style.cssText = "transform: translateX(0%)"; } else {
        up.style.cssText = "transform: translateX(200%)";
    }
    // window.scrollY >= 600 ? up.style.cssText = "transform: translateX(0%)" : up.style.cssText = "transform: translateX(200%)"
}
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}