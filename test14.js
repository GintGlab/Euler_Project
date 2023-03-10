///////// сложность O(n log n)

(function number() {
  console.time()
  let maxSubLength = 0;
  let numWithBigLength = 0;
  for (let i = 1; i < 1000000; i++) {
    const arr = [];
    let number = i;
    while (number != 1) {
      if (number % 2 === 0) {
        number /= 2
        arr.push(number)
      } else {
        number = (number * 3) + 1;
        arr.push(number)
      }
    }
    if (maxSubLength < arr.length) {
      maxSubLength = arr.length
      numWithBigLength = i;
    }
  }
  console.log(maxSubLength,numWithBigLength);
  console.timeEnd()
  return {maxSubLength, numWithBigLength}
})()
