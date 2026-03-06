import { ViewElement } from './view_element.js';

export class FormView extends ViewElement{
    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        super(id);
        this.div.innerText = "form";
    }
}