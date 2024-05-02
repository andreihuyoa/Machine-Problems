// Importing Axios for making HTTP requests
const axios = require('axios');
// Importing Math.js library
const math = require('mathjs');

// Function to fetch exchange rate data from a hypothetical forex API
async function fetchExchangeRates() {
    try {
        const response = await axios.get('https://api.example.com/forex');
        // Assuming the response contains exchange rates data in the format { currency: rate }
        const rates = response.data.rates;
        // Extracting 24 values from the exchange rate data
        const selectedRates = Object.entries(rates)
            .slice(0, 24)
            .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
        return selectedRates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        return null;
    }
}

// Function to calculate Lagrange interpolating polynomial
function lagrangeInterpolation(xValues, yValues, x) {
    let result = 0;
    for (let i = 0; i < xValues.length; i++) {
        let term = yValues[i];
        for (let j = 0; j < xValues.length; j++) {
            if (j !== i) {
                term *= (x - xValues[j]) / (xValues[i] - xValues[j]);
            }
        }
        result += term;
    }
    return result;
}

// Main function
async function main() {
    // Fetch exchange rate data
    const exchangeRates = await fetchExchangeRates();

    if (!exchangeRates) {
        console.log('Failed to fetch exchange rates. Exiting.');
        return;
    }

    // Extracting x and y values from exchange rate data
    const currencies = Object.keys(exchangeRates);
    const xValues = currencies.map((currency) => parseFloat(currency)); // Assuming currencies are numeric
    const yValues = Object.values(exchangeRates).map((rate) => parseFloat(rate));

    // Example interpolation at x = 1.5
    const interpolatedValue = lagrangeInterpolation(xValues, yValues, 1.5);
    console.log('Interpolated value at x = 1.5:', interpolatedValue);
}

// Running the main function
main();
