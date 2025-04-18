
import createItem from "./services/itens.js";
import * as cartService from "./services/cart.js";

const cart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!\n");

const item1 = await createItem("HD Road Glide Miniature", 40, 2);
const item2 = await createItem("HD Street Glide Miniature", 40, 2);
const item3 = await createItem("HD Sportster 883 2014 Miniature", 35, 1);
const item4 = await createItem("HD Heritage Classic Miniature", 55, 2);
const item5 = await createItem("HD Low Rider S", 50, 3)
const item6 = await createItem("HD CVO Road Glide", 65, 2)

await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)
await cartService.addItem(myWishList, item3)
await cartService.deleteItem(cart, item4.name)
// await cartService.addItem(cart, item4)
await cartService.addItem(cart, item5)
await cartService.addItem(myWishList, item6)

await cartService.removeItem(cart, 1);

await cartService.displayCart(cart);
await cartService.displayWishList(myWishList);



// console.log(myWishList)


console.log("Shopee Cart TOTAL is:\n");
await cartService.calculateTotal(cart);