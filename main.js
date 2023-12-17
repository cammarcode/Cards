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
    for(i=0; i<cardnum; i++)
    if(x>parseInt(document.getElementById("testcard").style.left) && x < parseInt(document.getElementById("testcard").style.left) + 50 && y>parseInt(document.getElementById("testcard").style.top) && y < parseInt(document.getElementById("testcard").style.top) + 70){
    down = true
    downnum = i
    console.log("hit")
    }
    else{
        if(x>parseInt(document.getElementById("deck").style.left) && x < parseInt(document.getElementById("deck").style.left) + 50 && y>parseInt(document.getElementById("deck").style.top) && y < parseInt(document.getElementById("deck").style.top) + 70){
            console.log('doing the thing')
            var card = document.createElement('div');
             card.id = String(cardnum);
             card.class = "card";
             card.style.left = "0px"
             card.style.top = "0px"
             var cardimg = document.createElement("img");
             cardimg.src = "testcard2.png";     
            document.getElementById("maindiv").appendChild(card);
            document.getElementById(String(cardnum)).appendChild(cardimg);
            cardnum +=1;
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
}