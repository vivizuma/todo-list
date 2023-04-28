//Buttons
// New project button
import * as Model from "./model.js"
import * as View from "./view.js"

function getProjects(){
    return Model.projects
}


function newProject(){
    // on + click
    // new project modal popup in view
    //user inputs name
    //clicks submit or presses enter
    //comes back to controller
    //controller asks model to push new project to array
    // model stores in local storage
    // 
    
}
function removeProject(){
    //render are confirmation modal
    //on confirm call controller.removeProject(index)
}
export {getProjects}