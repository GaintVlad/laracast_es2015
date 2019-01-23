let users = ['Jeff', 'Vlad', 'Nataly', 'Jeff'];

let usersSet = new Set(users);

console.log('Set: ', usersSet);

console.log([...usersSet])

usersSet.forEach(u=>console.log(u))

console.log('Length: '+usersSet.size)

console.log(usersSet.__proto__)
