SET SQL_SAFE_UPDATES = 0;

DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Taylor Acoustic Guitar", "Musical Instruments", 899, 7 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Roland Micro Cube Amplifier", "Musical Instruments", 160, 10 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (22, "D'Addario Acoustic Guitar Strings", "Musical Instruments", 7, 25 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (29, "FoodSaver Vacuum Sealer", "Kitchen", 125, 6 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (144, "Shun Cutlery Chef’s Knife", "Kitchen", 200, 21 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (214, "Breville Food Processor", "Kitchen", 275, 10 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (314, "Colavita Extra Virgin Olive Oil", "Grocery", 15, 30 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (251, "BELAZU Rose Harissa", "Grocery", 10, 10 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (255, "HP Brown Sauce Original", "Grocery", 6, 35 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (256, "Colman's English Mustard", "Grocery", 5, 15 );
















