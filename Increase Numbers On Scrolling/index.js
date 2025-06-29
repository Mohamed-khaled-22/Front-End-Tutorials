let section = document.querySelector(".section:nth-child(3)")
let nums = document.querySelectorAll(".section:nth-child(3) .number")
let ok = false;


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!ok) {
            nums.forEach((n) => {
                let goal = n.dataset.goal;
                let counter = setInterval(() => {
                    n.innerHTML++
                    if (n.innerHTML == goal) {
                        clearInterval(counter)
                    }
                }, 3000 / goal);
            })
        }
        ok = true;
    }
}






































// window.onscroll = function () {
//     if (window.scrollY >= section.offsetTop) {
//         nums.forEach((e) => {
//             let goal = e.dataset.goal;
//             let counter = setInterval(() => {
//                 e.innerHTML++
//                 if (e.innerHTML === goal) {
//                     clearInterval(counter)
//                 }
//             }, 2000 / goal);
//         })

//     }
// }







