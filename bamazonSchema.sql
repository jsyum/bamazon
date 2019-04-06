DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(20) NOT NULL,
  department_name VARCHAR(20) NOT NULL,
  price DECIMAL default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics", 699.00, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kindle", "Electronics", 129.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tide Pods", "Home", 19.97, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kleenex", "Home", 13.78, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eye Gel", "Beauty", 23.95, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Setting Spray", "Beauty", 6.37, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Copy Paper", "Office", 36.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ink Cartridges", "Office", 45.89, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pressure Cooker", "Kitchen", 68.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Food Scale", "Kitchen", 10.95, 150);


SELECT * FROM products;

