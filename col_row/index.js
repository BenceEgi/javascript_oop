/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from './functions.js'
 */
import {Manager} from "./manager.js";
import {Table} from "./table.js";
import data from "./data.json" with {type: 'json'};
import {appendColSpan} from "./functions.js";
import {FormController} from "./form.js";

const manager = new Manager();
const table = new Table(data.colspanHeaderArray, manager);
table.setAppendRow(appendColSpan)

for (const colType of data.colspanDataArr){
    manager.addElement(colType);
}
document.body.appendChild(document.createElement("br"));

const formController = new FormController(data.colspanFormFieldList, manager);