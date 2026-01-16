function Student(name){
    this.name = name;
    this.askedQuestionNumber = 0;
}

Student.prototype.askQuestion = function() {
    console.log("???");
    this.askedQuestionNumber++;
}

function StudentWithWork(name){
    Student.call(this, name);
    this.workDone = 0;
}
Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype);

StudentWithWork.prototype.doWork = function() {
    this.workDone++;
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