"use strict";
//enum
//Default index is 0 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Black"] = 4] = "Black";
    Color[Color["White"] = 5] = "White";
    Color[Color["Orange"] = 6] = "Orange";
    Color[Color["Purple"] = 7] = "Purple";
})(Color || (Color = {}));
;
const myFavoriteColor = Color.Orange;
console.log(myFavoriteColor); // logs 6
//Numeric enums - Fully Initialized enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Notfound"] = 404] = "Notfound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
// log 404
console.log(StatusCodes.Notfound);
//log Accepted
console.log(StatusCodes.Accepted);
//Food enum
var Food;
(function (Food) {
    Food[Food["Biryani"] = 0] = "Biryani";
    Food[Food["Burger"] = 1] = "Burger";
    Food[Food["Chips"] = 2] = "Chips";
})(Food || (Food = {}));
;
//log 0
console.log(Food.Biryani);
//log 2
console.log(Food.Chips);
const MyFoodOrder = Food.Biryani;
if (MyFoodOrder === Food.Biryani) {
    console.log("I Ordered Biryani.");
}
else if (MyFoodOrder === Food.Chips) {
    console.log("I Ordered Chips.");
}
else if (MyFoodOrder === Food.Burger) {
    console.log("I Ordered Burger.");
}
;
//Enum string - fully Initialized
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "Your Order has been Placed";
    OrderStatus["Processing"] = "Your order is being Processed";
    OrderStatus["Shipped"] = "Your order has been Shipped";
    OrderStatus["Delivered"] = "Your order has been Delivered";
})(OrderStatus || (OrderStatus = {}));
;
//create a variable "orderStatus" and assign it the value  "orderStatus.Delivered"
let orderStatus = OrderStatus.Delivered;
console.log(orderStatus);
