// const obj1 = {
//   name : 'Marisol'
// };
//
// const obj2 = {
//   name : 'Marisol'
// };
//
// const array = ['cat'];
// const array = ['cat'];

// const age = prompt('How old are you?');
// console.log(age >+ 21);

// const num = '42.3';
// console.log(num);
// console.log(+num);


// const str1 = 'You are my brother Tori';
// const str2 = new String(str1);

// console.log(0.1 + 0.2);
// console.log(.333333333333333333333333);
//
// console.log(0 / 0);


//
// console.log('number', number);  add number
// number++;
// console.log('number', number);
// number++;
// console.log('number', number);subtract number
// number--;
// console.log('number', number);

// let cartTotal = 0;
//
// const item = 9.99;
// const item2 = 7.99;
// const discount = .5;
//
// console.log(cartTotal += item);
// console.log(cartTotal += item2);
// console.log(cartTotal -= discount);

// //ANSWER TO TRY IT OUT//
// let prompt1 = + prompt('Give me a num 1', 10);
// let  prompt2 = +prompt('Give me a num 2', 10);
//
// alert(prompt1 + prompt2);

// const prompt1=prompt('Give me a number', 10);
// const prompt2=prompt('Give another number', 10);
//
// parseInt(prompt1 + prompt2);
// alert(parseInt(prompt1 + prompt2));




// CONTROL FLOW

// const firstName = "Nathan";
//
// if (firstName === 'Jacob') {
// // if statement is true this runs
// // indent within the cury braces
// console.log('Your name is Jacob');
// } else if (firstName === "Nathan") {
//   console.log('Your name is Ben');
// // if statement is false this runs
// console.log('Your name is not Nathan or Jacob');
// }
//
// const magicNumber = 4;
//
// if (magicNumber === 1) {
//   console.log(1);
// } else if (magicNumber === 2 ) {
//   console.log(2);
// } else {
//   console.log('No Magic Number for you');
// }

// && -> both sides must be equate to true
// || -> either side can be true
// if (true || false ) {
//   console.log('Great success!');
// }
//
// const age = 80;
//
// if (age === 21 || age === 80) {
//   console.log('You are 21 or 80');
// }
//
//
// const lastName = '';
//
// // Looking for truthy ot falsy values
//
// if (!lastName) {
//   console.log(`You did not provide a last name`);
// }

/**
* prompt user for name
* if they provide a new alert their name
* if they provide no value alert that your need a valid name
**/

// const userName = prompt ('What is your name?');
//
// if(userName) {
//   alert(userName);
// } else {
//   alert('Invalid name');
// }


// refactatre the above
// const userName = prompt ('What is your name?');
//
// userName ? alert(userName): alert('Invalid name');
//
// // elvalution ? true false;
//
// false ? console.log(true) : console.log(false);

// const superHero = prompt('What is your favorite superhero?');
//
// switch (superHero) {
//   case 'Batman':
//     console.log('Batman is awesome');
//     break;
//    case 'Superman':
//      console.log('Superman is not better than Batman');
//      break;
//    case 'Robin;
//    console.log('gtfo');
//     break:
//  default:
//     console.log('Sorry, not a superhero.');
// }



// const age = prompt('How old are you?');
// if (age >= 18) {
//   console.log('You are old enough');
// } else (age <= 18 ) {
//   console.log('You are not old enough');
// }
const userAge = +prompt('What is your age?');

if (userAge >= 18 && userAge <=80) {
  const likesStarWar = confirm('Do you likes Star War?');

  if (likesStarWar){
    alert('may the force be with you!');
} else if (userApp > 80) {
  const likesPrunes = ('Do you like Prunes?');

  likesPrunes ? alert('Gross'): alert('I guess you are alright');
} else {
  alert('You are not old enough');
 }
}
