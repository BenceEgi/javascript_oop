import { ViewElement } from './view_element.js';
import {AuthorManager} from './author_manager.js'
import {createInputAndErrorDiv} from './gomszab.min.js'
/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

export class FormView extends ViewElement{
    /**
     * @type {AuthorManager}
     */
    #manager
    /**
     * @type {FormField[]}
     */
    #formFieldList
    /**
     * @type {HTMLFormElement}
     */
    #form

    /**
     * 
     * @param {string} id
     * @param {FormFieldType[]} formFieldTypeList
     * @param {AuthorManager} manager
     */
    constructor(id, formFieldTypeList, manager){
        super(id);
        this.#manager = manager;
        this.#formFieldList = [];
        this.#form = document.createElement("form");
        for (const field of formFieldTypeList){
            this.#formFieldList.push(new FormField(field.id, field.label, field.name, this.#form))
        }

        const button = document.createElement("button");
        button.innerText = "Kuldes";
        this.#form.appendChild(button);
        this.#form.addEventListener("submit", (e) => {
            e.preventDefault();
            manager.addElement(this.#createElement());
        })

        const resultDiv = document.createElement("div");
        this.div.appendChild(resultDiv);
        this.div.appendChild(this.#form);

        this.#manager.addElementResultCallback = (result) => {
            resultDiv.innerText = result;
            setTimeout(() => {resultDiv.innerText = ""}, 1500);
        }
    }

    /**
     * @return {Author}
     */
    #createElement(){
        let res = {};
        for (const field of this.#formFieldList){
            if (field.validate()){
                res[field.name] = field.value;
            }
        }
        return res
    }
}

class FormField {
    /**
     * @type {HTMLInputElement}
     */
    #input
    /**
     * @type {HTMLDivElement}
     */
    #errDiv
    /**
     * @type {string}
     */
    #name

    /**
     *
     * @return {string}
     */
    get name(){
        return this.#name
    }

    /**
     *
     * @return {string|undefined}
     */
    get value(){
        return this.#input.value ? this.#input.value : undefined
    }

    /**
     *
     * @param {string} id
     * @param {string} label
     * @param {string} name
     * @param {HTMLElement} parent
     */
    constructor(id, label, name, parent ) {
        const {input, errorDiv} = createInputAndErrorDiv({id, label, name, parent});
        this.#errDiv = errorDiv;
        this.#input = input;
        this.#name = name;
    }

    validate(){
        this.#errDiv.innerText = !this.value ? "Kotelezo" : "";
        return !this.#errDiv.innerText;
    }
}