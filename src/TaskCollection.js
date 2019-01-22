export default class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    log() {
        this.tasks.forEach(task => console.log(task));
    }
}