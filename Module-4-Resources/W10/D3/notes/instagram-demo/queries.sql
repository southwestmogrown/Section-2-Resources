-- select cols  from  table
-- SELECT  *    FROM <table-name>

-- SELECT username, email FROM users;

-- SELECT title, caption FROM posts;


-- SELECT title, caption 
-- FROM posts
-- WHERE userId = 1
-- AND imageId = 6
-- OR caption = "Wooooooooooooooooooooooooooooo!";


-- SELECT *
-- FROM posts
-- WHERE title LIKE "Fourth%";

-- SELECT *
-- FROM posts
-- WHERE id IN (1,5,9);

-- DELETE FROM posts; -- this will delete all rows without confirmation

-- DELETE FROM posts WHERE id = 3;

-- DELETE FROM posts WHERE title LIKE "Fourth%";

-- DELETE FROM posts WHERE userId = 1;

-- DELETE FROM posts WHERE title LIKE "%Title";

-- SELECT * FROM posts 
-- WHERE imageId in (1, 5, 3, 7, 4)
-- ORDER BY userId, title;

-- UPDATE <table name> 
-- SET <column name> = <value> 
-- WHERE <condition>;

UPDATE posts
SET caption = "Here we are updating this record"
WHERE id = 5;

-- UPDATE posts
-- SET caption = "Here we are updating this record"; -- will update ALL records