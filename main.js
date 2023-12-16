var x
var y

addEventListener('mousemove', tellPos, false);
addEventListener('click', click);
addEventListener('click', click);



function tellPos(p){
    info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
  }

function click(){
    info.innerHTML = info.innerHTML + '<br />clicking'
}

function drag(ev){
    ev.preventDefault()
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById("dropzone").style.left = document.getElementById("testcard").style.left;
    document.getElementById("dropzone").style.right = document.getElementById("testcard").style.right;
}

function allowDrop(ev){
    ev.preventDefault()
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
