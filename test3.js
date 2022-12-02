// Простые делители числа 13195 - это 5, 7, 13 и 29.
// Каков самый большой делитель числа 600851475143, являющийся простым числом?

function getPrimes(num) {
  const max = Math.sqrt(num)
  const redundant = []
  const primes = [];
  let primeDivisors = []

  for ( let i = 2; i<= max; i++){
    if (!redundant[i]) {
      primes.push(i);
      for (let j = i * 2; j <= max; j+=i) {
        redundant[j] = true;
      }
    }
  };

  primeDivisors = primes.filter((number) => num % number === 0)

  return primeDivisors.pop();
}

getPrimes(600851475143);