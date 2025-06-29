let prog = document.querySelector(".progress");


let allheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function () {
    prog.style.width = `${(document.documentElement.scrollTop / allheight) * 100}%`
}


// console.log(document.documentElement.scrollTop)
// console.log(document.documentElement.scrollHeight)
// console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.clientHeight)
