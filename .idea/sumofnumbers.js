function sumFor(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function sumWhile(numbers) {
  let total = 0;
  let i = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  return total;
}

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1));
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function(memo, num) {
    return memo + num;
  }, 0);
}

console.log(sumFor(4));
console.log(sumTheSimpleWay(4));
console.log(sumWhile(4));
console.log(sumRecursion());
