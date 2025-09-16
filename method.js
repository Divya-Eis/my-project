class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
fullname() {
    return this.firstName + " " + this.lastName;
  }
}
    let person1 = new Person("Divya", "Jyothi");
    let person2 = new Person ("Ramya", "Sirisha");

    console.log(person1.fullname());
    console.log(person2.fullname());
