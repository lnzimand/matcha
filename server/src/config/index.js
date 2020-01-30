const express = require("express");
const mysql = require("mysql");
const config = require("./config");

const app = express();
const connection = mysql.createConnection({
    host: "localhost",
    user: "lnzimand",
    password: "palesa"
});

connection.connect((error) => {
    if (error) {
        console.log("Error");
    } else {
        console.log("Connected");
    }
  });

function createDatabase() {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.DB_NAME}`, (error, results, fields) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("DATABASE successfully created");
        }
    });
}

function selectDatabase() {
    connection.query(`USE ${config.db.DB_NAME}`, (error, results, fields) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("DATABASE selected");
        }
    })
}

function createTable() {
    let sqlQuery = `CREATE TABLE IF NOT EXISTS \`users\` (
        \`membership_number\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        \`first_name\` VARCHAR(150) NOT NULL,
        \`surname\` VARCHAR(150) NOT NULL,
        \`username\` VARCHAR(50) NOT NULL,
        \`email\` VARCHAR(100) NOT NULL,
        \`password\` VARCHAR(255) NOT NULL,
        UNIQUE(\`email\`, \`username\`))
      ENGINE = InnoDB`
    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("TABLE successfully created");
        }
    })
}

async function connectDatabase() {
    await createDatabase();
    await selectDatabase();
    createTable();
}

connectDatabase();

app.listen(3000);