import {Calculator} from "./functions.js";
import {InputField, Button} from "./elements.js";

const number1 = new InputField("number", "f1", "f1", "number1: ");
number1.addToElement(document.body);
addBreak();

const number2 = new InputField("number", "f2", "f2", "number2: ");
number2.addToElement(document.body);
addBreak();

const button = new Button("Calculate");
button.addToElement(document.body);
addBreak();
button.button.addEventListener("click", onClick);

const div = document.createElement("div");
document.body.appendChild(div);

function onClick(){
    const calc = new Calculator(number1.value, number2.value, "+");
    const {result}  = calc.calculate();
    div.innerText = result;
}

function addBreak(){
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
}