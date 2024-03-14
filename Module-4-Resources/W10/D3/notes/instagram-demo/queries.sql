-- SELECT * FROM users;

-- SELECT username, email FROM users;

-- SELECT image_url, caption, title
-- FROM posts
-- WHERE user_id = 1;

-- SELECT caption, title
-- FROM posts
-- WHERE title LIKE '%Title' AND user_id = 1;

-- SELECT caption, title
-- FROM posts
-- WHERE caption LIKE 'Another%' AND user_id = 1;

-- SELECT caption, title
-- FROM posts
-- WHERE user_id IN (1,3,5);

-- SELECT body 
-- FROM comments
-- WHERE post_id BETWEEN 4 AND 10;

-- DELETE FROM posts
-- WHERE id = 3;

-- UPDATE users
-- SET username = 'swilkey'
-- WHERE id = 1;

select *
from users
join posts;