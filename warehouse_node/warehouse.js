// warehouse.js

const warehouse = {};

function initializeWarehouse() {
  const numSellers = parseInt(prompt("Enter the number of sellers:"));

  for (let i = 0; i < numSellers; i++) {
    const sellerName = prompt(`Enter the name of Seller ${i + 1}:`);
    const woolWeight = parseFloat(prompt(`Enter the weight of wool for Seller ${i + 1} (in kg):`));

    warehouse[sellerName] = woolWeight;
  }
}

module.exports = {
  warehouse,
  initializeWarehouse,
};
