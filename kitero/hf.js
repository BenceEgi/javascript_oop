// Tanyerok function
console.log("Fuggvenyes");
function Glass(){
}

function Plate(color){
    this.color = color;
}

function SmallPlate(color, size){
    Plate.call(this, color);
    this.size = size;
}

function LargePlate(color, size){
    Plate.call(this, color);
    this.size = size;
}

const plate = new Plate("white");
const smallPlate = new SmallPlate("blue", 10);
const largePlate = new LargePlate("red", 40);
const glass = new Glass();

console.log(plate);
console.log(smallPlate);
console.log(largePlate);
console.log(glass);

// Tanyerok class
console.log("Osztalyos");
class ClassGlass{
}


class ClassPlate{
    constructor(color) {
        this.color = color;
    }
}

class ClassSmallPlate extends ClassPlate{
    constructor(color, size) {
        super(color);
        this.size = size;
    }
}

class ClassLargePlate extends ClassPlate{
    constructor(color, size) {
        super(color);
        this.size = size;
    }
}

const classPlate = new ClassPlate("white");
const classSmallPlate = new ClassSmallPlate("blue", 10);
const classLargePlate = new ClassLargePlate("red", 40);
const classGlass = new ClassGlass();

console.log(classPlate);
console.log(classSmallPlate);
console.log(classLargePlate);
console.log(classGlass);