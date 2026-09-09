function findFirstEven(arr) {
    if (!arr || arr.length === 0) return null;

    let index = 0;
    let firstEven = null;

    do {
        let num = arr[index];
        index++;

        if (num % 2 !== 0) {
            continue; 
        }

        firstEven = num;
        break; 
    } while (index < arr.length);

    return firstEven;
}

console.log("First even:", findFirstEven([1, 3, 7, 8, 11, 14])); // 8