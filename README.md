# To Do List in React.js

## Table of contents
* [Demo](#demo)
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Available scripts](#available-scripts)

## Demo
Check it out! ---> https://holaa-olaa.github.io/todo-list-react/

## General info

A simple application that allows you to convert exchange rates based on constant variables specified in code. It uses functions in JavaScript allowing for quick and accurate calculations. Graphic design using CSS.

Created for the course: YouCode II Frontend Developer


## How it works

1. Enter the task content, then add with the button or press "Enter". The task will be moved to the list below, and the input will be cleared and focus set on it.

![Adding new task](images/readmeGif1.gif)

2. Use the icons on the right and left of each task to modify the list by marking the selected task as completed or deleting it. Completed task will be crossed out, deleted task will disappear from the list.

![Marking tasks as completed or removing tasks](images/readmeGif2.gif)

3. Use the "Ukryj ukończone" button to hide all completed tasks, then "Pokaż ukończone" to show them again. 
Use the "Ukończ wszystkie" button to mark each task as completed. Once this option is used, the button is disabled from use.

![Addictional buttons usage](images/readmeGif3.gif)


## Technologies
Project is created with:
* HTML
* CSS (BEM naming convetion)
* Grid
* FlexBox
* ES6+
* Media queries
* Create React App
* Babel
	
## Setup
To run this project just open the link in your browser. Task list is generated based on information entered by user. User can edit the list by adding new tasks, deleting them or marking as done (with possibility of unmarking).

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
