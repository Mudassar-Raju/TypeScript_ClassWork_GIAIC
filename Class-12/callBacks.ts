//Understanding callbacks
//A callback is a function that is passed as an argument to another function.
//and are called after the completion of the function.

//Real-Life Example: Imagine you're planning a picnic.
//You start by making paulo, then packing stuff
//each step depend on the previous one being completed.

function cookPaulo(callback: () => void) {
  console.log("Preparing Paulo........");

  setTimeout(() => {
    console.log("Paulo is Ready!");
    callback(); // call the callback
    
  },3000); 
  
};
 function packBegs(): void {
  console.log("Packing stuff like drinks,Snacks, and water bottles etc.................");
  
  setTimeout(() => {
    console.log("Bags are Packed!");
    
  },4000);
 };

 cookPaulo(packBegs);
 