let text ="This is the Simple Addition Task\n      which takes two inputs\n      and provide the result";
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
function add(){
    let value1 = parseInt(document.getElementById("value-a").value);
    let value2 =  parseInt(document.getElementById("value-b").value);
   let res = value1+value2;
    const result = document.getElementById("result");
    result.innerText = `Result is ${res}`;
}
