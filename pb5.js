function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  var totalPayment = 0;
  for (var i = 0; i < arr.length; i++) {
    totalPayment += arr[i];
  }

  if (totalPayment >= 3000) {
    totalPayment -= totalPayment * 0.2;
  }

  var savings = totalPayment - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

var answer = monthlySavings([1000, 2000, 2500], 5000);
console.log(answer);
