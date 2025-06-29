let letters = "0123456789ABCDEF";
let num = "";

window.addEventListener(("click"), () => {
    document.body.textContent = "";
    for (let i = 0; i < 6; i++) {
        num += letters[Math.floor(Math.random() * letters.length)]
    }
    document.body.style.backgroundColor = `#${num}`;
    document.body.textContent = `#${num}`
    num = "";
}
)
document.body.style.userSelect = "none"
