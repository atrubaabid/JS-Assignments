// Q1
//  var studentName = [];

// Q2
// let studentNames = new Array();

// Q3
// var stringsArray = ["apple", "banana" , "Mango", "Orange"];

// Q4
// var numberArry= [11,22,33,44,55,66];

// Q5
// var booleanArray = [true, false, true, false];

// Q6
// var mixedarry = ["apple", 12, true, null];

// Q7
// var EduQualification = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M . Phil",
//   "PhD",
// ];

// document.write("Qualification <br>");
// for (var i = 0; i < EduQualification.length; i++) {
//   document.write(i + ") " + EduQualification[i] + "<br>");
// }

// Q8
// var studentName = ["Atruba", "Rida", "Raza"];
// var studentScore = [480, 330, 230];
// var totalMarks = 500;

// for (let i = 0; i < studentName.length; i++) {
//   var Percentage = (studentScore[i] / totalMarks) * 100;
//   document.write("Score of " + studentName[i] +" is "+ studentScore[i] +". Percentage "+ Percentage + "% <br>");
// }

// Q9

// var colorsArr = ["red", "yellow", "brown"];
// document.write(colorsArr + "<br>");
// // a
// var start_add_colr = prompt("Enter color to add beginning");
// colorsArr.unshift(start_add_colr);
// document.write(colorsArr + "<br>");
// // b
// var end_add_colr = prompt("Enter color to add Ending");
// colorsArr.push(end_add_colr + "<br>");
// document.write(colorsArr + "<br>");
// // c
// var start_add_colr2 = prompt("Enter color to add beginning");
// colorsArr.unshift(start_add_colr2);
// document.write(colorsArr + "<br>");
// // d
// colorsArr.shift();
// document.write(colorsArr + "<br>");
// // e
// colorsArr.pop();
// document.write(colorsArr + "<br>");
// // f
// var index = +prompt("which index you like to add color");
// var newcolor = prompt("which color you like to add that index");
// colorsArr.splice(index, 0, newcolor);
// document.write(colorsArr + "<br>");

// // G
// var index2 = +prompt("which index you like delt");
// var COLORSdelt = prompt("how many colors you want to delet");
// colorsArr.splice(index2, COLORSdelt);
// document.write(colorsArr + "<br>");

// Q10
// var scores = [320, 230, 480, 120];
// document.write("Scores of Students :" + scores + "<br>");

// scores.sort(function (a, b) {
//   return a - b;
// });

// document.write("Ordered Scores of Students :" + scores);

// Q11

// var cities =["Karachi", "Lahore", "Islamabad" , "Quetta", "Peshawar"];
// document.write(cities + "<br>");
// document.write(cities.slice(2,4));

// Q12
// var arr = ["This ", " is ", " my ", " cat"];
// // arry
// document.write(arr + "<br>");
// //string
// var result= arr.join("");
// document.write(result);

// Q13    FIFO
// let arr = [];
// arr.push("A");
// arr.push("B");
// arr.push("C");
// document.write(arr + "<br>");
// let first = arr.shift();
// let second = arr.shift();

// document.write("remove elements " + first , second + "<br>");
// document.write(arr);

// Q14      LIFO
// let arr = [];
// arr.push("A");
// arr.push("B");
// arr.push("C");
// document.write(arr + "<br>");
// let first = arr.pop();
// let second = arr.pop();

// document.write("remove elements " + first , second + "<br>");
// document.write(arr);

// Q15
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < arr.length; i++) {
//   document.write("<option>" + arr[i] + "</option>");
// }

// document.write("</select>");

// COMPLETED



// ______________________________________________COMPLETE_____________________________________________________
