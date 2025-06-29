let input = document.querySelector("input");
let prog = document.querySelector(".progress");
let maxlength = input.getAttribute("maxlength");
let count = document.querySelector(".count");


count.innerHTML = maxlength;

input.oninput = function () {
    count.innerHTML = maxlength - this.value.length;
    count.innerHTML == 0 ? count.classList.add("elasy") : count.classList.remove("elasy");
    count.innerHTML == 0 ? prog.classList.add("elasy1") : prog.classList.remove("elasy1");
    prog.style.width = `${(this.value.length) * 100 / maxlength}%`
}








