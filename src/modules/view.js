import * as Controller from "./controller.js";
let activeProjectId = 0;
// render
function clearProjects() {
  const projectsContainer = document.getElementById("dynamic-sidebar");
  projectsContainer.innerHTML = "";
}
function returnActiveProjectId() {
  return activeProjectId;
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
    console.log(`project id: ${item.projectId}`);
    const name = project.children[0];
    const delBtn = project.children[1];

    // event listeners
    name.addEventListener("click", () => {
      Controller.getTodos;
      renderMain(Controller.getTodos(index), Controller.getProjectName(index));
      activeProjectId = Controller.getActiveProjectId(index);
      console.log(activeProjectId);
    });
    delBtn.addEventListener("click", () => {
      let delIndex = delBtn.getAttribute("data-index");
      Controller.deleteProject(delIndex);
    });
  });
}
function clearMain() {
  const main = document.getElementById("main");
  main.innerHTML = "";
}

function eventListeners() {
  const newProjectBtn = document.getElementById("new-project-btn");
  newProjectBtn.addEventListener("click", () => {
    showProjectModal();
  });
  const submitProjectBtn = document.getElementById("submit-project-btn");
  submitProjectBtn.addEventListener("click", () => {
    const inputField = document.getElementById("project-input-field");
    const name = inputField.value;
    Controller.submitProjectBtnClicked(name);
    closeProjectModal();
    renderSidebar();
  });
  const closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    closeProjectModal();
  });
  const projectModal = document.getElementById("new-project-modal");
  projectModal.addEventListener("click", (e) => {
    const dialogDimensions = projectModal.getBoundingClientRect();

    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      projectModal.close();
    }
  });
  const form = document.getElementById("todo-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //validate function
    validateTodoFormInput()
    //input fields
    //input values
 
    todoModal.close();
    clearTodoModal();
  });
}
function validateTodoFormInput(){
  //input fields
  const name = document.getElementById("todo-name")
  const description = document.getElementById("description");
  //error spans
  const nameError = document.getElementById("name-error")
  const descriptionError = document.getElementById("description-error");
  const dueError = document.getElementById("due-error")

  if (!name.value){
    nameError.innerHTML = "Name is required"

  }
}
function showError(){
  


}
function clearError(){}
function clearTodoModal() {
  const todoNameField = document.getElementById("todo-name");
  todoNameField.value = "";
}
//if there are no projects, do not render add todo button
function checkProjectExists() {
  const projects = Controller.getProjects();
  if (projects.length === 0) {
    return false;
  } else {
    return true;
  }
}
// call this if no projects are present
function renderEmptyMain() {
  clearMain();
  const main = document.getElementById("main");
  const title = document.createElement("h1");
  title.innerHTML = "Start a new project";
  main.appendChild(title);
}
function setCurrentProject() {
  // when project name clicked, set active project to project.
}
function renderMain(todos, projectName) {
  clearMain();
  if (checkProjectExists() === false) {
    renderEmptyMain();
  } else {
    const main = document.getElementById("main");
    const projectTitle = document.createElement("h1");
    const addBtn = document.createElement("button");
    addBtn.innerHTML = "+";
    activeProjectId =
      //add event listener
      addBtn.addEventListener("click", () => {
        const todoModal = document.getElementById("example-dialog");
        todoModal.showModal();
      });

    projectTitle.innerHTML = `${projectName}`;
    main.appendChild(projectTitle);
    main.appendChild(addBtn);
    if (todos === null) {
      console.log("no todos");
    } else {
      todos.forEach((todo, index) => {
        const todoItem = document.createElement("div");
        const title = document.createElement("div");
        title.innerHTML = todos[index];
        todoItem.appendChild(title);

        main.appendChild(todoItem);
      });
    }
  }
  //TODO 4th may
  //1. clear main
  //2. render project name as title
  //3. render add todo button
  //4. render todos
  //   a.) render todo name
  //   b.) render done button
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
export {
  returnActiveProjectId,
  renderSidebar,
  clearProjects,
  showProjectModal,
  eventListeners,
  renderMain,
};
