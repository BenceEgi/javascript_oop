import {Calculator} from "./functions.js";
import {InputField, Button} from "./elements.js";

const number1 = new InputField("number", "f1", "f1", "number1: ");
number1.addToElement(document.body);
addBreak();

const number2 = new InputField("number", "f2", "f2", "number2: ");
number2.addToElement(document.body);
addBreak();

const div = document.createElement("div");
document.body.appendChild(div);

const buttonPlus = new Button("Plus", number1, number2, "+", div);
addBreak();
const buttonMinus = new Button("Minus", number1, number2, "-", div);
addBreak();
const buttonMultiply = new Button("Multiplication", number1, number2, "*", div);
addBreak();

function addBreak(){
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
}