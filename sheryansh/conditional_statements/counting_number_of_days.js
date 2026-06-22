// Counting number of days in a given month of a year

function checkMonthsOfDays(year, month) {
    let days = 0;
    if (month == 2) {
        if ((year % 400 == 0) || (year % 4 == 0 & year % 100 !== 0)) {
            days = 29;
        } else {
            days = 28;
        }
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        days = 31
    } else {
        days = 30;
    }

    return days
}

console.log(checkMonthsOfDays(2024, 2));
console.log(checkMonthsOfDays(2023, 2));
console.log(checkMonthsOfDays(2019, 3));
