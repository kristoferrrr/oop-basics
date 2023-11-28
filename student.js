class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.grades = [];
    this.id = null;
  }

  setId(id) {
    if (this.id === null) {
      this.id = id;
    }
  }

  getId() {
    return this.id;
  }

  getGrades() {
    return this.grades;
  }

  addGrade(course, grade) {
    this.grades.push({ course, grade });
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return -1;
    }

    const sum = this.grades.reduce((total, grade) => total + grade.grade, 0);
    return sum / this.grades.length;
  }

  description() {
    return `${this.name} - Õpilane`;
  }
}

let student = new Student("John Doe");
student.setId(1);
student.addGrade("Math", 90);
student.addGrade("History", 80);

console.log("ID:", student.getId());
console.log("Hinded:", student.getGrades());
console.log("Keskmine hinne:", student.getAverageGrade());
console.log("Kirjeldus:", student.description());