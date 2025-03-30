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

// class Person {
//     name: string;
//     age: number;
//     status: boolean;
//
//     // constructor(public name: string, public age: number, public status: boolean)
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//
//     greeting?: (str: string) => string;
// }
//
// let user = new Person("Tangos", 60, true);
//
//
// let users: Person[] = [
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
// console.log(users);
// console.log(user);

// interface IUser {
//     id: string;
//     name: string;
//     email: string;
//     address: {
//         city: string;
//     };
// }
//
// fetch('https://jsonplaceholder.typicode.com/users/3')
//     .then((response: Response) => response.json())
//     .then((data: IUser) => {
//         const outputElement = document.getElementById('output');
//
//         if (!outputElement) return;
//         outputElement.innerHTML = `
//       <h2>Дані користувача:</h2>
//       <p><strong>№:</strong> ${data.id}</p>
//       <p><strong>Ім'я:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Місто:</strong> ${data.address.city}</p>
//     `;
//     })
//     .catch((error: Error) => {
//         console.error("Помилка:", error);
//         const outputElement = document.getElementById('output');
//         if (outputElement) {
//             outputElement.innerHTML = `<p style="color: red;">Помилка: ${error.message}</p>`;
//         }
//     });

// interface IUser {
//     id: string;
//     name: string;
//     email: string;
//     address: {
//         city: string;
//     };
// }
//
// async function foobar<T>(url: string): Promise<T> {
//     const response = await fetch(url);
//
//     if (!response.ok) {
//         const error = new Error(`HTTP error! Status: ${response.status}`);
//         (error as any).status = response.status;
//         throw error;
//     }
//
//     return await response.json() as T;
// }
//
// async function fetchAndDisplayUser() {
//     try {
//         const user = await foobar<IUser>('https://jsonplaceholder.typicode.com/users/3');
//
//         const outputElement = document.getElementById('output');
//         if (!outputElement) return;
//
//         outputElement.innerHTML = `
//             <h2>Дані користувача:</h2>
//             <p><strong>№:</strong> ${user.id}</p>
//             <p><strong>Ім'я:</strong> ${user.name}</p>
//             <p><strong>Email:</strong> ${user.email}</p>
//             <p><strong>Місто:</strong> ${user.address.city}</p>
//         `;
//     } catch (error) {
//         console.error("Помилка:", error);
//         const outputElement = document.getElementById('output');
//         if (outputElement) {
//             outputElement.innerHTML = `<p style="color: red;">Помилка: ${error instanceof Error ? error.message : 'Невідома помилка'}</p>`;
//         }
//     }
// }
//
// fetchAndDisplayUser()
//     .catch(error => console.error("Необроблена помилка:", error));

fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(response => response.json())
    .then(json => console.log(json))