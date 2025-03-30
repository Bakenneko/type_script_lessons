"use strict";
// let a:string = 'hello world';
// let b:string = 'hello world';
// let c:string = 'hello world';
// console.log(a,b,c);
// Універсальна функція для API запитів
async function foobar(url) {
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.status = response.status;
        throw error;
    }
    return await response.json();
}
// Використання з вашим інтерфейсом IUser
async function fetchAndDisplayUser() {
    try {
        // Використовуємо generic з типом IUser
        const user = await foobar('https://jsonplaceholder.typicode.com/users/3');
        const outputElement = document.getElementById('output');
        if (!outputElement)
            return;
        outputElement.innerHTML = `
            <h2>Дані користувача:</h2>
            <p><strong>№:</strong> ${user.id}</p>
            <p><strong>Ім'я:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Місто:</strong> ${user.address.city}</p>
        `;
    }
    catch (error) {
        console.error("Помилка:", error);
        const outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = `<p style="color: red;">Помилка: ${error instanceof Error ? error.message : 'Невідома помилка'}</p>`;
        }
    }
}
// Викликаємо функцію
fetchAndDisplayUser()
    .catch(error => console.error("Необроблена помилка:", error));
