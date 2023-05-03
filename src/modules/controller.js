//Buttons
// New project button
import * as Model from "./model.js";
import * as View from "./view.js";

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
}
function getTodos(index) {
  const todos = Model.projects[index].todos;
  return todos;
}
function submitProjectBtnClicked(name) {
  if (name !== "") {
    return name;
  } else {
    name = "default name";
    return name;
  }
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
export {
  getProjects,
  onProjectClick,
  getTodos,
  deleteProject,
  newProjectForm,
  onNewProjectBtnClick,
  submitProjectBtnClicked,
};
