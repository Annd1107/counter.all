var i=0;
var too = document.getElementsByTagName('p')[0];
function prev(){
    i--;
    too.innerHTML = i;
    if(i<0){
        too.style.color = "red";
    }
    if(i>0){
        too.style.color = "green";
    }
    if(i==0){
        too.style.color = "black";
    }
}
function next(){
    i++;
    too.innerHTML = i;
    if(i<0){
        too.style.color = "red";
    }
    if(i>0){
        too.style.color = "green";
    }
    if(i==0){
        too.style.color = "black";
    }
}
function reset(){
    i=0;
    too.innerHTML = i;
    if(i==0){
        too.style.color = "black";
    }
}