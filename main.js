var x
var y
var down


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
}
function release(){
    down = false
    console.log('released')
}

function start(){
    document.getElementById("testcard").style.left = String(0)+"px";
    document.getElementById("testcard").style.top = String(0)+"px";
}