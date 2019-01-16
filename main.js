class TaskCollection {
    constructor(task = []) {
        this.task = task;
    }
    log() {
        this.task.forEach((task, index) => console.log(task, index));
    }
}
class Task {}

new TaskCollection([new Task(),new Task(), new Task()]).log()

//return keyword
let names = ['Matt', 'Jeffry', 'Bill'];

names =  names.map(name => `${name} +  is coll`);
console.log(names)

const obj = {
    defaultDiscount() {return 0.10},
    getDiscount(value, discount = this.defaultDiscount()) {
        return value - (value * discount);
    },
    init(discount) {
        alert(this.getDiscount(100, discount))
    }
}

obj.init()


