// problem no 2:
function checkName(name) {
  if (typeof name === "string") {
    var alphabet = name.charAt(name.length - 1);
    var lastAlphabet = alphabet.toLowerCase();
    if (
      lastAlphabet === "a" ||
      lastAlphabet === "y" ||
      lastAlphabet === "i" ||
      lastAlphabet === "e" ||
      lastAlphabet === "o" ||
      lastAlphabet === "u" ||
      lastAlphabet === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
}

var ans = checkName(["Rashed"]);
console.log(ans);
