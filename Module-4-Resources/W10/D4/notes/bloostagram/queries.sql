-- DELETE FROM albums 
-- WHERE id = 4;

-- SELECT title, caption
-- FROM posts
-- WHERE image_id 
-- BETWEEN 3 
-- AND 9;

-- SELECT title, caption
-- FROM posts
-- WHERE image_id
-- IN (3,4,7,8,9);

-- SELECT title, caption, user_id
-- FROM posts
-- WHERE caption
-- LIKE "%bodacious%";

-- SELECT title, caption, user_id
-- FROM posts
-- WHERE image_id 
-- BETWEEN 3 
-- AND 9
-- ORDER BY user_id ASC, title DESC;

-- SELECT title, caption, id
-- FROM posts
-- LIMIT 4
-- OFFSET 0;

-- SELECT title, caption, id
-- FROM posts
-- LIMIT 4
-- OFFSET 4;

-- SELECT title, caption, id
-- FROM posts
-- LIMIT 4
-- OFFSET 8;

-- SELECT title, caption, id
-- FROM posts
-- LIMIT 4
-- OFFSET 12;

-- SELECT DISTINCT title
-- FROM posts;

-- SELECT DISTINCT image_id
-- FROM posts;

-- SELECT user_id % image_id
-- FROM posts;

SELECT caption AS temp, title AS apple
FROM posts;

SELECT caption, title
FROM posts;