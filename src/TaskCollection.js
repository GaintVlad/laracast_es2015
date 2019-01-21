class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    log() {
        console.log(this.tasks);
    }
}

export let foo = 'Bar';

export const foo2 = ((str) => console.log(str));

export default TaskCollection;
