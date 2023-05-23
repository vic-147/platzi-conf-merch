const handleSumTotal = (cart) => {
  const reducer = (acc, cur) => acc + cur.price; // acc =acumulator cuc= current
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
