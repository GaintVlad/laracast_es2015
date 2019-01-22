export default class TaskCollection {
    constructor(task = []) {
        this.task = task;
    }
    log() {
        this.task.forEach((task, index) => console.log(task));
    }
}
