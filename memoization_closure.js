const memoized_closure_times10 = () => {
    let cache = {}
    return (n) => {
        if (n in cache){
            console.log('Fetching from cache:', n)
            return cache[n]
        }
        else {
            console.log('Calculating Result')
            let result = n * 10
            cache[n] = result
            return result
        }
    }
};

const memo_closure_times10 = memoized_closure_times10();

console.log('Tast 3');
try {
    console.log('Task 3 Calculated value: ', memo_closure_times10(9));
    console.log('Task 3 cached value: ', memo_closure_times10(9));
} catch(e){
    console.log('Task 3:', e)
}