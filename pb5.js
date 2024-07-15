function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  var totalPayment = 0;
  var totalTax = 0;
  for (var i = 0; i < arr.length; i++) {
    totalPayment += arr[i];
    if (arr[i] >= 3000) {
      totalTax += arr[i] * 0.2;
    }
  }

  var income = totalPayment - totalTax;
  var savings = income - livingCost;
  return savings >= 0 ? savings : "earn more";
}

var answer = monthlySavings([900, 2700, 3400], 10000);
console.log(answer);
