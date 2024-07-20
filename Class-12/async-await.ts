//Understanding async/await
//async/await is a syntax that allows you to write asynchronous code
//without using callbacks or promises.

//async/await makes working with promises easier by allowing us to 
//write asynchronous code that looks like synchronous code.

function checkWeather4(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("Checking the Weather.......");
    setTimeout(() => {
      console.log("Weather is Clear!");
      resolve();

      
    },3000);
    
  });
}

function prepareBurger4(): Promise<void> {
  return new Promise((resolve, reject) => {
  console.log("Preparing Burger...");
  setTimeout(() => {
    console.log("Burger is Ready!");
    resolve();

    
  },2000);
  
  });
}

function packBegs4(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("Packing Stuff.............");

    setTimeout(() => {
      console.log("Begs are Packed!");
      resolve();
      
    },3000);
    
  });
}

function loadCar4(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("Loading the Car.........");

    setTimeout(() => {
      console.log("Car is Loaded!");
      resolve();

      
    },2000);
    
  });
}

console.log("Before Picnic function");

async function preparePicnic() {
  try{
    await checkWeather4();
    await prepareBurger4();
    await packBegs4();
    await loadCar4();
    console.log("Picnic Preparations are complete! Here we go!!");
    
  }catch (error){
    console.error("Failed to Prepare for  the Picnic:",error);
    
  }
}

preparePicnic();
console.log("After Picnic Function");
