let mainDiv = document.querySelector(".container");


fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lAlR9SJF5iqPislh5clCRiDClyZ2oM9BKH8BOWyY")
    .then((result) => {return result.json()})
    .then((result) => {

        let myObj = result.data;
        let arrayOfKeys = Object.keys(myObj);
        // console.log(myObj)
        // console.log(arrayOfKeys)

    for(let i = 0 ; i < arrayOfKeys.length ; i++){
        // console.log(arrayOfKeys[i])
   let currnDiv = document.createElement("div")

   currnDiv.className = arrayOfKeys[i]

   currnDiv.innerHTML = `${Math.round(myObj[arrayOfKeys[i]])} <span> ${ arrayOfKeys[i]}</span>`

  mainDiv.appendChild(currnDiv)}
})



















// async function fetchData() {
//     try {
//         const response = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lAlR9SJF5iqPislh5clCRiDClyZ2oM9BKH8BOWyY");
//         const result = await response.json();
        
//         let obj = result.data;
//         console.log(obj);

//         let arrayOfKeys = Object.keys(obj);
//         console.log(arrayOfKeys);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// // استدعاء الدالة
// fetchData();

