//Here the program will handle the data

// CRUD
// create Project -- set local storage
// Read Project
// update project -- set local storage
// delete project -- set local storage

// create todo (project, todo) -- set local storage
// read todo
// update todo  -- set local storage
// delete todo  -- set local storage
let projects = [
  { name: "projectTest", todos: [1, 2, 3] },
  { name: "workout", todos: ["lift", "run"] },
];
//factory function to create project objects
function constructProject(name, todos) {
  return {
    name,
    todos,
  };
}
//add project object to projects array
function addProject(project, projects) {
  projects.push(project);
}

// export {constructProject};
export { projects, constructProject, addProject };
