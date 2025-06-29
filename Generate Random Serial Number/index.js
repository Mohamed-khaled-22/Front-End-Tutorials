let scre = document.querySelector(".result-window");
let btn = document.querySelector(".btn");

// console.log(btn)


btn.onclick = function () {
    let mychar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    let charcount = 10;
    let serial = "";

    for (let i = 0; i < charcount; i++) {
        serial += mychar[Math.floor(Math.random() * mychar.length)]
    }
    scre.innerHTML = serial
}
