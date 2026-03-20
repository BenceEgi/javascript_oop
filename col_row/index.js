/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from './functions.js'
 */
import {TableView} from "../author_manager/table_view.js";
import data from "./data.json" with {type: 'json'};
import {appendColSpan} from "./functions.js";
import {FormView} from "../author_manager/form_view.js";
import {ImportView} from "../author_manager/importexport.js";
import {AuthorManager} from "../author_manager/author_manager.js";

const manager = new AuthorManager();
const table = new TableView("table", data.colspanHeaderArray, manager);
table.setAppendRow(appendColSpan)

for (const colType of data.colspanDataArr){
    manager.addElement(colType);
}
document.body.appendChild(document.createElement("br"));

const formController = new FormView("form", data.colspanFormFieldList, manager);
const importView = new ImportView("importexport", manager);