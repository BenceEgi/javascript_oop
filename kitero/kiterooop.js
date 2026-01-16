class Student{
    constructor(name){
        this.name = name;
        this.askedQuestionNumber = 0;
    }

    askQuestion() {
        console.log("???");
        this.askedQuestionNumber++;
    }
}

class StudentWithWork extends Student{
    constructor(name){
        super(name);
        this.workDone = 0;
    }

    doWork(){
        this.workDone++;
    }
}

const newStudent = new Student("Nev");
console.log(newStudent);
newStudent.askQuestion();
console.log(newStudent);

const newStudent2 = new Student("Nev2");
console.log(newStudent2);

const studentWithWork = new StudentWithWork("Munkas osztaly");
console.log(studentWithWork);
studentWithWork.askQuestion();
studentWithWork.doWork();
console.log(studentWithWork);