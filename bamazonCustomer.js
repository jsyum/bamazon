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
  start();
});

//function that will display the inventory
function start() {
  connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;
    console.log(result);

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
        console.log(
          "Okay! You are buying " +
            answer.amount +
            " units of product number " +
            answer.productID
        );
        "UPDATE products SET ? WHERE ?",
          [
            {
              // stock_quantity: stock_quantity - answer.amount
              stock_quantity: "10"
            },
            {
              id: answer.productID
            }
          ];
      });
  });
}
