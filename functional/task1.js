function calculateDiscountedPrice(products, discountPercentage) {
  const discountedProducts = [];

  for (const { name, price } of products) {
    const discountedPrice = price * (1 - discountPercentage / 100);
    discountedProducts.push({ name, price: discountedPrice });
  }

  return discountedProducts;
}

function calculateTotalPrice(products) {
  let total = 0;

  for (const product of products) {
    total += product.price;
  }

  return total;
}

console.log(
  calculateTotalPrice([
    { name: "sushi", price: 5 },
    { name: "carrot", price: 1 },
  ])
);
