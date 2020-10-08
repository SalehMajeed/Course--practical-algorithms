function join_elements(array, join_string) {
    let result_so_far = '';

    for (let i = 0; i < array.length - 1; i++) {
        result_so_far += array[i] + join_string
    }

    return result_so_far + array[array.length - 1]
}

console.log(join_elements(['s','cr','t cod', ':) :)'], 'e'))
