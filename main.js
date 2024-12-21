let qouteArr = ["استمتع بمذاق الحياة في كل لحظة",
    "لا تضيع طاقتك في الرد على الانتقادات",
    "تذكر دائما؛ الطريق إلى النجاح الكبير تتضمنه مخاطر كبيرة",
    "ثق بحدسك في القرارات التي تأخذها",
    "مَن غفل عن نفسه خسر، ومن صبر غنم"]

let qoute = document.querySelector("#qoute-text")
let btn = document.querySelector("#btn-new-qoute")




// btn.onclick = function(){
//     let RandomIndex = Math.floor(Math.random() * qouteArr.length)
//     // console.log(qouteArr[RandomIndex])
//     qoute.textContent = qouteArr[RandomIndex]
// }

// Or  // Down 
function RandomeIndexOfArrQoute(qouteArr) {
    let RandomIndex = Math.floor(Math.random() * qouteArr.length)
    return qouteArr[RandomIndex]
}

function displayQoute() {
    let Result = RandomeIndexOfArrQoute(qouteArr)
    return qoute.textContent = Result
}
btn.addEventListener("click",displayQoute)
 