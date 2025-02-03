# My-Notes-App

## Description

Welcome to My Notes app. This app is to create, update, read and delete the notes. I've used React JS for development. This project is showcase of using the crud operation with React JS, Material UI, JSON server for backend and axios for making the HTTP request. I've used React Router for routing the pages in the application.
The notes categories to create notes are as below:

1. Todos
2. Money
3. Reminder
4. Work

## Prerequisits

### Install Node JS and NPM(Node Package Manager)

Refer to https://nodejs.org/en/ to install nodejs and npm

## Cloning and Running the application in system

Clone the project into local system

1. Firstly, install the packages to the directory where you've cloned this application. You can use below command.

   ```bash
   npm install
   ```

2. Start the JSON server by using below command.

   ```bash
   npx json-server --watch data/db.json --port 8000
   ```

3. To run this app use below command which will run and start the app. You navigate to this URL from the web browser to use the app: http://localhost:3000
   ```bash
   npm start
   ```

## Application Design and working

#### Components

1. Side drawer: This shows the links for My notes and Create a note
2. Navbar: This component shows the nabar with logged in user and his picture icon.
   ##### Note: This project doesn't have login feature as of now.
3. Main component: This shows the lists of the notes with details.
4. Card component: This show the actual content of the notes. Action options as Edit and Delete the notes.

#### HTTP client

axios library is used to make HTTP calls.

#### URL

This application has three urls as below

1. / is for homepage
2. /create is to create a note.
3. /edit/id is to edit a note.

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material UI** : Refer to https://mui.com/material-ui/ to understand the Material UI
