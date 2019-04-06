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
        connection.query(
          `SELECT stock_quantity FROM products WHERE item_id=${
            answer.productID
          };`,
          function(err, result) {
            if (err) throw err;
            console.log("INITIAL STOCK QUANTITY", result[0].stock_quantity);
            let stockQty = result[0].stock_quantity - answer.amount;
            if (stockQty < answer.amount) {
              console.log("Insufficient stock!");
            } else {
              console.log("RESULTING STOCK QUANTITY", stockQty);
              connection.query(
                `UPDATE products SET stock_quantity=${stockQty} WHERE item_id=${
                  answer.productID
                };`,
                function(err, res) {
                  if (err) throw err;
                }
              );
            }
          }
        );
      });
  });
}
