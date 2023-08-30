const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperties(product, {
  price: {
    enumerable: false,
    writable: false,
  },
  quantity: {
    enumerable: false,
    writable: false,
  },
});

const getTotalPrice = function (product) {
  const quantityDescriptor = Object.getOwnPropertyDescriptor(
    product,
    "quantity"
  );
  const priceDescriptor = Object.getOwnPropertyDescriptor(product, "price");

  const quantity = quantityDescriptor.value;
  const price = priceDescriptor.value;

  return quantity * price;
};

const deleteNonConfigurable = function (object, property) {
  const propertyDescriptor = Object.getOwnPropertyDescriptor(object, property);
  if (!propertyDescriptor.configurable) {
    throw new Error("Can't delete non-configurable properties");
  }

  delete object[property];
};
