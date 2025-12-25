// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// function time() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     console.log("time: " + theHr + ":" + theMin);

// }

// time();

//  function greetUser(a) {
// //    alert("Hello, there.");
// console.log(a);

//  }

//  greetUser("Hello, there.");


// function showMessage(m, string, num
// ) {
//     alert(m + string + num);}

// var month = "March";
// showMessage(month, "'s winner number is ", 23)

// Q1

// function date(){

// let date = new Date()
// console.log(date);

// // return date

// }

// // console.log(date());
// // date()


// Q2

// function greeting(FN,LN){
// // console.log("Good MOrning", FN, LN);

// let g = "Good Morning " + FN + LN;
// return g

// }

// let o = greeting("Syeda"," Atruba");
// console.log(o);


// Q3

// function add(a,b){
//     return a+b;
// }

// let a = +prompt("Enter any no to add 1");
// let b = +prompt("Enter any no to add 2");

// console.log(add(a,b));




// function add(a,b){
//    console.log(a+b);

// }

// let a1 = +prompt("Enter any no to add 1");
// let b2 = +prompt("Enter any no to add 2");

// add(a1,b2);



// q4

// function three(num1, num2, operator) {
//     let result;
//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         result = num1 / num2;
//     } else {
//         console.log("invalid operator");

//     }

//     return result;

// }


// console.log(three(2,2,"/"));


// function three(num1, num2, operator) {
//     let result;
//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         result = num1 / num2;
//     } else {
//         console.log("invalid operator");

//     }

//     console.log(result);


// }


// three(2,2,"+");


// Q5


// function square(num) {
//     return num * num;
// }


// console.log(square(5));



// Q6

// function factorial(num) {
//     if (num <= 0) {
//         return "Factorial not defined for negative numbers"
//     }

//     let result=1;
//     for (let i = 1; i <= num; i++) {

//         result *= i; 24

//     }

//     return result;
// }

// console.log(factorial(5));





// Q7


// function counting(a, b) {
//     for (i = a; i <= b; i++) {
//         console.log(i);

//     }
// }


// counting(24, 50)


// Q8


// function hypotenuse(base, perpendicular){

//     function result(value){
//         return value * value;
//     }

//     let hypo = result(base) + result(perpendicular);

//     return Math.sqrt(hypo);
// }

// console.log( hypotenuse(2,3));


// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(value) {
//     return value * value;
//   }

//   const hypotenuseSquared =
//     calculateSquare(base) + calculateSquare(perpendicular);

//   return Math.sqrt(hypotenuseSquared);
// }

// console.log(calculateHypotenuse(3, 4)); // 5



// Q9


// function calarea(width,height){
//     return width * height;
// }

// // i. Arguments as value

// console.log(calarea(4,8));

// // i. Arguments as value

// let w = 4;
// let h = 8;
// console.log(calarea(w,h));


// Q10


// function isPalindrome(str){

//     let firstValue = str.toLowerCase();
//    let reverse = firstValue.split("").reverse().join("")
//    console.log(reverse);
   

//    if(firstValue === reverse){
//     return true;
//    }else{
//     return false;
//    }

// }

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));






// ============================================================================

// Q11

// function text(str) {
//     let word = str.split(" ");
//     let result= [];

//     for (i = 0; i < word.length; i++) {

//        let capword = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//        result.push(capword);
//     }

//     return result.join(" ");



// }

// console.log(text("This is my hobby"));


// =================



// function capitalizeFirstLetter(str) {
//   let words = str.split(" ");
//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let capitalWord = word.charAt(0).toUpperCase() + word.slice(1);
//     result.push(capitalWord);
//   }

//   return result.join(" ");
// }

// // Example
// let text = "the quick brown fox";
// console.log(capitalizeFirstLetter(text));







// Q12

// function longWord(str){
//     let word = str.split(" ");
//     let longword = "";

//     for(i=0; i<word.length; i++){
//         if(word[i].length > longword.length){
//             longword = word[i];
//         }
//     }

//    return longword;

// }

// console.log(longWord("my name is atruba pppqq"));



// 13

// function occurance(string, Letter){

//     let count=0;

//     for(i=0; i<string.length; i++){
//         if(string[i]===Letter){
//             count++;
//         }
//     }

//     // return count;

//     console.log(count);
    


// }

// occurance("'JSResourceS.com', 'o'", "e")


// Q14


// function calcCircumference(radius) {
//   let circumference = 2 * Math.PI * radius;
//   console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//   let area = Math.PI * radius * radius;
//   console.log("The area is " + area);
// }

// // Example usage
// calcCircumference(8);
// calcArea(5);














































