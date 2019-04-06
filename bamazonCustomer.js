// require MySQL and Inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

// connect to the MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "",
  database: "bamazon"
});

// connect to the mysql server and run function that will prompt user
connection.connect(function(err) {
  if (err) throw err;
  display();
});

//function that will display the inventory
function display() {
  connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;
    console.log(result);
    start();
  });
}

// function that prompts user what action they should take
function start() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the ID# of the product you'd like to buy?",
        name: "productID"
      },
      {
        type: "input",
        message: "How many would you like to buy?",
        name: "amount"
      }
    ])
    .then(function(answer) {
      // get the information of the chosen item
      var chosenItem;
      connection.query("SELECT * FROM products", function(err, result) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.productID) {
            chosenItem = results[i];
          }
        }

        if (answer.amount > chosenItem.stock_quantity) {
          console.log("insufficient stock");
        } else {
          console.log(
            "Okay! You are buying " +
              answer.amount +
              " units of product number " +
              answer.productID
          );
        }
      });
    });
}
