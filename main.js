function *range(start, end) {
    while (start <= end) {
        yield start;
        start ++;
    }
}

let iterator = range(1, 5);

console.log(iterator.next(), iterator.next(), iterator.next());


//*****************************//
let iterator2 = range(1, 5);

for (let i of iterator2) {
    console.log(i);
}

//***************************//
console.log([...range(1,5)])