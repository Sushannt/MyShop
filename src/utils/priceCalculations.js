export const originalPriceWithoutDiscount = (
  discountedPrice,
  discountPercentage
) => {
  return discountedPrice / ((100 - discountPercentage) / 100);
};

export const calculateTotalPrice = (cartItems) => {
  const total = cartItems.reduce((accumulator, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = item.quantity;

    if (isNaN(itemPrice) || isNaN(itemQuantity)) {
      return accumulator;
    }

    return accumulator + itemPrice * itemQuantity;
  }, 0);

  return total;
};
