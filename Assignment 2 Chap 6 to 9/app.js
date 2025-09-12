// Chap 6
// Q1
// var a = 10;
// document.write("Result <br>" );
// document.write("The value of a is : " + a + "<br>");
// document.write(".....................  <br>");
// document.write("The value of ++a is : " + ++a + "<br>");
// document.write(" Now the value of a is : " + a + "<br>");
// document.write(".....................  <br>");
// document.write("The value of a++ is : " + a++ + "<br>");
// document.write(" Now the value of a is : " + a + "<br>");
// document.write(".....................  <br>");
// document.write("The value of --a is : " + --a + "<br>");
// document.write(" Now the value of a is : " + a + "<br>");
// document.write(".....................  <br>");
// document.write("The value of a-- is : " + a-- + "<br>");
// document.write(" Now the value of a is : " + a + "<br>");

// Q2
// var a = 2,b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is : "+ a + "<br>" );
// document.write("b is : " + b + "<br>" );
// document.write("result is :" +result + "<br>" );
// document.write(--a  + "<br>");
// document.write(--a - --b  + "<br>");
// document.write(--a - --b + ++b + "<br>");
// document.write(--a - --b + ++b + b--  + "<br>");

// Q3
// var userName = prompt("Enter your name");
// alert("Welcome " + userName + " to our website");

// Q4
// var num = +prompt("Enter a number of multiplication" , "5");

// for (i = 1; i <=10; i++) {
//   document.write(num + " x " + i + " = " + num * i + "<br>");
// }

// Q5
// var Sub1 = prompt("Enter sub1 name");
// var Sub2 = prompt("Enter sub2 name");
// var Sub3 = prompt("Enter sub3 name");
// var totalMarks = 100;
// var obt1 = +prompt("enter sub1 marks" + Sub1);
// var obt2 = +prompt("enter sub2 marks" + Sub2);
// var obt3 = +prompt("enter sub3 marks" + Sub3);
// var obtainedMarks = obt1 + obt2 + obt3;
// document.write("<h1>Subject Total marks Obtained Marks Percentage</h1> <br>");
// document.write("<table  cellpadding='10'>");
// document.write(
//     "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"
// );

// document.write(
//     "<tr><td>" +
//     Sub1 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obt1 +
//     "</td><td>" +
//     Math.round((obt1 / totalMarks) * 100) +
//     "%</td></tr>"
// );
// document.write(
//     "<tr><td>" +
//     Sub2 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obt2 +
//     "</td><td>" +
//     Math.round((obt2 / totalMarks) * 100) +
//     "%</td></tr>"
// );
// document.write(
//     "<tr><td>" +
//     Sub3 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obt3 +
//     "</td><td>" +
//     Math.round((obt3 / totalMarks) * 100) +
//     "%</td></tr>"
// );

// document.write("</table>");


// COMPLETED
