// Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-е простое число - 13.
// Какое число является 10001-м простым числом?

console.time();
function isSimple(num) {
  let isRemainder;
  for (let j = 2; j < num; j++) {
    if(num%j === 0) {
      isRemainder = false;
    } else {
      isRemainder = true;
    }
    if (isRemainder === false) break;
  }
    return isRemainder
}

function findSimple(){
  const simpleArr = [2]
  for(let i = 3; i < 200000; i++) {
    if(isSimple(i)) simpleArr.push(i)
    if(simpleArr.length === 10001) {
        return simpleArr.pop()
    }
  }
  return simpleArr
};

console.log(findSimple());
console.timeEnd();
