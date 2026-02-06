/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from './functions.js'
 */
import {Manager} from "./manager.js";
import {Table} from "./table.js";
import data from "./data.json" with {type: 'json'};
import {addColspanRow} from "./functions.js";

const manager = new Manager();
const table = new Table(data.colspanHeaderArray, manager);
table.setAppendRow(addColspanRow)

for (const colType of data.colspanDataArr){
    manager.addElement(colType);
}