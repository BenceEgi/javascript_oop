class Calculator{
    constructor(num1, num2, opString) {
        this.num1 = Number(num1);
        this.num2 = Number(num2);
        this.operation = this.#initCalc(opString);
    }

    calculate(){
        const result = this.operation(this.num1, this.num2);
        return {result};
    }

    #initCalc(operation){
        if (operation === "+") return (a,b) => a+b
        if (operation === "-") return (a,b) => a-b
        if (operation === "*") return (a,b) => a*b
        if (operation === "/") return (a,b) => a/b
        if (operation === "**") return (a,b) => a**b
    }
}
export {Calculator};