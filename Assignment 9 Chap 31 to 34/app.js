// Q1
//  var date = new Date();
//  console.log(date);

//  Q2
// var months = [
//   "JANUARY",
//   "FEBRURY",
//   "MARCH",
//   "APRIL",
//   "MAY",
//   "JUN",
//   "JULY",
//   "AUGUST",
//   "SEPTEMBER",
//   "OCTOBER",
//   "NOVEMBER",
//   "DECEMBER",
// ];
// var date = new Date();
// var month = date.getMonth();
// var currentMonth = months[month];
// alert(currentMonth);

// Q3
// var days=["SUN","MON", "TUE","WED", "THU", "FRI", "SAT"];
// var date = new Date();
// var day = date.getDay();
// var currentDay = days[day];
// alert("Today is " + currentDay);

// Q4

// var days=["SUN","MON", "TUE","WED", "THU", "FRI", "SAT"];
// var date = new Date();
// var day = date.getDay();
// if(days === 0 && days === 6){
//     alert("its fun day")
// }else{
//     alert("its study day")
// }

// console.log(days[0] +" "+ days[6]);

// Q5

// var fulldate = new Date();
// var date = fulldate.getDate();
// if(date < 16){
//     console.log("First fifteen days of the month");

// }else if(date >=16 ){
//     console.log("Last days of the month");

// }

// Q6

// var time = new Date().getTime() / (1000*60);
// console.log(time);

// ==========================================================================/////////////

// Q7

// var currenthour = new Date().getHours();
// console.log(currenthour);
// if (currenthour < 12) {
//   console.log("Its AM");
// } else {
//   console.log("Its PM");
// }

// Q8

// var laterDate = new Date(2020, 11, 31);
// console.log(laterDate);


// Q9

// var ramadanStart = new Date("June 18, 2015");

// var today = new Date();

// var differenceInMs = today - ramadanStart;
// console.log(ramadanStart);

// console.log(today);

// console.log(differenceInMs);


// // Convert milliseconds to days
// let daysPassed = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

// // Show the result
// alert("Number of days since 1st Ramadan (June 18, 2015): " + daysPassed);

// ========================================================================================================//



// Q10

// ========================================================================================================//


// Q11

// var date = new Date();
// console.log( "Crrent date: "+date);

// var hour = date.getHours();
// console.log(hour + " hour ago, it was " + date);


// Q12


// var date = new Date();
// var year = date.getFullYear();
// date.setFullYear( year - 100);
// console.log(date);

// Q13

// var year = new Date().getFullYear();
// console.log(year);
// var user = +prompt("what's your age");
// console.log("your Birth year is " + (year - user));

// Q14














