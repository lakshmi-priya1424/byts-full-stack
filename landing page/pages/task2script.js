const inputTemp =document.getElementById('inputTemp');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;
let text ="This is the basic Temperature Conversion\n      task which has convert\n       the celcius to Fahrenheit\nand vice versa";
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
function convert(){
    temp=Number(inputTemp.value);
    if(toFahrenheit.checked){
        temp=(temp * (9/5))+32;
        result.textContent = `The Fahrenheit is ${temp.toFixed(2)}`;


    }else if(toCelsius.checked){
        temp=(temp -32)*(5/9);
        result.textContent = `The Celsius is ${temp.toFixed(2)}`;


    }else{
        result.textContent = `Please select a unit and Try!`;  
    }

}
