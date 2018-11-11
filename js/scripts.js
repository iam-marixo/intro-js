const firstName = prompt('What is your first name?');/*users first name*/
const lastName = prompt('What is your last name?');/*users last name*/

console.log(firstName);/*logs users first name in console*/

alert (lastName);/*alert for last name*/

const birthday = new Date(prompt('What is your birthday?'));/*asks users for birthday*/
confirm(`Is your birthday correct: ${birthday}`);/*confirmation for users birthday*/

alert(`You birthday is: ${birthday}`);/*displays users birthday*/
