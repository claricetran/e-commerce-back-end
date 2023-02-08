# E-Commerce Back End

## Description

This project is a back end for an e-commerce site. It is a modification of a working Express.js API configured to use Sequelize to interact with a MySQL database. In creating this back end I was able to practice using an ORM to have API routes perform RESTful CRUD (Create, Read, Update and Delete) operations. I was also able to create a database and table using Sequelize instead of many lines of MySQL code.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)
-   [Questions](#questions)

## Installation

To try running this server yourself, follow these steps:

1. Clone this repo.
2. Open the integrated terminal and run `npm i` to install the needed dependencies.

## Usage

To use this, follow these steps:

1. Edit the .env.EXAMPLE file to be a .env file and fill out the DB_USER and DB_PASSWORD with your user and password for MySQL.
2. Run `mysql -u [your username] -p` and enter your password when prompted.
3. Run `SOURCE db/schema.sql` to create the ecommerce database.
4. Run `quit` once the database has finished creating.
5. Run `npm run seed` to create the tables for the database with prefilled data.
6. Run `npm start` to run the server of the database.

Then using an application like Insomnia, you're able to view the CRUD functionality.

![usage image]()

## Credits

Thanks to [Xandromus](https://github.com/Xandromus) for the starter code.

## License

No license.

## Questions

If you have any questions, checkout my [GitHub](https://github.com/claricetran). <br/>
Alternatively, you can email me at <tran.clarice@gmail.com>
