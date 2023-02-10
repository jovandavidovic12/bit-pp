var button=document.querySelector(".btn");
var input=document.querySelector(".input-space");
var mainArea=document.querySelector(".main-area");


function push() {
    if(input.value){
        var msg = document.createElement("p");
        msg.textContent = input.value;
        mainArea.appendChild(msg);
        input.value = "";
    }
};

function reset() { 
var list = document.getElementsByClassName('.main-area')
if(list.hasChildNodes()) {
    list.remove(list.children[0])
}
}