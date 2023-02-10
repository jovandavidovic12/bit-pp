function info() {
    console.log(navigator.userAgent)
    console.log(navigator.appVersion)
    console.log(navigator.cookieEnabled)
    console.log(navigator.geolocation)
    console.log(navigator.onLine)
    console.log(navigator.platform)
}

info();

function onlineChecker() {

    if (navigator.onLine == true) {
        console.log('Browser is online')
    } else {
        console.log('browser is OFFLINE')
    }
}

onlineChecker();

function deviceInfo() {
    console.log(window.screen.availHeight)
    console.log(window.screen.availWidth)
    console.log(window.screen.height)
    console.log(window.screen.width)
}

deviceInfo();


function winInfo() {
    console.log((window.location.href))
    console.log((window.location.host))
    console.log((window.location.hostname))
    console.log((window.location.port))
    console.log((window.location.protocol))
    console.log((window.location.search))
}

winInfo();



function reloader() { window.location.reload(); }


function redirect() {
    location.href = "https://www.javascripttutorial.net/";
}


var car = {
    brand: "Suzuki",
    color: "white",
    price: 1000
}
window.localStorage.setItem('car', JSON.stringify(car))
window.localStorage.getItem('car');
var answer = localStorage.key(5);
console.log(answer)

function storeData(input) {

}

function increaseCounter() {
    var count = Number(window.localStorage.getItem("count"));
    count += 1;
    window.localStorage.setItem("count", count);
    document.getElementById("score").innerHTML = count;
}


function decreaseCounter() {
    var count = Number(window.localStorage.getItem("count"));
    count -= 1;
    window.localStorage.setItem("count", count);
    document.getElementById("score").innerHTML = count;
}



function clearCounter() {
    window.localStorage.clear();
    document.getElementById("score").innerHTML = "";
}


function goB (){
    window.history.back();
}

function pageAlert(){
    alert("ALERT")
}

pageAlert();


function mathR (min, max){
    min = Math.ceil(1)
    max = Math.floor(50)
    return Math.floor(Math.random() * (max - min) + min);
   
} 
var b = mathR();
console.log(b)

a = Math.random();
console.log(a)






// od 1 do 50;




function arrayCreator (l, n) {
  return Array.from({length: l}, () => Math.floor(Math.random() * n));

}
console.log(arrayCreator(10, 50))


Array.from({length: 10}, () => Math.floor(Math.random() * 50))



