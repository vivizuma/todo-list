import * as Controller from "./controller.js";

// render
function clearProjects() {
  const projectsContainer = document.getElementById("dynamic-sidebar");
  projectsContainer.innerHTML = "";
}
function renderSidebar() {
  clearProjects();
  let projects = Controller.getProjects();
  let sidebar = document.getElementById("dynamic-sidebar");
  //render projects
  projects.forEach((item, index) => {
    const project = elementCreator(item, index);
    sidebar.appendChild(project);
    console.log(project);
    const name = project.children[0];
    const delBtn = project.children[1];

    // event listeners
    name.addEventListener("click", () => {
      Controller.onProjectClick(index);
    });
    delBtn.addEventListener("click", () => {
      let delIndex = delBtn.getAttribute("data-index");
      Controller.deleteProject(delIndex);
    });
  });
}
function renderMain() {
  //TODO 4th may
  //1. clear main
  //2. render project name as title
  //3. render add todo button
  //4. render todos
  //   a.) render todo name
  //   b.) render done button
}
function eventListeners() {
  const newProjectBtn = document.getElementById("new-project-btn");
  newProjectBtn.addEventListener("click", () => {
    showProjectModal();
  });
  const submitProjectBtn = document.getElementById("submit-project-btn");
  submitProjectBtn.addEventListener("click", () => {
    Controller.submitProjectBtnClicked();
  });
  const closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    closeProjectModal();
  });
}
function renderTodos(index) {
  const todos = Controller.getTodos(index);
  todos.forEach((item, index) => {
    console.log(item);
  });
}

function closeProjectModal() {
  const modalInput = document.getElementById("project-input-field");
  modalInput.value = "";
  const modal = document.getElementById("new-project-modal");
  modal.close();
}
function showProjectModal() {
  const modal = document.getElementById("new-project-modal");
  modal.showModal();
}
//create project
function elementCreator(item, index) {
  const sidebar = document.getElementById("dynamic-sidebar");
  //create elements
  const container = document.createElement("div");
  const name = document.createElement("button");
  const delBtn = document.createElement("button");
  //set attributes
  container.setAttribute("data-index", index);
  delBtn.setAttribute("data-index", index);

  // set classes for styling
  container.classList.add("project");
  // set content
  name.innerHTML = item.name;
  delBtn.innerHTML = "X";

  container.appendChild(name);
  container.appendChild(delBtn);
  return container;
}
eventListeners();
export { renderSidebar, clearProjects, showProjectModal };
