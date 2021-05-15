var btn= document.getElementById("test");
btn.addEventListener("click",addTech);
var list=document.getElementById("tech");
function addTech(){
    var x=document.createElement("li")
    x.innerText="javascript";
    console.log(list.childNodes);
    list.insertBefore(x,list.childNodes[4]);
}

function removeTech(){
    list.removeChild(list.firstElementChild)
}