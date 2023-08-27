# React + Node Simple CRUD

## Create MySQL Database and Table
```sql
CREATE DATABASE react_node_crud;

USE react_node_crud;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    contact VARCHAR(20),
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Cloning the project
```Bash 
  git clone https://github.com/rodrigoqueiroz12/react-node-crud.git

  cd ./react-node-crud
```

## Update the Backend .env file
```
  SERVER_PORT=YOUR_PORT

  DATABASE_HOST=localhost
  DATABASE_USER=DATABASE_USER
  DATABASE_PASSWORD=DATABASE_PASSWORD
  DATABASE_NAME=DATABASE_NAME
```

## Running Backend

```bash
  cd ./backend

  npm install

  npm start
```

## Running Frontend

```bash
  cd ./frontend

  npm install

  npm run dev 
```
    