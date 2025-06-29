let endTime = new Date("2025/2/6  23:59:59").getTime()

// console.log(endTime)

let countDowen = setInterval(() => {
    let date = new Date().getTime()
    let dateDiff = endTime - date

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);  // => dateDiff %  (1000 * 60 * 60 * 24 )   === (باقي الكسر بينهم بالايام ) === (الي هو بيساوي الساعات والدقايق والثواني بالمييل سكند)

    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / 1000 / 60);  // => dateDiff % (1000 * 60 * 60 ) === ( دقايق بالميل سكند الي هي كسر الساعات )

    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);           // => dateDiff % (1000 * 60 )  === (كده انا بجيب الكسر الباقي من الفرق بينهم بالدقايق )

    // console.log(days)
    // console.log(hours)
    // console.log(minutes)
    // console.log(seconds)

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff == 0) {
        clearInterval(countDowen)
    }
}, 1000)








