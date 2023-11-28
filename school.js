class Course {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }

  addGrade(studentId, grade) {
    this.grades[studentId] = grade;
  }

  getGrade(studentId) {
    return this.grades[studentId];
  }
}

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = null;
    this.grades = {};
  }

  setId(id) {
    if (this.id === null) {
      this.id = id;
    }
  }

  getId() {
    return this.id;
  }

  addGrade(course, grade) {
    this.grades[course.name] = grade;
  }

  getAverageGrade() {
    const gradeValues = Object.values(this.grades);
    if (gradeValues.length === 0) {
      return -1;
    }

    const sum = gradeValues.reduce((total, grade) => total + grade, 0);
    return sum / gradeValues.length;
  }
}

class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.courses = [];
  }

  addCourse(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
    }
  }

  addStudent(student) {
    if (this.students.includes(student) || student.age < 6 || student.age > 18) {
      return;
    }

    const id = this.students.length + 1; // Unikaalne id
    student.setId(id);
    this.students.push(student);
  }

  addStudentGrade(student, course, grade) {
    if (this.students.includes(student) && this.courses.includes(course)) {
      student.addGrade(course, grade);
      course.addGrade(student.getId(), grade);
    }
  }

  getStudents() {
    return this.students;
  }

  getCourses() {
    return this.courses;
  }

  getStudentsOrderedByAverageGrade() {
    return this.students.slice().sort((a, b) => {
      const averageA = a.getAverageGrade();
      const averageB = b.getAverageGrade();
      return averageB - averageA;
    });
  }
}

let school = new School("Example School");

let mathCourse = new Course("Math");
let historyCourse = new Course("History");

let student1 = new Student("John Doe", 15);
let student2 = new Student("Jane Smith", 16);

school.addCourse(mathCourse);
school.addCourse(historyCourse);

school.addStudent(student1);
school.addStudent(student2);

school.addStudentGrade(student1, mathCourse, 90);
school.addStudentGrade(student1, historyCourse, 85);

school.addStudentGrade(student2, mathCourse, 80);
school.addStudentGrade(student2, historyCourse, 95);

console.log("Students:", school.getStudents());
console.log("Courses:", school.getCourses());
console.log("Students Ordered By Average Grade:", school.getStudentsOrderedByAverageGrade());