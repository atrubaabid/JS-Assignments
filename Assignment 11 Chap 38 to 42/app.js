// Q1

// function power(a, b) {
//     let result = 1;
//     for (i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// console.log(power(2, 3));


// Q2

// function leapyear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         return true
//     }else{
//         return false
//     }

// }

// let year = +prompt("Enter to check the year is leap or not");

// if(leapyear(year)){
//     console.log(year+ " is leap");

// }else{
//     console.log(year+ " is not leap");

// }


// function leapyear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year + " is leap");

//     } else {
//         console.log(year + " is not leap");

//     }

// }

// let year = +prompt("Enter to check the year is leap or not");
// leapyear(year)




// Q3

// function  AOT(a,b,c){
//     let S= ( a + b + c ) / 2;
//     let area = Math.sqrt(S*(S - a)*(S - b)*(S - c));
//     return area;
// }

// console.log(AOT(10,13,14).toFixed());



// function getSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function triangleArea(a, b, c) {
//     let S = getSemiPerimeter(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// let a = 3;
// let b = 4;
// let c = 5;

// console.log("Area of triangle:", triangleArea(a, b, c));



// Q4

// function avg(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3
// }

// function percentage(m1, m2, m3) {

//     let total = m1 + m2 + m3;
//     let percen = (total / 300) * 100;
//     return percen;

// }

// function mainfunc(m1, m2, m3) {

//     let ag = avg(m1, m2, m3);
//     let per = percentage(m1, m2, m3);

//     console.log("Average Marks " + ag);
//     console.log("Percentage " + per);


// }


// mainfunc(80,70,60);




// Q5


// function characterFind(str, val) {
//     let result=0;
//     for (i = 0; i < str.length; i++) {
//         if (str[i] === val) {
//             result++

//         }
//     }

//     return result
// }

// console.log(characterFind("Atrubaaaaa", "a"));


// function characterFind(str, val) {
//     let result=0;
//     let word;

//     let s = str.split(" ");    
//     for (i = 0; i < s.length; i++) {
//         if (s[i] === val) {
//             result++
//             console.log(word = s[i]);


//         }
//     }

//     return result
// }

// console.log(characterFind("My name is atruba", "My"));


// Q6

// function vowelsRemover(sentence){
//     let result ="";
//     let sen = sentence.toLowerCase();
//     let vow = "aeiou";
//     for(i=0; i<sen.length; i++){
//         if(!vow.includes(sen[i])){
//             result+=sen[i];
//         }
//     }

//     return result
// }


// console.log(vowelsRemover("my name is atruba"));


// Q7

// function sameVowelCount(sen) {
//     let count=0;
//     let sent = sen.toLowerCase();

//     for (i = 0; i < sent.length - 1; i++) {

//         switch (sent[i]) {
//             case "a": case "e": case "i": case "o": case "u":
//                 switch (sent[i+1]) {
//                     case "a": case "e": case "i": case "o": case "u":
//                         count++

//                 }
//         }


//     }

//     return count;
// }


// console.log(sameVowelCount("Pleases read this application and give me gratuity"));

// Q8






















