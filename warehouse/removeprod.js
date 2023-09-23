// Initialize an empty warehouse object
const warehouse = {};

// Function to add sellers and their wool weights to the warehouse
function initializeWarehouse() {
  const numSellers = parseInt(prompt("Enter the number of sellers:"));

  for (let i = 0; i < numSellers; i++) {
    const sellerName = prompt("Enter the name of Seller ${i + 1}:");
    const woolWeight = parseFloat(prompt("Enter the weight of wool for Seller ${i + 1} (in kg):"));

    warehouse[sellerName] = woolWeight;
  }
}

// Function to buy wool from a seller
function buyWool() {
  const sellerName = prompt("Enter the seller's name you want to buy wool from:");
  const amountToBuy = parseFloat(prompt("Enter the amount of wool to buy from ${sellerName} (in kg):"));

  if (warehouse.hasOwnProperty(sellerName)) {
    const remainingWool = warehouse[sellerName] - amountToBuy;
    if (remainingWool >= 0) {
      warehouse[sellerName] = remainingWool;

      // Display seller data for all sellers in the warehouse
      console.log("Seller Data:");
      for (const seller in warehouse) {
        console.log(`${seller}: ${warehouse[seller]} kg`);
      }

      // Display seller name and remaining weight for the seller who made the sale
      console.log(`\n${sellerName}\t${remainingWool} kg`);
    } else {
      console.log(`Sorry, ${sellerName} is out of stock.`);
    }
  } else {
    console.log(`Seller ${sellerName} not found in the warehouse.`);
  }
}

// Main program
function main() {
  initializeWarehouse();
  buyWool();
}

main();