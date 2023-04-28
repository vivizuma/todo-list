class Todo{
    constructor(name, description, priority){
        this.name = name;
        this.description = description;
        this.priority = priority
    }

}

Todo.prototype.taskInformation = function(){
    return "hello"
}
Todo.prototype.isDone = function(){

}

const newTask = new Todo("Workout", "move weights lol", "high")

const newTodoItem = (name,description,priority) => {
const task = new Todo(name, description, priority)
return task;
}


function createTask(name,description,priority){
    const newTask = new Todo(name,description,priority)
    return newTask
}


const controller = {
    name: "controller",
 print() {
    console.log("heeyyeyeyeyyaaa")
 }
}
//factory function
function User(name,age){
    this.name = name;
    this.age = age;
   
}

//FACTORY Function
const userr = (name,age)=> {
    sayHello= () => {return "hi"}
  return {name, age, sayHello}
}

const vito = userr("vito","old")
//but when i look back on this.. young? hope you did alright, future me
//I will try my best for you right now
console.log(vito.name)
console.log(vito.age)
console.log(vito.sayHello())