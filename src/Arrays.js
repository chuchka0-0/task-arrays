export function arraySorting(data) {
    return data
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
        .join(',');
}

export function arrayFiltering(data) {
    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i] > 100) {
            data.splice(i, 1);
        }
    }
    return data;
}

export function arrayPushing(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i], array2[i]);
    }
    return result;
}