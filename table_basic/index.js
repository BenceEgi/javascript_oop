/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @callback CallbackFn
 * @param {HTMLTableSectionElement}
 * @return {void}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class Table{
    /**
     * @param {HTMLTableSectionElement}
     */
    #tbody
    get tbody() {return this.#tbody}

    /**
     * @param {HeaderType[]} headerArray
     */
    constructor(headerArray) {
        this.#tbody = makeTableBodyWithHeader(headerArray);
    }

    /**
     * @param {CallbackFn} func
     */
    addRow(func){
        func(this.#tbody);
    }
}

class ColspanTable extends Table{
    /**
     * @param {HeaderType[]} headerArray
     */
    constructor(headerArray) {
        super(headerArray);
    }

    /**
     *
     * @param {ColspanRowType[]} rowArr
     */
    render(rowArr){
        renderColspanBody(this.tbody, rowArr);
    }
}

class RowspanTable extends Table{
    /**
     * @param {HeaderType[]} headerArray
     */
    constructor(headerArray) {
        super(headerArray);
    }

    /**
     *
     * @param {RowspanRowType[]} rowArr
     */
    render(rowArr){
        renderRowspanBody(this.tbody, rowArr);
    }
}

/**
 *
 * @param {string} text
 * @return {HTMLButtonElement}
 */
function createButton(text){
    const button = document.createElement("button");
    button.innerText = text;
    document.body.appendChild(button);
    return button;
}


const colspanTable = new ColspanTable(colspanHeaderArr);
colspanTable.render(colspanBodyArr);

const rowspanTable = new RowspanTable(rowspanHeaderArr);
rowspanTable.render(rowspanBodyArr);


createButton("Rowspan elem hozzaadasa").addEventListener("click", onClickRow.bind(rowspanTable));
createButton("Colspan elem hozzaadasa").addEventListener("click", onClickCol.bind(colspanTable));

function onClickRow(){
    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút",
        concepts1: "képvers",
        title2: "Búcsú",
        concepts2: "avantgárd"
    };

    this.addRow(function (body) {
        const tr = document.createElement("tr");
        body.appendChild(tr);
        const author = document.createElement("td");
        tr.appendChild(author);
        author.innerText = obj.author;
        const title1 = document.createElement("td");
        tr.appendChild(title1);
        title1.innerText = obj.title1;
        const concepts1 = document.createElement("td");
        tr.appendChild(concepts1);
        concepts1.innerText = obj.concepts1;

        if (obj.title2 && obj.concepts2) {
            const tr2 = document.createElement("tr");
            body.appendChild(tr2);
            author.rowSpan = 2;
            const title2 = document.createElement("td");
            tr2.appendChild(title2);
            title2.innerText = obj.title2;
            const concepts2 = document.createElement("td");
            tr2.appendChild(concepts2);
            concepts2.innerText = obj.concepts2;
        }
    });
}

function onClickCol(){
    /**
     * @type {ColspanRowType}
     */
    const obj = {
        author: "Appolliniare",
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",
        concepts2: "Emlékezés",
    };

    this.addRow(function (body) {
        const tr = document.createElement("tr");
        body.appendChild(tr);
        const author = document.createElement("td");
        tr.appendChild(author);
        author.innerText = obj.author;
        const title1 = document.createElement("td");
        tr.appendChild(title1);
        title1.innerText = obj.title;
        const concepts1 = document.createElement("td");
        tr.appendChild(concepts1);
        concepts1.innerText = obj.concepts;

        if (obj.concepts2) {
            const concepts2 = document.createElement("td");
            tr.appendChild(concepts2);
            concepts2.innerText = obj.concepts2;
        }
        else{
            concepts1.colSpan = 2;
        }
    });
}