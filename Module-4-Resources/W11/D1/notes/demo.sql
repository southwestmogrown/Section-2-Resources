DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS instructors;


CREATE TABLE students (
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

CREATE TABLE instructors (
    first_name VARCHAR(30) UNIQUE,
    last_name VARCHAR(30)
);
