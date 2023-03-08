const map = {
  ']': '[',
  ')': '(',
  '}': '{',
};
function validParentheses(str) {
  const arr = [];
  for (const char of str) {
    if (map[char] && map[char] !== arr.pop()) {
      return false;
    } else if (!map[char]) {
      arr.push(char);
    }
  }
  return arr.length === 0;
}
console.log(validParentheses('{(){[({})({})]()}}'));
