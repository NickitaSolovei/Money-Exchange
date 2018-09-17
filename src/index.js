// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var cur = currency;

    var h = 50;
    var q = 25;
    var d = 10;
    var n = 5;
    var p = 1;

    var obj1 = {};

    if (cur > 10000){
        obj1.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj1;
    }

    var numH = Math.floor(cur / h); 
    if (numH >= 1) {
        obj1.H = numH;
        cur %= h; 
    }
    
    var numQ = Math.floor(cur / q);
    if (numQ >= 1) {
        obj1.Q = numQ;
        cur %= q; 
    } 

    var numD = Math.floor(cur / d);
    if (numD >= 1) {
        obj1.D = numD;
        cur %= d; 
    } 

    var numN = Math.floor(cur / n);
    if (numN >= 1) {
        obj1.N = numN;
        cur %= n; 
    } 

    var numP = Math.floor(cur / p);
    if (numP >= 1) {
        obj1.P = numP;
        cur %= p; 
    } 

    return obj1;
}
