CREATE DATABASE pernTodo;

CREATE TABLE todos(
    todo_id serial PRIMARY KEY,
    description VARCHAR(255)
);