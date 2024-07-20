//Promise
//#1
let SirZiaPromise = new Promise((resolve,reject) => {
  resolve("Passed!")
  //reject("Failed!")
})
// SirZiaPromise.then((response) => {
//   console.log(response," Response");
  
// }).catch((error) => {
//   console.log(error," bad luck");
  
// })

//#2
async function promiseStatus(){
  try{
    let response = await SirZiaPromise
  console.log(response);
  
  }catch(error){
    console.log(error);
    
  }
};unbanked
IdleDeadline
promiseStatus()