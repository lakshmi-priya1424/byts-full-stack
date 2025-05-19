let text ="A stopwatch is a timepiece designed to measure\n the amount of time that elapses between\n its activation and deactivation.";
let sec = 100;
const pContent = document.getElementById("task-content");
let res="";
function updateScreen(res){
    pContent.innerText = res;
}
function update(i){
    res+=text.charAt(i);
    updateScreen(res); 
}
for(let i =0;i<text.length;i++){

     setTimeout(() => update(i),i*50);
}
let count  = 0;
let timeId;
function start(){
      timeId = setInterval( () => {
        count++;
        document.getElementById("result").textContent = count;
     },1000);
}
function stop(){
   clearInterval(timeId);
}
function reset(){
    count=0;
    document.getElementById("result").textContent = count;
}
