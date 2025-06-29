let lis = document.querySelectorAll("ul li");
let images = Array.from(document.images)

// console.log(images)
// console.log(lis)


lis.forEach((li) => {
    li.addEventListener("click", removeactive)
    li.addEventListener("click", mangeimg)
})

function removeactive() {
    lis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}


function mangeimg() {
    images.forEach((img) => {
        img.style.display = "none";
    })
    // console.log( document.querySelectorAll(this.dataset.cat))
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
        img.style.display = "block";
    })
}



// الكود بشكل مختصر

// lis.forEach((li) => {
//     li.addEventListener("click", () => {
//         lis.forEach((li) => {
//             li.classList.remove("active");
//             this.classList.add("active");
//         })
//     })
//     li.addEventListener("click", () => {
//         images.forEach((img) => {
//             img.style.display = "none";
//         })
//         // console.log( document.querySelectorAll(this.dataset.cat))
//         document.querySelectorAll(this.dataset.cat).forEach((img) => {
//             img.style.display = "block";
//         })
//     }
//     )
// })



























































