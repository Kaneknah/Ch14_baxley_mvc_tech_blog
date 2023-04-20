# ch14_baxley_mvc_tech_blog

## Table of Contents:

- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

## Description

This project was the creation of a CMS-style Blog site that utilizes MVC paradigm and Handlebars as well as Sequelize as the ORM. The App also utilizes express-session npm package for authentication. this app is incomplete but enders some very basic front end handlebars with no CSS styling.

![Alt text](./public/images/screenshot.jpg)

## Acceptance Criteria

GIVEN a CMS-style blog site<br>
WHEN I visit the site for the first time<br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in<br>
WHEN I click on the homepage option<br>
THEN I am taken to the homepage<br>
WHEN I click on any other links in the navigation<br>
THEN I am prompted to either sign up or sign in<br>
WHEN I choose to sign up<br>
THEN I am prompted to create a username and password<br>
WHEN I click on the sign-up button<br>
THEN my user credentials are saved and I am logged into the site<br>
WHEN I revisit the site at a later time and choose to sign in<br>
THEN I am prompted to enter my username and password<br>
WHEN I am signed in to the site<br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out<br>
WHEN I click on the homepage option in the navigation<br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created<br>
WHEN I click on an existing blog post<br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment<br>
WHEN I enter a comment and click on the submit button while signed in<br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created<br>
WHEN I click on the dashboard option in the navigation<br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post<br>
WHEN I click on the button to add a new blog post<br>
THEN I am prompted to enter both a title and contents for my blog post<br>
WHEN I click on the button to create a new blog post<br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post<br>
WHEN I click on one of my existing posts in the dashboard<br>
THEN I am able to delete or update my post and taken back to an updated dashboard<br>
WHEN I click on the logout option in the navigation<br>
THEN I am signed out of the site<br>
WHEN I am idle on the site for more than a set time<br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments<br>

## Installation

A user will need to instal the package.json modules in order to run this application. The user may do this by simply running <b>npm i</b> in the terminal. This will install all modules as well as the webpack.config documents. The user will then need to input the seeds by entering <b> npm run seed</b>.

## Usage

The user will be presented with a home page with the ability to see posts and comments connected to them. the user will have the ability to log in to see their own dashboard, where they may enter their own posts or delete them as needed. 

## Contribution

N/A

## Testing

No testing was utilized for this project

## Credits

### Team Members:

- James Baxley | Github: [Kaneknah](https://github.com/Kaneknah)

### Technologies utilized:

- express-handebars
- Express.js
- Sequelize
- Node.js
- MySQL2
- dontenv 
- bcrypt
- Express-session

### GitHub Link: https://github.com/Kaneknah/ch14_baxley_mvc_tech_blog

### Heroku Link: https://kaneknah.github.io/ch14_baxley_mvc_tech_blog/

## License

Apache License 2.0
...
