class Course {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGrade(student, grade) {
    this.grades.push({ student, grade });
  }

  getGrades() {
    return this.grades;
  }

  getAverageGrade() {
    const gradeValues = this.grades.map(entry => entry.grade);
    if (gradeValues.length === 0) {
      return -1;
    }

    const sum = gradeValues.reduce((total, grade) => total + grade, 0);
    return sum / gradeValues.length;
  }

  description() {
    return this.name;
  }
}

let mathCourse = new Course("Math");

// Lisame mõned hinded kursusele
let student1 = { name: "John Doe" };
let student2 = { name: "Jane Smith" };

mathCourse.addGrade(student1, 90);
mathCourse.addGrade(student2, 85);

console.log("Kursus:", mathCourse.description());
console.log("Hinded:", mathCourse.getGrades());
console.log("Keskmine hinne:", mathCourse.getAverageGrade());