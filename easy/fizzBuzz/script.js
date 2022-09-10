/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let num = 1;
    const res = [];
    
    while (num <= n) {
        if (num % 3 === 0 && num % 5 === 0) res.push('FizzBuzz');
        else if (num % 3 === 0) res.push('Fizz');
        else if (num % 5 === 0) res.push('Buzz');
        else res.push(num.toString());
        num++;
    }
    return res;
};
