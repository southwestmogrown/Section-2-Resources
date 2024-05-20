DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS follows;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(50) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER,
    image_url VARCHAR(255),
    caption TEXT,
    title VARCHAR(150),
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER,
    post_id INTEGER,
    body TEXT,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER,
    post_id INTEGER,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE follows (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    follower_id INTEGER,
    followee_id INTEGER,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);



