function solve(number) {
    'use strict';

    const numToString = number.toString();
    let totalSum = 0;

    for (const char of numToString) {
        const charAsNumber = parseInt(char, 10);
        totalSum += charAsNumber;
    }
    console.log(totalSum);
}
solve(12345);