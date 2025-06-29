let lis = document.querySelectorAll(".tabs li");
let lisArray = Array.from(lis);
let tabs = document.querySelectorAll(".container > div");
let tabsArray = Array.from(tabs);


lisArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        lisArray.forEach((a) => {
            a.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        tabsArray.forEach((tab) => {
            tab.style.display = "none"
            document.querySelector(e.currentTarget.dataset.con).style.display = `block`
        })
    })
})















