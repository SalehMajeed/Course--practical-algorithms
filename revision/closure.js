const times10 = n => 10 * n

const memoized_closure_times10 = () => {
    let cache = {}
    return n => {
        if (n in cache) return n
        else {
            console.log(n, 'not in cache')
            let result = times10(n)
            cache[n] = result
            return result
        }
    }
}

const memo_closure_times10 = memoized_closure_times10()

console.log("Task 3") // Task 3
console.log("Task 3 calculated value:", memo_closure_times10(9)) // 9 "not in cache" \n Task3 calculated value: 90
console.log("Task 3 cached value:", memo_closure_times10(9)) // Task 3 cached value: 9