function solve(fruit, weight, priceKg) {
    'use strict';

    const priceGr = priceKg / 1000;
    const totalPrice = weight * priceGr;
    const weightGr = weight / 1000;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightGr.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80);