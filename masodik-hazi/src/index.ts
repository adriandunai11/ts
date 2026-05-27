import { Product } from "./Product";
import { Inventory } from "./Inventory";
import { User } from "./User";
import { OrderStatus } from "./enums/OrderStatus";

const laptop = new Product("P001", "Laptop", 349990, "15 colos, 16GB RAM");
const phone = new Product("P002", "Okostelefon", 129990);
const headset = new Product("P003", "Fejhallgató", 24990, "");

const inventory = new Inventory();
inventory.addProduct(laptop);
inventory.addProduct(phone);
inventory.addProduct(headset);

console.log("");
inventory.listAllProducts();

console.log("\nKeresés: 'Laptop'");
const found = inventory.findProduct("Laptop");
if (found) {
    console.log("Megtalálva: " + found.getInfo());
} else {
    console.log("Nem található.");
}

const user = new User("U001", "Teszt Felhasználó", "teszt.felhasznalo@gmail.com");
console.log("");
user.placeOrder([laptop, headset], inventory);

const myOrder = user["orders"][0];

console.log("");
user.printOrderHistory();

console.log("");
inventory.removeProduct("P002");
inventory.listAllProducts();
