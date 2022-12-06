// 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
// Какое самое маленькое число делится нацело на все числа от 1 до 20?

const dividedArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function generalDivisors(arr1,arr2) {
  let generalDivisors = [];
  if (arr1.length > arr2.length) {
    generalDivisors = arr2.filter((item) => arr1.includes(item))
  } else {
    generalDivisors = arr1.filter((item) => arr2.includes(item))
  }
  return generalDivisors.pop();
}

function leastCommonMultiple(a,b,general) {
  return (a*b)/general
}

function leastCommonDivisor(a,b) {
  const aDivisor = [];
  const bDivisor = [];
  let mostGeneralDivisor;
  for (i = 1; i <= a; i++) {
     if (a%i === 0) aDivisor.push(i); 
  }
  for (i = 1; i <= b; i++) {
    if (b%i === 0) bDivisor.push(i); 
  }
  mostGeneralDivisor = generalDivisors(aDivisor, bDivisor)
  return leastCommonMultiple(a,b,mostGeneralDivisor)
}

function abs(arr) {
  let startLeastCommonDevisor = leastCommonDivisor(arr[0],arr[1])
  for (let i = 2; i < arr.length; i++) {
    startLeastCommonDevisor = leastCommonDivisor(startLeastCommonDevisor,arr[i])
  }
  return startLeastCommonDevisor;
}

abs(dividedArr);