import {ViewElement} from "./view_element.js";
import {AuthorManager} from "./author_manager.js";

export class ImportView extends ViewElement{
    /**
     * @type {AuthorManager}
     */
    #manager

    /**
     *
     * @param {string} id
     * @param {AuthorManager} manager
     */
    constructor(id, manager) {
        super(id);
        this.#manager = manager;
        const resultDiv = document.createElement("div");
        this.div.appendChild(resultDiv);
        this.#manager.addImportResultCallback = (message) => {
            resultDiv.innerText = message;
            setTimeout(() => {
                resultDiv.innerText = ''
            }, 1500);
        }

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        this.div.appendChild(fileInput);
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = () => {
                const fileContent = reader.result;
                const fileContentLines = fileContent.split("\n");
                /**
                 * @type {import(".").AuthorType[]}
                 */
                const result = [];
                for (const line of fileContentLines){
                    const data = line.split(";");
                    /**
                     * @type {import(".").AuthorType}
                     */
                    const newRow = {
                        author: data[0],
                        work: data[1],
                        concept: data[2]
                    }
                    result.push(newRow);
                }
                this.#manager.addElementList(result);
            };
        })

        const exportButton = document.createElement("button");
        exportButton.innerText = "Export";
        this.div.appendChild(exportButton);
        exportButton.addEventListener("click", (e) => {
            const a = document.createElement("a");
            const fileContent = this.#manager.getExportString();
            const file = new Blob([fileContent]);
            const fileURL = URL.createObjectURL(file);
            a.href = fileURL;
            a.download = 'export.csv';
            a.click();
            URL.revokeObjectURL(a.href);
        })
    }
}