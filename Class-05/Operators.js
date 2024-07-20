var add = 2 + 4;
console.log(add);
// assignment operators
var pizzaPrize = 1000;
var tax = 150;
//let total = pizza Prize + tax; // long way
// console.log(total);
pizzaPrize += tax; //short way pizzaPrize = pizzaPrize + tax
console.log("Pizza Prize +", pizzaPrize); // 100 + 150 = 1150
var dataBasePassword = "12345"; // when i created my account 
var maraPasswordJoMaDaalRahaHo = 12345;
console.log("Line no 19", dataBasePassword == maraPasswordJoMaDaalRahaHo);
console.log("Line no 20", dataBasePassword === maraPasswordJoMaDaalRahaHo);
//not equal
var password = "12345";
var confirmPassword = "12345";
console.log("Line no 26", password != confirmPassword); //boolean
console.log("Line no 27", password !== confirmPassword); //boolean
//String Comparison
var text1 = "A";
var text2 = "B";
var results = text1 < text2;
console.log("Result:", results);
