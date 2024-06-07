-- SELECT image_url, rating
-- FROM images
-- JOIN ratings
-- ON images.id = ratings.image_id
-- WHERE image_id = 4
-- ORDER BY rating;

-- SELECT AVG(rating) AS OverallAverage 
-- FROM ratings
-- WHERE image_id = 4;

-- SELECT COUNT(*) FROM posts;
-- SELECT COUNT(*) FROM comments;
-- SELECT COUNT(*) FROM likes;
-- SELECT COUNT(*) FROM images;

-- SELECT MIN(rating) FROM ratings WHERE image_id = 8;
-- SELECT MAX(rating) FROM ratings WHERE image_id = 8;

-- Deals with integers
-- SELECT SUM(rating) FROM ratings;
-- -- Deals with floating point numbers
-- SELECT TOTAL(rating) FROM ratings;

-- SELECT AVG(rating), SUM(rating), MIN(rating), MAX(rating)
-- FROM ratings;

-- SELECT image_id, AVG(rating), rating
-- FROM ratings;

SELECT image_id, AVG(rating)
FROM ratings
WHERE image_id IN (1,3,5,6)
GROUP BY image_id
HAVING AVG(rating) > 4;

-- SELECT users.username, posts.title
-- FROM users
-- JOIN posts
-- ON users.id = posts.user_id
-- ORDER BY users.username, posts.title;

-- SELECT users.username, COUNT(*)
-- FROM users
-- JOIN posts
-- ON users.id = posts.user_id
-- GROUP BY users.id;