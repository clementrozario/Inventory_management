# Inventory Management System

## Description

The Inventory Management System is a web-based application designed to manage inventory items. It provides features such as adding new items, deleting items, and buying items. This system helps businesses keep track of their inventory efficiently.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Dependencies] (#Dependencies)
## Features

- Adding new items to the inventory
- Deleting existing items from the inventory
- Buying items from the inventory
- User-friendly interface for managing inventory

## Prerequisites

To run this application locally, you need to have the following installed:

- Node.js
- npm (Node Package Manager)
- MySQL or any other compatible database management system

## Installation

### Clone this repository to your local machine:
git clone https://github.com/clementrozario/Inventory_management.git

### Navigate to the project directory:
cd inventory-management

### Install dependencies:
npm install


### Set up your database:

1. Create a MySQL database for the application.
2. Configure the database connection by editing the `config/database.js` file in the project directory.

### Start the server:
npm start


## Usage

- Once the server is running, access the application through a web browser.
- Users can add new items to the inventory by filling out the item details form.
- Users can delete items from the inventory by clicking the delete button next to each item.
- Users can buy items from the inventory by clicking the buy button next to each item.

## Code Structure

- `config/`: Directory containing database configuration files.
- `controllers/`: Directory containing controller files for handling user requests.
- `models/`: Directory containing Sequelize models for database tables.
- `views/`: Directory containing HTML files for rendering the frontend.
- `app.js`: Entry point of the application.

## Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **body-parser**: Middleware for parsing incoming request bodies.
- **ejs**: Embedded JavaScript templating engine.
- **mysql2**: MySQL client for Node.js, supporting prepared statements, connection pooling, and more.
- **sequelize**: Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.





