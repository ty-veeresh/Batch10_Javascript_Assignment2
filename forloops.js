var number=[10,20,30,40];
console.log("map method");
var res=number.map((elemet,index)=>{
if(element%2==0){
    return element;
}
else{
    return elemet+1;
}
})