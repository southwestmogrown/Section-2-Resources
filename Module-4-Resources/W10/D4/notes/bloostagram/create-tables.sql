PRAGMA foreign_keys = ON;
.mode box = ON;
DROP TABLE IF EXISTS album_images;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS users;

-- TODO
-- Handle foreign key constraint errors

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(50) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE images (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    image_url NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER,
    image_id INTEGER,
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

CREATE TABLE albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER,
    name VARCHAR(100)
);

CREATE TABLE album_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    album_id INTEGER REFERENCES albums(id),
    image_id INTEGER REFERENCES images(id)
);