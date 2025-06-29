const show = document.querySelector(".slider");
const father = document.querySelector(".slider .slide-container");
const bolits = document.querySelector(" .bolits");
const spans = document.querySelectorAll(" .bolits span");

spans.forEach((s) => {
    s.addEventListener(("click"), (e) => {
        spans.forEach((a) => {
            a.classList.remove("active");
        })
        e.target.classList.add("active");

        if (e.target === e.target.parentElement.children[0]) {
            father.style.left = 0;
        } else if (e.target === e.target.parentElement.children[1]) {
            father.style.left = "-300px";

        } else if (e.target === e.target.parentElement.children[2]) {
            father.style.left = "-600px";

        } else {
            father.style.left = "-900px";
        }
    })
})


