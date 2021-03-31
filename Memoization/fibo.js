
let t = 0;
function fibo(n) {
    t++;
    if(n < 2) {
        return n;
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}
console.log('Without memo');
console.log(fibo(20));
console.log(t);

let memo = {};
let mt = 0;
function memoizedFibo(n) {
    mt++;
    if(n < 2) {
        return n;
    } else if(memo[n]) {
        return memo[n];
    } else {
        let result = memoizedFibo(n-1) + memoizedFibo(n-2);
        memo[n] = result;
        return result;
    }
}

console.log('With memo');
console.log(memoizedFibo(20));
console.log(mt);