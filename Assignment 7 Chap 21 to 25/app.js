// Q1

// var firstName = prompt("ENTER YOR FIRST NAME");
// var lastName = prompt("ENTER YOR LAST NAME");
// var fullName = firstName + " " + lastName;
// alert("Good Morning " + fullName);



// Q2

// var userFavMob = prompt("Enter yor Favorite mobile model");
// var output = userFavMob.length;
// document.writeln("My Favorite Phone is: " + userFavMob + "<br>");
// document.writeln("Length of string: " + output);


// Q3


// var word = "Pakistan";
// document.writeln("String: " + word + "<br>");
// document.writeln("Index of 'n': " + word.indexOf("n") + "<br>");
// document.writeln("Index of 'n': " + word.indexOf("P") + "<br>");
// document.writeln("Index of 'n': " + word.indexOf("i") + "<br>");
// document.writeln("Index of 'n': " + word.indexOf("z") + "<br>");

// Q4

// var word = "Hello World";
// document.writeln("String: " + word + "<br>");
// document.writeln("Index of 'n': " + word.lastIndexOf("l" , 4) + "<br>");
// document.writeln("Index of 'n': " + word.indexOf("e") + "<br>");
// document.writeln("Index of 'n': " + word.indexOf("o") + "<br>");
// document.writeln("Index of 'n': " + word.indexOf("z") + "<br>");

// Q5

// var word = "Pakistani";
// document.writeln("String: " + word + "<br>");
// document.writeln("Character at 3rd index: " + word.charAt(3) + "<br>");


// Q6

// var firstName = prompt("ENTER YOR FIRST NAME");
// var lastName = prompt("ENTER YOR LAST NAME");
// // var fullName = firstName + " " + lastName;
// alert("Good Morning " + firstName.concat(" ", lastName, " ",  firstName));


// Q7

// var word = "Hyderabad";
// var output = word.replace("Hyder", "Islam");
// document.writeln( "string: " + word + "<br>");
// document.writeln("after replacement: " + output);



// Q8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var output = message.replaceAll("and" , "&");
// document.writeln("after replacement: " + output);


// Q9

// var input = "472"
// var num = Number(input);
// var num1 = parseInt(input);
// var num2 = parseFloat(input);
// document.writeln("value: " + input + "<br>");
// document.writeln("Type: " + typeof input + "<br>");
// document.writeln("value: " + num + "<br>");
// document.writeln("Type: " + typeof num + "<br>");
// document.writeln("Type: " + typeof num1 + "<br>");
// document.writeln("Type: " + typeof num2 + "<br>");


// Q10

// var user = prompt("Enter any word");
// var output = user.toUpperCase();
// document.writeln(output);


// Q11

// var user = prompt("Enter your name");
// var output = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
// console.log(output);


// Q12

// var num = 35.36 ;
// var output = num.toString();
// console.log(num);
// console.log(output);


// Q13

// let user = prompt("Enter yor name");

// for(i=0; i<user.length; i++){
//     let code = user.charCodeAt(i);
//     if(code == 33 || code == 44 || code == 46 || code == 64){
//         alert("Don't use any special character");
//         break
//     }



// }


// Q14

// let user = prompt("what do you find here?").toLowerCase();
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// for (i=0; i<A.length; i++){
//     if (user == A[i]){
//         console.log("item is available"); 
//     }else{
//         console.log("item is not available"); 
//     }
//     break;
// }


// =====================================================================================




// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter an item to search:");

// // convert both input and array items to lowercase for case-insensitive search
// userInput = userInput.toLowerCase();

// let found = false;

// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert(userInput + " is available in the list.");
// } else {
//     alert(userInput + " is NOT available in the list.");
// }



// Q15


// let user = prompt("Enter yor password");
// // let number = 
// if (user.length < 6 ){
//      alert("Password must be at least 6 characters long!");

// }

// if (user.charCodeAt(0)=== (number >= 48 && nmber <= 57)){
//     alert("It should not start with a number");

// }








// Q16


// var university = "University of Karachi";
// var output = university.split("");
// console.log(output);


// for (i = 0; i < university.length; i++) {
//     let by = university[i] + "\n";

//     console.log(by);

// }




// Q17

// let userInput = prompt("enter your username");
// document.writeln("user input: "+userInput+ "<br>");
// document.writeln("last character of input: " + userInput.charAt(userInput.length-1));


// Q18


// const str = " the the the quick brown fox jumps over  lazy dog";

// let output = str.toLowerCase().split(" ");
// let count = 0;
// let found = false;

// for (i = 0; i < output.length; i++) {
//    if (output[i] == "the") {
//       count++;
//       found = true;
//    }

// }

// if (found) {
//    console.log("There are " + count + " occurrence of word 'the'");

// } else {console.log("Ooooppsss");
// }










































