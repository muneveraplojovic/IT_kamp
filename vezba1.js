// a = window.prompt("Unesi broj;");

// if (a % 2 === 0) {
//   console.log("broj je paran");
// } else {
//   console.log("broj je neparan");
// }

//god = 2003;
//mes = 12;
//dan = 13;
//a = window.prompt("Unesite godinu:");
//b = window.prompt("Unesite mesec:");
//c = window.prompt("Unesite dan:");
//console.log(2021 - god);
//console.log(12 - mes);
//console.log(30 - 13);//

// //drugi zadatak/
// a = window.prompt("Unesite prvi broj");
// b = window.prompt("Unesite drugi broj");
// c = window.prompt("Unesite treci broj");
// let d = Math.max(a, b, c);
// console.log(d);

//treci zadatak/
// a = window.prompt("Unesite prvi broj");
// b = window.prompt("Unesite drugi broj");
// c = window.prompt("Unesite treci broj");
// var brojevi = [a, b, c];
// brojevi.sort();
// console.log(brojevi);

// a=
// b=
// c=

// if (a> b && a>c) {
//     console.log ('a', a);
// } else if (b> a && b>c){
//     console.log ('b', b)
// }
// else {console.log ('c', c)
// }

//a = 10;
//b = 10;
//c = 10;

//if (a + b > c && a + c > b && b + c > a) {
//console.log("trougao je moguc");
//} else {
//console.log("trougao je nemoguc");
//}
// pocetna vrednost krajnja vrednost korak//
// for (let i = 0; i < 10; i++) {
//   console.log("Hello world ", i);
// }

// for (let i = 0; i < 10; i = i + 2) {
//   console.log("Hello world ", i);
// }
// for (let i = 0; i < 10; i = i + 3) {
//   console.log("Hello world ", i);
// }
// for (let i = 1; i < 10; i += 2) {
//   console.log("Hello world ", i);
// }

// for (let i = 0; i < 1; i += 2) {
//   console.log("Hello world ", i);
// }
// for (let i = 0; i < 15; i -= 1) {
//   console.log("Hello world ", i);
// } infinite

// for (let i = 18; i > 0; i -= 1) {
//   console.log("Hello world ", i);
// }

// for (let i = 0; i < 101; i += 1) {
//   console.log("Hello world", i);
// }

// for (let i = 0; i < 101; i += 2) {
//   console.log("Hello world", i);
// }

// for (let i = 0; i < 101; i += 5) {
//   console.log("Hello world", i);
// }

// for (let i = 0; i < 5; i++) {
//   broj = Number(prompt("Unesite broj:"));
//   console.log("Uneti broj je:", broj);
// }
// var max = 0;
// for (let i = 0; i < 5; i++) {
//   broj = Number(prompt("Unesite broj:"));
//   console.log(broj);
//   if (broj > max) {
//     max = broj;
//   }
// }
// console.log("Max je:");
// console.log(max);

//od unetih brojeva se odvaja max//
// var max = 0;
// for (let i = 0; i < 5; i++) {
//   broj = Number(prompt("Unesite broj:"));
//   console.log(broj);
//   if (i === 0) {
//     var max = broj;
//   }
//   if (broj > max) {
//     max = broj;
//   }
// }
// console.log("Max je:");
// console.log(max);

// for (let i = 0; i < 15; i++) {
//   let i = prompt("Enter a number: ");
//   if (i % 2 == 0) {
//     console.log("The number is even:", i);
//   } else {
//     console.log("The number is odd:", i);
//   }
// }

// for (let i = 0; i <= 15; i++) {
//   let num = prompt("Enter a number: ");
//   if (num % 2 === 0) {
//     console.log("The number is even:", i);
//   } else {
//     console.log("The number is odd:", i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     continue;
//   }
//   console.log("posle ifa", i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log("javascript");
// }

// for (let i = 0; i < 3; i++) {
//   console.log("je super ");
// }

// for (let i = 0; i < 3; i++) {
//   if (i < 3) {
//     console.log("java");
//   } else {
//     console.log("je super ");
//   }
// }

// broj = 34;
// broj = Number(window.prompt("Unesite broj:"));
// for (let i = 1; i < broj; i++) {
//   console.log(i);
// }

//parne brojeve
// broj = Number(window.prompt("Unesite broj:"));
// for (let i = broj; i > 0; i--) {
//   console.log(i);
// }

// broj = Number(window.prompt("Unesite broj:"));
// for (let i = broj; i > 0; i -= 5) {
//   console.log(i);
// }

// brojDanauGodini = 245;
// mesec = Math.ceil(brojDanauGodini / 30);

// switch (mesec) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:+++x
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
// }

// dan = brojDanauGodini - (mesec - 1) * 30;
// console.log(dan);

// switch (brojDanauGodini % 7) {
//   case 0:
//     day = "Monday";
//     break;
//   case 1:
//     day = "Tuesday";
//     break;
//   case 2:
//     day = "Wednesday";
//     break;
//   case 3:
//     day = "Thursday";
//     break;
//   case 4:
//     day = "Friday";
//     break;
//   case 5:
//     day = "Saturday";
//   case 6:
//     day = "Sunday";
//     break;
// }
// console.log(day);

// a = 635.54;
// console.log(Match.floor(a));
//unesemo brojeve neki max br brojeva i posle da nam odvji koliko ima parnih koliko ne

// broj = 4;
// broj = Number(window.prompt("Unesite brojeve:"));

// if (broj % 2 === 0) {
//   console.log("paran");
// } else {
//   console.log("neparan");
// }

// console.log(object);