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
    first_name VARCHAR(50),
    last_name VARCHAR(100),
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
    updated_at DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (image_id)  REFERENCES images(id)
);

CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id),
    body TEXT,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id),
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(100)
);

CREATE TABLE album_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    album_id INTEGER REFERENCES albums(id),
    image_id INTEGER REFERENCES images(id)
);
