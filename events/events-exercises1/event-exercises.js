// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

var button = document.querySelector('button');


button.addEventListener('click', function (){
    const curColour = document.body.style.backgroundColor;
    if (curColour === 'red'){
        document.body.style.backgroundColor = 'blue';

    } else {
        document.body.style.backgroundColor = 'red'
    }
})


var button2 = document.getElementsById('btn2');

function disable(){
    document.getElementById('btn').disabled = true;
}

function enable() {
    if ( document.getElementById('btn').disabled = true ) {
        document.getElementById('btn').disabled = false;
    }
}
