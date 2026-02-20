/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from './functions.js'
 */
import {Manager} from "./manager.js";

export class FormController{
    /**
     * @type {HTMLFormElement}
     */
    #form
    /**
     * @type {Manager}
     */
    #manager
    /**
     * @type {FormField[]}
     */
    #formFieldElemList

    /**
     *
     * @param {FormFieldType[]} formFieldList
     * @param {Manager} manager
     */
    constructor(formFieldList, manager) {
        this.#manager = manager;
        this.#form = document.createElement("form");

        this.#formFieldElemList = [];
        for (const obj of formFieldList){
            this.#formFieldElemList.push(new FormField(obj.id, obj.name, obj.label, obj.required, this.#form))
        }
        this.#form.appendChild(document.createElement("br"));

        const submitButton = document.createElement("button");
        submitButton.innerText = 'Küldés';

        this.#form.addEventListener('submit', (e) => {
            e.preventDefault();
            const elem = this.#createElement();
            console.log(elem);
            if (elem){
                this.#manager.addElement(elem);
                e.target.reset();
            }
        });

        this.#form.appendChild(submitButton);
        document.body.appendChild(this.#form);
    }

    /**
     * @return {ColspanType | RowspanType | null}
     */
    #createElement(){
        const result = {}
        let valid = true;
        for (const input of this.#formFieldElemList)
            if (input.validate())
                result[input.name] = input.value;
            else
                valid = false
        if (valid) {
            return result
        }
        else {
            return null;
        }
    }
}

class FormField{
    /**
     * @type {HTMLInputElement}
     */
    #input
    /**
     * @type {string}
     */
    #name
    /**
     * @type {boolean}
     */
    #required
    /**
     * @type {HTMLDivElement}
     */
    #errDiv

    get value(){
        return this.#input.value ? this.#input.value : undefined;
    }

    get name(){
        return this.#name
    }

    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {string} labelContent
     * @param {boolean} required
     * @param {HTMLFormElement} parent
     */
    constructor(id, name, labelContent, required, parent) {
        const div = document.createElement("div");

        const label = document.createElement("label");
        label.innerText = labelContent;
        label.htmlFor = id;
        div.appendChild(label);

        div.appendChild(document.createElement("br"));

        const input = document.createElement("input");
        input.id = id;
        input.name = name;
        div.appendChild(input);

        parent.appendChild(div);
        this.#input = input;
        this.#name = name;

        //VALIDATION SETUP
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        div.appendChild(errorDiv);

        this.#required = required;
        this.#errDiv = errorDiv;
    }

    /**
     * @return {boolean}
     */
    validate(){
        let res = true;
        if (this.#required && !this.value){
            res = false;
            this.#errDiv.innerText = "Kötelező!";
        }
        else {
            this.#errDiv.innerText = "";
        }

        return res;
    }
}