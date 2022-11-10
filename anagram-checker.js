module.exports = function (x,y) {
  // write your code here
  let first = x.replace(/[^a-z0-9]/gi, "");
  let second = y.replace(/[^a-z0-9]/gi, "");
  return first.split("").sort().join("") === second.split("").sort().join("")
};
