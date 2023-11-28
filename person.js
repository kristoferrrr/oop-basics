class Person {
  constructor(name) {
    this.name = name;
    this.birthYear = null;
  }

  setDateOfBirth(year) {
    this.birthYear = year;
  }

  getDateOfBirth() {
    return this.birthYear;
  }

  age() {
    if (this.birthYear === null) {
      return -1; // Vanust ei saa arvutada ilma sünniaastata
    }

    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getName() {
    return this.name;
  }

  description() {
    return `${this.name} - ${this.age()} aastane`;
  }
}

let person = new Person("John Doe");
person.setDateOfBirth(1990);

console.log("Nimi:", person.getName());
console.log("Sünniaasta:", person.getDateOfBirth());
console.log("Vanus:", person.age());
console.log("Kirjeldus:", person.description());