function isPrime(num) {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    // 1,2,3,4,...99 n*(n+1)/2 => O(n^2)
    if (num % i === 0) return false;
  }
  return true;
}

// isPrime(97);

let primes = [];
for (let x = 2; x <= 100; x++) {
  // 100 times O(n)
  if (isPrime(x)) primes.push(x);
}
console.table(primes);
