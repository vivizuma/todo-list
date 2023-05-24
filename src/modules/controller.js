//Buttons
// New project button
import * as Model from "./model.js";
import * as View from "./view.js";
import { parseISO } from "date-fns";

//projects
function getProjects() {
  return Model.projects;
}
function onNewProjectBtnClick() {
  View.showProjectModal();
}
function newProjectForm() {
  // on + click
  // new project modal popup in view
  //user inputs name
  //clicks submit or presses enter
  //comes back to controller
  //controller asks model to push new project to array
  // model stores in local storage
  //
}
function onProjectClick(index) {
  console.log(`"project name${index} clicked"`);
  const todos = getTodos(index);
  View.renderMain;
}
function getProjectName(index) {
  const name = Model.projects[index].name;
  return name;
}
function getTodos(index) {
  const todos = Model.projects[index].todos;
  return todos;
}
function todoInputHandler(currentProjectId, name, description, priority, due) {
  const todo = Model.constructTodo(
    name,
    description,
    priority,
    currentProjectId,
    due
  );
  Model.addTodo(currentProjectId, todo);
  console.log(todo);
  View.renderMain(Controller.getTodosByProjectId(todo.currentProjectId));
}
function getTodosByProjectId(){
  
  
}
function submitProjectBtnClicked(name) {
  if (name !== "") {
    createProject(name);
    return name;
  } else {
    name = "Project";
    console.log(name);
    createProject(name);
  }
}
function createProject(name) {
  const project = Model.constructProject(name);
  Model.addProject(project);
}
function deleteProject(index) {
  //render are confirmation modal
  //on confirm call controller.removeProject(index)
  // View.clearProjects();
  // Model.projects.splice(index, 1);
  // View.renderSidebar();
  console.log("deleting project");
}

function refreshView() {
  View.clearProjects();
  View.renderSidebar();
}
function getActiveProjectId(index) {
  let id = 0;
  id = Model.projects[index].projectId;
  return id;
}
function validateTodoForm() {
  let name = document.getElementById("todo-name");
  let description = document.getElementById("description");
  let due = document.getElementById("due-date");

  let dueInput = due.value;
  let parsedDate = parseISO(dueInput);
  console.log(parsedDate);

  validateRadioButtons();
}
function validateRadioButtons() {
  let selected = false;
  let priorityRadioButtons = document.getElementsByName("priority");
  for (let i = 0; i < priorityRadioButtons.length; i++) {
    if (priorityRadioButtons[i].checked) {
      selected = true;
      break;
    }
  }
  if (!selected) {
    // just set priority to medium if not checked
    priorityRadioButtons[1].checked;
    console.log("checked medium box");
  }
}
function getCurrentProjectId() {
  const activeProjectId = View.returnActiveProjectId;
  return activeProjectId;
}

function submitTodo(name, description, due, priority, projectId) {
  let todo = Model.constructTodo(name, description, due, priority, projectId);
  console.log(todo);
  Model.addTodo(todo, projectId);
  View.renderMain();
}
export {
  getProjects,
  getActiveProjectId,
  onProjectClick,
  getTodos,
  getTodosByProjectId,
  validateRadioButtons,
  todoInputHandler,
  validateTodoForm,
  getCurrentProjectId,
  submitTodo,
  deleteProject,
  newProjectForm,
  onNewProjectBtnClick,
  submitProjectBtnClicked,
  getProjectName,
};
