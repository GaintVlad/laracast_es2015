class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    changeAge(age) {this.age=age}

    static register (...args) {
        return new User(...args)
    }

    get getAge() {
        return this.age;
    }

    set newAge(age) {
        this.age = age;
    }
}

let user = new User('Bill', 33);

user.changeAge(40);

alert(user.age);

let user2 = User.register('Met', 22)

alert(user2.name + ' '+ user.name)

user.newAge = 50;
alert(user.getAge)