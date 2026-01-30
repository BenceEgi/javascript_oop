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

    get field(){
        return this.#field;
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
    constructor(text) {
        this.#button = document.createElement("button");
        this.#button.innerText = text;
    }

    get button(){
        return this.#button;
    }

    /**
     * @param {HTMLElement} element
     * @return {void}
     */
    addToElement(element){
        element.appendChild(this.#button);
    }
}

export {InputField, Button};