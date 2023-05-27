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
  todos = [];
  return {
    name,
    todos,
    projectId,
  };
}
function getTodosByActiveProject(activeProject) {
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    let todos;
    if (project.projectId === activeProject) {
      todos = project.todos;
      break;
    }
  }
  return todos;
}
function generateTodoId() {
  let todoId = todoIdCounter;
  todoIdCounter++;
  return todoId;
}
function constructTodo(name, description, priority, projectId, due) {
  let todoId = generateTodoId();
  return {
    name,
    description,
    due,
    priority,
    todoId,
    projectId,
  };
}
// add todo to project using index
function addProjectByProjectIndex(index, todo) {}
//get index of relevant project
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
//returns project index
function findProjectById(id, projects) {
  let project;
  let index;
  for (let i = 0; i < projects.length; i++) {
    if (project[i].projectId === id) {
      project = project[i];
      index = i;
      break;
    }
  }
  return index;
}
//add project object to projects array
function addProject(project) {
  projects.push(project);
  console.log(project.projectId);
}

// export {constructProject};
export {
  projects,
  getTodosByActiveProject,
  constructProject,
  findProjectById,
  addProject,
  constructTodo,
  addTodo,
  projectIdCounter,
  generateProjectId,
};
