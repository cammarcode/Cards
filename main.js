var x
var y
var down
var downnum = -1
var cardnum = 0

addEventListener('mousemove', tellPos, false);
addEventListener('mousedown', click);
addEventListener('mouseup', release);

window.onload = start;

function tellPos(p){
    x = p.pageX
    y = p.pageY

    if(down == true){
        document.getElementById(String(downnum)).style.left = String(x-25)+"px";
        document.getElementById(String(downnum)).style.top = String(y-35)+"px";

    }
    
  }

function click(){
    var ishit = false
    for(i=0; i<cardnum; i++){
        if(x>parseInt(document.getElementById(String(i)).style.left) && x < parseInt(document.getElementById(String(i)).style.left) + 50 && y>parseInt(document.getElementById(String(i)).style.top) && y < parseInt(document.getElementById(String(i)).style.top) + 70){
            down = true;
            downnum = i;
            console.log("hit");
            ishit = true;
            break;
            }
    }
    
    if(ishit==false){
        if(x>parseInt(document.getElementById("deck").style.left) && x < parseInt(document.getElementById("deck").style.left) + 50 && y>parseInt(document.getElementById("deck").style.top) && y < parseInt(document.getElementById("deck").style.top) + 70){
            console.log('doing the thing')
            var card = document.createElement('div');
             card.id = String(cardnum);
             card.class = "card";
             card.style.left = "0px";
             card.style.top = "0px";
             card.draggable = "false";
             card.style.position = "absolute";
             var cardimg = document.createElement("img");
             cardimg.src = "testcard2.png";     
             cardimg.draggable = "false";
            document.getElementById("maindiv").appendChild(card);
            document.getElementById(String(cardnum)).appendChild(cardimg);
            document.getElementById(String(cardnum)).style.left = String(0)+"px";
            document.getElementById(String(cardnum)).style.top = String(0)+"px";
            document.getElementById(String(cardnum)).ondragstart = function() { return false; };
            cardnum +=1;
            document.getElementById("deck").numleft -=1;
            document.getElementById("D0num").innerHTML=String(document.getElementById("deck").numleft)
            console.log('did the thing')

        }
    }
}
function release(){
    down = false
    console.log('released')
}

function start(){
    document.getElementById("deck").style.left = String(500)+"px";
    document.getElementById("deck").style.top = String(500)+"px";
    document.getElementById("deck").numleft = 52;
    
}