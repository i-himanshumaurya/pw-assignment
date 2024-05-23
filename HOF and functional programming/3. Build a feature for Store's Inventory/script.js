// Object containing items and their prices in USD
const itemsInUSD = {
    "item1": 10,
    "item2": 20,
    "item3": 30
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert USD to INR
function convertToINR(priceUSD) {
    return priceUSD * exchangeRate;
}

// Convert prices to INR using map
const itemsInINR = Object.fromEntries(
    Object.entries(itemsInUSD).map(([item, price]) => [item, convertToINR(price)])
);

// Output the new object with prices in INR
console.log(itemsInINR);
