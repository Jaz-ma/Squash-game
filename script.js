const player =document.getElementById('player')
const ball = document.getElementById('ball')
var rect = player.getBoundingClientRect();
var pos = ball.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
var Vup=15
var Vdown=5
var V=Vdown
var score = 0;
var highscore =localStorage.getItem("highscore")
if(highscore===null){
    document.getElementById("highscore").innerHTML="0"
}
else{
    document.getElementById("highscore").innerHTML=highscore

}function moveup(){
    if( rect.top > 10){
        player.style.top= rect.top -Vup +'px'
        rect = player.getBoundingClientRect();
        
        console.log(rect)
    }
}
function movedown(){
    if( rect.top <225){
        player.style.top= rect.top - Vdown + 'px'
        rect = player.getBoundingClientRect();
        
        console.log(rect)
    }
}
function playermovement(){
    player.style.top= rect.top -V +'px'
    rect = player.getBoundingClientRect();
    if( rect.top > 225){
        V=Vup
       
        rect = player.getBoundingClientRect();
        
        
    }
    if( rect.top <10){
        V=Vdown
        rect = player.getBoundingClientRect();
        
       
    }
}
function toggle(){
   switch(V){

    case Vdown:
        V=Vup
        break;
    case Vup:
        V=Vdown
        break;
    }
}
var x=-1 ;
var y=89;
function ballmovement(){
    var xpos =pos.left
    var ypos =pos.top
    
    ball.style.left = xpos - x + 'px'
    ball.style.top  = ypos - y + 'px'
    pos = ball.getBoundingClientRect();
    if(pos.top>286 ){
        y=95
    }
    if(pos.top<10){
        y=89
    }
    if(pos.left>780){
        x=4;
    }
    if( pos.left<1){
        clearInterval(id)
        clearInterval(ID)
        if( score>=highscore){
            localStorage.setItem("highscore",score)
        }
        highscore = localStorage.getItem("highscore")
        document.getElementById("highscore").innerHTML=highscore
        if(confirm("You Lose!\n Press Ok to replay.")){           
            location.reload()
        }

    }
    if(pos.left<24 && ((pos.top>=rect.top && pos.top<=rect.bottom)||(pos.bottom>=rect.top && pos.bottom<=rect.bottom))){
        x=-1
        score++
       
        if( score>highscore){
            localStorage.setItem("highscore",score)
            highscore=localStorage.getItem('highscore')
            document.getElementById("highscore").innerHTML=highscore
        }
        document.getElementById("score").innerHTML=score
    }
    pos = ball.getBoundingClientRect();
    console.log(pos);
    
}
function position(){
    pos = ball.getBoundingClientRect();
}
var id=setInterval(ballmovement,10);
var ID =setInterval(playermovement,20)

































function ballmovementleft(){
    ball.style.left = pos.left - 3 + 'px'
    pos = ball.getBoundingClientRect();
    console.log(pos);
}
function ballmovementright(){
    ball.style.left = pos.left - 1 + 'px'
    pos = ball.getBoundingClientRect();
    console.log(pos);
}
function ballmovementdown(){
    ball.style.top = pos.top - 91 + 'px'
    pos = ball.getBoundingClientRect();
    console.log(pos);
}
function ballmovementup(){
    ball.style.top = pos.top - 93 + 'px'
    pos = ball.getBoundingClientRect();
    console.log(pos);
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 90:
            ballmovementup()
            break;

        case 83:
            ballmovementdown()
            break;

        case 81:
            ballmovementleft()
            break;
        case 68:
            ballmovementright()
            break;
        case 38:
            moveup()
            break;       
        case 40:
            movedown()
            break;
    }
};