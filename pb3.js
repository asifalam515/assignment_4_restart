// problem no 3
function deleteInvalids(array) {
  if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number" || isNaN(array[i])) {
        array.splice(i, 1);
        i--;
      }
    }
    return array;
  } else {
    return "Invalid Array";
  }
}

var ans = deleteInvalids(["1", { num: 2 }, NaN]);
console.log(ans);
