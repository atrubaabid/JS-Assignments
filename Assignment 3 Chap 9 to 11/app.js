// Q1

// var cityName = prompt("Enter your city name");
// if(cityName === "karachi"){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Sorry! your not write karachi");
// }

// Q2

// var gender = prompt("Enter your Gender");
// if (gender === "male") {
//     document.write("Good Morning Sir");
// } else if (gender === "female") {
//     document.write("Good Morning Ma'am");
// } else {
//     document.write("you enter wrong gender");
// }

// Q3
// var road_traffic_signal_color = prompt("Enter traffice signal light color");
// if (road_traffic_signal_color === "red") {
//   document.write("MUST STOP");
// } else if (road_traffic_signal_color === "yellow") {
//   document.write("READY TO MOVE");
// } else if (road_traffic_signal_color === "Green") {
//   document.write("MOVE NOW");
// } else {
//   document.write("wrong color");
// }

// Q4

// var remainingFuel = prompt("Enter your remaining fuel in liter of car");

// if(remainingFuel <= 0.25 ){
//     document.write("Please refill the fuel in your car your fuel is very low " + remainingFuel + " liter");
// } else{
//     document.write("your fuel is OK "  + remainingFuel + " liter");

// }

// Q5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q6

// var obtMarks = prompt("Enter you Obtained Marks");
// var total_marks = 300;
// var percentage = (obtMarks / total_marks) * 100;
// var grade;
// var remarks;

// document.write("Total marks : " + total_marks + "<br>");
// document.write("Obtained marks : " + obtMarks + "<br>");
// document.write("Percentage : " + percentage + "% <br>");

// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else if (percentage < 60) {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.write("Grade : " + grade + "<br>");
// document.write("Remarks : " + remarks + "<br>");

// Q7
// var secretNum = 4;
// var usernum = +prompt("Guess the secret number");
// if (usernum === secretNum) {
//   document.write("Bingo! Correct Answer");
// } else if (usernum === secretNum - 1) {
//   document.write("Close enough to the Correct Answer");
// } else {
//   document.write("Wrong Answer");
// }

// Q8
// var num = +prompt("Enter a number");
// if (num % 3 === 0) {
//   document.write("YES! " + num + " is divisible by 3" );
// } else {
//   document.write("NO! " + num + " is not  divisible by 3" );

// }

// Q9

// var num = +prompt("Enter any number to check if its even or odd");
// if (num % 2 === 0) {
//   document.write(num + " is even");
// } else if (num % 2 !== 0) {
//   document.write(num + " is odd");
// }

// Q10

// var temp = +prompt("Enter current temperature");
// if (temp >= 40) {
//     document.write("Its too hot outside");
// } else if (temp >= 30) {
//     document.write("The weather today is normal");
// } else if (temp >= 20) {
//     document.write("Today weather is cool");
// } else if (temp >= 10){
//     document.write("OMG! Today weather is soo cool");
// }

// Q11

// var num1 = +prompt("Enter num1");
// var num2 = +prompt("Enter num2");
// var operator = prompt("Enter any operator  +  -  *  /  % ");
// if (operator === "+") {
//     document.write("Your Addition is : " + (num1 + num2));
// } else if (operator === "-") {
//     document.write("Your Subtraction is : " + (num1 - num2));
// } else if (operator === "*") {
//     document.write("Your Multiplication is : " + num1 * num2);
// } else if (operator === "/") {
//     document.write("Your Division is : " + num1 / num2);
// } else if (operator === "%") {
//     document.write("Your Remainder is : " + (num1 % num2));
// }
