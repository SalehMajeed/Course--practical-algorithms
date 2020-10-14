const times10 = (n) => n * 10;

console.log('Task 1'); // Task 1
console.log('times10 returns:', times10(9)); // times10 returns: 90

const cache = {};

const memo_times10 = (n) => {
    if (n in cache) {
        console.log(n, 'is in cache');
        return n;
    } else {
        console.log(n, 'not in cache');
        let result = times10(n);
        cache[n] = result;
        return result;
    }
};

console.log('Task 2'); // Task 2
console.log('Task 2 Value:', memo_times10(9)); // 9 "not in cache" \n Task 2 Value: 90
console.log('Task 2 cached value:', memo_times10(9)); // 9 "is in cache" \n Task 2 Value: 90
