let product = { name: "Tshirt",
                price: 100,
                category: "Homme",
                quantity: 100,
                available: "true"
}
    if(product.available){
console.log("product Available");}
let priceTotal = product.price * product.quantity;
console.log("Name :" + product.name);
console.log("Quantity :" + product.quantity);
console.log("Price :" + product.price + "DH");
console.log("Category :" + product.category);
console.log("Price Total :" + priceTotal +"DH");
