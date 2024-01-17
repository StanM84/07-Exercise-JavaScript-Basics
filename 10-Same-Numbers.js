function solve(number) {
    'use strict';

    let totalSum = 0;
    let digitSame = true;
    const firtstDigit = number % 10;

    while (number > 0) {
        const digit = number % 10;

        if (firtstDigit != digit) {
            digitSame = false;
        }
        totalSum += digit;
        number = Math.floor(number / 10);
    }
    console.log(digitSame);
    console.log(totalSum);
}
solve(1234)