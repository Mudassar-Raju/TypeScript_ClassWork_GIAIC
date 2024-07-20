//enum
//Default index is 0 
enum Color {
  Red,
  Green,
  Blue,
  Yellow,
  Black,
  White,
  Orange,
  Purple
};

const myFavoriteColor: Color = Color.Orange;

console.log(myFavoriteColor);// logs 6

//Numeric enums - Fully Initialized enums
enum StatusCodes {
  Notfound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
};
// log 404
console.log(StatusCodes.Notfound);

//log Accepted
console.log(StatusCodes.Accepted);

//Food enum
enum Food {
  Biryani,
  Burger,
  Chips
};

//log 0
console.log(Food.Biryani);

//log 2
console.log(Food.Chips);

const MyFoodOrder: Food = Food.Biryani;
if(MyFoodOrder === Food.Biryani){
  console.log("I Ordered Biryani.");
  
}else if (MyFoodOrder === Food.Chips){
  console.log("I Ordered Chips.");
  
}else if (MyFoodOrder === Food.Burger){
  console.log("I Ordered Burger.");
  
};

//Enum string - fully Initialized
enum OrderStatus {
  Placed = "Your Order has been Placed",
  Processing = "Your order is being Processed",
  Shipped = "Your order has been Shipped",
  Delivered = "Your order has been Delivered"
};

//create a variable "orderStatus" and assign it the value  "orderStatus.Delivered"
let orderStatus: OrderStatus = OrderStatus.Delivered;
console.log(orderStatus);

