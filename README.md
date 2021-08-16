# Assignment: Backend Development (Session 2)
This is a simple MVC to demonstrate the use of PostgreSQL database with the Express framework.
To view in LocalHost:
1. Add database details into a .env file following the provided example (.env.example)
2. Enter `npm run install` and `node index.js` into the Terminal
3. Navigate to localhost:5000 in the browser

## Features
When user attempts to login, the submited credentials are checked against a database for validity.
If provided credential are valid (match a user in the database i.e. one of the credentials listed in homepage) user is taken to a page displaying all their information

## Learnings
- env variables must be prepended with 'POSTGRES_' to work
- How to import SQL Files in NodeJS
- Can't create table named 'User' as it's a reserved word
- SQL query column value needs to be wrapped in single quotes (and not double quotes)
- How to name and define column value constraints, and how to use regex for constraints
- How to render a html file and then include data from the DB within the same page without a template engine

## Screenshots
![image](https://user-images.githubusercontent.com/51464365/129555602-732f5286-512a-4f1d-8bf2-41f773ae905f.png)
![image](https://user-images.githubusercontent.com/51464365/129555658-2e20d453-6332-4c7a-ae2b-5c0dbddc90c4.png)

