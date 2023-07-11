function powerOf4(n) {
  if (typeof n === "number") {
    let log_num = Math.log(n) / Math.log(4);
    // console.log(typeof n);
    return log_num % 1 === 0;
  }
  return false;
}

console.log(powerOf4(4));
console.log(powerOf4(16));
console.log(powerOf4("4"));
