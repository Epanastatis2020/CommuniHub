# CommuniHub
An online community hub/portal for strata bodies/owners’ corporations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Project Overview](#Project-Overview)
* [User Story](#User-Story)
* [Link to the App](#Link-to-the-App)
* [About this project](#About-this-project)
* [Tools](#Tools)
* [Screenshots](#Screenshots)
* [Issues](#Issues)
* [Author](#Author)
<br>

## Project Overview
Communihub is an online community hub/portal for strata bodies/owners’ corporations which provides users a forum to discuss issues affecting their lot or the compound at large, a calendar for adding and seeing important events, a direct chat service and a library of important documents. At the present time, functionality is restricted to just the forum, while future updates will provide the remaining functionality.
<br>

## User Story
AS A homeowner
I WANT to be able to manage my property's strata affairs easily and with transparency
SO THAT any issues can be quickly addressed with a digital record
<br>

## Link to the App
Please visit the <a href="https://github.com/Epanastatis2020/CommuniHub">GitHub repository</a> for a copy of the code for this project and application.<br>
Please visit the <a href="https://communihub.herokuapp.com//">CommuniHub </a>application, hosted on Heroku.
<br>

## About this project
### **How the app works**
This is a MERN fullstack app, giving users the ability to register and sign in, view and create topics, post and delete their replies in topics, and manage their user Profile. The login, registration and authentication is managed by Firebase, and while Firebase creats the required user records these are also duplicated in MongoDB in order to create the necessary links between users and other database records such as threads or replies.
<br>
Once the user has completed the register form, they can login to the app and are met with the dashboard. This page allows:
* Users to see the latest announcement (currently hardcoded)
* Users to see the latest post (currently hardcoded)
* Users to see a table with all the topics/threads
* Users to search the table with all the topics/threads
* Users to click to view a particular topic/thread
* Users to create a new topic/thread
* Users to access the drawer sidebar, which includes links to the Dashboard, Inbox (feature pending), Calendar (feature pending) and Library (feature pending)
* Users to access the profile icon which includes links to the Profile and Inbox (feature pending)
<br>
Once a topic/thread is clicked on or created, the user is able to see or create new replies to that topic or thread. The user can delete their own replies in this section, or "upvote" and "downvote" the replies of others, showing their approval or disapproval.
<br>
On the Profile page, a user can update their display name.
<br>
Lastly, the user can logout of the app and be returned to the homepage.
<br>

### **How the app was built** 
This app uses MongoDB, Express, Node.js and React to render a CRUD (Create, Read, Update, Delete) application which has the ability to:
###
POST:
* add a new user to the database
* add a new topic to the forum
* add a new reply to a topic
###
GET: 
* getting the information from the database and Firebase to verify a user's email and password as valid
* getting a user's display name from the database
* getting all topic records from the database
* getting a specific topic record from the database
* getting all posts from the database
* getting specific posts from the database
* getting a specific post from the database
###
PUT:
* updating a user's display name in the database
###
DELETE:
* delete a post from the database
###
This app uses a MVC design pattern where Node and MongoDB are used to query and route data in the app. React is used to generate the HTML primarily using Material-UI & Google Fonts.
<br>

### **Tools**
* [Visual Studio Code](https://code.visualstudio.com/) - The editor of choice
* [GitHub](https://github.com/) to share the code
* [Heroku](https://www.heroku.com/) to host the site
* [Postman](https://web.postman.co) to test the API routes

* **Backend Technology:**
  * [Axios](https://www.npmjs.com/package/axios)
  * [bycrypt.js](https://www.npmjs.com/package/bcryptjs)
  * [body-parser](https://www.npmjs.com/package/body-parser)
  * [cors](https://www.npmjs.com/package/cors)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [express](https://www.npmjs.com/package/express)
  * [firebase](https://www.npmjs.com/package/firebase-admin)
  * [lodash](https://www.npmjs.com/package/lodash)
  * [MongoDB](https://www.mongodb.com/)
  * [Mongoose](https://mongoosejs.com/)
  * [morgan](https://www.npmjs.com/package/morgan)
  * [NodeJS](https://nodejs.org/en/)
  * [path](https://www.npmjs.com/package/path)
  
* **Frontend Technology:**
  * CSS
  * [firebase](https://firebase.google.com/)
  * HTML
  * Javascript
  * [mui-datatables](https://www.npmjs.com/package/mui-datatables)
  * [React](https://reactjs.org/)
  * [react-cookie](https://www.npmjs.com/package/react-cookie)
  * [react-dom](https://www.npmjs.com/package/react-dom)
  * [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  * [react-toastify](https://www.npmjs.com/package/react-toastify)
  * [styled-components](https://www.npmjs.com/package/styled-components)
  * [timeago-react](https://www.npmjs.com/package/timeago-react)
  * [timeago.js](https://www.npmjs.com/package/timeago.js)
<br>

## Screenshots

#### **Landing Page** 
![Landing](https://user-images.githubusercontent.com/65388616/107901286-5c0c8000-6f97-11eb-9d05-6977449d5a21.PNG)

#### Login
![Login](https://user-images.githubusercontent.com/65388616/107901287-5c0c8000-6f97-11eb-84b4-a549167db8ab.PNG)

#### Register 
![Register](https://user-images.githubusercontent.com/65388616/107901290-5d3dad00-6f97-11eb-8832-9c09f5261418.PNG)

#### Dashboard 
![Dashboard](https://user-images.githubusercontent.com/65388616/107901284-5a42bc80-6f97-11eb-9fe5-d658cf27f8e9.PNG)

#### Profile 
![Profile](https://user-images.githubusercontent.com/65388616/107901288-5ca51680-6f97-11eb-8ef1-aa6f73bc7f89.PNG)

#### Topic 
![Topic](https://user-images.githubusercontent.com/65388616/107901291-5d3dad00-6f97-11eb-8433-aab1c5684db4.PNG)
<br>

## Licence
- [MIT License](https://opensource.org/licenses/MIT)
<br>

## Issues
If you find an issue while using the app or have a request, log the issue or request [ here](https://github.com/Epanastatis2020/CommuniHub/issues). These will be addressed in a future code update.
<br>
<hr>

## Author
* **CON ANGELAKIS** <br>
  Contact information:
  con.angelakis@gmail.com <br>
  GitHub link:
  [Epanastatis2020](https://github.com/Epanastatis2020)