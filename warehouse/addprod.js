const readline = require('readline');
const fs = require('fs');
const os = require('os');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sellerDataFile = ${os.homedir()}/seller_data.json; // Store seller data in the user's home directory

let sellerNames = [];
let woolWeights = [];
let totalCapacity; // Define totalCapacity as a global variable
let warehouseFull = false; // Flag to track if the warehouse is full

// Function to update seller and wool weight
function updateSellerAndWoolWeight(sellerName, woolWeight, existingStorage) {
    if (warehouseFull) {
        return; // Don't update data if warehouse is full
    }

    const index = sellerNames.indexOf(sellerName);

    if (index !== -1) {
        // Check if the sum of wool weights plus the current addition exceeds the warehouse capacity
        const totalWoolWeight = woolWeights.reduce((sum, weight, i) => (i !== index ? sum + weight : sum), 0);
        if (totalWoolWeight + woolWeight <= totalCapacity) {
            // Add the current wool weight to the respective seller
            woolWeights[index] += woolWeight;
            console.log(${sellerName}: ${woolWeights[index]} kg);
        } else {
            console.log("Warehouse full");
            warehouseFull = true; // Set the flag to indicate that the warehouse is full
        }
    } else {
        // Check if the current input exceeds the warehouse capacity
        if (woolWeight + existingStorage <= totalCapacity) {
            // Seller is new, add them to the arrays
            sellerNames.push(sellerName);
            woolWeights.push(woolWeight + existingStorage);
            console.log(${sellerName}: ${woolWeights[woolWeights.length - 1]} kg);
        } else {
            console.log("Warehouse full");
            warehouseFull = true; // Set the flag to indicate that the warehouse is full
        }
    }
}

// Prompt the user to input the total capacity of the warehouse
rl.question("Enter the total capacity of the warehouse (in kg): ", (totalCapacityInput) => {
    totalCapacity = parseFloat(totalCapacityInput); // Assign the input value to totalCapacity
    console.log(Total capacity of the warehouse: ${totalCapacity} kg);
    
    rl.question("Enter the name of the seller: ", (sellerName) => {
        rl.question("Enter the existing storage for this seller (in kg): ", (existingStorageInput) => {
            const existingStorage = parseFloat(existingStorageInput);

            if (sellerName && !isNaN(existingStorage) && existingStorage >= 0) {
                rl.question("Enter the weight of wool to be stored (in kg): ", (woolWeightInput) => {
                    const woolWeight = parseFloat(woolWeightInput);

                    // Check if the user provided valid input
                    if (!isNaN(woolWeight) && woolWeight >= 0) {
                        updateSellerAndWoolWeight(sellerName, woolWeight, existingStorage);
                    } else {
                        console.log("Invalid input. Please enter a valid wool weight.");
                    }

                    rl.close(); // Close the interface after a single input
                });
            } else {
                console.log("Invalid input. Please enter a valid seller name and existing storage.");
                rl.close(); // Close the interface after a single input
            }
        });
    });
});