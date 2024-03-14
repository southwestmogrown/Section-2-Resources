-- SELECT posts.caption, images.id, images.image_url
-- FROM posts
-- JOIN images 
-- ON posts.image_id = images.id
-- WHERE image_id 
-- BETWEEN 3 
-- AND 11;

-- SELECT albums.name, images.image_url
-- FROM albums
-- JOIN album_images
-- ON albums.id = album_images.album_id
-- JOIN images
-- ON images.id = album_images.image_id
-- WHERE albums.name IN ('album 1', 'album 4');


-- SELECT caption, title
-- FROM posts
-- WHERE title LIKE "%TitLe"

-- SELECT * FROM users ORDER BY username ASC; -- default behavior
-- SELECT * FROM users ORDER BY username DESC;

-- SELECT posts.caption, images.id, images.image_url
-- FROM posts
-- JOIN images 
-- ON posts.image_id = images.id
-- WHERE image_id 
-- BETWEEN 3 
-- AND 11
-- ORDER BY posts.caption, images.id
-- DESC;

-- SELECT posts.caption, images.id, images.image_url
-- FROM posts
-- JOIN images 
-- ON posts.image_id = images.id
-- ORDER BY posts.caption, images.id
-- DESC
-- LIMIT 4
-- OFFSET 4;

-- SELECT DISTINCT albums.name
-- FROM albums;

-- select image_id + 1 from album_images;

SELECT posts.caption AS pc, images.id AS imid, images.image_url AS imurl
FROM posts
JOIN images 
ON posts.image_id = imid
ORDER BY pc, imurl
DESC
LIMIT 4
OFFSET 4;