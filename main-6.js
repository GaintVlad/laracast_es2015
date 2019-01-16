// part 1
const sum = ((...numbers) => numbers.reduce((prev, curr) => prev + curr));

let total = sum(1,2,3,4,5);

alert(total);

// part 2
let nums = [1,2,3];

const sum2 = ((x, y, z) => x + y + z);

let total2 = sum2(...nums);

alert(total2);
