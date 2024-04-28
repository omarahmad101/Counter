const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
const res = document.getElementById("res")
const counterlabel = document.getElementById("counterlabel")


let count = 0

inc.onclick=function(){
    count++
    counterlabel.textContent = count
}

dec.onclick=function(){
    count--
    counterlabel.textContent = count
}

res.onclick=function(){
    count=0
    counterlabel.textContent = count
}

document.getElementById("add").onclick = function() {
    var count = document.getElementById("noinput").value;
    document.getElementById("counterlabel").textContent = count;
}

