//#Animal class
class Animal {  
  type: string;
  name: string;
  age: number;
  color: string;
  description: string;
  completed: boolean;

  constructor(type:string,name:string,age:number,color:string,description:string,completed:boolean){
    this.type = type;
    this.name = name;
    this.age = age;
    this.color=color;
    this.description=description;
    this.completed = completed;

  }
  complete () {
    this.completed= true;
  }
  incomplete(){
    this.completed = false
  }
}
const lucky = new Animal ("dog","lucky",2,"Black & White","lucky playing in Park with ball.",false);
console.log(lucky);
lucky.complete();
console.log(lucky);


