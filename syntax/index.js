import {InputField, Button} from "./elements.js";

//INPUT FIELDS AND RESULT DIV
const number1 = new InputField("number", "f1", "f1", "number1: ");
number1.addToElement(document.body);
addBreak();

const number2 = new InputField("number", "f2", "f2", "number2: ");
number2.addToElement(document.body);
addBreak();

const div = document.createElement("div");
document.body.appendChild(div);

//CREATE BUTTONS
new Button("Plus", number1, number2, "+", div);
addBreak();
 new Button("Minus", number1, number2, "-", div);
addBreak();
new Button("Multiplication", number1, number2, "*", div);
addBreak();

//ADD BREAKS
function addBreak(){
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
}