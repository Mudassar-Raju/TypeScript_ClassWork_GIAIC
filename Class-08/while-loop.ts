//basic syntax of while loop
//while (condition){
  //statement
//}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
  
};
console.log("--------------");


let ramadanDay = 1;
let isRamadan = true;

while(isRamadan){
  if(ramadanDay === 30){
    isRamadan = false;
    console.log("Ramadan is over.");
    
  }else{
    console.log("its Ramadan Cream Bro!");
    
  }
  ramadanDay++;
  
};
console.log("-------------------");

//Basic Syntax of do while loop
//do {
  //statement
//}while (condition);

const isFoodFresh = false;
do{
  console.log(("eating...."));
  
}while(isFoodFresh);

//do while
let j = 11;
//do while loop execute the statement first then check the condition
do{
  console.log(7, "x", j, "=", 7 * j );
  j++;
}while(j<=10);