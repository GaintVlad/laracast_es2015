class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    log() {
        console.log(this.tasks);
    }
}

let foo = 'Bar';

const foo2 = ((str) => console.log(str));

new TaskCollection([
    'Goto the store',
    'Eat a cake',
    'Finish this lesson'
]).log();

console.log(foo);

foo2('Bar2');
