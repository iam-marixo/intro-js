// const myFirstArray = ['Marisol', 19, true, 'Fresno', ['Nate', 'Corina', 'Papa']];
//
// console.log(myFirstArray[4][1]);

// const geekwise = [['Web for beginners', true], ['Mobile friendly', true], ['Intro to JS', false]];
//
// console.log(geekwise[1][0]); // -> mobile friendly
// console.log(geekwise[0][0]); // -> web for beginners
// console.log(geekwise[2][1]); // -> intro to js
// console.log(geekwise[1]); // -> will give entire array + true

// console.log(geekwise.length);
//
// var favEvery = ['sweetener', 26, true, 2018];
// console.log(favEvery, favEvery.length[1]);

// const arr = ['Cat'];

// console.log(arr[10]); // a 10th value dont exist

// const favMovie1 = ['Beauty and The Beast', 'Bella'];
// const favMovie2 = ['Toy Story 3', 'Woody'];
// const favMovie3 = ['Notebook', 'Noah'];
// const favMovie4 = ['Girl in Process', 'Mission Impossible'];
// const favMovie5 = ['', ''];
//
//  const favoriteMovies = [favMovie1, favMovie2, favMovie3, favMovie4, favMovie5];
//  alert(favoriteMovies);
//
//  const favoriteMoviesTitles = [favMovie1[0], [favMovie2[0], [favMovie3[0], [favMovie4[0], [favMovie5[0]];
//  alert(favoriteMoviesTitles);
//
//  console.log('least fav: ', favMovie3);
//  console.log('most fav: ', favMovie5);
//
//  alert(favoriteMovies.length);


////// LOOPS //////
 // DONT DO WHILE LOOPS //
// let counter = 0;
//
// while (counter <= 10) {
//     console.log(counter);
//
//     counter++;
// }

// FOR LOOPS // repeats 11 times
// for(let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// const names = ['Nathan', 'Corina', 'Marisol', 'Victoria'];

// for(let i = 0; i < names.length; i++ ){
//   console.log(names[i]);
// }

// const albums = ['Sweetener 1','Sweetener 2', 'Sweetener 3'];

// for(let i = 0; i < albums.length; i++) {
//   console.log(albums[i]);
// }

// for(let name of names) {
//   console.log(name);
// }

// names.forEach(name => console.log(name));
// for (let album of albums) {
//   console.log(album);
//
//   if(album === 'Sweetener 2'){
//     break;
//   }
// }

//
// const person = {
//   name: 'Marisol',
//   name: 'Nathan',
//   age: 19
// };
// console.log(person.name); // calling name or age
//
// for (let key in person) {
//   console.log(person[key]);
// }

// const user = [];
//
// console.log(user);
//
// user.name = prompt('Give me your name');
// user.age = prompt('How old are you?');
//
// console.log(user);

const movies = [['Last Jedi', 2018], ['Baby Driver', 2017], ['The Departed', 2014]];

// for( let i = 0; i < movies.length; i++){
//   if(movies[i][0] === 'The Departed' ){
//     alert(`Your favorite movie is ${movies[i][0]} and it was made in ${movies[i][1]}`);
//   }
// }

// for (let movie of movies) {
//   if(movie[0] === 'The Departed')
//   alert(`Your favorite movie is ${movies[i][0]} and it was made in ${movies[i][1]}`);
// }

movies.forEach(movie => {
  // for (let movie of movies) {
    if(movie[0] === 'The Departed')
    alert(`Your favorite movie is ${movie[0]} and it was made in ${movie[1]}`);
  }
})


// console.log(movies[2]);
//
// alert(movies[2] , [1]);
