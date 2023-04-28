//an area to test and experiment with quokka

//first I need a factory function to create a list of projects
//each project will have property of name and a todoList Array
function createProject(name, todoList) {
    return { name, todoList };
  }
  function projectCreator() {}
  
  /*/Secondly, I will create a todoItem object creator in the form of a factory 
  function. This will take in arguments: name string, description string, priority int,due int
  */
  function createTask(name, description, priority, due, done) {
    return { name, description, priority, due, done };
  }
  
  const workout = createTask("workout", "lift", 2, "today", "yes");
  
  //find a way to add these to local storage
  
  
  //CONTROLLER
  
  //new project button
  function newProjectButton(){
    /*
      
    */
  }
  function newProject(name){
    /* 
    *invoke this function when submit is clicked or press enter 
    *create element with name
      */
  }
  
  //DISPLAY

  