# MVP week 6 - A lord of the rings game

This MVP-Project is putting to use what we have learned during the last 6 weeks of the Full Stack Development course by CodeOp, Barcelona.

It displays a lord of the rings-theme game, in which the player has to guess the right character to a given quote. There are 5 rounds to the game, each correct answer is rewarded with 1 point, each wrong answer with 0 points. In the end there is an overview of the achieved amount as well as a Win/Lose statement.

## Setup

### Node.js

Ensure you have Node.js installed. Eurocapi is developed with Node.js and uses it as the runtime environment. You can check your Node.js version by running node -v in your terminal. If you don't have Node.js installed, you can download it from the <a href="https://nodejs.org/en/download">official website</a>.

### Dependencies

- Run `npm install`in your project directory. This will install server-related dependencies such as `express`.
- `cd client`and run `npm install`. This will install the client dependencies (React and React-Router).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u your-mysql-username -p`
- Create a new database called lotr_game: `create database lotr_game`
- Add an `.env`file to the project folder of this repository containing the
- Run 'npm run migrate' in your project directory.
  -------------------------------------> This will run the init.db file.

- This app uses the-one-to-rule-them-all API. Go to https://the-one-api.dev/ and create a free account (go to "sign up" and you will receive your bearer token). Copy this bearer into your `.env` file.

DB_HOST=localhost
DB_USER=YOURUSERNAME
DB_NAME=lotr_game
DB_PASS=YOURPASSWORD

- In your client folder create a second .env file and add the following:
  API_TOKEN=YOURTOKEN

- In a new terminal window, run `npm run migrate`in the project folder of this repository. This will create a tables 'games'.

### Development

- Run `npm start`in your project directory to start the Express Server on port 5000.
- In another terminal, do `cd client`and run `npm run dev`to start the client in development mode with hot reloading in port 5173.

### Database Design

https://drawsql.app/teams/janizzllles-team/diagrams/copy-of-codeop-week-6-mvp-diagram

### Possible future features

## Technologies Used

- Express.js
- MySQL
- Postman
- Node.js
- The-one-to-rule-them-all API
- Javascript
- React
- React Router
- HTML 5
- CSS
- Bootstrap

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
