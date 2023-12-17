var x
var y
var down
var cardnum = 0

addEventListener('mousemove', tellPos, false);
addEventListener('mousedown', click);
addEventListener('mouseup', release);

window.onload = start;

function tellPos(p){
    info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + document.getElementById("testcard").style.top;
    x = p.pageX
    y = p.pageY
    if(down == true){
        document.getElementById("testcard").style.left = String(x-25)+"px";
        document.getElementById("testcard").style.top = String(y-35)+"px";
    }
    
  }

function click(){
    info.innerHTML = info.innerHTML + '<br />clicking';
    console.log(parseInt(document.getElementById("testcard").style.left,10));
    if(x>parseInt(document.getElementById("testcard").style.left) && x < parseInt(document.getElementById("testcard").style.left) + 50 && y>parseInt(document.getElementById("testcard").style.top) && y < parseInt(document.getElementById("testcard").style.top) + 70){
    down = true
    console.log("hit")
    }
    else{
        if(x>parseInt(document.getElementById("deck").style.left) && x < parseInt(document.getElementById("deck").style.left) + 50 && y>parseInt(document.getElementById("deck").style.top) && y < parseInt(document.getElementById("deck").style.top) + 70){
            console.log('doing the thing')
            var card = document.createElement('div');
             card.id = String(cardnum);
             card.class = "card";
             var cardimg = document.createElement("img");
             cardimg.src = "testcard2.png";     
            document.body.appendChild(card);
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
    document.getElementById("testcard").style.left = String(0)+"px";
    document.getElementById("testcard").style.top = String(0)+"px";
    document.getElementById("deck").style.left = String(500)+"px";
    document.getElementById("deck").style.top = String(500)+"px";
}