function solve(numOfPeople, typeOfPeople, day) {
    'use strict';

    let totalAmount = 0;

    if (typeOfPeople === 'Students') {
        if (day === 'Friday') {
            totalAmount = numOfPeople * 8.45;
        } else if (day === 'Saturday') {
            totalAmount = numOfPeople * 9.80;
        } else if (day === 'Sunday') {
            totalAmount = numOfPeople * 10.46;
        }
        if (numOfPeople >= 30) {
            totalAmount = totalAmount * 0.85;
        }
    } else if (typeOfPeople === 'Business') {
        if (day === 'Friday') {
            totalAmount = numOfPeople * 10.90;
        } else if (day === 'Saturday') {
            totalAmount = numOfPeople * 15.60;
        } else if (day === 'Sunday') {
            totalAmount = numOfPeople * 16;
        }
        if (numOfPeople >= 100) {
            const priceOfNight = totalAmount / numOfPeople;
            totalAmount = priceOfNight * (numOfPeople - 10);
        }
    } else if (typeOfPeople === 'Regular') {
        if (day === 'Friday') {
            totalAmount = numOfPeople * 15;
        } else if (day === 'Saturday') {
            totalAmount = numOfPeople * 20;
        } else if (day === 'Sunday') {
            totalAmount = numOfPeople * 22.50;
        }
        if (numOfPeople >= 10 && numOfPeople <= 20) {
            totalAmount = totalAmount * 0.95;
        }
    }
    console.log(`Total price: ${totalAmount.toFixed(2)}`);
}
solve(130, "Business", "Sunday");
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");