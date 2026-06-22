// Bijli bill for calculation for the price

/**
 * 0-100==> R.s 4.2/ unit
 * 101-200==>RS 6/unit
 * 201-400==> Rs 8/unit
 * more than 400==> Rs 13/unit
 */

function calculateBijliBill(unit) {

    // if(unit===0) return {amount:0.0}
    let amount = 0;

    if (unit => 0 && unit <= 100) {
        amount = unit * 4.2
    } else if (unit > 100 && unit <= 200) {
        amount = ((100 * 4.2) + (unit - 100) * 6)
    } else if (unit > 200 && unit <= 400) {
        amount = ((100 * 4.2) + (100 * 6) + (unit - 200) * 8)
    } else {
        amount = ((100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13);
    }

    return amount.toFixed(1)
}

console.log(calculateBijliBill(0));
console.log(calculateBijliBill(700));
console.log(calculateBijliBill(300));
