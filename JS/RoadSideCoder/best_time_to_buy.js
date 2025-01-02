
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// var maxProfit = function (prices) {

//     const len = prices.length;
//     let globalProfit = 0;

//     for (let k = 0; k < len - 1; k++) {
//         for (let j = k + 1; j < len; j++) {
//             const day1 = prices[k];
//             const day2 = prices[j]
//             if (day2 > day1) {
//                 const profit = day2 - day1;
//                 if (globalProfit < profit)
//                     globalProfit = profit
//             }
//         }
//     }

//     return globalProfit;
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    const len = prices.length;
    let globalProfit = 0;
    let left = 0;
    let right = 1;

    while (right <price) {
        const pDay1 = prices[left];
        const pDay2 = prices[right];
        const profit = pDay2 - pDay1;
        if (profit > globalProfit) {
            globalProfit = profit
        } else {
            left = right
        }
        right++
    }

    return globalProfit;
}

var maxProfit = function (prices) {

    const len = prices.length;
    let globalProfit = 0;
    let globalMin = prices[0] || 0;;
    let right = 1;
    while (right < len) {
        if (prices[right] < globalMin) {
            globalMin = prices[right];
        }
        let currentProfit = prices[right] - globalMin;
        globalProfit = Math.max(globalProfit, currentProfit);
        right++;
    }
    return globalProfit
};