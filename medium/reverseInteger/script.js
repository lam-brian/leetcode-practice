/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const min = (-2) ** 31;
    const max = 2 ** 31 - 1;
    
    let res = 0;
    
    while (x) {
        const digit = x % 10;
        x = Math.trunc(x / 10);
        
        if (res > Math.trunc(max / 10) || (res === Math.trunc(max / 10) && digit > max % 10)) return 0;
        if (res < Math.trunc(min / 10) || (res === Math.trunc(min / 10) && digit < min % 10)) return 0;
        
        res = res * 10 + digit;
    }
    
    return res;
};