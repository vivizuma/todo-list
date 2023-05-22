let projects = [];
//factory function to create project objects
//project id counter
let projectIdCounter = 0;
let todoIdCounter = 0;
function generateProjectId() {
  let projectId = projectIdCounter;
  projectIdCounter++;
  return projectId;
}
function constructProject(name, todos = null) {
  let projectId = generateProjectId();
  if ((todos = null)) {
    todos = [];
  }
  return {
    name,
    todos,
    projectId,
  };
}
function generateTodoId() {
  let todoId = todoIdCounter;
  todoIdCounter++;
  return todoId;
}
function constructTodo(task, description, due, priority, projectId) {
  let todoId = generateTodoId();
  return {
    task,
    description,
    due,
    priority,
    todoId,
    projectId,
  };
}

function findRelevantProject(projectId) {}
function addTodo(activeProjectId, todo) {
  //find project with active project Id

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    if (project.projectId === activeProjectId) {
      console.log("Active project found");
      project.todos.push(todo);
      console.log(`pushed ${todo} to ${project} with id: ${activeProjectId}`);
      break;
    }
  }
  // push todo to todos array
}
//add project object to projects array
function addProject(project) {
  projects.push(project);
  console.log(project.projectId);
}

// export {constructProject};
export {
  projects,
  constructProject,
  addProject,
  constructTodo,
  addTodo,
  projectIdCounter,
  generateProjectId,
};
