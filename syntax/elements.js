import {Calculator} from "./functions.js";

class InputField{
    /**
     *  @type {HTMLInputElement}
     */
    #field
    /**
     * @type {HTMLLabelElement}
     */
    #label

    constructor(type, name, id, labelText){
        this.#field = document.createElement("input");
        this.#field.type = type;
        this.#field.name = name;
        this.#field.id = id;

        this.#label = document.createElement("label");
        this.#label.innerText = labelText;
        this.#label.htmlFor = id;
    }

    get value(){
        return this.#field.value;
    }

    /**
     * @param {HTMLElement} element
     * @return {void}
     */
    addToElement(element){
        element.appendChild(this.#label);
        element.appendChild(this.#field);
    }
}

class Button{
    /**
     * @type {HTMLButtonElement}
     */
    #button
    #operation

    constructor(text, inp1, inp2, op, resultDiv) {
        this.#button = document.createElement("button");
        this.#button.innerText = text;
        this.#operation = op;
        document.body.appendChild(this.#button);
        this.#button.addEventListener("click", this.#calc(inp1, inp2, resultDiv));
    }

    #calc(num1, num2, resultDiv){
        return () => {
                const calc = new Calculator(Number(num1.value), Number(num2.value), this.#operation);
                const {result}  = calc.calculate();
                console.log(result);
                resultDiv.innerText = result;
            }
    }
}

export {InputField, Button};