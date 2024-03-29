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
    //console.log("Test");

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);

        inquirer
            .prompt([

                //COMPLETE: We need to prompt the user for the id they'd like to choose, so we need to use the inquirer module here. So displays list of items.
                {
                    name: "choice",
                    type: "rawlist",
                    message: "What is the id of the product you'd like to buy? \n(Please use up and down arrows to scroll through list, once item selected, press 'Enter')",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            var id = res[i].item_id
                            var product = res[i].product_name

                            choiceArray.push(id);
                        }
                        return choiceArray;

                    },

                },

                //COMPLETE: Need a message asking the user "How many units of the product would you like to buy?"

                {
                    name: "quantity",
                    type: "input",
                    message: "How many units of the product would you like to buy?",
                    //Might need to do a validate here to make sure user choose a number.
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;

                    }

                }



                //Checking here to see if the user quantity is more then what is currentyl in stock.    
            ])
            .then(function (answer) {
                //console.log(answer.choice)
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].item_id === answer.choice) {
                        chosenItem = res[i];
                    }

                }

                //console.log(chosenItem)

                //console.log(answer)
                var initialQuantity = chosenItem.stock_quantity
                
                if ((initialQuantity - parseInt(answer.quantity)) > 0) {
                    connection.query(
                        "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
                        [initialQuantity - parseInt(answer.quantity), chosenItem.item_id], function(err, res) {

                            if (err) throw err;

                            // res
                            //console.log('Your order has been placed')
                        }
                    )
                    //TODO: Not sure if the quantity will be updated correctly, not sure if I need to write a line of code to subtract from total in stock.

                    //TODO: Should I just display total in this function, or display in startCheckout function? Might need to display the total here because of the scope
                    console.log("Please continue to checkout");
                    console.log("Your total is: $" + answer.quantity * chosenItem.price);
                    startCheckout(answer.quantity, chosenItem.item_id);



                }
                else {
                    
                    console.log("Sorry, there is not enough in stock to complete your order, please try again");
                    
                    startDisplay();

                }

                
            });

            

    });



}



function startCheckout() {
    
    console.log("Thank you for your purchase!");

    connection.end();

    //TODO: Maybe prompt the user to start another purchase or exit?
    //startDisplay();

    //Here I'll need to add a connection.query ("UPDATE products SET ? WHERE ?") to subtract the stock quantity and update how many units are left.

    //TODO: Also, I need to have the total_amount variable to told the price of the all the items puchase, so need + operand.
}

