function password(obj) {
  if (
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    !(obj.birthYear >= 1000)
  ) {
    return "invalid";
  }
  var name = obj.name;
  var birthYear = obj.birthYear;
  var siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  return siteName + "#" + name + "@" + birthYear;
}

var ans = password({ name: "toky", birthYear: 200, siteName: "Facebook" });
console.log(ans);
