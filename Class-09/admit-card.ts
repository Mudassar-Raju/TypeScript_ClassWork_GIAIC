//Admit Card
function admitCard (
  name: string, //parameter
  rollNumber: number,//Parameter
  courseName: string = "Typescript", // parameters 
  emailName?: string // Optional Parameter
):void {
//Function body
console.log("name:" + name);
console.log(`Roll Number: ${rollNumber}`);
console.log("course Name:",courseName);
if(emailName){
console.log("email:",emailName)
}};

admitCard("iqbal",3796,"AI","mudassariqbalk134@gmail.com");
admitCard("iqbal",3779,"Typescript",);
