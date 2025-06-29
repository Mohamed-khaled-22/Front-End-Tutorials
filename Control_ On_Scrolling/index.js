let section = document.querySelector(".three")
let span = document.querySelectorAll(".processe .prog span")

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop + 70) {
        span.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}















