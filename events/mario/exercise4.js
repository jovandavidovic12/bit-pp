var bg = document.querySelector('.container');
var mario = document.querySelector('.mario-static');
var body = document.body;

var x = 0;
var movement;

window.addEventListener('keydown',function (e) {
    if(e.key == "ArrowRight"){
        if(mario.getAttribute("src") === "./mario.png"){
            mario.removeAttribute("src");
            mario.setAttribute("src" , "./mario_running.gif");
            movement = setInterval(() => {
                x -= 1;
                bg.style.backgroundPosition = x + "px bottom"
            }, 1);
        }
    }
}) ;


window.addEventListener("keyup", function(e){
    if(e.key == "ArrowRight"){
        mario.removeAttribute("src");
        mario.setAttribute("src", "./mario.png");
        this.clearInterval(movement);
    }
});
