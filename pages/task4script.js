let text ="A simple calculator is a tool used\n to perform basic arithmetic operations\n like addition, subtraction,\n multiplication, and division. ";
let sec = 100;
const pContent = document.getElementById("task-content");
let res="";
function updateTaskScreen(res){
    pContent.innerText = res;
}
function updateTask(i){
    res+=text.charAt(i);
    updateTaskScreen(res); 
}
for(let i =0;i<text.length;i++){

     setTimeout(() => updateTask(i),i*50);
}
let equation = "";
        const result = document.getElementById("result");
        function updateScreen() {
            result.innerText = equation;
        }
        function update(val) {
            equation += val;
            updateScreen();
        }
        function answer() {
            try {
                equation = eval(equation);
                updateScreen();
            } catch (error) {
                alert("Invalid Equation");
            }
        }
        function removeLast() {
            equation = equation.slice(0, equation.length - 1);
            updateScreen();
        }