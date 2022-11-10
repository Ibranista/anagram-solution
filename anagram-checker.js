module.exports = function (x, y) {
  // write your code here
  let first = x.replace(/[^a-z0-9]/gi, "");
  let second = y.replace(/[^a-z0-9]/gi, "");
  return (
    first.toLowerCase().split("").sort().join("") ===
    second.toLowerCase().split("").sort().join("")
  );
};
