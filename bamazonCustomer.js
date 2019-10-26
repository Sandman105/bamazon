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

//Currently displaying table of items that are currently in stock
function startDisplay() {
    console.log("Test");

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        
        
        
        inquirer
        .prompt ([
            
            //COMPLETE: We need to prompt the user for the id they'd like to choose, so we need to use the inquirer module here.
            {
                name: "choice",
                message: "What is the id of the product you'd like to buy?",
                
            },
            //COMPLETE: Need a message asking the user "How many units of the product would you like to buy?"
            
            {
                name: "choice",
                message: "How many units of the product would you like to buy?"
            }
            
        ])
        //console.log();
    });

    

}

//function anotherDisplay() {
    //connection.end();

//}