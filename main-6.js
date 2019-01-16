function sum(...numbers) {
    let res = 0;
    numbers.forEach(num => res += num);
    return res;
}

let total = sum(1,2,3,4,5)

console.log(total)


