"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const Inventory_1 = require("./Inventory");
const User_1 = require("./User");
const laptop = new Product_1.Product("P001", "Laptop", 349990, "15 colos, 16GB RAM");
const phone = new Product_1.Product("P002", "Okostelefon", 129990);
const headset = new Product_1.Product("P003", "Fejhallgató", 24990, "");
const inventory = new Inventory_1.Inventory();
inventory.addProduct(laptop);
inventory.addProduct(phone);
inventory.addProduct(headset);
console.log("");
inventory.listAllProducts();
console.log("\nKeresés: 'Laptop'");
const found = inventory.findProduct("Laptop");
if (found) {
    console.log("Megtalálva: " + found.getInfo());
}
else {
    console.log("Nem található.");
}
const user = new User_1.User("U001", "Teszt Felhasználó", "teszt.felhasznalo@gmail.com");
console.log("");
user.placeOrder([laptop, headset], inventory);
const myOrder = user["orders"][0];
console.log("");
user.printOrderHistory();
console.log("");
inventory.removeProduct("P002");
inventory.listAllProducts();
