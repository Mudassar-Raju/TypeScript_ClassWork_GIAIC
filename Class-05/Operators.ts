let add :number = 2 + 4;

console.log(add);

// assignment operators
let pizzaPrize: number = 1000
let tax: number = 150;

//let total = pizza Prize + tax; // long way
// console.log(total);

pizzaPrize += tax; //short way pizzaPrize = pizzaPrize + tax
console.log("Pizza Prize +",pizzaPrize); // 100 + 150 = 1150


let dataBasePassword: string = "12345"; // when i created my account 
let maraPasswordJoMaDaalRahaHo: any = 12345;

console.log("Line no 19",dataBasePassword == maraPasswordJoMaDaalRahaHo);
console.log("Line no 20",dataBasePassword === maraPasswordJoMaDaalRahaHo);

//not equal

let password: string = "12345";
let confirmPassword: string = "12345";
console.log("Line no 26", password != confirmPassword); //boolean
console.log("Line no 27",password !== confirmPassword);//boolean

//String Comparison
let text1 :string = "A";
let text2 :string = "B";
let results = text1 < text2;
console.log("Result:",results);
