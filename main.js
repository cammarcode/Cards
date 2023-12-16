var x
var y

addEventListener('mousemove', tellPos, false);
addEventListener('click', click);
addEventListener('click', click);



function tellPos(p){
    info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + document.getElementById("dropzone").style.marginRight;
    x = p.pageX
    y = p.pageY
    document.getElementById("dropzone").style.marginLeft = x;
    document.getElementById("dropzone").style.marginRight = y;
  }

function click(){
    info.innerHTML = info.innerHTML + '<br />clicking'
}

function drag(ev){
    ev.preventDefault()
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById("dropzone").style.left = x;
    document.getElementById("dropzone").style.right = y;
}

function allowDrop(ev){
    ev.preventDefault()
}

function drop(ev) {
    ev.preventDefault();
    ev.target.appendChild(document.getElementById("testcard"));
  }
