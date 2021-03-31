

function square(n) {
    let result = 0;

    for(i = 1; i<= n; i++) {
        for(j = 1; j<=n; j++) {
            result += 1;
        }
    }
    return result;
}
console.time();
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.log(square(5000));
console.timeEnd();
let prevResult = {}
function memoizedSquare(n) {
    if(prevResult[n]) {
        return prevResult[n];
    }
    let result = 0;

    for(i = 1; i<= n; i++) {
        for(j = 1; j<=n; j++) {
            result += 1;
        }
    }
    prevResult[n] = result;
    return result;
}
console.time();
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.log(memoizedSquare(5000));
console.timeEnd();