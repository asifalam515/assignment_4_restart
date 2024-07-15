// Problem no:1
function calculateMoney(ticketSale) {
  var pricePerTicket = 120;
  var cost = 500 + 8 * 50;
  if (ticketSale >= 0) {
    var income = pricePerTicket * ticketSale;
    return income - cost;
  } else {
    console.log("Invalid Number");
  }
}

var answer = calculateMoney(93);
console.log(answer);
