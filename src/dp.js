let slow = 0;
function fibold(n) {
  slow++;
  if (n < 2) return n;
  return fibold(n - 1) + fibold(n - 2);
}

console.log('Regular', fibold(34));
console.log({ slow });

let fast = 0;
function newFibFast() {
  const cache = {};
  return function fibfast(n) {
    fast++;
    if (n in cache) return cache[n];
    else {
      if (n < 2) return n;
      cache[n] = fibfast(n - 1) + fibfast(n - 2);
      return cache[n];
    }
  };
}

const fibfast = newFibFast();

console.log('\nMemoized', fibfast(34));
console.log({ fast });
console.log(~~(slow / fast), 'times faster');
