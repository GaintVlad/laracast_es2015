import TaskCollection, {foo, foo2} from "./TaskCollection";

new TaskCollection([
    'Goto the store',
    'Eat a cake',
    'Finish this lesson'
]).log();

console.log(foo);

foo2('Bar2');