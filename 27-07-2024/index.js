const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '12345'
    },
    faviourateFruits: ["apple", "watermelon"],
    increaseAgeByOne: function () {
        this.age += 1;
    },
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

const person1 = person; // shallow copy

// console.log(person1);
// person.gender = 'male';
// console.log(person1);
// person.firstName = "John32";
// console.log(person1);

// object desctructing
const person2 = { ...person } 
// person2.firstName = "person2";
// console.log(person);
// person.firstName = "John32";
// console.log(person2);
console.log(person2.address);
person.address.city = "ABD";
console.log(person2.address);
    // it will make a deep copy of premitive data type and shallow copy of non primitive types
// const { firstName, lastName } = person;
// console.log(person1);
// console.log(firstName + ' ' + lastName);