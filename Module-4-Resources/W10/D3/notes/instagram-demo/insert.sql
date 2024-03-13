INSERT INTO users (username, first_name, last_name, email, user_password, created_at, updated_at)
VALUES ("shanew", "shane", "wilkey", "shane@wilkey.com", "supersecretpassword", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ("brirob", "briana", "robinson", "bri@robinson.com", "verysecretpassword", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO posts (user_id, image_url, caption, title, created_at, updated_at)
VALUES (1, "some.url.com", "This is a caption!", "New Post", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, "fake.url.com", "Another fanciful caption!", "Great Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, "fake.url.com", "Another wonderful caption!", "Sweet Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, "fake.url.com", "Another spectacular caption!", "Ok Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, "fake.url.com", "Another bodacious caption!", "Whatever Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, "fake.url.com", "Another cool caption!", "Words Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, "fake.url.com", "Just some text!", "Blank Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, "fake.url.com", "Another tubular caption!", "Some Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, "fake.url.com", "Another radical caption!", "Another Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, "fake.url.com", "Another astounding caption!", "Yet Another Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, "fake.url.com", "Another stellar caption!", "Testing", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, "fake.url.com", "Another great caption!", "Greetings", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, "fake.url.com", "Another bountiful caption!", "Hello World", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comments (user_id, post_id, body, created_at, updated_at)
VALUES (2, 1, "This is great", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 5, "This is nice", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 10, "Cool Pic", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 5, "How is this possible?", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO likes (user_id, post_id, created_at, updated_at)
VALUES (1, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 12, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO follows (follower_id, followee_id, created_at, updated_at)
VALUES (1,2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2,1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);