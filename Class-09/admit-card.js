//Admit Card
function admitCard(name, //parameter
rollNumber, //Parameter
courseName, // parameters 
emailName // Optional Parameter
) {
    if (courseName === void 0) { courseName = "Typescript"; }
    //Function body
    console.log("name:" + name);
    console.log("Roll Number: ".concat(rollNumber));
    console.log("course Name:", courseName);
    if (emailName) {
        console.log("email:", emailName);
    }
}
;
admitCard("iqbal", 3796, "AI", "mudassariqbalk134@gmail.com");
admitCard("iqbal", 3779, "Typescript");
