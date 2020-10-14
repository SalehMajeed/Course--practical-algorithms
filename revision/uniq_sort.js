function uniq_sort(numbers) {
    const uniq_check = {};
    const result = [];

    function unique() {
        if (!numbers.length) return 

        if (!uniq_check[numbers[0]]) {
            result.push(numbers[0]);
            uniq_check[numbers[0]] = true;
        }
        numbers.shift()

        return unique();
    }

    unique();

    return result.sort((a,b) => a - b);
}

console.log(uniq_sort([4, 4, 2, 2, 3, 2, 2, 2, 5]));
