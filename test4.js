// Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.
// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.
const multiplicationArr = []

function isPalindrome(num){
  const string = String(num)
  const arr = string.split('')
  const fromEnd = []
  let j = 0
  for (let i = arr.length; i <= arr.length && i >= 0 ; i--) {
    fromEnd[j] = arr.pop()
    j++
  }
  return string === fromEnd.join('')
}

function findPalindrome() {
    for (let i = 100; i <= 999; i++) {
        for ( let j = 100; j <= 999; j++) {
            if (isPalindrome(j*i)) {
                multiplicationArr.push(j*i)
            }
        }
    }
    return multiplicationArr.pop();
}
