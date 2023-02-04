// function findFactorialRecursive(n) {
//   if (n === 2) return 2;
//   return n * findFactorialRecursive(n - 1);
// }
// console.log(findFactorialRecursive(5));

// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// }
const fib = n => (n < 2 ? n : fib(n - 2) + fib(n - 1));

for (let i = 0; i < 1000; i++) console.log(fib(i));
// console.log(fib(40));
