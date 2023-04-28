import * as Controller from "./controller.js";

// render
function clearProjects() {
  const projectsContainer = document.getElementById("dynamic-sidebar");
  projectsContainer.innerHTML = "";
}
function render() {
  clearProjects();
  let projects = Controller.getProjects();
  //render projects
  projects.forEach((item, index) => {
    //get parent element
    const sidebar = document.getElementById("static-sidebar");
    //create elements
    const projectContainer = document.createElement("div");
    const projectName = document.createElement("button");
    const projectDelBtn = document.createElement("button");
    //set attributes
    projectContainer.setAttribute("data-index", index);
    projectDelBtn.setAttribute("data-index", index);
    // set classes for styling
    projectContainer.classList.add("project");
    // set content
    projectName.innerHTML = item.name;
    projectDelBtn.innerHTML = "X";
    // delete button event listener
    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectDelBtn);
    sidebar.appendChild(projectContainer);
  });
}

export { render, clearProjects };
