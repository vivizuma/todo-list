# todo-list

one-pager

This is a todo app which allows you to:

create tasks with: 
* switch between task pages with hotkets 1-5
* create hotkey page with a hotkey
* do everything with hotkeys?
* descriptions
* due date
* priority

You will be able to create separate project 'pages' in which to create 
relevant lists of tasks. there will be a task overview page which shows ALL tasks
in one location.


input -> computation -> output

user inputs:

* new project
* new task -->
    > due date
    > priority
    > description
    > close task

computation:

* todo task factory
    > with props:
        > task title
        > task description
        > task priority
    > with methods:
        > edit title
        > edit description
        > edit priority
        > close task

I will use the MVP (model, view, controller) pattern in this project. 

MODEL will take care of the data, the todo lists, todo items, todo item properties. These will be stored in local-storage for now.

VIEW will render all the relevant parts to the user. Display the todo lists, tasks and buttons.

CONTROLLER will handle the user input and talk to the model and view modules as needed.
    >functions: 
    * 

