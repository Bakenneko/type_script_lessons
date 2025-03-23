"use strict";
// let a:string = 'hello world';
// let b:string = 'hello world';
// let c:string = 'hello world';
// console.log(a,b,c);
// type PersonType = {
//     name: string;
//     age: number;
//     status: boolean;
// };
// let users: PersonType[] = [
//     { name: "John", age: 25, status: true },
//     { name: "Alice", age: 30, status: false },
//     { name: "Bob", age: 22, status: true },
//     { name: "Emma", age: 27, status: false },
//     { name: "Michael", age: 35, status: false },
//     { name: "Sophia", age: 29, status: false },
//     { name: "David", age: 40, status: true },
//     { name: "Olivia", age: 23, status: false },
//     { name: "James", age: 31, status: true },
//     { name: "Lily", age: 26, status: false }
// ];
//
// console.log(users);
//
// interface IPerson {
//     name: string;
//     age: number;
//     status: boolean;
//     greeting: (str: string) => string;
// }
//
// let users: IPerson[] = [
//     { greeting: (str) => `Hi ${str}!`, name: "John", age: 25, status: true },
//     { greeting: (str) => `Hi ${str}!`, name: "Alice", age: 30, status: false },
//     { greeting: (str) => `Hi ${str}!`, name: "Bob", age: 22, status: true },
//     { greeting: (str) => `Hi ${str}!`, name: "Emma", age: 27, status: false },
//     { greeting: (str) => `Hi ${str}!`, name: "Michael", age: 35, status: false },
//     { greeting: (str) => `Hi ${str}!`, name: "Sophia", age: 29, status: false },
//     { greeting: (str) => `Hi ${str}!`, name: "David", age: 40, status: true },
//     { greeting: (str) => `Hi ${str}!`, name: "Olivia", age: 23, status: false },
//     { greeting: (str) => `Hi ${str}!`, name: "James", age: 31, status: true },
//     { greeting: (str) => `Hi ${str}!`, name: "Lily", age: 26, status: false }
// ];
//
// users.forEach(user => {
//     console.log(user.greeting(user.name));
// });
class Person {
    // constructor(public name: string, public age: number, public status: boolean)
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
}
let user = new Person("Tangos", 60, true);
let users = [
    { greeting: (str) => `Hi ${str}!`, name: "John", age: 25, status: true },
    { greeting: (str) => `Hi ${str}!`, name: "Alice", age: 30, status: false },
    { greeting: (str) => `Hi ${str}!`, name: "Bob", age: 22, status: true },
    { greeting: (str) => `Hi ${str}!`, name: "Emma", age: 27, status: false },
    { greeting: (str) => `Hi ${str}!`, name: "Michael", age: 35, status: false },
    { greeting: (str) => `Hi ${str}!`, name: "Sophia", age: 29, status: false },
    { greeting: (str) => `Hi ${str}!`, name: "David", age: 40, status: true },
    { greeting: (str) => `Hi ${str}!`, name: "Olivia", age: 23, status: false },
    { greeting: (str) => `Hi ${str}!`, name: "James", age: 31, status: true },
    { greeting: (str) => `Hi ${str}!`, name: "Lily", age: 26, status: false }
];
console.log(users);
console.log(user);
