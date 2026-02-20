/**
 * @typedef {{label: string,name: string, id: string, type: string,required: boolean }} FormFieldType
 * @typedef {{name: string, colspan?: number}} HeaderType
 * @typedef {{neve: string, kor: string, szerelme1: string, szerelme2?: string}} ColspanType
 * @typedef {{nemzet: string, szerzo: string, mu: string, szerzo2?: string, mu2?: string}} RowspanType
 */

/**
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType} element
 * @return {void}
 */
export function appendColSpan(tbody, element) {
    const tr = document.createElement('tr');
    const isUndefined = element.szerelme2 === undefined;
    for (const key in element){
        if (isUndefined && key === 'szerelme2') continue
        const td = document.createElement('td');
        td.innerText = element[key];
        if (key === 'szerelme1' && isUndefined)
            td.colSpan = 2;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}