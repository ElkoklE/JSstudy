'use strict';
// alert('Hello'); 

// const result = confirm('Are you here?');

// const answer = prompt('a u loh?', 'yep!');












const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?','');

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('Error');
            i--;
        }   
    }

    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log('Error');
    }

    console.log(personalMovieDB);



















// let i = 5;
// while (i <11){
//     console.log(i);
//     i++;
// }

// for( let i = 20; i>=10; i--){
//     console.log(i);
//     if(i == 13){
//         break;
//     }
// }

// for( let i = 2; i<=10; i++){
    
//     if(i %2===0){
//        console.log(i);
//     }

// }


// let i = 2;
// while (i<=16 ){
//     if (i%2 ===0){
//         i++;
//     }else{
//         console.log(i);
//         i++;
//     }

// }


// const arrayOfNumbers = [];
// for(let i = 5; i<=10; i++){
//     arrayOfNumbers.push(i);
// }
// console.log(arrayOfNumbers);
// return arrayOfNumbers;



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i< arr.length; i++){
//     result.push(arr[i]);
// }
// console.log(result);
// return result;



// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

// for(let i = 0; i<data.length; i++){
//     if(typeof(data[i]) === 'number') {
//         result.push(data[i] * 2);
//     } else {
//         result.push(data[i] +' - done');
//     }
// }

// console.log(result);
// return result;



// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

// for(let i = 0; i<data.length; i++){
//     result.unshift(data[i]);
// }
// console.log(result);
// return result;



//ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM

// const lines = 5;
// let result = '';

// for(let i = 0; i<=lines; i++){
//     for(let j = 0; j< lines - i; j++){
//         result += " ";
//     }
//     for(let j = 0; j<2 * i + 1; j++){
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

//ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM



// function sayName(a) {
//     const b = `Hello, ${a}!`;
//     return b;
// }
// sayName('Andy');



// function numArr(i) {
//     const a = i-1;
//     const b = i+1;
//     let arr = [a, i, b];
//     console.log(arr);
// }
// numArr(4);


// function getMathResult(a, b) {
//     const arr = [];
//     arr.push(a);
//     for(let i=2; i <= b; i++){
//         arr.push(a*i);
        
//     }
//     console.log(arr);
// }

// getMathResult(3, 2);





//ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM

// function getMathResult(a, b) {
//     if(typeof(b) != 'number' || b <= 0) {
//         return a;
//     }

//     let str = '';
//     for(let i=1; i <= b; i++){
//         if (i === b){
//             str += `${i*a}`;
//         } else {
//             str += `${a*i}---`;
//         }
//     }
//     console.log(str);
//     return str;
// }
// getMathResult(3, 3);

//ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM ALARM
