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

SELECT *
FROM posts
WHERE id IN (1,5,9);