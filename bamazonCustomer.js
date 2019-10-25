//First thing to do is download the module.

var mysql = require("mysql");
var inquirer = require("inquirer");

//So from workbench we need to provide the connection information. This information is common for all languages, Java, C, etc. This returns a live connection and is stored in the variable. Database has to be created before you connect.
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "kershaw19",
    database: "bamazon_db"
});

//Then you call the connection to make the actual connection. And if there is any error while connecting, it will let us know. If it's successful it will provide a threadID.
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startDisplay();
});

function startDisplay() {
    inquirer
    .prompt (
        {


        }
        )
}