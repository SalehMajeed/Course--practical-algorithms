const times10 = (n) => 10 * n;

const memo = (cb) => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log(n, 'is in the cache');
            return cache[n];
        } else {
            console.log(n, "isn't in the cache");
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const memoize = memo(times10)

console.log('Task 4'); // Task 4
console.log('Task 4 calculated value', memoize(9)); // 9 "isn't in the cache" \n Task 4 calculated value 90
console.log('Task 4 cached value', memoize(9)); // 9 "is in the cache" \n Task 4 cached value 90
