// Task - String Concatenation Challenge
// Create 4 variables to store: product name, price, quantity, and discount percentage
// Calculate the final price: (price × quantity) - (discount percentage of total)
// Create a formatted string: "Product: [name], Original Total: $[amount], Discount: $[discount], Final Price: $[final]"
// Print the formatted string in console and in an alert

productName = "product"
price = 100
quantity = 1
discountInPercentage = 5

finalPrice = (100 * 1) - (5 / 100)
detail = `Product: ${productName}
 Original Total: ${price}
 Discount: ${discountInPercentage}
  Final Price: ${finalPrice}`
  
console.log(detail)