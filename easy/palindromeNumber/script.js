// ////////////////////////////////// 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

const isPalindrome = (x) => {
  // Converting to string
  // return x.toString().split("").reverse().join("") === x.toString();

  // Use modulo
  if (x < 0) return false;
  let reverse = 0;

  for (let i = x; i >= 1; i = Math.floor(i / 10))
    reverse = reverse * 10 + (i % 10);
  return reverse === x;
};

console.log(isPalindrome(121));
