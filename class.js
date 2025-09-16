class Dog {
    constructor(name, breed, color) {
this.name = name;
this.breed = breed;
this.color = color;
    }
    bark(){
        console.log(this.name  +  "says woof woof!");
    }
}

let dog1 = new Dog("Rocky", "Labrador", "black");
let dog2 = new Dog("Jacky", "Chihuahua", "White");

console.log(dog1.name);
console.log(dog2.color);

dog1.bark();
dog2.bark();